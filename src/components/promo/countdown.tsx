import { useEffect, useState } from "react";
import { promo } from "@/content";
import {
  formatRemaining,
  isPromoLive,
  promoEndMs,
  remainingUntil,
} from "@/lib/promo";
import { cn } from "@/lib/utils";

export function usePromoClock() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 15000);
    return () => window.clearInterval(id);
  }, []);

  const live = now != null ? isPromoLive(now) : isPromoLive();
  const remaining = remainingUntil(promoEndMs(), now ?? Date.now());
  return { now, live, remaining, ready: now != null };
}

export function Countdown({
  className,
  tone = "muted",
  prefix = "До конца акции: ",
}: {
  className?: string;
  tone?: "muted" | "on-brand" | "on-navy";
  prefix?: string;
}) {
  const { remaining, live, ready } = usePromoClock();
  if (!live) return null;

  const time = ready ? formatRemaining(remaining) : "…";

  return (
    <span
      className={cn(
        "inline-flex items-center",
        tone === "muted" && "text-ink-muted",
        tone === "on-brand" && "text-on-brand",
        tone === "on-navy" && "text-on-navy-muted",
        className,
      )}
    >
      {prefix}
      {time}
    </span>
  );
}

export function PromoBanner() {
  const { live } = usePromoClock();
  if (!live) return null;

  return (
    <div className="bg-brand text-on-brand">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm font-medium">
        <span className="min-w-0 sm:hidden">{promo.bannerShort}</span>
        <span className="hidden min-w-0 sm:inline">{promo.banner}</span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <Countdown tone="on-brand" />
      </div>
    </div>
  );
}
