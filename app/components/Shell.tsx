"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Icon } from "./Icons";

const primary = [
  { href: "/dashboard", label: "Overview", icon: Icon.Compass },
  { href: "/jobs", label: "Roles", icon: Icon.Briefcase },
  { href: "/candidates", label: "People", icon: Icon.Users },
  { href: "/interviews", label: "Interviews", icon: Icon.Calendar },
];

const secondary = [
  { href: "#", label: "Offers", icon: Icon.Doc, muted: true },
  { href: "#", label: "Analytics", icon: Icon.Chart, muted: true },
];

export function Shell({
  eyebrow,
  title,
  lede,
  children,
  action,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-ink-200/70 bg-raise/60 backdrop-blur md:flex">
        {/* wordmark */}
        <div className="flex h-16 items-center gap-2.5 px-6">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-ink-900">
            <span className="font-display text-[13px] leading-none text-canvas">H</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[17px] font-medium tracking-tight text-ink-900">
              HR Dashboard
            </span>
            <span className="eyebrow">v0.4</span>
          </div>
        </div>

        {/* command K */}
        <div className="px-4">
          <button className="group flex w-full items-center gap-2.5 rounded-lg border border-ink-200 bg-white/80 px-2.5 py-2 text-left text-[13px] text-ink-500 transition hover:border-iris-line hover:text-ink-700">
            <Icon.Search size={14} />
            <span className="flex-1">Search…</span>
            <span className="flex items-center gap-0.5 text-[10px] text-ink-400">
              <kbd className="rounded border border-ink-200 bg-canvas px-1.5 py-0.5 font-mono">⌘</kbd>
              <kbd className="rounded border border-ink-200 bg-canvas px-1.5 py-0.5 font-mono">K</kbd>
            </span>
          </button>
        </div>

        <nav className="mt-6 flex-1 px-4">
          <div className="eyebrow mb-2 px-2.5">Workspace</div>
          <div className="space-y-0.5">
            {primary.map((item) => {
              const active = pathname === item.href;
              const Ic = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-[13.5px] transition ${
                    active
                      ? "bg-white text-ink-900 shadow-card"
                      : "text-ink-500 hover:bg-white/70 hover:text-ink-900"
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-4 w-[3px] -translate-x-4 -translate-y-1/2 rounded-r bg-iris" />
                  )}
                  <Ic size={16} className={active ? "text-iris" : ""} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="eyebrow mb-2 mt-6 px-2.5">In progress</div>
          <div className="space-y-0.5">
            {secondary.map((item) => {
              const Ic = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex cursor-not-allowed items-center gap-3 rounded-lg px-2.5 py-2 text-[13.5px] text-ink-400"
                >
                  <Ic size={16} />
                  <span className="flex-1">{item.label}</span>
                  <span className="rounded-full bg-ink-100 px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-label text-ink-500">
                    q4
                  </span>
                </div>
              );
            })}
          </div>
        </nav>

        <div className="p-4">
          <div className="rounded-xl border border-iris-line bg-iris-soft/60 p-3.5">
            <div className="flex items-center gap-1.5">
              <Icon.Sparkle size={12} className="text-iris-ink" />
              <span className="eyebrow text-iris-ink">Insight</span>
            </div>
            <p className="mt-1.5 text-[12.5px] leading-snug text-ink-700">
              3 senior candidates are stuck in <span className="font-medium">Interview</span> for
              &gt; 9 days. Nudge?
            </p>
            <button className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-iris-ink hover:text-ink-900">
              Review pipeline <Icon.ArrowRight size={12} />
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main column ─────────────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b border-ink-200/70 bg-canvas/85 px-6 backdrop-blur md:px-10">
          <div className="flex items-center gap-2 text-[13px] text-ink-400">
            <span className="font-mono text-[11px] uppercase tracking-label">
              {pathname === "/" ? "Home" : (pathname ?? "").replace("/", "")}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 transition hover:text-ink-900">
              <Icon.Bell size={16} />
            </button>
            <div className="flex items-center gap-2.5 rounded-full border border-ink-200 bg-white py-1 pl-1.5 pr-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink-900 font-mono text-[11px] font-medium text-canvas">
                DR
              </span>
              <span className="text-[13px] font-medium text-ink-900">Demo</span>
              <span className="text-[10.5px] font-mono uppercase tracking-label text-ink-400">R</span>
            </div>
            <Link
              href="/login"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 transition hover:text-ink-900"
              aria-label="Sign out"
            >
              <Icon.Logout size={16} />
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-auto px-6 py-8 md:px-10 md:py-10">
          {/* page header */}
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
              <h1 className="font-display text-[38px] font-medium leading-[1.05] tracking-[-0.02em] text-ink-900 md:text-[46px]">
                {title}
              </h1>
              {lede && <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{lede}</p>}
            </div>
            {action && <div className="flex items-center gap-2">{action}</div>}
          </div>
          <div className="rule mb-8" />
          {children}
        </main>
      </div>
    </div>
  );
}

// ── Shared UI primitives ────────────────────────────────────────────────────

export function StatusPill({
  tone = "slate",
  children,
}: {
  tone?: "sage" | "amber" | "rose" | "slate" | "iris";
  children: ReactNode;
}) {
  const tones = {
    sage: "bg-sage-bg text-sage-fg",
    amber: "bg-amber-bg text-amber-fg",
    rose: "bg-rose-bg text-rose-fg",
    slate: "bg-slate-bg text-slate-fg",
    iris: "bg-iris-soft text-iris-ink",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10.5px] font-medium uppercase tracking-label ${tones[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: {
  variant?: "primary" | "ghost" | "quiet";
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const variants = {
    primary:
      "bg-ink-900 text-canvas hover:bg-iris-ink border border-ink-900 hover:border-iris-ink",
    ghost:
      "bg-white text-ink-900 border border-ink-200 hover:border-ink-900",
    quiet:
      "bg-transparent text-ink-500 border border-transparent hover:text-ink-900 hover:bg-white",
  };
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
