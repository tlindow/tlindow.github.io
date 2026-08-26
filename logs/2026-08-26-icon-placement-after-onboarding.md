# Move Upward Graph Icon After "Onboarding"

**Date:** 2026-08-26  
**Tags:** #ui #hero #typography #icons #layout

## Context
Repositioned the `<TrendingUp />` upward graph icon to follow directly after the word `"Onboarding"`, rendering the sequence: **`Onboarding <TrendingUp /> $0 – $10B+ GMV enterprises`**.

## Visual Hierarchy
1. **Title:** `Fintech Product-Eng Manager`
2. **Tagline:** `B2B SaaS on curiosity-safe, GenAI Rails`
3. **Scale Descriptor:** `Onboarding <TrendingUp /> $0 – $10B+ GMV enterprises`
4. **Role:** `Software Engineering Manager <> PM`

## Decisions
1. **Hero Header (`page.tsx`):**
   - Structured the scale line as:
     ```tsx
     <p className="text-sm sm:text-base md:text-lg font-mono text-muted inline-flex items-center justify-center gap-1.5 mx-auto">
       <span>Onboarding</span>
       <TrendingUp size={14} className="text-indigo-dark shrink-0" aria-label="Onboarding scale" />
       <span>$0 – $10B+ GMV enterprises</span>
     </p>
     ```
2. **OpenGraph Preview Card (`opengraph-image.tsx`):**
   - Positioned the upward trend SVG icon between `Onboarding` and `$0 – $10B+ GMV enterprises`.
