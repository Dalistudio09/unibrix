import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-semibold text-brand">404</p>
      <h1 className="mt-3 max-w-md font-display text-3xl font-semibold text-ink">
        Такой страницы нет
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        Проверьте адрес или вернитесь на главную — там живые демо и заявка на расчёт.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link to="/">На главную</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/zayavka">Рассчитать</Link>
        </Button>
      </div>
    </main>
  );
}
