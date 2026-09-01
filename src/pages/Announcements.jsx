import { useState, useMemo } from 'react'
import { announcements } from '../data/mataf-data.js'

const CATEGORY_STYLE = {
  Important: 'bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-800',
  Event: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800',
  Assignment: 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800',
  Reminder: 'bg-purple-100 dark:bg-purple-950/80 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-800',
  Information: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800',
}

const CATEGORIES = ['All', 'Important', 'Event', 'Assignment', 'Reminder', 'Information']

const dateFmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

export default function Announcements() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = useMemo(() => {
    return announcements
      .filter((a) => cat === 'All' || a.category === cat)
      .filter((a) => (a.title + a.body).toLowerCase().includes(q.toLowerCase()))
  }, [q, cat])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
      {/* Header Halaman */}
      <div className="text-center sm:text-left border-b-2 border-black/15 dark:border-white/15 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-blue-300 dark:border-blue-700">
          <span>📢</span> Informasi Resmi
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          Pengumuman MATAF TI
        </h1>
        <p className="text-sm sm:text-base font-bold text-black/70 dark:text-white/60 mt-2">
          Pemberitahuan terkini dan informasi penting seputar rangkaian kegiatan MATAF TI 2026.
        </p>
      </div>

      {/* Input Pencarian */}
      <div className="relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari pengumuman..."
          className="w-full px-5 py-3.5 rounded-2xl border-2 border-black/20 dark:border-white/15 bg-white dark:bg-[#1a1a1a] text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 text-sm font-medium outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors shadow-sm"
        />
      </div>

      {/* Filter Kategori */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border-2 transition-all ${
              cat === c
                ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
                : 'bg-white dark:bg-[#1a1a1a] text-black/75 dark:text-white/70 border-black/15 dark:border-white/15 hover:border-black dark:hover:border-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Daftar Pengumuman */}
      <div className="space-y-4">
        {filtered.map((a) => (
          <div
            key={a.id}
            className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/20 dark:border-white/15 shadow-sm hover:border-black dark:hover:border-white transition-all space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-3">
              <span className={`text-[11px] font-mono font-black uppercase px-2.5 py-1 rounded-lg ${CATEGORY_STYLE[a.category] || 'bg-black/10 text-black'}`}>
                {a.category === 'Important' ? '🔴 ' : ''}{a.category}
              </span>
              <span className="text-xs font-mono font-bold text-black/60 dark:text-white/50">
                {dateFmt(a.date)}
              </span>
            </div>
            <h2 className="font-black text-lg sm:text-xl text-black dark:text-white leading-snug">
              {a.title}
            </h2>
            <p className="text-sm font-medium text-black/80 dark:text-white/75 leading-relaxed">
              {a.body}
            </p>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-dashed border-black/20 dark:border-white/20">
            <p className="text-sm font-bold text-black/60 dark:text-white/50">
              Tidak ada pengumuman yang sesuai dengan pencarian Anda.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
