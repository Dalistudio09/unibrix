import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] min-h-11",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-on-brand shadow-[var(--shadow-brand)] hover:bg-brand-deep",
        secondary:
          "bg-paper-elevated text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        outline:
          "border border-brand text-brand bg-paper-elevated hover:bg-brand-soft",
        ghost: "text-brand hover:bg-brand-soft",
        navy: "bg-navy text-on-navy hover:bg-navy-elevated",
        "navy-outline":
          "border border-brand text-on-navy hover:bg-navy-elevated",
      },
      size: {
        md: "px-5 text-sm",
        lg: "px-6 text-base min-h-12",
        sm: "min-h-10 px-3.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
