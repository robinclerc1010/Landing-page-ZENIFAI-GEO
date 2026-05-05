import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CALENDLY_URL } from "@/lib/constants";

const URL = "https://zenifai.ai/services";

export const metadata: Metadata = {
  title: "Services GEO — Audit, Stratégie, Contenu LLM-ready, Autorité | Zenifai",
  description:
    "4 services GEO complémentaires pour positionner votre marque dans les réponses des IA génératives. Audit, stratégie 90 jours, contenu LLM-ready, autorité de marque.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Services GEO — Zenifai", type: "website" },
};

const services = [
  {
    n: "01",
    slug: "audit-visibilite-ia",
    title: "Audit de visibilité IA",
    pitch:
      "Mesure chiffrée de votre présence dans ChatGPT, Perplexity, Gemini et Claude. Baseline + roadmap actionnable.",
    duration: "7 à 10 jours",
  },
  {
    n: "02",
    slug: "strategie-geo",
    title: "Stratégie & Consulting GEO",
    pitch:
      "Roadmap 90 jours sur-mesure : entités de marque, requêtes prioritaires, plan de contenu, KPIs.",
    duration: "90 jours (renouvelable)",
  },
  {
    n: "03",
    slug: "contenu-llm",
    title: "Optimisation de contenu LLM-ready",
    pitch:
      "Production et restructuration de contenus citables par les IA : Q→R, schema.org, autorité topique.",
    duration: "Forfait mensuel",
  },
  {
    n: "04",
    slug: "autorite-marque",
    title: "Autorité & Mentions de marque",
    pitch:
      "Signaux d’entité tiers : Wikipedia, presse, Reddit, podcasts, annuaires — les sources que les LLMs lisent.",
    duration: "3 à 6 mois",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://zenifai.ai/services/${s.slug}`,
    name: s.title,
  })),
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Nav />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet mb-4">
            Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
            Quatre leviers pour devenir une{" "}
            <span className="gradient-text">référence citée par les IA</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            Du diagnostic à la production, de la stratégie à l’autorité tierce — nos services
            couvrent l’intégralité du cycle GEO. Mobilisables séparément ou en combiné selon
            votre maturité.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-t border-border-default">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group p-8 rounded-2xl border border-border-default bg-bg-secondary/30 hover:border-accent-violet/40 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif text-3xl text-accent-violet">{s.n}</span>
                  <span className="text-xs text-text-secondary/60">{s.duration}</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-text-primary mb-3 group-hover:text-accent-violet transition-colors">
                  {s.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.pitch}</p>
                <span className="text-sm text-accent-violet">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Pas sûr du service adapté ?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            30 minutes de cadrage gratuit pour identifier le bon point d’entrée selon votre
            maturité GEO.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-violet text-white font-medium hover:opacity-90 transition-opacity"
          >
            Réserver 30 min →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
