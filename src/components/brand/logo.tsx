import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { site } from "@/content";

type LogoProps = {
  tone?: "on-light" | "on-dark";
  className?: string;
};

export function Logo({ tone = "on-light", className }: LogoProps) {
  const mark = tone === "on-dark" ? "/brand/mark-light.png" : "/brand/mark.png";
  const word =
    tone === "on-dark" ? "/brand/wordmark-light.png" : "/brand/wordmark.png";

  return (
    <Link
      to="/"
      aria-label={site.name}
      className={cn(
        "flex min-h-11 min-w-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        className,
      )}
    >
      <img
        src={mark}
        alt=""
        width={76}
        height={72}
        className="h-9 w-auto shrink-0"
        draggable={false}
      />
      <img
        src={word}
        alt={site.name}
        width={200}
        height={57}
        className="h-5 w-auto max-w-[42vw] sm:h-6"
        draggable={false}
      />
    </Link>
  );
}
