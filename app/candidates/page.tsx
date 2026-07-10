import { Shell, StatusPill, Button } from "../components/Shell";
import { Icon } from "../components/Icons";
import { candidates } from "../lib/mock-data";

const stageTone: Record<string, "slate" | "iris" | "amber" | "sage" | "rose"> = {
  Applied: "slate",
  Shortlisted: "iris",
  Interview: "amber",
  Offer: "iris",
  Hired: "sage",
  Rejected: "rose",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

// Match visualisation: a radial arc from 0..100. More informative than a bar
// and it plays nicely at the small size the table needs.
function MatchRing({ value }: { value: number }) {
  const r = 12;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  const color = value >= 85 ? "#3f7357" : value >= 70 ? "#976a1a" : "#9c4560";
  return (
    <div className="flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 30 30">
        <circle cx="15" cy="15" r={r} fill="none" stroke="#efedf1" strokeWidth="3" />
        <circle
          cx="15"
          cy="15"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={c}
          strokeDashoffset={off}
          strokeLinecap="round"
          transform="rotate(-90 15 15)"
        />
      </svg>
      <span className="metric text-[15px] text-ink-900">{value}</span>
    </div>
  );
}

// Stage counts — displayed as a compact tab strip at the top
function StageStrip() {
  const counts: [string, number, string][] = [
    ["All", 200, "slate"],
    ["Applied", 87, "slate"],
    ["Shortlisted", 42, "iris"],
    ["Interview", 41, "amber"],
    ["Offer", 18, "iris"],
    ["Hired", 11, "sage"],
    ["Rejected", 1, "rose"],
  ];
  return (
    <div className="mb-6 flex flex-wrap items-center gap-1 rounded-full border border-ink-200 bg-white p-1">
      {counts.map(([label, count, tone], i) => (
        <button
          key={label}
          className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12.5px] transition ${
            i === 0
              ? "bg-ink-900 text-canvas"
              : "text-ink-500 hover:bg-canvas hover:text-ink-900"
          }`}
        >
          <span>{label}</span>
          <span
            className={`font-mono text-[10.5px] ${
              i === 0 ? "text-canvas/70" : "text-ink-400"
            }`}
          >
            {count}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function CandidatesPage() {
  return (
    <Shell
      eyebrow="Workspace"
      title="People"
      lede="200 applicants moving through open roles. Filter, review, decide."
      action={
        <>
          <Button variant="ghost">
            <Icon.Filter size={13} /> Filters · 2
          </Button>
          <Button variant="primary">
            <Icon.Plus size={13} /> Add candidate
          </Button>
        </>
      }
    >
      <StageStrip />

      {/* Compact toolbar */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2">
          <Icon.Search size={14} className="text-ink-400" />
          <input
            placeholder="Search by name, email, skill…"
            className="min-w-[180px] flex-1 bg-transparent text-[13.5px] outline-none placeholder:text-ink-400"
          />
        </div>
        <div className="hidden items-center gap-4 text-[12px] text-ink-400 md:flex">
          <span>
            <span className="text-ink-900">200</span> candidates
          </span>
          <span>·</span>
          <span>
            avg match <span className="text-ink-900">84</span>
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-ink-100 bg-raise">
                {["Candidate", "Applied for", "Stage", "Match", "Experience", "Source", "Applied"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left font-mono text-[10.5px] font-medium uppercase tracking-label text-ink-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-ink-100 transition last:border-0 hover:bg-raise"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-canvas font-mono text-[11px] font-medium text-ink-700">
                        {initials(c.name)}
                      </span>
                      <div>
                        <div className="text-[13.5px] font-medium text-ink-900">
                          {c.name}
                        </div>
                        <div className="text-[11.5px] text-ink-400">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-ink-700">{c.role}</td>
                  <td className="px-5 py-3.5">
                    <StatusPill tone={stageTone[c.stage]}>{c.stage}</StatusPill>
                  </td>
                  <td className="px-5 py-3.5">
                    <MatchRing value={c.match} />
                  </td>
                  <td className="px-5 py-3.5 text-ink-700">{c.experience}</td>
                  <td className="px-5 py-3.5 text-ink-500">{c.source}</td>
                  <td className="px-5 py-3.5 font-mono text-[11.5px] text-ink-400">
                    {c.applied}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer meta */}
      <div className="mt-4 flex items-center justify-between text-[12px] text-ink-400">
        <span>
          Showing <span className="text-ink-900">1–{candidates.length}</span> of{" "}
          <span className="text-ink-900">200</span>
        </span>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-ink-200 bg-white px-2.5 py-1 hover:text-ink-900">
            Prev
          </button>
          <button className="rounded-md border border-ink-200 bg-white px-2.5 py-1 text-ink-900">
            Next
          </button>
        </div>
      </div>
    </Shell>
  );
}
