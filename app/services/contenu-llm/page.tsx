import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/services/contenu-llm";

export const metadata: Metadata = {
  title: "Optimisation de contenu LLM-ready — Citabilité IA | Zenifai",
  description:
    "Production et restructuration de contenus pensés pour être compris, cités et recommandés par ChatGPT, Perplexity, Gemini et Claude. Format Q→R, schema.org, autorité topique.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Contenu LLM-ready — Zenifai", type: "website" },
};

const faq = [
  {
    question: "Qu’est-ce qu’un contenu LLM-ready ?",
    answer:
      "Un contenu LLM-ready est structuré pour être facilement extrait, cité et résumé par les modèles de langage : titres explicites, paragraphes auto-suffisants, format Q→R, données chiffrées sourcées, schema.org riche, vocabulaire de marque cohérent.",
  },
  {
    question: "Réécrivez-vous notre contenu existant ou créez-vous du nouveau ?",
    answer:
      "Les deux. Nous commençons par un audit qui identifie les pages existantes à fort potentiel à réécrire (quick wins) puis nous produisons les piliers manquants. Ratio typique : 60 % réécriture, 40 % production neuve.",
  },
  {
    question: "Combien d’articles par mois ?",
    answer:
      "Selon le forfait : entre 4 et 12 contenus optimisés par mois (articles piliers, FAQs, études de cas, pages produit). Toujours alignés sur votre stratégie GEO.",
  },
  {
    question: "Travaillez-vous avec nos rédacteurs internes ?",
    answer:
      "Oui. Nous fournissons des templates GEO, des briefs détaillés et une grille de QA pour que vos rédacteurs internes ou freelances produisent du contenu citable. Nous validons chaque livrable.",
  },
];

const deliverables = [
  {
    title: "Articles piliers LLM-ready",
    description:
      "Articles de 1 500 à 3 000 mots, structurés Q→R, avec FAQPage schema et liens sources externes vérifiables.",
  },
  {
    title: "FAQs ciblées par intention",
    description:
      "Sections FAQ optimisées sur vos pages produit/service, marquées en FAQPage schema pour rich results.",
  },
  {
    title: "Études de cas structurées",
    description:
      "Cas clients en format CaseStudy schema : contexte, défi, méthode, résultats chiffrés. Citables tels quels par les IA.",
  },
  {
    title: "Pages de comparaison",
    description:
      "« Zenifai vs concurrent » et « X vs Y » — formats que les IA citent massivement pour les requêtes d’évaluation.",
  },
  {
    title: "Glossaires & lexiques",
    description:
      "Définitions courtes et précises de votre vocabulaire de marque et de votre domaine — fortement citées par Perplexity.",
  },
  {
    title: "Briefs et templates GEO",
    description:
      "Documents structurés à transmettre à vos équipes internes ou agences pour standardiser la production future.",
  },
];

const process = [
  {
    number: "01",
    title: "Audit éditorial (Semaine 1)",
    description:
      "Inventaire des contenus existants, scoring de citabilité IA, identification des pages à réécrire en priorité.",
  },
  {
    number: "02",
    title: "Plan éditorial 30/60/90 (Semaine 2)",
    description:
      "Calendrier de publication aligné sur les requêtes prioritaires de votre stratégie GEO.",
  },
  {
    number: "03",
    title: "Production en sprint (Semaines 3+)",
    description:
      "Sprints hebdomadaires : brief → rédaction → review → schema markup → publication. Cadence ajustable selon le volume.",
  },
  {
    number: "04",
    title: "Mesure d’impact (Mensuel)",
    description:
      "Reporting mensuel : pages indexées par les IA, citations entrantes, évolution de la part de voix.",
  },
];

const forWho = [
  "Marques avec un site existant mais peu/pas cité par les IA",
  "Équipes content qui veulent monter en compétence sur le GEO",
  "Scale-ups qui ont besoin d’accélérer leur production éditoriale",
  "E-commerces premium qui veulent dominer les requêtes de comparaison",
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "Optimisation de contenu LLM-ready",
              url: URL,
              description:
                "Production et restructuration de contenus pour maximiser la citabilité par les IA génératives.",
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
              { name: "Optimisation de contenu LLM-ready", url: URL },
            ]),
          ),
        }}
      />
      <ServicePageLayout
        eyebrow="Service 03"
        title="Contenu"
        titleAccent="LLM-ready"
        intro="Vos contenus actuels sont écrits pour Google. Nous les rendons citables par ChatGPT, Perplexity, Gemini et Claude — par la structure, le format Q→R, le schema.org riche et l’autorité topique."
        forWho={forWho}
        deliverables={deliverables}
        process={process}
        faq={faq}
        duration="3 mois minimum (forfait mensuel)"
      />
    </>
  );
}
