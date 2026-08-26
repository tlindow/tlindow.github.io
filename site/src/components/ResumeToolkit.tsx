"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { technicalToolkit } from "@/data/resumeData";
import { Wrench, Sparkles, Code2, Server, Terminal } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "AI & Agentic Systems": Sparkles,
  "Languages & Frameworks": Code2,
  "Cloud, Data & SRE": Server,
  "Developer Tools & Workflows": Terminal,
};

export default function ResumeToolkit() {
  return (
    <section id="toolkit" className="py-12 sm:py-16 px-4 sm:px-6 bg-surface-alt/60 border-b border-border/70">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-1.5 rounded-lg bg-indigo-light text-indigo-dark">
              <Wrench size={16} />
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
              Technical Toolkit
            </h2>
          </div>
          <div className="h-0.5 w-12 bg-indigo/40 rounded-full mb-6" />
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          staggerDelay={0.08}
        >
          {technicalToolkit.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <StaggerItem key={category.title}>
                <div className="rounded-2xl bg-surface border border-border p-5 sm:p-6 shadow-sm hover:border-indigo/30 transition-all duration-200 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1.5 rounded-lg bg-surface-alt text-indigo-dark border border-border/80">
                        <Icon size={15} />
                      </div>
                      <h3 className="font-serif text-lg font-normal text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono transition-all duration-200 border ${
                            skill.featured
                              ? "bg-indigo-light text-indigo-dark border-indigo/20 font-medium"
                              : "bg-surface-alt text-muted hover:text-foreground border-border"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              skill.featured ? "bg-indigo-dark" : "bg-muted/60"
                            }`}
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
