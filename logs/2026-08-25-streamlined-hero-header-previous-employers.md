# Streamlined Landing: Hero Header & Previous Employers Focus

**Date:** 2026-08-25  
**Tags:** #ui #minimalism #hero #previous-employers #staff-pm #affirm #beginner

## Context

Removed all extra feature/content sections below previous employers on the main landing view (`page.tsx`), focusing the page entirely on the display typography header (`Staff B2B Product Manager`, `B2B at B2C scale`, `Software Engineering Manager → PM`), recruitment actions (`Recruit Me`, `Read Resume`), previous employer logos (Beginner, Affirm, The Tech Interactive, CHM, UCSD), and the minimal footer.

## Reflections

- Eliminating extra content below previous employers creates an ultra-focused, high-signal landing card aesthetic.
- Visitors seeking the complete chronological track record can immediately click `Read Resume` to navigate to `/resume`.

## Decisions

1. **Retained Elements in `page.tsx`:**
   - Fixed top `Navbar`.
   - Display title `Staff B2B Product Manager` with subtitle `B2B at B2C scale` and `Software Engineering Manager → PM`.
   - Primary action buttons: `Recruit Me` and `Read Resume`.
   - `TrustedPartnersBar` (Previous Employers with verified brand logos).
   - Minimal bottom footer and persistent floating `Recruit Me` trigger.
2. **Removed Elements:**
   - Removed all secondary feature sections, quickstart funnels, and data tables below the previous employers block.

## Next

- Maintain the complete interactive experience in `/resume` and `/modules`.
