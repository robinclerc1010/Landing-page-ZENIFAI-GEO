import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MethodeTimeline from "@/components/MethodeTimeline";
import PageHeroReveal from "@/components/PageHeroReveal";
import FAQAccordion from "@/components/FAQAccordion";
import { CALENDLY_URL, METHODOLOGY_STEPS } from "@/lib/constants";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/methode";

export const metadata: Metadata = {
  title: "Notre méthode GEO en 6 étapes — De l’audit au IA Visibility Score™ | Zenifai",
  description:
    "Méthodologie Zenifai en 6 étapes : analyse d’entités, diagnostic technique, optimisation sémantique, contenu GEO-ready, autorité tierce, IA Visibility Score™. Cycle 90 jours.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Méthode GEO Zenifai", type: "website" },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Méthode GEO Zenifai en 6 étapes",
  description:
    "La méthodologie complète pour positionner durablement une marque dans les réponses des IA génératives.",
  totalTime: "P90D",
  step: METHODOLOGY_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.description,
    url: `${URL}#etape-${i + 1}`,
  })),
};

const faq = [
  {
    question: "Combien de temps dure un cycle complet de la méthode ?",
    answer:
      "Le cycle standard est de 90 jours, de l’audit initial à la première mesure d’impact. Au-delà, l’accompagnement est généralement renouvelé en trimestres pour entretenir et amplifier les acquis.",
  },
  {
    question: "Pouvez-vous activer toutes les étapes en parallèle ?",
    answer:
      "Les 2 premières étapes (analyse + diagnostic) sont prérequises. À partir de l’étape 3, les optimisations sémantiques, la production de contenu et l’autorité tierce avancent en parallèle pour maximiser la vitesse d’impact.",
  },
  {
    question: "Qu’est-ce que l’IA Visibility Score™ ?",
    answer:
      "C’est notre métrique propriétaire de visibilité IA : un score sur 100 calculé à partir de la fréquence de citation de votre marque sur 50 à 200 prompts stratégiques, mesurés mensuellement sur ChatGPT, Perplexity, Gemini et Claude.",
  },
  {
    question: "Que se passe-t-il après les 90 jours ?",
    answer:
      "Vous repartez soit en autonomie avec les processus installés, soit en renouvellement avec un focus production de contenu et amplification d’autorité. Nous proposons des formats trimestriels et annuels selon l’ambition.",
  },
];

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://zenifai.ai" },
              { name: "Méthode", url: URL },
            ]),
          ),
        }}
      />

      <Nav />

      <PageHeroReveal
        eyebrow="Méthode"
        title="Notre méthode GEO en"
        titleAccent="6 étapes"
        intro="Une méthodologie éprouvée sur un cycle de 90 jours, de l’analyse d’entités à l’IA Visibility Score™. Pensée pour les IA génératives — pas adaptée du SEO."
      />

      <MethodeTimeline />

      <section className="py-16 lg:py-20 border-t border-border-default bg-bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-10">
            Questions fréquentes sur la méthode
          </h2>
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Découvrir le détail des{" "}
            <span className="gradient-text">services associés</span>
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Chaque étape correspond à un ou plusieurs de nos 4 services. Mobilisables
            séparément ou en combiné.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent-violet text-white font-medium hover:opacity-90 transition-opacity"
            >
              Voir les services →
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border-default text-text-primary font-medium hover:border-accent-violet/40 transition-colors"
            >
              Réserver un cadrage
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
