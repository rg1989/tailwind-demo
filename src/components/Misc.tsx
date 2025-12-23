/* ============================================
   MISC COMPONENTS - Dividers, Tooltips, Dropdowns
   ============================================ */

export function Misc() {
  return (
    <section id="misc" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Miscellaneous
      </h2>

      {/* Dividers */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Dividers</h3>
        <div className="space-y-6">
          {/* Simple Divider */}
          <hr className="border-white/10" />
          
          {/* Divider with Text */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-slate-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Gradient Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        </div>
      </div>

      {/* Dropdown */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Dropdown Menu (Static)</h3>
        <div className="relative inline-block">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-white/10 rounded-lg text-white hover:bg-slate-700 transition-colors">
            Options
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Dropdown Menu - add your own toggle logic */}
          <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Duplicate
            </a>
            <hr className="border-white/10" />
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-rose-400 hover:bg-rose-500/10 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </a>
          </div>
        </div>
      </div>

      {/* Tooltip (CSS only) */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Tooltips (CSS Hover)</h3>
        <div className="flex gap-8">
          <div className="relative group">
            <button className="px-4 py-2 bg-slate-800 border border-white/10 rounded-lg text-white">
              Hover me (top)
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-700 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
              Tooltip text
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-700"></div>
            </div>
          </div>
          <div className="relative group">
            <button className="px-4 py-2 bg-slate-800 border border-white/10 rounded-lg text-white">
              Hover me (bottom)
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-slate-700 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
              Tooltip text
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Empty State</h3>
        <div className="p-12 bg-slate-800/30 border border-dashed border-white/10 rounded-xl text-center">
          <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h4 className="text-xl font-semibold text-white mb-2">No items yet</h4>
          <p className="text-slate-400 mb-6 max-w-sm mx-auto">Get started by creating your first item. It only takes a few seconds.</p>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Item
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Keyboard Shortcuts / Keys</h3>
        <div className="flex flex-wrap gap-4">
          <kbd className="px-3 py-1.5 bg-slate-800 border border-white/20 rounded-lg text-slate-300 text-sm font-mono shadow-lg">
            ⌘
          </kbd>
          <kbd className="px-3 py-1.5 bg-slate-800 border border-white/20 rounded-lg text-slate-300 text-sm font-mono shadow-lg">
            Ctrl
          </kbd>
          <kbd className="px-3 py-1.5 bg-slate-800 border border-white/20 rounded-lg text-slate-300 text-sm font-mono shadow-lg">
            ⇧ Shift
          </kbd>
          <kbd className="px-3 py-1.5 bg-slate-800 border border-white/20 rounded-lg text-slate-300 text-sm font-mono shadow-lg">
            Enter ↵
          </kbd>
          <div className="flex items-center gap-1">
            <kbd className="px-2 py-1 bg-slate-800 border border-white/20 rounded text-slate-300 text-xs font-mono">⌘</kbd>
            <span className="text-slate-500">+</span>
            <kbd className="px-2 py-1 bg-slate-800 border border-white/20 rounded text-slate-300 text-xs font-mono">K</kbd>
          </div>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Rating Stars</h3>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-6 h-6 ${star <= 4 ? 'text-amber-400' : 'text-slate-600'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-slate-400">4.0 out of 5</span>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Step Indicator</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              ✓
            </div>
            <span className="text-white font-medium">Details</span>
          </div>
          <div className="flex-1 h-0.5 bg-indigo-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              2
            </div>
            <span className="text-white font-medium">Payment</span>
          </div>
          <div className="flex-1 h-0.5 bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 text-sm font-bold">
              3
            </div>
            <span className="text-slate-400 font-medium">Confirm</span>
          </div>
        </div>
      </div>
    </section>
  );
}

