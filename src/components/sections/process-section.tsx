import { Section, SectionHeading } from "@/components/section";
import { process } from "@/content";

export function ProcessSection() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow={process.eyebrow}
        title={process.title}
        body={process.body}
      />
      <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step) => (
          <li
            key={step.n}
            className="relative min-w-0 rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)]"
          >
            <p className="font-display text-2xl font-bold tabular-nums tracking-tight text-brand">
              {step.n}
            </p>
            <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
