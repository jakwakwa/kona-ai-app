import Link from 'next/link';
import { Bot, ShieldCheck, Users } from 'lucide-react';
import NativeAgent from '@/components/NativeAgent';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-indigo-600" />
          <h1 className="text-xl font-bold tracking-tight">Kona AI</h1>
        </div>
        <nav className="flex gap-4">
          <Link href="tenant/tenant-admin" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
            Tenant Login
          </Link>
          <Link href="/ceo/dashboard" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
            CEO Login
          </Link>
        </nav>
      </header>

      <main className="flex-1 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
             KONA AI
          </h2>
          <p className="mb-12 text-lg text-zinc-500 sm:text-xl">
            A multi-tenant platform where businesses provide their own Gemini API keys to power intelligent, lead-capturing agents.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Link href="/tenant/tenant-admin" className="group relative flex flex-col items-center justify-center rounded-3xl border border-zinc-200 bg-white p-12 shadow-sm transition-all hover:border-indigo-500 hover:shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-transform group-hover:scale-110">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-zinc-900">Tenant Dashboard</h3>
              <p className="text-center text-zinc-500">
                Manage your AI agent, configure your API key, and view captured leads.
              </p>
            </Link>

            <Link href="/ceo/dashboard/admin" className="group relative flex flex-col items-center justify-center rounded-3xl border border-zinc-200 bg-white p-12 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-transform group-hover:scale-110">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-zinc-900">CEO View</h3>
              <p className="text-center text-zinc-500">
                Monitor lead volume across all clients and manage the platform.
              </p>
            </Link>
          </div>
        </div>
      </main>
      
      <NativeAgent />
    </div>
  );
}
