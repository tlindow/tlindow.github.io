# Unified Personal Site Timeline & Milestone Skip Navigation

**Date:** 2026-08-18  
**Tags:** #ui #timeline #journey #milestones #navigation #framer-motion #marketing-site

## Context

To make the personal marketing site feel like a cohesive, narrative journey rather than a collection of separate, disconnected sections, the entire site was re-architected into a continuous **Timeline of Events**. The initial milestone options in the hero section (*"Where have I been?"*) were updated to act as an interactive skip station that smoothly scrolls visitors directly to each milestone chapter.

## Reflections

- Personal portfolios often suffer from fragmented information hierarchy: an about section here, a portfolio there, a speaking block somewhere else. Framing the entire site as a chronological and thematic timeline connects the dots between Tyler's origin at Chicago's Field Museum, developer mentoring, founding *beginner*, creating *tinker* and *hāpi*, and delivering the DEVx keynote on cognitive models and AI agents.
- Giving visitors immediate interactive controls at the top of the viewport allows both fast, targeted navigation (*"Show me the keynote"*, *"Show me beginner"*) and natural vertical discovery as visitors scroll down the connecting spine.
- Subtle highlight animations on anchor landing give visitors immediate visual orientation.

## Decisions

1. **Continuous Vertical Spine & Milestone Nodes** — Created `Timeline.tsx` featuring an ambient gradient spine (`sky` &rarr; `violet` &rarr; `mint` &rarr; `rose` &rarr; `amber` &rarr; `forest`) connecting milestone nodes with date badges, icons, and rich cards.
2. **Direct Milestone Skip Navigation** — Wired `WhereHaveIBeen.tsx` options to smoothly scroll (`scrollIntoView({ behavior: 'smooth' })`) directly to target anchors (`#origin`, `#mentoring`, `#beginner`, `#hapi`, `#tinker`, `#speaking`, `#stack`), triggering active highlight pulses on the milestone cards.
3. **Embedded Rich Modules** — Preserved and enhanced core interactive assets within their corresponding timeline chapters:
   - *Origin (2019)*: Scientific research narrative, stats, and creative coding experiments (*p5.js*, *Greywater projection*, *booking module*).
   - *Mentoring (2021+)*: Offering categories and direct Calendly 1:1 booking CTA.
   - *beginner & hāpi (2024+)*: Platform details, tech tags, and San Diego community craft roots.
   - *tinker (2025+)*: Claude AI shell philosophy and calm web workspace.
   - *DEVx Keynote (April 2026)*: Responsive 16:9 embedded YouTube presentation (starts at 10:31) and speaking topics.
   - *Tech & Tools (Present)*: Production stack tags, LinkedIn content formats, and GitHub link.
4. **Synchronized Navbar & Footer** — Updated top navigation and footer links to point to the timeline anchors while maintaining the scroll progress bar across the unified layout.

## Next

- Consider adding interactive filter tags to the timeline (e.g. filter by *Founding*, *Engineering*, *Speaking*, *Community*).
- Integrate live viewer analytics or feedback capture for speaking and mentoring inquiries.
