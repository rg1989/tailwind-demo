import { Buttons } from './components/Buttons'
import { Cards } from './components/Cards'
import { Forms } from './components/Forms'
import { Alerts } from './components/Alerts'
import { Badges } from './components/Badges'
import { Avatars } from './components/Avatars'
import { Tables } from './components/Tables'
import { Lists } from './components/Lists'
import { Loading } from './components/Loading'
import { Navigation } from './components/Navigation'
import { Modals } from './components/Modals'
import { Typography } from './components/Typography'
import { Misc } from './components/Misc'

const sections = [
  { id: 'buttons', label: 'Buttons' },
  { id: 'cards', label: 'Cards' },
  { id: 'forms', label: 'Forms & Inputs' },
  { id: 'alerts', label: 'Alerts' },
  { id: 'badges', label: 'Badges & Tags' },
  { id: 'avatars', label: 'Avatars' },
  { id: 'tables', label: 'Tables' },
  { id: 'lists', label: 'Lists' },
  { id: 'loading', label: 'Loading States' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'modals', label: 'Modals' },
  { id: 'typography', label: 'Typography' },
  { id: 'misc', label: 'Miscellaneous' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-outfit">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900/80 backdrop-blur-xl border-r border-white/5 z-50 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Component Kit
          </h1>
          <p className="text-slate-500 text-sm">Copy-paste ready components</p>
        </div>
        
        <nav className="px-4 pb-6">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Components
          </p>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 mx-4 mb-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl">
          <p className="text-sm text-slate-300 mb-2">
            <strong className="text-white">Pro tip:</strong> Open the source files in your IDE to copy component code.
          </p>
          <code className="text-xs text-indigo-400 font-mono">src/components/</code>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-5xl mx-auto px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Frontend Interview Component Kit
            </h1>
            <p className="text-slate-400">
              Pre-styled Tailwind CSS components ready to copy-paste into your interview assignments.
              <span className="text-indigo-400 ml-2">React + TypeScript + Tailwind v4</span>
            </p>
          </div>
        </header>

        {/* Component Sections */}
        <div className="max-w-5xl mx-auto px-8 py-12 space-y-24">
          <Buttons />
          <Cards />
          <Forms />
          <Alerts />
          <Badges />
          <Avatars />
          <Tables />
          <Lists />
          <Loading />
          <Navigation />
          <Modals />
          <Typography />
          <Misc />

          {/* Footer */}
          <footer className="text-center py-12 border-t border-white/5">
            <p className="text-slate-500 text-sm">
              Built for quick interview assignments • 
              <span className="text-slate-400 ml-1">Open source files in <code className="text-indigo-400">src/components/</code> to copy code</span>
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}

