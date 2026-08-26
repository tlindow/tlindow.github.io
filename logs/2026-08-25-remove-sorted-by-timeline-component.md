# Removed "Sorted by Timeline" Toggle Component

**Date:** 2026-08-25  
**Tags:** #ui #cleanup #skills-marketplace #timeline #simplicity #staff-pm

## Context

Removed the "Sorted by Timeline" button / toggle component from the Skills Marketplace section in `page.tsx`. The marketplace now natively renders in chronological order by default, structured into clean company rows.

## Reflections

- Eliminating the redundant sort toggle removes unnecessary visual friction from the section header.
- The chronological flow from oldest (2017) to newest (2026) is naturally established by the company sections and the Top GMV Milestones Bar, making manual sort toggling obsolete.

## Next

- Maintain clean code cleanliness with zero ESLint warnings.
