# FUNtasia unified site — release readiness checklist

Status: PREVIEW ONLY. This document does not authorize production cutover.

## Protected production sites
- Audio: https://funtasiaaudio.github.io/funtasia-audio/
- Records: https://infofuntasiarecords-tech.github.io/funtasia-records/
- Do not edit, redirect, delete, or overwrite either production repository as part of preview preparation.

## Current preview
- Repository: funtasiaaudio/funtasia-site-preview (main)
- URL: https://funtasiaaudio.github.io/funtasia-site-preview/
- Main routes: /, /catalog/{ja,en,de,fr,ru}/, /records/{en,de,fr,ru}/, /records/, /studio/, /utilities/, /about/, /support/
- Preview pages intentionally include noindex,nofollow.
- Audio product download links and Records images currently reference existing external sites.

## Release gates
- [x] Source-level internal navigation audit on 15 HTML pages (2026-11-05).
- [x] Basic matching of opening/closing section, div, article, nav tags (not a full HTML validator).
- [x] Language tags and preview robots directives reviewed.
- [ ] Choose final production domain/repository and get explicit approval for cutover.
- [ ] Validate every external download/release URL and image reference for reachability and correct destination.
- [ ] Check all five language variants and mobile/desktop layouts in actual browsers.
- [ ] Confirm current public-product list, product names, and release versions against authoritative release pages.
- [ ] Confirm privacy, contact, licensing, and support copy before public indexing.
- [ ] Prepare final SEO metadata, canonical URLs, sitemap and robots policy for selected production URL.
- [ ] Make an immutable backup/tag of the approved preview version and prepare rollback steps.
- [ ] Deploy to the approved production destination without overwriting existing Audio or Records repositories.
- [ ] Post-deployment smoke test, then remove preview-only restrictions only at the approved production destination.

## Rollback
If the new destination fails smoke testing, revert its deployment to the prior known-good commit. Existing Audio and Records production sites must remain unchanged throughout.
