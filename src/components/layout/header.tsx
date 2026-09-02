import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { nav } from "@/content";
import { cn } from "@/lib/utils";

const navItemClass =
  "inline-flex h-9 items-center rounded-md border border-line bg-paper px-3 text-sm font-medium text-ink transition-[color,background-color,border-color] duration-150 hover:border-brand hover:bg-brand-soft hover:text-brand";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-b border-line bg-paper-elevated shadow-[var(--shadow-border)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-2 md:flex" aria-label="Основное">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className={navItemClass}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/zayavka">Рассчитать</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-line bg-paper-elevated md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3"
          aria-label="Мобильное"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-md border border-line bg-paper px-3 text-base font-medium text-ink hover:border-brand hover:bg-brand-soft hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-1 w-full">
            <Link to="/zayavka" onClick={() => setOpen(false)}>
              Рассчитать
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
