export interface BulletPoint {
  category?: string;
  text: string;
  highlightMetric?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  level?: string;
  location: string;
  period: string;
  duration?: string;
  bullets: BulletPoint[];
  companyCategory?: string;
  accentColor?: string;
  accentBg?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  honors?: string;
  period?: string;
  location?: string;
  description?: string;
  accentColor?: string;
  accentBg?: string;
}

export interface ToolkitSkill {
  name: string;
  featured?: boolean;
}

export interface ToolkitCategory {
  title: string;
  skills: ToolkitSkill[];
}

export interface MetricHighlight {
  number: string;
  value?: string;
  label: string;
  context: string;
  description?: string;
  accent: string;
  bg: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  subtitle?: string;
  location: string;
  relocation?: string;
  phone: string;
  phoneObscured?: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
}

export const resumeContact: ContactInfo = {
  name: "Tyler Lindow",
  title: "Fintech Engineering & Product",
  subtitle: "B2B SaaS on curiosity-safe, GenAI Rails",
  location: "San Diego, CA",
  relocation: "Relocating to Seattle, WA",
  phone: "(650) 580-5788",
  phoneObscured: "(650) •••-••••",
  email: "tyler.lindow@gmail.com",
  linkedin: "https://www.linkedin.com/in/tlindow",
  linkedinDisplay: "linkedin.com/in/tlindow",
  github: "https://github.com/tlindow",
  githubDisplay: "github.com/tlindow",
};

export const professionalSummary = {
  text: "To elevate the creative and financial position of software developers through education, in-person connection, and creating safe spaces to build business ideas.",
  metrics: [
    {
      number: "8+",
      value: "8+",
      label: "Years Experience",
      context: "Technical leadership, software engineering & partner enablement",
      description: "Technical leadership, software engineering & partner enablement",
      accent: "text-indigo-dark",
      bg: "bg-indigo-light",
    },
    {
      number: "$10B+",
      value: "$10B+",
      label: "Partner Portfolio",
      context: "Enterprise integration strategy & developer advocacy",
      description: "Enterprise integration strategy & developer advocacy",
      accent: "text-sky",
      bg: "bg-sky-light",
    },
    {
      number: "$500K",
      value: "$500K",
      label: "Incremental GMV",
      context: "Generated via mobile perf optimization during promo windows",
      description: "Generated via mobile perf optimization during promo windows",
      accent: "text-sky",
      bg: "bg-sky-light",
    },
    {
      number: "1 → 6",
      value: "1 → 6",
      label: "Team Scale",
      context: "Scaled developer support into proactive SRE function",
      description: "Scaled developer support into proactive SRE function",
      accent: "text-violet",
      bg: "bg-violet-light",
    },
  ] as MetricHighlight[],
};

export const technicalToolkit: ToolkitCategory[] = [
  {
    title: "AI & Agentic Systems",
    skills: [
      { name: "LLMs & RAG", featured: true },
      { name: "Agentic Coding Frameworks", featured: true },
      { name: "PyTorch", featured: true },
      { name: "Antigravity", featured: true },
      { name: "Jules", featured: true },
      { name: "Luma", featured: false },
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", featured: true },
      { name: "JavaScript", featured: true },
      { name: "React", featured: true },
      { name: "Node.js", featured: true },
      { name: "Flask", featured: false },
    ],
  },
  {
    title: "Cloud, Data & SRE",
    skills: [
      { name: "Snowflake", featured: true },
      { name: "Vercel", featured: true },
      { name: "SRE Support", featured: true },
    ],
  },
  {
    title: "Developer Tools & Workflows",
    skills: [
      { name: "Cursor", featured: true },
      { name: "VS Code", featured: true },
      { name: "IntelliJ IDEA", featured: false },
    ],
  },
];

export const allToolkitSkills: string[] = [
  "Python",
  "PyTorch",
  "JavaScript",
  "React",
  "Node.js",
  "Flask",
  "LLMs & RAG",
  "Agentic Coding Frameworks",
  "Snowflake",
  "Vercel",
  "Cursor",
  "IntelliJ IDEA",
  "VS Code",
  "SRE Support",
  "Jules",
  "Antigravity",
  "Luma",
];

export const allBusinessToolkitSkills: string[] = [
  "Developer Advocacy & Evangelism",
  "Partner Engineering",
  "Enterprise Merchant Integrations ($10B+ Portfolio)",
  "GMV Attribution & Revenue Acceleration",
  "Go-To-Market (GTM) Strategy",
  "Developer Paved Paths & Enablement",
  "Cross-Functional Stakeholder Alignment",
  "Voice of the Developer Synthesis",
  "Multi-City Field Research & Customer Discovery",
  "Technical Community Architecture",
];

export interface ExperienceBullet {
  tag: string;
  text: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  locationAndPeriod: string;
  timelineSubheader?: string;
  bullets: ExperienceBullet[];
}

export interface EducationEntry {
  institution: string;
  detail: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: "beginner",
    company: "Beginner",
    role: "Founder",
    locationAndPeriod: "San Diego, CA (Hybrid) | Mar 2026 – Jul 2026 (5 mos)",
    timelineSubheader: "Product management at Affirm is incorrectly assuming to expand the partnerships side of merchant growth — Affirm will become acquired by Stripe",
    bullets: [
      {
        tag: "Developer Engagement:",
        text: "Built and launched a progressive web app enabling technical founders to refine pitches and practice fundraising in-person with potential customers. Successfully acquired initial paying users.",
      },
      {
        tag: "Community Architecture:",
        text: "Established the beginning of a local technical network by hosting targeted events for product-focused tech professionals and engineers in San Diego",
      },
      {
        tag: "Market Advocacy:",
        text: "Traveled across major tech hubs (NYC, SF) — including weekly trips to LA over a 2-month period — to conduct user research, gather developer feedback, and evangelize the product framework directly with engineers and potential VC investors.",
      },
    ],
  },
  {
    id: "affirm-swe-mgr",
    company: "Affirm",
    role: "Software Engineering Manager (L7), Merchant Advocacy",
    locationAndPeriod: "San Diego, CA (Remote) | Mar 2025 – Feb 2026 (1 yr)",
    timelineSubheader: "I ideated that developing a merchant referral program would improve the merchant moat (even with no approved engineering resources)",
    bullets: [
      {
        tag: "Program Orchestration:",
        text: "Directed a high-pressure, 5-week strategic website revamp (affirm.com), unifying engineering, design, and product content to successfully unlock critical GMV attribution features.",
      },
      {
        tag: "Cross-Functional Performance:",
        text: "Facilitated engineering trade-offs throughout the revamp to optimize mobile performance, driving an incremental $500K GMV during a pre-Black-Friday/Cyber-Monday (BFCM) 2025 promotional window.",
      },
      {
        tag: "First-Principles GenAI Upskilling:",
        text: "Spearheaded organizational adoption of LLM code-generation utilities and agentic frameworks via team workshops and one-on-one's, leading to stathe merchant portal at 99.9% uptime and de-risking catostropic failure points ahead of BFCM 2025.",
      },
      {
        tag: "Stakeholder Alignment:",
        text: "Mediated and resolved complex technical conflicts across Manager, Director, and Staff+ levels by defining timelines and written architectural decisions to unblock a critical platform re-architecture. Platform re-architecture provided better domain seperation, enabling support for 99.99% uptime capabilities",
      },
    ],
  },
  {
    id: "affirm-dse-mgr",
    company: "Affirm",
    role: "Developer Support Engineering Manager (L6 → L7), Partner Engineering",
    locationAndPeriod: "San Diego, CA (Remote) | Jul 2021 – Mar 2025 (3 yrs 9 mos)",
    timelineSubheader: "I was the backbone of service level agreement reporting and technical root cause summaries with Amazon while leading the developer support engineering team at Affirm",
    bullets: [
      {
        tag: "Engineering Scaling & Operations Distribution:",
        text: "Hired and scaled the developer support engineering team from 1 to 6 engineers (eventually 9 after re-org), systemized 80% of workflows, and successfully distributed Tier-1 operational load to the operations team to focus engineering bandwidth on platform reliability and root-cause resolution.",
      },
      {
        tag: "Enterprise SLA Telemetry ($100M+ & $10B+ Amazon GMV):",
        text: "Architected automated service level agreement (SLA) reporting pipelines and technical root-cause summaries (Python, Flask, Snowflake) for strategic enterprise merchants ($100M+ GMV) and a flagship $10B+ GMV partner (Amazon), eliminating 16 hours of monthly manual overhead and securing 100% executive stakeholder alignment.",
      },
      {
        tag: "Self-Service Merchant Onboarding:",
        text: "Maintained and scaled self-service onboarding pipelines, SDK integration tooling, and paved-path documentation supporting thousands of active merchants with zero-touch developer integration.",
      },
    ],
  },
  {
    id: "affirm-dse",
    company: "Affirm",
    role: "Developer Support Engineer (L4 → L5), Partner Engineering",
    locationAndPeriod: "San Francisco, CA (Hybrid) | Sept 2019 – Jul 2021 (1 yr 11 mos)",
    timelineSubheader: "Resolved over 300 merchant integration issue tickets at the beginning of my time with Affirm",
    bullets: [
      {
        tag: "Technical Translation & Liaison:",
        text: "Served as the primary technical point of contact for SMB merchants; established the foundation for data-driven developer advocacy by diagnosing B2B integration bugs, developing ETL pipleines for easier ad-hoc analysis of e-commerce platform issue themes, and translating them into actionable platform solutions to reduce partner churn.",
      },
    ],
  },
  {
    id: "galvanize-lead-swe",
    company: "Galvanize Inc",
    role: "Lead Software Engineering Immersive Resident",
    locationAndPeriod: "San Francisco, CA (Hybrid) | May 2019 – Aug 2019 (4 mos)",
    bullets: [
      {
        tag: "Developer Onboarding:",
        text: "Mentored a cohort of ~20 incoming Hack Reactor students, guiding them through practical JavaScript application development, Git/GitHub best practices, and foundational developer workflows.",
      },
      {
        tag: "Empathetic Code Review:",
        text: "Managed multi-repo grading and delivered constructive code reviews, building psychological safety and technical confidence for career transitioners entering the industry.",
      },
    ],
  },
  {
    id: "tech-interactive",
    company: "The Tech Interactive",
    role: "Gallery Programs Specialist → Experience Development Specialist & Prototyping Studio Coordinator",
    locationAndPeriod: "San Jose, CA (On-site) | May 2017 – Jan 2019 (1 yr 9 mos)",
    bullets: [
      {
        tag: "Partner Engineering & Curriculum Design:",
        text: "Partnered directly with Google to design and launch hands-on data literacy workshops (e.g., 'Toy Tops'), introducing data and hardware concepts utilizing mobile accelerometers and sensor APIs.",
      },
      {
        tag: "Cross-Functional Prototyping:",
        text: "Collaborated with a Staff Engineer and exhibit designers to prototype and run UX-research for a sustainability-focused city exhibit, combining 3D-printed models, graphical projection mapping, and research-backed prompts for musueum guests to engage with. Insights from the research were incorporated into the final exhibit design.",
      },
      {
        tag: "Creative Automation & Community:",
        text: "Engineered generative digital signage using JavaScript (p5.js) to automate daily workshop scheduling. Awarded the 'Monthly Innovator Award' for spearheading cross-departmental skill-sharing.",
      },
    ],
  },
  {
    id: "computer-history-museum",
    company: "Computer History Museum",
    role: "Workshop Instructor, Education Programs → Design Code Build Instructor",
    locationAndPeriod: "Mountain View, CA (On-site) | Mar 2017 – Nov 2018 (1 yr 9 mos)",
    bullets: [
      {
        tag: "Community Event Orchestration:",
        text: "Engaged with event attendees and volunteers for large-scale 'Design Code Build' events, introducing Silicon Valley families and Title I students to software engineering.",
      },
      {
        tag: "Hardware & Software Integration:",
        text: "Guided diverse groups of students across varying developmental levels through cross-disciplinary engineering exercises, blending physical builds (Rube Goldberg machines) with custom software triggers",
      },
      {
        tag: "Inclusive Technical Storytelling:",
        text: "Delivered engaging, real-time presentations and guided tours on the history of computing to large groups (10 - 20), dynamically adapting complex concepts based on the room's baseline knowledge and integrating insights from industry veterans in attendance.",
      },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Deep Atlas",
    detail: "Residency, Applied AI and Machine Learning",
  },
  {
    institution: "Northwestern University",
    detail: "Graduate Coursework, Learning Sciences",
  },
  {
    institution: "Olin College of Engineering",
    detail: "SEER Program (Summer Engineering Education Research)",
  },
  {
    institution: "Hack Reactor",
    detail: "Advanced Software Engineering Immersive",
  },
  {
    institution: "University of California, San Diego",
    detail: "B.S. NanoEngineering – Cum Laude",
  },
];

export const educationList: EducationItem[] = [
  {
    institution: "Deep Atlas",
    degree: "Residency, Applied AI and Machine Learning",
    location: "San Francisco, CA & Remote",
    accentColor: "text-indigo-dark",
    accentBg: "bg-indigo-light",
  },
  {
    institution: "Northwestern University",
    degree: "Graduate Coursework, Learning Sciences",
    location: "Evanston, IL",
    description:
      "Deep exploration of constructionist pedagogy, cognitive modeling, and how human learning dynamics shape intuitive technical systems.",
    accentColor: "text-violet",
    accentBg: "bg-violet-light",
  },
  {
    institution: "Olin College of Engineering",
    degree: "SEER Program (Summer Engineering Education Research)",
    location: "Needham, MA",
    description:
      "Engineering education research focused on student learning, curriculum prototyping, and design-led pedagogy.",
    accentColor: "text-indigo-dark",
    accentBg: "bg-indigo-light",
  },
  {
    institution: "Hack Reactor",
    degree: "Advanced Software Engineering Immersive",
    location: "San Francisco, CA",
    description:
      "Intensive full-stack software engineering, distributed systems, and modern web application architecture.",
    accentColor: "text-peach",
    accentBg: "bg-peach-light",
  },
  {
    institution: "University of California, San Diego",
    degree: "B.S. NanoEngineering – Cum Laude",
    location: "La Jolla, CA",
    honors: "Cum Laude",
    description:
      "Cross-disciplinary nanoscale materials science, physical modeling, and chemical systems.",
    accentColor: "text-sky",
    accentBg: "bg-sky-light",
  },
];

export const professionalExperience: ExperienceItem[] = experiences.map((e) => {
  const parts = e.locationAndPeriod.split(" | ");
  return {
    id: e.id,
    company: e.company,
    role: e.role,
    location: parts[0] || "",
    period: parts[1] || "",
    bullets: e.bullets.map((b) => ({
      category: b.tag.replace(/:$/, ""),
      text: b.text,
    })),
  };
});

export const visionText =
  "To elevate the creative and financial position of software developers through education, in-person connection, and psychological safety.";

export type ResumeModuleType =
  | "header"
  | "vision"
  | "experience"
  | "education"
  | "deck-section";

export interface DeckSectionData {
  id: string;
  slideNumber: string;
  category: string;
  headline: string;
  summary: string;
  theme: "green" | "yellow" | "blue" | "red" | "purple";
}

export const deckSections: Record<string, DeckSectionData> = {
  "deck-section-thesis": {
    id: "deck-section-thesis",
    slideNumber: "01",
    category: "THESIS & VISION",
    headline: "The Developer Opportunity",
    summary:
      "Elevating the creative and financial position of software developers through education, in-person connection, and creating safe spaces to build.",
    theme: "green",
  },
  "deck-section-venture": {
    id: "deck-section-venture",
    slideNumber: "02",
    category: "0-TO-1 VENTURE & TRACTION",
    headline: "Product Creation & Early Signal",
    summary:
      "Rapid prototyping, progressive web apps, acquiring initial paying users, and multi-city customer discovery (NYC, SF, LA).",
    theme: "yellow",
  },
  "deck-section-scale": {
    id: "deck-section-scale",
    slideNumber: "03",
    category: "SCALE & PLATFORM GOVERNANCE",
    headline: "Engineering Leadership & $10B+ Scale",
    summary:
      "Directing high-pressure website revamps (+$500K GMV), scaling SRE support teams 1→6, and securing 99.99% platform reliability.",
    theme: "blue",
  },
  "deck-section-ecosystem": {
    id: "deck-section-ecosystem",
    slideNumber: "04",
    category: "ECOSYSTEM & ADVOCACY",
    headline: "Developer Relations & Paved Paths",
    summary:
      "Enterprise merchant advocacy across $10B+ partner portfolios, Google IoT workshops, immersive coding mentorship, and community architecture.",
    theme: "red",
  },
  "deck-section-foundations": {
    id: "deck-section-foundations",
    slideNumber: "05",
    category: "FOUNDATIONS & COGNITIVE SCIENCES",
    headline: "Applied AI, Pedagogy & Nanoscale Systems",
    summary:
      "Deep Atlas Applied AI residency, Northwestern Learning Sciences research, and UCSD NanoEngineering foundations.",
    theme: "purple",
  },
};

export interface ResumeModuleItem {
  id: string;
  type: ResumeModuleType;
  experienceId?: string;
  sectionId?: string;
}

export interface UnifiedDeckCard {
  id: string;
  type: "profile" | "thesis" | "venture" | "scale" | "ecosystem" | "foundations";
  sectionId?: string;
  experienceIds?: string[];
}

export const unifiedDeckCards: UnifiedDeckCard[] = [
  {
    id: "card-profile",
    type: "profile",
  },
  {
    id: "card-thesis",
    type: "thesis",
    sectionId: "deck-section-thesis",
  },
  {
    id: "card-venture",
    type: "venture",
    sectionId: "deck-section-venture",
    experienceIds: ["beginner"],
  },
  {
    id: "card-scale",
    type: "scale",
    sectionId: "deck-section-scale",
    experienceIds: ["affirm-swe-mgr", "affirm-dse-mgr"],
  },
  {
    id: "card-ecosystem",
    type: "ecosystem",
    sectionId: "deck-section-ecosystem",
    experienceIds: [
      "affirm-dse",
      "galvanize-lead-swe",
      "tech-interactive",
      "computer-history-museum",
    ],
  },
  {
    id: "card-foundations",
    type: "foundations",
    sectionId: "deck-section-foundations",
  },
];

export const defaultModularDeck: ResumeModuleItem[] = [
  { id: "module-header", type: "header" },
  { id: "deck-section-thesis", type: "deck-section", sectionId: "deck-section-thesis" },
  { id: "module-vision", type: "vision" },
  { id: "deck-section-venture", type: "deck-section", sectionId: "deck-section-venture" },
  { id: "module-exp-beginner", type: "experience", experienceId: "beginner" },
  { id: "deck-section-scale", type: "deck-section", sectionId: "deck-section-scale" },
  { id: "module-exp-affirm-l7", type: "experience", experienceId: "affirm-swe-mgr" },
  { id: "module-exp-affirm-l6", type: "experience", experienceId: "affirm-dse-mgr" },
  { id: "deck-section-ecosystem", type: "deck-section", sectionId: "deck-section-ecosystem" },
  { id: "module-exp-affirm-l4", type: "experience", experienceId: "affirm-dse" },
  { id: "module-exp-galvanize", type: "experience", experienceId: "galvanize-lead-swe" },
  { id: "module-exp-tech-interactive", type: "experience", experienceId: "tech-interactive" },
  { id: "module-exp-computer-history", type: "experience", experienceId: "computer-history-museum" },
  { id: "deck-section-foundations", type: "deck-section", sectionId: "deck-section-foundations" },
  { id: "module-education", type: "education" },
];

export const replicaResumeModules: ResumeModuleItem[] = [
  { id: "module-header", type: "header" },
  { id: "module-vision", type: "vision" },
  { id: "module-exp-beginner", type: "experience", experienceId: "beginner" },
  { id: "module-exp-affirm-l7", type: "experience", experienceId: "affirm-swe-mgr" },
  { id: "module-exp-affirm-l6", type: "experience", experienceId: "affirm-dse-mgr" },
  { id: "module-exp-affirm-l4", type: "experience", experienceId: "affirm-dse" },
  { id: "module-exp-galvanize", type: "experience", experienceId: "galvanize-lead-swe" },
  { id: "module-exp-tech-interactive", type: "experience", experienceId: "tech-interactive" },
  { id: "module-exp-computer-history", type: "experience", experienceId: "computer-history-museum" },
  { id: "module-education", type: "education" },
];





