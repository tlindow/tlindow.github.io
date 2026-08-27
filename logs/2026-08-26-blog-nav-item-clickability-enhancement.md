# Blog Nav Item Clickability Enhancement

**Date:** 2026-08-26  
**Tags:** #ui #navbar #blog #affordance #design-system #lucide #minimalism

## Context

1. The `Blog` link in `Navbar.tsx` was previously rendered as plain text (`text-xs font-mono font-bold text-foreground/90`), which lacked sufficient interactive affordance next to the styled `"Build with me"` primary CTA button.
2. Updated the `Blog` nav item to render as a distinct, interactive pill component matching the site's warm sand/surface design tokens and icon conventions.

## Reflections

- Pairing the `<BookOpen size={13} />` icon alongside the "Blog" label gives immediate visual context and signals a reading/writing destination.
- Applying a rounded-full pill container (`bg-sand/80 hover:bg-sand border border-border hover:border-indigo/40 shadow-2xs`) provides an intuitive tactile target that feels distinctly clickable without overpowering the primary "Build with me" GitHub action.

## Decisions

1. **Interactive Styling:** Styled the Blog link as a secondary pill with subtle background elevation, border highlights on hover, and tactile spring scale transitions (`hover:scale-[1.02] active:scale-[0.98]`).
2. **Icon Integration:** Included `<BookOpen size={13} />` with smooth color transitions (`group-hover:text-indigo-dark`).
3. **Accessibility:** Added an explicit title attribute (`title="Read Tyler's Blog & Field Notes"`) for tooltip and screen-reader context.

## Next

- Monitor header layout and navigation telemetry across desktop and mobile screens.
