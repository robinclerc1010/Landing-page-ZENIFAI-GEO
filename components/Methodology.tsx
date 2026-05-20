"use client";

// Source: Custom Framer Motion timeline verticale alternée — inspiré Magic UI Timeline

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/Eyebrow";
import { METHODOLOGY_STEPS } from "@/lib/constants";

export default function Methodology() {
  return (
    <SectionWrapper id="methode" className="py-24 lg:py-32 bg-bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Eyebrow>Méthode</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
            Notre méthode en{" "}
            <span className="italic font-light text-accent-violet/95">6 étapes</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
            Une méthodologie propriétaire, pensée de zéro pour les IA génératives —
            pas adaptée du SEO.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet/40 via-accent-violet/20 to-transparent -translate-x-1/2" />

          <div className="space-y-10 lg:space-y-0">
            {METHODOLOGY_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${
                    i > 0 ? "lg:mt-[-20px]" : ""
                  }`}
                >
                  {/* Left card (even) */}
                  {isLeft && (
                    <>
                      <div className="lg:text-right">
                        <div className="inline-block rounded-2xl border border-border-default bg-bg-secondary p-6 text-left lg:text-right hover:border-accent-violet/30 hover:shadow-violet-sm transition-all duration-300 w-full lg:w-auto">
                          <div className="flex lg:flex-row-reverse items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent-violet/40 bg-accent-violet/10 flex items-center justify-center">
                              <span className="text-accent-violet text-xs font-bold font-mono">
                                {step.number}
                              </span>
                            </div>
                            <div className="space-y-1.5">
                              <h3 className="font-sans text-base font-semibold text-text-primary">
                                {step.title}
                              </h3>
                              <p className="text-text-secondary text-sm leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-violet border-2 border-bg-primary shadow-[0_0_12px_rgba(124,92,255,0.6)]" />

                      <div className="hidden lg:block" />
                    </>
                  )}

                  {/* Right card (odd) */}
                  {!isLeft && (
                    <>
                      <div className="hidden lg:block" />

                      {/* Center dot */}
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-violet border-2 border-bg-primary shadow-[0_0_12px_rgba(124,92,255,0.6)]" />

                      <div>
                        <div className="inline-block rounded-2xl border border-border-default bg-bg-secondary p-6 hover:border-accent-violet/30 hover:shadow-violet-sm transition-all duration-300 w-full">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent-violet/40 bg-accent-violet/10 flex items-center justify-center">
                              <span className="text-accent-violet text-xs font-bold font-mono">
                                {step.number}
                              </span>
                            </div>
                            <div className="space-y-1.5">
                              <h3 className="font-sans text-base font-semibold text-text-primary">
                                {step.title}
                              </h3>
                              <p className="text-text-secondary text-sm leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
