# Flowing Chronological Experience Cards Grid

**Date:** 2026-08-25  
**Tags:** #ui #skills-marketplace #grid #chronological #cards #streamlined #staff-pm

## Context

Refactored the Skills Marketplace on `page.tsx` from segregated company sections into a single, seamless responsive grid flowing chronologically from oldest (2017) to newest (2026).

## Reflections

- Eliminating the company header section dividers lets visitors experience Tyler's career journey as a continuous, unified arc of escalating problem ownership and commercial GMV impact.
- Each individual card retains its distinct company brand identity via the `Previous Employer` footer mark and the GMV banner year chip.

## Decisions

1. **Flat Data Structure:** Replaced nested `companyExperiences` with `experienceCards` (11 cards ordered chronologically).
2. **Flowing Grid Layout:** Cards are rendered directly in a responsive 2-column grid (`grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6`).
3. **Card-Level Context:** Each card retains its GMV attribution banner, ownership level badge, year chip, and employer logo footer.

## Next

- Continue monitoring page layout and responsiveness.
