# FUNtasia production deployment plan (approved destination)

Approved destination: **https://funtasiaaudio.github.io/**

## Repository mapping
- Target GitHub Pages user-site repository: `funtasiaaudio/funtasiaaudio.github.io` (must be created; repository lookup on 2026-11-05 returned 404).
- Source/staging: `funtasiaaudio/funtasia-site-preview`.
- Protected Audio production: `funtasiaaudio/funtasia-audio`, URL `https://funtasiaaudio.github.io/funtasia-audio/`.
- Protected Records production: `infofuntasiarecords-tech/funtasia-records`, URL `https://infofuntasiarecords-tech.github.io/funtasia-records/`.
- Never replace or redirect either protected production repository without separate explicit approval.

## Path compatibility
The preview site is served from `/funtasia-site-preview/`, but the production user site will be served from `/`. Before copying, verify that all relative navigation links, stylesheets, scripts, and images work when the site is at root. Relative links like `../catalog/ja/` and `../../` are generally appropriate for the corresponding page depth, but test them after deployment. External download and image URLs should remain unchanged until independently verified.

## Safe rollout
1. Keep preview unchanged and record its approved commit SHA.
2. Create a **new**, separate public repository named `funtasiaaudio.github.io` under the `funtasiaaudio` account; do not rename the existing Audio repo.
3. Copy only the approved site files to the new repository, preserving paths. Exclude preview-only deployment documentation from site navigation.
4. Keep `noindex,nofollow` while running a private-to-search staging smoke test on the new root URL. GitHub Pages may still be publicly accessible.
5. Verify all routes, five language switches, CSS/JS, mobile layout, original Audio downloads, and original Records image references.
6. Check metadata, accessibility, external links, and the actual availability of each release download.
7. Once the owner approves launch, remove preview-only notices and noindex on the **new production repository only**, then publish sitemap/canonical metadata.
8. Confirm root URL works; leave the old Audio and Records websites online and unmodified.

## Rollback
Keep the last tested production commit and source-preview SHA. If the new root site fails checks, revert only `funtasiaaudio/funtasiaaudio.github.io` to its prior good commit. Neither existing Audio nor Records production site should be modified.

## Current status (2026-11-05)
- Destination URL selected by site owner.
- Target repository not found via authenticated GitHub repository lookup.
- No production cutover performed; no protected repository modified.
- External link reachability and full cross-browser checks remain outstanding.
