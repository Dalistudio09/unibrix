import { useEffect, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contacts, lead } from "@/content";
import { trackLead } from "@/lib/analytics";
import { saveLead } from "@/lib/leads";
import { submitLead } from "@/lib/submit-lead";
import { cn } from "@/lib/utils";

export function LeadForm({
  defaultNiche = "",
  compact = false,
}: {
  defaultNiche?: string;
  compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [niche, setNiche] = useState(defaultNiche);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    niche?: string;
  }>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [busy, setBusy] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (defaultNiche) setNiche(defaultNiche);
  }, [defaultNiche]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: { name?: string; contact?: string; niche?: string } = {};
    if (name.trim().length < 2) next.name = lead.errors.name;
    if (contact.trim().length < 3) next.contact = lead.errors.contact;
    if (niche.trim().length < 2) next.niche = lead.errors.niche;
    setErrors(next);
    setSubmitError("");
    if (next.name || next.contact || next.niche) return;

    const payload = {
      name: name.trim(),
      contact: contact.trim(),
      niche: niche.trim(),
      comment: comment.trim(),
    };

    setBusy(true);
    try {
      await submitLead({ data: payload });
      saveLead(payload);
      trackLead();
      setStatus("success");
    } catch {
      setSubmitError(
        `Не удалось отправить. Напишите напрямую: ${contacts.telegram.text}`,
      );
    } finally {
      setBusy(false);
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl bg-paper-elevated p-8 shadow-[var(--shadow-border)]"
        role="status"
      >
        <div className="flex size-12 items-center justify-center rounded-md bg-brand-soft text-success">
          <Check className="size-6" strokeWidth={2.2} />
        </div>
        <p className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
          {lead.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl bg-paper-elevated p-6 shadow-[var(--shadow-border)] sm:p-8",
        compact && "p-5 sm:p-6",
      )}
      noValidate
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="lead-name">{lead.fields.name.label}</Label>
          <Input
            id="lead-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={lead.fields.name.placeholder}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <p className="text-sm text-danger">{errors.name}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lead-contact">{lead.fields.contact.label}</Label>
          <Input
            id="lead-contact"
            name="contact"
            autoComplete="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={lead.fields.contact.placeholder}
            aria-invalid={Boolean(errors.contact)}
          />
          {errors.contact ? (
            <p className="text-sm text-danger">{errors.contact}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lead-niche">{lead.fields.niche.label}</Label>
          <Input
            id="lead-niche"
            name="niche"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            placeholder={lead.fields.niche.placeholder}
            aria-invalid={Boolean(errors.niche)}
          />
          {errors.niche ? (
            <p className="text-sm text-danger">{errors.niche}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lead-comment">{lead.fields.comment.label}</Label>
          <Textarea
            id="lead-comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={lead.fields.comment.placeholder}
            rows={4}
          />
        </div>

        {submitError ? (
          <p className="text-sm text-danger" role="alert">
            {submitError}{" "}
            <a
              href={contacts.telegram.href}
              className="font-semibold underline"
              target="_blank"
              rel="noreferrer"
            >
              {contacts.telegram.href}
            </a>
          </p>
        ) : null}

        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={busy}>
          {busy ? "Отправка…" : lead.submit}
        </Button>
        <p className="text-xs leading-relaxed text-ink-subtle">{lead.consent}</p>
      </div>
    </form>
  );
}
