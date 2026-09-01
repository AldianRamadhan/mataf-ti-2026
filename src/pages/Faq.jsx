import { useState, useMemo } from 'react'
import { faqs } from '../data/mataf-data.js'

export default function Faq() {
  const [q, setQ] = useState('')
  const [openIdx, setOpenIdx] = useState(0)

  const filtered = useMemo(
    () => faqs.filter((f) => f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase())),
    [q]
  )

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-display font-bold text-3xl mb-2">FAQ</h1>
      <p className="text-navy-900/60 dark:text-white/60 mb-6">Pertanyaan yang sering ditanyakan mahasiswa baru.</p>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Cari pertanyaan..."
        className="w-full px-4 py-3 rounded-xl border border-navy-900/10 dark:border-white/10 bg-transparent mb-6 outline-none focus:border-trail"
      />

      <div className="space-y-2">
        {filtered.map((f, i) => {
          const isOpen = openIdx === i
          return (
            <div key={i} className="rounded-xl border border-navy-900/10 dark:border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between text-left px-4 py-3.5 font-medium hover:bg-navy-900/5 dark:hover:bg-white/5"
              >
                {f.q}
                <span className="text-trail flex-shrink-0 ml-3">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="px-4 pb-4 text-sm text-navy-900/60 dark:text-white/60">{f.a}</p>}
            </div>
          )
        })}
        {filtered.length === 0 && <p className="text-sm text-navy-900/50 dark:text-white/50 py-10 text-center">Tidak ada FAQ ditemukan.</p>}
      </div>
    </div>
  )
}
