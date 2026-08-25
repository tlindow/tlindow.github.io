"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import { professionalSummary } from "@/data/resumeData";
import { Compass } from "lucide-react";

export default function ResumeSummary() {
  return (
    <section id="summary" className="py-12 sm:py-16 px-4 sm:px-6 bg-surface/50 border-b border-border/70">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-1.5 rounded-lg bg-forest-light text-forest">
              <Compass size={16} />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Vision
            </h2>
          </div>
          <div className="h-0.5 w-12 bg-forest/40 rounded-full mb-6" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-3xl bg-surface border border-border p-6 sm:p-8 shadow-sm">
            <p className="text-base sm:text-lg text-foreground/90 font-sans leading-relaxed">
              {professionalSummary.text}
            </p>
          </div>
        </ScrollReveal>

        {/* High-Impact Metric Cards */}
        <StaggerContainer
          className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          staggerDelay={0.08}
        >
          {professionalSummary.metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div
                className={`rounded-2xl ${metric.bg} border border-border p-4 sm:p-5 flex flex-col justify-between h-full transition-all duration-200 hover:shadow-sm`}
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-medium block">
                    {metric.label}
                  </span>
                  <div className="mt-1 font-serif text-2xl sm:text-3xl font-normal text-foreground">
                    <CountUp value={metric.value || metric.number} />
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted font-sans leading-snug">
                  {metric.description || metric.context}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
