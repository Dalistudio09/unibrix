import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Demo } from "@/content";

export function DemoCard({ demo }: { demo: Demo }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl bg-paper-elevated shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]">
      <Link
        to="/demo/$slug"
        params={{ slug: demo.slug }}
        className="relative block aspect-[4/3] overflow-hidden bg-navy"
      >
        <img
          src={demo.image}
          alt={demo.imageAlt}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          <Link
            to="/demo/$slug"
            params={{ slug: demo.slug }}
            className="hover:text-brand"
          >
            {demo.name}
          </Link>
        </h3>
        <p className="mt-1 min-w-0 text-sm leading-relaxed text-ink-muted">
          {demo.line}
        </p>
        <Button asChild className="mt-5 w-full" size="md">
          <a href={demo.botUrl} target="_blank" rel="noreferrer">
            Открыть в Telegram
            <ExternalLink className="size-4" />
          </a>
        </Button>
      </div>
    </article>
  );
}
