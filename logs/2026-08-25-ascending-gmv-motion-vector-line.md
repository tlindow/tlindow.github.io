# Ascending GMV Motion Vector Line Across Card Collections

**Date:** 2026-08-25  
**Tags:** #ui #skills-marketplace #gmv #motion #spectrum #vector #cards #staff-pm

## Context

Added an **Ascending GMV Motion Vector Line** across the top of the card collections on `page.tsx` to visually imply the expanding scale and commercial volume continuum ($250K GMV &rarr; $1B+ GMV), replacing interactive filter and sort buttons.

## Reflections

- A continuous spectrum line with start/end milestones and directional indicators conveys the ascending progression of Tyler's operating scope far more naturally than an interactive sorting button.
- The warm rainbow gradient vector (`labs-rainbow-gradient`) ties together the Tinker design system palette while grounding the cards in measurable business impact.

## Decisions

1. **Ascending Motion Vector Bar:**
   - **Left Endpoint:** Pulsing amber indicator with `$250K GMV` label (`0-to-1 Venture`).
   - **Center:** `Ascending Scale & GMV Impact` with directional arrow (`ArrowRight`).
   - **Right Endpoint:** Pulsing sky indicator with `$1,000,000,000+ GMV` label (`Enterprise Flagship`).
   - **Vector Bar:** Gradient track (`labs-rainbow-gradient`) stretching across the full width of the card collection.
2. **Placement:** Directly above the company experience sections underneath the quick jump anchors.

## Next

- Ensure responsive behavior on ultra-narrow viewports.
