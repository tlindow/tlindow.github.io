# Automated Google Drive Resume PDF Sync via GitHub Actions

**Date:** 2026-08-25  
**Tags:** #automation #resume #google-drive #github-actions #puppeteer #pdf #ci-cd

## Context

Established an automated pipeline to generate a high-fidelity PDF of Tyler Lindow's on-brand resume and synchronize it with Google Drive directly from GitHub Actions immediately after the production site is deployed live to GitHub Pages.

## Reflections

- Manually updating a resume PDF in Google Drive or sending static attachments leads to version drift across job applications, recruiters, and shared drives.
- By triggering synchronization from GitHub Actions right after the production deployment (`deployment` step on GitHub Pages), the Google Drive PDF is guaranteed to reflect the live, published version of the site without manual steps.
- Leveraging headless Chromium with `@media print` emulation produces a pixel-perfect PDF matching the site's Space Mono typography, Tinker 7-color rainbow dividers, and print margins.
- Using Google Drive v3's `drive.files.update` enables in-place file replacement: the existing Google Drive shareable link and permissions remain completely intact while the underlying file content updates.

## Decisions

1. **Standalone Sync Engine (`site/scripts/sync-resume-gdrive.mjs`):**
   - Headless PDF generation via Puppeteer with automatic static server fallback (`site/out`).
   - Google Drive API client supporting Google Cloud Service Account (`GDRIVE_SERVICE_ACCOUNT_KEY`) and OAuth2 credentials.
   - Dual mode: in-place update when `GDRIVE_FILE_ID` is set (preserving URLs) or new file creation in `GDRIVE_FOLDER_ID`.
   - CLI flags: `--pdf-only`, `--dry-run`, `--out`, `--file-id`, `--folder-id`.
2. **Production-Triggered GitHub Actions Step (`.github/workflows/deploy.yml`):**
   - Attached as a post-deployment step executing only after `deploy-pages` succeeds.
   - Ingests repository secrets: `GDRIVE_SERVICE_ACCOUNT_KEY`, `GDRIVE_FILE_ID`, `GDRIVE_FOLDER_ID`.
   - Built-in graceful degradation: logs setup reminders without breaking the site deployment if secrets are not yet configured.
3. **Local Developer Experience & Documentation:**
   - Added `npm run export:pdf` and `npm run sync:gdrive` scripts to `site/package.json`.
   - Created setup guide at `site/docs/GOOGLE_DRIVE_SYNC_SETUP.md`.

## Next

- Provide the Google Cloud Service Account JSON key as `GDRIVE_SERVICE_ACCOUNT_KEY` and target file ID as `GDRIVE_FILE_ID` in GitHub repository secrets.
