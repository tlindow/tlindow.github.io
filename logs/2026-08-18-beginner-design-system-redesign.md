# Beginner Design System Rollout & Brand Aesthetic Redesign

**Date:** 2026-08-18  
**Tags:** #ui #design-system #beginner #brand #tokens #typography #framer-motion #marketing-site

## Context

Tyler Lindow's personal website has been redesigned into the authentic **beginner design system** — uniting the visual language of *beginner* (`beginner.work`), *tinker*, and *hāpi* into a coherent, craft-driven personal presence.

## Reflections

- The previous pastel gradient palette served well for initial explorations, but adopting the grounded, botanical aesthetic of **beginner** creates strong brand alignment across Tyler's ventures, keynote speaking, and developer mentoring.
- Deep Forest Green (`#2D5A3D`) and Fresh Sprout Green (`#7BC47A`) paired with warm ivory/sand surfaces (`#FFFDF7` and `#F5F3EF`), rich ink typography (`#1F1D1A`), and tactile borders (`#E6E2D8`) communicate high-craft engineering without looking generic or sterile.
- The organic squircle geometry and tactile button states provide clean, calm interactive affordances.

## Decisions

1. **Design Tokens & Tailwind Configuration** — Defined core beginner tokens in `@theme inline` in `globals.css`:
   - `--color-forest`: `#2D5A3D` & `--color-forest-dark`: `#1F3E2A`
   - `--color-forest-light`: `#EAF4ED` (Soft sage/forest background)
   - `--color-sprout`: `#7BC47A` & `--color-leaf`: `#5AAD58`
   - `--color-sand`: `#F5F3EF` & `--color-cream`: `#FFFDF7`
   - `--color-foreground`: `#1F1D1A` & `--color-muted`: `#736E67`
   - `--color-border`: `#E6E2D8`
2. **Timeline Spine & Milestone Badges** — Updated `Timeline.tsx` with a botanical gradient spine (`from-forest via-sprout via-sky via-amber to-forest/80`), forest squircle milestone badges, sprout checkmark bullets, and solid forest primary CTAs (`bg-forest text-sand hover:bg-forest-dark`).
3. **Hero & Milestone Skip Navigation** — Redesigned `WhereHaveIBeen.tsx` cards with tactile hover lift, sand year pills, active forest borders, and a calm, organic drawer layout.
4. **Header & Footer Alignment** — Styled `Navbar.tsx` and `Footer.tsx` with warm paper backdrop blurs, forest green hover underlines, avatar ring accents, and a botanical progress bar.

## Next

- Explore subtle micro-haptics or sound design for milestone clicks if desired.
- Continue adding future product announcements or investor relation links seamlessly into the timeline.
