import { useEffect, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { lead, solutions } from "@/content";
import { saveLead } from "@/lib/leads";
import { cn } from "@/lib/utils";

const options = [
  ...solutions.map((s) => ({ id: s.id, label: s.title })),
  { id: "unsure", label: lead.unsureLabel },
];

export function LeadForm({
  defaultSolution = "",
  compact = false,
}: {
  defaultSolution?: string;
  compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [solutionId, setSolutionId] = useState(defaultSolution);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  useEffect(() => {
    if (defaultSolution) setSolutionId(defaultSolution);
  }, [defaultSolution]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: { name?: string; contact?: string } = {};
    if (name.trim().length < 2) next.name = lead.errors.name;
    if (contact.trim().length < 3) next.contact = lead.errors.contact;
    setErrors(next);
    if (next.name || next.contact) return;

    saveLead({
      name: name.trim(),
      contact: contact.trim(),
      solutionId,
      comment: comment.trim(),
    });
    setStatus("success");
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

        <fieldset className="grid gap-2">
          <legend className="text-sm font-medium text-ink">
            {lead.fields.solution.label}
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {options.map((opt) => {
              const selected = solutionId === opt.id;
              return (
                <label
                  key={opt.id}
                  className={cn(
                    "flex min-h-11 min-w-0 cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition-[border-color,background-color] duration-150",
                    selected
                      ? "border-brand bg-brand-soft text-ink"
                      : "border-line bg-paper-elevated text-ink-muted hover:border-line-strong",
                  )}
                >
                  <input
                    type="radio"
                    name="solution"
                    value={opt.id}
                    checked={selected}
                    onChange={() => setSolutionId(opt.id)}
                    className="sr-only"
                  />
                  <span className="min-w-0 truncate">{opt.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

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

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {lead.submit}
        </Button>
        <p className="text-xs leading-relaxed text-ink-subtle">{lead.consent}</p>
      </div>
    </form>
  );
}
