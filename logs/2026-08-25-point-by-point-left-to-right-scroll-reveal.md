# Point-by-Point Left-to-Right Scroll Reveal

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #left-to-right #point-by-point #scroll-reveal #staff-pm

## Context

Updated `TractionTimeline.tsx` to strictly reveal point by point from left to right as the user scrolls, rather than expanding from the center.

## Reflections

- Having the visualization unspool strictly from the single 2017 origin point on the left and reveal milestones one by one gives a true sense of chronological momentum and deliberate trajectory toward the $1 Trillion horizon.
- Zero future points or lines are visible ahead of the drawing frontier, making each scroll gesture rewarding.

## Decisions

1. **Upward Entry for Origin Dot:** Origin point (2017) glides upwards into view upon scrolling past the full-page header.
2. **Strict Point-by-Point Progression:** Points appear only when the line drawing frontier reaches their exact X position.
3. **Sticky Scroll Runway:** Pinned docked container (`sticky top-28`) providing smooth gesture-by-gesture progression.

## Next

- Ready for user review.
