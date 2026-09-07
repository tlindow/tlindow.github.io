"use client";

import React from "react";
import { motion } from "framer-motion";
import { TinkerGlobeMark } from "@/components/brand/BeginnerMarks";

interface ValuePillar {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
}

const valuePillars: ValuePillar[] = [
  {
    id: "culture-builder",
    number: "01",
    title: "Capture the founder market",
    subtitle: "Your TAM is 10x",
  },
  {
    id: "methodical-enjoyable",
    number: "02",
    title: "Retain talent & customers",
    subtitle: "Your customers are your talent pipeline",
  },
];

export default function WhatYouGet() {
  return (
    <section
      id="what-you-get"
      className="w-full border-y border-border/80 bg-surface-alt/70 pt-14 pb-12 sm:pt-20 sm:pb-16 scroll-mt-20 mt-8 sm:mt-12 mb-0"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ========================================================= */}
        {/* VALUE PILLARS (01, 02) SIDE BY SIDE ON DESKTOP            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start w-full">
          {valuePillars.map((pillar) => {
            const isCultureBuilder = pillar.id === "culture-builder";

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex flex-col text-center md:text-left items-center md:items-start justify-between w-full h-full gap-5 sm:gap-6"
              >
                {/* Copy Block */}
                <div className="flex flex-col gap-1 w-full md:min-h-[80px] items-center md:items-start">
                  <div className="flex items-baseline justify-center md:justify-start gap-2.5 w-full">
                    <span className="text-xs sm:text-sm font-mono font-bold text-indigo-dark shrink-0">
                      {pillar.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  {pillar.subtitle && (
                    <p className="text-xs sm:text-sm font-mono text-muted leading-relaxed text-center md:text-left pl-0 md:pl-6 sm:md:pl-7">
                      {pillar.subtitle}
                    </p>
                  )}
                </div>

                {/* Visual */}
                <div className="flex flex-col items-center md:items-start w-full">
                  {isCultureBuilder ? (
                    <div className="w-[340px] max-w-full mx-auto md:mx-0">
                      <TinkerDebitCard />
                    </div>
                  ) : (
                    <div className="w-[340px] max-w-full mx-auto md:mx-0">
                      <GitHubDebitCard />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GitHubOfficialMark({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 98 96"
      fill="none"
      role="img"
      aria-label="GitHub mark"
      className={className}
      {...props}
    >
      <circle cx="49" cy="48" r="48" fill="#FFFFFF" stroke="#D0D7DE" strokeWidth="1.5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.36 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="#24292F"
      />
    </svg>
  );
}

function GitHubDebitCard() {
  return (
    <a
      href="https://github.com/tlindow"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between w-[340px] max-w-full aspect-[1.586/1] rounded-[20px] border border-[#D0D7DE] bg-[#F6F8FA] overflow-hidden shadow-xs hover:border-[#24292F]/40 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
      title="Open Tyler Lindow's GitHub (github.com/tlindow)"
    >
      {/* Signature GitHub Monochrome Spectrum Trim */}
      <div
        className="w-full h-2 shrink-0"
        style={{
          background:
            "linear-gradient(90deg, #24292F 0%, #57606A 40%, #8C959F 75%, #D0D7DE 100%)",
        }}
      />

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-1 p-5">
        {/* Top Row: Official brand mark on left, cardholder name on right */}
        <div className="flex items-center justify-between gap-3 min-w-0">
          <GitHubOfficialMark className="w-6 h-6 shrink-0 group-hover:scale-105 transition-transform duration-300" />
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#57606A] truncate">
            Tyler Lindow
          </span>
        </div>

        {/* Bottom Row: Masked card number on left, network kind on right */}
        <div className="flex items-end justify-between gap-3 pt-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#57606A] tabular-nums">
            •••• 2027
          </span>
          <span className="font-mono font-semibold text-[10px] uppercase tracking-widest text-[#24292F]">
            DEBIT
          </span>
        </div>
      </div>
    </a>
  );
}

function TinkerDebitCard() {
  return (
    <a
      href="https://tinker.beginner.work"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between w-[340px] max-w-full aspect-[1.586/1] rounded-[20px] border border-[#EDE8E0] bg-[#FFFDF7] overflow-hidden shadow-xs hover:border-indigo/40 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
      title="Open tinker (tinker.beginner.work)"
    >
      {/* Signature Tinker 7-Color Pastel Rainbow Spectrum Trim */}
      <div
        className="w-full h-2 shrink-0"
        style={{
          background:
            "linear-gradient(90deg, #F9A8D4 0%, #FDBA74 20%, #FDE68A 40%, #7BC47A 60%, #7DD3FC 80%, #C4B5FD 100%)",
        }}
      />

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-1 p-5">
        {/* Top Row: Brand icon & wordmark on left, cardholder name on right */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <TinkerGlobeMark className="w-6 h-6 shrink-0 group-hover:scale-105 transition-transform duration-300" />
            <span className="font-serif text-lg font-medium tracking-tight text-[#2D2A26] lowercase leading-none">
              tinker
            </span>
          </div>
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#78716C] truncate">
            You
          </span>
        </div>

        {/* Bottom Row: Masked card number on left, network kind on right */}
        <div className="flex items-end justify-between gap-3 pt-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#78716C] tabular-nums">
            •••• 2026
          </span>
          <span className="font-mono font-semibold text-[10px] uppercase tracking-widest text-[#6366F1]">
            DEBIT
          </span>
        </div>
      </div>
    </a>
  );
}
