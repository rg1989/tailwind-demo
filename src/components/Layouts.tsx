/* ============================================
   LAYOUTS - Page structures and layout components
   ============================================ */

import { CodeBlock } from './CodeBlock';

export function Layouts() {
  return (
    <section className="space-y-12">
      <div>
        <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
          Layouts
        </h2>
        <p className="text-slate-400 mt-4">
          Common layout patterns and structural components for building complete pages.
        </p>
      </div>

      {/* Section 1: Layout Structures */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Layout Structures</h3>
            <p className="text-slate-400 text-sm">Common page layout patterns for different use cases</p>
          </div>
        </div>

        <CodeBlock
          title="Centered Content Layout"
          code={`{/* Centered content - great for landing pages, auth pages */}
<div className="min-h-screen bg-slate-950 flex items-center justify-center">
  <div className="max-w-md w-full mx-4">
    {/* Your centered content here */}
  </div>
</div>`}
        >
          <div className="bg-slate-950 border border-white/10 rounded-xl p-4 h-48 flex items-center justify-center">
            <div className="bg-slate-800/50 border border-white/10 rounded-lg p-6 w-full max-w-xs text-center">
              <p className="text-slate-400 text-sm">Centered Content</p>
              <p className="text-slate-500 text-xs mt-1">Login forms, modals, etc.</p>
            </div>
          </div>
        </CodeBlock>

        <CodeBlock
          title="Sidebar + Main Content Layout"
          code={`{/* Dashboard layout with fixed sidebar */}
<div className="min-h-screen bg-slate-950">
  {/* Fixed Sidebar */}
  <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-white/10">
    {/* Sidebar content */}
  </aside>

  {/* Main Content */}
  <main className="ml-64">
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Page content */}
    </div>
  </main>
</div>`}
        >
          <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden h-48 flex">
            <div className="w-16 bg-slate-900 border-r border-white/10 flex flex-col items-center py-3 gap-2">
              <div className="w-8 h-8 bg-slate-800 rounded"></div>
              <div className="w-8 h-2 bg-slate-800 rounded"></div>
              <div className="w-8 h-2 bg-slate-800 rounded"></div>
              <div className="w-8 h-2 bg-slate-800 rounded"></div>
            </div>
            <div className="flex-1 p-4">
              <div className="h-full bg-slate-800/30 rounded-lg border border-dashed border-white/10 flex items-center justify-center">
                <p className="text-slate-500 text-xs">Main Content Area</p>
              </div>
            </div>
          </div>
        </CodeBlock>

        <CodeBlock
          title="Header + Sidebar + Main Layout"
          code={`{/* Full app layout with header and sidebar */}
<div className="min-h-screen bg-slate-950">
  {/* Fixed Header */}
  <header className="fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-white/10 z-50">
    {/* Header content */}
  </header>

  {/* Fixed Sidebar (below header) */}
  <aside className="fixed left-0 top-16 bottom-0 w-64 bg-slate-900 border-r border-white/10">
    {/* Sidebar content */}
  </aside>

  {/* Main Content */}
  <main className="ml-64 pt-16">
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Page content */}
    </div>
  </main>
</div>`}
        >
          <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden h-48 flex flex-col">
            <div className="h-8 bg-slate-900 border-b border-white/10 flex items-center px-3">
              <div className="w-16 h-3 bg-slate-800 rounded"></div>
              <div className="ml-auto flex gap-2">
                <div className="w-6 h-3 bg-slate-800 rounded"></div>
                <div className="w-6 h-3 bg-slate-800 rounded"></div>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="w-16 bg-slate-900 border-r border-white/10 p-2">
                <div className="space-y-1">
                  <div className="w-full h-2 bg-slate-800 rounded"></div>
                  <div className="w-full h-2 bg-slate-800 rounded"></div>
                  <div className="w-full h-2 bg-slate-800 rounded"></div>
                </div>
              </div>
              <div className="flex-1 p-3">
                <div className="h-full bg-slate-800/30 rounded border border-dashed border-white/10 flex items-center justify-center">
                  <p className="text-slate-500 text-xs">Content</p>
                </div>
              </div>
            </div>
          </div>
        </CodeBlock>

        <CodeBlock
          title="Two Column Layout"
          code={`{/* Two column layout - great for settings, docs */}
<div className="min-h-screen bg-slate-950">
  <div className="max-w-6xl mx-auto px-8 py-12">
    <div className="grid grid-cols-12 gap-8">
      {/* Sidebar/Navigation */}
      <aside className="col-span-3">
        {/* Side navigation */}
      </aside>

      {/* Main Content */}
      <main className="col-span-9">
        {/* Page content */}
      </main>
    </div>
  </div>
</div>`}
        >
          <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden h-48 p-4">
            <div className="grid grid-cols-12 gap-3 h-full">
              <div className="col-span-3 bg-slate-900 rounded-lg border border-white/10 p-2">
                <div className="space-y-1">
                  <div className="w-full h-2 bg-indigo-600/30 rounded"></div>
                  <div className="w-full h-2 bg-slate-800 rounded"></div>
                  <div className="w-full h-2 bg-slate-800 rounded"></div>
                  <div className="w-full h-2 bg-slate-800 rounded"></div>
                </div>
              </div>
              <div className="col-span-9 bg-slate-800/30 rounded-lg border border-dashed border-white/10 flex items-center justify-center">
                <p className="text-slate-500 text-xs">Main Content</p>
              </div>
            </div>
          </div>
        </CodeBlock>

        <CodeBlock
          title="Three Column Layout"
          code={`{/* Three column layout - great for social apps, email clients */}
<div className="min-h-screen bg-slate-950 flex">
  {/* Left Sidebar - Navigation */}
  <aside className="w-64 bg-slate-900 border-r border-white/10 shrink-0">
    {/* Navigation */}
  </aside>

  {/* Middle - List/Feed */}
  <div className="w-96 bg-slate-900/50 border-r border-white/10 shrink-0 overflow-y-auto">
    {/* List items */}
  </div>

  {/* Right - Detail View */}
  <main className="flex-1 overflow-y-auto">
    {/* Detail content */}
  </main>
</div>`}
        >
          <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden h-48 flex">
            <div className="w-14 bg-slate-900 border-r border-white/10 p-2">
              <div className="space-y-1">
                <div className="w-full h-6 bg-slate-800 rounded"></div>
                <div className="w-full h-2 bg-slate-800 rounded"></div>
                <div className="w-full h-2 bg-slate-800 rounded"></div>
              </div>
            </div>
            <div className="w-24 bg-slate-900/50 border-r border-white/10 p-2 space-y-1">
              <div className="w-full h-8 bg-slate-800/50 rounded border border-indigo-500/30"></div>
              <div className="w-full h-8 bg-slate-800/30 rounded"></div>
              <div className="w-full h-8 bg-slate-800/30 rounded"></div>
            </div>
            <div className="flex-1 p-3">
              <div className="h-full bg-slate-800/30 rounded border border-dashed border-white/10 flex items-center justify-center">
                <p className="text-slate-500 text-xs">Detail View</p>
              </div>
            </div>
          </div>
        </CodeBlock>

        <CodeBlock
          title="Full-Width Header Layout"
          code={`{/* Marketing/Landing page layout */}
<div className="min-h-screen bg-slate-950">
  {/* Full-width sticky header */}
  <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
    <div className="max-w-7xl mx-auto px-8 py-4">
      {/* Header content */}
    </div>
  </header>

  {/* Main Content */}
  <main>
    {/* Hero section - full width */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Hero content */}
      </div>
    </section>

    {/* Features section */}
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Features */}
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="bg-slate-900 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Footer content */}
    </div>
  </footer>
</div>`}
        >
          <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden h-48 flex flex-col">
            <div className="h-8 bg-slate-900/80 border-b border-white/10 flex items-center justify-center">
              <div className="w-3/4 flex items-center justify-between">
                <div className="w-12 h-3 bg-slate-700 rounded"></div>
                <div className="flex gap-2">
                  <div className="w-8 h-2 bg-slate-700 rounded"></div>
                  <div className="w-8 h-2 bg-slate-700 rounded"></div>
                  <div className="w-8 h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-3 bg-slate-700 rounded mx-auto mb-2"></div>
                  <div className="w-32 h-2 bg-slate-800 rounded mx-auto"></div>
                </div>
              </div>
              <div className="h-12 bg-slate-900/50"></div>
            </div>
            <div className="h-6 bg-slate-900 border-t border-white/10"></div>
          </div>
        </CodeBlock>
      </div>

      {/* Section 2: Layout Components */}
      <div className="space-y-8 pt-8 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Layout Components</h3>
            <p className="text-slate-400 text-sm">Reusable structural components for your layouts</p>
          </div>
        </div>

        <CodeBlock
          title="App Header"
          code={`<header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
  <div className="max-w-7xl mx-auto px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Logo
        </a>
        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-white font-medium">Home</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">About</a>
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
          Sign In
        </button>
      </div>
    </div>
  </div>
</header>`}
        >
          <header className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl">
            <div className="px-6">
              <div className="flex items-center justify-between h-14">
                <div className="flex items-center gap-6">
                  <a href="#" className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Logo
                  </a>
                  <nav className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-white font-medium text-sm">Home</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Features</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">About</a>
                  </nav>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </header>
        </CodeBlock>

        <CodeBlock
          title="Dashboard Header"
          code={`<header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
  <div className="flex items-center justify-between px-6 h-16">
    {/* Left: Breadcrumb or Title */}
    <div className="flex items-center gap-4">
      <h1 className="text-lg font-semibold text-white">Dashboard</h1>
      <span className="text-slate-600">/</span>
      <span className="text-slate-400">Overview</span>
    </div>

    {/* Right: Actions */}
    <div className="flex items-center gap-4">
      {/* Search */}
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-64 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
        />
      </div>

      {/* Notifications */}
      <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
      </button>

      {/* User Avatar */}
      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer">
        JD
      </div>
    </div>
  </div>
</header>`}
        >
          <header className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-xl">
            <div className="flex items-center justify-between px-4 h-14">
              <div className="flex items-center gap-3">
                <h1 className="text-sm font-semibold text-white">Dashboard</h1>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400 text-sm">Overview</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative hidden sm:block">
                  <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-8 pr-3 py-1.5 w-40 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <button className="relative p-1.5 text-slate-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                </button>
                <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer">
                  JD
                </div>
              </div>
            </div>
          </header>
        </CodeBlock>

        <CodeBlock
          title="Sidebar Navigation"
          code={`<aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-white/10 flex flex-col">
  {/* Logo */}
  <div className="p-6 border-b border-white/10">
    <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
      AppName
    </h1>
  </div>

  {/* Navigation */}
  <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
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

    {/* Section Divider */}
    <div className="pt-4 mt-4 border-t border-white/10">
      <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
        Settings
      </p>
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Settings
      </a>
    </div>
  </nav>

  {/* User Section */}
  <div className="p-4 border-t border-white/10">
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
        JD
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium truncate">John Doe</p>
        <p className="text-slate-400 text-sm truncate">john@example.com</p>
      </div>
    </div>
  </div>
</aside>`}
        >
          <aside className="bg-slate-900 border border-white/10 rounded-xl w-56 flex flex-col h-80">
            <div className="p-4 border-b border-white/10">
              <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AppName
              </h1>
            </div>
            <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
              <a href="#" className="flex items-center gap-2 px-2 py-1.5 bg-indigo-600/20 text-indigo-400 rounded-lg text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </a>
              <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Users
              </a>
              <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Analytics
              </a>
              <div className="pt-2 mt-2 border-t border-white/10">
                <p className="px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Settings</p>
                <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
              </div>
            </nav>
            <div className="p-3 border-t border-white/10">
              <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
                <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-medium truncate">John Doe</p>
                  <p className="text-slate-400 text-[10px] truncate">john@example.com</p>
                </div>
              </div>
            </div>
          </aside>
        </CodeBlock>

        <CodeBlock
          title="Page Footer"
          code={`<footer className="bg-slate-900 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-8 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Brand */}
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
          AppName
        </h3>
        <p className="text-slate-400 text-sm">
          Building amazing products for developers worldwide.
        </p>
      </div>

      {/* Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">Product</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Features</a></li>
          <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</a></li>
          <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Docs</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">About</a></li>
          <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</a></li>
          <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">Legal</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</a></li>
          <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-slate-500 text-sm">© 2024 AppName. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>`}
        >
          <footer className="bg-slate-900 border border-white/10 rounded-xl">
            <div className="px-6 py-8">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    AppName
                  </h3>
                  <p className="text-slate-400 text-xs">Building amazing products.</p>
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold mb-2">Product</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Features</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Pricing</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold mb-2">Company</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">About</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold mb-2">Legal</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Privacy</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-xs">Terms</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <p className="text-slate-500 text-xs">© 2024 AppName</p>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </CodeBlock>

        <CodeBlock
          title="Content Container"
          code={`{/* Centered container with max-width */}
<div className="max-w-7xl mx-auto px-8">
  {/* Content */}
</div>

{/* Different sizes */}
<div className="max-w-5xl mx-auto px-8">  {/* Narrower - good for reading */}</div>
<div className="max-w-3xl mx-auto px-8">  {/* Very narrow - blog posts */}</div>
<div className="max-w-full mx-auto px-8"> {/* Full width with padding */}</div>

{/* Responsive padding */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Adjusts padding based on screen size */}
</div>`}
        >
          <div className="space-y-3">
            <div className="bg-slate-800/50 border border-white/10 rounded-lg p-3">
              <div className="max-w-md mx-auto bg-indigo-600/20 border border-indigo-500/30 rounded p-2 text-center">
                <p className="text-indigo-400 text-xs">max-w-md</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-white/10 rounded-lg p-3">
              <div className="max-w-lg mx-auto bg-purple-600/20 border border-purple-500/30 rounded p-2 text-center">
                <p className="text-purple-400 text-xs">max-w-lg</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-white/10 rounded-lg p-3">
              <div className="max-w-xl mx-auto bg-pink-600/20 border border-pink-500/30 rounded p-2 text-center">
                <p className="text-pink-400 text-xs">max-w-xl</p>
              </div>
            </div>
          </div>
        </CodeBlock>
      </div>
    </section>
  );
}
