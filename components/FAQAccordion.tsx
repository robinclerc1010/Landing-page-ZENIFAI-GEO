"use client";

// Accordéon FAQ animé et réutilisable.
// - Révélation en cascade au scroll
// - Ouverture/fermeture fluide (hauteur animée)
// - SEO/GEO-safe : la réponse reste TOUJOURS dans le DOM (height:0 + overflow
//   hidden quand fermée) → les crawlers IA lisent le texte.
// - Respecte prefers-reduced-motion.

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

type FAQItem = { question: string; answer: string };

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const reveal = reduce
          ? {}
          : {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              // Seuil très permissif : on déclenche dès qu'un pixel touche le
              // viewport, sans marge négative — évite que les questions restent
              // invisibles dans certains parcours de scroll (Playwright, etc.).
              viewport: { once: true, amount: 0 },
              transition: { duration: 0.4, delay: i * 0.05, ease: EASE },
            };

        return (
          <motion.div
            key={i}
            {...reveal}
            className={`border-b transition-colors duration-200 ${
              isOpen ? "border-accent-violet/30" : "border-border-default"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
            >
              <span
                className={`font-medium transition-colors duration-200 ${
                  isOpen
                    ? "text-text-primary"
                    : "text-text-secondary group-hover:text-text-primary"
                }`}
              >
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: reduce ? 0 : 0.2 }}
                className={`flex-shrink-0 p-1 rounded-full border transition-colors duration-200 ${
                  isOpen
                    ? "border-accent-violet/40 bg-accent-violet/10 text-accent-violet"
                    : "border-border-default text-text-secondary/60 group-hover:border-accent-violet/30"
                }`}
              >
                <Plus size={14} />
              </motion.span>
            </button>

            {/* Réponse — toujours montée dans le DOM (SEO/GEO), juste masquée */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                duration: reduce ? 0 : 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-text-secondary leading-relaxed text-sm">
                {item.answer}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
