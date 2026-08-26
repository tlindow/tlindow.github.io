# Replace "Hosting" Word with Server Icon

**Date:** 2026-08-26  
**Tags:** #ui #copywriting #hero #tagline #icons #lucide

## Context
Replaced the explicit word `"Hosting"` with an equivalent `<Server />` icon on the GMV scale descriptor line across the homepage hero and OpenGraph share card.

## Implementation Details
1. **Hero Header (`page.tsx`):**
   - Imported `Server` from `lucide-react`.
   - Rendered as `<p className="... inline-flex items-center justify-center gap-1.5 mx-auto"><Server size={14} className="text-indigo-dark shrink-0" aria-label="Hosting" /><span>$0 – $10B+ GMV enterprises</span></p>`.
2. **OpenGraph Card (`opengraph-image.tsx`):**
   - Rendered inline server SVG vector preceding `"$0 – $10B+ GMV enterprises"`.
