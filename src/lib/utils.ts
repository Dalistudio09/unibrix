import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTenge(amount: number): string {
  return `${new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(amount)}\u00A0₸`;
}
