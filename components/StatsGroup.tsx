"use client";

// Grille de statistiques animées — compteur au scroll + révélation en cascade.
// Le nombre final est rendu en SSR (AnimatedNumber) → lisible par les crawlers.

import { motion, useReducedMotion } from "framer-motion";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  source: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function StatsGroup({ stats }: { stats: Stat[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="grid sm:grid-cols-2 gap-4 not-prose">
      {stats.map((s, i) => {
        const reveal = reduce
          ? {}
          : {
              initial: { opacity: 0, y: 22 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.5, delay: i * 0.07, ease: EASE },
            };
        return (
          <motion.div
            key={i}
            {...reveal}
            className="group p-6 rounded-2xl border border-border-default bg-bg-secondary/30 hover:border-accent-violet/40 transition-colors duration-300"
          >
            <p className="font-serif text-4xl sm:text-5xl font-semibold leading-none">
              <span className="gradient-text">
                <AnimatedNumber
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </span>
            </p>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              {s.label}
            </p>
            <p className="mt-3 text-xs text-text-secondary/45">Source : {s.source}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
