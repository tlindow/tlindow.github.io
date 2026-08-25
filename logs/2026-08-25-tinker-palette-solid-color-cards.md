# Solid Tinker Palette Colors for Marketplace Cards

**Date:** 2026-08-25  
**Tags:** #ui #getting-started #tinker-palette #color #cards #design-system #staff-pm

## Context

Replaced the abstract SVG graphics in the marketplace cards with solid pastel colors from the repository's Tinker palette (`rose`, `peach`, `mint`, `sky`).

## Reflections

- Using solid Tinker palette color blocks establishes a warm, playful, and minimalist design aesthetic that feels modern and approachable while letting the typography, GMV numbers, user counts, and employer brand logos take center stage.

## Decisions

1. **Card Color Mappings (Ascending GMV Tiers):**
   - **Strategic Growth & Advisory** ($500K GMV): `bg-rose` (`#F9A8D4`)
   - **Developer Paved Paths** ($50M GMV): `bg-peach` (`#FDBA74`)
   - **Enterprise SLA & Telemetry** ($100M GMV): `bg-mint` (`#6EE7B7`)
   - **Product Leadership** ($1B GMV): `bg-sky` (`#7DD3FC`)
2. **Container:** `aspect-[16/10]` rounded rectangular color field with subtle border and inner depth.

## Next

- Maintain color contrast and theme harmony across dark and light modes.
