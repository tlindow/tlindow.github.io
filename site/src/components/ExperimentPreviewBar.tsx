"use client";

import { useState } from "react";
import { useExperiment } from "@/context/AnalyticsProvider";
import { FlaskConical, ChevronUp, ChevronDown, Check } from "lucide-react";

export default function ExperimentPreviewBar() {
  const { activePresetKey, setPreset } = useExperiment();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible] = useState(() => {
    if (process.env.NODE_ENV === "development") return true;
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("preview") === "true";
    }
    return false;
  });

  if (!isVisible) {
    return null;
  }

  const presets = [
    { key: "baseline", title: "1. Baseline / Control", desc: "'Recruit Me' · $0–$10B+ GMV Scale" },
    { key: "action_oriented", title: "2. Action-Oriented", desc: "'Deploy Tyler' · Staff Dev PM" },
    { key: "low_friction", title: "3. Low-Friction", desc: "'Connect on LinkedIn' · Networking" },
    { key: "executive_authority", title: "4. Executive Authority", desc: "'Hire Staff PM' · $10B+ Scale" },
  ];

  return (
    <aside aria-label="A/B Testing Preview Bar" className="fixed bottom-16 sm:bottom-18 left-4 z-50 no-print font-mono text-xs">
      <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-xl overflow-hidden transition-all max-w-xs">
        {/* Header Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-3 px-3.5 py-2 bg-surface hover:bg-surface-alt transition-colors cursor-pointer text-foreground font-bold"
        >
          <div className="flex items-center gap-2">
            <FlaskConical size={14} className="text-indigo-dark animate-pulse" />
            <span className="text-[11px] uppercase tracking-wider text-muted font-bold">
              A/B Variant Preview
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-indigo-dark font-bold bg-indigo/10 px-2 py-0.5 rounded-md">
              {activePresetKey}
            </span>
            {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </div>
        </button>

        {/* Expanded Options */}
        {isOpen && (
          <div className="p-2 space-y-1 border-t border-border/60 bg-background/90">
            <p className="px-2 py-1 text-[10px] text-muted">
              Live toggle content variations to test copy, styling, and conversion appeal:
            </p>

            <div className="space-y-1">
              {presets.map((preset) => {
                const isActive = activePresetKey === preset.key;
                return (
                  <button
                    key={preset.key}
                    type="button"
                    onClick={() => {
                      setPreset(preset.key);
                    }}
                    className={`w-full text-left px-2.5 py-2 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-indigo-dark text-sand font-bold shadow-xs"
                        : "bg-surface/50 hover:bg-surface text-foreground"
                    }`}
                  >
                    <div>
                      <div className="leading-tight">{preset.title}</div>
                      <div
                        className={`text-[10px] ${
                          isActive ? "text-sand/80" : "text-muted"
                        }`}
                      >
                        {preset.desc}
                      </div>
                    </div>
                    {isActive && <Check size={14} className="shrink-0 text-sand ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
