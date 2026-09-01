import { useState } from 'react'
import { events } from '../data/mataf-data.js'

const dateFmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' })

export default function Agenda() {
  const [openDay, setOpenDay] = useState(events[0]?.date)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-display font-bold text-3xl mb-2">Agenda MATAF TI 2026</h1>
      <p className="text-navy-900/60 dark:text-white/60 mb-10">Klik setiap hari untuk melihat detail lengkap.</p>

      <div className="relative pl-6">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 trail-line rounded-full opacity-40" />
        <div className="space-y-4">
          {events.map((e) => {
            const isOpen = openDay === e.date
            return (
              <div key={e.date} className="relative">
                <span className="absolute -left-6 top-2 w-3.5 h-3.5 rounded-full bg-trail border-2 border-white dark:border-navy-950" />
                <button
                  onClick={() => setOpenDay(isOpen ? null : e.date)}
                  className="w-full text-left glass rounded-2xl p-5 hover:shadow-glow transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-trail font-semibold">Day {String(e.day).padStart(2, '0')}</p>
                      <h2 className="font-display font-bold text-lg mt-0.5">{e.title}</h2>
                      <p className="text-sm text-navy-900/50 dark:text-white/50 mt-1">{dateFmt(e.date)} · {e.time}</p>
                    </div>
                    <span className="text-xl">{isOpen ? '−' : '+'}</span>
                  </div>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-navy-900/10 dark:border-white/10 space-y-2 text-sm">
                      <p><span className="text-navy-900/50 dark:text-white/50">Deskripsi:</span> {e.description}</p>
                      <p><span className="text-navy-900/50 dark:text-white/50">Lokasi:</span> {e.location}</p>
                      <p><span className="text-navy-900/50 dark:text-white/50">Dresscode:</span> {e.dresscode.atasan} + {e.dresscode.bawahan}</p>
                      <p><span className="text-navy-900/50 dark:text-white/50">Perlengkapan:</span> {e.bring.join(', ')}</p>
                      <p><span className="text-navy-900/50 dark:text-white/50">PIC:</span> {e.pic}</p>
                    </div>
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
