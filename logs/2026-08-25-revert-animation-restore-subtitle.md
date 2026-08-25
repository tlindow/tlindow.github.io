# Reverted Header Animation and Restored Subtitle

**Date:** 2026-08-25  
**Tags:** #ui #header #typography #subtitle #staff-pm

## Context

Reverted the main header from the retro clock foldover animation back to the clean, static display typography and restored the subtitle line: **`Software Engineering Manager → PM`**.

## Reflections

- The static display title (`Staff B2B Product Manager`) paired with the green mono subtitle (`Software Engineering Manager → PM`) gives immediate typographic hierarchy and clarity on page load without waiting for an animation cycle.

## Decisions

- **Main Header Structure:**
  1. `h1`: `Staff B2B Product Manager` (`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black`)
  2. Subtitle 1: `B2B at B2C scale`
  3. Subtitle 2: `Software Engineering Manager → PM` (`text-forest font-mono font-bold`)

## Next

- Keep header copy and layout synchronized across all static and mobile views.
