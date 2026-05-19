import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RessourcesHub from "@/components/RessourcesHub";
import { RESOURCE_THEMES, RESOURCE_ARTICLES } from "@/lib/ressources";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Ressources GEO — Guides, lexique et données | Zenifai",
  description:
    "Guides plateformes (ChatGPT, Perplexity, Gemini…), fondamentaux du GEO, guides sectoriels et données : toutes les ressources pour être visible dans les IA génératives.",
  alternates: { canonical: "https://zenifai.ai/ressources" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://zenifai.ai/ressources",
    title: "Ressources GEO — Guides, lexique et données | Zenifai",
    description:
      "Guides stratégiques et analyses sur le GEO pour être recommandé par les IA génératives.",
    siteName: "Zenifai",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ressources GEO de Zenifai",
  itemListElement: RESOURCE_ARTICLES.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: a.title,
    url: `https://zenifai.ai${a.href}`,
  })),
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Accueil", url: "https://zenifai.ai" },
  { name: "Ressources", url: "https://zenifai.ai/ressources" },
]);

export default function RessourcesPage() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Nav />

      <div className="pt-32 pb-24 lg:pt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-4">
            <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
              Ressources
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight">
              Guides &amp;{" "}
              <span className="gradient-text">analyses GEO</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              Stratégies, méthodes et retours terrain pour construire une présence
              durable dans les IA génératives — classés par thématique.
            </p>

            {/* Ancres thématiques */}
            <nav
              aria-label="Thématiques"
              className="flex flex-wrap gap-2 pt-2"
            >
              {RESOURCE_THEMES.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="px-3.5 py-1.5 rounded-full border border-border-default text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  style={{ ["--accent" as string]: t.accent }}
                >
                  {t.eyebrow}
                </a>
              ))}
            </nav>
          </div>

          <RessourcesHub />
        </div>
      </div>

      <Footer />
    </main>
  );
}
