import { createFileRoute } from "@tanstack/react-router";
import { FaqJsonLd } from "@/components/json-ld";
import { DemoGrid } from "@/components/sections/demo-grid";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { LeadSection } from "@/components/sections/lead-section";
import { SeoTopics } from "@/components/sections/seo-topics";
import { site } from "@/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({
    title: site.title,
    description: site.description,
    path: "/",
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <FaqJsonLd />
      <Hero />
      <DemoGrid />
      <SeoTopics />
      <FaqSection />
      <LeadSection />
    </main>
  );
}
