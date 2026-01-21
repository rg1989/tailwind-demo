/* ============================================
   LISTS - Copy any list style you need
   ============================================ */

import { CodeBlock } from './CodeBlock';

export function Lists() {
  return (
    <section id="lists" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Lists
      </h2>

      <CodeBlock
        title="Simple List"
        code={`<ul className="bg-slate-800/50 border border-white/10 rounded-xl divide-y divide-white/5">
  <li className="px-4 py-3 text-slate-300 hover:bg-white/5 transition-colors cursor-pointer">
    List Item 1
  </li>
  <li className="px-4 py-3 text-slate-300 hover:bg-white/5 transition-colors cursor-pointer">
    List Item 2
  </li>
  <li className="px-4 py-3 text-slate-300 hover:bg-white/5 transition-colors cursor-pointer">
    List Item 3
  </li>
</ul>`}
      >
        <ul className="bg-slate-800/50 border border-white/10 rounded-xl divide-y divide-white/5 max-w-md">
          <li className="px-4 py-3 text-slate-300 hover:bg-white/5 transition-colors cursor-pointer">
            List Item 1
          </li>
          <li className="px-4 py-3 text-slate-300 hover:bg-white/5 transition-colors cursor-pointer">
            List Item 2
          </li>
          <li className="px-4 py-3 text-slate-300 hover:bg-white/5 transition-colors cursor-pointer">
            List Item 3
          </li>
        </ul>
      </CodeBlock>

      <CodeBlock
        title="List with Icons"
        code={`<ul className="bg-slate-800/50 border border-white/10 rounded-xl divide-y divide-white/5">
  <li className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer">
    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    </div>
    <span className="text-slate-300">Documents</span>
  </li>
  <li className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer">
    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <span className="text-slate-300">Images</span>
  </li>
</ul>`}
      >
        <ul className="bg-slate-800/50 border border-white/10 rounded-xl divide-y divide-white/5 max-w-md">
          <li className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <span className="text-slate-300">Documents</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-slate-300">Images</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <span className="text-slate-300">Music</span>
          </li>
        </ul>
      </CodeBlock>

      <CodeBlock
        title="Todo List"
        code={`<ul className="space-y-2">
  <li className="flex items-center gap-3 p-3 bg-slate-800/50 border border-white/10 rounded-lg">
    <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0" />
    <span className="text-slate-400 line-through">Complete project setup</span>
  </li>
  <li className="flex items-center gap-3 p-3 bg-slate-800/50 border border-white/10 rounded-lg">
    <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0" />
    <span className="text-slate-300">Write documentation</span>
  </li>
</ul>`}
      >
        <ul className="space-y-2 max-w-md">
          <li className="flex items-center gap-3 p-3 bg-slate-800/50 border border-white/10 rounded-lg">
            <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0" />
            <span className="text-slate-400 line-through">Complete project setup</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-slate-800/50 border border-white/10 rounded-lg">
            <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0" />
            <span className="text-slate-400 line-through">Design component library</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-slate-800/50 border border-white/10 rounded-lg">
            <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0" />
            <span className="text-slate-300">Write documentation</span>
          </li>
          <li className="flex items-center gap-3 p-3 bg-slate-800/50 border border-white/10 rounded-lg">
            <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0" />
            <span className="text-slate-300">Deploy to production</span>
          </li>
        </ul>
      </CodeBlock>

      <CodeBlock
        title="Activity Feed"
        code={`<div className="space-y-4">
  <div className="flex gap-3">
    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
      JD
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-slate-300"><span className="text-white font-medium">John Doe</span> commented on your post</p>
      <p className="text-slate-500 text-sm">2 minutes ago</p>
    </div>
  </div>
  <div className="flex gap-3">
    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
      SJ
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-slate-300"><span className="text-white font-medium">Sarah Johnson</span> liked your photo</p>
      <p className="text-slate-500 text-sm">15 minutes ago</p>
    </div>
  </div>
</div>`}
      >
        <div className="space-y-4 max-w-md">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-300"><span className="text-white font-medium">John Doe</span> commented on your post</p>
              <p className="text-slate-500 text-sm">2 minutes ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
              SJ
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-300"><span className="text-white font-medium">Sarah Johnson</span> liked your photo</p>
              <p className="text-slate-500 text-sm">15 minutes ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
              MK
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-300"><span className="text-white font-medium">Mike King</span> started following you</p>
              <p className="text-slate-500 text-sm">1 hour ago</p>
            </div>
          </div>
        </div>
      </CodeBlock>
    </section>
  );
}
