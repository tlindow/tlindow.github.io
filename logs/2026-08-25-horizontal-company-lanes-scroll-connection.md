# Horizontal Company Lanes & Connected Scroll Layout

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #horizontal-lanes #company-experience #scroll-connection #staff-pm

## Context

Simplified the scale visualization in `TractionTimeline.tsx` so that milestones for each company experience sit along a straight horizontal line and connect progressively on scroll.

## Reflections

- Grouping milestones into straight horizontal lines per company experience (CHM &rarr; The Tech &rarr; Galvanize &rarr; Affirm &rarr; Beginner &rarr; Horizon Scale) creates a clean, architectural layout.
- Points within the same employer connect in a straight horizontal line, with smooth transitions between companies as the user scrolls.

## Decisions

1. **Company Lane Architecture:** Configured straight horizontal lanes for each experience tier.
2. **Straight Horizontal Connections:** Point-to-point connections within each company remain perfectly flat horizontal.
3. **Smooth Inter-Company Bridges:** Line steps smoothly from one company's lane up to the next.
4. **Scroll-Driven Progression:** Starts with only the 2017 origin point on the left and draws the connection rightward on scroll.

## Next

- Ready for user inspection.
