"use client";

import React, { useState } from "react";
import { Download, Check, Layers } from "lucide-react";
import { SlideData } from "@/data/blogPosts";

interface SlideDownloaderProps {
  slides: SlideData[];
}

export default function SlideDownloader({ slides }: SlideDownloaderProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const downloadAllSlides = async () => {
    setDownloading(true);
    try {
      for (const slide of slides) {
        const link = document.createElement("a");
        link.href = `/slides/slide-${slide.id}.png`;
        link.download = `Slide-${slide.id}-of-${slides.length}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        await new Promise((r) => setTimeout(r, 250));
      }
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (err) {
      console.error("Error downloading slides:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="py-4 my-6 border-y border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
      <div className="text-muted flex items-center gap-2">
        <Layers size={14} className="text-indigo-dark" />
        <span>4-Slide Minimalist LinkedIn Carousel</span>
      </div>

      <button
        onClick={downloadAllSlides}
        disabled={downloading}
        className="inline-flex items-center gap-1.5 font-bold text-indigo-dark hover:text-labs-primary-dark transition-colors cursor-pointer disabled:opacity-50"
      >
        {downloaded ? (
          <>
            <Check size={14} className="text-mint-dark" />
            <span>Downloaded 4 Slides</span>
          </>
        ) : (
          <>
            <Download size={14} />
            <span>{downloading ? "Downloading..." : "Download 4 Slides (PNG)"}</span>
          </>
        )}
      </button>
    </div>
  );
}
