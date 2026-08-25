"use client";

import { useRef, useState, useEffect } from "react";
import {
  Linkedin,
  FileText,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ArrowUpDown,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import {
  TrustedPartnersBar,
  AffirmLogo,
} from "@/components/brand/PartnerLogos";
import { resumeContact } from "@/data/resumeData";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Base card configurations strictly aligned with resume records and metrics
  const cardsData = [
    {
      title: "Mobile Performance & Checkout Optimization",
      gmvValue: 500000,
      gmv: "$500,000 GMV",
      users: "Pre-BFCM 2025 Window",
      colorClass: "bg-rose",
      employer: <AffirmLogo className="h-4 sm:h-5 w-auto" />,
      description:
        "Facilitated engineering trade-offs throughout website revamps to optimize mobile checkout performance, driving an incremental $500K GMV ahead of BFCM 2025.",
    },
    {
      title: "Developer Paved Paths & Self-Service",
      gmvValue: 50000000,
      gmv: "$50,000,000 GMV",
      users: "Thousands of Merchants",
      colorClass: "bg-peach",
      employer: <AffirmLogo className="h-4 sm:h-5 w-auto" />,
      description:
        "Maintained and scaled self-service onboarding pipelines, SDK integration tooling, and paved-path documentation supporting thousands of active merchants with zero-touch integration.",
    },
    {
      title: "Enterprise SLA & Telemetry Pipelines",
      gmvValue: 100000000,
      gmv: "$100,000,000+ GMV",
      users: "16 hrs/mo Saved",
      colorClass: "bg-mint",
      employer: <AffirmLogo className="h-4 sm:h-5 w-auto" />,
      description:
        "Architected automated SLA reporting pipelines and root-cause summaries (Python, Flask, Snowflake) for strategic enterprise merchants ($100M+ GMV), eliminating 16 hours of monthly manual overhead.",
    },
    {
      title: "Flagship Partner Scale & Engineering Leadership",
      gmvValue: 1000000000,
      gmv: "$1,000,000,000+ GMV",
      users: "1 → 6 Team Scale",
      colorClass: "bg-sky",
      employer: <AffirmLogo className="h-4 sm:h-5 w-auto" />,
      description:
        "Architected automated SLA reporting and root-cause telemetry securing 100% executive alignment for a flagship $1B+ GMV partner (Amazon) while scaling engineering capacity from 1 to 6.",
    },
  ];

  const sortedCards = [...cardsData].sort((a, b) =>
    sortOrder === "asc" ? a.gmvValue - b.gmvValue : b.gmvValue - a.gmvValue
  );

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 390;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-sprout-light selection:text-forest font-mono flex flex-col justify-between">
      {/* ========================================================= */}
      {/* 1. TOP NAVIGATION BAR (FIXED, NO-PRINT) */}
      {/* ========================================================= */}
      <Navbar />

      {/* ========================================================= */}
      {/* 2. MAIN VIEW */}
      {/* ========================================================= */}
      <div className="no-print pt-28 sm:pt-36 md:pt-44 pb-20 px-4 sm:px-6">
        <main className="max-w-4xl mx-auto w-full space-y-12 sm:space-y-16">
          {/* PIPELINE RUNTIME HEADER */}
          <header className="space-y-6 sm:space-y-8 text-center">
            {/* Giant Typographic Product Title */}
            <div className="space-y-3 text-center">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.95] [text-wrap:balance] mx-auto">
                Staff B2B Product Manager
              </h1>

              <div className="space-y-1.5">
                <p className="text-base sm:text-xl md:text-2xl font-medium text-foreground/85 leading-relaxed [text-wrap:balance] mx-auto">
                  B2B at B2C scale
                </p>

                <p className="text-sm sm:text-base md:text-lg font-bold text-forest font-mono tracking-tight">
                  Software Engineering Manager &rarr; PM
                </p>
              </div>
            </div>

            {/* Primary Pipeline Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={resumeContact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-forest text-sand hover:bg-forest-dark px-5 py-2.5 text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Linkedin size={15} />
                <span>Recruit Me</span>
              </a>

              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume`}
                className="inline-flex items-center gap-2 rounded-xl bg-surface hover:bg-surface-alt text-foreground border border-border px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                title="Read web-based resume template"
              >
                <FileText size={15} />
                <span>Read Resume</span>
              </a>
            </div>

            {/* Trusted Partners (Previous Employers) */}
            <TrustedPartnersBar />
          </header>

          <hr className="rainbow-divider h-[2px] w-full border-0 tinker-rainbow-gradient rounded-full opacity-85" />

          {/* ======================================================= */}
          {/* 3. SKILLS MARKETPLACE SECTION (HORIZONTAL TRACK + RIGHT NAV) */}
          {/* ======================================================= */}
          <section className="space-y-6">
            {/* Header with Navigation to the Right */}
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Skills Marketplace
              </h2>

              {/* Navigation to the Right */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous card"
                  className={`p-2 sm:p-2.5 rounded-full border border-border transition-all cursor-pointer ${
                    canScrollLeft
                      ? "bg-surface hover:bg-surface-alt text-foreground hover:border-forest/40 shadow-xs"
                      : "bg-surface/50 text-muted/30 border-border/40 cursor-not-allowed opacity-40"
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next card"
                  className={`p-2 sm:p-2.5 rounded-full border border-border transition-all cursor-pointer ${
                    canScrollRight
                      ? "bg-forest hover:bg-forest-dark text-sand border-forest shadow-xs hover:scale-105"
                      : "bg-surface/50 text-muted/30 border-border/40 cursor-not-allowed opacity-40"
                  }`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Filter Above Cards: Sort by GMV increasing */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-forest-light border border-forest/20 text-xs font-bold text-forest hover:bg-forest/15 transition-all cursor-pointer shadow-2xs"
                title="Click to toggle sort order"
              >
                <SlidersHorizontal size={13} className="text-forest" />
                <span>Sort by GMV {sortOrder === "asc" ? "increasing" : "decreasing"}</span>
                <ArrowUpDown size={12} className="text-forest/70" />
              </button>

              <span className="text-xs text-muted font-mono hidden sm:inline-block">
                {sortOrder === "asc" ? "$500K \u2192 $1B+ GMV" : "$1B+ \u2192 $500K GMV"}
              </span>
            </div>

            {/* Horizontal Cards Track */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 -mx-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {sortedCards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[360px] md:w-[390px] shrink-0 snap-start rounded-3xl bg-surface border border-border p-5 sm:p-6 space-y-4 hover:border-forest/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  {/* Space for Picture (Solid Tinker Palette Color) */}
                  <div
                    className={`aspect-[16/10] w-full rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden relative shrink-0 ${card.colorClass} shadow-xs transition-transform duration-500 group-hover:scale-[1.02]`}
                  />

                  {/* GMV Attribution & Number of Users Validation Bar */}
                  <div className="space-y-2.5 flex-1 flex flex-col justify-start">
                    <div className="grid grid-cols-2 gap-2 border-b border-border/60 pb-2.5">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-muted uppercase tracking-wider block font-mono">
                          GMV Attribution
                        </span>
                        <span className="text-sm sm:text-base font-black text-forest font-mono tracking-tight block">
                          {card.gmv}
                        </span>
                      </div>

                      <div className="space-y-0.5 border-l border-border/60 pl-2.5">
                        <span className="text-[10px] font-bold text-muted uppercase tracking-wider block font-mono">
                          Scale & Scope
                        </span>
                        <span className="text-sm sm:text-base font-black text-foreground font-mono tracking-tight block">
                          {card.users}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-forest transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Previous Employer Origin */}
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider font-mono">
                      Previous Employer
                    </span>
                    <div className="flex items-center shrink-0">
                      {card.employer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

      {/* PERSISTENT FLOATING DEPLOY TRIGGER (BOTTOM-RIGHT) */}
      <div className="fixed bottom-6 right-6 z-40 no-print">
        <a
          href={resumeContact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-forest text-sand hover:bg-forest-dark px-4 py-2.5 text-xs font-bold shadow-lg border border-forest-dark/30 hover:scale-105 transition-all"
          title="Recruit Me (Open LinkedIn Profile)"
        >
          <Linkedin size={14} />
          <span>Recruit Me</span>
        </a>
      </div>
    </div>
  );
}
