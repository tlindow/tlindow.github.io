"use client";

import React, { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideData } from "@/data/blogPosts";

interface SlideDeckViewerProps {
  slides: SlideData[];
}

export default function SlideDeckViewer({ slides }: SlideDeckViewerProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentSlide = slides[currentIdx];

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Render minimalist Lindow Labs slide onto canvas (1200x1200)
  const renderSlideToCanvas = (
    slide: SlideData,
    canvas: HTMLCanvasElement
  ): Promise<string> => {
    return new Promise((resolve) => {
      const size = 1200;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve("");

      const bgCol = "#FFFDF7";
      const cardBg = "#FFFFFF";
      const textColor = "#1F1D1A";
      const borderColor = "#E6E2D8";
      const accentColor = "#4F46E5";

      ctx.fillStyle = bgCol;
      ctx.fillRect(0, 0, size, size);

      const margin = 80;
      const cardW = size - margin * 2;
      const cardH = size - margin * 2;
      const radius = 28;

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(margin, margin, cardW, cardH, radius);
      ctx.fillStyle = cardBg;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = borderColor;
      ctx.stroke();
      ctx.restore();

      const grad = ctx.createLinearGradient(margin, margin, margin + cardW, margin);
      grad.addColorStop(0, "#C4B5FD");
      grad.addColorStop(0.25, "#A5B4FC");
      grad.addColorStop(0.5, "#7DD3FC");
      grad.addColorStop(0.75, "#6EE7B7");
      grad.addColorStop(1, "#FDBA74");

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(margin, margin, cardW, 8, [radius, radius, 0, 0]);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      const pad = 72;
      ctx.font = "bold 24px 'Space Mono', monospace, sans-serif";
      ctx.fillStyle = accentColor;
      ctx.textAlign = "right";
      ctx.textBaseline = "top";
      ctx.fillText(slide.slideNumber, margin + cardW - pad, margin + pad);

      const textX = margin + pad;
      const textMaxWidth = cardW - pad * 2;
      ctx.font = "bold 46px 'Space Mono', monospace, sans-serif";
      ctx.fillStyle = textColor;
      ctx.textAlign = "left";
      ctx.textBaseline = "alphabetic";

      const words = slide.quote.split(" ");
      let line = "";
      const lines: string[] = [];
      const lineHeight = 72;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > textMaxWidth && n > 0) {
          lines.push(line.trim());
          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }
      lines.push(line.trim());

      const totalTextHeight = lines.length * lineHeight;
      const startY = margin + (cardH - totalTextHeight) / 2 + 30;

      let currentY = startY;
      for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], textX, currentY);
        currentY += lineHeight;
      }

      resolve(canvas.toDataURL("image/png"));
    });
  };

  const downloadCurrentSlide = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await renderSlideToCanvas(
        currentSlide,
        canvasRef.current
      );
      const link = document.createElement("a");
      link.download = `Tyler-Lindow-Slide-${currentIdx + 1}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export error:", err);
    } finally {
      setIsExporting(false);
    }
  };

  const downloadAllSlides = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    try {
      for (let i = 0; i < slides.length; i++) {
        const dataUrl = await renderSlideToCanvas(
          slides[i],
          canvasRef.current
        );
        const link = document.createElement("a");
        link.download = `Tyler-Lindow-Slide-${i + 1}-of-${slides.length}.png`;
        link.href = dataUrl;
        link.click();
        await new Promise((r) => setTimeout(r, 200));
      }
    } catch (err) {
      console.error("Batch export error:", err);
    } finally {
      setIsExporting(false);
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(currentSlide.quote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center my-8">
      <canvas ref={canvasRef} className="hidden" />

      {/* Minimalist Slide Card */}
      <div className="w-full max-w-xl bg-surface rounded-2xl border border-border overflow-hidden">
        {/* Top Rainbow Accent */}
        <div className="h-1 w-full labs-rainbow-gradient" />

        {/* Card Body */}
        <div className="p-8 sm:p-12 min-h-[300px] sm:min-h-[340px] flex flex-col justify-between bg-surface text-foreground font-mono">
          <div className="flex justify-end items-center">
            <span className="text-xs font-bold font-mono text-indigo-dark tracking-wider">
              {currentSlide.slideNumber}
            </span>
          </div>

          <div className="my-auto py-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground font-mono leading-snug">
              {currentSlide.quote}
            </p>
          </div>
        </div>
      </div>

      {/* Minimalist Controls (Zero Box Containers) */}
      <div className="mt-4 w-full max-w-xl flex items-center justify-between text-xs font-mono text-muted px-1">
        {/* Slide Counter & Dots */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  currentIdx === idx
                    ? "w-4 bg-indigo-dark"
                    : "w-1.5 bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 text-foreground">
            <button
              onClick={prevSlide}
              className="p-1 hover:text-indigo-dark transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-[11px] font-mono text-muted">
              {currentIdx + 1}/{slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-1 hover:text-indigo-dark transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Minimal Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={copyText}
            className="hover:text-indigo-dark transition-colors cursor-pointer"
          >
            {copied ? "Copied" : "Copy text"}
          </button>

          <button
            onClick={downloadCurrentSlide}
            disabled={isExporting}
            className="hover:text-indigo-dark transition-colors cursor-pointer"
          >
            Download PNG
          </button>

          <button
            onClick={downloadAllSlides}
            disabled={isExporting}
            className="font-bold text-indigo-dark hover:text-labs-primary-dark transition-colors cursor-pointer"
          >
            {isExporting ? "Exporting..." : "Download all 4"}
          </button>
        </div>
      </div>
    </div>
  );
}
