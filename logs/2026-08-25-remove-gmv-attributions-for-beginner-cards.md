# Remove GMV Attributions for Beginner Cards

**Date:** 2026-08-25  
**Tags:** #ui #data-integrity #beginner #founder-metrics #staff-pm

## Context

Removed GMV attribution metrics from the two Beginner cards in `TractionTimeline.tsx` and configured them with dedicated **Stage & Motion** / **Target Audience** validation bars (`0 → 1 Launch` & `Community Hub`).

## Reflections

- 0-to-1 founder discovery and community initiatives operate on customer validation, pitch iterations, and network density rather than enterprise e-commerce GMV volume.
- Replacing GMV metrics with Stage & Motion (`0 → 1 Launch` / `Community Hub`) accurately reflects the early-stage nature of the Beginner venture while keeping established GMV figures on enterprise Affirm/museum cards.

## Decisions

1. **Removed GMV Fields:** Removed numerical GMV attribution from `beginner-pwa-2026` and `beginner-community-2026`.
2. **Founder Metric Strip:** Rendered clean `Stage & Motion` (`0 → 1 Launch` / `Community Hub`) and `Target Audience` (`Paying Founders` / `San Diego Tech Hub`) headers.

## Next

- Ready for user inspection.
