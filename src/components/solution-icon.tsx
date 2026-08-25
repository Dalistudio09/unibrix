import {
  AppWindow,
  Bot,
  Puzzle,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import type { SolutionId } from "@/content";
import { cn } from "@/lib/utils";

const icons: Record<SolutionId, LucideIcon> = {
  crm: Bot,
  shop: ShoppingBag,
  miniapp: AppWindow,
  custom: Puzzle,
};

export function SolutionIcon({
  id,
  className,
}: {
  id: SolutionId;
  className?: string;
}) {
  const Icon = icons[id];
  return (
    <span
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-md bg-brand text-on-brand",
        className,
      )}
    >
      <Icon className="size-5" strokeWidth={1.8} />
    </span>
  );
}
