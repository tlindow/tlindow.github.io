# Unified Single Long Resume & Web Phone Number Obscuration

**Date:** 2026-08-25  
**Tags:** #ui #resume #space-mono #single-page #privacy #web-ux #print-css

## Context

Reverted the multi-page card stacked sticky scroll on the web resume (`/resume`) back into a unified, continuous single-document resume layout, and obscured the public phone number on the web view with click-to-reveal interactions while retaining full un-obscured phone number presentation for print and PDF exports.

## Reflections

- Multi-page sticky stacked scroll effects create novel web interaction, but a traditional single-document canvas is often cleaner, faster to scan, and more natural for hiring managers and recruiters reading a comprehensive technical leadership resume.
- Automated web crawlers and scraping bots harvest plain-text phone numbers from public static sites. Displaying an obscured phone number format (`(650) •••-••••`) with on-demand click-to-reveal in web view strikes an ideal balance between recruiter accessibility and spam prevention.
- By structuring print stylesheets (`@media print` and `.print:inline`) to display the un-obscured phone number, printed physical pages and automated Puppeteer PDF exports retain the complete contact information without any manual intervention.

## Decisions

1. **Unified Single Document Architecture (`site/src/components/SpaceMonoResume.tsx`):**
   - Removed `ResumePage` multi-page split and sticky stacking mechanics.
   - Rendered all resume content (Header, Vision, Technical & GTM Toolkits, all 7 Professional Experience entries, and Education) inside a single continuous `.resume-paper` card.
   - Preserved Space Mono typography, Tinker rainbow dividers, and the bottom action bar for PDF download and markdown copying.
2. **Web Phone Obscuration & Click-to-Reveal:**
   - Added `phoneObscured: "(650) •••-••••"` to `resumeContact` in `site/src/data/resumeData.ts`.
   - Updated `SpaceMonoResume.tsx`, `Hero.tsx`, and `Footer.tsx` with interactive click-to-reveal handlers in web view.
   - Ensured full un-obscured phone numbers (`(650) 580-5788`) are rendered in print/PDF mode via `hidden print:inline`.
3. **Cleaned Print Styles (`site/src/app/globals.css`):**
   - Removed obsolete `.resume-page-wrapper` and `.resume-page-sheet` CSS rules.
   - Preserved `.resume-paper` and `.resume-experience-item` print break rules for clean letterhead PDF export.

## Next

- Monitor Google Drive automated PDF sync on the next GitHub Pages deployment.
