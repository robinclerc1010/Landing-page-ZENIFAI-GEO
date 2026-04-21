"use client";

// Source: Custom — grille 3 colonnes avec pain points

import { motion } from "framer-motion";
import { Package, ShoppingBag, Briefcase } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const AUDIENCES = [
  {
    icon: Package,
    title: "B2B SaaS",
    pain: [
      "Vos acheteurs shortlistent via ChatGPT. Vos concurrents sont cités, pas vous.",
      "Votre pipeline se tarit sans comprendre pourquoi.",
      "Votre contenu est excellent — mais les LLMs ne le citent pas.",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce premium",
    pain: [
      "Les IA recommandent des produits. Vos marges élevées exigent un trafic qualifié.",
      "Meta Ads coûte de plus en plus cher pour des résultats décroissants.",
      "Vos concurrents sont recommandés par Perplexity. Pas vous.",
    ],
  },
  {
    icon: Briefcase,
    title: "Services professionnels",
    pain: [
      "Vos prospects demandent \"meilleur X à Paris\" aux IA. Vos confrères apparaissent. Vous, non.",
      "Secteurs : conseil, juridique, santé, finance.",
      "La réputation en ligne ne suffit plus — il faut la crédibilité IA.",
    ],
  },
];

export default function ForWho() {
  return (
    <SectionWrapper className="py-24 lg:py-32 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
            Pour qui
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
            Vous êtes…
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {AUDIENCES.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border-default bg-bg-secondary p-6 lg:p-8 space-y-5 hover:border-accent-violet/30 hover:shadow-violet-sm transition-all duration-300 cursor-default"
              >
                <div className="inline-flex p-2.5 rounded-xl border border-accent-violet/20 bg-accent-violet/10">
                  <Icon size={20} className="text-accent-violet" />
                </div>

                <h3 className="font-sans text-xl font-semibold text-text-primary">
                  {audience.title}
                </h3>

                <ul className="space-y-3">
                  {audience.pain.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-violet/60 mt-2 flex-shrink-0" />
                      <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
