# Company-Ordered Experience Card Layout

**Date:** 2026-08-25  
**Tags:** #ui #skills-marketplace #companies #employers #layout #cards #gmv #attribution #staff-pm

## Context

Refactored the Skills Marketplace section on `page.tsx` from an interactive single-company filter track into a comprehensive, chronologically ordered company experience layout.

## Reflections

- Presenting all 11 experience cards organized by company in reverse-chronological order (Beginner &rarr; Affirm &rarr; Galvanize &rarr; The Tech Interactive &rarr; Computer History Museum) provides a complete, scannable narrative of Tyler's career without hiding content behind filter buttons.
- Quick jump navigation anchors at the top allow visitors to instantly jump to specific organizations while keeping the entire portfolio accessible in a single unified view.

## Decisions

1. **Company Sequence & Structure:**
   - **Beginner** (Mar 2026 – Jul 2026): 2 cards (Founder PWA, Technical Community)
   - **Affirm** (Sept 2019 – Feb 2026): 5 cards (Flagship Scale, Enterprise SLA, Developer Paved Paths, Merchant Triage, Mobile Performance)
   - **Galvanize Inc** (May 2019 – Aug 2019): 1 card (Developer Onboarding)
   - **The Tech Interactive** (May 2017 – Jan 2019): 2 cards (Exhibit Prototyping, Google IoT)
   - **Computer History Museum** (Mar 2017 – Nov 2018): 1 card (Design Code Build)
2. **Company Header:**
   - Left: Authentic employer logo mark & role title.
   - Right: Tenure/period in Space Mono font.
3. **Hero GMV Attribution Placement:**
   - Retained embedded GMV currency value and scale badges within each card's Tinker color banner (`aspect-[16/10]`).
4. **Quick Jump Navigation:**
   - Pill buttons with employer brand icons linking smoothly to `#company-[id]`.

## Next

- Maintain synchronicity between marketplace cards and resume experiences at `/resume`.
