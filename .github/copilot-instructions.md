# GitHub Copilot Instructions for Tyler Lindow's Repository

This repository powers **Tyler Lindow's workspace**, organized into three core pillars:
1. **`exercises/`** — Hands-on technical exercises and tutorials exclusively for personal learning and deep practice.
2. **`content/`** — Personal journal entries, essays, and published post repository (public and private drafts).
3. **`site/`** — The living Next.js application powering Tyler's personal website and interactive portfolio.

## Repository Structure

- `exercises/` — Hands-on technical learning exercises (for Tyler's personal learning)
  - `exercises/proto-learning/` — Protobuf & gRPC B2B fintech settlement exercises
- `content/` — Journal entries, essay drafts, and master resume source
  - `typing_is_learning.md` — Philosophy essay on typing and hands-on coding
  - `resume.md` — Canonical resume markdown
- `site/` — Next.js 16 (App Router) frontend application
  - `src/app/` — Pages (`/`, `/brand`, `/resume`, `/blog`), layout, and global styles
  - `src/components/` — Feature sections (Navbar, Hero, About, Portfolio, Speaking, Mentoring, Content, TechStack, Footer)
  - `src/components/animations/` — Composable Framer Motion building blocks (`ScrollReveal`, `AnimatedText`, `CountUp`, `FloatingOrbs`, `GradientBeam`, `MagneticButton`)
  - `src/components/brand/` — Brand marks gallery, previews, and download logic
  - `public/` — Static assets, brand SVGs, PNG exports, and downloadable resume files
- `.github/workflows/` — CI/CD workflows for GitHub Pages static deployments

## Core Tech Stack & Patterns

- **Next.js 16** with static export (`output: "export"` in `next.config.ts`)
- **React 19**
- **TypeScript** (Strict mode)
- **Tailwind CSS 4** (Utility-first styling using warm, pastel aesthetic)
- **Framer Motion** for all scroll-triggered reveals, spring physics, and micro-interactions
- **lucide-react** for iconography

## Design & Code Conventions

1. **Aesthetic Philosophy**: Warm, editorial, and tactile. Combines clean typography (DM Serif Display, Space Mono, and sans-serif pairing) with physics-based motion.
2. **Animation Architecture**: Client components (`"use client"`) utilizing reusable primitives in `src/components/animations/`.
3. **Static Export Friendly**: Do not use server-only features (such as `cookies()`, dynamic server headers, or dynamic SSR API routes) that break `output: "export"`.
4. **Learning Exercises**: When working on `exercises/`, foster active typing, scaffolding, and pedagogical depth.
5. **PR-Based Content Publishing**: The `content/` directory is managed via a Pull Request workflow so that new content broadcasts public activity to GitHub followers as a publishing feed.
