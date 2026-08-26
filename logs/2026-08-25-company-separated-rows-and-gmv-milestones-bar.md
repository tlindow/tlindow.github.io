# Company-Separated Card Rows & Top GMV Milestones Motion Bar

**Date:** 2026-08-25  
**Tags:** #ui #skills-marketplace #companies #chronological #milestones #gmv #cards #staff-pm

## Context

Re-architected the Skills Marketplace section on `page.tsx` to:
1. Keep the card rows distinctly grouped and separated by company.
2. Order experiences chronologically starting with the oldest organizations (2017: Computer History Museum) and advancing forward to 2026 (Beginner).
3. Replace the old arc box component with a continuous, left-to-right animated **Top GMV Milestones Motion Bar**.
4. Remove the logo pills from the company section headers, preserving authentic employer brand marks directly in each card's footer.

## Reflections

- Grouping cards by company while starting from the oldest experience (2017 &rarr; 2026) narrates Tyler's natural career progression from foundational physical computing/IoT education into enterprise SRE engineering leadership ($1B+ Amazon portfolio) and founder product management.
- The top milestone bar provides immediate visual anchor points across the entire chronological journey ($1M &rarr; $5M &rarr; $8M &rarr; $2M &rarr; $10M+ &rarr; $50M &rarr; $100M+ &rarr; $1B+ &rarr; $500K &rarr; $250K &rarr; $750K).

## Decisions

1. **Chronological Sequence (Oldest to Newest):**
   - **Computer History Museum** (Mar 2017 – Nov 2018): Design Code Build & Physical Computing ($1M GMV)
   - **The Tech Interactive** (May 2017 – Jan 2019): Google IoT Curriculum ($5M GMV), Projection-Mapped Exhibit ($8M GMV)
   - **Galvanize Inc** (May 2019 – Aug 2019): Developer Onboarding & Mentorship ($2M GMV)
   - **Affirm** (Sept 2019 – Feb 2026): Merchant Triage ($10M+ GMV), Paved Paths ($50M GMV), Enterprise SLA ($100M+ GMV), Flagship Lead ($1B+ GMV), Mobile Performance ($500K GMV)
   - **Beginner** (Mar 2026 – Jul 2026): 0-to-1 Founder PWA ($250K GMV), Technical Community ($750K GMV)
2. **Top GMV Milestones Bar:**
   - Rainbow gradient progress line (`labs-rainbow-gradient`) with animated shimmer.
   - Interactive milestone link pills with year and GMV scale.
3. **Sort by GMV Support:**
   - 3-mode toggle: `Sorted by Timeline (2017 → 2026)` &harr; `Sort by GMV increasing ($250K → $1B+)` &harr; `Sort by GMV decreasing ($1B+ → $250K)`.

## Next

- Verify responsive padding and grid alignments across all screen breakpoints.
