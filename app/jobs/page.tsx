import { Shell, StatusPill, Button } from "../components/Shell";
import { Icon } from "../components/Icons";
import { jobs } from "../lib/mock-data";

const statusTone: Record<string, "emerald" | "slate" | "rose"> = {
  Published: "emerald",
  Draft: "slate",
  Closed: "rose",
};

export default function JobsPage() {
  return (
    <Shell
      title="Jobs"
      breadcrumb="Recruiting"
      tabs={[
        { label: "All", href: "#", active: true, count: jobs.length },
        { label: "Published", href: "#", count: jobs.filter((j) => j.status === "Published").length },
        { label: "Draft", href: "#", count: jobs.filter((j) => j.status === "Draft").length },
        { label: "Closed", href: "#", count: jobs.filter((j) => j.status === "Closed").length },
      ]}
      action={
        <>
          <Button variant="ghost" size="sm">
            <Icon.Filter size={12} /> Filter
          </Button>
          <Button variant="primary" size="sm">
            <Icon.Plus size={12} /> Create job
          </Button>
        </>
      }
    >
      {/* Search bar */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-ink-200 bg-white px-3 py-1.5">
          <Icon.Search size={13} className="text-ink-400" />
          <input
            placeholder="Search by title, department, or hiring manager"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-400"
          />
        </div>
        <select className="rounded-md border border-ink-200 bg-white px-2.5 py-1.5 text-sm text-ink-700">
          <option>Sort: Newest</option>
          <option>Most candidates</option>
          <option>Time open</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-ink-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-200 bg-raise text-left">
                <th className="w-10 px-3 py-2">
                  <input type="checkbox" className="rounded border-ink-300" />
                </th>
                {["Role", "Department", "Location", "Type", "Status", "Applicants", "Openings", "Posted"].map(
                  (h) => (
                    <th
                      key={h}
                      className={`px-3 py-2 text-xs font-medium text-ink-500 ${
                        h === "Applicants" || h === "Openings" ? "text-right" : ""
                      }`}
                    >
                      {h}
                    </th>
                  )
                )}
                <th className="w-10 px-3 py-2" />
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-b border-ink-100 last:border-0 hover:bg-raise"
                >
                  <td className="px-3 py-3">
                    <input type="checkbox" className="rounded border-ink-300" />
                  </td>
                  <td className="px-3 py-3">
                    <div className="font-medium text-ink-900">{job.title}</div>
                  </td>
                  <td className="px-3 py-3 text-ink-700">{job.department}</td>
                  <td className="px-3 py-3 text-ink-700">{job.location}</td>
                  <td className="px-3 py-3 text-ink-700">{job.type}</td>
                  <td className="px-3 py-3">
                    <StatusPill tone={statusTone[job.status]}>{job.status}</StatusPill>
                  </td>
                  <td className="tabular px-3 py-3 text-right text-ink-900">
                    {job.candidates}
                  </td>
                  <td className="tabular px-3 py-3 text-right text-ink-900">
                    {job.openings}
                  </td>
                  <td className="tabular whitespace-nowrap px-3 py-3 text-xs text-ink-500">
                    {job.posted}
                  </td>
                  <td className="px-3 py-3">
                    <button className="text-ink-400 hover:text-ink-900">
                      <Icon.Chevron size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-ink-500">
        <span>
          Showing <span className="text-ink-900">1–{jobs.length}</span> of{" "}
          <span className="text-ink-900">{jobs.length}</span>
        </span>
        <div className="flex items-center gap-1">
          <button className="rounded border border-ink-200 bg-white px-2 py-1 hover:text-ink-900">
            Prev
          </button>
          <button className="rounded border border-ink-200 bg-white px-2 py-1 text-ink-900">
            Next
          </button>
        </div>
      </div>
    </Shell>
  );
}
