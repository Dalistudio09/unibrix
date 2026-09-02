import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { hero } from "@/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-on-navy">
      <div className="hero-wash pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="min-w-0 lg:col-span-7">
          <h1 className="hero-in font-display text-4xl font-bold tracking-tight text-on-navy sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p
            className="hero-in mt-5 max-w-xl text-lg leading-relaxed text-on-navy-muted sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            {hero.subtitle}
          </p>
          <div
            className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "160ms" }}
          >
            <Button asChild size="lg">
              <a href="#demos">{hero.primaryCta}</a>
            </Button>
            <Button asChild size="lg" variant="navy-outline">
              <Link to="/zayavka">{hero.secondaryCta}</Link>
            </Button>
          </div>
          <p
            className="hero-in mt-8 max-w-xl text-sm leading-relaxed text-on-navy-muted"
            style={{ animationDelay: "240ms" }}
          >
            {hero.note}
          </p>
        </div>
        <div className="relative hidden min-w-0 justify-center lg:col-span-5 lg:flex">
          <img
            src="/brand/mark-light.png"
            alt=""
            width={641}
            height={600}
            className="h-auto w-full max-w-sm"
            draggable={false}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
