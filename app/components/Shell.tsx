"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Icon } from "./Icons";

const primary = [
  { href: "/dashboard", label: "Overview", icon: Icon.Compass },
  { href: "/jobs", label: "Jobs", icon: Icon.Briefcase, count: 14 },
  { href: "/candidates", label: "Candidates", icon: Icon.Users, count: 200 },
  { href: "/interviews", label: "Interviews", icon: Icon.Calendar, count: 6 },
];

const secondary = [
  { href: "#", label: "Offers", icon: Icon.Doc },
  { href: "#", label: "Onboarding", icon: Icon.Check },
  { href: "#", label: "Analytics", icon: Icon.Chart },
];

export function Shell({
  title,
  breadcrumb,
  tabs,
  action,
  children,
}: {
  title: string;
  breadcrumb?: string;
  tabs?: { label: string; href: string; active?: boolean; count?: number }[];
  action?: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <aside className="hidden w-[220px] shrink-0 flex-col border-r border-ink-200 bg-white md:flex">
        {/* Workspace switcher */}
        <div className="flex h-14 items-center gap-2 border-b border-ink-200 px-4">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-ink-900 text-[12px] font-semibold text-white">
            HR
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-ink-900">Zuvomo Hiring</div>
            <div className="truncate text-2xs text-ink-500">Free · 6 seats</div>
          </div>
          <button className="grid h-6 w-6 place-items-center rounded text-ink-400 hover:bg-ink-100 hover:text-ink-900">
            <Icon.Chevron size={12} className="rotate-90" />
          </button>
        </div>

        {/* Command K */}
        <div className="px-3 pt-3">
          <button className="flex w-full items-center gap-2 rounded-md border border-ink-200 bg-white px-2.5 py-1.5 text-left text-sm text-ink-500 transition hover:border-ink-300">
            <Icon.Search size={13} />
            <span className="flex-1">Search</span>
            <span className="flex items-center gap-0.5 text-2xs text-ink-400">
              <kbd className="rounded border border-ink-200 bg-canvas px-1 py-0.5 font-mono">⌘</kbd>
              <kbd className="rounded border border-ink-200 bg-canvas px-1 py-0.5 font-mono">K</kbd>
            </span>
          </button>
        </div>

        <nav className="mt-4 flex-1 space-y-4 px-3">
          <div>
            <div className="mb-1 px-2 text-2xs font-medium uppercase tracking-wider text-ink-400">
              Recruiting
            </div>
            <div className="space-y-0.5">
              {primary.map((item) => {
                const active = pathname === item.href;
                const Ic = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition ${
                      active
                        ? "bg-ink-50 font-medium text-ink-900"
                        : "text-ink-700 hover:bg-ink-50"
                    }`}
                  >
                    <Ic size={15} className={active ? "text-brand-600" : "text-ink-500"} />
                    <span className="flex-1">{item.label}</span>
                    {item.count !== undefined && (
                      <span className="tabular text-2xs text-ink-400">{item.count}</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-1 px-2 text-2xs font-medium uppercase tracking-wider text-ink-400">
              Coming soon
            </div>
            <div className="space-y-0.5">
              {secondary.map((item) => {
                const Ic = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex cursor-not-allowed items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-ink-400"
                  >
                    <Ic size={15} />
                    <span className="flex-1">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>

        {/* User pill */}
        <div className="border-t border-ink-200 p-3">
          <button className="flex w-full items-center gap-2 rounded-md p-1.5 text-left transition hover:bg-ink-50">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-2xs font-semibold text-brand-700">
              DR
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-ink-900">Demo Recruiter</div>
              <div className="truncate text-2xs text-ink-500">recruiter@company.com</div>
            </div>
            <Icon.Chevron size={12} className="rotate-90 text-ink-400" />
          </button>
        </div>
      </aside>

      {/* ── Main column ─────────────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-ink-200 bg-white/95 px-6 backdrop-blur">
          <div className="flex items-center gap-1.5 text-sm">
            {breadcrumb && (
              <>
                <span className="text-ink-500">{breadcrumb}</span>
                <Icon.Chevron size={12} className="text-ink-400" />
              </>
            )}
            <span className="font-medium text-ink-900">{title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="grid h-8 w-8 place-items-center rounded-md text-ink-500 hover:bg-ink-50 hover:text-ink-900">
              <Icon.Bell size={15} />
            </button>
            <Link
              href="/login"
              className="grid h-8 w-8 place-items-center rounded-md text-ink-500 hover:bg-ink-50 hover:text-ink-900"
              aria-label="Sign out"
            >
              <Icon.Logout size={15} />
            </Link>
          </div>
        </header>

        {/* Page header */}
        <div className="border-b border-ink-200 bg-white px-6 pt-5">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <h1 className="text-2xl font-semibold tracking-tight text-ink-900">{title}</h1>
            {action && <div className="flex items-center gap-2">{action}</div>}
          </div>
          {tabs && tabs.length > 0 && (
            <div className="-mb-px flex gap-5 overflow-x-auto">
              {tabs.map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className={`flex items-center gap-1.5 border-b-2 px-0.5 pb-3 pt-1 text-sm transition ${
                    t.active
                      ? "border-brand-600 font-medium text-ink-900"
                      : "border-transparent text-ink-500 hover:text-ink-900"
                  }`}
                >
                  {t.label}
                  {t.count !== undefined && (
                    <span
                      className={`tabular rounded px-1.5 py-0.5 text-2xs ${
                        t.active ? "bg-brand-50 text-brand-700" : "bg-ink-100 text-ink-500"
                      }`}
                    >
                      {t.count}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        <main className="flex-1 overflow-auto bg-canvas p-6">{children}</main>
      </div>
    </div>
  );
}

// ── Shared primitives ──────────────────────────────────────────────────────

export function StatusPill({
  tone = "slate",
  children,
}: {
  tone?: "emerald" | "amber" | "rose" | "sky" | "violet" | "slate";
  children: ReactNode;
}) {
  const tones = {
    emerald: "bg-emerald-bg text-emerald-fg",
    amber: "bg-amber-bg text-amber-fg",
    rose: "bg-rose-bg text-rose-fg",
    sky: "bg-sky-bg text-sky-fg",
    violet: "bg-violet-bg text-violet-fg",
    slate: "bg-slate-bg text-slate-fg",
  };
  const dots = {
    emerald: "bg-emerald-dot",
    amber: "bg-amber-dot",
    rose: "bg-rose-dot",
    sky: "bg-sky-dot",
    violet: "bg-violet-dot",
    slate: "bg-slate-dot",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[tone]}`} />
      {children}
    </span>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: {
  variant?: "primary" | "ghost" | "quiet";
  size?: "sm" | "md";
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const variants = {
    primary:
      "bg-ink-900 text-white border border-ink-900 hover:bg-ink-800",
    ghost:
      "bg-white text-ink-900 border border-ink-200 hover:bg-ink-50",
    quiet:
      "bg-transparent text-ink-700 border border-transparent hover:bg-ink-100",
  };
  const sizes = {
    sm: "px-2.5 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
  };
  return (
    <button
      className={`inline-flex items-center rounded-md font-medium transition ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
