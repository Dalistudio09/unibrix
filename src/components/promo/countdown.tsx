import { useEffect, useState } from "react";
import { isPromoLive, promoBannerText } from "@/lib/promo";

export function usePromoClock() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const live = now != null ? isPromoLive(now) : isPromoLive();
  const text = promoBannerText(now ?? Date.now());
  return { live, text, ready: now != null };
}

export function PromoBanner() {
  const { live, text } = usePromoClock();
  if (!live) return null;

  return (
    <div className="bg-brand text-on-brand">
      <p className="mx-auto max-w-6xl px-4 py-2 text-center text-sm font-medium">
        {text}
      </p>
    </div>
  );
}
