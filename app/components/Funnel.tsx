// The signature element. A proportional-band funnel — recruiting IS a funnel,
// and no generic dashboard renders it as one. Widths are proportional to
// stage counts; conversion rate between adjacent stages is annotated as an
// eyebrow rate on the outside of the slope, so the shape and the numbers
// carry the same story.
//
// Stage labels sit in a fixed left gutter with a hairline leader to the band
// so labels never collide with narrow bottom bands. Counts stay inside the
// band, right-aligned.

type Stage = { stage: string; count: number };

export function Funnel({ data }: { data: Stage[] }) {
  const width = 780;
  const height = 260;
  const gap = 8;
  const gutter = 120;                    // fixed column on the left for the stage label
  const paddingRight = 100;              // space on the right for the % annotation
  const bandArea = { x: gutter + 20, w: width - gutter - 20 - paddingRight };
  const bandH = (height - gap * (data.length - 1)) / data.length;

  const max = data[0].count;
  const widths = data.map((d) => Math.max(56, (d.count / max) * bandArea.w));

  return (
    <figure className="card p-6">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="eyebrow">Pipeline · last 30 days</div>
          <h3 className="mt-1.5 font-display text-[22px] font-medium leading-none tracking-tight text-ink-900">
            Applied → Hired
          </h3>
        </div>
        <div className="text-right">
          <div className="metric text-[28px] text-ink-900">
            <span className="text-iris">5.5</span>
            <span className="text-ink-400">%</span>
          </div>
          <div className="eyebrow mt-0.5">overall yield</div>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full min-w-[620px]"
          role="img"
          aria-label="Recruiting pipeline funnel"
        >
          <defs>
            <linearGradient id="funnel-fill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#5b4ce0" stopOpacity="0.14" />
              <stop offset="1" stopColor="#5b4ce0" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {data.map((d, i) => {
            const y = i * (bandH + gap);
            const w = widths[i];
            // Left-align bands to a common inner-left edge so the funnel reads as
            // a nested shape rather than a centred one — keeps the label leader
            // line short and consistent.
            const x = bandArea.x;
            const conv =
              i > 0 ? Math.round((data[i].count / data[i - 1].count) * 100) : null;

            return (
              <g key={d.stage} className="flow-in" style={{ animationDelay: `${i * 60}ms` }}>
                {/* connecting trapezoid from previous band's right edge to this one */}
                {i > 0 && (
                  <path
                    d={
                      `M ${bandArea.x} ${y - gap}` +
                      ` L ${bandArea.x + widths[i - 1]} ${y - gap}` +
                      ` L ${x + w} ${y}` +
                      ` L ${x} ${y} Z`
                    }
                    fill="url(#funnel-fill)"
                  />
                )}

                {/* leader line from label gutter to band */}
                <line
                  x1={gutter - 2}
                  x2={bandArea.x - 4}
                  y1={y + bandH / 2}
                  y2={y + bandH / 2}
                  stroke="#e6e3ea"
                />

                {/* stage label — always in the left gutter, never crowded */}
                <text
                  x={gutter - 10}
                  y={y + bandH / 2}
                  textAnchor="end"
                  fontFamily="var(--font-sans)"
                  fontSize="13"
                  fontWeight="500"
                  fill="#1c1723"
                  dominantBaseline="middle"
                >
                  {d.stage}
                </text>

                {/* the band itself */}
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={bandH}
                  rx="8"
                  fill="#ffffff"
                  stroke="#ece9ef"
                />
                <rect x={x} y={y} width="3" height={bandH} rx="1.5" fill="#5b4ce0" />

                {/* count — right-aligned inside the band */}
                <text
                  x={x + w - 12}
                  y={y + bandH / 2 - 1}
                  textAnchor="end"
                  fontFamily="var(--font-display)"
                  fontSize="22"
                  fontWeight="500"
                  fill="#1c1723"
                  dominantBaseline="middle"
                  style={{ fontVariationSettings: "'opsz' 40" }}
                >
                  {d.count}
                </text>

                {/* conversion tag to the right of the funnel */}
                {conv !== null && (
                  <g>
                    <line
                      x1={x + w + 6}
                      x2={x + w + 22}
                      y1={y - gap / 2}
                      y2={y - gap / 2}
                      stroke="#d9d3fb"
                      strokeDasharray="2 3"
                    />
                    <text
                      x={x + w + 28}
                      y={y - gap / 2}
                      fontFamily="var(--font-mono)"
                      fontSize="10.5"
                      fontWeight="500"
                      fill="#4636c9"
                      dominantBaseline="middle"
                      letterSpacing="0.08em"
                    >
                      {conv}%
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}
