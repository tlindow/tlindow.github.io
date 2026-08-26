# Educational Institutions & Galvanize Employer Logos

**Date:** 2026-08-25  
**Tags:** #ui #education #employers #partners #galvanize #ucsd #northwestern #hackreactor #deepatlas #logos

## Context

Added a dedicated logo row for attended educational institutions (UC San Diego, Northwestern University, Hack Reactor, Deep Atlas) and expanded Previous Employers with Galvanize using authentic SVG vector logos fetched directly from web sources.

## Reflections

- Distinguishing employer brand marks from academic/fellowship institutions cleanly clarifies career operating roles (Affirm, Beginner, Galvanize, The Tech Interactive, CHM) versus research, pedagogical, and software engineering foundations (UCSD, Northwestern, Hack Reactor, Deep Atlas).
- Using adaptive vector SVGs with `currentColor` ensures crisp rendering and high contrast across both light and dark display modes.

## Decisions

1. **Previous Employers (`TrustedPartnersBar`):**
   - Beginner
   - Affirm
   - Galvanize (`/galvanize-logo.svg`)
   - The Tech Interactive
   - Computer History Museum
2. **Educational Institutions (`EducationInstitutionsBar`):**
   - UC San Diego (`/ucsd-logo.svg`)
   - Northwestern University (`/northwestern-logo.svg`)
   - Hack Reactor (`/hack-reactor-logo.svg`)
   - Deep Atlas (`/deep-atlas-logo.svg`)
3. **Data Model Synchronization:**
   - Updated `resumeData.ts` to include Hack Reactor across `education` and `educationList`.

## Next

- Maintain visual parity across responsive viewports.
