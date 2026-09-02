import { Section } from "@/components/section";
import { faq } from "@/content";

export function FaqSection() {
  return (
    <Section id="faq" className="bg-paper">
      <p className="text-sm font-semibold tracking-[0.14em] text-brand">
        {faq.eyebrow}
      </p>
      <span className="mt-3 block h-0.5 w-8 bg-brand" aria-hidden />
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {faq.title}
      </h2>
      <dl className="mt-10 grid gap-4">
        {faq.items.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)]"
          >
            <dt className="font-display text-lg font-semibold text-ink">
              {item.q}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
