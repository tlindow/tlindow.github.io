# Horizontal Marketplace Cards in Ascending GMV Order

**Date:** 2026-08-25  
**Tags:** #ui #getting-started #horizontal-carousel #gmv #attribution #slider #staff-pm

## Context

Arranged the marketplace cards in `page.tsx` into a horizontal scroll track with smooth snap scrolling, dedicated right-hand navigation controls (`ChevronLeft` and `ChevronRight`), and ordered by ascending GMV attribution ($500K → $50M → $100M → $1B).

## Reflections

- The horizontal sequence with ascending GMV attribution creates an intuitive ladder progression from tactical growth moats up to flagship multi-billion dollar platform ownership.
- Card dimensions (`w-[300px] sm:w-[360px] md:w-[390px]`) preserve the exact aspect ratio, typography, and abstract artwork size while enabling seamless swipe and click navigation.

## Decisions

1. **Card Ordering by Ascending GMV Attribution:**
   - 1. **Strategic Growth & Advisory**: `$500,000 GMV` (`AbstractChromaticVortex`)
   - 2. **Developer Paved Paths**: `$50,000,000 GMV` (`AbstractPavedPaths`)
   - 3. **Enterprise SLA & Telemetry**: `$100,000,000 GMV` (`AbstractTelemetryPulse`)
   - 4. **Product Leadership**: `$1,000,000,000 GMV` (`AbstractOrbitalMesh`)
2. **Horizontal Track & Navigation:**
   - Horizontal snap track with hidden scrollbars.
   - Right-aligned navigation controls (`ChevronLeft` / `ChevronRight`) with dynamic scroll boundary states.

## Next

- Maintain responsive touch gestures and keyboard accessibility.
