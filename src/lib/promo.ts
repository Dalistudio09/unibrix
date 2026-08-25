import { promo, type Solution } from "@/content";

export function promoEndMs(): number {
  return new Date(promo.endsAt).getTime();
}

export function isPromoLive(now = Date.now()): boolean {
  return promo.enabled && now < promoEndMs();
}

export function discountFor(id: string, now = Date.now()): number {
  if (!isPromoLive(now)) return 0;
  return promo.discounts[id] ?? 0;
}

export function priceAfterDiscount(
  base: number,
  id: string,
  now = Date.now(),
): number {
  const d = discountFor(id, now);
  if (!d) return base;
  return Math.round((base * (100 - d)) / 100);
}

export type Remaining = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

export function remainingUntil(endMs: number, now = Date.now()): Remaining {
  const totalMs = Math.max(0, endMs - now);
  const totalSec = Math.floor(totalMs / 1000);
  return {
    totalMs,
    days: Math.floor(totalSec / 86400),
    hours: Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
    expired: totalMs <= 0,
  };
}

export function formatRemaining(r: Remaining): string {
  const hh = String(r.hours).padStart(2, "0");
  const mm = String(r.minutes).padStart(2, "0");
  if (r.days > 0) return `${r.days} дн ${hh}:${mm}`;
  if (r.hours > 0) return `${hh}:${mm}`;
  return `${r.minutes} мин`;
}

export function solutionHasPromo(solution: Solution, now = Date.now()): boolean {
  return solution.priceFrom != null && discountFor(solution.id, now) > 0;
}
