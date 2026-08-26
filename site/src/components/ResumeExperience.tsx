"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { professionalExperience } from "@/data/resumeData";
import { Briefcase, MapPin, Calendar, TrendingUp } from "lucide-react";

type FilterCategory = "all" | "leadership" | "devrel" | "founder" | "mentorship";

export default function ResumeExperience() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("all");

  const filteredExperience = professionalExperience.filter((item) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "leadership") {
      return item.companyCategory === "leadership" || item.companyCategory === "founder";
    }
    if (selectedFilter === "devrel") {
      return item.companyCategory === "devrel";
    }
    if (selectedFilter === "mentorship") {
      return item.companyCategory === "mentorship" || item.companyCategory === "prototyping";
    }
    return true;
  });

  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 bg-surface/40 border-b border-border/70">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-indigo-light text-indigo-dark">
                <Briefcase size={16} />
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
                Professional Experience
              </h2>
            </div>

            {/* Filter Tabs (Hidden in Print) */}
            <div className="flex flex-wrap items-center gap-1.5 no-print text-xs font-mono">
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  selectedFilter === "all"
                    ? "bg-indigo-dark text-sand font-medium"
                    : "bg-surface-alt text-muted hover:text-foreground border border-border"
                }`}
              >
                All Roles ({professionalExperience.length})
              </button>

              <button
                type="button"
                onClick={() => setSelectedFilter("leadership")}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  selectedFilter === "leadership"
                    ? "bg-indigo-dark text-sand font-medium"
                    : "bg-surface-alt text-muted hover:text-foreground border border-border"
                }`}
              >
                Engineering Leadership
              </button>

              <button
                type="button"
                onClick={() => setSelectedFilter("devrel")}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  selectedFilter === "devrel"
                    ? "bg-indigo-dark text-sand font-medium"
                    : "bg-surface-alt text-muted hover:text-foreground border border-border"
                }`}
              >
                DevRel &amp; Support
              </button>

              <button
                type="button"
                onClick={() => setSelectedFilter("mentorship")}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  selectedFilter === "mentorship"
                    ? "bg-indigo-dark text-sand font-medium"
                    : "bg-surface-alt text-muted hover:text-foreground border border-border"
                }`}
              >
                Mentorship &amp; Education
              </button>
            </div>
          </div>
          <div className="h-0.5 w-12 bg-indigo/40 rounded-full mb-8" />
        </ScrollReveal>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8 sm:space-y-10">
          {filteredExperience.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.06}>
              <div
                className="resume-experience-card rounded-3xl bg-surface border border-border p-6 sm:p-8 shadow-sm hover:border-indigo/30 transition-all duration-200"
              >
                {/* Header: Company, Role, Level, Period */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-border/70">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground">
                        {item.company}
                      </h3>
                      <span className="text-muted font-serif text-lg">|</span>
                      <span className="font-sans font-medium text-foreground text-base sm:text-lg">
                        {item.role}
                      </span>
                      {item.level && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-surface-alt text-indigo-dark border border-border">
                          {item.level}
                        </span>
                      )}
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} className="text-indigo-dark/70" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end items-center gap-1.5 text-xs font-mono text-muted shrink-0">
                    <span className="inline-flex items-center gap-1 font-medium text-foreground/80 bg-surface-alt px-2.5 py-1 rounded-md border border-border/80">
                      <Calendar size={12} className="text-indigo-dark" />
                      {item.period}
                    </span>
                    {item.duration && (
                      <span className="text-[11px] text-muted italic">
                        ({item.duration})
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="mt-5 space-y-3.5 text-sm sm:text-[15px] font-sans text-muted leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-dark mt-2 shrink-0" />
                      <div>
                        <strong className="font-semibold text-foreground mr-1.5">
                          {bullet.category}:
                        </strong>
                        <span className="text-foreground/85">{bullet.text}</span>
                        {bullet.highlightMetric && (
                          <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-indigo-light text-indigo-dark border border-indigo/20 no-print">
                            <TrendingUp size={11} />
                            {bullet.highlightMetric}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
