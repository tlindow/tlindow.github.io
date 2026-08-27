"use client";

import { useState } from "react";
import {
  Download,
  Copy,
  Check,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Printer,
} from "lucide-react";
import { LinkedInIcon } from "@/components/brand/PartnerLogos";
import {
  resumeContact,
  professionalSummary,
  allToolkitSkills,
  allBusinessToolkitSkills,
  professionalExperience,
  educationList,
} from "@/data/resumeData";
import { useAnalytics } from "@/context/AnalyticsProvider";
import type { ParsedResume } from "@/lib/parseResumeMarkdown";

const FALLBACK_RAW_MARKDOWN = `# Tyler Lindow
**Fintech Product-Eng Manager**
San Diego, CA | (650) 580-5788 | tlindow.invest@gmail.com
[linkedin.com/in/tlindow](https://linkedin.com/in/tlindow) | [github.com/tlindow](https://github.com/tlindow)

---

## Vision
To elevate the creative and financial position of software developers through education, in-person connection, and creating safe spaces to build business ideas.

**Technical Toolkit:** Python, PyTorch, JavaScript, React, Node.js, Flask, LLMs & RAG, Agentic Coding Frameworks, Snowflake, Vercel, Cursor, IntelliJ IDEA, VS Code, SRE Support, Expo, Jules, Antigravity, Luma.

**Business & GTM Toolkit:** Developer Advocacy & Evangelism, Partner Engineering, Enterprise Merchant Integrations ($10B+ Portfolio), GMV Attribution & Revenue Acceleration, Go-To-Market (GTM) Strategy, Developer Paved Paths & Enablement, Cross-Functional Stakeholder Alignment, Voice of the Developer Synthesis, Multi-City Field Research & Customer Discovery, Technical Community Architecture.

---

## Professional Experience

### Beginner | Founder, Developer Relations
*San Diego, CA (Hybrid) | Mar 2026 – Jul 2026 (5 mos)*
* **Developer Engagement:** Built and launched a progressive web app enabling technical founders to refine pitches and practice fundraising in-person with potential customers, successfully acquiring initial paying users.
* **Community Architecture:** Established a local technical network by hosting targeted networking events for product-focused tech professionals and engineers in the San Diego ecosystem.
* **Market Advocacy:** Traveled across major tech hubs (NYC, SF)—including weekly trips to LA over a 2-month period—to conduct user research, gather developer feedback, and evangelize the product framework directly to target audiences.

### Affirm | Software Engineering Manager (L7), Merchant Advocacy
*San Francisco, CA (Remote) | Mar 2025 – Feb 2026*
* **Program Orchestration:** Directed a high-pressure, 5-week strategic website revamp (affirm.com), unifying engineering, design, and product content to successfully unlock critical GMV attribution features.
* **Cross-Functional Performance:** Facilitated engineering trade-offs throughout the revamp to optimize mobile performance, driving an incremental **$500K GMV** during key promotional windows.
* **First-Principles GenAI Upskilling:** Spearheaded organizational adoption of LLM code-generation utilities and agentic frameworks via a constructionist, "learning-by-doing" pedagogy. Overcame engineer skepticism to accelerate high-risk project deliverables ahead of Black Friday/Cyber Monday deadlines.
* **Stakeholder Alignment:** Mediated and resolved complex technical conflicts across Manager, Director, and Staff+ levels to unblock a critical platform re-architecture and secure final technical sign-off.

### Affirm | Developer Support Engineering Manager (L6/L7), Partner Engineering
*San Francisco, CA (Remote) | Jul 2021 – Mar 2025*
* **Developer Empathy & SRE Transition:** Transformed a global support operation into a proactive development and SRE support function, systemizing 80% of operational workflows and scaling the team from 1 to 6 engineers to protect high-volume GMV.
* **Voice of the Developer:** Advocated for enterprise merchant needs across a **$10B+** strategic partner portfolio, synthesizing integration bugs into systemic root causes. Translated developer friction into the language of revenue to secure product prioritization.
* **Data-Driven Advocacy:** Developed a full-stack reporting and analytics suite (Python, Flask, Snowflake) removing 16 hours of manual overhead monthly and shifting to a proactive integration strategy.

### Affirm | Developer Support Engineer (L4/L5), Partner Engineering
*San Francisco, CA (Remote) | Sept 2019 – Jul 2021*
* **Technical Translation & Liaison:** Served as the primary technical point of contact for enterprise merchants; established the foundation for data-driven developer advocacy by diagnosing B2B integration bugs and translating them into actionable platform solutions to eliminate partner churn.

### Galvanize Inc | Lead Software Engineering Immersive Resident
*San Francisco, CA | May 2019 – Aug 2019*
* **Developer Onboarding:** Mentored a cohort of ~20 incoming Hack Reactor students, guiding them through practical JavaScript application development, Git/GitHub best practices, and foundational developer workflows.
* **Empathetic Code Review:** Managed multi-repo grading and delivered constructive, rigorous code reviews, building psychological safety and technical confidence for career transitioners entering the industry.

---

## Education
* **Northwestern University** | Graduate Coursework, Learning Sciences
* **University of California, San Diego** | B.S. NanoEngineering – *Cum Laude*
`;

interface SpaceMonoResumeProps {
  parsedResume?: ParsedResume;
}

export default function SpaceMonoResume({ parsedResume }: SpaceMonoResumeProps) {
  const [copiedMd, setCopiedMd] = useState(false);
  const [revealPhone, setRevealPhone] = useState(false);
  const { logResumeView, logOutboundClick, trackEvent } = useAnalytics();

  const contact = parsedResume?.contact || resumeContact;
  const vision = parsedResume?.visionText || professionalSummary.text;
  const techSkills = parsedResume?.technicalToolkit || allToolkitSkills;
  const bizSkills = parsedResume?.businessToolkit || allBusinessToolkitSkills;
  const experiences = parsedResume?.experiences || professionalExperience;
  const education = parsedResume?.education || educationList;
  const skillsList = parsedResume?.skillsList || [
    { category: "AI & Agentic Systems", skills: "LLMs & RAG, Agentic Coding Frameworks, PyTorch, Antigravity, Jules, Luma, First-Principles GenAI Upskilling." },
    { category: "Languages & Frameworks", skills: "Python, JavaScript, TypeScript, React, Next.js, Node.js, Flask, Tailwind CSS, Expo, p5.js." },
    { category: "Cloud, Data & SRE", skills: "Snowflake, SQL, ETL Pipelines, SRE Support, Vercel, Git/GitHub, CI/CD, 99.99% Uptime Telemetry." },
    { category: "Product & GTM Strategy", skills: "Developer Advocacy & Evangelism, Partner Engineering, Enterprise Merchant Integrations ($10B+ Portfolio), GMV Attribution & Revenue Acceleration, GTM Strategy, Developer Paved Paths & Enablement, Cross-Functional Stakeholder Alignment, Voice of the Developer Synthesis, Technical Community Architecture." }
  ];
  const rawMarkdown = parsedResume?.rawMarkdown || FALLBACK_RAW_MARKDOWN;

  const handleCopyMarkdown = async () => {
    trackEvent("resume_copy_markdown", {
      event_category: "resume_interaction",
    });
    try {
      await navigator.clipboard.writeText(rawMarkdown);
      setCopiedMd(true);
      setTimeout(() => setCopiedMd(false), 2200);
    } catch {
      setCopiedMd(true);
      setTimeout(() => setCopiedMd(false), 2200);
    }
  };

  const handlePrint = () => {
    logResumeView("download_pdf");
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-background text-foreground pt-1 pb-12 sm:pb-20 px-3 sm:px-6 print:py-0 print:px-0 print:min-h-0">
      {/* Main Single Resume Document Canvas */}
      <main className="max-w-4xl mx-auto print:max-w-none print:m-0 print:p-0">
        <article className="resume-paper rounded-3xl bg-surface border border-border p-6 sm:p-16 font-mono text-foreground leading-relaxed selection:bg-indigo-light shadow-md hover:shadow-lg relative overflow-visible print:p-0 print:m-0 print:border-none print:shadow-none print:rounded-none">
          {/* Header: Name, Title, Contact */}
          <header className="resume-section pb-3.5">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground pl-0.5">
                {contact.name}
              </h1>
              <p className="mt-1.5 text-sm sm:text-base font-bold text-indigo-dark">
                {contact.title}
              </p>
            </div>

            {/* Contact Metadata Bar: Three Lines */}
            <div className="mt-3 pt-2.5 border-t border-border-subtle space-y-1.5 text-xs sm:text-sm text-muted font-mono">
              {/* Line 1: Location & Relocation */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-1 text-foreground">
                  <MapPin size={12} className="text-indigo-dark" />
                  {contact.location}
                </span>
                {contact.relocation && (
                  <>
                    <span className="text-border select-none">|</span>
                    <span className="text-indigo-dark font-medium">
                      {contact.relocation}
                    </span>
                  </>
                )}
              </div>

              {/* Line 2: Phone & Email (on their own line) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <div className="inline-flex items-center gap-1 text-foreground">
                  <Phone size={12} className="text-indigo-dark" />
                  {/* Web view: Obscured / click-to-reveal */}
                  <span className="print:hidden">
                    {revealPhone ? (
                      <a
                        href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                        className="text-foreground hover:text-indigo-dark transition-colors"
                      >
                        {contact.phone}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setRevealPhone(true)}
                        className="text-foreground hover:text-indigo-dark transition-colors cursor-pointer text-left font-mono"
                        title="Click to reveal phone number"
                      >
                        {contact.phoneObscured || "(650) •••-••••"}
                      </button>
                    )}
                  </span>
                  {/* Print view: Always full un-obscured number */}
                  <span className="hidden print:inline text-foreground">
                    {contact.phone}
                  </span>
                </div>
                <span className="text-border select-none">|</span>

                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-1 text-foreground hover:text-indigo-dark transition-colors underline underline-offset-2"
                >
                  <Mail size={12} className="text-indigo-dark" />
                  {contact.email}
                </a>
              </div>

              {/* Line 3: LinkedIn | GitHub */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground hover:text-indigo-dark transition-colors underline underline-offset-2"
                >
                  <LinkedInIcon size={12} />
                  <span>{contact.linkedinDisplay}</span>
                  <ExternalLink size={10} className="no-print" />
                </a>
                <span className="text-border select-none">|</span>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground hover:text-indigo-dark transition-colors underline underline-offset-2"
                >
                  <Github size={12} />
                  <span>{contact.githubDisplay}</span>
                  <ExternalLink size={10} className="no-print" />
                </a>
              </div>
            </div>
          </header>

          <hr className="rainbow-divider my-4 h-[2px] w-full border-0 labs-rainbow-gradient rounded-full opacity-85" />

          {/* Section 1: Vision */}
          <section className="resume-section my-5">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground mb-2.5">
              Vision
            </h2>

            <p className="text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed">
              {vision}
            </p>
          </section>

          {skillsList.length > 0 && (
            <>
              <hr className="rainbow-divider my-4 h-[2px] w-full border-0 labs-rainbow-gradient rounded-full opacity-85" />

              {/* Section 2: Skills & Toolkits */}
              <section className="resume-section my-5">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground mb-3.5">
                  Skills &amp; Toolkits
                </h2>

                <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90 font-mono">
                  {skillsList.map((skillCat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="text-indigo-dark select-none font-bold text-xs sm:text-sm shrink-0 mt-0.5">•</span>
                      <div className="text-xs sm:text-sm">
                        <strong className="font-bold text-foreground mr-1.5">
                          {skillCat.category}:
                        </strong>
                        <span>{skillCat.skills}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          <hr className="rainbow-divider my-4 h-[2px] w-full border-0 labs-rainbow-gradient rounded-full opacity-85" />

          {/* Section 3: Professional Experience (Complete Linear List) */}
          <section className="resume-section my-5">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground mb-5">
              Professional Experience
            </h2>

            <div className="space-y-9 sm:space-y-11">
              {experiences.map((item) => (
                <div key={item.id} className="resume-experience-item">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex flex-wrap items-baseline gap-2">
                      <span className="text-foreground">{item.company}</span>
                      <span className="text-muted font-normal">|</span>
                      <span className="text-indigo-dark">{item.role}</span>
                    </h3>
                  </div>

                  {/* Location & Period Subtext */}
                  <p className="mt-1 text-xs sm:text-sm text-muted italic font-mono flex flex-wrap items-center gap-2">
                    <span>{item.location} | {item.period}{item.duration ? ` (${item.duration})` : ""}</span>
                  </p>

                  {/* Bullets */}
                  <ul className="mt-2.5 space-y-2 text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed pl-1">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className="text-indigo-dark select-none font-bold text-xs sm:text-sm shrink-0 mt-0.5">•</span>
                        <div className="text-xs sm:text-sm">
                          {bullet.category && (
                            <strong className="font-bold text-foreground mr-1">
                              {bullet.category}:
                            </strong>
                          )}
                          <span>{bullet.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <hr className="rainbow-divider my-4 h-[2px] w-full border-0 labs-rainbow-gradient rounded-full opacity-85" />

          {/* Section 4: Education */}
          <section className="resume-section my-5">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground mb-3.5">
              Education
            </h2>

            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90 font-mono">
              {education.map((edu, eduIdx) => (
                <li key={`${edu.institution}-${eduIdx}`} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <span className="text-indigo-dark select-none font-bold text-xs sm:text-sm shrink-0 mt-0.5">•</span>
                  <div className="text-xs sm:text-sm">
                    <strong className="font-bold text-foreground mr-1.5">
                      {edu.institution}
                    </strong>
                    <span className="text-muted font-normal mr-1.5">|</span>
                    <span>{edu.degree || (edu as unknown as { detail: string }).detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>

      {/* Bottom Download as PDF Button & Actions (Outside of Resume Section, No-Print) */}
      <footer className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
        <div className="flex flex-wrap items-center gap-3">
          {/* Direct Download as PDF Link */}
          <a
            href="/Tyler_Lindow_Resume.pdf"
            download="Tyler_Lindow_Resume.pdf"
            onClick={() => logResumeView("download_pdf")}
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-dark text-cream hover:bg-labs-primary-dark px-6 py-3 text-xs sm:text-sm font-mono font-bold shadow-sm transition-all cursor-pointer border border-indigo-dark/20 hover:scale-[1.02] active:scale-[0.98]"
            title="Download compiled resume as PDF"
          >
            <Download size={15} />
            <span>Download as PDF</span>
          </a>

          {/* Browser Print / Save as PDF Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-2xl bg-surface hover:bg-surface-alt text-foreground border border-border px-4 py-3 text-xs font-mono font-medium transition-colors cursor-pointer"
            title="Open browser print dialog to print or save PDF"
          >
            <Printer size={13} className="text-muted" />
            <span>Print</span>
          </button>

          {/* Secondary Copy Markdown Button */}
          <button
            type="button"
            onClick={handleCopyMarkdown}
            className="inline-flex items-center gap-1.5 rounded-2xl bg-surface hover:bg-surface-alt text-foreground border border-border px-4 py-3 text-xs font-mono font-medium transition-colors cursor-pointer"
            title="Copy raw markdown to clipboard"
          >
            {copiedMd ? (
              <>
                <Check size={13} className="text-sky" />
                <span>Copied .md</span>
              </>
            ) : (
              <>
                <Copy size={13} className="text-muted" />
                <span>Copy .md</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-muted">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-dark transition-colors"
          >
            LinkedIn
          </a>
          <span>&bull;</span>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-dark transition-colors"
          >
            GitHub
          </a>
          <span>&bull;</span>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/llms.txt`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              logOutboundClick("llms_txt", `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/llms.txt`)
            }
            className="hover:text-indigo-dark transition-colors"
          >
            /llms.txt
          </a>
        </div>
      </footer>
    </div>
  );
}
