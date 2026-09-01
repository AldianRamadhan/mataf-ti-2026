import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { events, announcements } from '../data/mataf-data.js'

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return []
    const out = []

    if (term.includes('besok') || term.includes('tomorrow') || term.includes('acara') || term.includes('jadwal')) {
      out.push({ label: 'Lihat rundown acara', to: '/rundown', hint: 'Rundown' })
    }
    if (term.includes('seragam') || term.includes('pakai') || term.includes('dresscode')) {
      out.push({ label: 'Halaman Dresscode', to: '/dresscode', hint: 'Dresscode' })
    }

    events.forEach((e) => {
      if (e.title.toLowerCase().includes(term) || e.location.toLowerCase().includes(term)) {
        out.push({ label: `${e.title} — Day ${e.day}`, to: '/rundown', hint: 'Rundown' })
      }
    })
    announcements.forEach((a) => {
      if (a.title.toLowerCase().includes(term) || a.body.toLowerCase().includes(term)) {
        out.push({ label: a.title, to: '/pengumuman', hint: 'Pengumuman' })
      }
    })

    return out.slice(0, 8)
  }, [q])

  if (!open) return null

  const go = (to) => {
    navigate(to)
    setQ('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-navy-950/60 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-lg glass rounded-2xl shadow-glow overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari 'besok', 'seragam', 'lokasi'..."
          className="w-full px-5 py-4 bg-transparent outline-none text-base"
        />
        {results.length > 0 && (
          <div className="border-t border-navy-900/10 dark:border-white/10 max-h-72 overflow-y-auto">
            {results.map((r, i) => (
              <button
                key={i}
                onClick={() => go(r.to)}
                className="w-full text-left px-5 py-3 hover:bg-trail/10 flex items-center justify-between text-sm"
              >
                <span>{r.label}</span>
                <span className="text-xs text-navy-900/40 dark:text-white/40">{r.hint}</span>
              </button>
            ))}
          </div>
        )}
        {q && results.length === 0 && (
          <p className="px-5 py-4 text-sm text-navy-900/50 dark:text-white/50 border-t border-navy-900/10 dark:border-white/10">
            Tidak ada hasil untuk "{q}"
          </p>
        )}
      </div>
    </div>
  )
}
