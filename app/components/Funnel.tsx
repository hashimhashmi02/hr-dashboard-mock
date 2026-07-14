// Tighter Ashby/Greenhouse-style pipeline funnel. Each stage is a horizontal
// row: label on the left, proportional bar in the middle (percent of top stage),
// count on the right, conversion between stages annotated on the join.

type Stage = { stage: string; count: number };

export function Funnel({ data }: { data: Stage[] }) {
  const max = data[0].count;

  return (
    <div className="rounded-lg border border-ink-200 bg-white">
      <div className="flex items-center justify-between border-b border-ink-200 px-5 py-3">
        <div>
          <h3 className="text-sm font-medium text-ink-900">Pipeline</h3>
          <p className="mt-0.5 text-xs text-ink-500">Applied → Hired · last 30 days</p>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="tabular text-lg font-semibold text-ink-900">5.5</span>
          <span className="text-xs text-ink-500">% yield</span>
        </div>
      </div>

      <div className="divide-y divide-ink-100">
        {data.map((d, i) => {
          const pct = (d.count / max) * 100;
          const conv =
            i > 0 ? Math.round((data[i].count / data[i - 1].count) * 100) : null;
          return (
            <div key={d.stage} className="relative">
              {/* Conversion badge between rows */}
              {conv !== null && (
                <div className="absolute -top-2 right-5 z-10 flex items-center gap-1 rounded border border-ink-200 bg-white px-1.5 py-0.5 text-2xs">
                  <span className="tabular font-medium text-ink-900">{conv}%</span>
                  <span className="text-ink-400">conv.</span>
                </div>
              )}
              <div className="grid grid-cols-[110px_1fr_60px] items-center gap-4 px-5 py-3">
                <div className="text-sm font-medium text-ink-900">{d.stage}</div>
                <div className="relative h-6 overflow-hidden rounded bg-ink-50">
                  <div
                    className="absolute inset-y-0 left-0 rounded bg-brand-600"
                    style={{ width: `${pct}%`, opacity: 0.85 }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 flex items-center pl-2 text-2xs font-medium text-white"
                    style={{ width: `${pct}%` }}
                  >
                    {pct > 20 ? `${Math.round(pct)}%` : ""}
                  </div>
                </div>
                <div className="tabular text-right text-sm font-medium text-ink-900">
                  {d.count}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
