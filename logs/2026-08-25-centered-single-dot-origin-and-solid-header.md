# Centered Single Dot Origin & Restored Solid Header

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #centered-dot #scroll-reveal #solid-header #staff-pm

## Context

1. Restored full solid opacity (`opacity-100`) to the hero runtime header.
2. Configured the scroll-revealed scale visualization so it starts as a single dot in the middle of the screen (`50%, 50%`) with an ambient pulse beacon.
3. As the user continues scrolling past the header, the dot transitions into the graph origin coordinate and the full 5-year trajectory expands across the canvas up to 2031 ($1T).

## Reflections

- Having the visualization originate from a single centered dot gives the page a strong focal point before seamlessly transitioning into the full-bleed Cartesian scale graph.
- Unifying this across mobile and desktop creates consistent delight regardless of device viewport.

## Decisions

1. **Solid Header:** Restored `opacity-100` to the header.
2. **Centered Single Dot Origin:** Interpolated origin node from `(50%, 50%)` to `(originLeft, originTop)` between scroll progress 0.02 and 0.16.
3. **Smooth Progressive Expansion:** Y-axis guides and curve draw smoothly as the user continues scrolling.

## Next

- Ready for user review.
