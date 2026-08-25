import { Badge } from "@/components/ui/badge";
import { Countdown, usePromoClock } from "@/components/promo/countdown";
import { discountFor, priceAfterDiscount, solutionHasPromo } from "@/lib/promo";
import { formatTenge } from "@/lib/utils";
import type { Solution } from "@/content";
import { cn } from "@/lib/utils";

export function PriceTag({
  solution,
  size = "md",
  showTimer = true,
  className,
}: {
  solution: Solution;
  size?: "sm" | "md" | "lg";
  showTimer?: boolean;
  className?: string;
}) {
  const { live, now } = usePromoClock();
  const clock = now ?? Date.now();
  const hasPromo = live && solutionHasPromo(solution, clock);
  const pct = discountFor(solution.id, clock);

  if (solution.priceFrom == null) {
    return (
      <div className={cn("min-w-0", className)}>
        <p
          className={cn(
            "font-display font-semibold tracking-tight text-ink",
            size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl",
          )}
        >
          индивидуально
        </p>
      </div>
    );
  }

  const current = hasPromo
    ? priceAfterDiscount(solution.priceFrom, solution.id, clock)
    : solution.priceFrom;

  return (
    <div className={cn("min-w-0", className)}>
      <div className="flex flex-wrap items-end gap-x-2.5 gap-y-1">
        {hasPromo ? (
          <span
            className={cn(
              "font-medium text-ink-subtle line-through",
              size === "lg" ? "text-base" : "text-sm",
            )}
          >
            {formatTenge(solution.priceFrom)}
          </span>
        ) : null}
        {hasPromo ? (
          <Badge tone="brand" className="mb-0.5">
            −{pct}%
          </Badge>
        ) : null}
      </div>
      <p
        className={cn(
          "font-display font-semibold tracking-tight text-ink",
          size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl",
        )}
      >
        от {formatTenge(current)}
      </p>
      {hasPromo && showTimer ? (
        <p className="mt-1 text-xs text-ink-muted">
          <Countdown className="text-xs" />
        </p>
      ) : null}
    </div>
  );
}
