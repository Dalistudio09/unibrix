import { createFileRoute, notFound } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadSection } from "@/components/sections/lead-section";
import { demoBySlug, categories } from "@/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/demo/$slug")({
  loader: ({ params }) => {
    const demo = demoBySlug(params.slug);
    if (!demo) throw notFound();
    return demo;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return pageHead({
      title: loaderData.seoTitle,
      description: loaderData.seoDescription,
      path: `/demo/${loaderData.slug}`,
    });
  },
  component: DemoPage,
});

function DemoPage() {
  const demo = Route.useLoaderData();
  const cat = categories[demo.category];

  return (
    <main>
      <header className="border-b border-line bg-navy text-on-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-6">
            <p className="text-sm font-semibold tracking-[0.14em] text-brand">
              {cat.nav}
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-on-navy sm:text-5xl">
              {demo.h1}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-on-navy-muted sm:text-lg">
              {demo.intro}
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={demo.botUrl} target="_blank" rel="noreferrer">
                {demo.cta}
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
          <div className="min-w-0 overflow-hidden rounded-2xl lg:col-span-6">
            <img
              src={demo.image}
              alt={demo.imageAlt}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <article className="min-w-0 rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {demo.painTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{demo.pain}</p>
        </article>
        <article className="min-w-0 rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {demo.demoTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{demo.demo}</p>
          <Button asChild className="mt-6">
            <a href={demo.botUrl} target="_blank" rel="noreferrer">
              {demo.cta}
              <ExternalLink className="size-4" />
            </a>
          </Button>
        </article>
      </section>

      <LeadSection defaultNiche={demo.line} />
    </main>
  );
}
