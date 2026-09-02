import { DemoCard } from "@/components/demo-card";
import { PageHero } from "@/components/page-hero";
import { LeadSection } from "@/components/sections/lead-section";
import { Section } from "@/components/section";
import {
  categories,
  demosByCategory,
  type CategoryId,
} from "@/content";

export function CategoryPage({ id }: { id: CategoryId }) {
  const cat = categories[id];
  const items = demosByCategory(id);

  return (
    <main>
      <PageHero eyebrow={cat.nav} title={cat.h1} intro={cat.intro} />
      <Section>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {cat.h2}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((demo) => (
            <DemoCard key={demo.slug} demo={demo} />
          ))}
        </div>
      </Section>
      <LeadSection defaultNiche={cat.nav} />
    </main>
  );
}
