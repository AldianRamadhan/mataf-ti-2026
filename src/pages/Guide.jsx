import { useState } from 'react'
import { guide } from '../data/mataf-data.js'

export default function Guide() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
      {/* Header Halaman */}
      <div className="text-center sm:text-left border-b-2 border-black/15 dark:border-white/15 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-blue-300 dark:border-blue-700">
          <span>📖</span> Buku Panduan
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          Panduan Mahasiswa Baru
        </h1>
        <p className="text-sm sm:text-base font-bold text-black/70 dark:text-white/60 mt-2">
          Informasi penting, tata tertib, dan etika pelaksanaan kegiatan MATAF TI 2026.
        </p>
      </div>

      {/* Accordion Panduan */}
      <div className="space-y-3">
        {guide.map((g, i) => {
          const isOpen = openIdx === i
          return (
            <div
              key={i}
              className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white dark:bg-[#1a1a1a] border-black/30 dark:border-white/25 shadow-lg ring-2 ring-black/5 dark:ring-white/5'
                  : 'bg-white/60 dark:bg-[#1a1a1a]/60 border-black/15 dark:border-white/10 hover:border-black/30 dark:hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-black text-base sm:text-lg text-black dark:text-white transition-colors gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-lg transition-all ${
                      isOpen
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/60 group-hover:bg-black/10 dark:group-hover:bg-white/15'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-snug">{g.title}</span>
                </div>

                {/* Animated Arrow Indicator */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-md rotate-180'
                      : 'bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 border-black/10 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/30 rotate-0'
                  }`}
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-black/10 dark:border-white/10 mt-1 animate-fadeIn">
                  <p className="text-sm sm:text-base font-medium text-black/80 dark:text-white/80 leading-relaxed pt-4">
                    {g.content}
                  </p>

                  {g.link && (
                    <div className="mt-4 pt-3 border-t border-dashed border-black/10 dark:border-white/10">
                      <a
                        href={g.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
                      >
                        <span>🌐</span>
                        <span>{g.link.label}</span>
                        <span className="text-white/70">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
