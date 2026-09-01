import { useState } from 'react'
import { events } from '../data/mataf-data.js'

const dateFmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

export default function Rundown() {
  const [selected, setSelected] = useState(events[0]?.date)
  const active = events.find((e) => e.date === selected)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
      {/* Header Halaman */}
      <div className="text-center sm:text-left border-b-2 border-black/15 dark:border-white/15 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-blue-300 dark:border-blue-700">
          <span>⏱️</span> Susunan Acara
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          Rundown MATAF TI
        </h1>
        <p className="text-sm sm:text-base font-bold text-black/70 dark:text-white/60 mt-2">
          Jadwal rincian waktu kegiatan jam demi jam selama kegiatan MATAF TI berlangsung.
        </p>
      </div>

      {/* Pemilih Hari/Tanggal */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {events.map((e) => (
          <button
            key={e.date}
            onClick={() => setSelected(e.date)}
            className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider border-2 transition-all ${
              selected === e.date
                ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
                : 'bg-white dark:bg-[#1a1a1a] text-black/75 dark:text-white/70 border-black/15 dark:border-white/15 hover:border-black dark:hover:border-white'
            }`}
          >
            Kegiatan Utama · {dateFmt(e.date)}
          </button>
        ))}
      </div>

      {active && (
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border-2 border-black/25 dark:border-white/15 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                Lokasi Utama: {active.location || 'SM 5.10'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white mt-0.5">
                {active.title || 'Agenda Acara'}
              </h2>
            </div>
            <span className="text-xs font-mono font-black uppercase px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-700 self-start sm:self-auto">
              Total {active.rundown.length} Sesi
            </span>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border-2 border-black/15 dark:border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-black/5 dark:bg-white/5 border-b-2 border-black/10 dark:border-white/10">
                <tr className="text-left font-mono text-xs uppercase text-black/70 dark:text-white/60">
                  <th className="py-3 px-4 font-black">Waktu (WIB)</th>
                  <th className="py-3 px-4 font-black">Kegiatan & Acara</th>
                  <th className="py-3 px-4 font-black">Tempat / Ruang</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-white/10">
                {active.rundown.map((r, i) => (
                  <tr key={i} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-black text-blue-600 dark:text-blue-400 whitespace-nowrap">
                      {r.time}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-black dark:text-white">
                      {r.activity}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-black/70 dark:text-white/60">
                      {r.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile timeline cards */}
          <div className="sm:hidden space-y-3">
            {active.rundown.map((r, i) => (
              <div key={i} className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/5 border-2 border-black/15 dark:border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-800">
                    ⏱️ {r.time}
                  </span>
                  <span className="text-[11px] font-medium text-black/60 dark:text-white/50">
                    📍 {r.location}
                  </span>
                </div>
                <p className="font-bold text-sm text-black dark:text-white pt-1">
                  {r.activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
