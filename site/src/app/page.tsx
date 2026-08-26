"use client";

import {
  Linkedin,
  FileText,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import ExperimentPreviewBar from "@/components/ExperimentPreviewBar";
import TractionTimeline from "@/components/TractionTimeline";
import {
  TrustedPartnersBar,
  EducationInstitutionsBar,
} from "@/components/brand/PartnerLogos";
import { resumeContact } from "@/data/resumeData";
import { useAnalytics, useExperiment } from "@/context/AnalyticsProvider";

export default function Home() {
  const {
    logRecruitClick,
    logResumeView,
    logOutboundClick,
  } = useAnalytics();

  const {
    recruit_cta_label,
    recruit_cta_style,
    hero_headline_variant,
    hero_subtitle_variant,
  } = useExperiment();

  const getCtaStyleClass = () => {
    switch (recruit_cta_style) {
      case "pulse_accent":
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark ring-2 ring-indigo/40 animate-pulse hover:animate-none shadow-sm";
      case "sprout_glow":
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark ring-2 ring-sky/60 shadow-md shadow-indigo/20";
      case "high_contrast":
        return "bg-foreground text-background hover:bg-foreground/90 ring-1 ring-foreground/20";
      case "forest_solid":
      default:
        return "bg-indigo-dark text-sand hover:bg-labs-primary-dark";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono flex flex-col justify-between overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. TOP NAVIGATION BAR (FIXED, NO-PRINT) */}
      {/* ========================================================= */}
      <Navbar />

      {/* ========================================================= */}
      {/* 2. MAIN VIEW */}
      {/* ========================================================= */}
      <div className="no-print w-full">
        <main className="w-full">
          {/* FULL PAGE HERO HEADER SECTION */}
          <header className="min-h-[92vh] sm:min-h-[95vh] flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto space-y-6 sm:space-y-8 relative pt-32 sm:pt-36">
            {/* Typographic Product Title */}
            <div className="space-y-5 sm:space-y-7 text-center">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.95] [text-wrap:balance] mx-auto">
                {hero_headline_variant}
              </h1>

              <div className="space-y-2 sm:space-y-2.5">
                <p className="text-base sm:text-xl md:text-2xl font-medium text-foreground/85 leading-relaxed [text-wrap:balance] mx-auto">
                  {hero_subtitle_variant}
                </p>

                <p className="text-sm sm:text-base md:text-lg font-bold text-indigo-dark font-mono tracking-tight">
                  Software Engineering Manager &rarr; PM
                </p>
              </div>
            </div>

            {/* Primary Pipeline Actions (A/B Instrumented) */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={resumeContact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  logRecruitClick({
                    location: "hero",
                    label: recruit_cta_label,
                    variant: `${recruit_cta_style}:${recruit_cta_label}`,
                  })
                }
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] ${getCtaStyleClass()}`}
              >
                <Linkedin size={15} />
                <span>{recruit_cta_label}</span>
              </a>

              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume`}
                onClick={() => logResumeView("hero_cta")}
                className="inline-flex items-center gap-2 rounded-xl bg-surface hover:bg-surface-alt text-foreground border border-border px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                title="Read web-based resume template"
              >
                <FileText size={15} />
                <span>Read Resume</span>
              </a>
            </div>

            {/* Trusted Partners (Previous Employers) */}
            <TrustedPartnersBar />

            {/* Educational Institutions */}
            <EducationInstitutionsBar />
          </header>

          <div className="max-w-4xl mx-auto w-full px-4 mb-4">
            <hr className="rainbow-divider h-[2px] w-full border-0 labs-rainbow-gradient rounded-full opacity-60" />
          </div>

          {/* ======================================================= */}
          {/* 3. COMPANY DEBIT CARD WALLET SECTION */}
          {/* ======================================================= */}
          <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-6 pb-24 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Employer Wallet
            </h2>
            <TractionTimeline />
          </section>
        </main>
      </div>

      {/* Bottom Footer */}
      <footer className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">Tyler Lindow</span>
          <span>·</span>
          <span>Staff B2B Product Manager</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={resumeContact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              logRecruitClick({
                location: "footer",
                label: "LinkedIn",
              })
            }
            className="hover:text-indigo-dark transition-colors"
          >
            LinkedIn
          </a>
          <span>&bull;</span>
          <a
            href={resumeContact.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logOutboundClick("github", resumeContact.github)}
            className="hover:text-indigo-dark transition-colors"
          >
            GitHub
          </a>
          <span>&bull;</span>
          <a
            href={`mailto:${resumeContact.email}`}
            onClick={() => logOutboundClick("email", resumeContact.email)}
            className="hover:text-indigo-dark transition-colors"
          >
            Email
          </a>
        </div>
      </footer>

      {/* Sticky Bottom Runtime Environment Inspector Bar (No-Print) */}
      <ExperimentPreviewBar />
    </div>
  );
}
