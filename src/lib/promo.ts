import { promo } from "@/content";

export function promoEndMs(): number {
  return new Date(promo.endsAt).getTime();
}

export function isPromoLive(now = Date.now()): boolean {
  return promo.enabled && now < promoEndMs();
}

export function remainingDays(now = Date.now()): number {
  const ms = Math.max(0, promoEndMs() - now);
  return Math.max(1, Math.ceil(ms / 86_400_000));
}

export function promoBannerText(now = Date.now()): string {
  const n = remainingDays(now);
  const dayWord =
    n % 10 === 1 && n % 100 !== 11
      ? "день"
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? "дня"
        : "дней";
  return `Сейчас скидка ${promo.percent}%. Осталось ${n} ${dayWord}.`;
}
