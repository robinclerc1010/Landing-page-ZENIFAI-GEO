"use client";

// Source: Custom Framer Motion — number tickers animés au scroll, inspiré Magic UI NumberTicker

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <SectionWrapper className="border-y border-border-default bg-bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col gap-2 ${
                i < STATS.length - 1
                  ? "lg:border-r lg:border-border-default lg:pr-8"
                  : ""
              }`}
            >
              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
                className="font-serif text-4xl lg:text-5xl font-semibold gradient-text"
                duration={2}
              />
              <p className="text-text-secondary text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-500 text-center italic mt-8">
          Sources : Semrush, McKinsey Digital 2025-2026
        </p>
      </div>
    </SectionWrapper>
  );
}
