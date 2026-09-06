"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { TinkerGlobeMark } from "@/components/brand/BeginnerMarks";

interface ValuePillar {
  id: string;
  number: string;
  title: string;
  quote: string;
}

const valuePillars: ValuePillar[] = [
  {
    id: "methodical-enjoyable",
    number: "01",
    title: "Methodical & Empathetic",
    quote: "Building software is creative design",
  },
  {
    id: "culture-builder",
    number: "02",
    title: "Culture-Builder",
    quote: "We are all founders",
  },
];

export default function WhatYouGet() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      id="what-you-get"
      className="w-full border-y border-border/80 bg-surface-alt/70 pt-14 pb-12 sm:pt-20 sm:pb-16 scroll-mt-20 mt-8 sm:mt-12 mb-0"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ========================================================= */}
        {/* 3 VALUE PILLARS (01, 02, 03)                             */}
        {/* ========================================================= */}
        <div className="flex flex-col space-y-16 sm:space-y-24">
        {valuePillars.map((pillar, idx) => {
          const isEven = idx % 2 === 0;
          const isMethodical = pillar.id === "methodical-enjoyable";

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-14 items-center"
            >
              {/* Copy Block */}
              <div
                className={`flex flex-col justify-center space-y-3 sm:space-y-4 ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs sm:text-sm font-mono font-bold text-indigo-dark shrink-0">
                    {pillar.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base md:text-lg font-mono text-foreground/85 leading-relaxed">
                  {pillar.quote}
                </p>
              </div>

              {/* Visual Asset */}
              <div
                className={`w-full ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                {isMethodical ? (
                  <GitHubOgCard basePath={basePath} />
                ) : (
                  <TinkerOgCard basePath={basePath} />
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

function GitHubOgCard({ basePath }: { basePath: string }) {
  return (
    <a
      href="https://github.com/tlindow"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full aspect-[16/10] rounded-2xl border border-border bg-surface overflow-hidden hover:border-indigo/60 hover:shadow-md transition-all duration-300 cursor-pointer shadow-2xs"
      title="View Tyler Lindow's GitHub profile (@tlindow)"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/og-github.png`}
        alt="Tyler Lindow GitHub OpenGraph Card"
        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        loading="lazy"
      />

      {/* Frosted glass overlay link badge */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border text-xs font-mono font-bold text-foreground group-hover:text-indigo-dark group-hover:border-indigo/50 shadow-xs transition-all">
        <Github size={13} className="shrink-0" />
        <span>github.com/tlindow</span>
        <ArrowUpRight
          size={13}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
        />
      </div>
    </a>
  );
}

function TinkerOgCard({ basePath }: { basePath: string }) {
  return (
    <a
      href="https://tinker.beginner.work"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full aspect-[16/10] rounded-2xl border border-border bg-surface overflow-hidden hover:border-indigo/60 hover:shadow-md transition-all duration-300 cursor-pointer shadow-2xs"
      title="View tinker (tinker.beginner.work)"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/og-tinker.png`}
        alt="tinker — A new way to web"
        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        loading="lazy"
      />

      {/* Frosted glass overlay link badge */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border text-xs font-mono font-bold text-foreground group-hover:text-indigo-dark group-hover:border-indigo/50 shadow-xs transition-all">
        <TinkerGlobeMark className="w-3.5 h-3.5 shrink-0" />
        <span>tinker.beginner.work</span>
        <ArrowUpRight
          size={13}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
        />
      </div>
    </a>
  );
}
