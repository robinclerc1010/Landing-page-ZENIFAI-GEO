// Source: Custom — footer minimaliste 4 colonnes

import { CALENDLY_URL } from "@/lib/constants";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border-default bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Logo + tagline */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="inline-block font-serif text-xl font-semibold text-text-primary hover:opacity-80 transition-opacity"
              aria-label="Zenifai — retour en haut"
            >
              Zenifai<span className="text-accent-violet">•</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              L&apos;agence GEO qui fait citer votre marque par les IA.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium tracking-widest uppercase text-text-secondary/60">
              Services
            </h4>
            <ul className="space-y-2.5" role="list">
              {[
                ["Audit de visibilité IA", "#services"],
                ["Stratégie & Consulting GEO", "#services"],
                ["Optimisation de contenu", "#services"],
                ["Autorité & Mentions", "#services"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ressources */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium tracking-widest uppercase text-text-secondary/60">
              Ressources
            </h4>
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href="/ressources/geo-avocats"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  GEO pour cabinets d&apos;avocats
                </a>
              </li>
              {[
                "Lexique GEO",
                "Case studies",
                "Newsletter IA",
              ].map((label) => (
                <li key={label}>
                  <span className="text-sm text-text-secondary/40 cursor-not-allowed select-none">
                    {label} <span className="text-[10px] ml-1 text-accent-violet/50">bientôt</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium tracking-widest uppercase text-text-secondary/60">
              Contact
            </h4>
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href="mailto:robin@zenifai.ai"
                  className="text-sm text-text-secondary hover:text-accent-violet transition-colors duration-200 cursor-pointer"
                >
                  robin@zenifai.ai
                </a>
              </li>
              <li>
                <a
                  href="mailto:louis@zenifai.ai"
                  className="text-sm text-text-secondary hover:text-accent-violet transition-colors duration-200 cursor-pointer"
                >
                  louis@zenifai.ai
                </a>
              </li>
              <li>
                {/* TODO: remplacer par vrai lien LinkedIn */}
                <a
                  href="#"
                  className="text-sm text-text-secondary hover:text-accent-violet transition-colors duration-200 cursor-pointer"
                  aria-label="Zenifai sur LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-violet hover:text-[#A78BFA] transition-colors duration-200 cursor-pointer"
                  aria-label="Réserver un audit gratuit sur Calendly"
                >
                  Réserver un audit →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary/40">
          <p>© {year} Zenifai. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            {/* TODO: ajouter vraies pages légales */}
            <span className="cursor-not-allowed opacity-50">Mentions légales</span>
            <span className="cursor-not-allowed opacity-50">Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
