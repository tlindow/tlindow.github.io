"use client";

import { useState } from "react";
import {
  Download,
  Copy,
  Check,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  resumeContact,
  professionalSummary,
  allToolkitSkills,
  allBusinessToolkitSkills,
  professionalExperience,
  educationList,
} from "@/data/resumeData";

import ResumePage from "@/components/ResumePage";

const RAW_MARKDOWN = `# Tyler Lindow
**Staff B2B Product Manager**
San Diego, CA | (650) 580-5788 | tlindow.invest@gmail.com
[linkedin.com/in/tlindow](https://linkedin.com/in/tlindow) | [github.com/tlindow](https://github.com/tlindow)

---

## Vision
To elevate the creative and financial position of software developers through education, in-person connection, and creating safe spaces to build business ideas.

**Technical Toolkit:** Python, PyTorch, JavaScript, React, Node.js, Flask, LLMs & RAG, Agentic Coding Frameworks, Snowflake, Vercel, Cursor, IntelliJ IDEA, VS Code, SRE Support, Expo, Jules, Antigravity, Luma.

**Business & GTM Toolkit:** Developer Advocacy & Evangelism, Partner Engineering, Enterprise Merchant Integrations ($1B+ Portfolio), GMV Attribution & Revenue Acceleration, Go-To-Market (GTM) Strategy, Developer Paved Paths & Enablement, Cross-Functional Stakeholder Alignment, Voice of the Developer Synthesis, Multi-City Field Research & Customer Discovery, Technical Community Architecture.

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
* **Voice of the Developer:** Advocated for enterprise merchant needs across a **$1B+** strategic partner portfolio, synthesizing integration bugs into systemic root causes. Translated developer friction into the language of revenue to secure product prioritization.
* **Data-Driven Advocacy:** Developed a full-stack reporting and analytics suite (Python, Flask, Snowflake) removing 16 hours of manual overhead monthly and shifting to a proactive integration strategy.

### Affirm | Developer Support Engineer (L4/L5), Partner Engineering
*San Francisco, CA (Remote) | Sept 2019 – Jul 2021*
* **Technical Translation & Liaison:** Served as the primary technical point of contact for enterprise merchants; established the foundation for data-driven developer advocacy by diagnosing B2B integration bugs and translating them into actionable platform solutions to eliminate partner churn.

### Galvanize Inc | Lead Software Engineering Immersive Resident
*San Francisco, CA | May 2019 – Aug 2019*
* **Developer Onboarding:** Mentored a cohort of ~20 incoming Hack Reactor students, guiding them through practical JavaScript application development, Git/GitHub best practices, and foundational developer workflows.
* **Empathetic Code Review:** Managed multi-repo grading and delivered constructive, rigorous code reviews, building psychological safety and technical confidence for career transitioners entering the industry.

### The Tech Interactive | Experience Development Specialist & Prototyping Studio Coordinator
*San Jose, CA | May 2017 – Jan 2019*
* **Partner Engineering & Curriculum Design:** Partnered directly with Google to design and launch hands-on data literacy workshops (e.g., "Toy Tops"), teaching complex hardware concepts utilizing mobile accelerometers and sensor APIs.
* **Cross-Functional Prototyping:** Collaborated with a Staff Engineer and exhibit designers to prototype a sustainability-focused city exhibit, combining 3D-printed models with graphical projection mapping.
* **Creative Automation & Community:** Engineered generative digital signage using JavaScript (p5.js) to automate daily workshop scheduling—establishing a scalable architectural mindset later applied to the Affirm.com revamp. Awarded the "Monthly Innovator Award" for spearheading cross-departmental skill-sharing.

### Computer History Museum | Design Code Build Instructor
*Mountain View, CA | Mar 2017 – Nov 2018*
* **Community Event Orchestration:** Managed logistics, hardware (Raspberry Pi), and volunteer orientation for large-scale "Design Code Build" events, introducing Silicon Valley families and Title I students to computer science.
* **Hardware & Software Integration:** Guided diverse groups of students across varying developmental levels through cross-disciplinary engineering exercises, blending physical builds (Rube Goldberg machines) with custom software triggers using pixelated screens.
* **Inclusive Technical Storytelling:** Delivered engaging, real-time presentations and guided tours on computing history to large audiences, dynamically adapting complex concepts based on the room's baseline knowledge and seamlessly integrating insights from industry veterans in attendance.

---

## Education
* **Northwestern University** | Graduate Coursework, Learning Sciences
* **University of California, San Diego** | B.S. NanoEngineering – *Cum Laude*
`;

export default function SpaceMonoResume() {
  const [copiedMd, setCopiedMd] = useState(false);

  const page1Experiences = professionalExperience.slice(0, 3);
  const page2Experiences = professionalExperience.slice(3);

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(RAW_MARKDOWN);
      setCopiedMd(true);
      setTimeout(() => setCopiedMd(false), 2200);
    } catch {
      setCopiedMd(true);
      setTimeout(() => setCopiedMd(false), 2200);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8 sm:py-16 px-3 sm:px-6 print:py-0 print:px-0 print:min-h-0">
      {/* Main Resume Document Canvas */}
      <main className="max-w-4xl mx-auto print:max-w-none print:m-0 print:p-0">

        {/* PAGE 1 */}
        <ResumePage
          pageNumber={1}
          totalPages={2}
          footerHint="Scroll down for Page 2"
          topOffsetRem={1.5}
          bottomOffsetRem={1.5}
          zIndex={10}
        >
          {/* Header: Name, Title, Contact */}
          <header className="resume-section pb-3.5">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground pl-0.5">
                {resumeContact.name}
              </h1>
              <p className="mt-1.5 text-sm sm:text-base font-bold text-forest">
                {resumeContact.title}
              </p>
            </div>

            {/* Contact Metadata Bar: Two Lines */}
            <div className="mt-3 pt-2.5 border-t border-border-subtle space-y-1 text-xs sm:text-sm text-muted font-mono">
              {/* Line 1: Location | Phone | Email */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-1 text-foreground">
                  <MapPin size={12} className="text-forest" />
                  {resumeContact.location}
                </span>
                <span className="text-border select-none">|</span>

                <a
                  href={`tel:${resumeContact.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-1 text-foreground hover:text-forest transition-colors"
                >
                  <Phone size={12} className="text-forest" />
                  {resumeContact.phone}
                </a>
                <span className="text-border select-none">|</span>

                <a
                  href={`mailto:${resumeContact.email}`}
                  className="inline-flex items-center gap-1 text-foreground hover:text-forest transition-colors underline underline-offset-2"
                >
                  <Mail size={12} className="text-forest" />
                  {resumeContact.email}
                </a>
              </div>

              {/* Line 2: LinkedIn | GitHub */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a
                  href={resumeContact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground hover:text-forest transition-colors underline underline-offset-2"
                >
                  <Linkedin size={12} />
                  <span>{resumeContact.linkedinDisplay}</span>
                  <ExternalLink size={10} className="no-print" />
                </a>
                <span className="text-border select-none">|</span>

                <a
                  href={resumeContact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground hover:text-forest transition-colors underline underline-offset-2"
                >
                  <Github size={12} />
                  <span>{resumeContact.githubDisplay}</span>
                  <ExternalLink size={10} className="no-print" />
                </a>
              </div>
            </div>
          </header>

          <hr className="rainbow-divider my-3.5 h-[2px] w-full border-0 tinker-rainbow-gradient rounded-full opacity-85" />

          {/* Section 1: Vision */}
          <section className="resume-section mt-3 mb-5">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground mb-2.5">
              Vision
            </h2>

            <p className="text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed">
              {professionalSummary.text}
            </p>

            <div className="mt-3.5 space-y-1.5 text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed">
              <p>
                <strong className="font-bold text-foreground mr-1.5">
                  Technical Toolkit:
                </strong>
                <span>
                  {allToolkitSkills.join(", ")}.
                </span>
              </p>

              <p>
                <strong className="font-bold text-forest mr-1.5">
                  Business &amp; GTM Toolkit:
                </strong>
                <span>
                  {allBusinessToolkitSkills.join(", ")}.
                </span>
              </p>
            </div>
          </section>

          <hr className="rainbow-divider my-4 h-[2px] w-full border-0 tinker-rainbow-gradient rounded-full opacity-85" />

          {/* Section 2: Professional Experience (Page 1) */}
          <section className="resume-section my-5">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground mb-5">
              Professional Experience
            </h2>

            <div className="space-y-9 sm:space-y-11">
              {page1Experiences.map((item) => (
                <div key={item.id} className="resume-experience-item">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex flex-wrap items-baseline gap-2">
                      <span className="text-foreground">{item.company}</span>
                      <span className="text-muted font-normal">|</span>
                      <span className="text-forest">{item.role}</span>
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
                        <span className="text-forest select-none font-bold text-xs sm:text-sm shrink-0 mt-0.5">•</span>
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
        </ResumePage>

        {/* PAGE 2 */}
        <ResumePage
          pageNumber={2}
          totalPages={2}
          headerTitle="Tyler Lindow • Experience (Cont.) & Education"
          headerSubtitle="Staff B2B Product Manager"
          topOffsetRem={2.5}
          bottomOffsetRem={1.5}
          zIndex={20}
        >
          {/* Section 2: Professional Experience (Page 2) */}
          <section className="resume-section mb-5 print:mt-0">
            <div className="space-y-9 sm:space-y-11">
              {page2Experiences.map((item) => (
                <div key={item.id} className="resume-experience-item">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex flex-wrap items-baseline gap-2">
                      <span className="text-foreground">{item.company}</span>
                      <span className="text-muted font-normal">|</span>
                      <span className="text-forest">{item.role}</span>
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
                        <span className="text-forest select-none font-bold text-xs sm:text-sm shrink-0 mt-0.5">•</span>
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

          <hr className="rainbow-divider my-4 h-[2px] w-full border-0 tinker-rainbow-gradient rounded-full opacity-85" />

          {/* Section 3: Education */}
          <section className="resume-section my-5">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground mb-3.5">
              Education
            </h2>

            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90 font-mono">
              {educationList.map((edu) => (
                <li key={edu.institution} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <span className="text-forest select-none font-bold text-xs sm:text-sm shrink-0 mt-0.5">•</span>
                  <div className="text-xs sm:text-sm">
                    <strong className="font-bold text-foreground mr-1.5">
                      {edu.institution}
                    </strong>
                    <span className="text-muted font-normal mr-1.5">|</span>
                    <span>{edu.degree}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </ResumePage>
      </main>

      {/* Bottom Download as PDF Button & Actions (Outside of Resume Section, No-Print) */}
      <footer className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
        <div className="flex flex-wrap items-center gap-3">
          {/* Prominent Download as PDF Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-2xl bg-forest text-cream hover:bg-forest-dark px-6 py-3 text-xs sm:text-sm font-mono font-bold shadow-sm transition-all cursor-pointer border border-forest-dark/20 hover:scale-[1.02] active:scale-[0.98]"
            title="Download or print resume as PDF"
          >
            <Download size={15} />
            <span>Download as PDF</span>
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
                <Check size={13} className="text-sprout" />
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
            href={resumeContact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-forest transition-colors"
          >
            LinkedIn
          </a>
          <span>&bull;</span>
          <a
            href={resumeContact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-forest transition-colors"
          >
            GitHub
          </a>
          <span>&bull;</span>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/llms.txt`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-forest transition-colors"
          >
            /llms.txt
          </a>
        </div>
      </footer>
    </div>
  );
}
