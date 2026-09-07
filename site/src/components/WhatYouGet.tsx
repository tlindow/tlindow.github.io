"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, Bot } from "lucide-react";
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
    subtitle: "Your total addressable market is a quadrillion",
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
        {/* VALUE PILLARS (01, 02) SIDE BY SIDE                       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-10 items-stretch">
          {valuePillars.map((pillar) => {
            const isCultureBuilder = pillar.id === "culture-builder";

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex flex-col text-left items-start w-full h-full justify-between gap-4 sm:gap-5"
              >
                {/* Copy Block */}
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-baseline gap-2.5 w-full">
                    <span className="text-xs sm:text-sm font-mono font-bold text-indigo-dark shrink-0">
                      {pillar.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  {pillar.subtitle && (
                    <p className="text-xs sm:text-sm font-mono text-muted leading-relaxed pl-6 sm:pl-7">
                      {pillar.subtitle}
                    </p>
                  )}
                </div>

                {/* Visual Asset & Link */}
                <div className="w-full flex-1 flex flex-col justify-between items-end gap-2.5">
                  {isCultureBuilder ? (
                    <>
                      <TinkerAppCard />
                      <StartPitchDeckBannerLink />
                    </>
                  ) : (
                    <>
                      <ExerciseDiffCard />
                      <TechnicalThesisBannerLink />
                    </>
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

function StartPitchDeckBannerLink() {
  return (
    <a
      href="https://tinker.beginner.work"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 self-end rounded-full px-3 py-1.5 text-xs font-mono font-bold transition-all hover:scale-[1.02] active:scale-[0.98] bg-sand/80 hover:bg-sand text-foreground/90 hover:text-indigo-dark border border-border hover:border-indigo/40 shadow-2xs cursor-pointer"
      title="Start your pitch deck"
    >
      <TinkerGlobeMark className="w-3.5 h-3.5 shrink-0 group-hover:scale-105 transition-transform" />
      <span>Start your pitch deck</span>
    </a>
  );
}

function TechnicalThesisBannerLink() {
  return (
    <a
      href="https://github.com/tlindow"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 self-end rounded-full px-3 py-1.5 text-xs font-mono font-bold transition-all hover:scale-[1.02] active:scale-[0.98] bg-[#f6f8fa] hover:bg-[#f3f4f6] text-[#24292f] hover:text-[#0969da] border border-[#d0d7de] hover:border-[#b0b8c1] shadow-2xs cursor-pointer"
      title="View my Github profile"
    >
      <Github className="w-3.5 h-3.5 shrink-0 text-[#24292f] group-hover:text-[#0969da] group-hover:scale-105 transition-transform" />
      <span>View my Github profile</span>
    </a>
  );
}

function ExerciseDiffCard() {
  return (
    <a
      href="https://github.com/tlindow/tlindow.github.io/blob/main/exercises/proto-learning/merchant_settlement.proto"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between w-full flex-1 rounded-xl border border-[#d0d7de] bg-white overflow-hidden hover:border-[#0969da]/60 hover:shadow-md transition-all duration-200 shadow-2xs font-mono text-[11px] sm:text-xs text-[#24292f]"
      title="View merchant settlement Protobuf exercise on GitHub"
    >
      {/* GitHub Commit/File Header */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 bg-[#f6f8fa] border-b border-[#d0d7de] shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <Github size={14} className="text-[#57609a] shrink-0" />
          <span className="font-semibold text-[#0969da] truncate">
            merchant_settlement.proto
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-medium text-[#57609a]">
            <span className="text-[#1a7f37] font-semibold">+5</span>{" "}
            <span className="text-[#cf222e] font-semibold">-1</span>
          </span>
          <ArrowUpRight
            size={13}
            className="text-[#57609a] group-hover:text-[#0969da] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>
      </div>

      {/* GitHub Unified Diff Body (Single Hunk) */}
      <div className="flex-1 overflow-x-auto text-[11px] sm:text-xs leading-relaxed select-none divide-y divide-[#d0d7de]/30">
        {/* Hunk Header */}
        <div className="px-3.5 sm:px-4 py-1.5 bg-[#ddf4ff] text-[#0969da] font-mono text-[10px]">
          @@ -12,4 +12,12 @@ fintech.settlement.v1
        </div>
        <div className="bg-[#ffebe9] text-[#24292f] flex items-center">
          <span className="w-6 shrink-0 select-none text-right pr-2 text-[#cf222e]/60 font-mono text-[10px] py-1">-</span>
          <span className="py-1 pr-3 flex items-center gap-2">
            <span className="text-[#cf222e] font-medium font-mono">double amount = 1;</span>
            <span className="text-[#57609a] font-mono text-[10px]">{"// float rounding loss"}</span>
          </span>
        </div>

        {/* GitHub Copilot Inline Review Comment (Always Viewable, Most Prominent Text) */}
        <div className="p-3.5 sm:p-4 bg-white border-y border-[#d0d7de] font-sans shadow-xs">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#7C3AED] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Bot size={13} className="text-white" />
            </div>
            <div className="space-y-1.5 min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#57609a]">
                <span className="font-semibold text-[#1F2328]">github-copilot</span>
                <span className="text-[9px] px-1.5 py-0.5 font-mono font-medium rounded border border-[#d0d7de] text-[#57609a] bg-[#f6f8fa] uppercase tracking-wider leading-none">
                  bot
                </span>
                <span className="text-[#8c959f] hidden sm:inline">&bull; suggested inquiry</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-bold text-[#1F2328] leading-snug tracking-tight">
                How are customers affected by floating point precision loss in banking applications?
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#dafbe1] text-[#24292f] flex">
          <span className="w-6 shrink-0 select-none text-right pr-2 text-[#1a7f37]/60 font-mono text-[10px] py-1">+</span>
          <span className="py-1 pr-3 text-[#1a7f37] font-semibold">message Money &#123;</span>
        </div>
        <div className="bg-[#dafbe1] text-[#24292f] flex">
          <span className="w-6 shrink-0 select-none text-right pr-2 text-[#1a7f37]/60 font-mono text-[10px] py-1">+</span>
          <span className="py-1 pr-3 text-[#1a7f37]">  string currency_code = 1; <span className="text-[#57609a]">{"// \"USD\""}</span></span>
        </div>
        <div className="bg-[#dafbe1] text-[#24292f] flex">
          <span className="w-6 shrink-0 select-none text-right pr-2 text-[#1a7f37]/60 font-mono text-[10px] py-1">+</span>
          <span className="py-1 pr-3 text-[#1a7f37]">  int64 units = 2;          <span className="text-[#57609a]">{"// whole dollars"}</span></span>
        </div>
        <div className="bg-[#dafbe1] text-[#24292f] flex">
          <span className="w-6 shrink-0 select-none text-right pr-2 text-[#1a7f37]/60 font-mono text-[10px] py-1">+</span>
          <span className="py-1 pr-3 text-[#1a7f37]">  int32 nanos = 3;          <span className="text-[#57609a]">{"// billionths"}</span></span>
        </div>
        <div className="bg-[#dafbe1] text-[#24292f] flex">
          <span className="w-6 shrink-0 select-none text-right pr-2 text-[#1a7f37]/60 font-mono text-[10px] py-1">+</span>
          <span className="py-1 pr-3 text-[#1a7f37] font-semibold">&#125;</span>
        </div>
      </div>

      {/* GitHub Diff Footer */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 bg-[#f6f8fa] border-t border-[#d0d7de] text-[10px] text-[#57609a] shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#1a7f37]" />
          <span>exercises/proto-learning</span>
        </div>
        <span className="text-[#0969da] font-semibold group-hover:underline">View on GitHub &rarr;</span>
      </div>
    </a>
  );
}

function TinkerAppCard() {
  return (
    <a
      href="https://tinker.beginner.work"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between w-full flex-1 rounded-xl border border-[#EDE8E0] bg-[#FFFDF7] overflow-hidden hover:border-[#C4B5FD] hover:shadow-md transition-all duration-200 shadow-2xs text-[#2D2A26]"
      title="View tinker web shell on tinker.beginner.work — Founder source code"
    >
      {/* Tinker File Header */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 bg-[#F5F3EF] border-b border-[#EDE8E0] shrink-0 font-mono text-[11px] sm:text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <TinkerGlobeMark className="w-3.5 h-3.5 shrink-0" />
          <span className="font-semibold text-[#2D2A26] truncate">
            founder_source.md
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-medium font-mono text-[#6F6A65]">
            <span className="text-[#2D5A3D] font-semibold">+1</span>{" "}
            <span className="text-[#991B1B] font-semibold">-1</span>
          </span>
          <ArrowUpRight
            size={13}
            className="text-[#6F6A65] group-hover:text-[#4F46E5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>
      </div>

      {/* Rainbow Spectrum Accent Line */}
      <div
        className="w-full h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, #F9A8D4 0%, #FDBA74 20%, #FDE68A 40%, #7BC47A 60%, #7DD3FC 80%, #C4B5FD 100%)",
        }}
      />

      {/* Unrendered Markdown Diff Body */}
      <div className="flex-1 overflow-x-auto text-[11px] sm:text-xs leading-relaxed select-none divide-y divide-[#EDE8E0]/40 font-mono">
        {/* Hunk Header */}
        <div className="px-3.5 sm:px-4 py-1.5 bg-[#FAF5EE] text-[#4F46E5] font-mono text-[10px] flex items-center justify-between">
          <span>@@ -1,1 +1,1 @@ founder.thesis.v1</span>
          <span className="text-[10px] text-[#8C827A] font-mono">markdown</span>
        </div>

        {/* Removed line in code diff style with rainbow strikethrough */}
        <div className="bg-[#FFF1F2] text-[#2D2A26] flex items-center">
          <span className="w-6 shrink-0 select-none text-right pr-2 text-[#991B1B]/70 font-mono text-[10px] py-2">-</span>
          <span className="py-2 pr-3">
            <span className="relative inline-block">
              <span className="text-[#991B1B] font-medium">we are all founders</span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #F9A8D4 0%, #FDBA74 25%, #7BC47A 65%, #7DD3FC 100%)",
                }}
              />
            </span>
          </span>
        </div>

        {/* Added line in code diff style */}
        <div className="bg-[#F0FDF4] text-[#2D2A26] flex items-center">
          <span className="w-6 shrink-0 select-none text-right pr-2 text-[#166534]/70 font-mono text-[10px] py-2">+</span>
          <span className="py-2 pr-3 text-[#166534] font-semibold">
            we are all looking for the highest fundable valuation
          </span>
        </div>
      </div>

      {/* Tinker Diff Footer (Mirroring GitHub Chrome) */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 bg-[#F5F3EF] border-t border-[#EDE8E0] text-[10px] text-[#6F6A65] shrink-0 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#7BC47A]" />
          <span>tinker.beginner.work</span>
        </div>
      </div>
    </a>
  );
}
