/* ============================================
   ALERTS & NOTIFICATIONS - Copy any alert style you need
   ============================================ */

export function Alerts() {
  return (
    <section id="alerts" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Alerts & Notifications
      </h2>

      <div className="space-y-4">
        {/* Success Alert */}
        <div className="flex items-center gap-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
          <div className="shrink-0 w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-emerald-300 font-medium">Success!</p>
            <p className="text-emerald-200/70 text-sm">Your changes have been saved successfully.</p>
          </div>
          <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Error Alert */}
        <div className="flex items-center gap-4 p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
          <div className="shrink-0 w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-rose-300 font-medium">Error!</p>
            <p className="text-rose-200/70 text-sm">Something went wrong. Please try again.</p>
          </div>
          <button className="text-rose-400 hover:text-rose-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Warning Alert */}
        <div className="flex items-center gap-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <div className="shrink-0 w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-amber-300 font-medium">Warning!</p>
            <p className="text-amber-200/70 text-sm">Please review your settings before proceeding.</p>
          </div>
          <button className="text-amber-400 hover:text-amber-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Info Alert */}
        <div className="flex items-center gap-4 p-4 bg-sky-500/10 border border-sky-500/30 rounded-lg">
          <div className="shrink-0 w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sky-300 font-medium">Info</p>
            <p className="text-sky-200/70 text-sm">A new software update is available.</p>
          </div>
          <button className="text-sky-400 hover:text-sky-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Simple Alert */}
        <div className="p-4 bg-slate-800 border-l-4 border-indigo-500 rounded-r-lg">
          <p className="text-white font-medium">Simple left-border alert</p>
          <p className="text-slate-400 text-sm">This is a simpler alert style with a left border accent.</p>
        </div>

        {/* Toast Style */}
        <div className="max-w-sm ml-auto">
          <div className="bg-slate-800 border border-white/10 rounded-xl p-4 shadow-xl flex items-start gap-3">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">Toast Notification</p>
              <p className="text-slate-400 text-xs">This is how a toast looks!</p>
            </div>
            <button className="text-slate-500 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

