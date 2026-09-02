import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { contacts, lead } from "@/content";
import {
  IconTelegram,
  IconWhatsApp,
} from "@/components/brand/social-icons";

export function LeadSection({ defaultNiche = "" }: { defaultNiche?: string }) {
  return (
    <Section id="zayavka" className="bg-paper-elevated">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <p className="text-sm font-semibold tracking-wide text-brand">
            {lead.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {lead.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {lead.body}
          </p>
          <div className="mt-8 flex flex-col gap-2">
            <a
              href={contacts.telegram.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink hover:text-brand"
            >
              <IconTelegram className="size-4 text-brand" />
              Написать в Telegram · {contacts.telegram.text}
            </a>
            <a
              href={contacts.phone.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink hover:text-brand"
            >
              <IconWhatsApp className="size-4 text-brand" />
              WhatsApp · {contacts.phone.text}
            </a>
          </div>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <LeadForm defaultNiche={defaultNiche} />
        </div>
      </div>
    </Section>
  );
}
