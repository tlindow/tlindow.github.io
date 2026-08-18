# GitHub Copilot Instructions for Tyler Lindow's Personal Website

This repository powers **Tyler Lindow's personal website & brand hub (Lindow Labs)**. It is built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Repository Structure

- `site/` — Next.js 16 (App Router) frontend application
  - `src/app/` — Pages (`/`, `/brand`), layout, and global styles
  - `src/components/` — Feature sections (Navbar, Hero, About, Portfolio, Speaking, Mentoring, Content, TechStack, Footer)
  - `src/components/animations/` — Composable Framer Motion building blocks (`ScrollReveal`, `AnimatedText`, `CountUp`, `FloatingOrbs`, `GradientBeam`, `MagneticButton`)
  - `src/components/brand/` — Brand marks gallery, previews, and download logic
  - `public/` — Static assets, brand SVGs and PNG exports
- `logs/` — Chronological markdown build logs capturing context, reflections, decisions, and future plans
- `.github/workflows/` — CI/CD workflows for GitHub Pages static deployments

## Core Tech Stack & Patterns

- **Next.js 16** with static export (`output: "export"` in `next.config.ts`)
- **React 19**
- **TypeScript** (Strict mode)
- **Tailwind CSS 4** (Utility-first styling using warm, pastel aesthetic)
- **Framer Motion** for all scroll-triggered reveals, spring physics, and micro-interactions
- **lucide-react** for iconography

## Design & Code Conventions

1. **Aesthetic Philosophy**: Warm, editorial, and tactile. Combines clean typography (DM Serif Display and sans-serif pairing) with physics-based motion.
2. **Animation Architecture**: Client components (`"use client"`) utilizing reusable primitives in `src/components/animations/`. Do not introduce ad-hoc CSS animations when Framer Motion springs/transitions are appropriate.
3. **Static Export Friendly**: Do not use server-only features (such as `cookies()`, dynamic server headers, or dynamic SSR API routes) that break `output: "export"`.
4. **Forbidden Cliché Tropes**:
   - Avoid generic AI/crypto dark gradients with violet/neon borders.
   - Avoid icon-stuffed bento boxes without clear informational hierarchy.
   - Avoid textureless, flat surfaces; maintain subtle borders, shadows, and glassmorphism where appropriate.
5. **Build Logs**: When making substantial architectural or strategic changes, document context, reflections, decisions, and next steps in `logs/YYYY-MM-DD-<topic>.md`.
