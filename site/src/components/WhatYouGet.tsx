"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WebGLCoin from "@/components/WebGLCoin";

interface ValuePillar {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  link: {
    href: string;
    label: string;
    title: string;
  };
}

const valuePillars: ValuePillar[] = [
  {
    id: "culture-builder",
    number: "01",
    title: "Capture the developer market",
    subtitle: "And 10x your TAM",
    link: {
      href: "https://www.beginner.work",
      label: "beginner.work",
      title: "Beginner Work (www.beginner.work)",
    },
  },
  {
    id: "methodical-enjoyable",
    number: "02",
    title: "Retain enterprise customers",
    subtitle: "And recruit their developers",
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
      className="w-full border-t border-border/80 bg-surface-alt/70 pt-16 pb-14 sm:pt-20 sm:pb-20 scroll-mt-20"
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

                {/* Rotating 3D WebGL Coin & Link */}
                <div className="flex flex-col items-center md:items-start w-full pt-1">
                  <div className="mx-auto md:mx-0 flex flex-col items-center gap-3">
                    <WebGLCoin
                      type={isCultureBuilder ? "tinker" : "github"}
                      href={pillar.link.href}
                      title={pillar.link.title}
                      className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48"
                    />

                    <a
                      href={pillar.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full bg-surface hover:bg-surface-alt px-3.5 py-1.5 border border-border hover:border-indigo/40 text-xs font-mono font-medium text-foreground shadow-2xs hover:shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                      title={pillar.link.title}
                    >
                      <span>{pillar.link.label}</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 text-muted group-hover:text-foreground"
                      />
                    </a>
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
