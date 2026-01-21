/* ============================================
   TABLES - Copy any table style you need
   ============================================ */

import { CodeBlock } from './CodeBlock';

export function Tables() {
  return (
    <section id="tables" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Tables
      </h2>

      <CodeBlock
        title="Basic Table"
        code={`<div className="overflow-x-auto rounded-xl border border-white/10">
  <table className="w-full">
    <thead>
      <tr className="bg-slate-800/50">
        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Name</th>
        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Email</th>
        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Role</th>
        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Status</th>
        <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-white/5">
      <tr className="hover:bg-white/5 transition-colors">
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <span className="text-white font-medium">John Doe</span>
          </div>
        </td>
        <td className="px-6 py-4 text-slate-400">john@example.com</td>
        <td className="px-6 py-4 text-slate-400">Admin</td>
        <td className="px-6 py-4">
          <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">Active</span>
        </td>
        <td className="px-6 py-4 text-right">
          <button className="text-slate-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`}
      >
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Name</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Email</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Role</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Status</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      JD
                    </div>
                    <span className="text-white font-medium">John Doe</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-400">john@example.com</td>
                <td className="px-6 py-4 text-slate-400">Admin</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      SJ
                    </div>
                    <span className="text-white font-medium">Sarah Johnson</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-400">sarah@example.com</td>
                <td className="px-6 py-4 text-slate-400">Editor</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      MK
                    </div>
                    <span className="text-white font-medium">Mike King</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-400">mike@example.com</td>
                <td className="px-6 py-4 text-slate-400">Viewer</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">Pending</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Striped Table"
        code={`<div className="overflow-x-auto rounded-xl border border-white/10">
  <table className="w-full">
    <thead>
      <tr className="bg-slate-800">
        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Product</th>
        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Category</th>
        <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">Price</th>
        <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-slate-800/30">
        <td className="px-6 py-4 text-white font-medium">MacBook Pro</td>
        <td className="px-6 py-4 text-slate-400">Electronics</td>
        <td className="px-6 py-4 text-right text-white">$2,499</td>
        <td className="px-6 py-4 text-right text-emerald-400">In Stock</td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-white font-medium">AirPods Pro</td>
        <td className="px-6 py-4 text-slate-400">Audio</td>
        <td className="px-6 py-4 text-right text-white">$249</td>
        <td className="px-6 py-4 text-right text-emerald-400">In Stock</td>
      </tr>
      <tr className="bg-slate-800/30">
        <td className="px-6 py-4 text-white font-medium">Magic Keyboard</td>
        <td className="px-6 py-4 text-slate-400">Accessories</td>
        <td className="px-6 py-4 text-right text-white">$99</td>
        <td className="px-6 py-4 text-right text-amber-400">Low Stock</td>
      </tr>
    </tbody>
  </table>
</div>`}
      >
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800">
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Product</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Category</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">Price</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-800/30">
                <td className="px-6 py-4 text-white font-medium">MacBook Pro</td>
                <td className="px-6 py-4 text-slate-400">Electronics</td>
                <td className="px-6 py-4 text-right text-white">$2,499</td>
                <td className="px-6 py-4 text-right text-emerald-400">In Stock</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white font-medium">AirPods Pro</td>
                <td className="px-6 py-4 text-slate-400">Audio</td>
                <td className="px-6 py-4 text-right text-white">$249</td>
                <td className="px-6 py-4 text-right text-emerald-400">In Stock</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-6 py-4 text-white font-medium">Magic Keyboard</td>
                <td className="px-6 py-4 text-slate-400">Accessories</td>
                <td className="px-6 py-4 text-right text-white">$99</td>
                <td className="px-6 py-4 text-right text-amber-400">Low Stock</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white font-medium">iPad Pro</td>
                <td className="px-6 py-4 text-slate-400">Tablets</td>
                <td className="px-6 py-4 text-right text-white">$1,099</td>
                <td className="px-6 py-4 text-right text-rose-400">Out of Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CodeBlock>
    </section>
  );
}
