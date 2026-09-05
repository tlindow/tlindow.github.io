## Agent Instructions

This repository contains **Tyler Lindow's workspace**, organized into three core pillars:
1. **`exercises/`** — Hands-on technical exercises and tutorials exclusively for personal learning and deep practice.
2. **`content/`** — Personal journal entries, essays, and polished post repository (public and private drafts).
3. **`site/`** — The living Next.js application powering Tyler's personal website and interactive portfolio.

### Planning mode

The first prompt of the session should always enter a planning mode, unless otherwise stated.

When planning, treat Markdown notes as the primary source of intent before relying on anything user-facing in the app.

Planning priority order:

1. `content/*.md` entries and essays, especially core philosophy documents and reflections
2. `README.md`, `exercises/README.md`, and other repository Markdown explaining direction or constraints
3. The current frontend implementation in `site/src/components/` and `site/src/app/`

Planning questions should be concise, synthesis-oriented, and based on the underlying thoughts captured in Markdown files. Do not simply restate or overfit to the exact wording currently printed on the frontend unless the task is explicitly about UI copy or presentation.

When there is tension between written reflections and the current UI, assume the Markdown captures broader intent and use the UI as the current expression of that intent rather than the sole source of truth.

### Content publishing workflow

The `content/` workspace uses a **PR-based workflow**:
- Publishing new essays, journal entries, or significant updates is performed via Pull Requests.
- GitHub activity serves as a public "feed" / posting mechanism that followers can discover and read into.
- Agent tasks involving new content drafts should support this PR-centric broadcasting flow.

### Project structure

- `exercises/` — Hands-on technical learning exercises (for Tyler's personal learning)
  - `exercises/proto-learning/` — Protobuf & gRPC B2B fintech settlement exercises
- `content/` — Journal entries, essay drafts, and master resume source
  - `typing_is_learning.md` — Philosophy essay on typing and hands-on coding
  - `resume.md` — Canonical resume markdown
- `site/` — The Next.js web application
  - `src/app/` — App Router pages and layout
  - `src/components/` — React components (Navbar, Hero, About, Portfolio, Speaking, Mentoring, Content, TechStack, Footer)
  - `src/components/animations/` — Reusable animation components (ScrollReveal, AnimatedText, CountUp, FloatingOrbs, GradientBeam, MagneticButton)
  - `public/` — Static assets (favicon, images, exported documents)
- `README.md` — GitHub profile README and workspace root index

### Environment setup

```bash
cd site
npm install
```

### Running the dev server

```bash
cd site
npm run dev
```

The site runs at `http://localhost:3000`.

### Building for production

```bash
cd site
npm run build
npm start
```

### Linting

```bash
cd site
npm run lint
```

### Testing

- No automated test suite is configured yet.
- Manual testing: run the dev server and verify pages render correctly in the browser.
- Run `npm run build` in the `site/` directory to verify the build passes.

### Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (scroll-triggered animations, gestures, spring physics)
- **lucide-react** (icons)

### Animation architecture

The site uses a composable animation system built on Framer Motion:

- `ScrollReveal` — fade/slide-in on scroll with configurable direction, delay, and blur
- `StaggerContainer` / `StaggerItem` — stagger children animations on scroll
- `AnimatedText` — word-by-word text reveal
- `CountUp` — animated number counter on scroll
- `FloatingOrbs` — ambient drifting gradient blobs with grid overlay
- `GradientBeam` — slow-rotating radial gradient with pulse
- `MagneticButton` — cursor-following spring-based button effect

All animation components are client components (`"use client"`) and are located in `site/src/components/animations/`.
