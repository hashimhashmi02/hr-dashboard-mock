import { Shell, Badge } from "../components/Shell";
import { overview, pipeline, interviews } from "../lib/mock-data";

function Metric({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  tone: string;
}) {
  const bg: Record<string, string> = {
    blue: "bg-blue-50",
    green: "bg-brand-50",
    teal: "bg-emerald-50",
    amber: "bg-amber-50",
  };
  return (
    <div className={`rounded-xl border border-ink-200 ${bg[tone]} p-5`}>
      <div className="text-sm text-ink-600">{label}</div>
      <div className="mt-2 text-3xl font-bold text-ink-900">{value}</div>
      <div className="mt-1 text-xs text-ink-400">{hint}</div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Shell title="Welcome back, Demo Recruiter!" subtitle="Your role: RECRUITER">
      {/* Metrics */}
      <section className="mb-6">
        <h2 className="mb-3 text-sm font-semibold text-ink-800">Overview Metrics</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Metric label="Total Candidates" value={String(overview.totalCandidates)} hint={`${overview.activeCandidates} active`} tone="blue" />
          <Metric label="Total Jobs" value={String(overview.totalJobs)} hint={`${overview.publishedJobs} published`} tone="green" />
          <Metric label="Avg. Time to Hire" value={overview.avgTimeToHire} hint="Great!" tone="teal" />
          <Metric label="Conversion Rate" value={overview.conversionRate} hint="Applied → Hired" tone="amber" />
        </div>
      </section>

      {/* Quick stats */}
      <section className="mb-6">
        <h2 className="mb-3 text-sm font-semibold text-ink-800">Quick Stats</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { icon: "🗓️", label: "Upcoming Interviews (7 days)", value: overview.upcomingInterviews, cta: "View All" },
            { icon: "📋", label: "Pending Activities", value: overview.pendingActivities, cta: "View All" },
            { icon: "📄", label: "Total Hired", value: overview.totalHired, cta: "View Offers" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-ink-200 bg-white p-5">
              <div className="flex items-start justify-between">
                <span className="text-xl">{s.icon}</span>
                <span className="text-3xl font-bold text-ink-900">{s.value}</span>
              </div>
              <div className="mt-2 text-sm text-ink-600">{s.label}</div>
              <button className="mt-3 w-full rounded-lg border border-ink-200 py-1.5 text-xs font-medium text-ink-600 hover:bg-ink-100">
                {s.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline + upcoming */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="rounded-xl border border-ink-200 bg-white p-5 lg:col-span-3">
          <h2 className="mb-4 text-sm font-semibold text-ink-800">Hiring Pipeline</h2>
          <div className="space-y-3">
            {pipeline.map((p) => {
              const pct = Math.round((p.count / pipeline[0].count) * 100);
              return (
                <div key={p.stage}>
                  <div className="mb-1 flex justify-between text-xs text-ink-600">
                    <span>{p.stage}</span>
                    <span className="font-medium text-ink-900">{p.count}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-ink-100">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-ink-200 bg-white p-5 lg:col-span-2">
          <h2 className="mb-4 text-sm font-semibold text-ink-800">Next Up</h2>
          <div className="space-y-3">
            {interviews.filter((i) => i.status === "Scheduled").map((i) => (
              <div key={i.id} className="flex items-center justify-between rounded-lg border border-ink-100 p-3">
                <div>
                  <div className="text-sm font-medium text-ink-900">{i.candidate}</div>
                  <div className="text-xs text-ink-400">{i.round} · {i.when}</div>
                </div>
                <Badge tone="green">Scheduled</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
