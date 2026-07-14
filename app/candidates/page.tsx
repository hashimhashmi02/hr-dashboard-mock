import { Shell, StatusPill, Button } from "../components/Shell";
import { Icon } from "../components/Icons";
import { candidates } from "../lib/mock-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

const stages = [
  { key: "Applied", tone: "slate" as const },
  { key: "Shortlisted", tone: "sky" as const },
  { key: "Interview", tone: "amber" as const },
  { key: "Offer", tone: "violet" as const },
  { key: "Hired", tone: "emerald" as const },
];

// Fill each stage with a distributed set of the candidates so the kanban
// board actually has content in every column. In prod this would come from
// the DB grouped by stage.
function distribute() {
  const buckets: Record<string, typeof candidates> = {};
  stages.forEach((s) => (buckets[s.key] = []));
  candidates.forEach((c, i) => {
    // Preserve the candidate's real stage if it lines up with the columns
    if (buckets[c.stage]) {
      buckets[c.stage].push(c);
    } else {
      // Otherwise round-robin across columns for a fuller demo
      buckets[stages[i % stages.length].key].push(c);
    }
  });
  return buckets;
}

export default function CandidatesPage() {
  const buckets = distribute();

  return (
    <Shell
      title="Candidates"
      breadcrumb="Recruiting"
      tabs={[
        { label: "Board", href: "#", active: true },
        { label: "List", href: "#" },
        { label: "Recommendations", href: "#" },
      ]}
      action={
        <>
          <Button variant="ghost" size="sm">
            <Icon.Filter size={12} /> Filter · 2
          </Button>
          <Button variant="primary" size="sm">
            <Icon.Plus size={12} /> Add candidate
          </Button>
        </>
      }
    >
      {/* Compact filter row */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-ink-200 bg-white px-3 py-1.5">
          <Icon.Search size={13} className="text-ink-400" />
          <input
            placeholder="Search by name, email, or skill"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-400"
          />
        </div>
        <select className="rounded-md border border-ink-200 bg-white px-2.5 py-1.5 text-sm text-ink-700">
          <option>All jobs</option>
          <option>Machine Learning Engineer</option>
          <option>Senior Backend Engineer</option>
        </select>
        <select className="rounded-md border border-ink-200 bg-white px-2.5 py-1.5 text-sm text-ink-700">
          <option>All sources</option>
          <option>LinkedIn</option>
          <option>Referral</option>
        </select>
      </div>

      {/* Kanban board */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:grid-cols-5">
        {stages.map((s) => {
          const cards = buckets[s.key];
          return (
            <div key={s.key} className="flex flex-col rounded-lg border border-ink-200 bg-white">
              <div className="flex items-center justify-between border-b border-ink-100 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <StatusPill tone={s.tone}>{s.key}</StatusPill>
                  <span className="tabular text-xs text-ink-500">{cards.length}</span>
                </div>
                <button className="text-ink-400 hover:text-ink-900">
                  <Icon.Plus size={13} />
                </button>
              </div>

              <div className="max-h-[560px] space-y-2 overflow-y-auto p-2">
                {cards.slice(0, 5).map((c) => (
                  <article
                    key={c.id}
                    className="cursor-grab rounded-md border border-ink-200 bg-white p-3 shadow-card transition hover:border-brand-500 hover:shadow-lift"
                  >
                    <div className="flex items-center gap-2">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-100 text-2xs font-semibold text-ink-700">
                        {initials(c.name)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium text-ink-900">
                          {c.name}
                        </div>
                        <div className="truncate text-2xs text-ink-500">
                          {c.role}
                        </div>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between border-t border-ink-100 pt-2 text-2xs">
                      <div className="flex items-center gap-1.5 text-ink-500">
                        <Icon.Sparkle size={10} className="text-brand-600" />
                        <span className="text-ink-700">{c.experience}</span>
                        <span className="text-ink-300">·</span>
                        <span>{c.source}</span>
                      </div>
                      <span
                        className={`tabular rounded px-1.5 py-0.5 font-medium ${
                          c.match >= 85
                            ? "bg-emerald-bg text-emerald-fg"
                            : c.match >= 70
                              ? "bg-amber-bg text-amber-fg"
                              : "bg-rose-bg text-rose-fg"
                        }`}
                      >
                        {c.match}%
                      </span>
                    </div>
                  </article>
                ))}
                {cards.length === 0 && (
                  <div className="grid place-items-center py-6 text-xs text-ink-400">
                    Nothing here yet
                  </div>
                )}
                {cards.length > 5 && (
                  <button className="w-full py-2 text-xs font-medium text-brand-600 hover:underline">
                    Show {cards.length - 5} more →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Shell>
  );
}
