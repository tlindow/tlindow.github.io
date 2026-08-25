"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Maximize2,
  Minimize2,
  Sparkles,
} from "lucide-react";
import {
  unifiedDeckCards,
  deckSections,
  type UnifiedDeckCard,
} from "@/data/resumeData";
import { UnifiedDeckCardRenderer } from "./ModuleCards";

// Google Material 3 Tonal Palette for Deck Tabs
const googleTabColorMap: Record<string, { bg: string; text: string; border: string; activeBg: string; activeText: string; activeBorder: string; activeRing: string }> = {
  profile: {
    bg: "bg-[#FFFFFF]",
    text: "text-[#3C4043]",
    border: "border-[#DADCE0]",
    activeBg: "bg-[#E8F0FE]",
    activeText: "text-[#1A73E8]",
    activeBorder: "border-[#D2E3FC]",
    activeRing: "ring-[#1A73E8]",
  },
  thesis: {
    bg: "bg-[#FFFFFF]",
    text: "text-[#3C4043]",
    border: "border-[#DADCE0]",
    activeBg: "bg-[#E6F4EA]",
    activeText: "text-[#137333]",
    activeBorder: "border-[#CEEAD6]",
    activeRing: "ring-[#1E8E3E]",
  },
  venture: {
    bg: "bg-[#FFFFFF]",
    text: "text-[#3C4043]",
    border: "border-[#DADCE0]",
    activeBg: "bg-[#FEF7E0]",
    activeText: "text-[#B06000]",
    activeBorder: "border-[#FEEFC3]",
    activeRing: "ring-[#F9AB00]",
  },
  scale: {
    bg: "bg-[#FFFFFF]",
    text: "text-[#3C4043]",
    border: "border-[#DADCE0]",
    activeBg: "bg-[#E8F0FE]",
    activeText: "text-[#174EA6]",
    activeBorder: "border-[#D2E3FC]",
    activeRing: "ring-[#1A73E8]",
  },
  ecosystem: {
    bg: "bg-[#FFFFFF]",
    text: "text-[#3C4043]",
    border: "border-[#DADCE0]",
    activeBg: "bg-[#FCE8E6]",
    activeText: "text-[#C5221F]",
    activeBorder: "border-[#FAD2CF]",
    activeRing: "ring-[#D93025]",
  },
  foundations: {
    bg: "bg-[#FFFFFF]",
    text: "text-[#3C4043]",
    border: "border-[#DADCE0]",
    activeBg: "bg-[#F3E8FD]",
    activeText: "text-[#681DA8]",
    activeBorder: "border-[#E8D0FB]",
    activeRing: "ring-[#8430CE]",
  },
};

const getCardTabLabel = (card: UnifiedDeckCard) => {
  if (card.type === "profile") return "00 Profile";
  if (card.sectionId && deckSections[card.sectionId]) {
    const sec = deckSections[card.sectionId];
    return `${sec.slideNumber} ${sec.category.split("&")[0].trim()}`;
  }
  return card.id;
};

export default function StackableCardDeck({
  cards = unifiedDeckCards,
  onCardsChange,
}: {
  cards?: UnifiedDeckCard[];
  onCardsChange?: (newCards: UnifiedDeckCard[]) => void;
}) {
  const [deck, setDeck] = useState<UnifiedDeckCard[]>(cards);
  const [isExpanded, setIsExpanded] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<number>(0);

  // Sync with prop changes if provided
  React.useEffect(() => {
    setDeck(cards);
  }, [cards]);

  // Bring a specific card to the front of the stack
  const handleSelectCard = (index: number) => {
    if (index === 0) return;
    const selectedCard = deck[index];
    const newDeck = [
      selectedCard,
      ...deck.slice(0, index),
      ...deck.slice(index + 1),
    ];
    setDeck(newDeck);
    onCardsChange?.(newDeck);
  };

  // Cycle top card to back (Next card)
  const handleNextCard = () => {
    if (deck.length <= 1) return;
    setSwipeDirection(1);
    const [top, ...rest] = deck;
    const newDeck = [...rest, top];
    setDeck(newDeck);
    onCardsChange?.(newDeck);
  };

  // Cycle bottom card to front (Previous card)
  const handlePrevCard = () => {
    if (deck.length <= 1) return;
    setSwipeDirection(-1);
    const last = deck[deck.length - 1];
    const rest = deck.slice(0, deck.length - 1);
    const newDeck = [last, ...rest];
    setDeck(newDeck);
    onCardsChange?.(newDeck);
  };

  // Reset to original order
  const handleReset = () => {
    setDeck(unifiedDeckCards);
    onCardsChange?.(unifiedDeckCards);
  };

  // Drag swipe release handler
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > 100 || info.offset.y < -80) {
      handleNextCard();
    } else if (info.offset.x < -100 || info.offset.y > 80) {
      handlePrevCard();
    }
  };

  return (
    <div className="space-y-6 font-mono">
      {/* Google M3 Deck Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 no-print">
        {/* Google Material 3 Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 max-w-full">
          {deck.map((card, idx) => {
            const isTop = idx === 0;
            const tabStyle = googleTabColorMap[card.type] || googleTabColorMap.profile;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => handleSelectCard(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border shrink-0 ${
                  isTop
                    ? `${tabStyle.activeBg} ${tabStyle.activeText} ${tabStyle.activeBorder} ring-2 ${tabStyle.activeRing}/30 font-bold shadow-xs scale-[1.03]`
                    : `${tabStyle.bg} ${tabStyle.text} ${tabStyle.border} hover:bg-[#F1F3F4] hover:text-[#202124]`
                }`}
                title={`Bring ${getCardTabLabel(card)} to front`}
              >
                {getCardTabLabel(card)}
              </button>
            );
          })}
        </div>

        {/* Action Controls: Prev/Next, Fan Out / Spread, Reset */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#5F6368]">
          {/* Fan Out / Spread View Toggle */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] hover:bg-[#F1F3F4] text-[#202124] border border-[#DADCE0] transition-colors cursor-pointer shadow-2xs font-medium"
            title={isExpanded ? "Collapse into 3D Stack" : "Fan out all cards"}
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            <span>{isExpanded ? "Stack Deck" : "Spread Stack"}</span>
          </button>

          {!isExpanded && (
            <>
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrevCard}
                className="p-1.5 rounded-full bg-[#FFFFFF] hover:bg-[#F1F3F4] text-[#202124] border border-[#DADCE0] transition-colors cursor-pointer"
                title="Previous card"
                aria-label="Previous card"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Deck Counter */}
              <span className="text-xs font-semibold text-[#202124] px-1">
                1 / {deck.length}
              </span>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextCard}
                className="p-1.5 rounded-full bg-[#FFFFFF] hover:bg-[#F1F3F4] text-[#202124] border border-[#DADCE0] transition-colors cursor-pointer"
                title="Next card"
                aria-label="Next card"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {/* Reset Order */}
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-full bg-[#FFFFFF] hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#1A73E8] border border-[#DADCE0] transition-colors cursor-pointer"
            title="Reset stack to initial order"
            aria-label="Reset stack"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Main Stack Container */}
      {!isExpanded ? (
        /* 3D Layered Card Stack */
        <div className="relative min-h-[580px] sm:min-h-[640px] pt-4 pb-12 flex justify-center">
          <AnimatePresence initial={false} mode="popLayout" custom={swipeDirection}>
            {deck.map((card, index) => {
              // Render top 4 cards
              if (index > 3) return null;

              const isTop = index === 0;
              const yOffset = index * 16;
              const scale = 1 - index * 0.035;
              const zIndex = deck.length - index;
              const opacity = 1 - index * 0.12;

              return (
                <motion.div
                  key={card.id}
                  layout
                  custom={swipeDirection}
                  drag={isTop ? true : false}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.65}
                  onDragEnd={handleDragEnd}
                  initial={{
                    scale: 0.92,
                    y: yOffset + 30,
                    opacity: 0,
                  }}
                  animate={{
                    scale,
                    y: yOffset,
                    opacity,
                    zIndex,
                  }}
                  exit={{
                    x: swipeDirection > 0 ? 320 : -320,
                    opacity: 0,
                    scale: 0.88,
                    transition: { duration: 0.28 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 26,
                  }}
                  style={{
                    position: isTop ? "relative" : "absolute",
                    top: 0,
                    width: "100%",
                    maxWidth: "56rem", // max-w-4xl
                    zIndex,
                    cursor: isTop ? "grab" : "pointer",
                  }}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  onClick={() => !isTop && handleSelectCard(index)}
                  className="transition-shadow"
                >
                  <UnifiedDeckCardRenderer card={card} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        /* Spread / Cascade View */
        <div className="space-y-6">
          {deck.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <UnifiedDeckCardRenderer card={card} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Helpful Hint */}
      {!isExpanded && (
        <div className="text-center font-mono text-xs text-[#5F6368] no-print flex items-center justify-center gap-1.5">
          <Sparkles size={13} className="text-[#1A73E8]" />
          <span>Swipe top card or click Google Material tabs above to flip through the deck</span>
        </div>
      )}
    </div>
  );
}
