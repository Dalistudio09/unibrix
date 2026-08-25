import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Button } from "@/components/ui/button";
import { cases, casesBlock, solutions } from "@/content";

export function CasesSection() {
  return (
    <Section id="cases" className="bg-navy text-on-navy">
      <SectionHeading
        tone="dark"
        eyebrow={casesBlock.eyebrow}
        title={casesBlock.title}
        body={casesBlock.body}
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {cases.map((item) => {
          const product = solutions.find((s) => s.id === item.solution);
          return (
            <article
              key={item.id}
              className="flex min-w-0 flex-col rounded-2xl bg-navy-elevated p-6 shadow-[0_0_0_1px_var(--color-brand)]"
            >
              <p className="text-xs font-semibold tracking-wide text-brand">
                {product?.title}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-on-navy">
                {item.industry}
              </h3>
              <dl className="mt-5 flex flex-1 flex-col gap-4">
                <div className="min-w-0">
                  <dt className="text-xs font-semibold tracking-wide text-on-navy-muted">
                    {casesBlock.labels.problem}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-on-navy-muted">
                    {item.problem}
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold tracking-wide text-on-navy-muted">
                    {casesBlock.labels.approach}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-on-navy">
                    {item.approach}
                  </dd>
                </div>
                <div className="min-w-0 rounded-md bg-navy p-4">
                  <dt className="text-xs font-semibold tracking-wide text-brand">
                    {casesBlock.labels.result}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-on-navy">
                    {item.result}
                  </dd>
                </div>
              </dl>
            </article>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild variant="navy-outline">
          <Link to="/cases">
            Все кейсы
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
