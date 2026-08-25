export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="border-b border-line bg-paper-elevated">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-semibold tracking-[0.14em] text-brand">{eyebrow}</p>
        <span className="mt-3 block h-0.5 w-8 bg-brand" aria-hidden />
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</p>
      </div>
    </header>
  );
}
