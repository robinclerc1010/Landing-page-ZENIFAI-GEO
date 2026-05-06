import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/services/audit-visibilite-ia";

export const metadata: Metadata = {
  title: "Audit de visibilité IA — Mesure GEO sur ChatGPT, Perplexity, Gemini, Claude",
  description:
    "Audit GEO complet en 72h : mesure de votre présence dans ChatGPT, Perplexity, Gemini et Claude sur 50+ requêtes stratégiques. Baseline, gap concurrentiel, plan d’actions priorisé.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Audit de visibilité IA — Zenifai", type: "website" },
};

const faq = [
  {
    question: "Qu’est-ce qu’un audit de visibilité IA ?",
    answer:
      "Un audit de visibilité IA mesure la fréquence et la qualité avec lesquelles votre marque est citée par les IA génératives (ChatGPT, Perplexity, Gemini, Claude) en réponse à des requêtes d’achat ou d’évaluation pertinentes pour votre marché.",
  },
  {
    question: "Combien de requêtes testez-vous ?",
    answer:
      "Notre audit standard couvre 50 à 200 prompts d’achat, segmentés par intention (recherche, comparaison, recommandation), testés sur les 4 LLMs majeurs avec plusieurs runs pour neutraliser la variance des modèles.",
  },
  {
    question: "Quel est le délai de livraison ?",
    answer:
      "Audit gratuit de cadrage en 72h. Audit complet (livrable détaillé + roadmap) en 7 à 10 jours ouvrés à partir du brief.",
  },
  {
    question: "Quel est le tarif d’un audit GEO ?",
    answer:
      "Le pré-audit de cadrage est offert. Le tarif d’un audit complet est défini sur-mesure en fonction de votre besoin : nombre de marchés et langues, profondeur d’analyse concurrentielle, périmètre du diagnostic technique. Nous établissons un devis personnalisé sous 24h après un échange de cadrage de 30 min.",
  },
];

const deliverables = [
  {
    title: "Score de visibilité IA",
    description:
      "Note globale sur 100 + détail par LLM. Comparaison versus 3 à 5 concurrents directs.",
  },
  {
    title: "Cartographie des prompts",
    description:
      "50 à 200 prompts stratégiques classés par intention d’achat, avec votre taux de citation par requête.",
  },
  {
    title: "Analyse d’entité",
    description:
      "Comment votre marque est perçue par les LLMs : attributs associés, positionnements, hallucinations détectées.",
  },
  {
    title: "Diagnostic technique GEO",
    description:
      "Audit du site : robots.txt, llms.txt, schema.org, crawlabilité IA, qualité du contenu LLM-ready.",
  },
  {
    title: "Roadmap priorisée",
    description:
      "Plan d’actions classé par impact/effort sur 30, 60 et 90 jours. Quick wins identifiés.",
  },
  {
    title: "Restitution live",
    description:
      "Présentation 60 min avec votre équipe marketing pour discuter les enjeux et arbitrer.",
  },
];

const process = [
  {
    number: "01",
    title: "Brief & cadrage (J0)",
    description:
      "30 min pour aligner sur vos objectifs business, vos personas, vos concurrents prioritaires et la liste des LLMs à couvrir.",
  },
  {
    number: "02",
    title: "Construction du corpus de prompts (J1-J2)",
    description:
      "Génération de 50 à 200 requêtes représentatives du parcours d’achat de vos prospects, validées avec vous.",
  },
  {
    number: "03",
    title: "Mesure multi-LLM (J3-J5)",
    description:
      "Tests automatisés sur ChatGPT, Perplexity, Gemini, Claude avec plusieurs passes pour fiabiliser les résultats.",
  },
  {
    number: "04",
    title: "Analyse & livrable (J6-J8)",
    description:
      "Synthèse en rapport PDF + dashboard interactif. Identification des leviers à fort ROI.",
  },
  {
    number: "05",
    title: "Restitution (J9-J10)",
    description:
      "Présentation 60 min avec roadmap actionnable. Vous repartez avec un plan d’action concret.",
  },
];

const forWho = [
  "Marques B2B SaaS qui veulent mesurer leur part de voix actuelle dans les IA",
  "Directions marketing en réflexion sur leur stratégie GEO 2026",
  "E-commerces premium ciblés sur des recherches comparatives",
  "Cabinets et agences qui veulent benchmarker un client avant un pitch",
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Audit de visibilité IA",
              url: URL,
              description:
                "Audit GEO complet : mesure de votre présence dans ChatGPT, Perplexity, Gemini, Claude sur 50 à 200 requêtes stratégiques.",
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
              { name: "Audit de visibilité IA", url: URL },
            ]),
          ),
        }}
      />
      <ServicePageLayout
        eyebrow="Service 01"
        title="Audit de visibilité"
        titleAccent="IA"
        intro="Combien de fois votre marque est-elle citée par ChatGPT, Perplexity, Gemini ou Claude quand un prospect cherche votre solution ? Notre audit GEO vous donne la réponse chiffrée — et la roadmap pour la faire monter."
        forWho={forWho}
        deliverables={deliverables}
        process={process}
        faq={faq}
        duration="7 à 10 jours"
      />
    </>
  );
}
