/* ============================================
   TYPOGRAPHY - Copy any typography style you need
   ============================================ */

import { CodeBlock } from './CodeBlock';

export function Typography() {
  return (
    <section id="typography" className="space-y-8">
      <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
        Typography
      </h2>

      <CodeBlock
        title="Headings"
        code={`<h1 className="text-5xl font-bold text-white">Heading 1</h1>
<h2 className="text-4xl font-bold text-white">Heading 2</h2>
<h3 className="text-3xl font-semibold text-white">Heading 3</h3>
<h4 className="text-2xl font-semibold text-white">Heading 4</h4>
<h5 className="text-xl font-medium text-white">Heading 5</h5>
<h6 className="text-lg font-medium text-white">Heading 6</h6>`}
      >
        <div className="space-y-4 p-6 bg-slate-800/30 rounded-xl border border-white/5">
          <h1 className="text-5xl font-bold text-white">Heading 1</h1>
          <h2 className="text-4xl font-bold text-white">Heading 2</h2>
          <h3 className="text-3xl font-semibold text-white">Heading 3</h3>
          <h4 className="text-2xl font-semibold text-white">Heading 4</h4>
          <h5 className="text-xl font-medium text-white">Heading 5</h5>
          <h6 className="text-lg font-medium text-white">Heading 6</h6>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Gradient Text"
        code={`<h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
  Gradient Heading
</h2>

<h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
  Another Gradient
</h2>

<h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
  Warm Gradient
</h2>`}
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gradient Heading
          </h2>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Another Gradient
          </h2>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
            Warm Gradient
          </h2>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Body Text"
        code={`<p className="text-lg text-slate-300 leading-relaxed">
  <strong className="text-white">Large text.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

<p className="text-base text-slate-400 leading-relaxed">
  <strong className="text-white">Base text.</strong> Ut enim ad minim veniam, quis nostrud exercitation.
</p>

<p className="text-sm text-slate-500 leading-relaxed">
  <strong className="text-slate-300">Small text.</strong> Duis aute irure dolor in reprehenderit.
</p>`}
      >
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg text-slate-300 leading-relaxed">
            <strong className="text-white">Large text.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-base text-slate-400 leading-relaxed">
            <strong className="text-white">Base text.</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            <strong className="text-slate-300">Small text.</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Text Styles"
        code={`<p className="text-white font-bold">Bold Text</p>
<p className="text-white italic">Italic Text</p>
<p className="text-white underline">Underlined</p>
<p className="text-white line-through">Strikethrough</p>
<p className="text-indigo-400">Colored Text</p>
<p className="text-white uppercase tracking-wider text-sm">Uppercase</p>`}
      >
        <div className="flex flex-wrap gap-6">
          <p className="text-white font-bold">Bold Text</p>
          <p className="text-white italic">Italic Text</p>
          <p className="text-white underline">Underlined</p>
          <p className="text-white line-through">Strikethrough</p>
          <p className="text-indigo-400">Colored Text</p>
          <p className="text-white uppercase tracking-wider text-sm">Uppercase</p>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Links"
        code={`<a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Simple Link</a>

<a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">Underlined Link</a>

<a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
  Link with Icon
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</a>`}
      >
        <div className="flex flex-wrap gap-6">
          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Simple Link</a>
          <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">Underlined Link</a>
          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
            Link with Icon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Blockquote"
        code={`<blockquote className="border-l-4 border-indigo-500 pl-6 py-2">
  <p className="text-lg text-slate-300 italic">
    "Design is not just what it looks like and feels like. Design is how it works."
  </p>
  <footer className="text-slate-500 mt-2">— Steve Jobs</footer>
</blockquote>`}
      >
        <blockquote className="border-l-4 border-indigo-500 pl-6 py-2">
          <p className="text-lg text-slate-300 italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <footer className="text-slate-500 mt-2">— Steve Jobs</footer>
        </blockquote>
      </CodeBlock>

      <CodeBlock
        title="Code"
        code={`{/* Inline code */}
<p className="text-slate-300">
  Inline code: <code className="px-2 py-1 bg-slate-800 text-indigo-400 rounded text-sm font-mono">const x = 42;</code>
</p>

{/* Code block */}
<pre className="p-4 bg-slate-800 rounded-lg overflow-x-auto">
  <code className="text-sm font-mono text-slate-300">{\`function greet(name: string) {
  return \\\`Hello, \\\${name}!\\\`;
}\`}</code>
</pre>`}
      >
        <div className="space-y-4">
          <p className="text-slate-300">
            Inline code: <code className="px-2 py-1 bg-slate-800 text-indigo-400 rounded text-sm font-mono">const x = 42;</code>
          </p>
          <pre className="p-4 bg-slate-800 rounded-lg overflow-x-auto">
            <code className="text-sm font-mono text-slate-300">{`function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}</code>
          </pre>
        </div>
      </CodeBlock>

      <CodeBlock
        title="Labels & Captions"
        code={`<label className="block text-sm font-medium text-slate-300">Form Label</label>
<p className="text-xs text-slate-500">Caption or helper text goes here</p>
<p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Overline Text</p>`}
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Form Label</label>
          <p className="text-xs text-slate-500">Caption or helper text goes here</p>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Overline Text</p>
        </div>
      </CodeBlock>
    </section>
  );
}
