import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

function Badge({
  className,
  tone = "brand",
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  tone?: "brand" | "navy" | "muted" | "soft";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide",
        tone === "brand" && "bg-brand text-on-brand",
        tone === "navy" && "bg-navy text-on-navy",
        tone === "muted" && "bg-paper text-ink-muted",
        tone === "soft" && "bg-brand-soft text-brand",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
