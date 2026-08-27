# Resume Google Doc Conversion & Real-Time Markdown Editing

**Date:** 2026-08-26  
**Tags:** #resume #google-docs #markdown #nextjs #fast-refresh #automation #google-drive

## Context

Established a single source of truth for Tyler Lindow's resume in Markdown (`content/resume.md`), enabling real-time web hot-reloading in Next.js development, local Google Doc-optimized exports, and automated synchronization to Google Drive as native editable Google Docs.

## Reflections

- Having resume content duplicated across TypeScript data arrays and React component strings creates synchronization friction whenever updating experiences, metrics, or credentials.
- Establishing `content/resume.md` as the centralized source of truth enables editing the resume in plain Markdown while allowing Next.js Fast Refresh to instantly reflect changes at `http://localhost:3000/resume`.
- Direct conversion of semantic HTML to Google Drive with `mimeType: "application/vnd.google-apps.document"` allows Google Drive to automatically convert headings, bold text, bullets, and links into native Google Docs styling.

## Decisions

1. **Centralized Markdown Source (`content/resume.md`):**
   - Single Markdown file holding contact info, vision, technical & business toolkits, professional experiences, and education.
   - High-performance parser (`site/src/lib/parseResumeMarkdown.ts`) extracting structured metadata, bold tags, and dates.
2. **Real-Time Web Hot-Reloading:**
   - `site/src/app/resume/page.tsx` server component parses `content/resume.md` dynamically, triggering Fast Refresh on every file save.
   - `site/src/components/SpaceMonoResume.tsx` receives parsed data and seamlessly falls back to existing styles.
3. **Google Doc Export & Sync Engine (`site/scripts/export-resume-gdoc.mjs`):**
   - `npm run export:gdoc`: Generates `site/public/Tyler_Lindow_Resume_GoogleDoc.html` and `Tyler_Lindow_Resume.md`.
   - `npm run sync:gdoc`: Uploads and converts into a native Google Doc in Google Drive via Google Drive API v3.
   - In-place file update support via `GDRIVE_DOC_ID` to preserve share links.

## Next

- Drag & drop `site/public/Tyler_Lindow_Resume_GoogleDoc.html` into Google Drive and open with Google Docs, or run `npm run sync:gdoc` to push directly.
