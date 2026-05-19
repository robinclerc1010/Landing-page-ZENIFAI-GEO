import type { Metadata } from "next";
import ArticleLayout, { H2, P } from "@/components/ArticleLayout";
import StatsGroup, { type Stat } from "@/components/StatsGroup";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/statistiques-geo";

export const metadata: Metadata = {
  title: "Statistiques GEO 2026 : les chiffres clés de la recherche IA | Zenifai",
  description:
    "Statistiques GEO 2026 sourcées : 900M d'utilisateurs ChatGPT, +206% de trafic de référence IA, 88% d'adoption de l'IA en entreprise. Données OpenAI, Semrush, McKinsey.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Statistiques GEO 2026 — Zenifai", type: "article" },
};

const adoption: Stat[] = [
  {
    value: 900,
    suffix: " M",
    label:
      "utilisateurs actifs hebdomadaires de ChatGPT en février 2026 — contre 800 M quatre mois plus tôt.",
    source: "OpenAI, 2026",
  },
  {
    value: 50,
    suffix: " M",
    label:
      "abonnés payants à ChatGPT — un usage qui passe de l’expérimentation à l’outil de travail quotidien.",
    source: "OpenAI, 2026",
  },
  {
    value: 88,
    suffix: " %",
    label:
      "des organisations utilisent l’IA dans au moins une fonction de l’entreprise, contre 78 % un an plus tôt.",
    source: "McKinsey, The State of AI 2025",
  },
];

const bascule: Stat[] = [
  {
    value: 206,
    prefix: "+",
    suffix: " %",
    label:
      "de croissance, en un an, du trafic de référence sortant de ChatGPT vers le reste du web (janvier 2025 → janvier 2026).",
    source: "Semrush, étude clickstream 2026",
  },
  {
    value: 34.5,
    decimals: 1,
    suffix: " %",
    label:
      "des requêtes seulement déclenchent une recherche web dans ChatGPT — le reste des réponses s’appuie sur la seule connaissance du modèle.",
    source: "Semrush, étude clickstream 2026",
  },
  {
    value: 1.5,
    decimals: 1,
    suffix: " Md",
    label:
      "d’utilisateurs touchés chaque mois par les AI Overviews de Google, dans plus de 200 pays.",
    source: "Google, 2026",
  },
];

const impact: Stat[] = [
  {
    value: 2.4,
    prefix: "×",
    decimals: 1,
    label:
      "le nombre de sites web recevant du trafic depuis ChatGPT en un peu plus d’un an (≈ 71 000 domaines/mois fin 2024 → ≈ 170 000 début 2026).",
    source: "Semrush, étude clickstream 2026",
  },
  {
    value: 21.6,
    decimals: 1,
    suffix: " %",
    label:
      "du trafic de référence de ChatGPT se concentre sur un seul domaine, Google : la visibilité IA récompense les marques de référence.",
    source: "Semrush, étude clickstream 2026",
  },
  {
    value: 39,
    suffix: " %",
    label:
      "seulement des organisations attribuent à l’IA un impact mesurable sur leur résultat d’exploitation : l’adoption dépasse de loin la maîtrise.",
    source: "McKinsey, The State of AI 2025",
  },
];

const faq = [
  {
    question: "Qu’est-ce que le GEO ?",
    answer:
      "Le GEO (Generative Engine Optimization) désigne l’ensemble des techniques visant à faire citer et recommander une marque dans les réponses des IA génératives : ChatGPT, Google AI Overviews, Perplexity, Gemini, Copilot.",
  },
  {
    question: "ChatGPT s’appuie-t-il sur une recherche web ou sur sa mémoire ?",
    answer:
      "Les deux — mais surtout sur sa mémoire. Selon l’étude clickstream de Semrush, ChatGPT ne déclenche une recherche web que sur 34,5 % des requêtes en février 2026. Près de deux réponses sur trois reposent donc sur la seule connaissance d’entraînement du modèle, ce qui rend la cohérence d’entité et les mentions tierces décisives.",
  },
  {
    question: "La recherche traditionnelle est-elle vraiment menacée ?",
    answer:
      "Elle se transforme. Le trafic de référence sortant de ChatGPT a progressé de 206 % en un an (Semrush), et les AI Overviews de Google touchent désormais environ 1,5 milliard d’utilisateurs par mois. Le SEO ne disparaît pas, mais une part croissante de l’attention se déplace vers les moteurs de réponse — c’est l’objet du GEO.",
  },
  {
    question: "Comment obtenir des données sur ma propre visibilité IA ?",
    answer:
      "Les statistiques de marché donnent la tendance ; seule une mesure dédiée donne votre situation. Un audit de visibilité IA teste votre marque sur un corpus de requêtes représentatives et calcule votre part de voix dans les réponses des LLMs — c’est l’IA Visibility Score™ de Zenifai.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Statistiques GEO 2026 : les chiffres clés de la recherche IA",
  description:
    "Statistiques GEO 2026 sourcées sur l’adoption des IA, la bascule de la recherche et l’impact pour les marques.",
  url: URL,
  datePublished: "2026-05-15",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://zenifai.ai" },
              { name: "Ressources", url: "https://zenifai.ai/ressources" },
              { name: "Statistiques GEO 2026", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        icon="chart"
        eyebrow="Données · Repères"
        title="Statistiques GEO"
        titleAccent="2026"
        intro="Les chiffres clés de la recherche par IA en 2026 : adoption des moteurs de réponse, bascule des usages, impact pour les marques. Données publiques issues d’OpenAI, Semrush et McKinsey."
        date="Publié en mai 2026 — mis à jour régulièrement"
        readTime="~7 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          La façon dont les gens cherchent de l’information change plus vite que jamais.
          Cette page rassemble les repères chiffrés essentiels — issus de sources publiques
          identifiées — pour comprendre l’ampleur du phénomène et pourquoi le GEO (Generative
          Engine Optimization) devient un canal d’acquisition à part entière.
        </P>

        <H2>L’adoption des IA conversationnelles</H2>
        <P>
          En moins de trois ans, les assistants IA sont passés du statut de curiosité à
          celui d’infrastructure de travail. ChatGPT en est l’exemple le plus frappant, et
          son adoption en entreprise se généralise.
        </P>
        <StatsGroup stats={adoption} />

        <H2>La recherche bascule vers les moteurs de réponse</H2>
        <P>
          Conséquence directe : une partie des recherches qui passaient hier par Google
          passe désormais par une IA — et les IA renvoient elles-mêmes de plus en plus de
          trafic vers le web, en citant leurs sources.
        </P>
        <StatsGroup stats={bascule} />

        <H2>Ce que cela change pour les marques</H2>
        <P>
          Le trafic issu des IA se concentre sur un nombre restreint de domaines : être la
          source citée devient un avantage compétitif décisif. Et si l’adoption de l’IA est
          massive, sa maîtrise, elle, reste rare — l’écart est l’opportunité.
        </P>
        <StatsGroup stats={impact} />

        <H2>Méthodologie et sources</H2>
        <P>
          Les chiffres de cette page proviennent de sources publiques identifiées :{" "}
          <strong className="text-text-primary">OpenAI</strong> (communications officielles
          sur l’audience de ChatGPT) ;{" "}
          <strong className="text-text-primary">Semrush</strong> (étude clickstream de la
          recherche IA, analysant plus d’un milliard de lignes de données de navigation
          d’octobre 2024 à février 2026) ;{" "}
          <strong className="text-text-primary">McKinsey</strong> (rapport « The State of AI
          2025 ») ; et Google (communications sur les AI Overviews). Le marché de la
          recherche IA évoluant très vite, ces données sont indicatives de tendances et
          révisées régulièrement.
        </P>

        <H2>Connaître vos propres chiffres</H2>
        <P>
          Les statistiques de marché décrivent une tendance générale — elles ne disent rien
          de la visibilité <em>de votre marque</em> en particulier. Notre{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          mesure la fréquence à laquelle votre marque est citée par ChatGPT, Perplexity,
          Gemini et Claude sur les requêtes de votre marché. Pour comprendre les mécanismes
          derrière ces chiffres, voir notre guide{" "}
          <a href="/ressources/visibilite-ia" className="text-accent-violet hover:underline">
            « Comment apparaître dans les réponses des IA »
          </a>
          .
        </P>
      </ArticleLayout>
    </>
  );
}
