// Eyebrow éditorial — mono, espacé, encadré d'une hairline violette.
// Remplace le pattern Tailwind générique `text-xs tracking-widest uppercase`
// répété ~25 fois sur le site.

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function Eyebrow({
  children,
  align = "center",
  className = "",
}: Props) {
  if (align === "left") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="h-px w-10 bg-accent-violet/45" />
        <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-accent-violet">
          {children}
        </p>
      </div>
    );
  }
  // Centered: hairlines de part et d'autre
  return (
    <p
      className={`inline-flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-accent-violet ${className}`}
    >
      <span className="h-px w-8 bg-accent-violet/45" />
      <span>{children}</span>
      <span className="h-px w-8 bg-accent-violet/45" />
    </p>
  );
}
