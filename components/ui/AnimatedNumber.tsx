"use client";

// Source: Custom Framer Motion — number ticker animé au scroll

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}

export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  duration = 2,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Render the final value at SSR / first paint so crawlers (Googlebot, GPTBot,
  // ClaudeBot, PerplexityBot...) read real numbers instead of "0". On hydration
  // we briefly show "0" then animate to the final value when the section enters
  // the viewport.
  const finalFormatted = value.toFixed(decimals).replace(".", ",");
  const [hydrated, setHydrated] = useState(false);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(finalFormatted);

  useEffect(() => {
    setHydrated(true);
    setDisplayValue("0");
  }, []);

  useEffect(() => {
    if (hydrated && isInView) {
      motionValue.set(value);
    }
  }, [hydrated, isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest.toFixed(decimals).replace(".", ","));
    });
  }, [springValue, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
