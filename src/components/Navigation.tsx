/* ============================================
   NAVIGATION - Copy any navigation style you need
   ============================================ */

import { CodeBlock } from './CodeBlock';

export function Navigation() {
  return (
    <section id="navigation" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Navigation
      </h2>

      <CodeBlock
        title="Simple Navbar"
        code={`<nav className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl">
  <div className="text-xl font-bold text-white">Logo</div>
  <div className="flex items-center gap-6">
    <a href="#" className="text-white font-medium">Home</a>
    <a href="#" className="text-slate-400 hover:text-white transition-colors">Products</a>
    <a href="#" className="text-slate-400 hover:text-white transition-colors">About</a>
    <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
  </div>
  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
    Sign In
  </button>
</nav>`}
      >
        <nav className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl">
          <div className="text-xl font-bold text-white">Logo</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white font-medium">Home</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
            Sign In
          </button>
        </nav>
      </CodeBlock>

      <CodeBlock
        title="Navbar with Search"
        code={`<nav className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl">
  <div className="flex items-center gap-8">
    <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Brand</div>
    <div className="relative">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 w-64 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
      />
    </div>
  </div>
  <div className="flex items-center gap-4">
    <button className="p-2 text-slate-400 hover:text-white transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>
    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer">
      JD
    </div>
  </div>
</nav>`}
      >
        <nav className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl">
          <div className="flex items-center gap-8">
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Brand</div>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer">
              JD
            </div>
          </div>
        </nav>
      </CodeBlock>

      <CodeBlock
        title="Tabs"
        code={`<div className="flex gap-1 p-1 bg-slate-800/50 border border-white/10 rounded-lg w-fit">
  <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md transition-colors">
    Tab 1
  </button>
  <button className="px-4 py-2 text-slate-400 hover:text-white font-medium rounded-md transition-colors">
    Tab 2
  </button>
  <button className="px-4 py-2 text-slate-400 hover:text-white font-medium rounded-md transition-colors">
    Tab 3
  </button>
</div>`}
      >
        <div className="flex gap-1 p-1 bg-slate-800/50 border border-white/10 rounded-lg w-fit">
          <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md transition-colors">
            Tab 1
          </button>
          <button className="px-4 py-2 text-slate-400 hover:text-white font-medium rounded-md transition-colors">
            Tab 2
          </button>
          <button className="px-4 py-2 text-slate-400 hover:text-white font-medium rounded-md transition-colors">
            Tab 3
          </button>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Underline Tabs"
        code={`<div className="flex gap-6 border-b border-white/10">
  <button className="px-1 py-3 text-white font-medium border-b-2 border-indigo-500 -mb-px">
    Overview
  </button>
  <button className="px-1 py-3 text-slate-400 hover:text-white font-medium border-b-2 border-transparent hover:border-slate-400 -mb-px transition-colors">
    Analytics
  </button>
  <button className="px-1 py-3 text-slate-400 hover:text-white font-medium border-b-2 border-transparent hover:border-slate-400 -mb-px transition-colors">
    Reports
  </button>
  <button className="px-1 py-3 text-slate-400 hover:text-white font-medium border-b-2 border-transparent hover:border-slate-400 -mb-px transition-colors">
    Settings
  </button>
</div>`}
      >
        <div className="flex gap-6 border-b border-white/10">
          <button className="px-1 py-3 text-white font-medium border-b-2 border-indigo-500 -mb-px">
            Overview
          </button>
          <button className="px-1 py-3 text-slate-400 hover:text-white font-medium border-b-2 border-transparent hover:border-slate-400 -mb-px transition-colors">
            Analytics
          </button>
          <button className="px-1 py-3 text-slate-400 hover:text-white font-medium border-b-2 border-transparent hover:border-slate-400 -mb-px transition-colors">
            Reports
          </button>
          <button className="px-1 py-3 text-slate-400 hover:text-white font-medium border-b-2 border-transparent hover:border-slate-400 -mb-px transition-colors">
            Settings
          </button>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Breadcrumbs"
        code={`<nav className="flex items-center gap-2 text-sm">
  <a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a>
  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
  <a href="#" className="text-slate-400 hover:text-white transition-colors">Products</a>
  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
  <span className="text-white">Electronics</span>
</nav>`}
      >
        <nav className="flex items-center gap-2 text-sm">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a>
          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Products</a>
          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white">Electronics</span>
        </nav>
      </CodeBlock>

      <CodeBlock
        title="Pagination"
        code={`<div className="flex items-center gap-2">
  <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button className="w-10 h-10 bg-indigo-600 text-white font-medium rounded-lg">1</button>
  <button className="w-10 h-10 text-slate-400 hover:text-white hover:bg-white/5 font-medium rounded-lg transition-colors">2</button>
  <button className="w-10 h-10 text-slate-400 hover:text-white hover:bg-white/5 font-medium rounded-lg transition-colors">3</button>
  <span className="text-slate-500">...</span>
  <button className="w-10 h-10 text-slate-400 hover:text-white hover:bg-white/5 font-medium rounded-lg transition-colors">10</button>
  <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>`}
      >
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 bg-indigo-600 text-white font-medium rounded-lg">1</button>
          <button className="w-10 h-10 text-slate-400 hover:text-white hover:bg-white/5 font-medium rounded-lg transition-colors">2</button>
          <button className="w-10 h-10 text-slate-400 hover:text-white hover:bg-white/5 font-medium rounded-lg transition-colors">3</button>
          <span className="text-slate-500">...</span>
          <button className="w-10 h-10 text-slate-400 hover:text-white hover:bg-white/5 font-medium rounded-lg transition-colors">10</button>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Sidebar Menu"
        code={`<div className="w-64 bg-slate-800/50 border border-white/10 rounded-xl p-4">
  <nav className="space-y-1">
    <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg font-medium">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Dashboard
    </a>
    <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      Users
    </a>
    <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Settings
    </a>
  </nav>
</div>`}
      >
        <div className="w-64 bg-slate-800/50 border border-white/10 rounded-xl p-4">
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Users
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Analytics
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
          </nav>
        </div>
      </CodeBlock>
    </section>
  );
}
