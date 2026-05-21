import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import StatsGroup, { type Stat } from "@/components/StatsGroup";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/geo-vs-seo";

export const metadata: Metadata = {
  title: "GEO vs SEO : quelles différences en 2026 ? | Zenifai",
  description:
    "GEO vs SEO : objectifs, formats, mesure, leviers d’autorité. Le tableau comparatif complet et les chiffres de la bascule vers la recherche par IA.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "GEO vs SEO — Zenifai", type: "article" },
};

const shift: Stat[] = [
  {
    value: 900,
    suffix: " M",
    label:
      "utilisateurs actifs hebdomadaires de ChatGPT — une audience qui rivalise avec les grands moteurs de recherche.",
    source: "OpenAI, 2026",
  },
  {
    value: 206,
    prefix: "+",
    suffix: " %",
    label:
      "de croissance en un an du trafic de référence sortant de ChatGPT vers le web.",
    source: "Semrush, étude clickstream 2026",
  },
  {
    value: 1.5,
    decimals: 1,
    suffix: " Md",
    label:
      "d’utilisateurs touchés chaque mois par les AI Overviews de Google, en tête des résultats de recherche.",
    source: "Google, 2026",
  },
  {
    value: 88,
    suffix: " %",
    label:
      "des organisations utilisent déjà l’IA dans au moins une fonction — la recherche par IA se généralise côté professionnel.",
    source: "McKinsey, The State of AI 2025",
  },
];

const faq = [
  {
    question: "Le GEO remplace-t-il le SEO ?",
    answer:
      "Non. Le SEO et le GEO sont complémentaires. Le SEO optimise le classement dans les listes de résultats ; le GEO optimise la citation dans les réponses générées par les IA. Une part croissante de l’attention se déplace vers les moteurs de réponse, mais la recherche classique reste massivement utilisée. Les marques performantes travaillent les deux.",
  },
  {
    question: "Faut-il arrêter d’investir dans le SEO ?",
    answer:
      "Surtout pas. Les AI Overviews de Google comme la recherche de ChatGPT s’appuient en partie sur l’index web : un bon SEO reste un prérequis pour être trouvé. Le GEO s’ajoute au SEO, il ne s’y substitue pas.",
  },
  {
    question: "Quelle est la différence concrète entre SEO et GEO ?",
    answer:
      "Le SEO vise une position et un clic dans une page de résultats. Le GEO vise une citation et une recommandation dans une réponse rédigée. Les formats gagnants diffèrent : le SEO récompense la page optimisée pour un mot-clé, le GEO récompense le passage auto-suffisant, structuré en question-réponse et facilement extractible.",
  },
  {
    question: "Le SEO aide-t-il le GEO ?",
    answer:
      "Oui. Un contenu bien référencé est plus susceptible d’être repris par les moteurs de réponse qui s’appuient sur une recherche web — ChatGPT Search, Perplexity, AI Overviews. Mais il faut le structurer pour la citation : un bon classement SEO ne garantit pas la reprise par une IA.",
  },
  {
    question: "Peut-on faire du GEO sans faire de SEO ?",
    answer:
      "Partiellement seulement. Une partie du GEO repose sur la connaissance d’entraînement des modèles, indépendante de l’index de recherche. Mais ignorer le SEO prive des leviers de recherche en direct (AI Overviews, ChatGPT Search). En pratique, GEO et SEO se construisent ensemble.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GEO vs SEO : quelles différences en 2026 ?",
  description:
    "Comparaison complète du GEO et du SEO : objectifs, formats, mesure, leviers d’autorité.",
  url: URL,
  datePublished: "2025-02-15",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: [
    { "@type": "Thing", name: "Generative Engine Optimization" },
    { "@type": "Thing", name: "Search Engine Optimization" },
  ],
};

const rows: [string, string, string][] = [
  ["Objectif", "Être bien classé dans une liste de résultats", "Être cité dans une réponse générée"],
  [
    "Surface",
    "Pages de résultats Google, Bing",
    "ChatGPT, Google AI Overviews, Perplexity, Gemini, Copilot",
  ],
  [
    "Unité de résultat",
    "Une position, un clic",
    "Une citation, une recommandation",
  ],
  [
    "Format gagnant",
    "Page optimisée pour un mot-clé cible",
    "Passage auto-suffisant, format question-réponse, sourcé",
  ],
  [
    "Levier d’autorité",
    "Backlinks (liens entrants)",
    "Mentions d’entité cohérentes sur des sources tierces",
  ],
  [
    "Indicateur de succès",
    "Rang moyen, trafic organique",
    "Part de voix IA, fréquence de citation",
  ],
  [
    "Rôle du contenu",
    "Attirer le clic vers le site",
    "Être repris et résumé là où se trouve l’utilisateur",
  ],
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
              { name: "GEO vs SEO", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        icon="compare"
        eyebrow="Comparatif · Fondamentaux"
        title="GEO vs SEO :"
        titleAccent="quelles différences ?"
        intro="Le SEO optimise votre classement dans une liste de liens. Le GEO optimise votre citation dans une réponse d’IA. Voici le comparatif complet — et les chiffres qui montrent pourquoi les deux comptent désormais."
        date="Publié en février 2025"
        readTime="~8 min de lecture"
        cta={{
          heading: "Mesurez votre écart",
          accent: "SEO ↔ GEO",
          sub: "Notre audit révèle le décalage entre votre performance SEO et votre présence réelle dans les IA.",
          label: "Réserver un audit",
        }}
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          GEO et SEO sont souvent opposés. C’est une erreur de cadrage : ce ne sont pas deux
          stratégies concurrentes, mais deux disciplines complémentaires qui répondent à deux
          façons de chercher de l’information. Comprendre leurs différences — et leurs points
          communs — est la base d’une stratégie de visibilité solide en 2026.
        </P>

        <H2>SEO et GEO : les définitions</H2>
        <P>
          Le <strong className="text-text-primary">SEO</strong> (Search Engine Optimization)
          optimise un site pour qu’il se classe le mieux possible dans les pages de résultats
          des moteurs de recherche. L’objectif : la position et le clic.
        </P>
        <P>
          Le <strong className="text-text-primary">GEO</strong> (Generative Engine
          Optimization) optimise une marque pour qu’elle soit citée et recommandée dans les
          réponses des IA génératives. L’objectif : la citation et la recommandation. Pour
          une définition détaillée, voir notre page{" "}
          <a href="/ressources/definition-geo" className="text-accent-violet hover:underline">
            « Qu’est-ce que le GEO ? »
          </a>
          .
        </P>

        <H2>GEO vs SEO : le tableau comparatif</H2>
        <div className="overflow-x-auto rounded-2xl border border-border-default">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-default bg-bg-secondary/40 text-left">
                <th className="p-4 font-medium">Critère</th>
                <th className="p-4 font-medium">SEO</th>
                <th className="p-4 font-medium text-accent-violet">GEO</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {rows.map(([c, seo, geo]) => (
                <tr key={c} className="border-b border-border-default last:border-0">
                  <td className="p-4 font-medium text-text-primary">{c}</td>
                  <td className="p-4">{seo}</td>
                  <td className="p-4">{geo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>Les chiffres de la bascule</H2>
        <P>
          Pourquoi le GEO s’ajoute désormais au SEO ? Parce que l’usage bascule — vite. Les
          données publiques d’OpenAI, Semrush, Google et McKinsey le montrent.
        </P>
        <StatsGroup stats={shift} />

        <H2>Le GEO ne remplace pas le SEO</H2>
        <P>
          Malgré la croissance des IA, la recherche classique reste massivement utilisée — et
          surtout, les deux mondes sont liés. Les AI Overviews de Google sont ancrés dans
          l’index de recherche. ChatGPT, lorsqu’il déclenche une recherche, s’appuie aussi sur
          le web indexé. Un bon SEO reste donc un prérequis pour une partie du GEO.
        </P>
        <P>
          L’inverse est vrai aussi : le travail GEO (structuration en question-réponse,
          schema.org, autorité d’entité) améliore la qualité perçue d’un site et sert le SEO.
          Les deux disciplines se renforcent.
        </P>

        <H2>Comment combiner SEO et GEO</H2>
        <UL
          items={[
            "Garder des fondations SEO saines : indexation propre, performance, maillage interne, contenu de qualité.",
            "Restructurer le contenu pour la citation : passages auto-suffisants, format question-réponse, titres explicites, schema.org.",
            "Travailler l’entité de marque : cohérence du nom et des faits clés sur le site, les profils, Wikidata — un levier GEO qui sert aussi le SEO de marque.",
            "Produire les formats que les IA citent : guides, comparatifs, pages d’alternative, FAQ.",
            "Mesurer les deux : le rang et le trafic organique pour le SEO, la part de voix IA pour le GEO.",
          ]}
        />

        <H2>Par où commencer</H2>
        <P>
          La bonne porte d’entrée est un{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          : il révèle l’écart entre votre performance SEO et votre présence dans les IA. Pour
          approfondir, consultez notre guide pilier{" "}
          <a href="/ressources/visibilite-ia" className="text-accent-violet hover:underline">
            « Comment apparaître dans les réponses des IA »
          </a>{" "}
          et les{" "}
          <a href="/ressources/statistiques-geo" className="text-accent-violet hover:underline">
            statistiques GEO 2026
          </a>
          .
        </P>
      </ArticleLayout>
    </>
  );
}
