/* ============================================
   BUTTONS - Copy any button style you need
   ============================================ */

import { CodeBlock } from './CodeBlock';

export function Buttons() {
    return (
        <section id="buttons" className="space-y-8">
            <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
                Buttons
            </h2>

            {/* Primary Buttons */}
            <CodeBlock
                title="Primary Buttons"
                code={`<button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
  Primary Button
</button>

<button className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25">
  Success
</button>

<button className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-rose-500/25">
  Danger
</button>

<button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-amber-500/25">
  Warning
</button>`}
            >
                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
                        Primary Button
                    </button>
                    <button className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25">
                        Success
                    </button>
                    <button className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-rose-500/25">
                        Danger
                    </button>
                    <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-amber-500/25">
                        Warning
                    </button>
                </div>
            </CodeBlock>

            {/* Outline Buttons */}
            <CodeBlock
                title="Outline Buttons"
                code={`<button className="px-6 py-2.5 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-medium rounded-lg transition-all duration-200">
  Outline Primary
</button>

<button className="px-6 py-2.5 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-medium rounded-lg transition-all duration-200">
  Outline Success
</button>

<button className="px-6 py-2.5 border-2 border-rose-500 text-rose-400 hover:bg-rose-500/10 font-medium rounded-lg transition-all duration-200">
  Outline Danger
</button>`}
            >
                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2.5 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-medium rounded-lg transition-all duration-200">
                        Outline Primary
                    </button>
                    <button className="px-6 py-2.5 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-medium rounded-lg transition-all duration-200">
                        Outline Success
                    </button>
                    <button className="px-6 py-2.5 border-2 border-rose-500 text-rose-400 hover:bg-rose-500/10 font-medium rounded-lg transition-all duration-200">
                        Outline Danger
                    </button>
                </div>
            </CodeBlock>

            {/* Ghost Buttons */}
            <CodeBlock
                title="Ghost Buttons"
                code={`<button className="px-6 py-2.5 text-indigo-400 hover:bg-indigo-500/10 font-medium rounded-lg transition-all duration-200">
  Ghost Primary
</button>

<button className="px-6 py-2.5 text-slate-400 hover:bg-white/5 font-medium rounded-lg transition-all duration-200">
  Ghost Neutral
</button>`}
            >
                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2.5 text-indigo-400 hover:bg-indigo-500/10 font-medium rounded-lg transition-all duration-200">
                        Ghost Primary
                    </button>
                    <button className="px-6 py-2.5 text-slate-400 hover:bg-white/5 font-medium rounded-lg transition-all duration-200">
                        Ghost Neutral
                    </button>
                </div>
            </CodeBlock>

            {/* Button Sizes */}
            <CodeBlock
                title="Button Sizes"
                code={`<button className="px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-all duration-200">
  Small
</button>

<button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200">
  Medium
</button>

<button className="px-8 py-3 text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200">
  Large
</button>`}
            >
                <div className="flex flex-wrap items-center gap-4">
                    <button className="px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-all duration-200">
                        Small
                    </button>
                    <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200">
                        Medium
                    </button>
                    <button className="px-8 py-3 text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200">
                        Large
                    </button>
                </div>
            </CodeBlock>

            {/* Icon Buttons */}
            <CodeBlock
                title="Icon Buttons"
                code={`{/* Button with leading icon */}
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  Add Item
</button>

{/* Icon-only button */}
<button className="p-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-200">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

{/* Circular icon button */}
<button className="p-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-full transition-all duration-200">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>`}
            >
                <div className="flex flex-wrap gap-4">
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Item
                    </button>
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Confirm
                    </button>
                    <button className="p-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button className="p-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-full transition-all duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </CodeBlock>

            {/* Pill Buttons */}
            <CodeBlock
                title="Pill Buttons"
                code={`<button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg">
  Gradient Pill
</button>

<button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-200">
  Glass Pill
</button>`}
            >
                <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg">
                        Gradient Pill
                    </button>
                    <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-200">
                        Glass Pill
                    </button>
                </div>
            </CodeBlock>

            {/* Disabled State */}
            <CodeBlock
                title="Disabled State"
                code={`<button disabled className="px-6 py-2.5 bg-slate-600 text-slate-400 font-medium rounded-lg cursor-not-allowed opacity-50">
  Disabled
</button>`}
            >
                <div className="flex flex-wrap gap-4">
                    <button disabled className="px-6 py-2.5 bg-slate-600 text-slate-400 font-medium rounded-lg cursor-not-allowed opacity-50">
                        Disabled
                    </button>
                </div>
            </CodeBlock>
        </section>
    );
}
