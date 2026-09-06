"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, BookOpen, ArrowUpRight } from "lucide-react";
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
    id: "systems-thinker",
    number: "02",
    title: "It starts with home",
    quote: "Excellence follows self-respect",
  },
  {
    id: "culture-builder",
    number: "03",
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
          const isSystemsThinker = pillar.id === "systems-thinker";

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
                ) : isSystemsThinker ? (
                  <CurrentlyReadingCard basePath={basePath} />
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

function CurrentlyReadingCard({ basePath }: { basePath: string }) {
  return (
    <a
      href="https://www.amazon.com/dp/1607747308"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-full aspect-[16/10] rounded-2xl border border-border bg-surface overflow-hidden hover:border-[#FF9900]/60 hover:shadow-md transition-all duration-300 cursor-pointer shadow-2xs"
      title="The Life-Changing Magic of Tidying Up by Marie Kondo on Amazon"
    >
      {/* Blurred ambient book cover background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/book-marie-kondo.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-125 pointer-events-none"
      />

      {/* Book Cover */}
      <div className="relative z-10 h-[80%] aspect-[351/500] rounded-r-md rounded-l-xs shadow-xl border border-border/70 overflow-hidden group-hover:scale-105 transition-transform duration-500 bg-sand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/book-marie-kondo.jpg`}
          alt="The Life-Changing Magic of Tidying Up by Marie Kondo"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Subtle book spine shadow */}
        <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Top Left: Current Read pill */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border text-[11px] font-mono font-bold text-foreground shadow-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <span className="text-muted font-normal">Current read:</span>
        <span className="text-foreground">Marie Kondo</span>
      </div>

      {/* Top Right: Frosted glass Amazon link badge */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border text-xs font-mono font-bold text-foreground group-hover:text-[#FF9900] group-hover:border-[#FF9900]/50 shadow-xs transition-all">
        <BookOpen size={13} className="shrink-0 text-[#FF9900]" />
        <span>amazon.com</span>
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
