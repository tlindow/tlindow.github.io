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
  pretitle?: string;
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
  role: "Fintech Product & Engineering",
  avatar: "/IMG_0548.jpeg",
  handle: "@tlindow",
  linkedin: "https://www.linkedin.com/in/tlindow",
};

export const blogPosts: BlogPost[] = [
  {
    id: "securing-500k-gmv-win",
    slug: "securing-500k-gmv-win",
    pretitle: "My work product",
    pillarId: "core",
    pillarLabel: "B2B Fintech Case Study",
    title: "Marketing as Engineering Leadership",
    subtitle:
      "Treating top-of-funnel marketing as a core engineering discipline—leading the affirm.com revamp to unify web and mobile conversion, driving $500K in GMV through perseverance and team focus.",
    date: "2026-09-11",
    readTime: "2 min read",
    author: defaultAuthor,
    tags: [
      "Engineering Leadership",
      "Affirm",
      "Perseverance",
      "Black Friday",
    ],
    summary:
      "In October of 2025, we revamped the affirm.com marketing website in order to create design continuity between web and mobile apps and drive more conversion for the ~1M monthly viewers of the site.",
    previewText:
      "In October of 2025, we revamped the affirm.com marketing website in order to create design continuity between web and mobile apps and drive more conversion for the ~1M monthly viewers of the site.",
    slides: [
      {
        id: 1,
        slideNumber: "01/03",
        quote:
          "Engineers are important... and even if we are not seen for all of our efforts right now, you know what you accomplished.",
      },
      {
        id: 2,
        slideNumber: "02/03",
        quote:
          "In 2026, engineering leadership is about perseverance. In the wake of developers being told that their jobs are being taken away by AI, it's about reminding them to not lose focus.",
      },
      {
        id: 3,
        slideNumber: "03/03",
        quote:
          "Remind each other that engineering will forever be a human pursuit.",
      },
    ],
    content: [
      `In October of 2025, we revamped the affirm.com marketing website in order to create design continuity between web and mobile apps and drive more conversion for the ~1M monthly viewers of the site.`,
      `And when we were finished, we had generated an additional $500K in GMV through a 3-day pre-Black Friday sale.`,
      `It was a lot of intense focus for engineers on my team and, frankly, one too many late nights to get this done. And what I told my team at the end of all of the scoping, collaboration, and execution alongside the immense work of product, design, and copy was:`,
      `> "Engineers are important... and even if we are not seen for all of our efforts right now, you know what you accomplished."`,
      `In 2026, engineering leadership is about perseverance. And simultaneously, it's about discovering how you lead under pressure.`,
      `In the wake of developers being told that their jobs are being taken away by AI, it's about reminding them to not lose focus.`,
      `Remind each other that engineering, and figuratively and literally, lead-generation, will forever be a human pursuit.`,
    ],
  },
  {
    id: "velocity-labs-system-sculpting",
    slug: "velocity-labs-system-sculpting",
    pretitle: "My work product",
    pillarId: "methodical-enjoyable",
    pillarLabel: "01 Methodical & Empathetic",
    title: "B2B Portals as Trust Stores",
    subtitle:
      "Transforming legacy merchant portals into resilient trust stores—standing up Velocity Labs to eliminate recurring incidents, sustain 99.9% availability for Intuit scale, and unlock AI-driven agility.",
    date: "2026-09-11",
    readTime: "3 min read",
    author: defaultAuthor,
    tags: [
      "Velocity Labs",
      "Affirm",
      "AI Development",
      "Reliability",
    ],
    summary:
      "In September of 2025, I implemented Velocity Labs for my team in order to manage new and ongoing production incidents occurring on our legacy platform every week and provide ourselves a chance to develop revenue-driving software for Affirm in the new year.",
    previewText:
      "In September of 2025, I implemented Velocity Labs for my team in order to manage new and ongoing production incidents occurring on our legacy platform every week and provide ourselves a chance to develop revenue-driving software for Affirm in the new year.",
    slides: [
      {
        id: 1,
        slideNumber: "01/03",
        quote:
          "Velocity Labs had a simple objective: get engineers on my team developing more with less, and embracing AI-driven development.",
      },
      {
        id: 2,
        slideNumber: "02/03",
        quote:
          "The reason we weren't getting as much done before wasn't because we had adopted a brittle legacy system; it was because organizationally, we did not have a growth mindset.",
      },
      {
        id: 3,
        slideNumber: "03/03",
        quote:
          "The intelligence age is helping us move faster, but the real gains in adopting AI technology will help us unlock products that make it easy to try new things and extend trust with customers.",
      },
    ],
    content: [
      `In September of 2025, I implemented Velocity Labs for my team in order to manage new and ongoing production incidents occurring on our legacy platform every week and provide ourselves a chance to develop revenue-driving software for Affirm in the new year.`,
      `Over the span of that quarter, we achieved 99.9% availability (up from as low as 99.7%) and worked through what must have been 10 production incidents (one of them being a blocker to launch with hundreds of thousands of new merchants with Intuit), all while managing the collaborative effort to revamp the backend architecture of the merchant portal and lay the groundwork for consistently achieving 99.99% availability as part of a multi-year program.`,
      `Velocity Labs had a simple objective: get engineers on my team developing more with less, and embracing AI-driven development. Coupled with 1:1s with each of my direct reports, we did the work required to work effectively with AI and change our mindsets from "I can't, I'm still fixing this bug" to "I think we can actually get this done in two days." And I did this by going to San Francisco for two weeks, changing my mental model for how AI works under the hood, and learning that AI is about organizational intelligence. The reason we weren't getting as much done before wasn't because we had adopted a brittle legacy system; it was because, organizationally, we did not have a growth mindset.`,
      `Shortly before departing Affirm, I initially gained traction with engineers in the larger org to talk about how we could find new ways to grow the engineering practice using AI. And as part of a company-wide AI Paved Paths week, I started to develop an idea for an application that would allow Affirm to expand its merchant platform for in-store mobile use, managed by merchant users.`,
      `I'll end with this:`,
      `> "The intelligence age is helping us move faster, but the real gains in adopting AI technology will help us unlock products that make it easy to try new things and extend trust with customers."`,
    ],
  },
  {
    id: "over-index-on-intuition",
    slug: "over-index-on-intuition",
    pretitle: "Leadership opinion",
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
          "The most valuable asset we have left, from software to science education, is our creative energy.",
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
      `When I was managing engineering teams at Affirm, the most revealing question I could ask a developer was simply:`,
      `> "What would you build?"`,
      `Maybe that seems counterintuitive in a corporate context of, "Just tell me what to build."`,
      `That last piece of the process we've relied on so much in this industry pre-AI is someone's creative energy. It's the most costly thing—it can get us into rabbit holes, and it can get us into dark places at times because we give so much of ourselves. But it is very important for us to tap into that safely, and use that tool to our advantage in this market.`,
      `One question to ask yourself is: *What does it mean to tap into my creative energy safely? And what does it mean for me to have an opinion about a product?* A great place to start is to look at the software products you already love, and figure out why you love them. Dissect them, and reverse-engineer the product a bit.`,
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
