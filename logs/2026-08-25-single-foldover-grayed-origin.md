# Single Foldover Transition with Grayed-Out Origin

**Date:** 2026-08-25  
**Tags:** #ui #animation #retro-clock #header #typography #staff-pm

## Context

Refined the main header retro clock foldover animation:
1. `Software Engineering Manager` starts off in a grayed-out font (`text-muted/50 font-bold`).
2. After a brief timed delay (`1200ms`), the letters execute a single 3D mechanical foldover transition into **`Staff B2B Product Manager`** in vibrant `text-foreground font-black`.
3. The animation flips only once and stays settled permanently.

## Reflections

- Having the origin role begin grayed out and then mechanically snap into the bold new title visually captures the career inflection point in a singular motion.
- Removing continuous interval loops keeps the page quiet and distraction-free after the initial reveal.

## Decisions

- **Single Flip Architecture:** Uses a one-shot `setTimeout` trigger that toggles `hasFlipped` from `false` to `true`.
- **Styling:** Dynamic color transition from `text-muted/50` to `text-foreground` without background cards or loop intervals.

## Next

- Monitor performance and ensure SSR / hydration consistency.
