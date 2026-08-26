# Modern LinkedIn Vector Icon & Link-Out Visual Affordances

**Date:** 2026-08-25  
**Tags:** #ui #icons #linkedin #github #link-out #lucide #arrow-up-right #brand-assets

## Context

1. Added dedicated **link-out visual affordance icons** (`ArrowUpRight` / `ExternalLink`) to both primary external call-to-actions:
   - **GitHub ("Build with me") in Navbar:** Included a subtle top-right angled arrow (`ArrowUpRight`) with a micro-interaction hover offset (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5`).
   - **LinkedIn ("Recruit Tyler") in Bottom Checkout Drawer:** Added matching top-right angled arrow (`ArrowUpRight`).
2. Replaced the generic stroke-based boxed LinkedIn icon with a crisp, modern, vector-precision `LinkedInIcon` component in `@/components/brand/PartnerLogos.tsx`.
3. Propagated the modern `LinkedInIcon` and link-out affordances across all profile contact touchpoints (`Navbar`, `CheckoutDrawer`, `Hero`, `SpaceMonoResume`, `ModuleCards`).

## Decisions

1. **Precision Vector Icon:**
   - Authored pixel-perfect `LinkedInIcon` in `site/src/components/brand/PartnerLogos.tsx` using LinkedIn's crisp official glyph geometry.
2. **Interactive Link-Out Indicator:**
   - Paired brand badges with `ArrowUpRight` (`size={13-14}`), using `opacity-75` at rest and `group-hover:opacity-100` with subtle translation on hover.

## Next

- Verified Next.js production build (`npm run build`) and ESLint (`npm run lint`) pass with 0 errors and 0 warnings.
