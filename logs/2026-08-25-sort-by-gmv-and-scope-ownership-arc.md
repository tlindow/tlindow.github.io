# Sort by GMV Button & Scope/Problem Ownership Progression Arc

**Date:** 2026-08-25  
**Tags:** #ui #skills-marketplace #gmv #sort #scope #ownership #progression #staff-pm

## Context

Restored the interactive **"Sort by GMV"** increasing/decreasing toggle button while introducing a prominent **Career Scope & Ownership Arc** that explicitly conveys how Tyler's scope, decision-making complexity, and ownership over problem sets have expanded over time.

## Reflections

- Pairing the interactive GMV sorting capability with clear ownership indicators demonstrates that the financial GMV numbers ($250K &rarr; $1B+) are directly backed by expanding problem ownership: from individual workshop instruction and SMB liaison work to scaling 1&rarr;6 SRE teams, owning Amazon-grade enterprise SLA telemetry, and driving 0-to-1 founder product management.
- Adding specific ownership badges (`Engineering Manager (L7)`, `DSE Manager (L6 → L7)`, `Founder & Product Lead`, `Lead Immersive Resident`, etc.) and timeline chips directly on each card provides instant role clarity in both ascending and descending GMV views.

## Decisions

1. **Interactive Sort by GMV Toggle:**
   - Default: `Sort by GMV increasing` (`$250K → $1,000,000,000+ GMV`).
   - Toggle: `Sort by GMV decreasing` (`$1,000,000,000+ → $250K GMV`).
   - Smooth horizontal snap track with responsive navigation chevrons.
2. **Career Scope & Ownership Arc Ribbon:**
   - Header with `TrendingUp` icon: `Career Scope & Ownership Arc`.
   - Stage progression markers: `Workshop Prototyping → Partner Liaison → Team Scale (1 → 6) → $1B+ Enterprise SLA → 0 → 1 Venture Founder`.
   - Rainbow spectrum bar (`labs-rainbow-gradient`).
3. **Card-Level Scope Details:**
   - Ownership Level badge (`<ShieldCheck />`) on each card.
   - Timeline year chip (`2026`, `2025`, `2024`, `2023`, `2021`, `2019`, `2017`).
   - Descriptions rewritten with explicit focus on scope, initiative ownership, and problem complexity.

## Next

- Ensure smooth horizontal scrolling across all mobile and desktop form factors.
