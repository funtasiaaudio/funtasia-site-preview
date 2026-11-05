const search=document.querySelector('#product-search');const cards=[...document.querySelectorAll('[data-product-name]')];const count=document.querySelector('#product-count');const unit=count?.dataset.unit||'';const filters=[...document.querySelectorAll('[data-filter]')];let active='all';function filter(){const q=(search?.value||'').toLocaleLowerCase().trim();let n=0;for(const c of cards){const visible=c.dataset.productName.toLocaleLowerCase().includes(q)&&(active==='all'||c.dataset.category===active);c.hidden=!visible;if(visible)n++;}if(count)count.textContent=n+' '+unit;const empty=document.querySelector('#empty-state');if(empty)empty.hidden=n!==0;}search?.addEventListener('input',filter);for(const b of filters)b.addEventListener('click',()=>{active=b.dataset.filter;for(const x of filters)x.setAttribute('aria-pressed',String(x===b));filter();});for(const b of document.querySelectorAll('.share-btn'))b.addEventListener('click',async()=>{const url=b.dataset.shareUrl;const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(url);if(status)status.textContent=status.dataset.copied;}catch{window.prompt('Copy URL',url);}});filter();

/* Accessible native dialog with original Audio product descriptions. */
const details=window.FUN_PRODUCT_DETAILS||{};
const locale=document.documentElement.lang||'en';
const words={ja:['詳しく見る','製品紹介','元サイトで見る','閉じる','元サイト掲載の英語説明'],en:['Details','Product details','Original page','Close','Original English description'],de:['Details','Produktdetails','Originalseite','Schließen','Englische Originalbeschreibung'],fr:['Détails','Présentation','Page originale','Fermer','Description originale en anglais'],ru:['Подробнее','О продукте','Оригинальная страница','Закрыть','Оригинальное описание на английском']}[locale]||['Details','Product details','Original page','Close','Original English description'];
const dialog=document.createElement('dialog');dialog.className='product-dialog';dialog.setAttribute('aria-labelledby','product-dialog-title');
dialog.innerHTML='<div class="dialog-top"><span class="dialog-kicker"></span><button class="dialog-close" type="button"></button></div><h2 id="product-dialog-title"></h2><div class="dialog-body"></div><div class="dialog-footer"><a class="dialog-original" target="_blank" rel="noopener noreferrer"></a></div>';
document.body.append(dialog);
dialog.querySelector('.dialog-kicker').textContent=words[4];
dialog.querySelector('.dialog-close').textContent=words[3];
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
for(const card of cards){
 const href=card.querySelector('a[href*="funtasia-audio/#"]')?.href;
 if(!href)continue;
 const key=href.split('#')[1],item=details[key];
 if(!item)continue;
 const btn=document.createElement('button');btn.type='button';btn.className='mini-btn detail-btn';btn.textContent=words[0];
 const actions=card.querySelector('.card-actions');actions?.prepend(btn);
 btn.addEventListener('click',()=>{
  dialog.querySelector('#product-dialog-title').textContent=card.dataset.productName;
  const body=dialog.querySelector('.dialog-body');body.replaceChildren();
  if(item.lead){const lead=document.createElement('p');lead.className='dialog-lead';lead.textContent=item.lead;body.append(lead);}
  for(const line of item.paras){const p=document.createElement('p');p.textContent=line;body.append(p);}
  if(item.features.length){const list=document.createElement('ul');list.className='dialog-features';for(const feature of item.features){const li=document.createElement('li');li.textContent=feature;list.append(li);}body.append(list);}
  const link=dialog.querySelector('.dialog-original');link.href=href;link.textContent=words[2]+' →';
  dialog.showModal();
 });
}
