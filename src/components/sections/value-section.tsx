import { Section, SectionHeading } from "@/components/section";
import { value } from "@/content";

export function ValueSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow={value.eyebrow}
        title={value.title}
        body={value.body}
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {value.points.map((point, i) => (
          <article
            key={point.title}
            className="min-w-0 rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)]"
          >
            <p className="font-display text-sm font-bold tabular-nums text-brand">
              0{i + 1}
            </p>
            <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {point.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
