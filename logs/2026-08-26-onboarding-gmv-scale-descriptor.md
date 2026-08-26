# Add "Onboarding" to GMV Scale Descriptor

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #onboarding #scale

## Context
Updated the second-line GMV scale descriptor to include the action verb **`"Onboarding"`**, forming **`<TrendingUp /> Onboarding $0 – $10B+ GMV enterprises`**.

## Visual Hierarchy
1. **Title:** `Fintech Product-Eng Manager`
2. **Tagline:** `B2B SaaS on curiosity-safe, GenAI Rails`
3. **Scale Descriptor:** `<TrendingUp /> Onboarding $0 – $10B+ GMV enterprises`
4. **Role:** `Software Engineering Manager <> PM`

## Decisions
1. **Hero Header (`page.tsx`):**
   - Updated second line to `<p className="... inline-flex items-center justify-center gap-1.5 mx-auto"><TrendingUp size={14} className="text-indigo-dark shrink-0" aria-label="Onboarding scale" /><span>Onboarding $0 – $10B+ GMV enterprises</span></p>`.
2. **OpenGraph Card (`opengraph-image.tsx`):**
   - Updated preview text to `Onboarding $0 – $10B+ GMV enterprises`.
3. **Metadata & OpenGraph Tags:**
   - Updated descriptions in `layout.tsx` and `resume/page.tsx` to reference `Onboarding $0 – $10B+ GMV enterprises`.
