"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { educationList } from "@/data/resumeData";
import { GraduationCap, Award, MapPin } from "lucide-react";

export default function ResumeEducation() {
  return (
    <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 bg-surface-alt/50 border-b border-border/70">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-1.5 rounded-lg bg-violet-light text-violet">
              <GraduationCap size={16} />
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
              Education &amp; Foundations
            </h2>
          </div>
          <div className="h-0.5 w-12 bg-violet/50 rounded-full mb-6" />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" staggerDelay={0.1}>
          {educationList.map((item) => (
            <StaggerItem key={item.institution}>
              <div className="resume-education-card rounded-2xl bg-surface border border-border p-5 sm:p-6 shadow-sm hover:border-indigo/30 transition-all duration-200 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl font-normal text-foreground">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-medium text-indigo-dark font-sans mt-0.5">
                        {item.degree}
                      </p>
                    </div>

                    {item.honors && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-light text-indigo-dark border border-indigo/20">
                        <Award size={12} />
                        {item.honors}
                      </span>
                    )}
                  </div>

                  {item.location && (
                    <div className="mt-2 flex items-center gap-1 text-xs font-mono text-muted">
                      <MapPin size={11} className="text-muted/70" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {item.description && (
                    <p className="mt-3 text-xs sm:text-sm text-muted font-sans leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
