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
    href: "/ressources/geo-avocats",
    badge: "Expertise sectorielle",
    title: "GEO pour Cabinets d'Avocats",
    excerpt:
      "Comment les cabinets d'avocats d'affaires et fiscalistes gagnent des clients via ChatGPT et Perplexity. Guide stratégique complet.",
    readTime: "12 min",
    date: "2026",
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
            {[
              "GEO pour SaaS B2B : le guide complet 2026",
              "Comment mesurer la visibilité IA de votre marque",
            ].map((title) => (
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
