# Previous Employer Icons on Marketplace Cards

**Date:** 2026-08-25  
**Tags:** #ui #getting-started #employers #partners #cards #attribution #staff-pm

## Context

Added previous employer attribution icons directly to each marketplace card in `page.tsx` within a clean card footer row.

## Reflections

- Embedding the authentic employer brand mark on each card creates immediate credibility and directly attributes where each operating capability was developed (Affirm, Beginner, The Tech Interactive).

## Decisions

1. **Card Employer Mappings:**
   - **Strategic Growth & Advisory** ($500K GMV, 50K+ Users): `BeginnerLogo`
   - **Developer Paved Paths** ($50M GMV, 150K+ Users): `TheTechLogo`
   - **Enterprise SLA & Telemetry** ($100M GMV, 1M+ Users): `AffirmLogo`
   - **Product Leadership** ($1B GMV, 10M+ Users): `AffirmLogo`
2. **Placement:** Card footer with `Previous Employer` uppercase tracking label and employer badge mark.

## Next

- Ensure logo assets load eagerly without layout shifts across mobile viewports.
