# Chronological Marketplace Grid Layout Across Companies

**Date:** 2026-08-25  
**Tags:** #ui #grid-layout #chronological-order #all-companies #staff-pm

## Context

Arranged the production marketplace cards into a responsive 3-column grid moving through companies and roles in chronological order from 2017 to 2031.

## Reflections

- The responsive grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) gives an immediate, comprehensive overview of Tyler's career progression without requiring horizontal side-scrolling.
- Starting at Computer History Museum (2017), passing through The Tech Interactive, Galvanize, Affirm, and Beginner, and culminating at Horizon Scale ($1T) showcases a clear, compounding trajectory of scope and ownership.

## Decisions

1. **Responsive CSS Grid:** Replaced horizontal overflow track with `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6`.
2. **Strict Chronological Ordering:** 2017 (CHM) &rarr; 2017 (The Tech) &rarr; 2018 (The Tech) &rarr; 2019 (Galvanize) &rarr; 2019–2025 (Affirm) &rarr; 2026 (Beginner) &rarr; 2027–2031 (Horizon Scale).
3. **Preserved Production Card Architecture:** Solid color canvas with year badge, dual-column GMV/Scale metric bar, title, description, and employer footer.

## Next

- Ready for user inspection.
