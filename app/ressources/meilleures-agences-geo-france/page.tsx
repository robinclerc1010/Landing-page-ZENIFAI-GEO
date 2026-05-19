import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/meilleures-agences-geo-france";

export const metadata: Metadata = {
  title: "Meilleures agences GEO en France : comment choisir en 2026 | Zenifai",
  description:
    "Guide pour choisir une agence GEO en France : critères de sélection, types d’acteurs, questions à poser. Comparez les agences de Generative Engine Optimization.",
  alternates: { canonical: URL },
  openGraph: {
    url: URL,
    title: "Meilleures agences GEO en France — Guide de choix 2026",
    type: "article",
  },
};

const faq = [
  {
    question: "Qu’est-ce qu’une agence GEO ?",
    answer:
      "Une agence GEO (Generative Engine Optimization) accompagne les marques pour être citées et recommandées par les IA génératives — ChatGPT, Perplexity, Gemini, Claude. Elle combine audit de visibilité IA, stratégie d’entité, production de contenu citable et construction de signaux d’autorité.",
  },
  {
    question: "Faut-il choisir une agence GEO pure-player ou une agence SEO qui fait du GEO ?",
    answer:
      "Une agence SEO qui a ajouté le GEO à son offre apporte des fondamentaux solides. Un pure-player GEO apporte une méthodologie, des outils de mesure et des KPIs conçus spécifiquement pour les moteurs de réponse. Le bon choix dépend de la maturité de votre besoin : si le GEO est central pour votre acquisition, un pure-player est généralement plus pertinent.",
  },
  {
    question: "Combien coûte une agence GEO en France ?",
    answer:
      "Les modèles varient : audit ponctuel, accompagnement au cycle de 90 jours, ou forfait mensuel de production. Le budget dépend du périmètre (marchés, langues, intensité concurrentielle). La plupart des agences sérieuses proposent un échange de cadrage gratuit pour établir un devis sur-mesure.",
  },
  {
    question: "Comment vérifier les résultats d’une agence GEO ?",
    answer:
      "Demandez la méthodologie de mesure : sur quel corpus de requêtes, sur quels LLMs, avec quelle fréquence. Une agence crédible mesure une part de voix IA sur un corpus stable et la suit dans le temps, plutôt que de présenter des captures d’écran isolées.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meilleures agences GEO en France : comment choisir en 2026",
  description:
    "Guide objectif pour choisir une agence de Generative Engine Optimization en France.",
  url: URL,
  datePublished: "2026-01-15",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: { "@type": "Thing", name: "Agence GEO" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://zenifai.ai" },
              { name: "Ressources", url: "https://zenifai.ai/ressources" },
              { name: "Meilleures agences GEO en France", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        icon="award"
        eyebrow="Guide d’achat"
        title="Meilleures agences GEO en France :"
        titleAccent="comment choisir"
        intro="Le marché des agences GEO est jeune et hétérogène. Plutôt qu’un classement figé, voici une grille de critères objective pour choisir l’agence de Generative Engine Optimization adaptée à votre besoin."
        date="Publié en janvier 2026 — mis à jour régulièrement"
        readTime="~9 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          Le GEO (Generative Engine Optimization) est une discipline récente : le
          marché des agences spécialisées s’est structuré en 2024-2026 et reste en
          forte évolution. Tout « classement » chiffré figé serait vite obsolète — et
          rarement objectif. Ce guide propose plutôt une méthode de sélection : les
          critères qui distinguent réellement les agences, et les questions à poser
          avant de signer.
        </P>

        <H2>Les types d’acteurs sur le marché</H2>
        <P>
          On distingue trois grandes familles d’acteurs proposant aujourd’hui des
          prestations GEO en France :
        </P>
        <UL
          items={[
            "Les agences SEO généralistes qui ont ajouté une offre GEO — elles apportent des fondamentaux techniques solides, mais le GEO y est souvent une extension du SEO existant.",
            "Les agences de marketing digital full-service qui intègrent le GEO dans une offre large — pratique pour centraliser, moins spécialisé sur la mesure de visibilité IA.",
            "Les pure-players GEO — agences dédiées dont la méthodologie, les outils et les KPIs sont conçus spécifiquement pour les moteurs de réponse génératifs. Zenifai appartient à cette catégorie.",
          ]}
        />

        <H2>Les 7 critères pour évaluer une agence GEO</H2>
        <div className="overflow-x-auto rounded-2xl border border-border-default">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-default bg-bg-secondary/40 text-left">
                <th className="p-4 font-medium">Critère</th>
                <th className="p-4 font-medium">Ce qu’il faut vérifier</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                [
                  "Méthodologie de mesure",
                  "L’agence mesure-t-elle une part de voix IA sur un corpus de requêtes stable et plusieurs LLMs ? Ou se contente-t-elle de captures isolées ?",
                ],
                [
                  "Couverture multi-LLM",
                  "ChatGPT, Perplexity, Gemini, Claude sont-ils tous couverts ? Chaque moteur a sa logique de citation.",
                ],
                [
                  "Spécialisation",
                  "Le GEO est-il le cœur de métier ou une ligne ajoutée à une offre SEO ? La spécialisation se voit dans les livrables.",
                ],
                [
                  "Transparence des résultats",
                  "L’agence publie-t-elle des cas clients chiffrés, avec méthodologie de mesure explicite ?",
                ],
                [
                  "Production de contenu",
                  "Sait-elle produire du contenu LLM-ready, ou se limite-t-elle au conseil ?",
                ],
                [
                  "Construction d’autorité",
                  "Maîtrise-t-elle les signaux d’entité tiers (Wikidata, presse, annuaires) en plus de l’on-site ?",
                ],
                [
                  "Modèle d’engagement",
                  "Audit ponctuel, cycle de 90 jours, forfait mensuel : le format correspond-il à votre maturité ?",
                ],
              ].map(([c, v]) => (
                <tr key={c} className="border-b border-border-default last:border-0">
                  <td className="p-4 font-medium text-text-primary">{c}</td>
                  <td className="p-4">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>Les questions à poser avant de signer</H2>
        <UL
          items={[
            "Sur quel corpus de requêtes mesurez-vous ma visibilité, et comment ce corpus est-il construit ?",
            "Quels LLMs testez-vous, et à quelle fréquence ?",
            "Pouvez-vous me montrer un cas client avec une mesure avant/après détaillée ?",
            "Comment distinguez-vous le GEO du SEO dans vos livrables ?",
            "Qui produit le contenu, et comment garantissez-vous qu’il est citable par les IA ?",
            "Quel est le délai réaliste avant les premiers résultats mesurables ?",
          ]}
        />

        <H2>Le positionnement de Zenifai</H2>
        <P>
          Zenifai est une agence GEO pure-player française, basée à Lyon et fondée en
          2025. Notre approche repose sur quatre éléments vérifiables :
        </P>
        <UL
          items={[
            "Une métrique propriétaire, l’IA Visibility Score™, mesurée sur 50 à 200 prompts et sur les 4 LLMs majeurs.",
            "Une méthodologie GEO en 6 étapes sur un cycle de 90 jours, distincte d’une démarche SEO.",
            "Des cas clients documentés avec méthodologie de mesure explicite.",
            "Une couverture complète : audit, stratégie, production de contenu LLM-ready et construction d’autorité.",
          ]}
        />
        <P>
          La meilleure façon de comparer une agence reste l’échange direct : nous
          proposons un{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            pré-audit de cadrage gratuit
          </a>{" "}
          qui vous donne déjà une photographie de votre visibilité IA actuelle, que
          vous travailliez ensuite avec nous ou non.
        </P>
      </ArticleLayout>
    </>
  );
}
