import { Shell, StatusPill, Button } from "../components/Shell";
import { Icon } from "../components/Icons";
import { interviews } from "../lib/mock-data";

const statusTone: Record<string, "sage" | "iris" | "amber" | "rose" | "slate"> = {
  Scheduled: "sage",
  Completed: "iris",
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

// Parse the mock "when" string into a display day + time. Keeps it deterministic
// on the server, no Date() timezone drama.
function parseWhen(when: string) {
  const [date, time] = when.split("·").map((s) => s.trim());
  return { date, time };
}

function DayHeader({ day, count }: { day: string; count: number }) {
  const [monthDay, year] = day.split(", ");
  return (
    <div className="mb-3 flex items-baseline justify-between">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[22px] font-medium leading-none tracking-tight text-ink-900">
          {monthDay}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-label text-ink-400">
          {year}
        </span>
      </div>
      <span className="font-mono text-[11px] text-ink-400">
        {count} {count === 1 ? "session" : "sessions"}
      </span>
    </div>
  );
}

export default function InterviewsPage() {
  const counts = {
    scheduled: interviews.filter((i) => i.status === "Scheduled").length,
    completed: interviews.filter((i) => i.status === "Completed").length,
    pending: interviews.filter((i) => i.status === "Pending").length,
  };

  // Group by day
  const byDay = interviews.reduce<Record<string, typeof interviews>>((acc, iv) => {
    const { date } = parseWhen(iv.when);
    acc[date] = acc[date] || [];
    acc[date].push(iv);
    return acc;
  }, {});
  const days = Object.entries(byDay);

  return (
    <Shell
      eyebrow="Workspace"
      title="Interviews"
      lede="Every scheduled conversation, on one clean agenda."
      action={
        <>
          <Button variant="ghost">
            <Icon.Filter size={13} /> This week
          </Button>
          <Button variant="primary">
            <Icon.Plus size={13} /> Schedule
          </Button>
        </>
      }
    >
      {/* Summary rail */}
      <div className="mb-8 grid grid-cols-3 divide-x divide-ink-200/70 rounded-2xl border border-ink-200 bg-white">
        {[
          { label: "Scheduled", value: counts.scheduled, tone: "sage" as const },
          { label: "Pending confirm", value: counts.pending, tone: "amber" as const },
          { label: "Completed · 30d", value: counts.completed, tone: "iris" as const },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-4 px-6 py-5">
            <StatusPill tone={s.tone}>&nbsp;</StatusPill>
            <div>
              <div className="metric text-[28px] text-ink-900">{s.value}</div>
              <div className="eyebrow mt-0.5">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Agenda by day */}
      <div className="space-y-10">
        {days.map(([day, list]) => (
          <section key={day}>
            <DayHeader day={day} count={list.length} />
            <div className="card overflow-hidden">
              {list.map((iv, i) => {
                const { time } = parseWhen(iv.when);
                return (
                  <div
                    key={iv.id}
                    className={`grid grid-cols-[76px_1fr_auto] items-center gap-6 px-5 py-4 transition hover:bg-raise ${
                      i > 0 ? "border-t border-ink-100" : ""
                    }`}
                  >
                    {/* Time rail */}
                    <div className="text-right">
                      <div className="font-mono text-[13px] font-medium text-ink-900">
                        {time.split(" ")[0]}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-label text-ink-400">
                        {time.split(" ")[1]}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-canvas font-mono text-[11px] font-medium text-ink-700">
                        {initials(iv.candidate)}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2.5">
                          <p className="truncate text-[14px] font-medium text-ink-900">
                            {iv.candidate}
                          </p>
                          <span className="hidden text-[12px] text-ink-400 md:inline">
                            for {iv.role}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[12.5px] text-ink-500">
                          {iv.round} · with {iv.interviewer}
                        </p>
                      </div>
                    </div>

                    {/* Right side: status + join button */}
                    <div className="flex items-center gap-2">
                      <StatusPill tone={statusTone[iv.status]}>{iv.status}</StatusPill>
                      {iv.status === "Scheduled" && (
                        <button className="flex items-center gap-1 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-[12px] font-medium text-ink-900 hover:border-iris hover:text-iris-ink">
                          Join <Icon.ArrowRight size={12} />
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
