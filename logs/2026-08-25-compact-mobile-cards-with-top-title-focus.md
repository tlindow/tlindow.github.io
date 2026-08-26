# Compact Mobile Cards with Top Title Focus

**Date:** 2026-08-25  
**Tags:** #ui #mobile #responsive #cards #typography #minimalism #staff-pm

## Context

Refactored the mobile timeline cards in `TractionTimeline.tsx` to be significantly more compact and ensure the main project title (`card.title`) is in prime focus at the very top of each card.

## Reflections

- Placing the main title at the top of the mobile card immediately gives the reader high-signal context before drilling into metrics.
- Streamlining the card container into a lightweight layout (`rounded-2xl p-4 space-y-2.5`) with a compact GMV strip keeps vertical scrolling fluid and fast on mobile screens.

## Decisions

1. **Top Title Hierarchy:** Placed the bold main title prominently at the top alongside the Year and Ownership Level badges.
2. **Compact Metric Strip:** Replaced large aspect-ratio banners with a sleek, low-profile GMV impact bar.
3. **Streamlined Spacing:** Reduced card footprint and padding for an ergonomic mobile experience.

## Next

- Continue monitoring responsive presentation across devices.
