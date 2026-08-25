# Tinker Design System Rollout & Editorial Aesthetic Redesign

**Date:** 2026-08-18  
**Tags:** #ui #design-system #tinker #typography #dm-serif #jetbrains-mono #inter #framer-motion #marketing-site

## Context

The personal marketing website was redesigned into the **tinker design system** — capturing the calm, ad-free web shell aesthetic of *tinker* (`beginner.work`) with editorial serif typography, precise monospace metadata, and the signature Tinker pastel rainbow spectrum.

## Reflections

- *tinker* represents Tyler's philosophy of the quiet web — a distraction-free, ad-free, human-first workspace.
- The combination of **DM Serif Display** for headings, **Inter** for readable body prose, and **JetBrains Mono** for tags, timestamps, and codes gives the site an intellectual, serene, and modern editorial feel.
- The signature **Tinker 7-color pastel rainbow spectrum** (`#C8B6E2` lilac, `#F9A8D4` rose, `#FDBA74` peach, `#FDE68A` amber, `#7BC47A` sprout, `#7DD3FC` sky, `#6EE7B7` mint) brings warmth and life to the vertical timeline spine, hero ambient orbs, and hover states.

## Decisions

1. **Font System Configuration** — Loaded `DM_Serif_Display`, `Inter`, and `JetBrains_Mono` in `layout.tsx` and mapped them to CSS theme variables (`--font-serif`, `--font-sans`, `--font-mono`, `--font-display`).
2. **Tinker Pastel Rainbow Tokens** — Configured the full 7-color palette in `globals.css`, along with rainbow gradient utilities (`tinker-rainbow-gradient`, `tinker-rainbow-vertical`) and soft selection styling.
3. **Hero Tinker Web Mark** — Positioned the **Tinker Globe Mark** (`TinkerGlobeMark`) at the center-top of the hero with a spring hover animation.
4. **Editorial Timeline & Skip Cards** — Styled `Timeline.tsx` and `WhereHaveIBeen.tsx` with serif milestone titles, monospace year badges (`2019`, `2021+`, `2024`, `2025`, `2026`), quiet charcoal ink primary buttons (`bg-foreground text-background`), and paper secondary buttons.
5. **Navbar & Footer Alignment** — Synced top navigation with `font-serif` brand title, `font-mono` jump links, and the animated Tinker rainbow progress bar.

## Next

- Explore subtle paper grain textures or reading-mode transitions if desired.
- Keep updating timeline milestones as new tinker releases and research essays launch.
