"use client";

// Source: Custom CSS animation — marquee de logos clients

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn("flex overflow-hidden", className)}
      style={{ maskImage: "linear-gradient(to right, transparent, white 80px, white calc(100% - 80px), transparent)" }}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-8 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        aria-hidden
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-8 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
