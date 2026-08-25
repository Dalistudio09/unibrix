import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full min-w-0 rounded-md border border-line bg-paper-elevated px-3.5 text-base text-ink shadow-[var(--shadow-border)] outline-none transition-[border-color,box-shadow] duration-150 ease-out placeholder:text-ink-subtle focus-visible:border-brand focus-visible:shadow-[0_0_0_3px_var(--color-brand-soft)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
