// Glossaire GEO — données du lexique (module simple, sans "use client",
// importable par la page serveur pour le schema DefinedTermSet et par le
// composant client d'affichage).

export type LexiconTerm = { term: string; definition: string };
export type LexiconCategory = { id: string; title: string; terms: LexiconTerm[] };

export const LEXIQUE: LexiconCategory[] = [
  {
    id: "fondamentaux",
    title: "Fondamentaux",
    terms: [
      {
        term: "GEO — Generative Engine Optimization",
        definition:
          "Discipline qui consiste à optimiser une marque, ses contenus et ses signaux d'autorité pour être citée et recommandée par les IA génératives. Le GEO est au moteur de réponse ce que le SEO est au moteur de recherche.",
      },
      {
        term: "SEO — Search Engine Optimization",
        definition:
          "Ensemble des techniques visant à améliorer le classement d'un site dans les pages de résultats des moteurs de recherche classiques. Le SEO optimise la position et le clic.",
      },
      {
        term: "AEO — Answer Engine Optimization",
        definition:
          "Terme proche du GEO, centré sur l'optimisation pour les moteurs qui renvoient une réponse directe plutôt qu'une liste de liens. Souvent employé comme synonyme de GEO.",
      },
      {
        term: "LLMO — LLM Optimization",
        definition:
          "Autre variante terminologique désignant l'optimisation pour les grands modèles de langage. GEO reste le terme le plus répandu sur le marché.",
      },
      {
        term: "Moteur de réponse",
        definition:
          "Interface qui renvoie une réponse synthétique et rédigée à une question, plutôt qu'une liste de liens. ChatGPT, Perplexity ou les AI Overviews de Google sont des moteurs de réponse.",
      },
      {
        term: "Recherche générative",
        definition:
          "Façon de chercher de l'information en posant une question en langage naturel à une IA, qui génère une réponse. Elle s'ajoute — et en partie se substitue — à la recherche par mots-clés.",
      },
    ],
  },
  {
    id: "plateformes",
    title: "IA & plateformes",
    terms: [
      {
        term: "LLM — Large Language Model",
        definition:
          "Modèle de langage de grande taille, entraîné sur d'immenses corpus de texte, capable de générer des réponses en langage naturel. ChatGPT, Claude, Gemini reposent sur des LLM.",
      },
      {
        term: "IA générative",
        definition:
          "Catégorie d'intelligence artificielle capable de produire du contenu original — texte, image, code — à partir d'une consigne. Les moteurs de réponse en sont une application.",
      },
      {
        term: "ChatGPT",
        definition:
          "Assistant conversationnel d'OpenAI, l'un des produits numériques les plus utilisés au monde. Il cite les marques via la connaissance de son modèle et via sa recherche web (ChatGPT Search).",
      },
      {
        term: "ChatGPT Search",
        definition:
          "Fonction de recherche web en direct de ChatGPT. Quand une question l'exige, ChatGPT consulte le web, lit des pages et cite ses sources.",
      },
      {
        term: "Perplexity",
        definition:
          "Moteur de réponse qui fonctionne par recherche web en temps réel et cite explicitement ses sources sous chaque réponse. Le moteur le plus transparent et le plus mesurable pour le GEO.",
      },
      {
        term: "Google Gemini",
        definition:
          "Assistant IA de Google, intégré à son écosystème (Workspace, Android, Chrome). Il s'appuie sur les modèles Gemini et sur l'index de Google.",
      },
      {
        term: "Google AI Overviews",
        definition:
          "Réponses générées par l'IA affichées en tête des résultats de recherche Google, produites par des modèles Gemini et ancrées dans l'index de Google.",
      },
      {
        term: "Google AI Mode",
        definition:
          "Mode de recherche conversationnel de Google, où la recherche devient un véritable dialogue avec l'IA, au-delà des AI Overviews.",
      },
      {
        term: "Microsoft Copilot",
        definition:
          "Assistant IA de Microsoft, intégré à Bing, Edge, Windows et Microsoft 365. Il ancre ses réponses web dans l'index de recherche Bing.",
      },
      {
        term: "Claude",
        definition:
          "Assistant IA développé par Anthropic, utilisé aussi bien en conversation directe que via des intégrations professionnelles.",
      },
      {
        term: "RAG — Retrieval-Augmented Generation",
        definition:
          "Technique par laquelle un LLM va chercher des informations externes (recherche web, base documentaire) avant de générer sa réponse, afin de l'ancrer dans des sources à jour.",
      },
      {
        term: "Grounding (ancrage)",
        definition:
          "Fait, pour une IA, d'appuyer sa réponse sur des sources vérifiables récupérées en direct, plutôt que sur sa seule mémoire. L'ancrage réduit les hallucinations.",
      },
      {
        term: "Connaissance paramétrique",
        definition:
          "Connaissance « mémorisée » par un modèle pendant son entraînement, encodée dans ses paramètres. Une marque présente dans cette connaissance peut être citée sans recherche web.",
      },
    ],
  },
  {
    id: "technique",
    title: "Technique & crawlers",
    terms: [
      {
        term: "Crawler IA",
        definition:
          "Robot d'exploration utilisé par une IA pour collecter ou consulter des pages web, que ce soit pour l'entraînement, l'indexation ou la navigation à la demande.",
      },
      {
        term: "robots.txt",
        definition:
          "Fichier à la racine d'un site qui indique aux robots quelles parties ils peuvent explorer. C'est là qu'on autorise — ou bloque — les crawlers des IA.",
      },
      {
        term: "llms.txt",
        definition:
          "Fichier à la racine d'un site qui résume, à destination des IA, la proposition de valeur, les pages clés et le positionnement de la marque.",
      },
      {
        term: "GPTBot",
        definition:
          "Robot d'OpenAI qui collecte des données pour l'entraînement des futurs modèles. L'autoriser, c'est être candidat à la connaissance des prochaines versions de ChatGPT.",
      },
      {
        term: "OAI-SearchBot",
        definition:
          "Robot d'OpenAI qui construit l'index utilisé par ChatGPT Search. L'autoriser rend une marque trouvable lors d'une recherche web dans ChatGPT.",
      },
      {
        term: "Google-Extended",
        definition:
          "Token du robots.txt qui contrôle l'usage du contenu d'un site par les modèles Gemini de Google et leur ancrage.",
      },
      {
        term: "Content-Signal",
        definition:
          "Directive émergente du robots.txt permettant d'exprimer un consentement explicite quant aux usages IA d'un contenu (recherche, entraînement, génération de réponses).",
      },
      {
        term: "IndexNow",
        definition:
          "Protocole soutenu par Microsoft qui notifie instantanément les moteurs lors de la création ou modification d'une page, accélérant l'indexation par Bing.",
      },
      {
        term: "schema.org",
        definition:
          "Vocabulaire de données structurées standardisé permettant de décrire le contenu d'une page de façon lisible par les machines — un signal fort pour les IA et les moteurs.",
      },
      {
        term: "JSON-LD",
        definition:
          "Format recommandé pour intégrer des données structurées schema.org dans une page, sous forme d'un bloc de code distinct du contenu visible.",
      },
      {
        term: "SSR — Server-Side Rendering",
        definition:
          "Rendu d'une page côté serveur, qui garantit que le contenu est présent dans le HTML livré — condition essentielle pour que les crawlers IA lisent réellement le texte.",
      },
    ],
  },
  {
    id: "contenu",
    title: "Contenu & autorité",
    terms: [
      {
        term: "Entité",
        definition:
          "Représentation structurée d'une marque, d'une personne ou d'un concept dans le graphe de connaissances d'une IA. Une entité claire est la condition d'une citation fiable.",
      },
      {
        term: "Knowledge graph",
        definition:
          "Graphe de connaissances reliant des entités et leurs attributs, mobilisé par les IA et les moteurs pour ancrer et désambiguïser les marques.",
      },
      {
        term: "Contenu LLM-ready",
        definition:
          "Contenu structuré pour être facilement extrait, cité et résumé par les modèles : passages auto-suffisants, format question-réponse, données sourcées, schema.org.",
      },
      {
        term: "Citabilité",
        definition:
          "Aptitude d'un contenu à être repris tel quel par une IA dans une réponse. Elle dépend de la clarté, de la structure et de la fiabilité du passage.",
      },
      {
        term: "Passage",
        definition:
          "Unité de contenu qu'une IA extrait d'une page pour construire sa réponse. Les moteurs de réponse citent des passages, pas des pages entières.",
      },
      {
        term: "Format question-réponse (Q→R)",
        definition:
          "Structure de contenu où une question explicite est suivie d'une réponse directe et auto-suffisante — le format le plus facilement repris par les IA.",
      },
      {
        term: "E-E-A-T",
        definition:
          "Critères de qualité — Expérience, Expertise, Autorité, Fiabilité — utilisés pour évaluer la crédibilité d'une source. Un signal pondéré par Google comme par les IA.",
      },
      {
        term: "Autorité tierce",
        definition:
          "Crédibilité d'une marque construite à partir de sources externes qui la mentionnent : presse, communautés, annuaires, Wikipedia. Levier majeur de la connaissance des modèles.",
      },
      {
        term: "Hallucination",
        definition:
          "Information erronée générée par un LLM. En GEO, on cherche à réduire les hallucinations concernant une marque par la consolidation d'entité.",
      },
      {
        term: "Désambiguïsation d'entité",
        definition:
          "Travail consistant à lever toute confusion sur l'identité d'une marque (homonymies, anciennes dénominations) pour que les IA la résolvent sans erreur.",
      },
      {
        term: "sameAs",
        definition:
          "Propriété schema.org qui relie une entité à ses profils officiels (LinkedIn, Wikidata, annuaires). Elle aide les IA à consolider l'identité d'une marque.",
      },
    ],
  },
  {
    id: "mesure",
    title: "Mesure & stratégie",
    terms: [
      {
        term: "Citation IA",
        definition:
          "Mention explicite d'une marque, d'un produit ou d'une source dans une réponse générée par une IA. C'est l'unité de succès du GEO.",
      },
      {
        term: "Part de voix IA",
        definition:
          "Proportion des requêtes d'un marché pour lesquelles une marque est citée par les IA, comparée à ses concurrents. L'indicateur central du GEO.",
      },
      {
        term: "IA Visibility Score™",
        definition:
          "Métrique propriétaire de Zenifai : un score de visibilité IA calculé sur 50 à 200 prompts stratégiques, mesurés mensuellement sur les LLMs majeurs.",
      },
      {
        term: "Prompt",
        definition:
          "Question ou consigne adressée à une IA. En GEO, les prompts cibles sont les questions réelles que posent les prospects d'un marché.",
      },
      {
        term: "Corpus de prompts",
        definition:
          "Ensemble structuré de requêtes représentatives utilisé pour mesurer la visibilité IA d'une marque de façon stable et comparable dans le temps.",
      },
      {
        term: "Hub-and-spoke",
        definition:
          "Architecture de contenu où une page pilier (hub) couvre un sujet large et renvoie vers des pages spécialisées (spokes) qui se relient à elle. Un schéma puissant pour le SEO et le GEO.",
      },
    ],
  },
];

export const LEXIQUE_COUNT = LEXIQUE.reduce((n, c) => n + c.terms.length, 0);
