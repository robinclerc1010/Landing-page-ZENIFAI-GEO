"use client";

// Hub Ressources — articles regroupés par thématique, cartes à icônes
// colorées et révélation animée en cascade. Respecte prefers-reduced-motion.

import type { LucideIcon } from "lucide-react";
import {
  MessageCircle,
  Sparkles,
  Compass,
  Gem,
  Wand2,
  HelpCircle,
  GitCompare,
  BookOpen,
  Network,
  Cloud,
  Scale,
  ShoppingBag,
  Award,
  Trophy,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { RESOURCE_THEMES } from "@/lib/ressources";

const ICON_MAP: Record<string, LucideIcon> = {
  chatgpt: MessageCircle,
  aio: Sparkles,
  perplexity: Compass,
  gemini: Gem,
  copilot: Wand2,
  help: HelpCircle,
  compare: GitCompare,
  book: BookOpen,
  network: Network,
  cloud: Cloud,
  scale: Scale,
  shopping: ShoppingBag,
  award: Award,
  trophy: Trophy,
  chart: BarChart3,
};

// Logos de marque officiels (données SVG issues de la librairie open-source
// simple-icons) — usage référentiel : identifier la plateforme de chaque guide.
const BRAND_LOGOS: Record<string, string> = {
  aio: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
  gemini:
    "M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81",
  perplexity:
    "M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z",
};

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
              const Icon = ICON_MAP[article.icon] ?? BookOpen;
              const brandPath = BRAND_LOGOS[article.icon];
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
                    {/* Icône / logo de plateforme */}
                    <div
                      className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: `color-mix(in srgb, ${theme.accent} 14%, transparent)`,
                        color: theme.accent,
                      }}
                    >
                      {brandPath ? (
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d={brandPath} />
                        </svg>
                      ) : (
                        <Icon size={22} strokeWidth={1.75} />
                      )}
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="absolute top-6 right-6 text-text-secondary/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: undefined }}
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
