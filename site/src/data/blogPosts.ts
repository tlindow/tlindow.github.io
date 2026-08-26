export interface SlideData {
  id: number;
  slideNumber: string; // e.g. "01/04"
  quote: string;
  subtext?: string;
  theme?: "warm" | "dark" | "indigo";
}

export interface BlogPost {
  id: string;
  slug: string;
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
  slides: SlideData[];
  content: string[]; // Markdown/paragraph blocks
}

export const blogPosts: BlogPost[] = [
  {
    id: "over-index-on-intuition",
    slug: "over-index-on-intuition",
    title: "What Would You Build? Over-Indexing on Intuition in the Age of AI",
    subtitle:
      "When execution becomes frictionless, the most valuable asset we have left is our creative energy.",
    date: "2026-08-26",
    readTime: "3 min read",
    author: {
      name: "Tyler Lindow",
      role: "Fintech Product-Eng Manager",
      avatar: "/IMG_0548.jpeg",
      handle: "@tlindow",
      linkedin: "https://www.linkedin.com/in/tlindow",
    },
    tags: [
      "Engineering Leadership",
      "Developer Intuition",
      "AI & DevX",
      "Product Strategy",
    ],
    summary:
      "I think it's product sense. When I was managing engineering teams at Affirm, the most revealing question I could ask a developer was simply: 'What would you build?'",
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
      `I think it's it's product sense. I think there's so been so many times in working with with engineers that you know, I I Yeah, I I tend to be maybe overly empathetic if that's possible. Um at least in the context of building a company. But but this is one that um that I it's kind of uh like I would be a little frustrated if if if someone um said like, oh, I just that like if they were like, I don't have an opinion about the product, right?`,
      `And I think that's I asked my engineers when I was working at a firm like, what's your uh opinion? Uh like what what would you build, you know? And maybe that seems counterintuitive in a corporate context of like, no, you just tell me what to build.`,
      `But I think there's like our the the last piece a lot that that last piece of the process that that we've relied on so much in in this industry pre pre AI uh is that of like someone's someone's creative energy and it's the most costly thing, you know, it can it can get us into rabbit holes, it can get us into dark places at times because we've we give so much of ourselves. But it is I think very important for us to tap into that safely and and safely. Uh and use that tool to our advantage in this market.`,
      `And um, you know, I think I think one maybe question to ask your ask our ask yourself is um, uh, yeah, like, what what is that, what does it mean to tap into my creative energy safely? And what does it mean for me to have an opinion about a product? And I would maybe place a start is like, look at the products that you software products that you already love, and and figure out why you love them. Um kind of dissect them, maybe kind of reverse, reverse engineer the product a bit.`,
      `Uh and I think that is going to be a a a critical must master skill uh to survive in in this transition uh in the AI world where where um where, yeah, the survive in this transition of the AI world where the only thing we really have left is, you know, what makes us human, what makes us understand when something feels right, uh because that's because, yeah, that's that's that's one of the most valuable things that we have left, and so we need to over index on that and bring that to the forefront uh as as engineers.`,
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
