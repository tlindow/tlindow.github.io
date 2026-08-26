# Desktop Full-Width Scale Graph & Compact Hover Cards

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #graph #full-width #hover-cards #interaction #minimalism #staff-pm

## Context

Refactored the desktop graph in `TractionTimeline.tsx` so that:
1. The graph expands naturally to 100% full width across the desktop layout without requiring horizontal scrollbars or pan buttons.
2. Experience cards are hidden by default on desktop, revealing small compact detail cards only when hovering over or focusing on a specific milestone node.

## Reflections

- Full-width SVG scaling with responsive viewBox coordinates renders the entire chronological arc (2017 &rarr; 2026 + dotted projection) in a single unified view.
- Keeping the desktop graph clean and revealing compact detail cards on hover removes visual overload while providing instantaneous access to company, ownership, and LinkedIn links.

## Decisions

1. **Full-Width Canvas:** Implemented responsive coordinate percentage mapping (`leftPct`, `topPct`) across a 1000px viewBox.
2. **Compact Popover Hover Cards:** Attached small, sleek cards (`w-72 sm:w-80`) with smart above/below positioning that appear smoothly on node hover.
3. **Mobile Vertical Flow:** Preserved vertical left-spine timeline on mobile.

## Next

- Maintain build and visual testing hygiene.
