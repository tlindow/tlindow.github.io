"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, Sparkles, Layers } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import SlideDeckViewer from "./SlideDeckViewer";

export default function BlogSection() {
  const featuredPost = blogPosts[0];

  return (
    <section id="writing" className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sand border border-border text-xs font-mono font-bold text-indigo-dark mb-3">
            <BookOpen size={13} />
            <span>Essays &amp; Field Notes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-mono">
            Writing &amp; Reflections
          </h2>
          <p className="text-sm sm:text-base text-muted font-mono mt-1.5 max-w-xl">
            Essays on engineering leadership, developer intuition, and building in the age of agentic AI.
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-dark hover:text-labs-primary-dark transition-colors shrink-0 group"
        >
          <span>View All Posts</span>
          <ArrowRight
            size={13}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>

      {/* Featured Post Box */}
      <div className="space-y-12">
        {/* Post Summary & Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted">
            <span className="font-bold text-foreground">{featuredPost.date}</span>
            <span>·</span>
            <span>{featuredPost.readTime}</span>
            <span>·</span>
            <div className="flex flex-wrap gap-1.5">
              {featuredPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-sand border border-border text-[11px] text-foreground font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-mono hover:text-indigo-dark transition-colors">
            <Link href={`/blog/${featuredPost.slug}`}>
              {featuredPost.title}
            </Link>
          </h3>

          <p className="text-sm sm:text-base text-foreground/80 font-mono leading-relaxed">
            {featuredPost.summary}
          </p>
        </div>

        {/* Embedded Interactive LinkedIn Slide Deck Carousel */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
              <Layers size={14} className="text-indigo-dark" />
              <span>LinkedIn Carousel Deck (4 Slides)</span>
            </div>
            <span className="text-[11px] font-mono text-muted">
              Interactive Preview &amp; Direct PNG Download
            </span>
          </div>

          <SlideDeckViewer slides={featuredPost.slides} />
        </div>

        {/* Read Full Article Callout */}
        <div className="pt-2 flex justify-start">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="inline-flex items-center gap-2 rounded-xl bg-surface hover:bg-surface-alt text-foreground border border-border px-5 py-3 text-xs sm:text-sm font-bold font-mono transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xs group"
          >
            <span>Read Complete Essay</span>
            <ArrowRight
              size={15}
              className="text-indigo-dark group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
