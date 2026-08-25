import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { hero } from "@/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-on-navy">
      <div className="hero-wash pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="min-w-0 lg:col-span-7">
          <p className="hero-in text-sm font-semibold tracking-[0.14em] text-brand">
            {hero.eyebrow}
          </p>
          <h1
            className="hero-in mt-4 font-display text-4xl font-bold tracking-tight text-on-navy sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {hero.title}
          </h1>
          <p
            className="hero-in mt-5 max-w-xl text-lg leading-relaxed text-on-navy-muted sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {hero.subtitle}
          </p>
          <div
            className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg">
              <Link to="/apply">{hero.primaryCta}</Link>
            </Button>
            <Button asChild size="lg" variant="navy-outline">
              <Link to="/solutions">{hero.secondaryCta}</Link>
            </Button>
          </div>
          <ul
            className="hero-in mt-10 flex flex-col gap-3 text-sm text-on-navy-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6"
            style={{ animationDelay: "320ms" }}
          >
            {hero.chips.map((chip) => (
              <li key={chip} className="flex min-w-0 items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                <span>{chip}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden min-w-0 justify-center lg:col-span-5 lg:flex">
          <img
            src="/brand/mark-light.png"
            alt=""
            width={812}
            height={768}
            className="h-auto w-full max-w-md"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
