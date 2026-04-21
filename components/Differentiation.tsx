"use client";

// Source: Custom — 3 piliers avec hover glow cards

import { motion } from "framer-motion";
import { BarChart3, Eye, Trophy } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const PILLARS = [
  {
    icon: BarChart3,
    title: "Méthode propriétaire",
    description:
      "IA Visibility Score™ : l'indicateur de référence pour mesurer votre présence dans les LLMs. Aucun autre acteur ne le propose.",
  },
  {
    icon: Eye,
    title: "Transparence radicale",
    description:
      "Pricing affiché, méthodologie ouverte, résultats mesurés chaque mois. Pas de jargon, pas de promesses floues.",
  },
  {
    icon: Trophy,
    title: "Obsession résultats",
    description:
      "Nous ne facturons pas des livrables, nous facturons de la visibilité IA mesurable. Vos KPIs sont notre KPI.",
  },
];

export default function Differentiation() {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
            Différenciation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
            Pourquoi{" "}
            <span className="gradient-text">Zenifai</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border-default bg-bg-secondary p-6 lg:p-8 space-y-4 cursor-default overflow-hidden transition-all duration-300 hover:border-accent-violet/50 hover:shadow-violet"
              >
                {/* Corner shimmer on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-violet/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative space-y-4">
                  <div className="inline-flex p-3 rounded-xl border border-accent-violet/20 bg-accent-violet/10 group-hover:border-accent-violet/40 group-hover:bg-accent-violet/15 transition-all duration-300">
                    <Icon size={22} className="text-accent-violet" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
