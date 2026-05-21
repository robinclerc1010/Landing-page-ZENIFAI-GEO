import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import PullQuote from "@/components/PullQuote";

const URL = "https://zenifai.ai/ressources/geo-saas";

export const metadata: Metadata = {
  title: "GEO pour SaaS B2B : le guide complet 2026 | Zenifai",
  description:
    "Comment un SaaS B2B se fait recommander par ChatGPT, Perplexity et Gemini pendant l’évaluation produit. Guide GEO complet : méthode, leviers, erreurs à éviter.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "GEO pour SaaS B2B — Guide complet 2026", type: "article" },
};

const faq = [
  {
    question: "Pourquoi le GEO est-il stratégique pour un SaaS B2B ?",
    answer:
      "Les acheteurs B2B utilisent massivement les IA en phase d’évaluation : « quelle est la meilleure alternative à X ? », « quel outil pour Y ? ». Si votre SaaS n’est pas cité dans ces réponses, vous êtes éliminé d’une shortlist que vous ne voyez jamais.",
  },
  {
    question: "Quelles requêtes IA cibler en priorité pour un SaaS ?",
    answer:
      "Les requêtes de comparaison (« X vs Y »), d’alternative (« alternatives à X »), de catégorie (« meilleur logiciel de Z ») et de cas d’usage (« outil pour faire Z »). Ce sont les moments où l’IA construit une shortlist.",
  },
  {
    question: "Combien de temps pour des résultats sur un SaaS B2B ?",
    answer:
      "Premiers signaux sous 30 à 45 jours, impact significatif sur la part de voix entre 60 et 90 jours. La vitesse dépend de la maturité du contenu existant et de l’intensité concurrentielle de la catégorie.",
  },
  {
    question: "Le GEO fonctionne-t-il pour un SaaS early-stage peu connu ?",
    answer:
      "Oui, et c’est souvent là que le levier est le plus fort : les catégories émergentes sont moins disputées dans les IA. Un SaaS early-stage qui structure tôt sa présence GEO peut devenir la référence citée avant ses concurrents.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GEO pour SaaS B2B : le guide complet 2026",
  description:
    "Guide complet du Generative Engine Optimization appliqué aux SaaS B2B : méthode, leviers, erreurs à éviter.",
  url: URL,
  datePublished: "2025-10-15",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: [
    { "@type": "Thing", name: "Generative Engine Optimization" },
    { "@type": "Thing", name: "SaaS B2B" },
  ],
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
              { name: "GEO pour SaaS B2B", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        icon="cloud"
        eyebrow="Guide · SaaS B2B"
        title="GEO pour"
        titleAccent="SaaS B2B"
        intro="Vos acheteurs demandent à ChatGPT et Perplexity quel outil choisir. Voici comment faire en sorte que votre SaaS soit le nom qui revient — guide complet 2026."
        date="Publié en octobre 2025"
        readTime="~10 min de lecture"
        cta={{
          heading: "Auditez la visibilité IA de votre",
          accent: "SaaS",
          sub: "Découvrez si votre SaaS est recommandé par les IA sur les requêtes d'évaluation de votre marché.",
          label: "Réserver un audit",
        }}
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          L’achat de logiciel B2B a toujours commencé par une recherche. Ce qui change
          en 2026, c’est l’outil de cette recherche : de plus en plus d’acheteurs
          ouvrent ChatGPT, Perplexity ou Gemini avant même Google. Ils ne demandent pas
          un lien — ils demandent une recommandation : « quel est le meilleur outil
          pour gérer X ? », « quelle alternative à [leader du marché] ? ».
        </P>
        <P>
          La réponse de l’IA contient trois, quatre, parfois cinq noms. Soit votre SaaS
          en fait partie, soit il est éliminé d’une shortlist que votre équipe
          marketing ne verra jamais passer. C’est exactement le problème que résout le
          GEO (Generative Engine Optimization).
        </P>

        <PullQuote>
          Soit votre SaaS fait partie de la shortlist générée par l’IA, soit il est éliminé d’une décision que votre équipe marketing ne verra jamais passer.
        </PullQuote>

        <H2>Les 4 types de requêtes IA qui décident d’un achat SaaS</H2>
        <UL
          items={[
            "Requêtes de catégorie — « meilleur logiciel de gestion de projet », « meilleur CRM pour PME ». L’IA construit une shortlist de la catégorie.",
            "Requêtes d’alternative — « alternatives à [leader] ». L’acheteur insatisfait d’un outil cherche un remplaçant : moment d’acquisition à très forte intention.",
            "Requêtes de comparaison — « X vs Y ». L’acheteur a déjà deux options et veut trancher. Être présent dans cette réponse, c’est entrer dans la décision finale.",
            "Requêtes de cas d’usage — « outil pour automatiser Z », « comment faire Z sans développeur ». L’IA recommande des solutions concrètes.",
          ]}
        />

        <H2>Pourquoi les SaaS sont mal cités par défaut</H2>
        <P>
          Trois raisons reviennent systématiquement dans nos audits de SaaS B2B :
        </P>
        <UL
          items={[
            "Le contenu est écrit pour Google, pas pour les IA : pages produit centrées sur les fonctionnalités, sans passages auto-suffisants ni format question-réponse.",
            "L’entité est floue : les LLMs confondent le produit, l’entreprise et parfois une marque homonyme. Sans entité claire, pas de recommandation fiable.",
            "L’autorité tierce est faible : peu de présence sur les sources que les IA lisent réellement pour les SaaS — comparateurs, communautés, listes de catégories, presse tech.",
          ]}
        />

        <H2>Les leviers GEO prioritaires pour un SaaS</H2>
        <P>
          Quatre chantiers, par ordre d’impact pour la majorité des SaaS B2B :
        </P>
        <UL
          items={[
            "Pages de comparaison et d’alternative — « [Votre SaaS] vs [concurrent] » et « alternatives à [concurrent] ». Ce sont les formats les plus cités par les IA pour les requêtes d’évaluation.",
            "Contenu de catégorie LLM-ready — décrire clairement la catégorie, le problème résolu et le positionnement du produit, en format Q→R avec schema.org.",
            "Consolidation d’entité — aligner le nom du produit, de l’entreprise et du vocabulaire de marque sur le site, les profils, Crunchbase, les comparateurs et Wikidata.",
            "Autorité tierce — présence maîtrisée sur les sources sectorielles : annuaires de catégorie, communautés professionnelles, presse tech, contenus invités.",
          ]}
        />

        <H2>Erreurs fréquentes à éviter</H2>
        <UL
          items={[
            "Traiter le GEO comme du SEO : republier d’anciens articles sans les restructurer en contenu citable ne suffit pas.",
            "Négliger les pages de comparaison par peur de « faire de la pub aux concurrents » — c’est précisément là que se joue la décision.",
            "Ignorer la mesure : sans suivi de la part de voix IA sur un corpus de prompts stable, impossible de savoir ce qui fonctionne.",
            "Vouloir tout faire d’un coup : le GEO se construit par cycles de 90 jours, avec priorisation par impact.",
          ]}
        />

        <H2>Par où commencer</H2>
        <P>
          La première étape est toujours un{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          : mesurer la part de voix actuelle de votre SaaS sur un corpus de requêtes
          stratégiques, identifier les concurrents qui dominent les réponses et
          prioriser les actions. C’est la base de toute{" "}
          <a href="/services/strategie-geo" className="text-accent-violet hover:underline">
            stratégie GEO
          </a>{" "}
          sérieuse.
        </P>
      </ArticleLayout>
    </>
  );
}
