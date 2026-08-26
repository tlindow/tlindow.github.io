# Center-Built Scale Graph & Full-Page Hero Header

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #full-page-header #scroll-into-view #center-built-graph #staff-pm

## Context

1. Expanded the hero runtime header into a full-page landing section (`min-h-[92vh] sm:min-h-[95vh]`) with solid opacity and a down-scroll cue.
2. Configured the graph section to scroll into view with a single dot centered in the middle of the screen (`50%, 50%`).
3. Implemented center-outward graph expansion as the user scrolls, building the curve and milestones dynamically from the center dot outward.

## Reflections

- Greeting visitors with a majestic full-screen header and then scrolling into a centered single dot creates high anticipation before blossoming into the full-width scale trajectory.
- Expanding from the center symmetrically draws the eye across both the foundational history (2017 &rarr; 2026) and the forward 5-year climb (2027 &rarr; 2031 to $1T).

## Decisions

1. **Full-Page Header Section:** Implemented centered full viewport height landing header in `page.tsx`.
2. **Scroll-Into-View Centered Dot:** Anchored initial state to `(50%, 50%)` with ping pulse beacon.
3. **Center-Outward Symmetrical Expansion:** Applied dynamic symmetric clipping mask (`clipInsetX`) and distance-from-center node reveal logic.

## Next

- Ready for user inspection.
