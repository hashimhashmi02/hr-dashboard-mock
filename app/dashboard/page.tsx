import { Shell, StatusPill, Button } from "../components/Shell";
import { Funnel } from "../components/Funnel";
import { Icon } from "../components/Icons";
import { overview, pipeline, interviews, candidates } from "../lib/mock-data";

// Metric block: display serif for the number, mono eyebrow, tiny delta row.
function Metric({
  label,
  value,
  suffix,
  delta,
  trend,
}: {
  label: string;
  value: string;
  suffix?: string;
  delta: string;
  trend: "up" | "down" | "flat";
}) {
  const trendColor = {
    up: "text-sage-fg",
    down: "text-rose-fg",
    flat: "text-ink-400",
  }[trend];
  const TrendIcon = trend === "up" ? Icon.ArrowUp : trend === "down" ? Icon.ArrowDown : Icon.Dot;

  return (
    <div className="flex flex-col justify-between py-6">
      <div className="eyebrow">{label}</div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="metric text-[44px] text-ink-900">{value}</span>
        {suffix && (
          <span className="metric text-[24px] text-ink-400">{suffix}</span>
        )}
      </div>
      <div className={`mt-3 flex items-center gap-1 text-[12px] ${trendColor}`}>
        <TrendIcon size={12} />
        <span className="font-medium">{delta}</span>
        <span className="text-ink-400">vs last 30d</span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const scheduled = interviews.filter((i) => i.status === "Scheduled");
  const recent = candidates.slice(0, 4);

  return (
    <Shell
      eyebrow="Thursday · Jul 10, 2026"
      title="Good morning, Demo."
      lede="Here's where the funnel stands. Three signals need attention today."
      action={
        <>
          <Button variant="ghost">
            <Icon.Filter size={13} /> This month
          </Button>
          <Button variant="primary">
            <Icon.Plus size={13} /> New role
          </Button>
        </>
      }
    >
      {/* ── Metric strip ─────────────────────────────────────────────────── */}
      <section className="card grid grid-cols-2 divide-x divide-ink-200/70 md:grid-cols-4">
        <div className="px-6">
          <Metric label="In pipeline" value="200" delta="+18" trend="up" />
        </div>
        <div className="px-6">
          <Metric label="Open roles" value="12" suffix="/ 14" delta="+2" trend="up" />
        </div>
        <div className="px-6">
          <Metric label="Time to hire" value="24" suffix="d" delta="−3d" trend="up" />
        </div>
        <div className="px-6">
          <Metric label="Yield rate" value="5.5" suffix="%" delta="+0.4" trend="up" />
        </div>
      </section>

      {/* ── The signature: funnel ─────────────────────────────────────────── */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Funnel data={pipeline} />

        {/* Attention deck — the "what needs me" panel */}
        <div className="card flex flex-col">
          <div className="border-b border-ink-100 p-5">
            <div className="flex items-center justify-between">
              <div className="eyebrow">Needs attention</div>
              <span className="font-mono text-[11px] text-ink-400">3 items</span>
            </div>
          </div>
          <ul className="flex-1 divide-y divide-ink-100">
            {[
              {
                tone: "amber",
                pill: "Stalled",
                title: "3 senior candidates in Interview > 9d",
                body: "Median: 12d. Cohort avg is 4d.",
              },
              {
                tone: "iris",
                pill: "Insight",
                title: "Referral yield 3× the site median",
                body: "Suggest expanding referral windows.",
              },
              {
                tone: "rose",
                pill: "Overdue",
                title: "Offer for T. Mehta expires in 2d",
                body: "Backend Eng · sent Jul 3.",
              },
            ].map((row, i) => (
              <li key={i} className="flex items-start gap-3 p-5">
                <div className="pt-0.5">
                  <StatusPill tone={row.tone as "amber" | "iris" | "rose"}>
                    {row.pill}
                  </StatusPill>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-medium leading-snug text-ink-900">
                    {row.title}
                  </p>
                  <p className="mt-1 text-[12.5px] text-ink-500">{row.body}</p>
                </div>
                <button
                  className="mt-0.5 text-ink-400 hover:text-ink-900"
                  aria-label="Open item"
                >
                  <Icon.ArrowRight size={14} />
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-ink-100 p-4">
            <button className="flex w-full items-center justify-center gap-1 text-[12.5px] font-medium text-ink-500 hover:text-ink-900">
              Review all signals <Icon.ArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Today: interviews + new applicants ───────────────────────────── */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Today's interviews */}
        <div className="card p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="eyebrow">Today</div>
              <h3 className="mt-1 font-display text-[20px] font-medium leading-none tracking-tight text-ink-900">
                Interviews
              </h3>
            </div>
            <span className="font-mono text-[11px] text-ink-400">
              {scheduled.length} scheduled
            </span>
          </div>

          <ol className="space-y-1">
            {scheduled.slice(0, 3).map((iv, i) => (
              <li
                key={iv.id}
                className="grid grid-cols-[52px_1fr_auto] items-center gap-3 rounded-lg px-2 py-2.5 transition hover:bg-canvas"
              >
                <div className="text-right font-mono text-[11px] leading-tight text-ink-400">
                  <div className="text-ink-900">
                    {iv.when.split("·")[1]?.trim().slice(0, 5)}
                  </div>
                  <div>{iv.when.split("·")[1]?.trim().slice(-2)}</div>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-medium text-ink-900">
                    {iv.candidate}
                  </p>
                  <p className="truncate text-[12px] text-ink-500">
                    {iv.round} · {iv.interviewer}
                  </p>
                </div>
                <StatusPill tone="sage">Ready</StatusPill>
              </li>
            ))}
          </ol>
        </div>

        {/* Newest applicants */}
        <div className="card p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="eyebrow">New this week</div>
              <h3 className="mt-1 font-display text-[20px] font-medium leading-none tracking-tight text-ink-900">
                Applicants
              </h3>
            </div>
            <span className="font-mono text-[11px] text-ink-400">28 total</span>
          </div>
          <ul className="space-y-1">
            {recent.map((c) => (
              <li
                key={c.id}
                className="grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-canvas"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-canvas font-mono text-[11px] font-medium text-ink-700">
                  {c.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-medium text-ink-900">
                    {c.name}
                  </p>
                  <p className="truncate text-[12px] text-ink-500">{c.role}</p>
                </div>
                <div className="text-right">
                  <div className="metric text-[16px] text-ink-900">{c.match}</div>
                  <div className="font-mono text-[9.5px] uppercase tracking-label text-ink-400">
                    match
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}
