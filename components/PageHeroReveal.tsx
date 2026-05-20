"use client";

// Hero de page animé et réutilisable.
// Révélation en cascade au chargement (au-dessus de la ligne de flottaison),
// minimaliste. Respecte prefers-reduced-motion.
// data-speakable sur le titre et l'intro pour le schema SpeakableSpecification.

import { motion, useReducedMotion } from "framer-motion";
import ResourceIcon from "@/components/ResourceIcon";
import Eyebrow from "@/components/Eyebrow";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro: string;
  chips?: string[];
  maxWidth?: string;
  icon?: string;
};

export default function PageHeroReveal({
  eyebrow,
  title,
  titleAccent,
  intro,
  chips = [],
  maxWidth = "max-w-4xl",
  icon,
}: Props) {
  const reduce = useReducedMotion();
  const step = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        {icon && (
          <motion.div {...step(0)} className="mb-5">
            <ResourceIcon icon={icon} />
          </motion.div>
        )}
        <motion.div {...step(icon ? 0.06 : 0)} className="mb-5">
          <Eyebrow align="left">{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          {...step(0.08)}
          data-speakable
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="italic font-light text-accent-violet/95">
                {titleAccent}
              </span>
            </>
          )}
        </motion.h1>
        <motion.p
          {...step(0.16)}
          data-speakable
          className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl"
        >
          {intro}
        </motion.p>
        {chips.length > 0 && (
          <motion.div
            {...step(0.24)}
            className="mt-8 flex flex-wrap gap-3 text-xs text-text-secondary/70"
          >
            {chips.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full border border-border-default"
              >
                {c}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
