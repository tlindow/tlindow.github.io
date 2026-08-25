# Draggable Resume Modules & Interactive Workbench

**Date:** 2026-08-22  
**Tags:** #ui #resume #draggable #modules #framer-motion #space-mono #tinker #beginner

## Context

Created a dedicated interactive resume modules workbench at `/modules` that breaks down Tyler Lindow's resume into reorderable, draggable modular blocks while preserving all on-brand styling, Space Mono typography, Tinker rainbow accents, and Beginner botanical tokens.

## Reflections

- A linear resume tells a fixed reverse-chronological story, but modern hiring managers, venture partners, and engineering peers often evaluate candidates through distinct lenses (e.g., Developer Advocacy vs. Engineering Management vs. 0-to-1 Prototyping vs. Deep AI Systems).
- Breaking the resume into modular cards with Framer Motion spring drag physics allows visitors to physically rearrange, prioritize, and filter sections to craft their own preferred view.
- Linking the dynamic arrangement directly to a live Markdown generator and PDF printer transforms the site from a passive document into an interactive resume builder.

## Decisions

1. **Modular Architecture & Presets:**
   - Deconstructed into discrete modules: Header & Contact, Vision & Purpose, Key Impact Metrics, Experience cards (Beginner, Affirm L7, Affirm L6/L7, Affirm L4/L5, Galvanize, The Tech Interactive, Computer History Museum), Technical Toolkit, Business/GTM Toolkit, and Education (including Deep Atlas AI Residency).
   - Provided 5 curated presets: Full Chronology, DevRel & Advocacy Focus, Engineering Leadership, 0-to-1 Founder & Prototyping, and AI Systems & Deep Tech.
2. **Framer Motion Reorder & Layout Modes:**
   - Implemented responsive Bento Grid (2-column cards) and Linear Stack layouts with smooth spring transitions.
   - Built drag handles (`GripVertical`), card collapse/expand toggles, and hide/restore shelf for customization.
3. **Design System & Styling Integrity:**
   - Maintained Space Mono font, warm `#FFFDF7` paper surface, `#2D5A3D` forest green, `#7BC47A` sprout highlights, and Tinker 7-color pastel rainbow dividers.
4. **Dynamic Export & Print:**
   - Dynamic Markdown copy button reflecting the exact reordered sequence and clean PDF print stylesheet.

## Next

- Explore saving custom layouts to `localStorage` or shareable URL hashes if users want to link to specific modular configurations.
