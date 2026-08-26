# Restored Skills Marketplace Card View

**Date:** 2026-08-25  
**Tags:** #ui #marketplace #cards #horizontal-scroll #staff-pm

## Context

Restored the horizontal snap-scrolling Skills Marketplace card view in `TractionTimeline.tsx` and `page.tsx`.

## Reflections

- The marketplace card view provides immediate visual punch with rich Tinker color canvas headers, clear GMV attribution & user scale validation bars, ownership level chips, and company employer logos.
- Added smooth chevron navigation arrows and dynamic sorting (Highest GMV first, Lowest GMV first, and Chronological 2017 &rarr; 2031).

## Decisions

1. **Restored Marketplace Track:** Re-introduced horizontal card track with snap-mandatory scrolling.
2. **Dynamic Sorting & Filtering:** Provided toggle button to sort by GMV (highest/lowest) and chronological order.
3. **Rich Cards:** Each card features year tag, ownership level chip, split GMV/scope validation bar, title, description, and clickable previous employer link.

## Next

- Ready for user inspection.
