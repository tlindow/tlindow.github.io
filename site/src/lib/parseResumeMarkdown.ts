import fs from "node:fs";
import path from "node:path";
import {
  ContactInfo,
  ExperienceItem,
  EducationItem,
  professionalSummary as defaultSummary,
} from "@/data/resumeData";

export interface SkillCategoryItem {
  category: string;
  skills: string;
}

export interface ParsedResume {
  rawMarkdown: string;
  contact: ContactInfo;
  visionText: string;
  technicalToolkit: string[];
  businessToolkit: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  skillsList: SkillCategoryItem[];
}

/**
 * Parses raw resume markdown into structured typed data.
 */
export function parseResumeMarkdown(markdownText: string): ParsedResume {
  const lines = markdownText.split("\n");

  const contact: ContactInfo = {
    name: "Tyler Lindow",
    title: "Fintech Product & Engineering",
    subtitle: "B2B SaaS on curiosity-safe, GenAI Rails",
    location: "San Diego, CA",
    relocation: "Relocating to Seattle, WA",
    phone: "(650) 580-5788",
    phoneObscured: "(650) •••-••••",
    email: "tlindow.invest@gmail.com",
    linkedin: "https://linkedin.com/in/tlindow",
    linkedinDisplay: "linkedin.com/in/tlindow",
    github: "https://github.com/tlindow",
    githubDisplay: "github.com/tlindow",
  };

  let visionText = defaultSummary.text;
  let technicalToolkit: string[] = [];
  let businessToolkit: string[] = [];
  const experiences: ExperienceItem[] = [];
  const education: EducationItem[] = [];
  const skillsList: SkillCategoryItem[] = [];

  let currentSection = "";
  let currentExp: Partial<ExperienceItem> | null = null;

  // Header parsing (top lines)
  for (let i = 0; i < Math.min(lines.length, 15); i++) {
    const line = lines[i].trim();
    if (line.startsWith("# ")) {
      contact.name = line.replace(/^#\s+/, "").trim();
    } else if (line.startsWith("**") && line.endsWith("**") && !currentSection) {
      contact.title = line.replace(/^\*\*|\*\*$/g, "").trim();
    } else if (line.startsWith("---") || line.startsWith("##")) {
      break;
    } else if (line) {
      const parts = line.split("|").map((p) => p.trim());
      for (const part of parts) {
        if (part.includes("linkedin.com") || part.includes("github.com")) {
          const mdLinkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
          if (mdLinkMatch) {
            const display = mdLinkMatch[1].trim();
            const url = mdLinkMatch[2].trim();
            if (url.includes("linkedin.com")) {
              contact.linkedin = url;
              contact.linkedinDisplay = display;
            } else if (url.includes("github.com")) {
              contact.github = url;
              contact.githubDisplay = display;
            }
          }
        } else if (part.includes("@")) {
          const emailMatch = part.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
          if (emailMatch) contact.email = emailMatch[1];
        } else if (part.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/)) {
          const phoneMatch = part.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
          if (phoneMatch) {
            contact.phone = phoneMatch[0];
            contact.phoneObscured = `${phoneMatch[0].slice(0, 5)} •••-••••`;
          }
        } else if (part.toLowerCase().includes("relocat")) {
          contact.relocation = part;
        } else if (part.includes(",") || part.toLowerCase().includes("diego") || part.toLowerCase().includes("seattle") || part.toLowerCase().includes("francisco")) {
          contact.location = part;
        }
      }
    }
  }

  // Section parsing
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("## Vision") || line.startsWith("## Summary")) {
      currentSection = "vision";
      continue;
    } else if (line.startsWith("## Professional Experience") || line.startsWith("## Experience")) {
      currentSection = "experience";
      continue;
    } else if (line.startsWith("## Education")) {
      if (currentExp && currentExp.company) {
        experiences.push(currentExp as ExperienceItem);
        currentExp = null;
      }
      currentSection = "education";
      continue;
    } else if (line.startsWith("## Skills")) {
      if (currentExp && currentExp.company) {
        experiences.push(currentExp as ExperienceItem);
        currentExp = null;
      }
      currentSection = "skills";
      continue;
    } else if (line.startsWith("## ")) {
      if (currentExp && currentExp.company) {
        experiences.push(currentExp as ExperienceItem);
        currentExp = null;
      }
      currentSection = line.replace(/^##\s+/, "").toLowerCase();
      continue;
    }

    if (currentSection === "vision") {
      if (line.startsWith("**Technical Toolkit:**")) {
        const skillsStr = line.replace(/^\*\*Technical Toolkit:\*\*\s*/, "").replace(/\.$/, "");
        technicalToolkit = skillsStr.split(",").map((s) => s.trim()).filter(Boolean);
      } else if (line.startsWith("**Business & GTM Toolkit:**") || line.startsWith("**Business Toolkit:**")) {
        const skillsStr = line.replace(/^\*\*Business.*?\*\*\s*/, "").replace(/\.$/, "");
        businessToolkit = skillsStr.split(",").map((s) => s.trim()).filter(Boolean);
      } else if (line && !line.startsWith("---") && !line.startsWith("#")) {
        visionText = line;
      }
    } else if (currentSection === "experience") {
      if (line.startsWith("### ")) {
        if (currentExp && currentExp.company) {
          experiences.push(currentExp as ExperienceItem);
        }
        const titleLine = line.replace(/^###\s+/, "");
        const parts = titleLine.split("|").map((p) => p.trim());
        const company = parts[0] || "";
        const role = parts[1] || "";
        const id = `${company}-${role}-${experiences.length}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        currentExp = {
          id,
          company,
          role,
          location: "",
          period: "",
          bullets: [],
        };
      } else if (line.startsWith("*") && line.endsWith("*") && currentExp) {
        // Location & Period line e.g. *San Diego, CA (Hybrid) | Mar 2026 – Jul 2026 (5 mos)*
        const metaStr = line.replace(/^\*|\*$/g, "").trim();
        const parts = metaStr.split("|").map((p) => p.trim());
        currentExp.location = parts[0] || "";
        currentExp.period = parts[1] || "";
      } else if ((line.startsWith("* ") || line.startsWith("- ")) && currentExp) {
        const bulletContent = line.replace(/^[\*\-]\s+/, "").trim();
        let category: string | undefined = undefined;
        let text = bulletContent;

        const categoryMatch = bulletContent.match(/^\*\*([^*]+?):\*\*\s*(.*)$/);
        if (categoryMatch) {
          category = categoryMatch[1].trim();
          text = categoryMatch[2].trim();
        }

        currentExp.bullets = currentExp.bullets || [];
        currentExp.bullets.push({
          category,
          text: text.replace(/\*\*(.*?)\*\*/g, "$1"),
        });
      }
    } else if (currentSection === "education") {
      if (line.startsWith("* ") || line.startsWith("- ")) {
        const eduLine = line.replace(/^[\*\-]\s+/, "").trim();
        const instMatch = eduLine.match(/^\*\*([^*]+?)\*\*\s*\|\s*(.*)$/);
        if (instMatch) {
          const institution = instMatch[1].trim();
          let rest = instMatch[2].trim();
          let location = "";

          const locMatch = rest.match(/\*\((.*?)\)\*/);
          if (locMatch) {
            location = locMatch[1];
            rest = rest.replace(/\*\((.*?)\)\*/, "").trim();
          }

          education.push({
            institution,
            degree: rest.replace(/\*([^*]+?)\*/g, "$1"),
            location,
          });
        }
      }
    } else if (currentSection === "skills") {
      if (line.startsWith("* ") || line.startsWith("- ")) {
        const skillLine = line.replace(/^[\*\-]\s+/, "").trim();
        const catMatch = skillLine.match(/^\*\*([^*]+?):\*\*\s*(.*)$/);
        if (catMatch) {
          skillsList.push({
            category: catMatch[1].trim(),
            skills: catMatch[2].trim(),
          });
        }
      }
    }
  }

  if (currentExp && currentExp.company) {
    experiences.push(currentExp as ExperienceItem);
  }

  return {
    rawMarkdown: markdownText,
    contact,
    visionText,
    technicalToolkit: technicalToolkit.length > 0 ? technicalToolkit : [
      "Python", "PyTorch", "JavaScript", "React", "Node.js", "Flask",
      "LLMs & RAG", "Agentic Coding Frameworks", "Snowflake", "Vercel",
      "Cursor", "IntelliJ IDEA", "VS Code", "SRE Support", "Expo", "Jules",
      "Antigravity", "Luma",
    ],
    businessToolkit: businessToolkit.length > 0 ? businessToolkit : [
      "Developer Advocacy & Evangelism", "Partner Engineering",
      "Enterprise Merchant Integrations ($10B+ Portfolio)",
      "GMV Attribution & Revenue Acceleration", "Go-To-Market (GTM) Strategy",
      "Developer Paved Paths & Enablement", "Cross-Functional Stakeholder Alignment",
      "Voice of the Developer Synthesis", "Multi-City Field Research & Customer Discovery",
      "Technical Community Architecture",
    ],
    experiences: experiences.length > 0 ? experiences : [],
    education: education.length > 0 ? education : [],
    skillsList: skillsList.length > 0 ? skillsList : [
      { category: "AI & Agentic Systems", skills: "LLMs & RAG, Agentic Coding Frameworks, PyTorch, Antigravity, Jules, Luma, First-Principles GenAI Upskilling." },
      { category: "Languages & Frameworks", skills: "Python, JavaScript, TypeScript, React, Next.js, Node.js, Flask, Tailwind CSS, Expo, p5.js." },
      { category: "Cloud, Data & SRE", skills: "Snowflake, SQL, ETL Pipelines, SRE Support, Vercel, Git/GitHub, CI/CD, 99.99% Uptime Telemetry." },
      { category: "Product & GTM Strategy", skills: "Developer Advocacy & Evangelism, Partner Engineering, Enterprise Merchant Integrations ($10B+ Portfolio), GMV Attribution & Revenue Acceleration, GTM Strategy, Developer Paved Paths & Enablement, Cross-Functional Stakeholder Alignment, Voice of the Developer Synthesis, Technical Community Architecture." }
    ],
  };
}

/**
 * Loads and parses the resume markdown file directly from disk in Node / Next.js server components.
 */
export function getResumeMarkdownContent(): string {
  const possiblePaths = [
    path.join(process.cwd(), "content", "resume.md"),
    path.join(process.cwd(), "site", "content", "resume.md"),
    path.join(process.cwd(), "..", "content", "resume.md"),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return fs.readFileSync(p, "utf-8");
    }
  }

  return "";
}
