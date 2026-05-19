import type { Metadata } from "next";
import ArticleLayout, { H2, P } from "@/components/ArticleLayout";
import StatsGroup, { type Stat } from "@/components/StatsGroup";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/statistiques-geo";

export const metadata: Metadata = {
  title: "Statistiques GEO 2026 : les chiffres clés de la recherche IA | Zenifai",
  description:
    "Les statistiques clés du GEO en 2026 : adoption de ChatGPT, bascule de la recherche vers les IA, impact pour les marques. Chiffres sourcés et analysés.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Statistiques GEO 2026 — Zenifai", type: "article" },
};

const adoption: Stat[] = [
  {
    value: 800,
    suffix: " M",
    label:
      "utilisateurs actifs hebdomadaires de ChatGPT — l’un des produits numériques les plus utilisés au monde.",
    source: "OpenAI, 2025",
  },
  {
    value: 100,
    suffix: " M",
    label:
      "utilisateurs atteints par ChatGPT en environ deux mois après son lancement — la croissance d’audience la plus rapide jamais observée pour une application grand public.",
    source: "Analyses sectorielles, 2023",
  },
];

const bascule: Stat[] = [
  {
    value: 25,
    suffix: " %",
    label:
      "baisse projetée du volume des moteurs de recherche traditionnels d’ici 2026, au profit des IA et agents conversationnels.",
    source: "Gartner, 2024",
  },
  {
    value: 68,
    suffix: " %",
    label:
      "des marketeurs anticipent une baisse de leur trafic SEO au profit de la recherche générative.",
    source: "Enquêtes sectorielles (à vérifier)",
  },
  {
    value: 40,
    prefix: "+",
    suffix: " %",
    label:
      "des utilisateurs déclarent préférer une réponse générée par IA à une liste de liens classiques.",
    source: "Enquêtes sectorielles (à vérifier)",
  },
];

const impact: Stat[] = [
  {
    value: 4.4,
    prefix: "×",
    decimals: 1,
    label:
      "la valeur d’un visiteur issu d’une IA générative comparée à un visiteur de recherche classique — un trafic plus qualifié, déjà en phase de décision.",
    source: "Données sectorielles (à vérifier)",
  },
  {
    value: 5,
    label:
      "moteurs de réponse majeurs à couvrir pour une stratégie de visibilité IA complète : ChatGPT, Google AI Overviews, Perplexity, Gemini et Copilot.",
    source: "Zenifai",
  },
];

const faq = [
  {
    question: "Qu’est-ce que le GEO ?",
    answer:
      "Le GEO (Generative Engine Optimization) désigne l’ensemble des techniques visant à faire citer et recommander une marque dans les réponses des IA génératives : ChatGPT, Google AI Overviews, Perplexity, Gemini, Copilot.",
  },
  {
    question: "La recherche traditionnelle est-elle vraiment en déclin ?",
    answer:
      "Le volume des moteurs de recherche classiques est attendu en recul, selon les projections du cabinet Gartner, à mesure que les utilisateurs se tournent vers les IA conversationnelles. Le SEO ne disparaît pas, mais une part croissante de l’attention se déplace vers les moteurs de réponse — ce que mesure et travaille le GEO.",
  },
  {
    question: "Comment obtenir des données sur ma propre visibilité IA ?",
    answer:
      "Les statistiques de marché donnent la tendance ; seule une mesure dédiée donne votre situation. Un audit de visibilité IA teste votre marque sur un corpus de requêtes représentatives et calcule votre part de voix dans les réponses des LLMs — c’est l’IA Visibility Score™ de Zenifai.",
  },
  {
    question: "Ces statistiques sont-elles régulièrement mises à jour ?",
    answer:
      "Oui. Le marché de la recherche IA évolue très vite : cette page est revue régulièrement pour refléter les chiffres les plus récents et les sources les plus fiables.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Statistiques GEO 2026 : les chiffres clés de la recherche IA",
  description:
    "Les statistiques clés du GEO en 2026 : adoption des IA, bascule de la recherche, impact pour les marques.",
  url: URL,
  datePublished: "2026-05-19",
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
        eyebrow="Données · Repères"
        title="Statistiques GEO"
        titleAccent="2026"
        intro="Les chiffres clés de la recherche par IA en 2026 : adoption des moteurs de réponse, bascule des usages, et ce que cela change pour les marques. Données publiques, sourcées et analysées."
        date="Publié en mai 2026 — mis à jour régulièrement"
        readTime="~7 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          La façon dont les gens cherchent de l’information change plus vite que jamais.
          Cette page rassemble les repères chiffrés essentiels pour comprendre l’ampleur du
          phénomène — et pourquoi le GEO (Generative Engine Optimization) devient un canal
          d’acquisition à part entière.
        </P>

        <H2>L’adoption des IA conversationnelles</H2>
        <P>
          En moins de trois ans, les assistants IA sont passés du statut de curiosité à
          celui d’outil de masse. ChatGPT en est l’exemple le plus frappant, mais Gemini,
          Copilot et Perplexity touchent eux aussi des audiences considérables.
        </P>
        <StatsGroup stats={adoption} />

        <H2>La recherche bascule vers les moteurs de réponse</H2>
        <P>
          La conséquence directe de cette adoption : une partie des recherches qui passaient
          hier par Google passe désormais par une IA conversationnelle. Les utilisateurs ne
          veulent plus une liste de liens, mais une réponse — et de plus en plus de
          professionnels du marketing l’anticipent.
        </P>
        <StatsGroup stats={bascule} />

        <H2>Ce que cela change pour les marques</H2>
        <P>
          Être absent des réponses IA, ce n’est pas être mal classé : c’est être hors de la
          conversation. À l’inverse, un visiteur arrivant via une IA est souvent plus avancé
          dans sa décision — il a déjà obtenu une recommandation.
        </P>
        <StatsGroup stats={impact} />

        <H2>Méthodologie et sources</H2>
        <P>
          Cette page compile des données publiques issues d’acteurs du secteur (OpenAI),
          d’analyses de cabinets (Gartner) et d’enquêtes professionnelles. Les chiffres
          relatifs à la recherche IA évoluent rapidement : ils sont indicatifs de tendances
          et révisés régulièrement. Les statistiques de marché décrivent une tendance
          générale — elles ne disent rien de la visibilité <em>de votre marque</em> en
          particulier.
        </P>

        <H2>Connaître vos propres chiffres</H2>
        <P>
          La seule donnée qui compte vraiment pour votre stratégie, c’est votre part de voix
          réelle dans les IA. Notre{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          mesure la fréquence à laquelle votre marque est citée par ChatGPT, Perplexity,
          Gemini et Claude sur les requêtes de votre marché — c’est l’IA Visibility Score™.
          Pour comprendre les mécanismes derrière ces chiffres, voir notre guide{" "}
          <a href="/ressources/visibilite-ia" className="text-accent-violet hover:underline">
            « Comment apparaître dans les réponses des IA »
          </a>
          .
        </P>
      </ArticleLayout>
    </>
  );
}
