import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import SpaceMonoResume from "@/components/SpaceMonoResume";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Resume — Tyler Lindow (Fintech Product-Eng Manager)",
  description:
    "Web-based and printable resume for Tyler Lindow. Fintech Product-Eng Manager — B2B SaaS on curiosity-safe, GenAI Rails. Onboarding $0 – $10B+ GMV enterprises. Former Affirm, Beginner, Galvanize.",
  openGraph: {
    title: "Resume — Tyler Lindow (Fintech Product-Eng Manager)",
    description:
      "Web-based and printable resume for Tyler Lindow. Fintech Product-Eng Manager — B2B SaaS on curiosity-safe, GenAI Rails. Onboarding $0 – $10B+ GMV enterprises. Former Affirm, Beginner, Galvanize.",
    url: "https://tlindow.github.io/resume",
    siteName: "Tyler Lindow",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume — Tyler Lindow (Fintech Product-Eng Manager)",
    description:
      "Web-based and printable resume for Tyler Lindow. Fintech Product-Eng Manager — B2B SaaS on curiosity-safe, GenAI Rails. Onboarding $0 – $10B+ GMV enterprises. Former Affirm, Beginner, Galvanize.",
  },
};

export default function ResumePageRoute() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono">
      <Navbar />
      <div className="pt-20 sm:pt-24 max-w-4xl mx-auto px-4 sm:px-6 no-print">
        <a
          href={`${basePath}/`}
          className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-indigo-dark transition-colors py-2"
        >
          <ArrowLeft size={14} />
          <span>Back to Product Overview</span>
        </a>
      </div>
      <div className="pt-2">
        <SpaceMonoResume />
      </div>
    </div>
  );
}
