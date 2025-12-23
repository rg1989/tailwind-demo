/* ============================================
   CARDS - Copy any card style you need
   ============================================ */

export function Cards() {
  return (
    <section id="cards" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Cards
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Card */}
        <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">Basic Card</h3>
          <p className="text-slate-400">A simple card with a subtle border and hover effect. Great for content sections.</p>
        </div>

        {/* Gradient Border Card */}
        <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="bg-slate-900 rounded-xl p-6 h-full">
            <h3 className="text-xl font-semibold text-white mb-2">Gradient Border</h3>
            <p className="text-slate-400">Eye-catching gradient border using pseudo-element technique.</p>
          </div>
        </div>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Glass Card</h3>
          <p className="text-slate-400">Glassmorphism effect with backdrop blur and transparency.</p>
        </div>

        {/* Image Card */}
        <div className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
          <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Image Card</h3>
            <p className="text-slate-400 mb-4">Card with an image header section.</p>
            <button className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Learn more →
            </button>
          </div>
        </div>

        {/* Stat Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-indigo-200 text-sm font-medium">Total Revenue</span>
            <svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-white mb-1">$45,231</p>
          <p className="text-indigo-200 text-sm">+20.1% from last month</p>
        </div>

        {/* User Card */}
        <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
            JD
          </div>
          <h3 className="text-xl font-semibold text-white">John Doe</h3>
          <p className="text-slate-400 mb-4">Software Engineer</p>
          <div className="flex justify-center gap-3">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
              Follow
            </button>
            <button className="px-4 py-2 border border-white/20 hover:bg-white/5 text-white text-sm font-medium rounded-lg transition-colors">
              Message
            </button>
          </div>
        </div>

        {/* Feature Card */}
        <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 group hover:bg-slate-800 transition-colors duration-300">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
          <p className="text-slate-400">Feature card with icon. Perfect for showcasing product features.</p>
        </div>

        {/* Pricing Card */}
        <div className="bg-slate-800/50 border-2 border-indigo-500 rounded-xl p-6 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
            POPULAR
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Pro Plan</h3>
          <p className="text-4xl font-bold text-white mb-1">$29<span className="text-lg text-slate-400">/mo</span></p>
          <p className="text-slate-400 text-sm mb-6">Perfect for growing teams</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-slate-300">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Unlimited projects
            </li>
            <li className="flex items-center gap-2 text-slate-300">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Priority support
            </li>
          </ul>
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
            Get Started
          </button>
        </div>

        {/* Notification Card */}
        <div className="bg-slate-800/50 border border-white/10 rounded-xl p-4 flex items-start gap-4">
          <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium">New message received</p>
            <p className="text-slate-400 text-sm truncate">You have a new message from Sarah...</p>
            <p className="text-slate-500 text-xs mt-1">2 minutes ago</p>
          </div>
          <button className="text-slate-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

