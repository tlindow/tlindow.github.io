# Mobile & Desktop Parity with Single-Point 2017 Origin

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #mobile-parity #scroll-reveal #single-point-origin #staff-pm

## Context

Unified mobile and desktop in `TractionTimeline.tsx` into a single responsive, minimalist scroll-revealed graph experience:
1. When scrolling into the section, the very first thing visible is strictly the single origin point in 2017.
2. As the user scrolls down, the trajectory smoothly draws across the canvas and illuminates all milestones through 2031 ($1T).
3. Mobile now has 100% parity with desktop, with touch/tap support for opening compact popovers.

## Reflections

- Eliminating the separate mobile card stack in favor of the unified scroll-revealed graph brings identical delight and responsive coherence to both mobile and desktop viewports.
- Keeping `scrollProgressVal = 0` until intentional scroll begins ensures the single 2017 point stands out cleanly as the first impression.

## Decisions

1. **Strict 2017 Origin State:** Zero line reveal and only node #1 (2017, $1M) visible on initial view.
2. **Unified Mobile & Desktop Engine:** Shared SVG viewport and responsive height (`h-[320px] sm:h-[380px] md:h-[440px]`).
3. **Touch-Friendly Popovers:** Click and touch toggle for node popovers on mobile devices.

## Next

- Ready for user review.
