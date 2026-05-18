import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ressources GEO — Guides et stratégies | Zenifai",
  description:
    "Guides stratégiques, analyses et ressources sur le GEO (Generative Engine Optimization) — pour apparaître dans ChatGPT, Perplexity et Gemini.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://zenifai.ai/ressources",
    title: "Ressources GEO — Guides et stratégies | Zenifai",
    description:
      "Guides stratégiques et analyses sur le GEO pour être recommandé par les IA génératives.",
    siteName: "Zenifai",
  },
};

const ARTICLES = [
  {
    href: "/ressources/cas-client-cabinet-avocats",
    badge: "Cas client · Anonymisé",
    title: "8 % → 64 % de visibilité IA en 90 jours",
    excerpt:
      "Comment un cabinet d'avocats français en contentieux commercial a multiplié par 8 sa part de voix dans ChatGPT, Perplexity, Gemini et Claude. Méthode, livrables, métriques.",
    readTime: "9 min",
    date: "Avril 2026",
  },
  {
    href: "/ressources/geo-avocats",
    badge: "Expertise sectorielle",
    title: "GEO pour Cabinets d'Avocats",
    excerpt:
      "Comment les cabinets d'avocats d'affaires et fiscalistes gagnent des clients via ChatGPT et Perplexity. Guide stratégique complet.",
    readTime: "12 min",
    date: "Avril 2026",
  },
  {
    href: "/ressources/geo-saas",
    badge: "Guide · SaaS B2B",
    title: "GEO pour SaaS B2B : le guide complet 2026",
    excerpt:
      "Vos acheteurs demandent à ChatGPT quel outil choisir. Comment faire en sorte que votre SaaS soit le nom qui revient — méthode, leviers, erreurs à éviter.",
    readTime: "10 min",
    date: "Mai 2026",
  },
  {
    href: "/ressources/definition-geo",
    badge: "Lexique · Fondamentaux",
    title: "Qu'est-ce que le GEO ?",
    excerpt:
      "Définition claire du GEO, différences avec le SEO, et lexique complet des termes clés de la visibilité dans les IA génératives.",
    readTime: "7 min",
    date: "Mai 2026",
  },
  {
    href: "/ressources/visibilite-perplexity",
    badge: "Guide · Plateforme",
    title: "Comment apparaître sur Perplexity",
    excerpt:
      "Perplexity cite ses sources explicitement. La méthode en 5 étapes pour y faire citer votre marque.",
    readTime: "8 min",
    date: "Mai 2026",
  },
  {
    href: "/ressources/meilleures-agences-geo-france",
    badge: "Guide d'achat",
    title: "Meilleures agences GEO en France : comment choisir",
    excerpt:
      "Grille de critères objective et questions à poser pour choisir l'agence GEO adaptée à votre besoin.",
    readTime: "9 min",
    date: "Mai 2026",
  },
];

export default function RessourcesPage() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen">
      <Nav />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-4">
            <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
              Ressources
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight">
              Guides &amp;{" "}
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
                analyses GEO
              </span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              Stratégies, méthodes et retours terrain pour construire une présence durable dans les IA génératives.
            </p>
          </div>

          {/* Articles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLES.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="group block rounded-2xl border border-border-default bg-bg-secondary p-6 hover:border-accent-violet/40 hover:shadow-violet-sm transition-all duration-300"
              >
                <div className="space-y-3">
                  <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
                    {article.badge}
                  </p>
                  <h2 className="font-serif text-xl font-semibold text-text-primary leading-snug group-hover:text-accent-violet/90 transition-colors duration-200">
                    {article.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-xs text-text-secondary/50">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                </div>
              </a>
            ))}

            {/* Placeholder cards */}
            {["Comment mesurer la visibilité IA de votre marque"].map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-border-default bg-bg-secondary/20 p-6 opacity-40 cursor-not-allowed"
                aria-disabled="true"
              >
                <p className="text-xs font-medium tracking-widest uppercase text-accent-violet/60 mb-3">
                  Bientôt
                </p>
                <p className="text-text-secondary text-sm font-medium leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
