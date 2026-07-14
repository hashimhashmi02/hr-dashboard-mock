import { Shell, StatusPill, Button } from "../components/Shell";
import { Funnel } from "../components/Funnel";
import { Icon } from "../components/Icons";
import { pipeline, interviews, candidates } from "../lib/mock-data";

function Sparkline({ up = true }: { up?: boolean }) {
  const pts = up
    ? "0,18 8,15 16,17 24,12 32,14 40,9 48,10 56,5"
    : "0,7 8,10 16,9 24,13 32,11 40,15 48,14 56,18";
  return (
    <svg width="60" height="22" viewBox="0 0 60 22" aria-hidden>
      <polyline
        points={pts}
        fill="none"
        stroke={up ? "#10b981" : "#f43f5e"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function KpiTile({
  label,
  value,
  suffix,
  delta,
  up,
}: {
  label: string;
  value: string;
  suffix?: string;
  delta: string;
  up: boolean;
}) {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-ink-500">{label}</span>
        <Icon.Chevron size={12} className="rotate-90 text-ink-400" />
      </div>
      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <div className="tabular text-3xl font-semibold tracking-tight text-ink-900">
            {value}
            {suffix && (
              <span className="ml-0.5 text-lg font-normal text-ink-500">{suffix}</span>
            )}
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs">
            <span
              className={`tabular font-medium ${up ? "text-emerald-fg" : "text-rose-fg"}`}
            >
              {up ? "▲" : "▼"} {delta}
            </span>
            <span className="text-ink-400">last 30d</span>
          </div>
        </div>
        <Sparkline up={up} />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const scheduled = interviews.filter((i) => i.status === "Scheduled");
  const recent = candidates.slice(0, 5);

  return (
    <Shell
      title="Overview"
      breadcrumb="Home"
      action={
        <>
          <Button variant="ghost" size="sm">
            <Icon.Filter size={12} /> Last 30 days
          </Button>
          <Button variant="primary" size="sm">
            <Icon.Plus size={12} /> Create job
          </Button>
        </>
      }
    >
      {/* KPI row */}
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <KpiTile label="Candidates in pipeline" value="200" delta="+18" up />
        <KpiTile label="Open roles" value="12" suffix="/ 14" delta="+2" up />
        <KpiTile label="Time to hire" value="24" suffix="d" delta="−3d" up />
        <KpiTile label="Yield rate" value="5.5" suffix="%" delta="+0.4" up />
      </section>

      {/* Funnel + interviews row */}
      <section className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[1.6fr_1fr]">
        <Funnel data={pipeline} />

        {/* Upcoming interviews */}
        <div className="rounded-lg border border-ink-200 bg-white">
          <div className="flex items-center justify-between border-b border-ink-200 px-4 py-3">
            <div>
              <h3 className="text-sm font-medium text-ink-900">Today's interviews</h3>
              <p className="mt-0.5 text-xs text-ink-500">{scheduled.length} scheduled</p>
            </div>
            <button className="text-xs font-medium text-brand-600 hover:underline">
              View all
            </button>
          </div>
          <ul className="divide-y divide-ink-100">
            {scheduled.slice(0, 4).map((iv) => {
              const time = iv.when.split("·")[1]?.trim() ?? "";
              return (
                <li key={iv.id} className="flex items-center gap-3 px-4 py-3">
                  <div className="tabular w-14 shrink-0 text-xs text-ink-500">
                    <div className="font-medium text-ink-900">
                      {time.split(" ")[0]}
                    </div>
                    <div>{time.split(" ")[1]}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink-900">
                      {iv.candidate}
                    </p>
                    <p className="truncate text-xs text-ink-500">
                      {iv.round} · {iv.interviewer}
                    </p>
                  </div>
                  <button className="rounded-md border border-ink-200 bg-white px-2 py-1 text-xs font-medium text-ink-900 hover:border-brand-500 hover:text-brand-700">
                    Join
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Attention items + new applicants */}
      <section className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="rounded-lg border border-ink-200 bg-white">
          <div className="flex items-center justify-between border-b border-ink-200 px-4 py-3">
            <h3 className="text-sm font-medium text-ink-900">Needs attention</h3>
            <span className="tabular text-2xs text-ink-400">3 items</span>
          </div>
          <ul className="divide-y divide-ink-100">
            {[
              {
                tone: "amber" as const,
                pill: "Stalled",
                title: "3 senior candidates in Interview > 9d",
                body: "Median 12d · cohort avg 4d",
              },
              {
                tone: "violet" as const,
                pill: "Insight",
                title: "Referral yield is 3× the site median",
                body: "Consider expanding referral windows",
              },
              {
                tone: "rose" as const,
                pill: "Overdue",
                title: "Offer for T. Mehta expires in 2d",
                body: "Backend Engineer · sent Jul 3",
              },
            ].map((r, i) => (
              <li key={i} className="flex items-start gap-3 px-4 py-3">
                <StatusPill tone={r.tone}>{r.pill}</StatusPill>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-ink-900">{r.title}</p>
                  <p className="mt-0.5 text-xs text-ink-500">{r.body}</p>
                </div>
                <button className="mt-0.5 text-ink-400 hover:text-ink-900">
                  <Icon.ArrowRight size={13} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-ink-200 bg-white">
          <div className="flex items-center justify-between border-b border-ink-200 px-4 py-3">
            <div>
              <h3 className="text-sm font-medium text-ink-900">New applicants</h3>
              <p className="mt-0.5 text-xs text-ink-500">28 this week</p>
            </div>
            <button className="text-xs font-medium text-brand-600 hover:underline">
              View all
            </button>
          </div>
          <ul className="divide-y divide-ink-100">
            {recent.map((c) => (
              <li
                key={c.id}
                className="grid grid-cols-[32px_1fr_auto] items-center gap-3 px-4 py-2.5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-100 text-2xs font-semibold text-ink-700">
                  {c.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink-900">{c.name}</p>
                  <p className="truncate text-xs text-ink-500">{c.role}</p>
                </div>
                <span
                  className={`tabular rounded px-1.5 py-0.5 text-2xs font-medium ${
                    c.match >= 85
                      ? "bg-emerald-bg text-emerald-fg"
                      : c.match >= 70
                        ? "bg-amber-bg text-amber-fg"
                        : "bg-rose-bg text-rose-fg"
                  }`}
                >
                  {c.match}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}
