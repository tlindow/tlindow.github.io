# Company Filter Buttons & Embedded GMV Attribution Hero Cards

**Date:** 2026-08-25  
**Tags:** #ui #skills-marketplace #companies #employers #filters #logos #cards #gmv #attribution #staff-pm

## Context

Updated the Skills Marketplace cards on `page.tsx` to embed the **GMV Attribution** number and scale/scope metrics directly inside the top hero banner placement (replacing the empty solid color block), and integrated previous employer brand logo icons into each filter option button.

## Reflections

- Placing the large typographic GMV attribution figure (`text-2xl sm:text-3xl font-black`) with header chips directly within the Tinker palette hero banner turns each card header into an impactful visual anchor, eliminating empty color rectangles.
- The streamlined card body underneath cleanly displays the title, description, and employer logo footer.

## Decisions

1. **Card Hero Banner (`aspect-[16/10]`):**
   - Top Row: `GMV Attribution` badge (pill) and `Scale & Scope` metric badge (white pill).
   - Main Value: Large bold GMV currency typography (`$1,000,000,000+ GMV`, `$100,000,000+ GMV`, `$50,000,000 GMV`, etc.).
   - Background: Tinker palette colors (`bg-rose`, `bg-peach`, `bg-mint`, `bg-sky`, `bg-violet`, `bg-amber`).
2. **Card Body & Footer:**
   - Bold title and concise description.
   - Border-separated footer featuring "Previous Employer" label and employer brand logo.
3. **Filter Buttons with Logos:**
   - Filter options for `All Companies`, `Affirm`, `Beginner`, `Galvanize`, `The Tech Interactive`, and `Computer History Museum` with dynamic card counts and brand mark icons.

## Next

- Maintain test and build validation across all device viewports.
