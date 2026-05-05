import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/services/autorite-marque";

export const metadata: Metadata = {
  title: "Autorité & Mentions de marque — Signaux d’entité IA | Zenifai",
  description:
    "Construction de signaux d’entité tiers (Wikipedia, Reddit, YouTube, presse, podcasts, annuaires) pour consolider votre marque dans les knowledge graphs des IA génératives.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Autorité & Mentions de marque — Zenifai", type: "website" },
};

const faq = [
  {
    question: "Pourquoi les mentions tierces sont-elles cruciales pour le GEO ?",
    answer:
      "Les LLMs reconstruisent leur compréhension des marques à partir des sources qu’ils ont vu pendant l’entraînement et au moment du retrieval. Une marque avec des mentions cohérentes sur Wikipedia, Reddit, YouTube et la presse est citée 5 à 10× plus qu’une marque uniquement présente sur son propre site.",
  },
  {
    question: "Faites-vous du link-building classique ?",
    answer:
      "Non. Le link-building SEO traditionnel ne convertit pas en signaux d’entité IA. Nous travaillons sur des placements de contenu (interviews, co-citations, reviews communautaires) qui génèrent des mentions de marque sémantiquement riches.",
  },
  {
    question: "Pouvez-vous créer une fiche Wikipedia pour notre entreprise ?",
    answer:
      "Si l’entreprise est éligible (notoriété, sources secondaires existantes), oui. Nous évaluons l’éligibilité, identifions les sources secondaires nécessaires, rédigeons une fiche conforme aux critères Wikipedia et accompagnons la modération communautaire. Nous ne créons pas de fiches qui seraient supprimées.",
  },
  {
    question: "Combien de temps pour voir l’impact sur la visibilité IA ?",
    answer:
      "30 à 60 jours pour les premiers signaux mesurables (mentions indexées, citations en hausse). 90 à 180 jours pour un impact significatif sur la part de voix IA. Les signaux d’autorité s’installent durablement et s’accumulent dans le temps.",
  },
];

const deliverables = [
  {
    title: "Audit d’autorité tierce",
    description:
      "Inventaire des mentions existantes (presse, Reddit, YouTube, Wikipedia, annuaires) et benchmark concurrentiel.",
  },
  {
    title: "Plan de placements stratégiques",
    description:
      "Liste priorisée de cibles : médias spécialisés, podcasts, communautés Reddit, chaînes YouTube, annuaires sectoriels.",
  },
  {
    title: "Création/édition Wikipedia & Wikidata",
    description:
      "Si éligible : rédaction d’une fiche Wikipedia conforme aux critères, et création/enrichissement de l’entité Wikidata.",
  },
  {
    title: "Pilotage de relations presse spécialisée",
    description:
      "Pitch de tribunes, interviews, mentions dans articles de fond — sur les médias que les LLMs citent réellement.",
  },
  {
    title: "Activation communautaire",
    description:
      "Présence éditoriale sur Reddit (r/SEO, r/marketing, subreddits sectoriels), Stack Overflow, Hacker News selon votre marché.",
  },
  {
    title: "Suivi des citations entrantes",
    description:
      "Dashboard mensuel : nouvelles mentions détectées, sentiment, attribution dans les réponses IA.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit d’entité (Semaine 1-2)",
    description:
      "Cartographie de votre empreinte d’autorité actuelle vs concurrents. Identification des trous à combler.",
  },
  {
    number: "02",
    title: "Plan d’activation (Semaine 3)",
    description:
      "Sélection des plateformes et formats prioritaires. Validation avec votre direction marketing/comms.",
  },
  {
    number: "03",
    title: "Production & placements (Mois 2-3)",
    description:
      "Rédaction des contenus de placement, pitch des médias, animation communautaire, dépôt Wikipedia/Wikidata.",
  },
  {
    number: "04",
    title: "Mesure & accumulation (Mois 4+)",
    description:
      "Suivi de l’impact sur les LLMs, capitalisation sur les placements performants, expansion progressive.",
  },
];

const forWho = [
  "Marques avec une notoriété sectorielle mais peu de signaux numériques tiers",
  "Scale-ups en levée de fonds qui veulent renforcer leur empreinte de marque",
  "Marques challengers qui veulent passer pour une référence dans leur catégorie",
  "Entreprises éligibles à une fiche Wikipedia mais qui n’ont pas encore franchi le pas",
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Autorité & Mentions de marque",
              url: URL,
              description:
                "Construction de signaux d’entité tiers (Wikipedia, Reddit, YouTube, presse) pour les knowledge graphs IA.",
            }),
          ),
        }}
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
              { name: "Services", url: "https://zenifai.ai/services" },
              { name: "Autorité & Mentions de marque", url: URL },
            ]),
          ),
        }}
      />
      <ServicePageLayout
        eyebrow="Service 04"
        title="Autorité &"
        titleAccent="Mentions de marque"
        intro="Les IA citent les marques que les autres citent. Nous construisons votre empreinte d’entité sur les sources que les LLMs lisent vraiment : Wikipedia, presse, Reddit, podcasts, annuaires sectoriels."
        forWho={forWho}
        deliverables={deliverables}
        process={process}
        faq={faq}
        duration="3 à 6 mois"
      />
    </>
  );
}
