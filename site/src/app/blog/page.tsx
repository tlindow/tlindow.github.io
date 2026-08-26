import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog — Tyler Lindow",
  description:
    "Reflections on engineering leadership, developer intuition, AI dev tools, and building at scale. By Tyler Lindow (Fintech Product-Eng Manager).",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono flex flex-col justify-between">
      <Navbar />

      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20 sm:pb-32 flex-1">
        {/* Back Navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-indigo-dark transition-colors py-1"
          >
            <ArrowLeft size={14} />
            <span>Home</span>
          </Link>
        </div>

        {/* Minimalist Header */}
        <header className="mb-16 space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-foreground font-mono">
            Blog
          </h1>
          <p className="text-sm sm:text-base text-muted font-mono max-w-xl leading-relaxed">
            Notes on engineering leadership, developer intuition, and building in the age of agentic software.
          </p>
        </header>

        {/* Minimalist Post List */}
        <div className="space-y-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="space-y-3 group">
              {/* Meta row: pure text, zero boxes */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted font-mono">
                <span className="text-foreground font-medium">{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
                <span>·</span>
                <span className="text-muted/80">
                  {post.tags.map((t) => `#${t.replace(/\s+/g, "")}`).join(" ")}
                </span>
              </div>

              {/* Title: Clean typography */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-mono leading-snug">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-indigo-dark transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-sm sm:text-base text-foreground/80 font-mono leading-relaxed pt-1">
                {post.summary}
              </p>

              {/* Linkout */}
              <div className="pt-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-dark hover:text-labs-primary-dark transition-colors"
                >
                  <span>Read essay</span>
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
