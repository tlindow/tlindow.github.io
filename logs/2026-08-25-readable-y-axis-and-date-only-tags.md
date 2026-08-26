# Readable Y-Axis Scale Guidelines & Date-Only Node Tags

**Date:** 2026-08-25  
**Tags:** #ui #dataviz #y-axis #clean-tags #readability #minimalism #staff-pm

## Context

Refactored the desktop Traction graph in `TractionTimeline.tsx`:
1. Enhanced the Y-axis scale markers with high-contrast, crisp label chips (`$1,000,000,000,000 ($1T)`, `$1,000,000,000 ($1B)`, `$50,000,000 ($50M)`, `$1,000,000 ($1M)`) on background dashed guide rules.
2. Stripped GMV metrics from the graph node tags, leaving clean, minimalist date chips (`2017`, `2018`, `2019`, `2021`, `2023`, `2024`, `2025`, `2026`).

## Reflections

- Displaying pure dates on the graph curve keeps the visual field uncluttered and lets the Y-axis handle the vertical scale reading.
- When hovering over a node, the compact popup reveals full GMV metrics, audience context, ownership levels, and employer details on demand.

## Next

- Ready for user review.
