/* ============================================
   SETUP GUIDE - How to use these components
   ============================================ */

import { useState } from 'react';

export function Setup() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const handleCopy = async (text: string, step: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(step);
      setTimeout(() => setCopiedStep(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CopyButton = ({ text, step }: { text: string; step: number }) => (
    <button
      onClick={() => handleCopy(text, step)}
      className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
        copiedStep === step
          ? 'text-emerald-400 bg-emerald-500/20'
          : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10'
      }`}
    >
      {copiedStep === step ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );

  return (
    <section className="space-y-8">
      <div>
        <h2 className="font-outfit text-3xl font-bold text-white border-b border-white/10 pb-4">
          Setup Guide
        </h2>
        <p className="text-slate-400 mt-4">
          Follow these steps to set up your React project with Tailwind CSS v4 so you can copy-paste any component from this kit.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">0</span>
          Prerequisites
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Node.js 18+ installed
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            npm, yarn, or pnpm package manager
          </li>
        </ul>
      </div>

      {/* Step 1: Create Project */}
      <div className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Create a New React + Vite Project
        </h3>
        <p className="text-slate-400 mb-4">
          Create a new React project with TypeScript using Vite:
        </p>
        <div className="relative">
          <pre className="bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm font-mono text-slate-300">npm create vite@latest my-project -- --template react-ts{'\n'}cd my-project{'\n'}npm install</code>
          </pre>
          <CopyButton text="npm create vite@latest my-project -- --template react-ts\ncd my-project\nnpm install" step={1} />
        </div>
      </div>

      {/* Step 2: Install Tailwind */}
      <div className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Install Tailwind CSS v4
        </h3>
        <p className="text-slate-400 mb-4">
          Install Tailwind CSS and its Vite plugin:
        </p>
        <div className="relative">
          <pre className="bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm font-mono text-slate-300">npm install tailwindcss @tailwindcss/vite</code>
          </pre>
          <CopyButton text="npm install tailwindcss @tailwindcss/vite" step={2} />
        </div>
      </div>

      {/* Step 3: Configure Vite */}
      <div className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          Configure Vite
        </h3>
        <p className="text-slate-400 mb-4">
          Update your <code className="px-2 py-0.5 bg-slate-800 text-indigo-400 rounded text-sm">vite.config.ts</code> to include the Tailwind plugin:
        </p>
        <div className="relative">
          <pre className="bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm font-mono text-slate-300">{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`}</code>
          </pre>
          <CopyButton text={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`} step={3} />
        </div>
      </div>

      {/* Step 4: Import Tailwind */}
      <div className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          Import Tailwind CSS
        </h3>
        <p className="text-slate-400 mb-4">
          Replace the contents of your <code className="px-2 py-0.5 bg-slate-800 text-indigo-400 rounded text-sm">src/index.css</code> with:
        </p>
        <div className="relative">
          <pre className="bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm font-mono text-slate-300">{`@import "tailwindcss";`}</code>
          </pre>
          <CopyButton text={`@import "tailwindcss";`} step={4} />
        </div>
      </div>

      {/* Step 5: Add Font (Optional) */}
      <div className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          Add Outfit Font
          <span className="text-xs font-normal text-slate-500 bg-slate-800 px-2 py-0.5 rounded">Optional</span>
        </h3>
        <p className="text-slate-400 mb-4">
          This component kit uses the Outfit font. Add it to your <code className="px-2 py-0.5 bg-slate-800 text-indigo-400 rounded text-sm">index.html</code>:
        </p>
        <div className="relative">
          <pre className="bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm font-mono text-slate-300">{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">`}</code>
          </pre>
          <CopyButton text={`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">`} step={5} />
        </div>
        <p className="text-slate-400 mt-4">
          Then add the font-family to your <code className="px-2 py-0.5 bg-slate-800 text-indigo-400 rounded text-sm">src/index.css</code>:
        </p>
        <div className="relative mt-4">
          <pre className="bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm font-mono text-slate-300">{`@import "tailwindcss";

@theme {
  --font-outfit: "Outfit", sans-serif;
}`}</code>
          </pre>
          <CopyButton text={`@import "tailwindcss";

@theme {
  --font-outfit: "Outfit", sans-serif;
}`} step={6} />
        </div>
      </div>

      {/* Step 6: Start Using */}
      <div className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          Start Using Components
        </h3>
        <p className="text-slate-400 mb-4">
          Run your dev server and start copying components:
        </p>
        <div className="relative">
          <pre className="bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm font-mono text-slate-300">npm run dev</code>
          </pre>
          <CopyButton text="npm run dev" step={7} />
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Pro Tips
        </h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold">•</span>
            All components use standard Tailwind CSS classes - no custom CSS required
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold">•</span>
            Components are built for dark mode by default - adapt colors for light mode as needed
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold">•</span>
            SVG icons are inline - replace them with your preferred icon library if desired
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-400 font-bold">•</span>
            Color palette uses Tailwind's default colors: <code className="px-1.5 py-0.5 bg-slate-800 text-indigo-400 rounded text-xs">slate</code>, <code className="px-1.5 py-0.5 bg-slate-800 text-indigo-400 rounded text-xs">indigo</code>, <code className="px-1.5 py-0.5 bg-slate-800 text-emerald-400 rounded text-xs">emerald</code>, <code className="px-1.5 py-0.5 bg-slate-800 text-rose-400 rounded text-xs">rose</code>, <code className="px-1.5 py-0.5 bg-slate-800 text-amber-400 rounded text-xs">amber</code>
          </li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Tech Stack Used</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">React 19</p>
            <p className="text-slate-400 text-sm">UI Library</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">TypeScript</p>
            <p className="text-slate-400 text-sm">Type Safety</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">Tailwind v4</p>
            <p className="text-slate-400 text-sm">Styling</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">Vite</p>
            <p className="text-slate-400 text-sm">Build Tool</p>
          </div>
        </div>
      </div>
    </section>
  );
}
