# Top Nav Profile Photo Integration

**Date:** 2026-08-18  
**Tags:** #ui #navigation #branding #marketing-site

## Context

To make the header branding more personal and keep the hero section streamlined and text-focused, we relocated Tyler's profile photo to the top navigation bar alongside the brand title.

## Reflections

- Placing the avatar in the fixed top navigation bar creates persistent personal branding across the entire site without cluttering the hero section's primary messaging and AI concierge search bar.
- Using a native, eagerly-loaded `<img>` tag avoids Next.js `<Image fill>` hydration layout resets and style recalculations in client-rendered navigation components.

## Decisions

1. **Integrated with Brand Title in Navbar** — Embedded the photo directly in the header anchor link (`Tyler Lindow`) with a soft violet ring and hover highlight.
2. **Streamlined Hero Layout** — Removed the redundant hero photo, allowing the subtitle (*"Founder · Software Developer · Mentor"*) and headline (*"Hey, I'm Tyler."*) to take center focus immediately upon landing.
3. **Robust Asset Rendering** — Used explicit width/height dimensions with `loading="eager"` and base path interpolation for reliable display across local dev and GitHub Pages static hosting.

## Next

- Explore micro-animations or stateful status indicators (e.g., active mentoring availability badge) on the avatar if desired.
