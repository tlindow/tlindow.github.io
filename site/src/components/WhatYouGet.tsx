"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WebGLCoin from "@/components/WebGLCoin";

interface ValuePillar {
  id: string;
  pretitle?: string;
  title: string;
  ctaSubtext?: string;
  link: {
    href: string;
    label: string;
    title: string;
  };
}

const valuePillars: ValuePillar[] = [
  {
    id: "culture-builder",
    pretitle: "10x your TAM",
    title: "Capture your developer market",
    ctaSubtext: "By addressing developers' entrepreneurial needs",
    link: {
      href: "https://www.beginner.work",
      label: "beginner.work",
      title: "Beginner Work (www.beginner.work)",
    },
  },
  {
    id: "methodical-enjoyable",
    pretitle: "Recruit enterprise developers",
    title: "Retain enterprise customers",
    ctaSubtext: "By showcasing your code strategy in a portal",
    link: {
      href: "https://github.com/tlindow",
      label: "github.com/tlindow",
      title: "Tyler Lindow - GitHub (github.com/tlindow)",
    },
  },
];

export default function WhatYouGet() {
  return (
    <section
      id="what-you-get"
      className="w-full border-t border-border/80 bg-surface-alt/70 pt-16 pb-16 sm:pt-20 sm:pb-24 scroll-mt-20 relative"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ========================================================= */}
        {/* VALUE PILLARS (01, 02) SIDE BY SIDE ON DESKTOP            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start w-full">
          {valuePillars.map((pillar) => {
            const isCultureBuilder = pillar.id === "culture-builder";

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex flex-col text-center md:text-left items-center md:items-start justify-between w-full h-full gap-6 sm:gap-8"
              >
                {/* Copy Block */}
                <div className="flex flex-col gap-1.5 w-full md:min-h-[80px] items-center md:items-start text-center md:text-left">
                  {pillar.pretitle && (
                    <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-indigo-dark block">
                      {pillar.pretitle}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                </div>

                {/* Rotating 3D WebGL Coin & Link */}
                <div className="flex flex-col items-center md:items-start w-full pt-1">
                  <div className="mx-0 flex flex-col items-center md:items-start gap-4 w-full">
                    <div className="w-full flex justify-center md:justify-start items-center py-2">
                      <WebGLCoin
                        type={isCultureBuilder ? "tinker" : "github"}
                        href={pillar.link.href}
                        title={pillar.link.title}
                        className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48"
                      />
                    </div>

                    {/* Action & Mechanism Area */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full">
                      {pillar.ctaSubtext && (
                        <p className="text-xs sm:text-sm font-mono text-muted leading-snug text-center md:text-left">
                          {pillar.ctaSubtext}
                        </p>
                      )}

                      <a
                        href={pillar.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-mono font-bold transition-all hover:scale-[1.02] active:scale-[0.98] bg-foreground text-background hover:bg-foreground/90 shadow-xs"
                        title={pillar.link.title}
                      >
                        <span>{pillar.link.label}</span>
                        <ArrowUpRight
                          size={14}
                          className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 text-background/80 group-hover:text-background"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
