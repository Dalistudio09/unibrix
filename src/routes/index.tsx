import { createFileRoute } from "@tanstack/react-router";
import { CasesSection } from "@/components/sections/cases-section";
import { Hero } from "@/components/sections/hero";
import { LeadSection } from "@/components/sections/lead-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { ValueSection } from "@/components/sections/value-section";
import { site } from "@/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: site.title }, { name: "description", content: site.description }],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <ValueSection />
      <SolutionsSection />
      <ProcessSection />
      <CasesSection />
      <PricingSection />
      <LeadSection />
    </main>
  );
}
