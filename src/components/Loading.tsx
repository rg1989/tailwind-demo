/* ============================================
   LOADING STATES - Copy any loading style you need
   ============================================ */

export function Loading() {
  return (
    <section id="loading" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Loading States
      </h2>

      {/* Spinners */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Spinners</h3>
        <div className="flex flex-wrap items-center gap-8">
          {/* Simple Spinner */}
          <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
          
          {/* Larger Spinner */}
          <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
          
          {/* Dual Ring */}
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-pink-500/30 border-b-pink-500 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
          </div>
          
          {/* Dots */}
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          
          {/* Pulse */}
          <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Progress Bars</h3>
        <div className="space-y-6">
          {/* Basic Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Progress</span>
              <span className="text-slate-400">60%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-3/5 bg-indigo-500 rounded-full"></div>
            </div>
          </div>

          {/* Gradient Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Upload</span>
              <span className="text-slate-400">75%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>

          {/* Striped Animated */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Processing</span>
              <span className="text-slate-400">45%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full w-[45%] bg-emerald-500 rounded-full relative overflow-hidden"
                style={{
                  backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                  backgroundSize: '1rem 1rem',
                  animation: 'progress-stripes 1s linear infinite'
                }}
              ></div>
            </div>
          </div>

          {/* Indeterminate */}
          <div className="space-y-2">
            <span className="text-slate-400 text-sm">Indeterminate Loading</span>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden relative">
              <div 
                className="absolute h-full w-1/3 bg-indigo-500 rounded-full"
                style={{
                  animation: 'indeterminate 1.5s ease-in-out infinite'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton Loaders */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Skeleton Loaders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Skeleton */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-slate-700 rounded animate-pulse w-1/2"></div>
            <div className="h-24 bg-slate-700 rounded animate-pulse"></div>
            <div className="flex gap-2">
              <div className="h-8 bg-slate-700 rounded animate-pulse w-20"></div>
              <div className="h-8 bg-slate-700 rounded animate-pulse w-20"></div>
            </div>
          </div>

          {/* User Skeleton */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-slate-700 rounded animate-pulse w-32"></div>
                <div className="h-3 bg-slate-700 rounded animate-pulse w-24"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
              <div className="h-3 bg-slate-700 rounded animate-pulse w-5/6"></div>
              <div className="h-3 bg-slate-700 rounded animate-pulse w-4/6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Button */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Loading Button</h3>
        <div className="flex flex-wrap gap-4">
          <button disabled className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg opacity-75 cursor-not-allowed">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </button>
        </div>
      </div>

      <style>{`
        @keyframes progress-stripes {
          from { background-position: 1rem 0; }
          to { background-position: 0 0; }
        }
        @keyframes indeterminate {
          0% { left: -33%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}

