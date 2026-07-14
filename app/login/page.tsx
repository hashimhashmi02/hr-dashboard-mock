import Link from "next/link";
import { Icon } from "../components/Icons";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-canvas px-6 py-10">
      <div className="w-full max-w-[380px]">
        <div className="mb-8 flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-ink-900 text-sm font-semibold text-white">
            HR
          </div>
          <span className="text-base font-semibold tracking-tight text-ink-900">
            Zuvomo Hiring
          </span>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-ink-900">Sign in</h1>
        <p className="mt-1 text-sm text-ink-500">
          Enter your credentials to continue.
        </p>

        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink-800">Work email</span>
            <input
              type="email"
              defaultValue="recruiter@company.com"
              className="w-full rounded-md border border-ink-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-brand-500 focus:shadow-focus"
            />
          </label>
          <label className="block">
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-sm font-medium text-ink-800">Password</span>
              <a href="#" className="text-xs text-brand-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-md border border-ink-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-brand-500 focus:shadow-focus"
            />
          </label>

          <Link
            href="/dashboard"
            className="flex w-full items-center justify-center gap-1.5 rounded-md bg-ink-900 py-2 text-sm font-medium text-white transition hover:bg-ink-800"
          >
            Sign in
            <Icon.ArrowRight size={13} />
          </Link>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-ink-200 bg-white py-2 text-sm font-medium text-ink-900 transition hover:bg-ink-50"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden>
              <path d="M19.6 10.23a11.5 11.5 0 00-.16-1.94H10v3.68h5.4a4.6 4.6 0 01-2 3.02v2.5h3.24c1.9-1.75 3-4.32 3-7.26z" fill="#4285F4"/>
              <path d="M10 20c2.7 0 4.97-.9 6.62-2.44l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.75-5.6-4.1H1.06v2.57A10 10 0 0010 20z" fill="#34A853"/>
              <path d="M4.4 11.92a6 6 0 010-3.84V5.5H1.06a10 10 0 000 9l3.34-2.58z" fill="#FBBC05"/>
              <path d="M10 3.96c1.47 0 2.79.5 3.82 1.5l2.87-2.87A10 10 0 001.06 5.5L4.4 8.08c.8-2.35 3-4.12 5.6-4.12z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </form>

        <div className="mt-8 rounded-md border border-ink-200 bg-white p-3">
          <div className="mb-2 flex items-center gap-1.5 text-2xs font-medium uppercase tracking-wider text-ink-500">
            <Icon.Sparkle size={11} />
            Demo credentials
          </div>
          <div className="space-y-1 font-mono text-xs text-ink-700">
            <div>recruiter@company.com <span className="text-ink-400">·</span> recruiter123</div>
            <div>manager@company.com <span className="text-ink-400">·</span> manager123</div>
            <div>admin@company.com <span className="text-ink-400">·</span> admin123</div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-ink-500">
          By signing in you agree to the <a href="#" className="text-ink-700 hover:underline">Terms</a> and <a href="#" className="text-ink-700 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
