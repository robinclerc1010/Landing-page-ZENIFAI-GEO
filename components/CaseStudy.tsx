"use client";

// Source: Custom — grand bloc avec glow border animé + number tickers
// TODO: remplacer par vrai case study

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CALENDLY_URL } from "@/lib/constants";

const KPIS = [
  { prefix: "+", value: 100, suffix: "%", label: "Trafic via ChatGPT" },
  { prefix: "", value: 82, suffix: "%", label: "Visibilité requêtes clés" },
  { prefix: "-", value: 40, suffix: "%", label: "Coût d'acquisition" },
];

export default function CaseStudy() {
  return (
    <SectionWrapper id="cas-clients" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-accent-violet/30 bg-bg-secondary overflow-hidden p-8 lg:p-12 shadow-violet"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-accent-violet/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />

          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-violet/20 via-transparent to-accent-green/10 opacity-40" />
          </div>

          <div className="relative space-y-8">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-violet/30 bg-accent-violet/10 text-accent-violet text-xs font-medium tracking-widest uppercase">
              Cas client
              {/* TODO: remplacer par vrai cas client */}
            </span>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
                ×2 de trafic organique via{" "}
                <span className="italic font-light text-accent-violet/95">ChatGPT</span> en 90 jours
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                Pour une marque B2B SaaS francophone, la présence dans les réponses IA
                est passée de 12% à 78% sur ses requêtes stratégiques.
              </p>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 border-y border-border-default">
              {KPIS.map((kpi, i) => (
                <div key={i} className="text-center space-y-1">
                  <AnimatedNumber
                    value={kpi.value}
                    prefix={kpi.prefix}
                    suffix={kpi.suffix}
                    className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold gradient-text"
                    duration={2}
                  />
                  <p className="text-text-secondary text-xs sm:text-sm">{kpi.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Obtenir des résultats similaires — réserver un audit"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent-violet text-white font-medium hover:bg-[#6B4BEE] hover:shadow-violet transition-all duration-200 cursor-pointer"
            >
              Obtenir des résultats similaires
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
