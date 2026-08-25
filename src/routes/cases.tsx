import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { cases, casesBlock, pages, site, solutions } from "@/content";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: `Кейсы — ${site.name}` },
      { name: "description", content: pages.cases.intro },
    ],
  }),
  component: CasesPage,
});

function CasesPage() {
  return (
    <main>
      <PageHero
        eyebrow={pages.cases.eyebrow}
        title={pages.cases.title}
        intro={pages.cases.intro}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16">
        {cases.map((item) => {
          const product = solutions.find((s) => s.id === item.solution);
          return (
            <article
              key={item.id}
              className="min-w-0 rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] sm:p-8"
            >
              <p className="text-xs font-semibold tracking-wide text-brand">
                {product?.title}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {item.industry}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-ink">
                    {casesBlock.labels.problem}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.problem}
                  </p>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-ink">
                    {casesBlock.labels.approach}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.approach}
                  </p>
                </div>
                <div className="min-w-0 rounded-xl bg-paper p-5">
                  <h3 className="text-sm font-semibold text-brand">
                    {casesBlock.labels.result}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {item.result}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
        <div className="flex justify-center pt-4">
          <Button asChild>
            <Link to="/apply">Обсудить похожий запуск</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
