"use client";

// Timeline verticale animée — ligne de progression liée au scroll,
// nœuds qui s'activent avec halo violet, révélation en cascade.
// Minimaliste : reprend les couleurs de marque, respecte prefers-reduced-motion.

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { METHODOLOGY_STEPS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MethodeTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-16 lg:py-24 border-t border-border-default">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative">
          {/* Rail de fond */}
          <div
            aria-hidden
            className="absolute left-7 sm:left-8 top-8 bottom-8 w-px bg-border-default"
          />
          {/* Ligne de progression remplie au scroll */}
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : progress }}
            className="absolute left-7 sm:left-8 top-8 bottom-8 w-px origin-top bg-gradient-to-b from-accent-violet to-[#A78BFA]"
          />

          <ol className="space-y-14 sm:space-y-20">
            {METHODOLOGY_STEPS.map((step, i) => {
              const reveal = reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 36 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-90px" },
                    transition: { duration: 0.6, ease: EASE },
                  };
              const nodeReveal = reduce
                ? {}
                : {
                    initial: { scale: 0.4, opacity: 0 },
                    whileInView: { scale: 1, opacity: 1 },
                    viewport: { once: true, margin: "-90px" },
                    transition: { duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] },
                  };
              const glowReveal = reduce
                ? {}
                : {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: true, margin: "-90px" },
                    transition: { duration: 0.9, delay: 0.25, ease: "easeOut" },
                  };

              return (
                <motion.li
                  key={step.number}
                  id={`etape-${i + 1}`}
                  {...reveal}
                  className="relative flex gap-6 sm:gap-10 scroll-mt-28"
                >
                  {/* Nœud numéroté */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      {...nodeReveal}
                      className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-accent-violet/40 bg-bg-primary font-serif text-xl sm:text-2xl text-accent-violet shadow-[0_0_0_7px_#0A0A0F]"
                    >
                      {step.number}
                    </motion.div>
                    {/* Halo */}
                    <motion.div
                      {...glowReveal}
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-accent-violet/25 blur-xl"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="group flex-1 pt-1 sm:pt-2.5">
                    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent-violet/70">
                      Étape {step.number}
                    </p>
                    <h2 className="mb-3 font-serif text-2xl font-semibold leading-tight text-text-primary sm:text-3xl">
                      {step.title}
                    </h2>
                    <p className="max-w-xl leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
