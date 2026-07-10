import { Shell, Badge } from "../components/Shell";
import { interviews } from "../lib/mock-data";

const statusTone: Record<string, string> = {
  Scheduled: "green",
  Completed: "blue",
  Pending: "amber",
  Cancelled: "red",
};

export default function InterviewsPage() {
  const counts = {
    Scheduled: interviews.filter((i) => i.status === "Scheduled").length,
    Completed: interviews.filter((i) => i.status === "Completed").length,
    Pending: interviews.filter((i) => i.status === "Pending").length,
    Cancelled: interviews.filter((i) => i.status === "Cancelled").length,
  };

  return (
    <Shell
      title="Interviews"
      subtitle="Schedule, track and review interview rounds"
      action={
        <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
          + Schedule Interview
        </button>
      }
    >
      {/* Status summary */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Object.entries(counts).map(([label, value]) => (
          <div key={label} className="rounded-xl border border-ink-200 bg-white p-4">
            <div className="text-sm text-ink-600">{label}</div>
            <div className="mt-1 text-2xl font-bold text-ink-900">{value}</div>
          </div>
        ))}
      </div>

      {/* Interview list */}
      <div className="space-y-3">
        {interviews.map((i) => (
          <div key={i.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink-200 bg-white p-5">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-lg">🗓️</span>
              <div>
                <div className="font-semibold text-ink-900">{i.candidate}</div>
                <div className="text-sm text-ink-400">{i.role}</div>
              </div>
            </div>
            <div className="text-sm text-ink-600">
              <div className="font-medium text-ink-800">{i.round}</div>
              <div className="text-xs text-ink-400">Interviewer: {i.interviewer}</div>
            </div>
            <div className="text-sm text-ink-600">{i.when}</div>
            <Badge tone={statusTone[i.status]}>{i.status}</Badge>
          </div>
        ))}
      </div>
    </Shell>
  );
}
