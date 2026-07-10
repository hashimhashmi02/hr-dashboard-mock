import { Shell, Badge } from "../components/Shell";
import { candidates } from "../lib/mock-data";

const stageTone: Record<string, string> = {
  Applied: "gray",
  Shortlisted: "blue",
  Interview: "amber",
  Offer: "purple",
  Hired: "green",
  Rejected: "red",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function CandidatesPage() {
  return (
    <Shell
      title="Candidates"
      subtitle="200 candidates across all pipelines"
      action={
        <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
          + Add Candidate
        </button>
      }
    >
      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-3 rounded-xl border border-ink-200 bg-white p-4">
        <input
          placeholder="Search candidates by name or email…"
          className="min-w-[220px] flex-1 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 text-sm outline-none focus:border-brand-400"
        />
        <select className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-600">
          <option>All Stages</option>
          <option>Applied</option>
          <option>Shortlisted</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Hired</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-ink-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-200 bg-ink-50 text-left text-xs uppercase tracking-wide text-ink-400">
                <th className="px-5 py-3 font-medium">Candidate</th>
                <th className="px-5 py-3 font-medium">Applied For</th>
                <th className="px-5 py-3 font-medium">Stage</th>
                <th className="px-5 py-3 font-medium">Match</th>
                <th className="px-5 py-3 font-medium">Exp.</th>
                <th className="px-5 py-3 font-medium">Source</th>
                <th className="px-5 py-3 font-medium">Applied</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr key={c.id} className="border-b border-ink-100 last:border-0 hover:bg-ink-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700">
                        {initials(c.name)}
                      </span>
                      <div>
                        <div className="font-medium text-ink-900">{c.name}</div>
                        <div className="text-xs text-ink-400">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-ink-600">{c.role}</td>
                  <td className="px-5 py-3">
                    <Badge tone={stageTone[c.stage]}>{c.stage}</Badge>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-ink-100">
                        <div
                          className={`h-full rounded-full ${c.match >= 85 ? "bg-brand-500" : c.match >= 70 ? "bg-amber-400" : "bg-red-400"}`}
                          style={{ width: `${c.match}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-ink-600">{c.match}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-ink-600">{c.experience}</td>
                  <td className="px-5 py-3 text-ink-600">{c.source}</td>
                  <td className="px-5 py-3 text-ink-400">{c.applied}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Shell>
  );
}
