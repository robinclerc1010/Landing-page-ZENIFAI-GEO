import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/visibilite-chatgpt";

export const metadata: Metadata = {
  title: "Comment apparaître sur ChatGPT : le guide GEO 2026 | Zenifai",
  description:
    "Méthode complète pour faire citer votre marque par ChatGPT. Comprendre comment ChatGPT sélectionne les marques et optimiser votre visibilité en 6 étapes.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Comment apparaître sur ChatGPT — Zenifai", type: "article" },
};

const faq = [
  {
    question: "Comment ChatGPT choisit-il les marques qu’il cite ?",
    answer:
      "ChatGPT s’appuie sur deux sources : sa connaissance d’entraînement (les marques vues de façon récurrente et cohérente dans son corpus) et ChatGPT Search, sa recherche web en direct qui lit et cite des pages en temps réel. Une marque citée est généralement une marque à la fois bien décrite sur son site et reconnue par des sources tierces.",
  },
  {
    question: "Faut-il un bon SEO pour apparaître dans ChatGPT ?",
    answer:
      "Un bon SEO aide pour le levier ChatGPT Search, qui s’appuie sur une recherche web. Mais ce n’est pas suffisant : ChatGPT privilégie les passages clairs, factuels et structurés en question-réponse. Et la connaissance d’entraînement du modèle, elle, dépend surtout des mentions tierces et de la cohérence d’entité, pas du classement Google.",
  },
  {
    question: "Comment autoriser ChatGPT à accéder à mon site ?",
    answer:
      "OpenAI utilise trois robots : GPTBot (entraînement des futurs modèles), OAI-SearchBot (index de ChatGPT Search) et ChatGPT-User (navigation à la demande). Il faut les autoriser explicitement dans le fichier robots.txt. Bloquer l’un d’eux exclut votre marque du levier correspondant.",
  },
  {
    question: "Combien de temps avant d’apparaître dans ChatGPT ?",
    answer:
      "Pour ChatGPT Search (recherche live), l’impact est rapide : quelques jours à quelques semaines après l’indexation des contenus optimisés. Pour la connaissance d’entraînement du modèle, c’est un jeu de fond : les signaux mettent plusieurs mois à se consolider et n’apparaissent qu’avec les nouvelles versions du modèle.",
  },
  {
    question: "ChatGPT donne des informations fausses sur ma marque, que faire ?",
    answer:
      "Ces hallucinations viennent presque toujours d’une entité de marque floue ou de sources tierces contradictoires. La correction passe par la consolidation d’entité : aligner le nom, la description et les faits clés sur votre site, vos profils, Wikidata et les annuaires, jusqu’à ce que le modèle dispose d’une version cohérente et vérifiable.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment apparaître sur ChatGPT",
  description:
    "Méthode en 6 étapes pour faire citer et recommander une marque par ChatGPT.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Autoriser les robots d’OpenAI",
      text: "Autoriser GPTBot, OAI-SearchBot et ChatGPT-User dans le fichier robots.txt pour être candidat à l’entraînement, à l’index de recherche et à la navigation à la demande.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Consolider l’entité de marque",
      text: "Aligner le nom, la description et les faits clés de la marque sur le site, les profils, Wikidata et les annuaires pour que ChatGPT résolve une entité claire.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Structurer un contenu citable",
      text: "Réécrire les contenus en passages auto-suffisants au format question-réponse, avec données chiffrées sourcées et schema.org.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Couvrir les requêtes de comparaison et d’alternative",
      text: "Publier des pages de comparaison et d’alternative, formats que ChatGPT mobilise pour construire ses recommandations.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Construire l’autorité tierce",
      text: "Obtenir des mentions sur les sources que ChatGPT considère comme fiables : presse, communautés, annuaires sectoriels, Wikipedia/Wikidata.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Mesurer la part de voix et itérer",
      text: "Tester régulièrement un corpus de requêtes dans ChatGPT, mesurer la fréquence de citation et ajuster les contenus.",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment apparaître sur ChatGPT : le guide GEO 2026",
  description:
    "Méthode complète pour faire citer votre marque par ChatGPT, sur ses deux leviers : connaissance d’entraînement et ChatGPT Search.",
  url: URL,
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: { "@type": "Thing", name: "ChatGPT" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
              { name: "Visibilité sur ChatGPT", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        eyebrow="Guide · Plateforme"
        title="Comment apparaître sur"
        titleAccent="ChatGPT"
        intro="800 millions de personnes utilisent ChatGPT chaque semaine pour choisir un outil, un prestataire, une solution. Voici la méthode complète pour que votre marque figure dans ses réponses — sur ses deux leviers : la connaissance du modèle et ChatGPT Search."
        date="Publié en mai 2026"
        readTime="~10 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          ChatGPT n’est plus seulement un assistant conversationnel : c’est devenu un{" "}
          <strong className="text-text-primary">moteur de recommandation</strong>. Quand un
          dirigeant demande « quel est le meilleur outil pour gérer X ? » ou « quelle agence
          choisir pour Y ? », ChatGPT répond par une liste courte de noms. Soit votre marque
          en fait partie, soit elle est absente d’une présélection que vous ne voyez jamais.
        </P>
        <P>
          Apparaître dans ces réponses, c’est l’objet du GEO (Generative Engine
          Optimization). Et pour ChatGPT en particulier, il faut comprendre une chose
          essentielle : le modèle cite les marques de deux façons très différentes.
        </P>

        <H2>Les deux façons dont ChatGPT cite une marque</H2>
        <P>
          C’est la distinction la plus importante à saisir — et celle que la plupart des
          marques ignorent.
        </P>
        <P>
          <strong className="text-text-primary">
            1. La connaissance d’entraînement (mémoire du modèle).
          </strong>{" "}
          ChatGPT a été entraîné sur un immense corpus de texte. Une marque qui y apparaît de
          façon récurrente et cohérente est « connue » du modèle : il peut la citer sans même
          faire de recherche web. C’est un levier de fond, lent à bouger, qui dépend des
          mentions tierces et de la cohérence de votre entité dans le temps.
        </P>
        <P>
          <strong className="text-text-primary">
            2. ChatGPT Search (recherche web en direct).
          </strong>{" "}
          Quand la question l’exige — actualité, requête précise, demande de sources —
          ChatGPT lance une recherche web, lit des pages et cite ses sources sous la réponse.
          Ce levier se rapproche du SEO : il faut être indexé, pertinent et structuré pour
          l’extraction. Son avantage : l’impact d’une optimisation y est rapide.
        </P>
        <P>
          Une stratégie GEO sérieuse travaille les deux. Ignorer le premier, c’est rester
          invisible dès que l’utilisateur ne déclenche pas de recherche. Ignorer le second,
          c’est manquer toutes les requêtes récentes ou précises.
        </P>

        <H2>Les 3 robots d’OpenAI à autoriser</H2>
        <P>
          OpenAI explore le web avec trois agents distincts. Chacun alimente un levier
          différent — et bloquer l’un d’eux, même par inadvertance, vous exclut de ce levier.
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border-default">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-default bg-bg-secondary/40 text-left">
                <th className="p-4 font-medium">Robot</th>
                <th className="p-4 font-medium">Rôle</th>
                <th className="p-4 font-medium text-accent-violet">Si vous l’autorisez</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                [
                  "GPTBot",
                  "Collecte des données pour l’entraînement des futurs modèles.",
                  "Candidat à la connaissance des prochaines versions de ChatGPT.",
                ],
                [
                  "OAI-SearchBot",
                  "Construit l’index utilisé par ChatGPT Search.",
                  "Trouvable lors d’une recherche web dans ChatGPT.",
                ],
                [
                  "ChatGPT-User",
                  "Visite une page en direct quand un utilisateur déclenche une navigation.",
                  "Lisible à la demande, en temps réel.",
                ],
              ].map(([bot, role, ok]) => (
                <tr key={bot} className="border-b border-border-default last:border-0">
                  <td className="p-4 font-medium text-text-primary">{bot}</td>
                  <td className="p-4">{role}</td>
                  <td className="p-4">{ok}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Ces autorisations se déclarent dans le fichier{" "}
          <code className="text-accent-violet">robots.txt</code> à la racine du site. C’est
          le tout premier point à vérifier d’un audit GEO.
        </P>

        <H2>La méthode en 6 étapes</H2>

        <H2>Étape 1 — Autoriser les robots d’OpenAI</H2>
        <P>
          Vérifiez votre <code className="text-accent-violet">robots.txt</code> : GPTBot,
          OAI-SearchBot et ChatGPT-User doivent être explicitement autorisés. Beaucoup de
          sites bloquent ces agents par défaut via un plugin de sécurité ou un CDN — sans le
          savoir.
        </P>

        <H2>Étape 2 — Consolider l’entité de marque</H2>
        <P>
          ChatGPT ne peut recommander une marque que s’il sait précisément qui elle est. Si
          le nom, la description, le secteur ou les fondateurs varient entre votre site,
          LinkedIn, les annuaires et la presse, le modèle hésite — et une marque sur laquelle
          il hésite n’est pas recommandée. La consolidation d’entité aligne tous ces signaux,
          y compris sur Wikidata, pour donner au modèle une version unique et vérifiable.
        </P>

        <H2>Étape 3 — Structurer un contenu citable</H2>
        <P>
          ChatGPT extrait des passages, pas des pages entières. Chaque section utile doit
          répondre à une question précise dès sa première phrase, rester compréhensible hors
          contexte, et s’appuyer sur des données chiffrées avec sources liées. Le format
          question-réponse, les titres explicites et le schema.org rendent un contenu
          nettement plus citable.
        </P>

        <H2>Étape 4 — Couvrir les requêtes de comparaison et d’alternative</H2>
        <P>
          Les questions qui déclenchent une recommandation sont presque toujours
          comparatives : « meilleur outil pour… », « alternative à… », « X ou Y ». Les pages
          de comparaison et d’alternative sont les formats que ChatGPT mobilise le plus pour
          construire ses shortlists. Une marque absente de ces contenus est absente de la
          décision.
        </P>

        <H2>Étape 5 — Construire l’autorité tierce</H2>
        <P>
          C’est le levier qui pèse le plus sur la connaissance d’entraînement du modèle.
          ChatGPT « apprend » une marque à travers les sources qui en parlent : presse
          spécialisée, communautés, annuaires sectoriels, Wikipedia et Wikidata. Une marque
          uniquement présente sur son propre site reste fragile ; une marque mentionnée de
          façon cohérente ailleurs devient une référence stable.
        </P>

        <H2>Étape 6 — Mesurer la part de voix et itérer</H2>
        <P>
          Testez régulièrement, dans ChatGPT, un corpus de requêtes représentatives de votre
          marché. Notez votre fréquence de citation, les marques qui dominent les réponses et
          les éventuelles informations erronées. Cette mesure dans le temps — la part de voix
          IA — est ce qui transforme le GEO en discipline pilotable plutôt qu’en intuition.
        </P>

        <H2>Pourquoi votre marque n’apparaît pas dans ChatGPT</H2>
        <P>Les causes les plus fréquentes que nous identifions en audit :</P>
        <UL
          items={[
            "Les robots d’OpenAI sont bloqués dans le robots.txt — souvent sans que l’entreprise le sache.",
            "L’entité de marque est floue : le modèle confond la marque, le produit, ou une homonymie.",
            "Le contenu est écrit pour Google : pages centrées sur les fonctionnalités, sans passages auto-suffisants ni format question-réponse.",
            "Aucune page de comparaison ni d’alternative — la marque est invisible au moment de la décision.",
            "L’autorité tierce est faible : peu de mentions sur les sources que ChatGPT considère comme fiables.",
          ]}
        />

        <H2>Exemples de requêtes ChatGPT à conquérir</H2>
        <P>
          Le travail commence par lister les questions que vos prospects posent réellement.
          Quelques familles types :
        </P>
        <UL
          items={[
            "Catégorie : « quel est le meilleur logiciel de [votre catégorie] ? »",
            "Alternative : « quelles alternatives à [un concurrent leader] ? »",
            "Cas d’usage : « quel outil pour [problème concret que vous résolvez] ? »",
            "Prestataire : « quelle agence / quel cabinet pour [votre service] ? »",
            "Validation : « [votre marque] est-elle une bonne solution pour [besoin] ? »",
          ]}
        />

        <H2>Par où commencer</H2>
        <P>
          La première étape concrète est un{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          : il mesure votre présence actuelle dans ChatGPT — comme dans Perplexity, Gemini et
          Claude — et identifie les leviers prioritaires.
        </P>
        <P>
          ChatGPT n’est qu’une plateforme parmi d’autres. Pour la vue d’ensemble, consultez
          notre guide pilier{" "}
          <a href="/ressources/visibilite-ia" className="text-accent-violet hover:underline">
            « Comment apparaître dans les réponses des IA »
          </a>
          , et le guide{" "}
          <a href="/ressources/visibilite-perplexity" className="text-accent-violet hover:underline">
            « Comment apparaître sur Perplexity »
          </a>
          .
        </P>
      </ArticleLayout>
    </>
  );
}
