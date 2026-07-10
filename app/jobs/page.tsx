import { Shell, StatusPill, Button } from "../components/Shell";
import { Icon } from "../components/Icons";
import { jobs } from "../lib/mock-data";

const statusTone: Record<string, "sage" | "slate" | "rose"> = {
  Published: "sage",
  Draft: "slate",
  Closed: "rose",
};

// tiny inline sparkline — signals applicant volume trend per job
function Spark({ seed }: { seed: number }) {
  const pts = Array.from({ length: 12 }, (_, i) => {
    const v =
      12 +
      6 * Math.sin(seed + i * 0.9) +
      3 * Math.cos(seed * 1.4 + i * 0.4);
    return `${(i / 11) * 60},${20 - v * 0.8}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 60 24" width="72" height="22" aria-hidden>
      <polyline
        points={pts}
        fill="none"
        stroke="#5b4ce0"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={pts.split(" ").pop()?.split(",")[0]}
        cy={pts.split(" ").pop()?.split(",")[1]}
        r="2"
        fill="#5b4ce0"
      />
    </svg>
  );
}

export default function JobsPage() {
  return (
    <Shell
      eyebrow="Workspace"
      title="Roles"
      lede="Every open requisition, its current pipeline, and who owns it."
      action={
        <>
          <Button variant="ghost">
            <Icon.Filter size={13} /> All statuses
          </Button>
          <Button variant="primary">
            <Icon.Plus size={13} /> Open a role
          </Button>
        </>
      }
    >
      {/* Compact filter row — feels like a search bar in a serious editor */}
      <div className="card mb-6 flex flex-wrap items-center gap-3 p-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-canvas px-3 py-2">
          <Icon.Search size={14} className="text-ink-400" />
          <input
            placeholder="Search roles, departments, requirements…"
            className="min-w-[180px] flex-1 bg-transparent text-[13.5px] outline-none placeholder:text-ink-400"
          />
          <kbd className="rounded border border-ink-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-ink-500">
            /
          </kbd>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-ink-500">
          <span className="eyebrow">Sort</span>
          <select className="rounded-lg border border-ink-200 bg-white px-2 py-1.5 text-[12.5px] text-ink-700 outline-none">
            <option>Newest</option>
            <option>Most candidates</option>
            <option>Time open</option>
          </select>
        </div>
      </div>

      {/* Group heading — makes the list feel curated, not dumped */}
      <div className="mb-3 flex items-baseline justify-between">
        <div className="eyebrow">Active · {jobs.length}</div>
        <div className="text-[12px] text-ink-400">
          <span className="text-ink-700">154</span> total applicants this week
        </div>
      </div>

      {/* Job list — one clean row per role */}
      <div className="card divide-y divide-ink-100 overflow-hidden">
        {jobs.map((job, idx) => (
          <article
            key={job.id}
            className="group grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-6 px-5 py-4 transition hover:bg-raise"
          >
            {/* index number — feels like a table of contents */}
            <span className="w-6 font-mono text-[11px] text-ink-400">
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* title + meta */}
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <h3 className="truncate text-[15px] font-medium text-ink-900">
                  {job.title}
                </h3>
                <StatusPill tone={statusTone[job.status]}>{job.status}</StatusPill>
              </div>
              <div className="mt-1 flex items-center gap-3 text-[12.5px] text-ink-500">
                <span>{job.department}</span>
                <span className="text-ink-200">·</span>
                <span>{job.location}</span>
                <span className="text-ink-200">·</span>
                <span>{job.type}</span>
                <span className="text-ink-200">·</span>
                <span>Posted {job.posted}</span>
              </div>
            </div>

            {/* sparkline */}
            <Spark seed={idx * 1.3 + 1} />

            {/* stats */}
            <div className="text-right">
              <div className="metric text-[22px] text-ink-900">{job.candidates}</div>
              <div className="font-mono text-[9.5px] uppercase tracking-label text-ink-400">
                applicants
              </div>
            </div>
            <div className="text-right">
              <div className="metric text-[22px] text-iris-ink">{job.openings}</div>
              <div className="font-mono text-[9.5px] uppercase tracking-label text-ink-400">
                openings
              </div>
            </div>
          </article>
        ))}
      </div>
    </Shell>
  );
}
