"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import WebGLCoin from "@/components/WebGLCoin";

interface ScreenshotItem {
  src: string;
  alt: string;
  domain: string;
  href: string;
}

interface StoryItem {
  pretitle: string;
  title: string;
  description: string;
  screenshots: ScreenshotItem[];
  link: {
    href: string;
    label: string;
    title: string;
  };
}

interface ValuePillar {
  id: string;
  pretitle?: string;
  title: string;
  ctaSubtext?: string;
  coinType: "tinker" | "github";
  link: {
    href: string;
    label: string;
    title: string;
  };
  story: StoryItem;
}

const valuePillars: ValuePillar[] = [
  {
    id: "culture-builder",
    pretitle: "10x your TAM",
    title: "Capture your developer market",
    ctaSubtext: "By addressing developers' entrepreneurial needs",
    coinType: "tinker",
    link: {
      href: "https://www.beginner.work",
      label: "beginner.work",
      title: "Beginner Work (www.beginner.work)",
    },
    story: {
      pretitle: "My work product",
      title: "Marketing as Engineering Leadership",
      description:
        "Treating top-of-funnel marketing as a core engineering discipline—leading the affirm.com revamp to unify web and mobile conversion, driving $500K in GMV through perseverance and team focus.",
      screenshots: [
        {
          src: "/affirm-home.png",
          alt: "Affirm.com homepage website revamp",
          domain: "affirm.com",
          href: "https://www.affirm.com",
        },
        {
          src: "/beginner-work.png",
          alt: "Beginner.work tinker app and word as currency",
          domain: "beginner.work",
          href: "https://www.beginner.work",
        },
      ],
      link: {
        href: "/blog/securing-500k-gmv-win",
        label: "Read blog post",
        title: "Marketing as Engineering Leadership",
      },
    },
  },
  {
    id: "methodical-enjoyable",
    pretitle: "Recruit enterprise developers",
    title: "Retain enterprise customers",
    ctaSubtext: "By showcasing your code strategy in a portal",
    coinType: "github",
    link: {
      href: "https://github.com/tlindow",
      label: "github.com/tlindow",
      title: "Tyler Lindow - GitHub (github.com/tlindow)",
    },
    story: {
      pretitle: "My work product",
      title: "B2B Portals as Trust Stores",
      description:
        "Transforming legacy merchant portals into resilient trust stores—standing up Velocity Labs to eliminate recurring incidents, sustain 99.9% availability for Intuit scale, and unlock AI-driven agility.",
      screenshots: [
        {
          src: "/affirm-dashboard.png",
          alt: "Affirm Merchant Portal Dashboard",
          domain: "affirm.com/dashboard",
          href: "https://www.affirm.com/dashboard",
        },
        {
          src: "/tinker-beginner-work.png",
          alt: "Tinker by Beginner.work sign in app",
          domain: "tinker.beginner.work",
          href: "https://tinker.beginner.work",
        },
      ],
      link: {
        href: "/blog/velocity-labs-system-sculpting",
        label: "Read blog post",
        title: "B2B Portals as Trust Stores",
      },
    },
  },
];

export default function WhatYouGet() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      id="what-you-get"
      className="w-full border-t border-border/80 bg-surface-alt/70 pt-16 pb-20 sm:pt-20 sm:pb-28 scroll-mt-20 relative font-mono"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="space-y-16 sm:space-y-24">
          {valuePillars.map((pillar) => {
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-6 border-t border-border/60 first:border-t-0 first:pt-0"
              >
                {/* Left Side: Token & Value Prop (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
                  {/* Copy Block */}
                  <div className="flex flex-col gap-1.5 w-full items-center text-center lg:items-start lg:text-left">
                    {pillar.pretitle && (
                      <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-indigo-dark block">
                        {pillar.pretitle}
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-foreground">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Rotating 3D WebGL Coin */}
                  <div className="w-full flex justify-center lg:justify-start items-center py-2">
                    <WebGLCoin
                      type={pillar.coinType}
                      href={pillar.link.href}
                      title={pillar.link.title}
                      className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48"
                    />
                  </div>

                  {/* Mechanism & Token Link */}
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3 w-full">
                    {pillar.ctaSubtext && (
                      <p className="text-xs sm:text-sm font-mono text-muted leading-snug text-center lg:text-left">
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

                {/* Right Side: Case Study / Story (7 cols) */}
                <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-5 lg:pl-6 lg:border-l lg:border-border/60">
                  {/* Story Header */}
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-indigo-dark block">
                      {pillar.story.pretitle}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-foreground">
                      {pillar.story.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-mono pt-1">
                      {pillar.story.description}
                    </p>
                  </div>

                  {/* Side-by-side Screenshots (2 columns on both mobile & desktop) */}
                  <div className="w-full grid grid-cols-2 gap-2.5 sm:gap-4 pt-1">
                    {pillar.story.screenshots.map((shot) => (
                      <div
                        key={shot.src}
                        className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl border border-border bg-surface overflow-hidden shadow-xs"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${basePath}${shot.src}`}
                          alt={shot.alt}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* On-site blog post action button */}
                  <div className="pt-2">
                    <Link
                      href={pillar.story.link.href}
                      className="inline-flex items-center gap-2 rounded-xl bg-surface hover:bg-surface-alt text-foreground border border-border px-5 py-2.5 text-xs sm:text-sm font-mono font-bold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      title={pillar.story.link.title}
                    >
                      <FileText
                        size={15}
                        className="shrink-0 text-foreground"
                      />
                      <span>{pillar.story.link.label}</span>
                    </Link>
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
