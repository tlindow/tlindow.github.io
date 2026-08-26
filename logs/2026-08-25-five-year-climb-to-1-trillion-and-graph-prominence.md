# 5-Year Climb to $1 Trillion & Graph Prominence

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #5-year-trajectory #1-trillion #hero-fade #graph-prominence #staff-pm

## Context

1. Extended the scale trajectory to plot the 5-year climb to **$1,000,000,000,000 ($1 Trillion)** over 2027 &rarr; 2031.
2. Brought the scale graph into full view on the homepage while applying a soft fade to the title text.

## Reflections

- The 5-year trajectory clearly maps out the progression from 2026 ($750K) through Year 1 (2027, $10M), Year 2 (2028, $100M), Year 3 (2029, $5B), Year 4 (2030, $100B), and Year 5 (2031, $1T Horizon).
- Softening the hero header and reducing top offsets brings the panoramic full-width graph immediately into the primary viewport.

## Decisions

1. **5-Year Trajectory Milestones:** Added 5 projected milestones (2027 &rarr; 2031) along the dotted curve (`strokeDasharray="6 6"`) with dedicated hover cards.
2. **Prominent Full-View Layout:** Adjusted header margins and applied `opacity-65 hover:opacity-100` transition so the visualization commands primary visual focus.
3. **Mobile 5-Year Extension:** Integrated the 5 projected milestone cards into the vertical spine on mobile.

## Next

- Ready for user review.
