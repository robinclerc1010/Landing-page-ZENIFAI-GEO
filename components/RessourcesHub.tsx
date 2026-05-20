"use client";

// Hub Ressources — par thématique. Pattern éditorial :
//  - le 1er article devient une carte "feature" (large, kicker "À LA UNE",
//    trait haut 2 px en couleur de thème, intro plus longue) ;
//  - les autres restent en grille compacte.
// Animations en cascade au scroll, respecte prefers-reduced-motion.

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { RESOURCE_THEMES, type ResourceArticle } from "@/lib/ressources";
import ResourceIcon from "@/components/ResourceIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

function FeatureCard({
  article,
  accent,
  eyebrow,
}: {
  article: ResourceArticle;
  accent: string;
  eyebrow: string;
}) {
  return (
    <a
      href={article.href}
      style={{ ["--accent" as string]: accent }}
      className="group relative block rounded-2xl bg-bg-secondary/45 border-t-2 border-x border-b border-x-border-default border-b-border-default border-t-[color:var(--accent)] p-7 sm:p-9 lg:p-10 transition-colors duration-300 hover:bg-bg-secondary/65"
    >
      <ArrowUpRight
        size={20}
        className="absolute top-6 right-6 text-text-secondary/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        <div className="flex-shrink-0">
          <ResourceIcon icon={article.icon} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-px w-8"
              style={{ background: `color-mix(in srgb, ${accent} 55%, transparent)` }}
            />
            <p
              className="font-mono text-[0.65rem] tracking-[0.22em] uppercase"
              style={{ color: accent }}
            >
              À la une · {eyebrow}
            </p>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-semibold text-text-primary leading-[1.15] tracking-tight mb-3">
            {article.title}
          </h3>

          <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
            <span className="text-text-secondary/60">{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-text-secondary/40" />
            <span className="text-text-secondary/60">{article.readTime}</span>
            <span
              className="ml-auto inline-flex items-center gap-1.5 font-medium"
              style={{ color: accent }}
            >
              Lire le guide
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

function StandardCard({
  article,
  accent,
}: {
  article: ResourceArticle;
  accent: string;
}) {
  return (
    <a
      href={article.href}
      style={{ ["--accent" as string]: accent }}
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
  );
}

export default function RessourcesHub() {
  const reduce = useReducedMotion();

  return (
    <div className="space-y-20">
      {RESOURCE_THEMES.map((theme) => {
        const [feature, ...rest] = theme.articles;
        // Grille adaptée au nombre de cartes restantes pour éviter les rangées
        // dépareillées (3 cartes = 1×3, 2 ou 4 = 2 colonnes propres).
        const colsClass = rest.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

        return (
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

            {/* Carte "à la une" */}
            {feature && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="mb-4"
              >
                <FeatureCard
                  article={feature}
                  accent={theme.accent}
                  eyebrow={theme.eyebrow}
                />
              </motion.div>
            )}

            {/* Grille standard */}
            {rest.length > 0 && (
              <ul className={`grid sm:grid-cols-2 ${colsClass} gap-4`} role="list">
                {rest.map((article, i) => {
                  const reveal = reduce
                    ? {}
                    : {
                        initial: { opacity: 0, y: 22 },
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
                      <StandardCard article={article} accent={theme.accent} />
                    </motion.li>
                  );
                })}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}
