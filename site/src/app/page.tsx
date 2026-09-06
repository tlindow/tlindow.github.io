"use client";

import {
  FileText,
  TrendingUp,
  BookOpenText,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import {
  TrustedPartnersBar,
  EducationInstitutionsBar,
  LinkedInIcon,
} from "@/components/brand/PartnerLogos";
import { blogPosts } from "@/data/blogPosts";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/context/AnalyticsProvider";

export default function Home() {
  const {
    logResumeView,
    logOutboundClick,
  } = useAnalytics();

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const firstPost = blogPosts[0];

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
                Building B2B2C fintech products
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

            {/* Featured Blog Post Card with Affirm Open Graph Asset */}
            {firstPost && (
              <div id="featured-essay" className="pt-2 sm:pt-4 max-w-3xl w-full mx-auto text-left scroll-mt-24">
                <div className="block p-4 sm:p-5 rounded-2xl border border-border/90 bg-surface/90 shadow-xs">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    {/* Copy content */}
                    <div className="flex-1 order-2 sm:order-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-muted mb-2">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-indigo-dark bg-indigo-light/80 px-2 py-0.5 rounded-md">
                          <BookOpenText size={13} className="shrink-0" />
                          <span>Featured Blog Post</span>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold font-mono text-foreground leading-snug">
                        {firstPost.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm font-mono text-muted leading-relaxed line-clamp-2">
                        {firstPost.previewText || firstPost.summary}
                      </p>

                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-muted">
                        <span>Post coming soon</span>
                      </div>
                    </div>

                    {/* Affirm Open Graph Image */}
                    <div className="order-1 sm:order-2 w-full sm:w-56 md:w-64 shrink-0 aspect-[16/10] rounded-xl overflow-hidden border border-border bg-sand relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${basePath}/og-affirm.jpg`}
                        alt="Affirm Open Graph"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/85 backdrop-blur-xs border border-border text-[10px] font-mono text-foreground">
                        <span>affirm.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
