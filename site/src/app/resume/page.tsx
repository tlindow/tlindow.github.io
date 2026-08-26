import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import SpaceMonoResume from "@/components/SpaceMonoResume";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Resume — Tyler Lindow (Staff B2B Product Manager)",
  description:
    "Web-based and printable resume for Tyler Lindow. Staff B2B Product Manager — B2B Fintech on Developer Rails. $10B+ partner portfolio scale, Affirm, and developer paved paths.",
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
