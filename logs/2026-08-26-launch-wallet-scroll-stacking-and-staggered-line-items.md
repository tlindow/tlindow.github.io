# Launch Wallet Isolated Sticky Stacking & Unobscured Grid Finale

**Date:** 2026-08-26  
**Tags:** #ui #launch-wallet #animations #framer-motion #scroll-reveal #stacked-deck #fanned-grid #unobscured-grid

## Context

Resolved the issue where the fanned-out 5-card grid at the end of the Launch Wallet section was being obscured by the pinned sticky cards, by isolating the sticky card stacking timeline into its own dedicated container and positioning the grid in a clean subsequent section with `relative z-20 bg-background`.

## Reflections

- In CSS, sticky elements only stay pinned as long as their containing block is in view.
- Isolating the sticky timeline into its own container ensures the pinned cards naturally unstick and scroll away upwards when reaching the end of the milestone sequence, allowing the fanned-out grid to take over the viewport with 100% visibility.

## Decisions

1. **Dedicated Sticky Container:** Wrapped the 5 milestone cards in their own container (`relative pb-16 sm:pb-24`).
2. **Elevated Grid Section:** Placed the fanned-out card grid in its own section (`relative z-20 bg-background pt-16 sm:pt-20 pb-20 sm:pb-28`).
3. **Zero Visual Collision:** Guaranteed that all 5 cards in the grid are completely unobscured and interactive.

## Next

- Ready for user inspection.
