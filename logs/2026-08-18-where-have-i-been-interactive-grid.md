# Where Have I Been? — Interactive Journey Grid & Milestone Explorer

**Date:** 2026-08-18  
**Tags:** #ui #interactive #journey #hero #framer-motion #marketing-site

## Context

To make the hero experience even more engaging and direct, the search bar was transformed into an interactive question interface: **"Where have I been?"** paired with a responsive grid of selectable options representing key milestones, chapters, and ventures across Tyler's career.

## Reflections

- A free-form search input can sometimes place the cognitive burden on the visitor (*"What should I ask?"*).
- Transforming the prompt into an explicit question (*"Where have I been?"*) backed by a curated grid of visual tiles gives visitors instant, frictionless paths to discover Tyler's research origins, product ventures, DEVx keynote, and mentoring programs.
- Expanding the selected option inline into a rich story drawer with key takeaways and deep-link action buttons bridges curiosity with conversion.

## Decisions

1. **Dedicated `WhereHaveIBeen` Component** — Built a responsive grid of 6 core milestones:
   - **Field Museum** (*Chicago · Origin*)
   - **beginner** (*Founder · App Store*)
   - **DEVx Keynote** (*San Diego · April 2026*)
   - **tinker** (*Product · Claude Shell*)
   - **hāpi** (*San Diego · Hop Elixir*)
   - **1:1 Mentoring** (*Coaching & Pairing*)
2. **Tactile Micro-Interactions** — Hover lift, pastel icon accents, active glow indicators, and smooth Framer Motion spring expansion for the story detail drawer.
3. **Deep Link Actions & Quick-Switching** — Each drawer provides contextual CTAs (e.g. YouTube talk link, Calendly booking, portfolio jump links) and related milestone chips to quickly navigate between chapters.

## Next

- Consider tracking popular tile selections or cycling in new ventures as product spaces expand.
