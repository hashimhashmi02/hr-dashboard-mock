import { Shell, StatusPill, Button } from "../components/Shell";
import { Icon } from "../components/Icons";
import { interviews } from "../lib/mock-data";

const statusTone: Record<string, "emerald" | "sky" | "amber" | "rose"> = {
  Scheduled: "emerald",
  Completed: "sky",
  Pending: "amber",
  Cancelled: "rose",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function parseWhen(when: string) {
  const [date, time] = when.split("·").map((s) => s.trim());
  return { date, time };
}

export default function InterviewsPage() {
  const counts = {
    scheduled: interviews.filter((i) => i.status === "Scheduled").length,
    completed: interviews.filter((i) => i.status === "Completed").length,
    pending: interviews.filter((i) => i.status === "Pending").length,
    cancelled: interviews.filter((i) => i.status === "Cancelled").length,
  };

  const byDay = interviews.reduce<Record<string, typeof interviews>>((acc, iv) => {
    const { date } = parseWhen(iv.when);
    acc[date] = acc[date] || [];
    acc[date].push(iv);
    return acc;
  }, {});
  const days = Object.entries(byDay);

  return (
    <Shell
      title="Interviews"
      breadcrumb="Recruiting"
      tabs={[
        { label: "Agenda", href: "#", active: true },
        { label: "Calendar", href: "#" },
        { label: "Feedback queue", href: "#", count: 4 },
      ]}
      action={
        <>
          <Button variant="ghost" size="sm">
            <Icon.Filter size={12} /> This week
          </Button>
          <Button variant="primary" size="sm">
            <Icon.Plus size={12} /> Schedule
          </Button>
        </>
      }
    >
      {/* Status summary strip */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "Scheduled", value: counts.scheduled, dot: "bg-emerald-dot" },
          { label: "Pending confirm", value: counts.pending, dot: "bg-amber-dot" },
          { label: "Completed · 30d", value: counts.completed, dot: "bg-sky-dot" },
          { label: "Cancelled · 30d", value: counts.cancelled, dot: "bg-rose-dot" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-ink-200 bg-white p-3">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
              <span className="text-xs font-medium text-ink-500">{s.label}</span>
            </div>
            <div className="tabular mt-1.5 text-2xl font-semibold text-ink-900">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Agenda by day */}
      <div className="space-y-6">
        {days.map(([day, list]) => (
          <section key={day}>
            <div className="mb-2 flex items-baseline justify-between">
              <h2 className="text-sm font-semibold text-ink-900">{day}</h2>
              <span className="tabular text-xs text-ink-500">
                {list.length} {list.length === 1 ? "session" : "sessions"}
              </span>
            </div>
            <div className="overflow-hidden rounded-lg border border-ink-200 bg-white">
              {list.map((iv, i) => {
                const { time } = parseWhen(iv.when);
                return (
                  <div
                    key={iv.id}
                    className={`grid grid-cols-[64px_1fr_auto] items-center gap-4 px-4 py-3 transition hover:bg-raise ${
                      i > 0 ? "border-t border-ink-100" : ""
                    }`}
                  >
                    <div className="tabular text-right text-xs text-ink-500">
                      <div className="font-medium text-ink-900">
                        {time.split(" ")[0]}
                      </div>
                      <div>{time.split(" ")[1]}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-100 text-2xs font-semibold text-ink-700">
                        {initials(iv.candidate)}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-medium text-ink-900">
                            {iv.candidate}
                          </p>
                          <span className="hidden text-xs text-ink-400 md:inline">
                            · {iv.role}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-ink-500">
                          {iv.round} · with {iv.interviewer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <StatusPill tone={statusTone[iv.status]}>{iv.status}</StatusPill>
                      {iv.status === "Scheduled" && (
                        <button className="rounded-md border border-ink-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-900 hover:border-brand-500 hover:text-brand-700">
                          Join
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}
