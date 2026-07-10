import Link from "next/link";
import { Icon } from "../components/Icons";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
      {/* ── Editorial column ───────────────────────────────────────────── */}
      <section className="relative hidden flex-col justify-between overflow-hidden bg-ink-900 px-14 py-14 text-canvas lg:flex">
        {/* soft iris orb behind */}
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #5b4ce0 0%, transparent 60%)" }}
          aria-hidden
        />
        <div className="relative flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-canvas">
            <span className="font-display text-[15px] font-medium leading-none text-ink-900">H</span>
          </div>
          <span className="font-display text-[19px] font-medium tracking-tight">HR Dashboard</span>
        </div>

        <div className="relative max-w-xl">
          <h1 className="font-display text-[54px] font-medium leading-[1.02] tracking-[-0.02em]">
            The instrument for
            <br />
            <em className="text-iris/90" style={{ fontStyle: "italic" }}>
              deliberate hiring
            </em>
            .
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-canvas/70">
            Every hire has a story: how they arrived, who spoke with them, what was
            decided. No dashboards for their own sake — one calm surface where the work
            moves forward.
          </p>
        </div>

        <div className="relative flex items-end justify-between text-[12px] text-canvas/50">
          <div>
            <div className="eyebrow mb-1 text-canvas/40">In this build</div>
            <div>Roles · People · Interviews · Overview</div>
          </div>
          <div className="font-mono">v0.4 · demo</div>
        </div>
      </section>

      {/* ── Form column ────────────────────────────────────────────────── */}
      <section className="flex items-center justify-center px-6 py-14 md:px-14">
        <div className="w-full max-w-sm">
          <div className="eyebrow mb-2.5">Sign in</div>
          <h2 className="font-display text-[34px] font-medium leading-tight tracking-tight text-ink-900">
            Welcome back.
          </h2>
          <p className="mt-1.5 text-[14px] text-ink-500">
            Continue to the hiring dashboard.
          </p>

          <form className="mt-9 space-y-5">
            <label className="block">
              <span className="eyebrow mb-1.5 block">Work email</span>
              <input
                type="email"
                defaultValue="recruiter@company.com"
                className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-[14px] outline-none transition focus:border-iris focus:shadow-[0_0_0_3px_rgba(91,76,224,0.12)]"
              />
            </label>
            <label className="block">
              <div className="mb-1.5 flex items-baseline justify-between">
                <span className="eyebrow">Password</span>
                <a href="#" className="text-[11.5px] text-iris-ink hover:underline">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-[14px] outline-none transition focus:border-iris focus:shadow-[0_0_0_3px_rgba(91,76,224,0.12)]"
              />
            </label>

            <Link
              href="/dashboard"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 py-3 text-[13.5px] font-medium text-canvas transition hover:bg-iris-ink"
            >
              Sign in
              <Icon.ArrowRight size={14} />
            </Link>
          </form>

          <div className="mt-8 rounded-xl border border-ink-200 bg-white/60 p-4">
            <div className="eyebrow mb-2">For reviewers</div>
            <div className="space-y-1 font-mono text-[12px] text-ink-500">
              <div>
                <span className="text-ink-900">recruiter@company.com</span>
                <span className="mx-1.5 text-ink-400">·</span>recruiter123
              </div>
              <div>
                <span className="text-ink-900">manager@company.com</span>
                <span className="mx-1.5 text-ink-400">·</span>manager123
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
