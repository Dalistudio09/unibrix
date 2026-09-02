import { analytics } from "@/content";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ym?: (id: number, method: string, ...rest: unknown[]) => void;
  }
}

export function trackLead(): void {
  try {
    window.gtag?.("event", "lead", { event_category: "form" });
    const raw = analytics.metrikaId || "";
    const id = Number(raw);
    if (id) window.ym?.(id, "reachGoal", "lead");
    window.dispatchEvent(new CustomEvent("unibrix:lead"));
  } catch {
    // analytics must never block the success state
  }
}
