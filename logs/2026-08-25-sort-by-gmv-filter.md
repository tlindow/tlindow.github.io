# Sort by GMV Increasing Filter Above Cards

**Date:** 2026-08-25  
**Tags:** #ui #getting-started #filter #sort #gmv #cards #interactive

## Context

Added an interactive filter toggle button directly above the horizontal marketplace cards track that reads **"Sort by GMV increasing"** (with toggle support for decreasing order).

## Reflections

- Providing an explicit filter badge pill directly above the cards gives immediate context on why the cards are ordered in the current sequence ($500,000 GMV → $1,000,000,000 GMV) while allowing interactive ascending/descending sorting.

## Decisions

1. **Interactive Sort Button:**
   - Default state: `Sort by GMV increasing` (`$500K → $1B+ GMV`).
   - Toggleable on click with `ArrowUpDown` icon animation.
2. **Horizontal Track Synchronization:**
   - Sorting dynamically re-orders `sortedCards` array while maintaining horizontal scroll snapping and right-aligned navigation buttons.

## Next

- Maintain test coverage and check accessibility labels.
