# Increase Recruit Me Button Height & Elevate Mobile Position

**Date:** 2026-08-26  
**Tags:** #ui #mobile-ux #touch-target #docked-drawer #recruit-cta #responsive

## Context

1. The "Recruit Me" CTA button in the docked checkout drawer (`CheckoutDrawer.tsx`) had a relatively compact height on mobile screens (`py-2` and `text-xs`).
2. The user requested increasing the button height on mobile and positioning it slightly higher on the page.

## Decisions

1. **Mobile Touch Target & Button Height:**
   - Increased mobile padding on the primary CTA link from `py-2` to `py-3 sm:py-2.5` and `px-4 sm:px-5`.
   - Set `min-h-[44px]` on mobile to guarantee accessibility guidelines for primary action touch targets.
   - Upgraded mobile typography to `text-sm font-bold` with enlarged icons (`size={15}`).

2. **Elevated Mobile Layout & Clearance:**
   - Increased mobile bottom padding in the drawer container from `py-2.5` to `pt-2.5 pb-4 sm:py-3` to provide thumb clearance above browser bars.
   - Tuned in-view scroll activation threshold from `windowHeight * 0.7` to `windowHeight * 0.8` so the docked drawer appears slightly earlier/higher during scroll.
   - Offset the floating `ExperimentPreviewBar` (`bottom-20 sm:bottom-18`) to maintain visual breathing room.

## Next

- Verified build and lint checks pass cleanly.
