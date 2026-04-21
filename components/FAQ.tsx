"use client";

// Source: Custom Framer Motion accordion — animations fluides sans Radix

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FAQ_ITEMS } from "@/lib/constants";

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
            open ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
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
            <p className="pb-5 text-text-secondary leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper id="faq" className="py-24 lg:py-32 bg-bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
            FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
            Questions{" "}
            <span className="gradient-text">fréquentes</span>
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
  );
}
