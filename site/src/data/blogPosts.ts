export interface SlideData {
  id: number;
  slideNumber: string; // e.g. "01/04"
  quote: string;
  subtext?: string;
  theme?: "warm" | "dark" | "indigo";
}

export type ValuePillarId =
  | "core"
  | "executive-presence"
  | "methodical-enjoyable"
  | "systems-thinker"
  | "culture-builder";

export interface BlogPost {
  id: string;
  slug: string;
  pillarId?: ValuePillarId;
  pillarLabel?: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    handle: string;
    linkedin: string;
  };
  tags: string[];
  summary: string;
  previewText?: string;
  slides: SlideData[];
  content: string[]; // Markdown/paragraph blocks
}

const defaultAuthor = {
  name: "Tyler Lindow",
  role: "Fintech Product-Eng Manager",
  avatar: "/IMG_0548.jpeg",
  handle: "@tlindow",
  linkedin: "https://www.linkedin.com/in/tlindow",
};

export const blogPosts: BlogPost[] = [
  {
    id: "securing-500k-gmv-win",
    slug: "securing-500k-gmv-win",
    pillarId: "core",
    pillarLabel: "B2B Fintech Case Study",
    title: "Converting on 500k in GMV by re-architecting a home page with 1M monthly impressions",
    subtitle:
      "Spend time breaking down (the right) problems with your engineers",
    date: "2026-09-02",
    readTime: "4 min read",
    author: defaultAuthor,
    tags: [
      "Core",
      "Engineering Leadership",
      "Fintech Scale",
      "RFC Process",
    ],
    summary:
      "",
    previewText:
      "",
    slides: [
      {
        id: 1,
        slideNumber: "01/04",
        quote:
          "Engineering disagreements rarely happen because people don't care; they happen because brilliant engineers care intensely about different dimensions.",
      },
      {
        id: 2,
        slideNumber: "02/04",
        quote:
          "We are not leaving this room with consensus; we are leaving with a decisive path anchored in boundary constraints.",
      },
      {
        id: 3,
        slideNumber: "03/04",
        quote:
          "Map proposals against explicit constraints—latency budgets, rollback radius, and revenue timelines—not personal aesthetics.",
      },
      {
        id: 4,
        slideNumber: "04/04",
        quote:
          "Executive presence is about bringing calm, rigorous clarity to chaotic situations and anchoring technical decisions in enterprise value.",
      },
    ],
    content: [
      `At Affirm, scaling enterprise merchant integrations meant operating under ruthless deadlines. Ahead of a critical promotional launch, our engineering and platform teams hit an architectural stalemate. Two Staff+ engineers held diametrically opposing views on how to structure our merchant settlement and promotional telemetry pipelines.`,
      `One camp championed a pure, greenfield event-driven redesign that promised pristine architectural boundaries but carried a three-month timeline risk. The other camp pushed for an inline database patch—fast to ship, but hazardous to maintain across high-volume promotional spikes.`,
      `While the debate spun through weeks of heated Slack threads and unresolved comment blocks, the promotional deadline was slipping. At stake was an estimated **$500,000 in incremental Gross Merchandise Volume (GMV)** that our merchant partners were counting on for the quarter.`,
      `Engineering disagreements rarely happen because people don't care; they happen because brilliant engineers care intensely about different dimensions of a system. When debates become personal or philosophical, leadership must change the coordinate system.`,
      `I called an in-person RFC facilitation session with a strict mandate: **we are not leaving this room with consensus; we are leaving with a decisive path anchored in boundary constraints.**`,
      `We reframed the debate around three non-negotiable boundaries:
1. **The Hard Latency & Consistency Budget**: The settlement ledger could not tolerate eventually consistent reads exceeding 250ms during peak checkout traffic.
2. **The Revenue Timeline**: Any architecture that could not reach staging verification two weeks prior to the promotional freeze was dead on arrival.
3. **The Rollback Blast Radius**: In the event of payload corruption, the fallback pipeline had to isolate the merchant portfolio without manual database surgeries.`,
      `By mapping both proposals against these explicit constraints rather than personal aesthetics, the path cleared immediately. We implemented a bounded gRPC service layer that decoupled merchant settlement logic, backed by an idempotent worker queue.`,
      `The integration went live 72 hours ahead of promotional freeze. Over the course of the campaign, **$500K+ incremental GMV** was captured with zero ledger anomalies, sub-150ms P99 latencies, and 16+ hours of manual merchant operations toil eliminated.`,
      `Executive presence isn't about being the loudest voice in the room. It is about bringing calm, rigorous clarity to chaotic situations, respecting deep technical expertise, and anchoring architectural decisions where they belong: in the undeniable language of enterprise value.`,
    ],
  },
  {
    id: "velocity-labs-system-sculpting",
    slug: "velocity-labs-system-sculpting",
    pillarId: "methodical-enjoyable",
    pillarLabel: "01 Methodical & Empathetic",
    title: "Velocity Labs",
    subtitle:
      "Moving past the assembly line of manual syntax: how agentic workflows let engineers sculpt systems with taste, rigor, and genuine joy.",
    date: "2026-08-18",
    readTime: "5 min read",
    author: defaultAuthor,
    tags: [
      "Velocity Labs",
      "AI & DevX",
      "Agentic Engineering",
      "Developer Joy",
    ],
    summary:
      "",
    previewText:
      "",
    slides: [
      {
        id: 1,
        slideNumber: "01/04",
        quote:
          "The syntax assembly line is dead. We are moving from manual code assembly to top-down system sculpting.",
      },
      {
        id: 2,
        slideNumber: "02/04",
        quote:
          "Sculpting begins with a high-resolution mental model of the whole: data boundaries, invariants, and failure modes.",
      },
      {
        id: 3,
        slideNumber: "03/04",
        quote:
          "Instead of writing boilerplate from memory, an engineering leader acts as a director: architecting intent, supervising agents, and verifying edge cases.",
      },
      {
        id: 4,
        slideNumber: "04/04",
        quote:
          "Velocity is not about rushing—it is about removing artificial friction so that craftsmanship and product taste can flourish.",
      },
    ],
    content: [
      `For decades, the software engineering discipline modeled itself on an industrial factory floor: tickets moved left to right across a Jira board, and developer productivity was measured by lines of boilerplate, PR throughput, and how rapidly an engineer could manually convert a product spec into syntax.`,
      `That assembly line mentality bred fatigue. It turned building software into clerical bureaucracy rather than creative invention.`,
      `With the emergence of agentic intelligence—tools like Cursor, Claude, and Jules—the marginal cost of generating boilerplate syntax has plummeted to near zero. But this hasn't diminished the engineering role; it has radically elevated it. We are shifting from manual code assembly to **top-down system sculpting**.`,
      `Sculpting begins with a high-resolution mental model of the whole: Where do data boundaries live? What are the invariant constraints of this domain? How does the system degrade gracefully under stress? What is the emotional experience of the person on the other side of this interface?`,
      `In Velocity Labs, our development philosophy is rooted in bidirectional iteration. An engineering leader acts like a director or sculptor:
1. **Architecting Intent in Plain English and Protocol Specs**: Expressing data models, state machines, and invariants with extreme precision.
2. **Supervising Agentic Synthesizers**: Directing autonomous agents to scaffold endpoints, test suites, and client mutations in parallel.
3. **Rigorous Proof and Verification**: Stepping in with deep human intuition to challenge edge cases, verify security posture, and audit latency bottlenecks.`,
      `When routine keystrokes are handled by high-performing agentic systems, what returns to the engineer is **flow**. Engineering becomes enjoyable again because you are spending your intellectual energy on high-leverage architectural topology: designing resilient schemas, untangling partner friction, and crafting fast, expressive interactions.`,
      `Velocity is not about rushing—it is about removing artificial friction so that craftsmanship and product taste can flourish at the speed of thought.`,
    ],
  },
  {
    id: "the-rebuild-intuition",
    slug: "the-rebuild-intuition",
    pillarId: "systems-thinker",
    pillarLabel: "02 Systems-Thinker",
    title: "Rebuilding Intuition",
    subtitle:
      "Drawing from the physical sciences: treating software as an empirical hypothesis and knowing exactly when to stop patching and rebuild from first principles.",
    date: "2026-08-04",
    readTime: "4 min read",
    author: defaultAuthor,
    tags: [
      "Systems Thinking",
      "Technical Debt",
      "Architecture",
      "Engineering Discipline",
    ],
    summary:
      "",
    previewText:
      "",
    slides: [
      {
        id: 1,
        slideNumber: "01/04",
        quote:
          "Systems cannot be understood merely through wishful thinking—they must be interrogated empirically.",
      },
      {
        id: 2,
        slideNumber: "02/04",
        quote:
          "Identify the inflection point where the cognitive tax and operational toil of patching exceed the compounding ROI of a clean rebuild.",
      },
      {
        id: 3,
        slideNumber: "03/04",
        quote:
          "A disciplined rebuild preserves invariants, slices cutovers horizontally, and tidies the architecture with scientific rigor.",
      },
      {
        id: 4,
        slideNumber: "04/04",
        quote:
          "When you master the rebuild intuition, you don't just eliminate tech debt—you restore your team's self-respect and creative confidence.",
      },
    ],
    content: [
      `My academic foundation in the learning sciences and physical sciences taught me a core truth: **systems cannot be understood merely through wishful thinking—they must be interrogated empirically.**`,
      `In modern engineering organizations, technical debt is often treated like a moral failure or a dirty secret swept under the rug. Teams apply patch after patch, layer upon layer of duct tape, fearing that touching the foundation will collapse the tower. Over time, velocity grinds to a halt. What should take an afternoon requires three weeks of defensive coding and regression firefighting.`,
      `A true systems-thinker approaches architecture not with fear, but with scientific clarity: formulate a testable hypothesis about where the structural friction lives, measure telemetry ruthlessly, and identify the exact inflection point where the cost of patching exceeds the compounding ROI of a clean-slate rebuild.`,
      `How do you develop the intuition for when to stop patching and rebuild? Look for three empirical signals:
1. **The Cognitive Tax Outweighs Feature Work**: When onboarding a new engineer requires explaining twenty historical exceptions rather than five clear domain rules.
2. **Cascading Side Effects**: When fixing a bug in one module silently degrades an unrelated subsystem across the boundary.
3. **Operational Drag**: When senior engineers spend more than 15% of their weekly bandwidth babysitting flaky cron jobs or manual reconciliation scripts.`,
      `At Affirm, our merchant operations team was losing 16+ hours every month to manual SLA reporting toil. We didn't add another script to the cron pile. We stopped, diagnosed the structural breakdown, and built an automated real-time SLA reporting engine that eliminated 80% of operational interventions permanently.`,
      `A disciplined rebuild is surgical: codify existing business rules into comprehensive regression suites, slice cutovers horizontally with feature flags and shadow pipelines, and discard the cruft with gratitude.`,
      `When you master the rebuild intuition, you don't just eliminate technical debt—you restore your team's self-respect, creative confidence, and architectural compound interest.`,
    ],
  },
  {
    id: "tinker-culture-led-growth",
    slug: "tinker-culture-led-growth",
    pillarId: "culture-builder",
    pillarLabel: "03 Culture-Builder",
    title: "tinker: Sparking Culture-Led Growth for Product-Minded Tech Folks",
    subtitle:
      "How tinker sparked high-signal community momentum by turning software into shared creative play for product-minded builders.",
    date: "2026-07-22",
    readTime: "4 min read",
    author: defaultAuthor,
    tags: [
      "Culture-Led Growth",
      "tinker",
      "Community Building",
      "Pedagogy",
    ],
    summary:
      "",
    previewText:
      "",
    slides: [
      {
        id: 1,
        slideNumber: "01/04",
        quote:
          "Real culture cannot be manufactured through pitch decks—it grows when people build together in psychological safety.",
      },
      {
        id: 2,
        slideNumber: "02/04",
        quote:
          "Product as a cultural artifact: tinker was built as an invitation—a new way to web.",
      },
      {
        id: 3,
        slideNumber: "03/04",
        quote:
          "We are all founders. When everyone adopts the founder mentality, vulnerability replaces posturing.",
      },
      {
        id: 4,
        slideNumber: "04/04",
        quote:
          "Culture isn't a soft secondary perk—it is the operating system upon which all technical velocity is built.",
      },
    ],
    content: [
      `Most developer meetups suffer from the same lifeless formula: an awkward networking hour, thirty minutes of slides pitching a commercial vendor, and a hurried exchange of LinkedIn handles that go cold the next morning.`,
      `When we launched the **Beginner Work** community and built **tinker** ([tinker.beginner.work](https://tinker.beginner.work)), we set out to prove a different thesis: **real culture cannot be manufactured through transactional pitch decks—it grows when people build together in an atmosphere of psychological safety and creative play.**`,
      `Product-minded engineers, designers, and founders don't want another lecture. They want space to experiment, show messy in-progress prototypes, receive earnest feedback, and remember why they fell in love with software in the first place.`,
      `Culture-led growth flips conventional growth marketing on its head:
1. **Product as a Cultural Artifact**: \`tinker\` wasn't positioned as an enterprise tool with a pricing tier; it was built as an invitation—*a new way to web*. A canvas that encouraged exploration and celebrated the beginner's mindset.
2. **The "We Are All Founders" Ethos**: In our community, there are no hierarchical barriers between a senior Staff engineer and someone shipping their first side project. When everyone adopts the founder mentality, vulnerability replaces posturing.
3. **Pedagogy Rooted in Constructionism**: Drawing on my background with Galvanize and The Tech Interactive, learning happens best through physical and digital making. When participants can touch, break, and remix code in real time, knowledge retention skyrockets.`,
      `Building high-signal culture requires intentional curation: zero pitching with 100% demonstration, celebrating the naive question, and compounding relational trust over time.`,
      `Culture isn't a soft secondary perk in tech organizations. Culture is the foundational operating system upon which all technical velocity, product innovation, and lasting talent moats are built.`,
    ],
  },
  {
    id: "over-index-on-intuition",
    slug: "over-index-on-intuition",
    title: "What Would You Build? Over-Indexing on Intuition in the Age of AI",
    subtitle:
      "When execution becomes frictionless, the most valuable asset we have left is our creative energy.",
    date: "2026-08-26",
    readTime: "3 min read",
    author: defaultAuthor,
    tags: [
      "Engineering Leadership",
      "Developer Intuition",
      "AI & DevX",
      "Product Strategy",
    ],
    summary:
      "I think it's product sense. There have been so many times working with engineers where having a strong point of view on the product is what truly sets someone apart.",
    previewText:
      "When execution becomes frictionless, having a strong point of view on the product is what truly sets an engineer apart.",
    slides: [
      {
        id: 1,
        slideNumber: "01/04",
        quote:
          'When I was managing engineering teams at Affirm, the most revealing question I could ask a developer was simply: "What would you build?"',
      },
      {
        id: 2,
        slideNumber: "02/04",
        quote: 'Sometimes, the response was, "Just tell me what to build."',
      },
      {
        id: 3,
        slideNumber: "03/04",
        quote:
          "The most valuable asset we have left from, software to science education, is our creative energy.",
      },
      {
        id: 4,
        slideNumber: "04/04",
        quote:
          "If we want to stay relevant, we have to over-index on our intuition.",
      },
    ],
    content: [
      `I think it's product sense. There have been so many times in working with engineers where I tend to be maybe overly empathetic, if that's possible—at least in the context of building a company. But this is one area where I would feel a little frustrated if someone said, "I don't have an opinion about the product."`,
      `When I was managing engineering teams at Affirm, I would ask my engineers: **"What's your opinion? What would you build?"** Maybe that seems counterintuitive in a corporate context of, *"Just tell me what to build."*`,
      `That last piece of the process we've relied on so much in this industry pre-AI is someone's creative energy. It's the most costly thing—it can get us into rabbit holes, and it can get us into dark places at times because we give so much of ourselves. But it is very important for us to tap into that safely, and use that tool to our advantage in this market.`,
      `One question to ask yourself is: *What does it mean to tap into my creative energy safely? And what does it mean for me to have an opinion about a product?* A great place to start is to look at the software products you already love, and figure out why you love them. Dissect them, and reverse engineer the product a bit.`,
      `I think that is going to be a critical, must-master skill to survive in this transition into an AI world where the only thing we really have left is what makes us human—what makes us understand when something feels right. That is one of the most valuable things we have left, and so we need to over-index on that and bring that to the forefront as engineers.`,
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostByPillar(pillarId: ValuePillarId): BlogPost | undefined {
  return blogPosts.find((p) => p.pillarId === pillarId);
}
