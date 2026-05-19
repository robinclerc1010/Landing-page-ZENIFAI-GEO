import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/definition-geo";

export const metadata: Metadata = {
  title: "Qu’est-ce que le GEO ? Définition, GEO vs SEO et lexique 2026",
  description:
    "Définition claire du GEO (Generative Engine Optimization), différences avec le SEO, et lexique des termes clés pour comprendre la visibilité dans les IA génératives.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Qu’est-ce que le GEO ? — Zenifai", type: "article" },
};

const faq = [
  {
    question: "Qu’est-ce que le GEO en une phrase ?",
    answer:
      "Le GEO (Generative Engine Optimization) est l’ensemble des techniques visant à faire citer et recommander une marque dans les réponses générées par les IA génératives comme ChatGPT, Perplexity, Gemini et Claude.",
  },
  {
    question: "Le GEO remplace-t-il le SEO ?",
    answer:
      "Non. Le SEO optimise le positionnement dans les pages de résultats classiques ; le GEO optimise la citation dans les réponses conversationnelles des IA. Les deux disciplines sont complémentaires et se renforcent : un bon contenu SEO sert souvent de source aux IA.",
  },
  {
    question: "GEO, AEO, AIO, LLMO : est-ce la même chose ?",
    answer:
      "Ces acronymes désignent des approches voisines. GEO (Generative Engine Optimization) est le terme le plus répandu. AEO (Answer Engine Optimization), AIO (AI Optimization) et LLMO (LLM Optimization) recouvrent la même idée : optimiser pour être cité par les moteurs de réponse génératifs.",
  },
  {
    question: "Comment mesure-t-on la visibilité GEO d’une marque ?",
    answer:
      "On teste un corpus de requêtes représentatives sur plusieurs LLMs et on mesure la fréquence de citation de la marque. Chez Zenifai, c’est l’IA Visibility Score™ : un score de part de voix calculé sur 50 à 200 prompts mesurés mensuellement.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qu’est-ce que le GEO ? Définition, GEO vs SEO et lexique",
  description:
    "Définition du GEO (Generative Engine Optimization), différence avec le SEO et lexique des termes clés.",
  url: URL,
  datePublished: "2025-01-15",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: { "@type": "Thing", name: "Generative Engine Optimization" },
};

// DefinedTermSet — fortement citable par les IA pour les requêtes définitionnelles
const lexicon: { term: string; def: string }[] = [
  {
    term: "GEO — Generative Engine Optimization",
    def: "Discipline qui consiste à optimiser une marque, ses contenus et ses signaux d’autorité pour être citée et recommandée par les IA génératives.",
  },
  {
    term: "LLM — Large Language Model",
    def: "Modèle de langage de grande taille (ChatGPT, Claude, Gemini, etc.) capable de générer des réponses en langage naturel.",
  },
  {
    term: "Moteur de réponse",
    def: "Interface qui renvoie une réponse synthétique unique plutôt qu’une liste de liens — par opposition au moteur de recherche classique.",
  },
  {
    term: "Citation IA",
    def: "Mention explicite d’une marque, d’un produit ou d’une source dans une réponse générée par un LLM.",
  },
  {
    term: "Part de voix IA",
    def: "Proportion de requêtes d’un marché donné pour lesquelles une marque est citée par les IA, comparée à ses concurrents.",
  },
  {
    term: "Entité",
    def: "Représentation structurée d’une marque, personne ou concept dans le knowledge graph utilisé par les IA pour résoudre les références.",
  },
  {
    term: "Knowledge graph",
    def: "Graphe de connaissances reliant entités et attributs, mobilisé par les IA pour ancrer et désambiguïser les marques.",
  },
  {
    term: "Contenu LLM-ready",
    def: "Contenu structuré (format question-réponse, schema.org, données sourcées) pour être facilement extrait et cité par les modèles.",
  },
  {
    term: "Hallucination",
    def: "Information erronée générée par un LLM. En GEO, on cherche à réduire les hallucinations concernant une marque.",
  },
  {
    term: "llms.txt",
    def: "Fichier à la racine d’un site qui résume sa proposition de valeur et ses pages clés à destination des IA.",
  },
];

const definedTermSetJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Lexique GEO — Generative Engine Optimization",
  url: URL,
  hasDefinedTerm: lexicon.map((l) => ({
    "@type": "DefinedTerm",
    name: l.term,
    description: l.def,
  })),
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
              { name: "Qu’est-ce que le GEO ?", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        icon="help"
        eyebrow="Lexique · Fondamentaux"
        title="Qu’est-ce que le"
        titleAccent="GEO ?"
        intro="Le GEO, ou Generative Engine Optimization, est la discipline qui rend votre marque visible dans les réponses des IA génératives. Définition, différences avec le SEO, et lexique complet."
        date="Publié en janvier 2025"
        readTime="~7 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          <strong className="text-text-primary">
            Le GEO (Generative Engine Optimization) désigne l’ensemble des techniques
            visant à faire citer, recommander et choisir une marque par les IA
            génératives
          </strong>{" "}
          — ChatGPT, Perplexity, Google Gemini, Claude et Microsoft Copilot. Là où le
          SEO travaille le positionnement dans une liste de liens, le GEO travaille la
          présence dans une réponse rédigée, conversationnelle et unique.
        </P>
        <P>
          Le déplacement est massif : une part croissante des recherches d’information
          et d’achat passe désormais par un moteur de réponse plutôt que par un moteur
          de recherche classique. Quand un prospect demande « quelle est la meilleure
          solution pour X ? », il obtient une réponse — et soit votre marque y figure,
          soit elle est invisible.
        </P>

        <H2>GEO vs SEO : quelles différences ?</H2>
        <P>
          Le SEO et le GEO partagent des fondations communes (contenu de qualité,
          autorité, propreté technique) mais diffèrent sur l’objectif, le format et la
          mesure.
        </P>
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
              {[
                ["Objectif", "Être bien classé dans une liste de résultats", "Être cité dans une réponse générée"],
                ["Surface", "Pages de résultats Google / Bing", "ChatGPT, Perplexity, Gemini, Claude, AI Overviews"],
                ["Format gagnant", "Page optimisée pour un mot-clé", "Passage auto-suffisant, format Q→R, sourcé"],
                ["Unité de succès", "Position et clic", "Citation et recommandation"],
                ["Mesure", "Rang, trafic organique", "Part de voix IA, fréquence de citation"],
                ["Levier d’autorité", "Backlinks", "Mentions d’entité sur sources tierces"],
              ].map(([c, seo, geo]) => (
                <tr key={c} className="border-b border-border-default last:border-0">
                  <td className="p-4 font-medium text-text-primary">{c}</td>
                  <td className="p-4">{seo}</td>
                  <td className="p-4">{geo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          La conclusion pratique : le GEO ne remplace pas le SEO, il s’y ajoute. Un
          contenu bien référencé sert souvent de source aux IA — mais il faut le
          structurer pour qu’il soit réellement citable.
        </P>

        <H2>Pourquoi le GEO devient incontournable</H2>
        <UL
          items={[
            "Les utilisateurs délèguent de plus en plus leurs recherches d’évaluation et de comparaison aux IA conversationnelles.",
            "Un visiteur issu d’une IA arrive plus qualifié : il a déjà obtenu une recommandation, pas seulement un lien.",
            "La réponse générée ne cite qu’un nombre restreint de marques — la visibilité y est un jeu à somme nulle.",
            "Les marques absentes des réponses IA aujourd’hui construisent une dette de visibilité difficile à rattraper.",
          ]}
        />

        <H2>Lexique GEO</H2>
        <P>
          Les termes clés pour comprendre et piloter une stratégie de Generative Engine
          Optimization.
        </P>
        <dl className="space-y-5">
          {lexicon.map((l) => (
            <div key={l.term} className="border-l-2 border-accent-violet/40 pl-5">
              <dt className="font-serif text-lg font-semibold text-text-primary">
                {l.term}
              </dt>
              <dd className="mt-1 text-text-secondary leading-relaxed text-sm">
                {l.def}
              </dd>
            </div>
          ))}
        </dl>
      </ArticleLayout>
    </>
  );
}
