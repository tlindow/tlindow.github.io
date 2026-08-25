# Number of Users Metric Validation for GMV Attribution

**Date:** 2026-08-25  
**Tags:** #ui #getting-started #gmv #users #metrics #validation #cards #staff-pm

## Context

Added a dedicated **"Number of Users"** section to each marketplace card in `page.tsx` directly alongside **"GMV Attribution"** to contextualize and validate the scale and sizing of each product tier.

## Reflections

- Pairing GMV figures directly with active user counts grounds financial attribution in platform volume and adoption metrics.
- The 2-column metrics bar (`GMV Attribution` | `Number of Users`) maintains typographic balance in Space Mono without cluttering the card layout.

## Decisions

1. **Card Metrics Sizing Pairings:**
   - **Strategic Growth & Advisory**: `$500,000 GMV` &harr; `50,000+ Users`
   - **Developer Paved Paths**: `$50,000,000 GMV` &harr; `150,000+ Users`
   - **Enterprise SLA & Telemetry**: `$100,000,000 GMV` &harr; `1,000,000+ Users`
   - **Product Leadership**: `$1,000,000,000 GMV` &harr; `10,000,000+ Users`
2. **Layout:** Split 2-column header bar above the card title and description with border separation.

## Next

- Keep metrics synchronized with updated portfolio deliverables and resume logs.
