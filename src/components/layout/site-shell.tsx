import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PromoBanner } from "@/components/promo/countdown";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-on-brand"
      >
        К содержанию
      </a>
      <div className="sticky top-0 z-50">
        <PromoBanner />
        <Header />
      </div>
      <div id="content" className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
