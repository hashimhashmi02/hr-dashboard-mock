"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: "▦" },
  { href: "/jobs", label: "Jobs", icon: "💼" },
  { href: "/candidates", label: "Candidates", icon: "👥" },
  { href: "/interviews", label: "Interviews", icon: "🗓️" },
  { href: "/offers", label: "Offers", icon: "📄", soon: true },
  { href: "/analytics", label: "Analytics", icon: "📊", soon: true },
];

export function Shell({
  title,
  subtitle,
  children,
  action,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-ink-50">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-ink-200 bg-white md:flex">
        <div className="flex h-16 items-center gap-2 border-b border-ink-200 px-6">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-sm font-bold text-white">
            HR
          </span>
          <span className="text-base font-semibold text-ink-900">Hiring</span>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.soon ? "#" : item.href}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                  active
                    ? "bg-brand-50 font-medium text-brand-700"
                    : "text-ink-600 hover:bg-ink-100"
                } ${item.soon ? "cursor-not-allowed opacity-50" : ""}`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-base leading-none">{item.icon}</span>
                  {item.label}
                </span>
                {item.soon && (
                  <span className="rounded bg-ink-100 px-1.5 py-0.5 text-[10px] font-medium text-ink-400">
                    soon
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-ink-200 p-4 text-xs text-ink-400">
          Demo build · mock data
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between gap-4 border-b border-ink-200 bg-white px-6">
          <div className="relative hidden w-full max-w-sm items-center sm:flex">
            <span className="pointer-events-none absolute left-3 text-ink-400">⌕</span>
            <input
              placeholder="Search candidates, jobs…"
              className="w-full rounded-lg border border-ink-200 bg-ink-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-400"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-ink-900">Demo Recruiter</div>
              <div className="text-xs text-ink-400">RECRUITER</div>
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
              DR
            </div>
            <Link
              href="/login"
              className="rounded-lg border border-ink-200 px-3 py-1.5 text-sm text-ink-600 hover:bg-ink-100"
            >
              Sign out
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-ink-900">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-ink-400">{subtitle}</p>}
            </div>
            {action}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

export function Badge({ tone, children }: { tone: string; children: ReactNode }) {
  const tones: Record<string, string> = {
    green: "bg-brand-50 text-brand-700",
    blue: "bg-blue-50 text-blue-700",
    amber: "bg-amber-50 text-amber-700",
    gray: "bg-ink-100 text-ink-600",
    red: "bg-red-50 text-red-600",
    purple: "bg-purple-50 text-purple-700",
  };
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone] ?? tones.gray}`}>
      {children}
    </span>
  );
}
