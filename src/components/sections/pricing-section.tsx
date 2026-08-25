import { Link } from "@tanstack/react-router";
import { PriceTag } from "@/components/price-tag";
import { Section, SectionHeading } from "@/components/section";
import { Button } from "@/components/ui/button";
import { pricing, solutions } from "@/content";

export function PricingSection() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        body={pricing.body}
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {solutions.map((item) => (
          <article
            key={item.id}
            className="flex min-w-0 flex-col rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)]"
          >
            <h3 className="font-display text-lg font-bold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{item.timeline}</p>
            <div className="mt-5">
              <PriceTag solution={item} />
            </div>
            <ul className="mt-6 flex-1 space-y-2">
              {item.includes.slice(0, 5).map((line) => (
                <li
                  key={line}
                  className="flex min-w-0 gap-2 text-sm leading-snug text-ink-muted"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="min-w-0">{line}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 w-full">
              <Link to="/apply" search={{ solution: item.id }}>
                Выбрать
              </Link>
            </Button>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-subtle">
        {pricing.footnote}
      </p>
    </Section>
  );
}
