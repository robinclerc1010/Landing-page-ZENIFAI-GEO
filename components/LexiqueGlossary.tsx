"use client";

// Glossaire GEO animé — navigation par catégorie + révélation en cascade
// des cartes au scroll. Minimaliste, respecte prefers-reduced-motion.

import { motion, useReducedMotion } from "framer-motion";
import { LEXIQUE } from "@/lib/lexique";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LexiqueGlossary() {
  const reduce = useReducedMotion();

  return (
    <div className="not-prose">
      {/* Navigation par catégorie */}
      <nav
        aria-label="Catégories du lexique"
        className="flex flex-wrap gap-2 mb-14"
      >
        {LEXIQUE.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="px-3.5 py-1.5 rounded-full border border-border-default text-sm text-text-secondary hover:border-accent-violet/40 hover:text-text-primary transition-colors duration-200"
          >
            {c.title}
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        {LEXIQUE.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-text-primary">
                {category.title}
              </h2>
              <span className="text-sm text-text-secondary/50">
                {category.terms.length} termes
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {category.terms.map((t, i) => {
                const reveal = reduce
                  ? {}
                  : {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, margin: "-40px" },
                      transition: {
                        duration: 0.45,
                        delay: Math.min(i, 6) * 0.05,
                        ease: EASE,
                      },
                    };
                return (
                  <motion.div
                    key={t.term}
                    {...reveal}
                    className="group p-5 rounded-2xl border border-border-default bg-bg-secondary/30 hover:border-accent-violet/40 transition-colors duration-300"
                  >
                    <h3 className="font-serif text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-violet transition-colors duration-200">
                      {t.term}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {t.definition}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
