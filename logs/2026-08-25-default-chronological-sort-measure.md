# Default Chronological Sort Measure

**Date:** 2026-08-25  
**Tags:** #ui #sorting #default-sort #chronological-order #staff-pm

## Context

Configured `chrono` (Chronological career progression from 2017 to 2031) as the default sorting measure for the Skills Marketplace grid in `TractionTimeline.tsx`.

## Reflections

- Defaulting to chronological ordering immediately presents the story of Tyler's career from Computer History Museum (2017) through The Tech Interactive, Galvanize, Affirm, Beginner, and Horizon Scale ($1T).
- Users can still click the sort toggle button to view GMV (Highest First) or GMV (Lowest First) dynamically.

## Decisions

1. **Default Sort Measure:** Initialized state to `const [sortOrder, setSortOrder] = useState<"chrono" | "desc" | "asc">("chrono")`.
2. **Order Index Mapping:** Explicit `orderIndex` (1 to 12) guarantees reliable chronological sorting across multi-year and fractional year dates.

## Next

- Ready for user inspection.
