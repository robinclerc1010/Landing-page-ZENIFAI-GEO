// Icône / logo de ressource, partagé entre le hub /ressources et les heros
// d'articles. Logos de marque (usage référentiel) pour les guides plateformes,
// icônes Lucide pour les autres. Composant sans état — rendu serveur ou client.

import type { ReactNode } from "react";
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
} from "lucide-react";
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

// Logos de marque officiels, rendus dans leur couleur de marque — usage
// référentiel : identifier la plateforme traitée par chaque guide.
// Tracés : Bootstrap Icons (MIT) pour OpenAI, simple-icons pour Google,
// Gemini et Perplexity ; logo Microsoft reconstruit (4 carrés).
const BRAND_LOGOS: Record<string, ReactNode> = {
  chatgpt: (
    <svg width="22" height="22" viewBox="0 0 16 16" fill="#FFFFFF" aria-hidden="true">
      <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z" />
    </svg>
  ),
  aio: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#4285F4" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  ),
  perplexity: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#20B8CD" aria-hidden="true">
      <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
    </svg>
  ),
  gemini: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#8E75B2" aria-hidden="true">
      <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81Z" />
    </svg>
  ),
  copilot: (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1.5" y="1.5" width="9.5" height="9.5" fill="#F25022" />
      <rect x="13" y="1.5" width="9.5" height="9.5" fill="#7FBA00" />
      <rect x="1.5" y="13" width="9.5" height="9.5" fill="#00A4EF" />
      <rect x="13" y="13" width="9.5" height="9.5" fill="#FFB900" />
    </svg>
  ),
};

// icône → couleur d'accent (dérivée de la thématique de la ressource)
const ICON_ACCENT: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const theme of RESOURCE_THEMES) {
    for (const article of theme.articles) map[article.icon] = theme.accent;
  }
  return map;
})();

export default function ResourceIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const accent = ICON_ACCENT[icon] ?? "#7C5CFF";
  const brand = BRAND_LOGOS[icon];
  const Icon = ICON_MAP[icon] ?? BookOpen;

  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${className}`}
      style={{
        background: `color-mix(in srgb, ${accent} 14%, transparent)`,
        color: accent,
      }}
    >
      {brand ?? <Icon size={22} strokeWidth={1.75} />}
    </div>
  );
}
