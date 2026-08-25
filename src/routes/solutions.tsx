import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { PriceTag } from "@/components/price-tag";
import { SolutionIcon } from "@/components/solution-icon";
import { Button } from "@/components/ui/button";
import { pages, site, solutions } from "@/content";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: `Решения — ${site.name}` },
      { name: "description", content: pages.solutions.intro },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow={pages.solutions.eyebrow}
        title={pages.solutions.title}
        intro={pages.solutions.intro}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16">
        {solutions.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-32 min-w-0 rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-4">
                <SolutionIcon id={item.id} />
                <div className="min-w-0">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-ink-muted">{item.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-ink-muted">Срок: {item.timeline}</p>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-muted">
              {item.description}
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-ink">Что входит</h3>
                <ul className="mt-3 space-y-2">
                  {item.includes.map((line) => (
                    <li
                      key={line}
                      className="flex min-w-0 gap-2 text-sm leading-snug text-ink-muted"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="min-w-0">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-ink">Для кого</h3>
                <ul className="mt-3 space-y-2">
                  {item.forWhom.map((line) => (
                    <li
                      key={line}
                      className="flex min-w-0 gap-2 text-sm leading-snug text-ink-muted"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="min-w-0">{line}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-6 text-sm font-semibold text-ink">Что умеет</h3>
                <ul className="mt-3 space-y-2">
                  {item.features.map((line) => (
                    <li
                      key={line}
                      className="flex min-w-0 gap-2 text-sm leading-snug text-ink-muted"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="min-w-0">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
              <PriceTag solution={item} size="lg" />
              <Button asChild>
                <Link to="/apply" search={{ solution: item.id }}>
                  Оставить заявку
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
