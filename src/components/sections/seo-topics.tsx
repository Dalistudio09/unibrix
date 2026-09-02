import { Section } from "@/components/section";
import { homeSections } from "@/content";

export function SeoTopics() {
  return (
    <Section className="bg-paper-elevated">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {homeSections.h2s.map((item) => (
          <article key={item.id} id={item.id} className="min-w-0">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
