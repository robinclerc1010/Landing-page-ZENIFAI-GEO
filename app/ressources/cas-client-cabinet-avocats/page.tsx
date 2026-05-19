import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { CALENDLY_URL } from "@/lib/constants";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/cas-client-cabinet-avocats";

export const metadata: Metadata = {
  title:
    "Cas client : un cabinet d’avocats passe de 8 % à 64 % de visibilité IA en 90 jours",
  description:
    "Étude de cas anonymisée. Comment un cabinet d’avocats français en contentieux commercial a multiplié par 8 sa part de voix dans ChatGPT, Perplexity, Gemini et Claude en 90 jours.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Cas client : 8 % → 64 % de visibilité IA", type: "article" },
};

const datePublished = "2026-03-15";
const dateModified = "2026-05-19";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cas client : un cabinet d’avocats passe de 8 % à 64 % de visibilité IA en 90 jours",
  description:
    "Étude de cas GEO anonymisée dans le secteur juridique : méthodologie, livrables, résultats chiffrés.",
  url: URL,
  datePublished,
  dateModified,
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  image: "https://zenifai.ai/og-image.png",
  about: {
    "@type": "Thing",
    name: "Generative Engine Optimization pour cabinets d’avocats",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  wordCount: 1850,
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "ProfessionalService",
    name: "Zenifai — Audit & Stratégie GEO",
    "@id": "https://zenifai.ai/#service",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  author: {
    "@type": "Person",
    name: "Associé fondateur",
    description: "Cabinet d’avocats français — droit des affaires (anonymisé)",
  },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  reviewBody:
    "En 90 jours, nos prospects ont commencé à nous citer spontanément les réponses qu’ils avaient obtenues sur ChatGPT à propos de notre cabinet. Le travail de Zenifai a transformé notre manière d’apparaître dans la phase de présélection.",
  datePublished: "2026-03-10",
};

const faq = [
  {
    question: "Pourquoi un cabinet d’avocats devrait-il investir dans le GEO ?",
    answer:
      "Les justiciables et les directions juridiques utilisent massivement les IA génératives en phase de présélection : « quels sont les meilleurs cabinets en contentieux commercial à Paris ? », « cabinet d’avocats spécialisé droit de la concurrence ». Si votre cabinet n’est pas cité, vous êtes invisibles à un filtre de présélection que vous ne contrôlez pas.",
  },
  {
    question: "Quelles sont les contraintes déontologiques du GEO pour les avocats ?",
    answer:
      "Le RIN (Règlement Intérieur National) du CNB autorise la communication des avocats sous réserve de dignité, délicatesse et probité. Le GEO n’est pas de la publicité : il s’agit de structurer une présence factuelle et vérifiable dans des sources d’information. Toutes les optimisations GEO se font dans le respect strict des règles déontologiques de la profession.",
  },
  {
    question: "Combien de temps avant de voir l’impact sur les IA ?",
    answer:
      "Premiers signaux mesurables sous 30 à 45 jours (augmentation de la fréquence de citation sur les requêtes ciblées). Impact significatif et stable sur la part de voix : 60 à 90 jours, comme dans le cas client présenté ici.",
  },
  {
    question: "Quel budget prévoir pour ce type d’accompagnement ?",
    answer:
      "Le tarif est défini sur-mesure selon le périmètre : audit seul, ou stratégie 90 jours, ou accompagnement complet avec production de contenu. Nous proposons un cadrage gratuit de 30 minutes pour évaluer la situation de départ et orienter vers le bon format.",
  },
];

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
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
              {
                name: "Cas client : cabinet d’avocats",
                url: URL,
              },
            ]),
          ),
        }}
      />

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet mb-4">
            Cas client · Anonymisé · Secteur juridique
          </p>
          <h1
            data-speakable
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
          >
            8 % → 64 % de visibilité IA en{" "}
            <span className="gradient-text">90 jours</span>
          </h1>
          <p
            data-speakable
            className="text-lg sm:text-xl text-text-secondary leading-relaxed"
          >
            Comment un cabinet d’avocats français spécialisé en contentieux commercial
            a multiplié par 8 sa part de voix dans les réponses de ChatGPT, Perplexity,
            Gemini et Claude — sans renoncer à une seule règle déontologique.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-text-secondary/70">
            <span className="px-3 py-1 rounded-full border border-border-default">
              Publié en mars 2026
            </span>
            <span className="px-3 py-1 rounded-full border border-border-default">
              ~9 min de lecture
            </span>
            <span className="px-3 py-1 rounded-full border border-border-default">
              Cabinet anonymisé sur demande
            </span>
          </div>
        </div>
      </section>

      {/* Métriques clés */}
      <section className="py-12 lg:py-16 border-t border-border-default bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-8">
            Les chiffres clés du projet
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                v: "8 % → 64 %",
                l: "Taux de citation sur 30 prompts d’achat juridique stratégiques",
              },
              { v: "×8", l: "Multiplication de la part de voix vs concurrents directs" },
              { v: "90 jours", l: "Du brief initial au reporting de fin de cycle" },
              { v: "+47", l: "Mentions de marque mesurées sur sources tierces" },
            ].map((m, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-border-default bg-bg-primary"
              >
                <p className="font-serif text-3xl font-semibold text-accent-violet">
                  {m.v}
                </p>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contexte */}
      <section className="py-16 lg:py-20 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-text-secondary leading-relaxed">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
            Le contexte
          </h2>
          <p>
            Le client est un cabinet d’avocats français de taille intermédiaire (12
            associés, 35 collaborateurs), spécialisé en contentieux commercial et droit
            de la concurrence. Implanté à Paris depuis plus de quinze ans, le cabinet
            disposait d’une bonne réputation de place, d’un site web propre et d’un SEO
            classique solide — top 3 sur ses requêtes principales sur Google.
          </p>
          <p>
            Le déclic est venu d’une remarque répétée par plusieurs prospects en début
            de rendez-vous : « j’ai demandé à ChatGPT quels cabinets vous recommandiez
            sur ce contentieux, et vous n’apparaissez jamais ». La direction du cabinet
            a alors fait le constat que la phase de présélection des avocats par les
            directions juridiques et les dirigeants se déplaçait silencieusement vers
            les IA génératives — et que le cabinet, malgré son SEO performant, en était
            invisible.
          </p>
          <p>
            La mission a démarré en janvier 2026 sur un format combiné{" "}
            <Link href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
              audit
            </Link>{" "}
            +{" "}
            <Link href="/services/strategie-geo" className="text-accent-violet hover:underline">
              stratégie 90 jours
            </Link>
            , avec un objectif explicite : passer d’une part de voix marginale à une
            présence systématique sur les 30 requêtes d’achat juridique les plus
            stratégiques pour le cabinet.
          </p>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="py-16 lg:py-20 border-t border-border-default bg-bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-text-secondary leading-relaxed">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
            Le diagnostic initial
          </h2>
          <p>
            L’audit GEO de cadrage, mené sur 30 requêtes représentatives du parcours de
            sélection (« meilleur cabinet contentieux commercial Paris », « avocat
            spécialisé droit de la concurrence à Paris », « cabinet d’avocats grande
            distribution litige »…) a livré une photographie sans ambiguïté :
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              "Taux de citation moyen de 8 % toutes plateformes confondues, contre 38 % pour les deux concurrents directs identifiés.",
              "Aucune mention sur les sources que les IA citent réellement pour le secteur juridique : annuaires Decideurs Magazine, Leaders League, classements Décideurs, Wikipedia juridique.",
              "Absence totale d’entité « cabinet » consolidée : les LLMs hésitaient entre le cabinet, ses associés à titre individuel et un ancien cabinet ayant fusionné dix ans plus tôt.",
              "Site web déontologiquement irréprochable mais structurellement opaque pour les IA : aucune FAQ, aucun schema.org, biographies des associés sans Person schema, expertises présentées en images PDF.",
              "Bonne présence presse mais articles non liés à la marque par les IA : citations dispersées dans Les Echos, La Tribune, Option Droit & Affaires non résolues vers une entité unique.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-violet flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Plan d'action */}
      <section className="py-16 lg:py-20 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-text-secondary leading-relaxed">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
            Le plan d’action sur 90 jours
          </h2>
          <p>
            Quatre chantiers ont été menés en parallèle à partir de la semaine 3, après
            cadrage stratégique et validation des contraintes déontologiques avec le
            bâtonnier référent du cabinet.
          </p>

          {[
            {
              n: "01",
              t: "Consolidation d’entité",
              d: "Réécriture de l’ensemble des pages cabinet pour aligner le nom, les expertises, les bureaux et l’historique. Création d’une fiche Wikidata pour le cabinet, enrichissement des annuaires Decideurs et Leaders League. Mise en cohérence des biographies LinkedIn des 12 associés autour d’un vocabulaire commun.",
            },
            {
              n: "02",
              t: "Optimisation technique GEO du site",
              d: "Ajout de schema.org Organization (LegalService), Person pour chaque associé, FAQPage sur les pages d’expertise, BreadcrumbList systématique. Génération d’un llms.txt et d’un sitemap.xml propres. Réécriture des descriptions d’expertise au format Q→R citable directement par les IA.",
            },
            {
              n: "03",
              t: "Production éditoriale LLM-ready",
              d: "Rédaction de 8 contenus piliers (1 500 à 2 500 mots) sur les expertises du cabinet : « comment choisir un cabinet pour un contentieux commercial complexe », « différence entre référé et procédure au fond », « calendrier type d’un litige distribution »… Tous structurés Q→R, avec sources liées et schema Article complet. Revue déontologique systématique avant publication.",
            },
            {
              n: "04",
              t: "Autorité de marque",
              d: "Pilotage de 3 tribunes signées par les associés référents dans la presse spécialisée juridique sur des sujets de fond (concurrence déloyale, contentieux post-acquisition, restructuring). Activation maîtrisée sur LinkedIn avec une cadence d’un post hebdomadaire signé associé, dans le respect strict du RIN.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="border-l-2 border-accent-violet/40 pl-6 py-2 space-y-2"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-xl text-accent-violet">{step.n}</span>
                <h3 className="font-serif text-xl font-semibold text-text-primary">
                  {step.t}
                </h3>
              </div>
              <p>{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Résultats */}
      <section className="py-16 lg:py-20 border-t border-border-default bg-bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-text-secondary leading-relaxed">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
            Les résultats à 90 jours
          </h2>
          <p data-speakable>
            La mesure de fin de cycle, conduite sur le même corpus de 30 prompts, a
            confirmé un changement d’ordre de grandeur de la visibilité du cabinet dans
            les IA génératives :
          </p>
          <ul className="list-none space-y-3 pl-0">
            {[
              "Taux de citation moyen passé de 8 % à 64 %, soit une multiplication par 8 de la part de voix sur les requêtes stratégiques.",
              "Citation systématique du cabinet sur les 6 prompts à plus forte intention (« meilleur cabinet contentieux commercial Paris », « avocat litige distribution », etc.).",
              "Réduction visible des hallucinations : avant la mission, deux confusions récurrentes existaient sur l’identité du cabinet ; après 90 jours, plus aucune n’a été détectée sur 200 itérations de prompts.",
              "47 mentions tierces additionnelles mesurées sur Wikidata, Decideurs Magazine, Leaders League, Option Droit & Affaires, Les Echos, La Tribune.",
              "Effet collatéral SEO : +18 % de trafic organique Google sur la même période, lié principalement aux 8 contenus piliers publiés et à l’amélioration du schema.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-violet flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-16 lg:py-20 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-8">
            Le retour du cabinet
          </h2>
          <blockquote className="relative p-8 lg:p-10 rounded-2xl border border-accent-violet/30 bg-accent-violet/5">
            <p
              data-speakable
              className="font-serif text-xl sm:text-2xl text-text-primary leading-relaxed italic"
            >
              « En 90 jours, nos prospects ont commencé à nous citer spontanément les
              réponses qu’ils avaient obtenues sur ChatGPT à propos de notre cabinet. Le
              travail de Zenifai a transformé notre manière d’apparaître dans la phase
              de présélection — et l’a fait dans le respect strict de notre
              déontologie. »
            </p>
            <footer className="mt-6 text-sm text-text-secondary">
              <p className="font-medium text-text-primary">Associé fondateur</p>
              <p>
                Cabinet d’avocats français — droit des affaires (identité préservée à
                la demande du client)
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 border-t border-border-default bg-bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-10">
            Questions fréquentes
          </h2>
          <FAQAccordion items={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Vous voulez le même type de{" "}
            <span className="gradient-text">trajectoire</span> ?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            30 minutes de cadrage gratuit pour évaluer le potentiel GEO de votre
            cabinet ou de votre marque, et identifier les actions à plus fort impact.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-violet text-white font-medium hover:opacity-90 transition-opacity"
          >
            Réserver un cadrage →
          </a>
          <p className="mt-8 text-sm text-text-secondary/60">
            <Link href="/ressources/geo-avocats" className="hover:text-accent-violet">
              ← Lire le guide complet « GEO pour Cabinets d’Avocats »
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
