import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import LexiqueGlossary from "@/components/LexiqueGlossary";
import { LEXIQUE, LEXIQUE_COUNT } from "@/lib/lexique";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/lexique-geo";

export const metadata: Metadata = {
  title: "Lexique GEO : tous les termes de la visibilité IA | Zenifai",
  description:
    "Le lexique complet du GEO : GEO, LLM, crawlers IA, llms.txt, entité, part de voix IA… Toutes les définitions de la recherche générative en un glossaire clair.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Lexique GEO — Zenifai", type: "article" },
};

const faq = [
  {
    question: "Qu’est-ce que le GEO ?",
    answer:
      "Le GEO (Generative Engine Optimization) désigne l’ensemble des techniques visant à faire citer et recommander une marque dans les réponses des IA génératives — ChatGPT, Google AI Overviews, Perplexity, Gemini, Copilot.",
  },
  {
    question: "Quelle différence entre GEO, AEO et LLMO ?",
    answer:
      "Ces acronymes recouvrent une idée très proche : optimiser pour les moteurs de réponse génératifs. GEO (Generative Engine Optimization) est le terme le plus répandu ; AEO (Answer Engine Optimization) et LLMO (LLM Optimization) sont des variantes souvent employées comme synonymes.",
  },
  {
    question: "Ce lexique est-il mis à jour ?",
    answer:
      "Oui. Le vocabulaire du GEO évolue avec les plateformes et les usages : ce glossaire est revu régulièrement pour intégrer les nouveaux termes et préciser les définitions existantes.",
  },
];

const definedTermSetJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Lexique GEO — Generative Engine Optimization",
  description:
    "Glossaire complet des termes du GEO et de la visibilité dans les IA génératives.",
  url: URL,
  hasDefinedTerm: LEXIQUE.flatMap((c) =>
    c.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: URL,
    })),
  ),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lexique GEO : tous les termes de la visibilité IA",
  description:
    "Glossaire complet du Generative Engine Optimization et de la recherche générative.",
  url: URL,
  datePublished: "2025-03-15",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: { "@type": "Thing", name: "Generative Engine Optimization" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }}
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
              { name: "Ressources", url: "https://zenifai.ai/ressources" },
              { name: "Lexique GEO", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        icon="book"
        eyebrow="Lexique · Référence"
        title="Lexique"
        titleAccent="GEO"
        intro="Toutes les définitions de la visibilité dans les IA génératives, en un glossaire clair et structuré. Du GEO aux crawlers IA, de l’entité à la part de voix — le vocabulaire de la recherche générative."
        date="Publié en mars 2025"
        readTime={`${LEXIQUE_COUNT} termes · 5 catégories`}
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <LexiqueGlossary />
      </ArticleLayout>
    </>
  );
}
