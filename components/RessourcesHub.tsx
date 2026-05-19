"use client";

// Hub Ressources — articles regroupés par thématique, cartes à icônes
// colorées et révélation animée en cascade. Respecte prefers-reduced-motion.

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { RESOURCE_THEMES } from "@/lib/ressources";
import ResourceIcon from "@/components/ResourceIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function RessourcesHub() {
  const reduce = useReducedMotion();

  return (
    <div className="space-y-20">
      {RESOURCE_THEMES.map((theme) => (
        <section key={theme.id} id={theme.id} className="scroll-mt-28">
          {/* En-tête de thématique */}
          <div className="mb-8 flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full flex-shrink-0"
              style={{ background: theme.accent }}
            />
            <p
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: theme.accent }}
            >
              {theme.eyebrow}
            </p>
            <span className="text-text-secondary/30">—</span>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-text-primary">
              {theme.title}
            </h2>
          </div>

          {/* Grille de cartes */}
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {theme.articles.map((article, i) => {
              const reveal = reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-50px" },
                    transition: {
                      duration: 0.5,
                      delay: Math.min(i, 5) * 0.06,
                      ease: EASE,
                    },
                  };
              return (
                <motion.li key={article.href} {...reveal}>
                  <a
                    href={article.href}
                    style={{ ["--accent" as string]: theme.accent }}
                    className="group relative flex h-full flex-col rounded-2xl border border-border-default bg-bg-secondary/30 p-6 transition-all duration-300 hover:bg-bg-secondary/60 hover:border-[color:var(--accent)] hover:-translate-y-0.5"
                  >
                    <ResourceIcon icon={article.icon} className="mb-5" />

                    <ArrowUpRight
                      size={18}
                      className="absolute top-6 right-6 text-text-secondary/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                    <h3 className="font-serif text-lg font-semibold text-text-primary leading-snug mb-2 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {article.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-2.5 text-xs text-text-secondary/50">
                      <span>{article.date}</span>
                      <span className="h-1 w-1 rounded-full bg-text-secondary/30" />
                      <span>{article.readTime}</span>
                    </div>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
