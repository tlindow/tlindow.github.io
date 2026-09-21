import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import CareerNarrative from "@/components/CareerNarrative";
import Navbar from "@/components/Navbar";
import { FORMATION_SUMMARY, HEADLINE } from "@/data/positioning";

export const metadata: Metadata = {
  title: `Story — Tyler Lindow (${HEADLINE})`,
  description: FORMATION_SUMMARY,
  openGraph: {
    title: `Story — Tyler Lindow (${HEADLINE})`,
    description: FORMATION_SUMMARY,
    url: "https://tlindow.github.io/resume",
    siteName: "Tyler Lindow",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `Story — Tyler Lindow (${HEADLINE})`,
    description: FORMATION_SUMMARY,
  },
};

export default function ResumePageRoute() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono">
      <Navbar />
      <div className="pt-20 sm:pt-24 max-w-3xl mx-auto px-4 sm:px-6 pb-4 sm:pb-6">
        <a
          href={`${basePath}/#about`}
          className="group inline-flex items-center gap-2 text-xs font-mono font-medium rounded-full bg-surface hover:bg-surface-alt px-3.5 py-1.5 border border-border hover:border-indigo/40 text-muted hover:text-foreground shadow-2xs transition-all duration-200"
        >
          <ArrowLeft size={13} className="text-indigo-dark transition-transform group-hover:-translate-x-0.5" />
          <span>Back to About</span>
        </a>
      </div>
      <CareerNarrative />
    </div>
  );
}
