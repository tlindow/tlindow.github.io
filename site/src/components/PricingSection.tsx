"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { companyCards, CardFace } from "@/components/TractionTimeline";

interface ColumnDefinition {
  id: string;
  title: string;
  cardIds: string[];
}

const columns: ColumnDefinition[] = [
  {
    id: "col-1",
    title: "Individualized Mentorship",
    cardIds: ["galvanize", "chm"],
  },
  {
    id: "col-2",
    title: "Culture-Building",
    cardIds: ["beginner", "tech-interactive"],
  },
  {
    id: "col-3",
    title: "Launch",
    cardIds: ["affirm"],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 scroll-mt-20 select-none font-mono"
    >
      {/* Invisible anchor target for legacy/hero links pointing to #launch-wallet */}
      <div id="launch-wallet" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Section Header */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-mono">
          Work with me
        </h2>
      </div>

      {/* Containerized Columns aligned with value props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {columns.map((col) => {
          const colCards = col.cardIds
            .map((id) => companyCards.find((c) => c.id === id))
            .filter((c): c is (typeof companyCards)[number] => Boolean(c));

          return (
            <div
              key={col.id}
              className="rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-2xs hover:border-indigo/40 transition-all flex flex-col justify-between h-full"
            >
              <div className="flex flex-col gap-4">
                {/* Column Title */}
                <h3 className="text-base sm:text-lg font-bold font-mono tracking-tight text-foreground">
                  {col.title}
                </h3>

                {/* Overlapping Launch Cards Stack */}
                <div className="relative pt-1 pb-2 flex flex-col items-center">
                  <div className="w-full max-w-[260px] relative">
                    {colCards.map((card, idx) => (
                      <div
                        key={card.id}
                        id={`wallet-card-${card.id}`}
                        className={`relative w-full aspect-[1.586/1] rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:z-30 cursor-default ${
                          idx > 0 ? "-mt-20" : ""
                        }`}
                        style={{ zIndex: idx + 10 }}
                      >
                        <CardFace card={card} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Descriptive text from launch wallet section below the cards */}
                <div className="mt-2 space-y-4 px-1">
                  {colCards.map((card) => (
                    <div key={card.id} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm sm:text-base font-bold font-mono text-foreground">
                          {card.companyName}
                        </span>
                        <span className="text-xs font-mono text-muted tabular-nums">
                          {card.cardNumber}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-muted leading-relaxed">
                        {card.totalVolumeSummary}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button pinned at bottom of right-most column */}
              {col.id === "col-3" && (
                <div className="mt-6 pt-4 border-t border-border/60">
                  <a
                    href="mailto:tyler.lindow@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs sm:text-sm font-bold font-mono transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer bg-indigo-dark text-sand hover:bg-labs-primary-dark shadow-xs"
                  >
                    <Mail size={14} />
                    <span>Let&apos;s talk</span>
                    <ArrowUpRight size={14} className="opacity-75" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
