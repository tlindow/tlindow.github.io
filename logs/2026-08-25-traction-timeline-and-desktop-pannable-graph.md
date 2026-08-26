# Responsive Traction Timeline with Mobile Left Spine & Desktop Pannable Graph

**Date:** 2026-08-25  
**Tags:** #ui #traction #timeline #graph #svg #dataviz #mobile-spine #desktop-pannable #staff-pm

## Context

Transformed the **Traction** section on the homepage from a static card grid into an adaptive, responsive timeline visualization:
1. **Mobile (`< md`)**: A vertical chronological timeline with a gradient spine line running continuously down the left side, node pins at each entry, and full-detail cards with LinkedIn navigation.
2. **Desktop (`≥ md`)**: An interactive, pannable graphical timeline with an SVG traction scale curve ($1M &rarr; $1B+ &rarr; $750K), draggable/scrollable canvas, clickable milestone nodes, and a timeline scrubber bar.
3. Updated the Affirm Paved Paths entry to reflect `users: "7 Engineers Squad"` and workstreams focused on developer productivity tooling.

## Reflections

- Providing a vertical line down the left on mobile creates an intuitive scroll rhythm for portrait screens.
- On desktop, the horizontally pannable graph with smooth SVG bezier curves and milestone nodes delivers a rich, interactive data visualization that immediately conveys expanding problem ownership and GMV scale.

## Decisions

1. **Dedicated Component:** Created `site/src/components/TractionTimeline.tsx` encapsulating mobile spine and desktop pannable graph rendering.
2. **Desktop Interactions:** Supported click-to-center node focusing, smooth pan buttons (`<` / `>`), mouse drag panning, and timeline node scrubbers.
3. **Paved Paths Scope:** Validated and updated the Paved Paths card to `7 Engineers Squad`.

## Next

- Keep monitoring user feedback on panning ergonomics across screen sizes.
