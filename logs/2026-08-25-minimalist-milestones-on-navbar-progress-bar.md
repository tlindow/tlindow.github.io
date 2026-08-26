# Minimalist GMV Milestones on Navbar Progress Bar

**Date:** 2026-08-25  
**Tags:** #ui #minimalism #navbar #progress-bar #gmv #milestones #staff-pm

## Context

1. Removed the bulky "Chronological GMV Milestones" card component from the Skills Marketplace section in `page.tsx`.
2. Integrated minimalist GMV milestone tick points directly onto the existing 2px rainbow scroll progress bar in `Navbar.tsx`.

## Reflections

- Embedding the milestones directly into the fixed Navbar progress line matches the clean, minimalist aesthetic of the site while maintaining the sense of escalating commercial scale ($1M &rarr; $1B+ &rarr; $750K) as visitors scroll through Tyler's career timeline.
- The marketplace section in `page.tsx` now flows cleanly and directly into the company rows without redundant UI wrappers.

## Decisions

1. **Page Layout:** The Skills Marketplace section title and subtitle lead immediately into the chronological company sections (`CHM` &rarr; `The Tech` &rarr; `Galvanize` &rarr; `Affirm` &rarr; `Beginner`).
2. **Navbar Progress Bar:**
   - 2px signature rainbow spectrum bar (`labs-rainbow-gradient`) driven by `scaleX`.
   - Subtle milestone tick markers placed along the progression track (`$1M`, `$5M`, `$8M`, `$400K`, `$10M+`, `$50M`, `$100M+`, `$1B+`, `$750K`) with clean hover tooltip chips.

## Next

- Continue verifying responsive spacing and visual balance.
