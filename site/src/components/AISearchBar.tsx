"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Sparkles,
  ArrowRight,
  X,
  CornerDownLeft,
  Command,
  ExternalLink,
  Bot,
  Compass,
  Code2,
  Terminal,
  Copy,
  Check,
  Cpu,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  searchKnowledge,
  sampleQuestions,
  SearchResult,
  AIResponseAction,
} from "@/data/aiKnowledge";

export default function AISearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [activeResult, setActiveResult] = useState<SearchResult | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [activePlaceholderIndex, setActivePlaceholderIndex] = useState(0);
  const [showCodeInspector, setShowCodeInspector] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"engine" | "stream">("engine");
  const [copied, setCopied] = useState(false);
  const [execTime, setExecTime] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const placeholders = [
    "Ask anything about Tyler's background, projects, or mentoring...",
    "e.g. How does 1:1 mentoring work?",
    "e.g. What tech stack does Tyler use?",
    "e.g. What projects has Tyler built?",
    "e.g. How to book a mentoring session?",
  ];

  // Rotate placeholder hints smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  // Global Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Run search and trigger simulated natural response streaming
  const handleSearch = useCallback((searchQuery: string) => {
    const clean = searchQuery.trim();
    if (!clean) return;

    const t0 = performance.now();
    const result = searchKnowledge(clean);
    const t1 = performance.now();
    setExecTime(Number((t1 - t0).toFixed(2)));

    setQuery(searchQuery);
    setIsTyping(true);
    setIsOpen(true);
    setDisplayedText("");
    setActiveResult(result);

    if (result) {
      const fullText = result.topic.summary;
      let currentIndex = 0;
      const speed = 12; // ms per char

      const streamTimer = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(streamTimer);
          setIsTyping(false);
        }
      }, speed);
    } else {
      setIsTyping(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
    setActiveResult(null);
    setDisplayedText("");
    setExecTime(null);
    inputRef.current?.focus();
  };

  const handleSampleClick = (question: string) => {
    handleSearch(question);
    inputRef.current?.focus();
  };

  const codeSnippets = {
    engine: `// ⚡ Client-Side Intent & Semantic Engine (aiKnowledge.ts)
export function searchKnowledge(query: string): SearchResult {
  const clean = query.trim().toLowerCase();
  
  // 1. Natural Language Intent Pattern Match
  for (const topic of knowledgeBase) {
    for (const pattern of topic.patterns) {
      if (pattern.test(clean)) {
        return { topic, confidence: 0.95, matchedTerms: [pattern.source] };
      }
    }
  }

  // 2. Tokenized Multi-Term Weighted Scoring
  const tokens = clean.split(/\\s+/).filter(t => t.length > 1);
  let bestTopic = null, bestScore = 0;

  for (const topic of knowledgeBase) {
    let score = 0;
    if (topic.title.toLowerCase().includes(clean)) score += 4.0;
    for (const kw of topic.keywords) {
      if (clean.includes(kw)) score += 2.5;
    }
    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }

  return { topic: bestTopic || fallbackTopic, confidence: 0.85 };
}`,
    stream: `// 🌊 Character-by-Character Typewriter Stream (AISearchBar.tsx)
const streamTimer = setInterval(() => {
  if (currentIndex < fullText.length) {
    setDisplayedText(fullText.slice(0, currentIndex + 1));
    currentIndex++;
  } else {
    clearInterval(streamTimer);
    setIsTyping(false); // Triggers spring reveal for CTA buttons
  }
}, 12); // ~83 characters / second simulation`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto text-left z-20"
    >
      {/* Search Input Bar Container */}
      <form
        onSubmit={handleSubmit}
        className="relative group transition-all duration-300"
      >
        {/* Ambient Glow Background on hover/focus */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet/30 via-sky/25 to-indigo/30 blur-md opacity-60 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative flex items-center bg-surface/90 backdrop-blur-xl border border-border/80 rounded-full p-1.5 sm:p-2 shadow-lg shadow-violet/5 group-focus-within:border-violet/50 group-focus-within:shadow-violet/15 transition-all">
          {/* AI Sparkle Icon */}
          <div className="flex items-center justify-center pl-3 sm:pl-4 pr-1.5 text-violet">
            <motion.div
              animate={
                isTyping
                  ? { rotate: [0, 180, 360], scale: [1, 1.2, 1] }
                  : { scale: [1, 1.08, 1] }
              }
              transition={
                isTyping
                  ? { duration: 2, repeat: Infinity, ease: "linear" }
                  : { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Sparkles size={20} className="text-violet" />
            </motion.div>
          </div>

          {/* Text Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholders[activePlaceholderIndex]}
            aria-label="Ask Tyler's AI Assistant"
            className="w-full bg-transparent px-2.5 py-2 text-sm sm:text-base text-foreground placeholder:text-muted/60 focus:outline-none font-normal"
          />

          {/* Right Action Icons / Badges */}
          <div className="flex items-center gap-1.5 sm:gap-2 pr-1 sm:pr-1.5">
            {query && (
              <button
                type="button"
                onClick={handleClear}
                aria-label="Clear search"
                className="p-1.5 text-muted hover:text-foreground rounded-full hover:bg-surface-alt transition-colors"
              >
                <X size={16} />
              </button>
            )}

            {/* Keyboard shortcut indicator */}
            <div className="hidden sm:inline-flex items-center gap-0.5 px-2.5 py-1 text-[11px] font-medium text-muted/70 bg-surface-alt border border-border rounded-full select-none">
              <Command size={11} />
              <span>K</span>
            </div>

            {/* Search / Submit button */}
            <button
              type="submit"
              aria-label="Submit search"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-violet text-white hover:bg-indigo transition-all duration-200 hover:shadow-md hover:shadow-violet/25 disabled:opacity-50 shrink-0"
            >
              {isTyping ? (
                <Sparkles size={15} className="animate-spin" />
              ) : (
                <CornerDownLeft size={15} />
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Suggested Query Pills */}
      {!isOpen && (
        <motion.div
          className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-1"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="text-[11px] sm:text-xs font-medium text-muted/70 mr-1 hidden sm:inline">
            Suggested:
          </span>
          {sampleQuestions.slice(0, 3).map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => handleSampleClick(q)}
              className="inline-flex items-center gap-1 rounded-full bg-surface/75 hover:bg-violet-light/70 border border-border/80 hover:border-violet/30 px-3.5 py-1 text-xs text-muted hover:text-foreground transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5"
            >
              <span>{q}</span>
            </button>
          ))}
        </motion.div>
      )}

      {/* AI Response Card Dropdown */}
      <AnimatePresence>
        {isOpen && activeResult && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-3 rounded-3xl bg-surface/95 backdrop-blur-xl border border-border shadow-2xl p-5 sm:p-6 text-foreground relative overflow-hidden"
          >
            {/* Ambient background highlight */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br from-violet/20 via-sky/15 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Header with Topic badge and close button */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-light text-violet border border-violet/20">
                  <Bot size={13} />
                  Tyler AI Concierge
                </span>
                <span className="text-xs font-medium text-muted hidden sm:inline">
                  &bull; {activeResult.topic.title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close response"
                className="p-1.5 rounded-full text-muted hover:text-foreground hover:bg-surface-alt transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* AI Summary Answer */}
            <div className="mt-4">
              <p className="text-sm sm:text-base leading-relaxed text-foreground font-normal">
                {displayedText}
                {isTyping && (
                  <span className="inline-block w-1.5 h-4 ml-1 bg-violet animate-pulse align-middle" />
                )}
              </p>

              {/* Key Bullet Highlights */}
              {!isTyping && activeResult.topic.details.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-3.5 space-y-2 bg-surface-alt/70 rounded-2xl p-3.5 sm:p-4 border border-border/70 text-xs sm:text-sm text-muted"
                >
                  {activeResult.topic.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-violet font-bold text-xs mt-0.5">
                        &rarr;
                      </span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Direct Action Buttons */}
            {!isTyping && activeResult.topic.actions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-5 flex flex-wrap items-center gap-2.5 pt-3 border-t border-border"
              >
                {activeResult.topic.actions.map((act) => (
                  <ActionButton key={act.label} action={act} />
                ))}
              </motion.div>
            )}

            {/* Follow-up Question Chips */}
            {!isTyping &&
              activeResult.topic.suggestedFollowUps.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-4 pt-3 border-t border-border/60 flex flex-wrap items-center gap-1.5"
                >
                  <span className="text-[11px] font-medium text-muted/80 mr-1 flex items-center gap-1">
                    <Compass size={12} />
                    Related queries:
                  </span>
                  {activeResult.topic.suggestedFollowUps.map((followUp) => (
                    <button
                      key={followUp}
                      type="button"
                      onClick={() => handleSampleClick(followUp)}
                      className="rounded-full bg-surface-alt hover:bg-violet-light/80 border border-border px-3 py-1 text-[11px] sm:text-xs text-muted hover:text-foreground transition-all duration-200"
                    >
                      {followUp}
                    </button>
                  ))}
                </motion.div>
              )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Runtime & Code Inspector Toggle Button */}
      <div className="mt-3.5 flex justify-center">
        <button
          type="button"
          onClick={() => setShowCodeInspector(!showCodeInspector)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-muted hover:text-foreground bg-surface/60 hover:bg-surface border border-border/70 hover:border-violet/30 backdrop-blur-sm transition-all duration-200 hover:shadow-sm"
        >
          <Code2 size={13} className="text-violet" />
          <span>How it works: Runtime & Code</span>
          {showCodeInspector ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </button>
      </div>

      {/* Interactive Runtime Telemetry & Code Snippet Box */}
      <AnimatePresence>
        {showCodeInspector && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-3 rounded-2xl border border-border bg-[#1E1B18] text-[#F3EFE6] shadow-xl overflow-hidden text-xs"
          >
            {/* Header: Live Telemetry Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#171412] border-b border-[#2D2A26]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-mint" />
                <span className="font-mono font-semibold text-white/90">Runtime Engine</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-mint/15 text-mint border border-mint/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                  {execTime !== null ? `${execTime}ms latency` : "Client-side / 0ms API cost"}
                </span>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex items-center gap-1 bg-[#262320] p-0.5 rounded-lg border border-[#3A3733]">
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("engine")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                    activeCodeTab === "engine"
                      ? "bg-violet text-white font-medium shadow-sm"
                      : "text-muted hover:text-white"
                  }`}
                >
                  matchingEngine.ts
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab("stream")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                    activeCodeTab === "stream"
                      ? "bg-violet text-white font-medium shadow-sm"
                      : "text-muted hover:text-white"
                  }`}
                >
                  streamRenderer.tsx
                </button>
              </div>
            </div>

            {/* Live State Inspector (Only shows when search is active) */}
            {activeResult && (
              <div className="px-4 py-2.5 bg-[#141210] border-b border-[#2D2A26] font-mono text-[11px] flex flex-wrap items-center gap-x-4 gap-y-1.5 text-white/80">
                <div className="flex items-center gap-1 text-sky">
                  <Cpu size={12} />
                  <span>State:</span>
                </div>
                <div>
                  <span className="text-muted">query:</span>{" "}
                  <span className="text-amber">&quot;{activeResult.query}&quot;</span>
                </div>
                <div>
                  <span className="text-muted">topic:</span>{" "}
                  <span className="text-mint">{activeResult.topic.id}</span>
                </div>
                <div>
                  <span className="text-muted">confidence:</span>{" "}
                  <span className="text-violet">{Math.round(activeResult.confidence * 100)}%</span>
                </div>
                <div>
                  <span className="text-muted">matches:</span>{" "}
                  <span className="text-peach">
                    [{activeResult.matchedTerms.slice(0, 2).join(", ")}]
                  </span>
                </div>
              </div>
            )}

            {/* Code Block with Syntax Styling */}
            <div className="relative p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto bg-[#1E1B18]">
              <button
                type="button"
                onClick={handleCopyCode}
                aria-label="Copy code snippet"
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#2A2724] hover:bg-[#383430] border border-[#3D3A36] text-muted hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-mint" />
                    <span className="text-mint">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <pre className="text-white/90">
                <code>{codeSnippets[activeCodeTab]}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ActionButton({ action }: { action: AIResponseAction }) {
  const isPrimary = action.variant === "primary" || !action.variant;
  const isOutline = action.variant === "outline";

  let buttonClasses =
    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ";

  if (isPrimary) {
    buttonClasses +=
      "bg-violet text-white hover:bg-indigo shadow-md shadow-violet/20";
  } else if (isOutline) {
    buttonClasses +=
      "border border-border bg-surface hover:bg-surface-alt text-foreground";
  } else {
    buttonClasses +=
      "bg-surface-alt border border-border hover:border-violet/40 text-foreground";
  }

  if (action.isExternal) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <span>{action.label}</span>
        <ExternalLink size={13} />
      </a>
    );
  }

  return (
    <a href={action.href} className={buttonClasses}>
      <span>{action.label}</span>
      <ArrowRight size={13} />
    </a>
  );
}

