import { useEffect, useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchModal from './components/SearchModal.jsx'
import NotificationPanel from './components/NotificationPanel.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import { announcements } from './data/mataf-data.js'

import Home from './pages/Home.jsx'
import Agenda from './pages/Agenda.jsx'
import Dresscode from './pages/Dresscode.jsx'
import Announcements from './pages/Announcements.jsx'
import Rundown from './pages/Rundown.jsx'
import Assignments from './pages/Assignments.jsx'
import Guide from './pages/Guide.jsx'
import Faq from './pages/Faq.jsx'
import Location from './pages/Location.jsx'
import Committee from './pages/Committee.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorage('mataf-dark-mode', false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [easterEgg, setEasterEgg] = useState(null)
  const keyBuffer = useRef('')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  // Keyboard shortcuts: Ctrl+K for search, typing "sudo mataf" for easter egg
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((o) => !o)
        return
      }
      if (e.key.length === 1) {
        keyBuffer.current = (keyBuffer.current + e.key).slice(-20).toLowerCase()
        if (keyBuffer.current.includes('sudo mataf')) {
          setEasterEgg('Permission granted. Welcome to TI 2026 🚀')
          keyBuffer.current = ''
          setTimeout(() => setEasterEgg(null), 4000)
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenNotif={() => setNotifOpen((o) => !o)}
        notifCount={announcements.length}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
      />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/dresscode" element={<Dresscode />} />
          <Route path="/pengumuman" element={<Announcements />} />
          <Route path="/rundown" element={<Rundown />} />
          <Route path="/tugas" element={<Assignments />} />
          <Route path="/panduan" element={<Guide />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/lokasi" element={<Location />} />
          <Route path="/panitia" element={<Committee />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <NotificationPanel open={notifOpen} onClose={() => setNotifOpen(false)} />

      {easterEgg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-navy-950 text-amber px-5 py-3 rounded-xl shadow-glow font-display text-sm">
          {easterEgg}
        </div>
      )}
    </div>
  )
}
