import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-ink-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-lg font-bold text-white">
            HR
          </div>
          <h1 className="text-2xl font-bold text-ink-900">Welcome Back</h1>
          <p className="mt-1 text-sm text-ink-400">Sign in to your hiring dashboard</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-800">Email</label>
            <input
              type="email"
              defaultValue="recruiter@company.com"
              className="w-full rounded-lg border border-ink-200 bg-ink-50 px-3 py-2.5 text-sm outline-none focus:border-brand-400"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-800">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-ink-200 bg-ink-50 px-3 py-2.5 text-sm outline-none focus:border-brand-400"
            />
          </div>
          <Link
            href="/dashboard"
            className="block w-full rounded-lg bg-brand-500 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Sign In
          </Link>
        </form>

        <p className="mt-6 text-center text-sm text-ink-400">
          Don&apos;t have an account? <span className="font-medium text-brand-600">Sign up</span>
        </p>

        <div className="mt-8 border-t border-ink-200 pt-4">
          <p className="mb-2 text-center text-xs font-medium text-ink-400">Test Accounts</p>
          <div className="space-y-1 text-center text-xs text-ink-400">
            <div>
              Admin: <span className="font-mono">admin@company.com / admin123</span>
            </div>
            <div>
              Recruiter: <span className="font-mono">recruiter@company.com / recruiter123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
