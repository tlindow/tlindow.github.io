# Hero Minimalist Evolution — Centered AI Search Concierge

**Date:** 2026-08-18  
**Tags:** #ui #hero #search #minimalism #marketing-site #framer-motion

## Context

To make the personal marketing site feel immediate, bold, and focused, the introductory copy (subtitle, headline, and bio paragraph) in the hero section was removed, positioning the interactive AI Search Bar directly at the center of the initial viewport.

## Reflections

- Personal websites often default to conventional paragraph introductions that visitors quickly scan past. Elevating the AI search concierge to the center stage converts the hero from a passive read into an active, conversational front door.
- The top navigation bar already holds the brand title and avatar, and the dedicated `#about`, `#mentoring`, and `#portfolio` sections immediately downstream provide complete narrative depth for users who scroll.
- Centering the AI search bar creates a clean, intentional "command-center" aesthetic reminiscent of modern AI-native tools.

## Decisions

1. **Streamlined Hero Viewport** — Removed the kicker (`Founder · Software Developer · Mentor`), the headline (`Hey, I'm Tyler.`), and the bio paragraph from `Hero.tsx`.
2. **True Vertical & Horizontal Centering** — Positioned `AISearchBar` inside a flex container with `my-auto`, removing top offset margins from the search container for symmetrical alignment.
3. **Preserved Ambient Motion & Scroll Cues** — Retained the `FloatingOrbs`, `GradientBeam`, and animated down arrow to guide visitors into downstream sections.

## Next

- Monitor search query patterns or add more curated suggestions to the rotating placeholders.
- Enhance interactive response cards with richer media previews or quick-contact actions as new products and services launch.
