import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PriceTag } from "@/components/price-tag";
import { Section, SectionHeading } from "@/components/section";
import { SolutionIcon } from "@/components/solution-icon";
import { solutions } from "@/content";

export function SolutionsSection() {
  return (
    <Section id="solutions" className="bg-paper-elevated">
      <SectionHeading
        eyebrow="Решения"
        title="Четыре готовых контура — под задачу, не под стек"
        body="CRM, магазин, Mini App или кастом. Карточки в одном спокойном формате: что делает продукт, для кого и сколько стоит старт."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {solutions.map((item) => (
          <article
            key={item.id}
            className="flex min-w-0 flex-col rounded-2xl bg-paper p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)]"
          >
            <SolutionIcon id={item.id} />
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-ink-muted">{item.tagline}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
              {item.summary}
            </p>
            <ul className="mt-5 grid gap-2">
              {item.features.slice(0, 3).map((f) => (
                <li
                  key={f}
                  className="flex min-w-0 gap-2 text-sm leading-snug text-ink"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="min-w-0">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
              <PriceTag solution={item} size="sm" />
              <Link
                to="/solutions"
                hash={item.id}
                className="inline-flex min-h-11 items-center gap-1.5 pr-1 text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-deep"
              >
                Подробнее
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
