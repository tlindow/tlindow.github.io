# Minimalist Scroll-Revealed Scale Graph

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #minimalism #scroll-reveal #single-point-origin #staff-pm

## Context

Stripped all extra annotations, telemetry headers, and secondary tags around the desktop graph in `TractionTimeline.tsx` to achieve a pure, ultra-minimalist scroll-revealed trajectory.

## Reflections

- Starting with only the single origin point (2017) and progressively drawing the full curve as the user scrolls gives a dramatic, focused sense of growth without noisy text elements.
- Clean Y-axis guidelines (`$1T`, `$1B`, `$50M`, `$1M`) and date-only tags keep the canvas spacious and distraction-free.

## Decisions

1. **Removed Extra Annotations:** Removed telemetry status bars, descriptive subtitle tags, and extra floating badges.
2. **Scroll-Driven Reveal:** Kept the single-point starting state with progressive SVG curve reveal driven by scroll progress.
3. **Pure Minimalist Y-Axis:** Rendered only clean `$1T`, `$1B`, `$50M`, `$1M` guides.
4. **On-Demand Popovers:** Compact cards reveal upon hovering over any exposed milestone point.

## Next

- Ready for user inspection.
