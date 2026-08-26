# Use Upward Graph Icon (`TrendingUp`) for GMV Scale

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #icons #trending-up #growth

## Context
Replaced the server icon with an upward graph / growth icon (`<TrendingUp />`) next to `$0 – $10B+ GMV enterprises` across the homepage hero and OpenGraph cards.

## Visual Hierarchy
1. **Title:** `Fintech Product-Eng Manager`
2. **Tagline:** `B2B SaaS on curiosity-safe, GenAI Rails`
3. **Scale Descriptor:** `<TrendingUp /> $0 – $10B+ GMV enterprises`
4. **Role:** `Software Engineering Manager <> PM`

## Decisions
1. **Hero Header (`page.tsx`):**
   - Imported `TrendingUp` from `lucide-react`.
   - Rendered as `<p className="... inline-flex items-center justify-center gap-1.5 mx-auto"><TrendingUp size={14} className="text-indigo-dark shrink-0" aria-label="Scale growth" /><span>$0 – $10B+ GMV enterprises</span></p>`.
2. **OpenGraph Card (`opengraph-image.tsx`):**
   - Rendered upward trend graph SVG polyline vector.
