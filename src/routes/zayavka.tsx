import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { applyPage, lead } from "@/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zayavka")({
  head: () =>
    pageHead({
      title: applyPage.seoTitle,
      description: applyPage.seoDescription,
      path: "/zayavka",
    }),
  component: ZayavkaPage,
});

function ZayavkaPage() {
  return (
    <main>
      <PageHero eyebrow={lead.eyebrow} title={applyPage.h1} intro={applyPage.intro} />
      <Section>
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </Section>
    </main>
  );
}
