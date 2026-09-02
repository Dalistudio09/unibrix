import { Link } from "@tanstack/react-router";
import { DemoCard } from "@/components/demo-card";
import { Section } from "@/components/section";
import {
  categories,
  categoryOrder,
  demosByCategory,
  homeSections,
} from "@/content";

export function DemoGrid() {
  return (
    <Section id="demos" className="bg-paper">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.14em] text-brand">
          {homeSections.demoEyebrow}
        </p>
        <span className="mt-3 block h-0.5 w-8 bg-brand" aria-hidden />
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {homeSections.demoTitle}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {homeSections.demoBody}
        </p>
      </div>

      <div className="mt-12 grid gap-14">
        {categoryOrder.map((id) => {
          const cat = categories[id];
          const items = demosByCategory(id);
          return (
            <section key={id} aria-labelledby={`cat-${id}`}>
              <div className="flex min-w-0 flex-wrap items-end justify-between gap-3">
                <h3
                  id={`cat-${id}`}
                  className="font-display text-2xl font-semibold tracking-tight text-ink"
                >
                  {cat.title}
                </h3>
                <Link
                  to={cat.path}
                  className="text-sm font-semibold text-brand hover:text-brand-deep"
                >
                  Все демо
                </Link>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((demo) => (
                  <DemoCard key={demo.slug} demo={demo} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
