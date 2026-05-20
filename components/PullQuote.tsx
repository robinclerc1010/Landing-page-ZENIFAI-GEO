// Pull-quote éditorial — casse les murs de texte des articles longs.
// Citation Fraunces italique avec barre verticale violette.

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  attribution?: string;
};

export default function PullQuote({ children, attribution }: Props) {
  return (
    <figure className="not-prose my-10 pl-6 sm:pl-8 border-l-2 border-accent-violet/60">
      <blockquote className="font-serif text-xl sm:text-2xl italic font-light text-text-primary leading-snug max-w-2xl">
        «&nbsp;{children}&nbsp;»
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-sm text-text-secondary/60">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
