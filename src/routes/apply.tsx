import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import {
  IconInstagram,
  IconMail,
  IconTelegram,
  IconWhatsApp,
} from "@/components/brand/social-icons";
import { contacts, lead, pages, site } from "@/content";

type ApplySearch = {
  solution?: string;
};

export const Route = createFileRoute("/apply")({
  validateSearch: (search: Record<string, unknown>): ApplySearch => ({
    solution: typeof search.solution === "string" ? search.solution : undefined,
  }),
  head: () => ({
    meta: [
      { title: `Оставить заявку — ${site.name}` },
      { name: "description", content: pages.apply.intro },
    ],
  }),
  component: ApplyPage,
});

const contactItems = [
  { ...contacts.telegram, icon: IconTelegram },
  { ...contacts.telegramBot, icon: IconTelegram },
  { ...contacts.phone, icon: IconWhatsApp },
  { ...contacts.instagram, icon: IconInstagram },
  { ...contacts.email, icon: IconMail },
];

function ApplyPage() {
  const { solution } = Route.useSearch();

  return (
    <main>
      <PageHero
        eyebrow={pages.apply.eyebrow}
        title={pages.apply.title}
        intro={pages.apply.intro}
      />
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <LeadForm defaultSolution={solution ?? ""} />
        </div>
        <aside className="min-w-0 rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] lg:col-span-5 lg:p-8">
          <p className="text-sm font-semibold text-ink">{lead.next.title}</p>
          <ol className="mt-4 space-y-3">
            {lead.next.items.map((item, i) => (
              <li key={item} className="flex min-w-0 gap-3 text-sm text-ink-muted">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-semibold tabular-nums text-ink">
                  {i + 1}
                </span>
                <span className="min-w-0 pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm font-semibold text-ink">Или напишите напрямую</p>
          <ul className="mt-3 space-y-1">
            {contactItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 min-w-0 items-center gap-3 text-sm text-ink-muted transition-colors duration-150 hover:text-ink"
                >
                  <item.icon className="size-4 shrink-0 text-brand" />
                  <span className="min-w-0 truncate">
                    {item.label}: {item.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
