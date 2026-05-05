import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/services/strategie-geo";

export const metadata: Metadata = {
  title: "Stratégie & Consulting GEO — Roadmap 90 jours | Zenifai",
  description:
    "Stratégie GEO sur-mesure : entités de marque, requêtes prioritaires, plan de contenu LLM-ready, KPIs de visibilité IA. Roadmap actionnable sur 90 jours.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Stratégie & Consulting GEO — Zenifai", type: "website" },
};

const faq = [
  {
    question: "En quoi consiste une stratégie GEO ?",
    answer:
      "Une stratégie GEO définit les entités de marque à consolider, les requêtes prioritaires à conquérir, les piliers de contenu à produire et les signaux d’autorité à activer pour maximiser la part de voix de votre marque dans les IA génératives.",
  },
  {
    question: "Quelle est la différence avec une stratégie SEO ?",
    answer:
      "Le SEO optimise pour le clic depuis une page de résultats. Le GEO optimise pour la citation directe dans une réponse conversationnelle. Les leviers se recoupent (contenu de qualité, autorité) mais les formats, la structure du contenu et les KPIs diffèrent fondamentalement.",
  },
  {
    question: "Combien de temps dure l’accompagnement ?",
    answer:
      "Le format standard est un cycle de 90 jours qui couvre la stratégie, la mise en exécution et la première mesure d’impact. Renouvelable trimestriellement pour les marques qui veulent installer durablement leur présence IA.",
  },
  {
    question: "Travaillez-vous avec nos équipes internes ou en délégation totale ?",
    answer:
      "Les deux modalités existent. La majorité de nos clients fonctionnent en mode hybride : nous pilotons la stratégie, vos équipes content/SEO produisent avec nos templates, nous validons et mesurons l’impact.",
  },
];

const deliverables = [
  {
    title: "Carte d’entités de marque",
    description:
      "Identification précise des entités à consolider : produits, fondateurs, méthodologies propriétaires, vocabulaire de marque.",
  },
  {
    title: "Top 100 requêtes prioritaires",
    description:
      "Hiérarchie des prompts à conquérir, classés par volume × intention d’achat × difficulté concurrentielle.",
  },
  {
    title: "Plan éditorial 90 jours",
    description:
      "Calendrier de publication : articles piliers, FAQs, études de cas, contenus de comparaison — tous LLM-ready.",
  },
  {
    title: "Plan d’autorité tierce",
    description:
      "Liste de cibles Wikipedia/Wikidata, presse spécialisée, Reddit, podcasts, annuaires sectoriels à activer.",
  },
  {
    title: "Dashboard de KPIs",
    description:
      "Tableau de bord mensuel : score de visibilité IA, part de voix concurrentielle, citations entrantes, hallucinations.",
  },
  {
    title: "Comités stratégiques bi-mensuels",
    description:
      "Rituel de pilotage avec votre direction marketing : avancement, ajustements, arbitrages.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit & cadrage stratégique (Semaine 1-2)",
    description:
      "Audit de visibilité IA, analyse concurrentielle, alignement sur les objectifs business et les personas cibles.",
  },
  {
    number: "02",
    title: "Définition de la stratégie (Semaine 3-4)",
    description:
      "Carte d’entités, prompts prioritaires, piliers de contenu, plan d’autorité tierce. Validation avec vos équipes.",
  },
  {
    number: "03",
    title: "Lancement opérationnel (Semaine 5-8)",
    description:
      "Premières productions, optimisations techniques, premiers placements éditoriaux et communautaires.",
  },
  {
    number: "04",
    title: "Mesure & itération (Semaine 9-12)",
    description:
      "Premier rapport de visibilité IA, ajustements, capitalisation sur les contenus performants.",
  },
];

const forWho = [
  "Marques B2B en phase de scale qui veulent installer un avantage GEO durable",
  "Directions marketing avec des équipes content/SEO existantes à orienter",
  "Scale-ups qui anticipent la baisse du trafic SEO traditionnel",
  "Marques challengers qui veulent dépasser un leader sur la part de voix IA",
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Stratégie & Consulting GEO",
              url: URL,
              description:
                "Stratégie GEO sur-mesure : roadmap 90 jours, entités de marque, requêtes prioritaires, plan de contenu LLM-ready.",
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
              { name: "Stratégie & Consulting GEO", url: URL },
            ]),
          ),
        }}
      />
      <ServicePageLayout
        eyebrow="Service 02"
        title="Stratégie &"
        titleAccent="Consulting GEO"
        intro="Une feuille de route opérationnelle sur 90 jours pour transformer votre marque en référence citée par les IA. Stratégie d’entités, requêtes prioritaires, plan de contenu, KPIs — alignée sur vos objectifs business."
        forWho={forWho}
        deliverables={deliverables}
        process={process}
        faq={faq}
        duration="90 jours (renouvelable)"
      />
    </>
  );
}
