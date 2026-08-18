# Aligning Personal Site with Beginner Ventures & Speaking Milestone

**Date:** 2026-08-18  
**Tags:** #founder #beginner #tinker #hapi #speaking #devx #ventures #brand #framer-motion

## Context

Tyler's journey has evolved from general frontend exploration and developer mentoring into founding **beginner**, building **tinker** (the quiet, ad-free web shell powered by Claude), creating **hāpi** (the San Diego hop elixir craft brand), and delivering a featured keynote (*"Human Minds & AI Models"*) at DEVx Network San Diego.

This update incorporates these milestones and narrative threads onto the personal website, establishing it as the front door for Tyler's ventures, speaking, and mentoring.

## Reflections

- The personal marketing site is most compelling when it reflects current truth rather than speculative or generic placeholders.
- Featuring the recorded DEVx San Diego 2026 talk (*"Human Minds & AI Models"*) immediately demonstrates domain authority and technical depth at the intersection of biological cognition and AI agent architecture.
- Re-architecting the Portfolio section into *Featured Products & Ventures* (**beginner**, **tinker**, **hāpi**, and **Dreaming with Marisól**) vs. *Creative Code & Open Source* creates a clear visual hierarchy between business ventures and creative/lab experiments.
- Incorporating the San Diego neighborhood story (Stockton & Golden Hill 92102) grounds Tyler's builder identity in real community craft.

## Decisions

1. **Featured DEVx San Diego Talk in Speaking Section** — Replaced hypothetical future speaking topics with a responsive 16:9 embedded player of Tyler's keynote (*"Human Minds & AI Models"*, April 18, 2026), timestamp cues (starts at 10:31), and direct YouTube fallback links.
2. **Two-Tiered Ventures & Work Section** — Elevated **beginner**, **tinker**, **hāpi**, and **Dreaming with Marisól** with custom brand marks, category badges, and tech stacks, while preserving open-source creative coding experiments below.
3. **Founder & Maker Narrative in Hero/About** — Refined the kicker to *"Founder · Software Developer · Mentor"* and wove Tyler's San Diego maker vision and community roots into the About story and venture metrics.
4. **Reusable Brand Mark Components** — Created `BeginnerMarks.tsx` exporting SVG components for the beginner seed mark, tinker rainbow-web mark, and hāpi cup mark.
5. **AI Knowledge Base Alignment** — Updated `aiKnowledge.ts` with comprehensive details on the DEVx keynote, beginner platform, tinker web shell, and hāpi beverage venture.

## Next

- Explore adding direct links or preview modals for the beginner pitch deck (`/investor-relations/pitch`).
- Continue expanding long-form technical write-ups and essays derived from DEVx talk themes and autonomous agent development.
