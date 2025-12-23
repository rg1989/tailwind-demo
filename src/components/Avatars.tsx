/* ============================================
   AVATARS - Copy any avatar style you need
   ============================================ */

export function Avatars() {
  return (
    <section id="avatars" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Avatars
      </h2>

      {/* Avatar Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Avatar Sizes</h3>
        <div className="flex items-end gap-4">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            XS
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            SM
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
            MD
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
            LG
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            XL
          </div>
        </div>
      </div>

      {/* Avatar with Status */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Avatar with Status</h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
              AB
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-amber-500 border-2 border-slate-900 rounded-full"></span>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
              MK
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-slate-500 border-2 border-slate-900 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Avatar Group / Stack</h3>
        <div className="flex -space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold ring-2 ring-slate-900">
            A
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold ring-2 ring-slate-900">
            B
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold ring-2 ring-slate-900">
            C
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold ring-2 ring-slate-900">
            D
          </div>
          <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-slate-900">
            +5
          </div>
        </div>
      </div>

      {/* Square Avatars */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Square / Rounded Avatars</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold">
            AB
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold">
            MK
          </div>
        </div>
      </div>

      {/* Avatar with Badge */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Avatar with Badge</h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
              AB
            </div>
            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-indigo-500 text-white text-[10px] font-bold rounded-full">
              PRO
            </span>
          </div>
        </div>
      </div>

      {/* Avatar with Text */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-slate-300">Avatar with Text</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              JD
            </div>
            <div>
              <p className="text-white font-medium">John Doe</p>
              <p className="text-slate-400 text-sm">Software Engineer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              SJ
            </div>
            <div>
              <p className="text-white font-medium">Sarah Johnson</p>
              <p className="text-slate-400 text-sm">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

