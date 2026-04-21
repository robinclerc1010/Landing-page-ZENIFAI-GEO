"use client";

// Source: Custom Framer Motion AnimatePresence — rotation de texte pour le hero
// Layout stable : un ghost span invisible réserve la largeur du mot le plus long,
// le mot animé est positionné en absolute pour ne jamais provoquer de reflow.

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TextRotateProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function TextRotate({
  texts,
  interval = 2500,
  className = "",
}: TextRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  // Longest text reserves container width — no reflow when word changes
  const longestText = texts.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className="relative inline-block align-bottom" style={{ verticalAlign: "baseline" }}>
      {/* Ghost: always visible but invisible — pins the container to max width */}
      <span aria-hidden className={`invisible inline-block whitespace-nowrap ${className}`}>
        {longestText}
      </span>

      {/* Animated word: absolutely positioned over the ghost */}
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`absolute inset-0 flex items-center justify-start whitespace-nowrap ${className}`}
          style={{ textShadow: "0 0 20px rgba(124,92,255,0.45)" }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
