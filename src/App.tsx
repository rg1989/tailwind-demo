import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
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
import { Setup } from './components/Setup'

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

function Layout() {
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
          {/* Setup Section */}
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Getting Started
          </p>
          <ul className="space-y-1 mb-6">
            <li>
              <NavLink
                to="/setup"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-400 font-medium'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Setup Guide
              </NavLink>
            </li>
          </ul>

          {/* Components Section */}
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Components
          </p>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <NavLink
                  to={`/${section.id}`}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg transition-colors text-sm ${
                      isActive
                        ? 'bg-indigo-600/20 text-indigo-400 font-medium'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {section.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 mx-4 mb-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl">
          <p className="text-sm text-slate-300 mb-2">
            <strong className="text-white">Pro tip:</strong> Click "View Code" on any component to see the code and copy it.
          </p>
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

        {/* Routes */}
        <div className="max-w-5xl mx-auto px-8 py-12">
          <Routes>
            <Route path="/" element={<Navigate to="/setup" replace />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/modals" element={<Modals />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/misc" element={<Misc />} />
          </Routes>

          {/* Footer */}
          <footer className="text-center py-12 mt-12 border-t border-white/5">
            <p className="text-slate-500 text-sm">
              Built for quick interview assignments
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
