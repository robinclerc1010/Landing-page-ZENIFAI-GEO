"use client";

// Source: Custom Tailwind bento grid — 3 cards avec hover glow effect

import { TrendingUp, Target, Clock } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const WHY_CARDS = [
  {
    icon: TrendingUp,
    title: "Basculement massif",
    description:
      "Les moteurs conversationnels captent déjà 40% des requêtes informationnelles. La tendance s'accélère chaque trimestre.",
    accent: "violet",
  },
  {
    icon: Target,
    title: "Trafic ultra-qualifié",
    description:
      "Un visiteur venu d'une IA convertit 4,4x mieux qu'un visiteur SEO classique. L'intention est déjà formée.",
    accent: "green",
  },
  {
    icon: Clock,
    title: "Fenêtre d'opportunité",
    description:
      "Le GEO est encore un terrain ouvert. Les marques qui s'y positionnent maintenant construisent une autorité que leurs concurrents mettront des mois à rattraper.",
    accent: "violet",
  },
];

export default function WhyNow() {
  return (
    <SectionWrapper className="py-24 lg:py-32 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
            Pourquoi maintenant
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
            Pourquoi le GEO,{" "}
            <span className="gradient-text">maintenant</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {WHY_CARDS.map((card, i) => {
            const Icon = card.icon;
            const isGreen = card.accent === "green";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`
                  group relative rounded-2xl border p-6 lg:p-8 bg-bg-secondary
                  cursor-default transition-all duration-300
                  ${isGreen
                    ? "border-border-default hover:border-accent-green/40 hover:shadow-green"
                    : "border-border-default hover:border-accent-violet/40 hover:shadow-violet-sm"
                  }
                `}
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isGreen
                      ? "bg-gradient-to-br from-accent-green/5 to-transparent"
                      : "bg-gradient-to-br from-accent-violet/5 to-transparent"
                  }`}
                />

                <div className="relative space-y-4">
                  <div
                    className={`inline-flex p-2.5 rounded-xl border ${
                      isGreen
                        ? "border-accent-green/20 bg-accent-green/10"
                        : "border-accent-violet/20 bg-accent-violet/10"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isGreen ? "text-accent-green" : "text-accent-violet"}
                    />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-text-primary">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {card.description}
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
