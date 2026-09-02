export type Lead = {
  name: string;
  contact: string;
  niche: string;
  comment: string;
  createdAt: string;
};

const KEY = "unibrix-leads";

export function saveLead(lead: Omit<Lead, "createdAt">): Lead {
  const entry: Lead = { ...lead, createdAt: new Date().toISOString() };
  try {
    const raw = localStorage.getItem(KEY);
    const list: Lead[] = raw ? (JSON.parse(raw) as Lead[]) : [];
    list.push(entry);
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // storage may be unavailable in private mode — the UI still confirms
  }
  return entry;
}
