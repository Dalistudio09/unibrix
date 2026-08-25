import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/logo";
import {
  IconInstagram,
  IconMail,
  IconTelegram,
  IconWhatsApp,
} from "@/components/brand/social-icons";
import { contacts, footer, nav, site } from "@/content";

const contactItems = [
  {
    ...contacts.instagram,
    icon: IconInstagram,
  },
  {
    ...contacts.telegramBot,
    icon: IconTelegram,
  },
  {
    ...contacts.telegram,
    icon: IconTelegram,
  },
  {
    ...contacts.email,
    icon: IconMail,
  },
  {
    ...contacts.phone,
    icon: IconWhatsApp,
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-on-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-5">
          <Logo tone="on-dark" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-navy-muted">
            {footer.blurb}
          </p>
          <p className="mt-6 text-sm text-on-navy-muted">{site.domain}</p>
        </div>

        <div className="min-w-0 lg:col-span-3">
          <p className="text-sm font-semibold text-on-navy">Разделы</p>
          <ul className="mt-4 space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={"hash" in item ? item.hash : undefined}
                  className="inline-flex min-h-10 items-center text-sm text-on-navy-muted transition-colors duration-150 hover:text-on-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/apply"
                className="inline-flex min-h-10 items-center text-sm text-on-navy-muted transition-colors duration-150 hover:text-on-navy"
              >
                Оставить заявку
              </Link>
            </li>
          </ul>
        </div>

        <div className="min-w-0 lg:col-span-4">
          <p className="text-sm font-semibold text-on-navy">Контакты</p>
          <ul className="mt-4 space-y-1">
            {contactItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-10 min-w-0 items-center gap-3 text-sm text-on-navy-muted transition-colors duration-150 hover:text-on-navy"
                >
                  <item.icon className="size-4 shrink-0 text-brand" />
                  <span className="min-w-0 truncate">
                    <span className="text-on-navy-muted">{item.label}: </span>
                    <span className="text-on-navy">{item.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-elevated">
        <div className="mx-auto flex max-w-6xl px-4 py-5 sm:px-6">
          <p className="text-xs text-on-navy-muted">{footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
