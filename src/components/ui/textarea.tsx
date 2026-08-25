import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full min-w-0 resize-y rounded-md border border-line bg-paper-elevated px-3.5 py-3 text-base text-ink shadow-[var(--shadow-border)] outline-none transition-[border-color,box-shadow] duration-150 ease-out placeholder:text-ink-subtle focus-visible:border-brand focus-visible:shadow-[0_0_0_3px_var(--color-brand-soft)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
