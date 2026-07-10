import { Shell, Badge } from "../components/Shell";
import { jobs } from "../lib/mock-data";

const statusTone: Record<string, string> = {
  Published: "green",
  Draft: "gray",
  Closed: "red",
};

export default function JobsPage() {
  return (
    <Shell
      title="Jobs"
      subtitle="Manage and track all job postings"
      action={
        <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
          + Create Job
        </button>
      }
    >
      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-3 rounded-xl border border-ink-200 bg-white p-4">
        <input
          placeholder="Search jobs by title or description…"
          className="min-w-[220px] flex-1 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 text-sm outline-none focus:border-brand-400"
        />
        <select className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-600">
          <option>All Statuses</option>
          <option>Published</option>
          <option>Draft</option>
          <option>Closed</option>
        </select>
        <select className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-600">
          <option>All Locations</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>On-site</option>
        </select>
      </div>

      {/* Job cards */}
      <div className="space-y-3">
        {jobs.map((job) => (
          <div key={job.id} className="rounded-xl border border-ink-200 bg-white p-5 transition hover:border-brand-400">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <h3 className="truncate text-lg font-semibold text-ink-900">{job.title}</h3>
                  <Badge tone={statusTone[job.status]}>{job.status}</Badge>
                </div>
                <div className="mt-1 text-sm text-ink-400">{job.department}</div>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-600">
                  <span>📍 {job.location} · {job.type}</span>
                  <span>👥 {job.openings} openings</span>
                  <span className="font-medium text-brand-600">{job.candidates} candidates</span>
                  <span className="text-brand-600">✨ Recommendations</span>
                </div>
                <div className="mt-2 text-xs text-ink-400">
                  Assigned to: Demo Recruiter · Posted {job.posted}
                </div>
              </div>
              <button className="shrink-0 rounded-lg border border-ink-200 px-2 py-1 text-ink-400 hover:bg-ink-100">⋮</button>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}
