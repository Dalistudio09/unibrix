import { createServerFn } from "@tanstack/react-start";

export type LeadPayload = {
  name: string;
  contact: string;
  niche: string;
  comment: string;
};

function clean(value: unknown, max: number): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((input: LeadPayload) => {
    const name = clean(input.name, 80);
    const contact = clean(input.contact, 80);
    const niche = clean(input.niche, 120);
    const comment = clean(input.comment, 1000);
    if (name.length < 2) throw new Error("name");
    if (contact.length < 3) throw new Error("contact");
    if (niche.length < 2) throw new Error("niche");
    return { name, contact, niche, comment };
  })
  .handler(async ({ data }) => {
    const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.ADMIN_TELEGRAM_ID?.trim();

    if (!token || !chatId) {
      console.error(
        "[lead] TELEGRAM_BOT_TOKEN or ADMIN_TELEGRAM_ID is not set",
      );
      return { ok: true, delivered: false };
    }

    const text = [
      "Новая заявка с Unibrix.ai",
      "",
      `Имя: ${data.name}`,
      `Контакт: ${data.contact}`,
      `Ниша: ${data.niche}`,
      data.comment ? `Комментарий: ${data.comment}` : "Комментарий: —",
    ].join("\n");

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[lead] telegram send failed", res.status, body.slice(0, 200));
      throw new Error("telegram");
    }

    return { ok: true, delivered: true };
  });
