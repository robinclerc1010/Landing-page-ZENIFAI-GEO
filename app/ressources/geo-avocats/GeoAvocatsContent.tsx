"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ChevronRight,
  CalendarCheck,
  FileText,
  Globe,
  Search,
  Award,
  Scale,
  AlertTriangle,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import SectionWrapper from "@/components/ui/SectionWrapper";

// ─── Data ──────────────────────────────────────────────────────────────────────

const TLDR_POINTS = [
  "Les dirigeants de PME et fondateurs de startups utilisent massivement ChatGPT et Perplexity pour identifier un cabinet d'avocats.",
  "Les cabinets ne travaillent quasiment pas leur visibilité sur ces plateformes — fenêtre d'opportunité massive.",
  "Le GEO repose sur 4 piliers : contenu d'autorité, présence sur sources citées par les LLM, structuration sémantique, signaux E-E-A-T.",
  "Premiers résultats mesurables sous 60 à 90 jours, coût d'acquisition très inférieur au SEA juridique.",
];

const PARCOURS_STEPS = [
  {
    step: "01",
    label: "Le besoin",
    desc: "Le dirigeant a un besoin juridique précis : levée de fonds, cession d'entreprise, litige commercial, RGPD.",
    accent: false,
  },
  {
    step: "02",
    label: "La requête IA",
    desc: "Il interroge ChatGPT ou Perplexity et reçoit 3 à 5 cabinets recommandés avec une description de chacun.",
    accent: true,
  },
  {
    step: "03",
    label: "Le contact direct",
    desc: "Il contacte directement ces cabinets. Zéro page Google consultée, zéro comparatif en ligne.",
    accent: false,
  },
];

const PAGE_STATS = [
  {
    value: 78,
    suffix: "%",
    label:
      "des décideurs B2B utilisent les IA génératives au moins une fois par semaine pour des recherches professionnelles",
  },
  {
    value: 4.4,
    suffix: "x",
    decimals: 1,
    label: "valeur d'un visiteur issu d'une IA vs SEO classique",
  },
  {
    staticDisplay: "<5%",
    label:
      "des cabinets d'avocats français ont structuré une stratégie GEO à ce jour",
  },
  {
    value: 90,
    suffix: " jours",
    label:
      "délai moyen pour apparaître dans les recommandations IA sur des requêtes sectorielles",
  },
];

const PILIERS = [
  {
    Icon: FileText,
    number: "01",
    title: "Contenu d'autorité juridique",
    description:
      "Production d'analyses juridiques sur les sujets qui intéressent vos clients cibles : guides levée de fonds, mémos fiscaux, analyses d'arrêts. Publié sur le site du cabinet, les profils LinkedIn des associés et des publications tierces.",
  },
  {
    Icon: Globe,
    number: "02",
    title: "Présence sur sources citées par les LLM",
    description:
      "Activation sur Village Justice, Doctrine, LexisNexis, Les Echos, Option Finance, Maddyness. Tribunes d'associés, interviews, contributions aux classements Legal 500 et Chambers.",
  },
  {
    Icon: Search,
    number: "03",
    title: "Structuration sémantique pour les IA",
    description:
      "Pages services structurées pour la compréhension LLM : schema LegalService, FAQ structurées, entité associés reliée à leurs publications, maillage interne optimisé.",
  },
  {
    Icon: Award,
    number: "04",
    title: "Signaux E-E-A-T renforcés",
    description:
      "Mise en avant des barreaux, certifications, universités d'origine, années de pratique, publications et distinctions. Chaque associé devient une entité de confiance pour les modèles d'IA.",
  },
];

const REQUETES_EXEMPLES = [
  "Meilleur cabinet M&A pour une PME en Île-de-France",
  "Avocat fiscaliste pour dirigeant expatrié aux États-Unis",
  "Cabinet de droit social pour une ETI industrielle",
  "Avocat contentieux commercial spécialisé SaaS",
  "Cabinet juridique pour accompagner une levée de fonds en France",
  "Avocat spécialisé droit de la concurrence à Paris",
  "Cabinet corporate pour restructuration d'entreprise",
  "Avocat RGPD pour scale-up technologique",
  "Cabinet arbitrage international francophone",
  "Avocat propriété intellectuelle pour startup deeptech",
];

const METHODO_STEPS = [
  {
    number: "01",
    title: "Audit de visibilité IA sectorielle",
    description:
      "Test de 50 à 80 prompts d'acquisition clients sur 4 LLMs majeurs. Cartographie de votre présence actuelle vs cabinets concurrents de même taille et positionnement.",
  },
  {
    number: "02",
    title: "Identification des requêtes stratégiques",
    description:
      "Nous identifions avec vous les 20 à 30 requêtes prioritaires qui correspondent à vos clients cibles : taille d'entreprise, secteur, problématique juridique.",
  },
  {
    number: "03",
    title: "Production de contenu d'autorité",
    description:
      "Ghostwriting juridique en collaboration avec vos associés : 3 à 4 contenus par mois (analyses, guides, tribunes). Validation de chaque texte par un associé avant publication.",
  },
  {
    number: "04",
    title: "Activation des sources d'autorité",
    description:
      "Placement sur Village Justice, Doctrine, Les Echos, Option Finance, Maddyness. Accompagnement sur les classements professionnels : Legal 500, Chambers, Décideurs Magazine.",
  },
  {
    number: "05",
    title: "Reporting mensuel",
    description:
      "Dashboard de votre part de voix IA vs 5 cabinets concurrents, évolution mois par mois, nouvelles requêtes gagnées et opportunités identifiées.",
  },
];

const ERREURS = [
  {
    title: "Confondre SEO et GEO",
    desc: "Google et les LLMs n'ont pas les mêmes critères de confiance. Ce qui ranke bien sur Google peut être totalement invisible dans ChatGPT. Les deux disciplines partagent des principes de base, mais diffèrent profondément dans leur logique de citation.",
  },
  {
    title: "Négliger les sources tierces",
    desc: "Un site de cabinet très bien optimisé mais sans présence externe — presse, classements, Village Justice, Doctrine — ne sera jamais cité par les IA. Les LLMs accordent une prime considérable aux entités validées par des sources indépendantes.",
  },
  {
    title: "Produire du contenu promotionnel",
    desc: "Les LLMs pénalisent les contenus auto-élogieux. Le contenu d'expertise factuelle — analyses juridiques, commentaires d'arrêts, guides pratiques — performe infiniment mieux que les plaquettes commerciales.",
  },
  {
    title: "Ignorer la déontologie",
    desc: "Les approches agressives — témoignages clients non conformes, promesses de résultats — peuvent exposer le cabinet à une procédure disciplinaire. Le GEO peut être mis en œuvre dans un cadre entièrement conforme au RIN.",
  },
  {
    title: "Mesurer avec les mauvais KPIs",
    desc: "Le trafic web seul ne dit rien du GEO. Il faut mesurer la part de voix IA, le nombre de requêtes couvertes et les citations dans les réponses LLM — des métriques que les outils SEO classiques ne fournissent pas.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Le GEO est-il compatible avec les règles déontologiques des avocats ?",
    answer:
      "Oui, intégralement, si la stratégie est pensée dans ce cadre. Nous travaillons uniquement sur des contenus d'expertise, des publications factuelles et des signaux d'autorité légitimes — jamais sur des approches promotionnelles non conformes au RIN.",
  },
  {
    question: "Combien de temps avant de voir mon cabinet cité par ChatGPT ?",
    answer:
      "Les premiers signaux apparaissent généralement entre 45 et 90 jours. Une présence stable sur les requêtes stratégiques s'installe sur 4 à 6 mois. Le GEO est un actif durable, pas un levier court-terme.",
  },
  {
    question: "Quels cabinets sont les plus concernés ?",
    answer:
      "Les cabinets d'avocats d'affaires (M&A, corporate, fiscal, social, contentieux commercial) ciblant des dirigeants d'entreprise et fondateurs. Également les cabinets spécialisés (propriété intellectuelle, tech, concurrence) où le prospect effectue des recherches très ciblées.",
  },
  {
    question: "Quel budget prévoir pour une stratégie GEO efficace pour un cabinet ?",
    answer:
      "Nos accompagnements pour cabinets démarrent à 4 200 € HT/mois avec un setup initial. Pour un cabinet qui cible sérieusement un canal d'acquisition long terme, c'est un investissement largement inférieur au SEA juridique ou à un recruteur en développement commercial.",
  },
  {
    question: "Le GEO remplace-t-il le SEO classique ?",
    answer:
      "Non. Le SEO reste essentiel pour les requêtes transactionnelles directes. Le GEO capture une audience différente : des décideurs en amont du parcours, qui cherchent conseil plutôt qu'un prestataire. Les deux se renforcent mutuellement.",
  },
  {
    question: "Puis-je faire du GEO en interne sans agence ?",
    answer:
      "Oui, techniquement. En pratique, cela demande une équipe dédiée — contenu, relations presse, technique SEO, suivi des LLMs — que peu de cabinets ont en interne. Une agence spécialisée apporte la méthode, les outils de tracking et la vitesse d'exécution.",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────────

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border-b transition-colors duration-200 ${
        open ? "border-accent-violet/30" : "border-border-default"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span
          className={`font-sans text-base font-medium transition-colors duration-200 ${
            open
              ? "text-text-primary"
              : "text-text-secondary group-hover:text-text-primary"
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 p-1 rounded-full border transition-all duration-200 ${
            open
              ? "border-accent-violet/40 bg-accent-violet/10 text-accent-violet"
              : "border-border-default text-text-secondary/60 group-hover:border-accent-violet/30"
          }`}
        >
          <Plus size={14} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary leading-relaxed text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────────

export default function GeoAvocatsContent() {
  return (
    <div className="bg-bg-primary">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-1.5 text-xs text-text-secondary/40 mb-8"
          >
            <a href="/" className="hover:text-text-secondary transition-colors">
              Accueil
            </a>
            <ChevronRight size={12} />
            <a
              href="/ressources"
              className="hover:text-text-secondary transition-colors"
            >
              Ressources
            </a>
            <ChevronRight size={12} />
            <span className="text-text-secondary/70">
              GEO pour Cabinets d&apos;Avocats
            </span>
          </nav>

          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-widest uppercase text-accent-violet mb-5"
          >
            Ressources · Expertise sectorielle
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] tracking-tight text-text-primary mb-6"
          >
            Comment les cabinets d&apos;avocats{" "}
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
              gagnent des clients
            </span>{" "}
            via ChatGPT, Perplexity et Gemini
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mb-6"
          >
            Guide stratégique du GEO appliqué aux cabinets d&apos;avocats
            d&apos;affaires et fiscalistes. Comment être recommandé par les IA
            quand un dirigeant cherche un conseil juridique.
          </motion.p>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-secondary/40 mb-8"
          >
            <span>Publié en 2026</span>
            <span>·</span>
            <span>Lecture 12 min</span>
            <span>·</span>
            <span>Par l&apos;équipe Zenifai</span>
          </motion.div>

          {/* CTA discret */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-violet hover:text-[#A78BFA] transition-colors group"
            >
              Réserver un audit GEO gratuit
              <ChevronRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 2. TL;DR ────────────────────────────────────────────────────── */}
      <SectionWrapper className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border-default bg-bg-secondary/50 p-6 lg:p-8">
            <p className="text-xs font-medium tracking-widest uppercase text-accent-violet mb-5">
              En résumé
            </p>
            <ul className="space-y-3">
              {TLDR_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full bg-accent-violet" />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 3. PARCOURS ─────────────────────────────────────────────────── */}
      <SectionWrapper className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tight">
            Le nouveau parcours d&apos;achat{" "}
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
              d&apos;un service juridique
            </span>
          </h2>

          <div className="space-y-4 text-text-secondary leading-relaxed text-sm sm:text-base">
            <p>
              En 2026, quand un dirigeant doit trouver un avocat pour une levée
              de fonds, une cession, un litige commercial ou une question RGPD,
              son premier réflexe n&apos;est plus d&apos;ouvrir Google. Il ouvre
              ChatGPT ou Perplexity.
            </p>
            <p>
              Il pose une question précise —{" "}
              <em className="text-text-primary not-italic">
                &laquo;&nbsp;Quel cabinet pour accompagner une levée Série A en
                France&nbsp;?&nbsp;&raquo;
              </em>{" "}
              — et obtient une réponse structurée avec 3 à 5 cabinets cités, une
              description de leur positionnement, et parfois un lien direct vers
              leur site.
            </p>
            <p>
              Le dirigeant contacte directement les cabinets recommandés. La
              page de résultats Google, les comparatifs en ligne, les annuaires
              juridiques — ils ne sont jamais consultés. Si votre cabinet
              n&apos;apparaît pas dans cette réponse IA, vous êtes invisible
              pour ce prospect.
            </p>
          </div>

          {/* Parcours visuel 3 étapes */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PARCOURS_STEPS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-xl p-5 border ${
                  item.accent
                    ? "border-accent-violet/40 bg-accent-violet/5"
                    : "border-border-default bg-bg-secondary/30"
                }`}
              >
                <span className="text-accent-violet text-xs font-bold font-mono">
                  {item.step}
                </span>
                <h3 className="font-sans text-sm font-semibold text-text-primary mt-2 mb-1.5">
                  {item.label}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 4. STATS ────────────────────────────────────────────────────── */}
      <SectionWrapper className="py-14 px-4 sm:px-6 lg:px-8 bg-bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-medium tracking-widest uppercase text-accent-violet mb-12">
            Pourquoi maintenant pour un cabinet
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {PAGE_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center space-y-2"
              >
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary">
                  {stat.staticDisplay ? (
                    stat.staticDisplay
                  ) : (
                    <AnimatedNumber
                      value={stat.value!}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                  )}
                </div>
                <p className="text-text-secondary/60 text-xs leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 5. SPÉCIFICITÉS ─────────────────────────────────────────────── */}
      <SectionWrapper className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tight">
              Les spécificités du GEO{" "}
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
                pour les cabinets d&apos;avocats
              </span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              Le GEO pour les avocats n&apos;est pas identique à celui
              d&apos;un éditeur SaaS ou d&apos;un e-commerce. Contraintes
              déontologiques, signaux de confiance propres au secteur,
              vocabulaire technique précis : l&apos;approche doit être pensée
              spécifiquement pour le secteur juridique.
            </p>
          </div>

          <div className="space-y-8 divide-y divide-border-default">
            <div className="space-y-2 pt-8 first:pt-0">
              <h3 className="font-sans text-base font-semibold text-text-primary">
                La déontologie encadre la communication
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Les avocats ne communiquent pas comme un éditeur de logiciels.
                Le Règlement Intérieur National (RIN) encadre strictement les
                formes de promotion autorisées. Le GEO doit s&apos;y conformer
                intégralement : privilégier l&apos;expertise à la promotion,
                adopter un ton sobre et factuel, traiter de l&apos;analyse et
                non de promesses de résultat.
              </p>
            </div>

            <div className="space-y-2 pt-8">
              <h3 className="font-sans text-base font-semibold text-text-primary">
                Les signaux de confiance sont cruciaux
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Les LLMs évaluent l&apos;autorité juridique via des critères
                spécifiques : ancienneté du cabinet, barreau de rattachement,
                publications dans des revues spécialisées (Dalloz, Lexis,
                Village Justice, Option Finance), mentions presse et
                classements professionnels (Legal 500, Chambers, Décideurs
                Magazine). Un cabinet sans trace externe visible sur ces
                sources sera systématiquement sous-représenté dans les
                recommandations IA.
              </p>
            </div>

            <div className="space-y-2 pt-8">
              <h3 className="font-sans text-base font-semibold text-text-primary">
                Le vocabulaire et les requêtes sont ultra-spécifiques
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Les prospects ne tapent pas{" "}
                <em className="text-text-primary not-italic">
                  &laquo;&nbsp;meilleur avocat&nbsp;&raquo;
                </em>
                . Ils formulent des requêtes de longue traîne très précises :{" "}
                <em className="text-text-primary not-italic">
                  &laquo;&nbsp;avocat M&amp;A mid-market francophone&nbsp;&raquo;
                </em>
                ,{" "}
                <em className="text-text-primary not-italic">
                  &laquo;&nbsp;fiscaliste pour dirigeant expatrié&nbsp;&raquo;
                </em>
                ,{" "}
                <em className="text-text-primary not-italic">
                  &laquo;&nbsp;cabinet contentieux commercial Paris&nbsp;&raquo;
                </em>
                . Une stratégie GEO efficace cartographie ces requêtes et
                produit les contenus qui y répondent avec autorité.
              </p>
            </div>

            <div className="space-y-2 pt-8">
              <h3 className="font-sans text-base font-semibold text-text-primary">
                La cible décisionnaire est digitalisée
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Les dirigeants qui cherchent un avocat d&apos;affaires
                aujourd&apos;hui — fondateurs, DAF, DG, 30 à 55 ans — sont
                exactement la population qui utilise le plus ChatGPT et
                Perplexity pour leurs recherches professionnelles. Ce ne sont
                pas des utilisateurs grand public : ce sont des adopteurs
                précoces de l&apos;IA dans leur workflow quotidien.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 6. LES 4 PILIERS ────────────────────────────────────────────── */}
      <SectionWrapper className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
              Cadre stratégique
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tight">
              Les 4 piliers du GEO{" "}
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
                pour un cabinet
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PILIERS.map(({ Icon, number, title, description }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border-default bg-bg-secondary p-6 lg:p-8 cursor-default overflow-hidden hover:border-accent-violet/40 hover:shadow-violet-sm transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-violet/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-8 -translate-y-8" />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex p-3 rounded-xl border border-accent-violet/20 bg-accent-violet/10">
                      <Icon size={20} className="text-accent-violet" />
                    </div>
                    <span className="text-accent-violet text-xs font-bold font-mono">
                      {number}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans text-lg font-semibold text-text-primary">
                      {title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 7. REQUÊTES IA ──────────────────────────────────────────────── */}
      <SectionWrapper className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tight">
              Les requêtes IA où vous{" "}
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
                devez apparaître
              </span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              Voici à quoi ressemble le parcours d&apos;un dirigeant qui cherche
              un cabinet via une IA. Ce type d&apos;échange se produit des
              milliers de fois par mois en France.
            </p>
          </div>

          {/* Interface ChatGPT simulée */}
          <div className="rounded-2xl border border-border-default bg-[#0D0D14] overflow-hidden">
            {/* Barre titre */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-default">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-text-secondary/40 ml-2 font-mono">
                ChatGPT
              </span>
            </div>

            <div className="p-5 space-y-5">
              {/* Message utilisateur */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-accent-violet/20 border border-accent-violet/30 rounded-2xl rounded-tr-sm px-4 py-3">
                  <p className="text-sm text-text-primary leading-relaxed">
                    Je suis fondateur d&apos;une SaaS à Paris, on prépare une
                    levée Série A. Quel cabinet d&apos;avocats d&apos;affaires
                    recommandes-tu en France ?
                  </p>
                </div>
              </div>

              {/* Réponse IA */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1A1A2E] border border-border-default flex items-center justify-center mt-0.5">
                  <span className="text-[9px] font-bold text-accent-violet">
                    IA
                  </span>
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Pour une levée Série A en France, voici quelques cabinets
                    reconnus pour leur expertise venture et M&amp;A tech :
                  </p>
                  <div className="space-y-2">
                    {[
                      {
                        name: "Cabinet A",
                        desc: "Spécialisé venture et M&A tech, solide track record Série A et B.",
                        highlight: false,
                      },
                      {
                        name: "Cabinet B",
                        desc: "Reconnu pour les opérations corporate dans l'écosystème startup parisien.",
                        highlight: false,
                      },
                      {
                        name: "Votre cabinet devrait être ici \u2191",
                        desc: "Avec une stratégie GEO, votre cabinet peut figurer dans cette liste.",
                        highlight: true,
                      },
                      {
                        name: "Cabinet C",
                        desc: "Expertise droit des sociétés et financement d'entreprises innovantes.",
                        highlight: false,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`rounded-lg px-3 py-2.5 text-sm border ${
                          item.highlight
                            ? "border-accent-violet/50 bg-accent-violet/10"
                            : "border-border-default bg-bg-secondary/30"
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            item.highlight
                              ? "text-accent-violet"
                              : "text-text-primary"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span className="text-text-secondary/60 ml-2 text-xs">
                          — {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste de requêtes */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-text-secondary/80">
              Exemples de requêtes stratégiques à couvrir :
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {REQUETES_EXEMPLES.map((requete, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-text-secondary/70 bg-bg-secondary/20 rounded-lg px-3 py-2.5 border border-border-default/50"
                >
                  <span className="flex-shrink-0 text-accent-violet/50 mt-0.5 font-serif">
                    &ldquo;
                  </span>
                  <span>{requete}</span>
                  <span className="flex-shrink-0 text-accent-violet/50 font-serif">
                    &rdquo;
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 8. MÉTHODOLOGIE ─────────────────────────────────────────────── */}
      <SectionWrapper className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
              Méthode
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tight">
              Méthodologie Zenifai{" "}
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
                appliquée aux cabinets
              </span>
            </h2>
          </div>

          {/* Timeline verticale */}
          <div className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-accent-violet/40 via-accent-violet/20 to-transparent" />

            <div className="space-y-2">
              {METHODO_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-6"
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-accent-violet/40 bg-bg-primary flex items-center justify-center z-10 relative">
                      <span className="text-accent-violet text-[11px] font-bold font-mono">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-10 space-y-1.5 flex-1 pt-2">
                    <h3 className="font-sans text-base font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 9. RÉSULTATS ────────────────────────────────────────────────── */}
      <SectionWrapper className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tight">
            Résultats{" "}
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
              observés
            </span>
          </h2>

          {/* TODO: remplacer par vrai cas client quand disponible */}
          <div className="rounded-2xl border border-border-default bg-bg-secondary p-6 lg:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex p-2.5 rounded-xl border border-accent-violet/20 bg-accent-violet/10">
                <Scale size={18} className="text-accent-violet" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
                  Cas client anonymisé
                </p>
                <p className="text-text-secondary/60 text-xs mt-0.5">
                  Cabinet d&apos;avocats d&apos;affaires francophone · 18 associés · M&amp;A &amp; Venture
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Visibilité initiale",
                  value: "8 %",
                  sub: "sur 30 requêtes stratégiques",
                  accent: false,
                },
                {
                  label: "Après 4 mois",
                  value: "64 %",
                  sub: "de visibilité IA",
                  accent: true,
                },
                {
                  label: "ROI acquisition",
                  value: "7x",
                  sub: "inférieur au SEA juridique",
                  accent: false,
                },
              ].map((metric, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 border ${
                    metric.accent
                      ? "border-accent-violet/40 bg-accent-violet/5"
                      : "border-border-default bg-bg-primary/40"
                  }`}
                >
                  <p
                    className={`font-serif text-2xl font-semibold ${
                      metric.accent ? "text-accent-violet" : "text-text-primary"
                    }`}
                  >
                    {metric.value}
                  </p>
                  <p className="text-text-secondary/60 text-xs mt-1">
                    {metric.label}
                  </p>
                  <p className="text-text-secondary/40 text-xs">{metric.sub}</p>
                </div>
              ))}
            </div>

            <p className="text-text-secondary/70 text-sm leading-relaxed border-t border-border-default pt-5">
              12 demandes entrantes qualifiées sur 4 mois, mentionnant
              explicitement avoir découvert le cabinet via ChatGPT ou Perplexity.
              Aucune modification du site web — uniquement une stratégie de
              contenu et d&apos;activation de sources tierces.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 10. ERREURS ─────────────────────────────────────────────────── */}
      <SectionWrapper className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary/20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tight">
            Erreurs fréquentes{" "}
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
              à éviter
            </span>
          </h2>

          <div className="space-y-3">
            {ERREURS.map((erreur, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 p-4 lg:p-5 rounded-xl border border-border-default bg-bg-secondary/30"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-red-500/25 bg-red-500/8 flex items-center justify-center mt-0.5">
                  <AlertTriangle size={11} className="text-red-400/60" />
                </div>
                <div className="space-y-1">
                  <p className="text-text-primary text-sm font-semibold">
                    {erreur.title}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {erreur.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 11. FAQ ─────────────────────────────────────────────────────── */}
      <SectionWrapper className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tight">
              Questions{" "}
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
                fréquentes
              </span>
            </h2>
          </div>

          <div>
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 12. CTA FINAL ───────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#130D2A] to-[#0A0A0F]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-violet/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-green/8 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
              Prenez de l&apos;avance
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-text-primary">
              Votre cabinet mérite d&apos;apparaître quand un dirigeant{" "}
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] bg-clip-text text-transparent">
                cherche un avocat.
              </span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto">
              Audit GEO gratuit pour cabinets d&apos;avocats. Nous testons votre
              visibilité sur 30 requêtes IA stratégiques et vous livrons un
              rapport actionnable en 72h.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Réserver mon audit GEO gratuit pour cabinet d'avocats"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent-violet text-white text-lg font-semibold hover:bg-[#6B4BEE] hover:shadow-[0_0_60px_rgba(124,92,255,0.5)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <CalendarCheck size={22} />
              Réserver mon audit
            </a>
            <p className="text-text-secondary/50 text-sm">
              30 minutes · Offert · Livrable en 72h
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 13. ARTICLES LIÉS ───────────────────────────────────────────── */}
      {/* TODO: créer ces articles ultérieurement */}
      <SectionWrapper className="py-14 px-4 sm:px-6 lg:px-8 bg-bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet mb-8">
            À lire aussi
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              "GEO pour SaaS B2B : le guide complet 2026",
              "Comment mesurer la visibilité IA de votre marque",
              "Les 10 erreurs GEO les plus fréquentes",
            ].map((title) => (
              <div
                key={title}
                className="rounded-xl border border-border-default bg-bg-secondary/20 p-5 opacity-40 cursor-not-allowed"
                aria-disabled="true"
              >
                <p className="text-xs font-medium tracking-widest uppercase text-accent-violet/60 mb-2">
                  Bientôt
                </p>
                <p className="text-text-secondary text-sm font-medium leading-snug">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
