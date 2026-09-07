"use client";

import {
  FileText,
  TrendingUp,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import {
  TrustedPartnersBar,
  EducationInstitutionsBar,
  LinkedInIcon,
} from "@/components/brand/PartnerLogos";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/context/AnalyticsProvider";

export default function Home() {
  const {
    logResumeView,
    logOutboundClick,
  } = useAnalytics();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono flex flex-col justify-between overflow-x-clip">
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
          <header id="hero" className="min-h-[90vh] sm:min-h-[92vh] flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto space-y-6 sm:space-y-8 relative pt-28 sm:pt-32 pb-10 sm:pb-14 scroll-mt-20">
            {/* Typographic Product Title */}
            <div className="space-y-4 sm:space-y-6 text-center max-w-4xl mx-auto">
              <span className="text-xs sm:text-sm font-mono font-bold text-indigo-dark uppercase tracking-widest block">
                ex-Affirm, ex-founder
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.05] mx-auto">
                Building B2B fintech products
              </h1>

              <div className="pt-2">
                <p className="text-sm sm:text-base md:text-lg font-mono text-muted inline-flex items-center justify-center gap-1.5 mx-auto">
                  <span>$0 startups</span>
                  <TrendingUp size={14} className="text-indigo-dark shrink-0" aria-label="Scaling to" />
                  <span>$10B+ GMV enterprises</span>
                </p>
              </div>
            </div>

            {/* Primary Pipeline Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/tlindow"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logOutboundClick("linkedin", "https://www.linkedin.com/in/tlindow")}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] bg-[#0A66C2] hover:bg-[#004182] text-white"
                title="Follow Tyler Lindow on LinkedIn"
              >
                <LinkedInIcon size={16} className="text-white shrink-0" />
                <span>Follow on LinkedIn</span>
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
            <div id="trusted-partners" className="w-full scroll-mt-24">
              <TrustedPartnersBar />
            </div>

            {/* Educational Institutions */}
            <div id="education" className="w-full scroll-mt-24">
              <EducationInstitutionsBar />
            </div>
          </header>

          {/* ======================================================= */}
          {/* 2. VALUE PROPOSITION: WHAT YOU GET IF YOU BUY ME       */}
          {/* ======================================================= */}
          <WhatYouGet />
        </main>
      </div>

      {/* ========================================================= */}
      {/* 4. FOOTER WITH COMPLETE DIRECTORY                         */}
      {/* ========================================================= */}
      <Footer />
    </div>
  );
}
