import { contacts, faq, site } from "@/content";

function JsonScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${site.url}/#org`,
            name: site.name,
            url: site.url,
            email: contacts.email.text,
            telephone: contacts.phone.text,
            logo: `${site.url}/brand/mark.png`,
            address: {
              "@type": "PostalAddress",
              addressCountry: "KZ",
              addressLocality: "Алматы",
            },
            areaServed: ["KZ", "Алматы", "Астана"],
            sameAs: [
              contacts.instagram.href,
              contacts.telegram.href,
              contacts.telegramBot.href,
            ],
          },
          {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            url: site.url,
            name: site.name,
            inLanguage: "ru",
            publisher: { "@id": `${site.url}/#org` },
          },
        ],
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <JsonScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}
