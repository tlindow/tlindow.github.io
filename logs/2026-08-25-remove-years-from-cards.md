# Removed Years from Experience Cards

**Date:** 2026-08-25  
**Tags:** #ui #cleanup #cards #skills-marketplace #minimalism #staff-pm

## Context

Removed year chips (`timelineYear`) from inside all individual experience cards on `page.tsx`.

## Reflections

- Eliminating redundant year tags inside each card simplifies the hero GMV attribution banner header into two clean components: `GMV Attribution` label on the left and the audience/scale badge (`card.users`) on the right.
- Chronology is naturally preserved by the card flow order in the responsive grid and the fixed minimalist progress bar above.

## Next

- Maintain test and build hygiene.
