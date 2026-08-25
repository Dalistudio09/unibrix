import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.14em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <span className="mx-auto mt-3 block h-0.5 w-8 bg-brand" aria-hidden />
      <h2
        className={cn(
          "mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl",
          tone === "dark" ? "text-on-navy" : "text-ink",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-on-navy-muted" : "text-ink-muted",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
