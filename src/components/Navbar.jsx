import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SITE } from '../data/mataf-data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/pengumuman', label: 'Pengumuman' },
  { to: '/dresscode', label: 'Dresscode' },
  { to: '/tugas', label: 'Tugas' },
  { to: '/rundown', label: 'Rundown' },
  { to: '/panduan', label: 'Panduan' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Navbar({ onOpenSearch, onOpenNotif, notifCount, darkMode, onToggleDark }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 glass">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <NavLink to="/" className="flex items-center gap-2.5 font-display font-bold text-lg" onClick={() => setOpen(false)}>
          <img
            src="/Screenshot 2026-08-20 181530.png"
            alt="Logo MATAF TI"
            className="w-8 h-8 rounded-lg object-contain bg-navy-900/5 dark:bg-white/10 p-0.5 border border-black/10 dark:border-white/10"
          />
          <span>MATAF TI <span className="text-trail">2026</span></span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink 
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-trail bg-trail/10' : 'hover:bg-navy-900/5 dark:hover:bg-white/10'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenSearch}
            aria-label="Cari (Ctrl+K)"
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-navy-900/5 dark:hover:bg-white/10 text-sm"
            title="Cari (Ctrl+K)"
          >
            🔍
          </button>
          <button
            onClick={onOpenNotif}
            aria-label="Notifikasi"
            className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-navy-900/5 dark:hover:bg-white/10"
          >
            🔔
            {notifCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-amber text-navy-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {notifCount}
              </span>
            )}
          </button>
          <button
            onClick={onToggleDark}
            aria-label="Ganti tema"
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-navy-900/5 dark:hover:bg-white/10"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-navy-900/5 dark:hover:bg-white/10"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-navy-900/10 dark:border-white/10 px-4 py-2 flex flex-col">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-3 rounded-lg text-sm font-medium ${isActive ? 'text-trail bg-trail/10' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
