/* ============================================
   BADGES & TAGS - Copy any badge style you need
   ============================================ */

import { CodeBlock } from './CodeBlock';

export function Badges() {
  return (
    <section id="badges" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Badges & Tags
      </h2>

      <CodeBlock
        title="Status Badges"
        code={`<span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full">
  Active
</span>

<span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full">
  Pending
</span>

<span className="px-3 py-1 bg-rose-500/20 text-rose-400 text-sm font-medium rounded-full">
  Inactive
</span>

<span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-sm font-medium rounded-full">
  In Progress
</span>

<span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
  Review
</span>`}
      >
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full">
            Active
          </span>
          <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full">
            Pending
          </span>
          <span className="px-3 py-1 bg-rose-500/20 text-rose-400 text-sm font-medium rounded-full">
            Inactive
          </span>
          <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-sm font-medium rounded-full">
            In Progress
          </span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
            Review
          </span>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Solid Badges"
        code={`<span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
  Primary
</span>

<span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
  Success
</span>

<span className="px-3 py-1 bg-rose-600 text-white text-sm font-medium rounded-full">
  Danger
</span>

<span className="px-3 py-1 bg-slate-600 text-white text-sm font-medium rounded-full">
  Neutral
</span>`}
      >
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
            Primary
          </span>
          <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
            Success
          </span>
          <span className="px-3 py-1 bg-rose-600 text-white text-sm font-medium rounded-full">
            Danger
          </span>
          <span className="px-3 py-1 bg-slate-600 text-white text-sm font-medium rounded-full">
            Neutral
          </span>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Outline Badges"
        code={`<span className="px-3 py-1 border border-indigo-500 text-indigo-400 text-sm font-medium rounded-full">
  Outline
</span>

<span className="px-3 py-1 border border-emerald-500 text-emerald-400 text-sm font-medium rounded-full">
  Outline
</span>

<span className="px-3 py-1 border border-rose-500 text-rose-400 text-sm font-medium rounded-full">
  Outline
</span>`}
      >
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 border border-indigo-500 text-indigo-400 text-sm font-medium rounded-full">
            Outline
          </span>
          <span className="px-3 py-1 border border-emerald-500 text-emerald-400 text-sm font-medium rounded-full">
            Outline
          </span>
          <span className="px-3 py-1 border border-rose-500 text-rose-400 text-sm font-medium rounded-full">
            Outline
          </span>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Badge with Dot"
        code={`<span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-full">
  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
  Online
</span>

<span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-full">
  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
  Away
</span>

<span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-full">
  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
  Live
</span>`}
      >
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Online
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
            Away
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
            Offline
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Live
          </span>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Tags (Removable)"
        code={`<span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-lg">
  React
  <button className="hover:text-white transition-colors">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</span>`}
      >
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-lg">
            React
            <button className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-lg">
            TypeScript
            <button className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-lg">
            Tailwind CSS
            <button className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Number Badges"
        code={`{/* Badge on icon */}
<div className="relative inline-block">
  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
    3
  </span>
</div>

{/* Badge on button */}
<button className="relative px-4 py-2 bg-slate-700 text-white rounded-lg">
  Messages
  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-rose-500 text-white text-xs font-bold rounded-full">
    99+
  </span>
</button>`}
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="relative">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              12
            </span>
          </div>
          <button className="relative px-4 py-2 bg-slate-700 text-white rounded-lg">
            Messages
            <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-rose-500 text-white text-xs font-bold rounded-full">
              99+
            </span>
          </button>
        </div>
      </CodeBlock>
    </section>
  );
}
