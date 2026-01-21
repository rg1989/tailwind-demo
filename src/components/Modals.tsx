/* ============================================
   MODALS & DIALOGS - Copy any modal style you need
   ============================================ */

import { CodeBlock } from './CodeBlock';

export function Modals() {
  return (
    <section id="modals" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Modals & Dialogs
      </h2>

      <p className="text-slate-400">These are static modal examples. Copy the structure and add your own state management.</p>

      <CodeBlock
        title="Basic Modal"
        code={`{/* Modal Backdrop */}
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
  {/* Modal Content */}
  <div className="bg-slate-800 border border-white/10 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-xl font-semibold text-white">Modal Title</h4>
      <button className="text-slate-400 hover:text-white transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <p className="text-slate-400 mb-6">
      This is a basic modal dialog. You can add any content here.
    </p>
    <div className="flex justify-end gap-3">
      <button className="px-4 py-2 text-slate-400 hover:text-white font-medium rounded-lg transition-colors">
        Cancel
      </button>
      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>`}
      >
        <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-6">
          <div className="bg-slate-800 border border-white/10 rounded-xl p-6 max-w-md mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold text-white">Modal Title</h4>
              <button className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-slate-400 mb-6">
              This is a basic modal dialog. You can add any content here.
            </p>
            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 text-slate-400 hover:text-white font-medium rounded-lg transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Confirmation Modal"
        code={`<div className="bg-slate-800 border border-white/10 rounded-xl p-6 max-w-md mx-auto shadow-2xl text-center">
  <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
    <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  </div>
  <h4 className="text-xl font-semibold text-white mb-2">Delete Item?</h4>
  <p className="text-slate-400 mb-6">
    This action cannot be undone. Are you sure you want to delete this item?
  </p>
  <div className="flex justify-center gap-3">
    <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors">
      Cancel
    </button>
    <button className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors">
      Delete
    </button>
  </div>
</div>`}
      >
        <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-6">
          <div className="bg-slate-800 border border-white/10 rounded-xl p-6 max-w-md mx-auto shadow-2xl text-center">
            <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Delete Item?</h4>
            <p className="text-slate-400 mb-6">
              This action cannot be undone. Are you sure you want to delete this item?
            </p>
            <div className="flex justify-center gap-3">
              <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Success Modal"
        code={`<div className="bg-slate-800 border border-white/10 rounded-xl p-6 max-w-md mx-auto shadow-2xl text-center">
  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <h4 className="text-xl font-semibold text-white mb-2">Payment Successful!</h4>
  <p className="text-slate-400 mb-6">
    Your payment of $49.99 has been processed successfully.
  </p>
  <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
    Continue
  </button>
</div>`}
      >
        <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-6">
          <div className="bg-slate-800 border border-white/10 rounded-xl p-6 max-w-md mx-auto shadow-2xl text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Payment Successful!</h4>
            <p className="text-slate-400 mb-6">
              Your payment of $49.99 has been processed successfully.
            </p>
            <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
              Continue
            </button>
          </div>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Form Modal"
        code={`<div className="bg-slate-800 border border-white/10 rounded-xl p-6 max-w-md mx-auto shadow-2xl">
  <div className="flex items-center justify-between mb-6">
    <h4 className="text-xl font-semibold text-white">Create Project</h4>
    <button className="text-slate-400 hover:text-white transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1">Project Name</label>
      <input
        type="text"
        placeholder="Enter project name"
        className="w-full px-4 py-2 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
      <textarea
        rows={3}
        placeholder="Enter description"
        className="w-full px-4 py-2 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm resize-none"
      />
    </div>
  </div>
  <div className="flex justify-end gap-3 mt-6">
    <button className="px-4 py-2 text-slate-400 hover:text-white font-medium rounded-lg transition-colors">
      Cancel
    </button>
    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
      Create
    </button>
  </div>
</div>`}
      >
        <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-6">
          <div className="bg-slate-800 border border-white/10 rounded-xl p-6 max-w-md mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-semibold text-white">Create Project</h4>
              <button className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Project Name</label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  className="w-full px-4 py-2 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Enter description"
                  className="w-full px-4 py-2 bg-slate-700 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm resize-none"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 text-slate-400 hover:text-white font-medium rounded-lg transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                Create
              </button>
            </div>
          </div>
        </div>
      </CodeBlock>
    </section>
  );
}
