import { committee } from '../data/mataf-data.js'

export default function Committee() {
  const bphLeaders = committee.filter((c) => c.level === 'leader')
  const koorList = committee.filter((c) => c.level === 'koor')

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
      {/* Header Halaman */}
      <div className="text-center sm:text-left border-b-2 border-black/15 dark:border-white/15 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-blue-300 dark:border-blue-700">
          <span>👥</span> Struktur Kepanitiaan
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          Meet the Committee MATAF TI 2026
        </h1>
        <p className="text-sm sm:text-base font-bold text-black/70 dark:text-white/60 mt-2">
          Jajaran Badan Pengurus Harian (BPH) dan Seluruh Koordinator Divisi MATAF TI 2026.
        </p>
      </div>

      {/* --- TIER 1: BADAN PENGURUS HARIAN (KETUA, SEKRETARIS, BENDAHARA SEJAJAR) --- */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
          ★ Badan Pengurus Harian (BPH)
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* KETUA PANITIA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50/40 dark:from-blue-950/40 dark:to-indigo-950/20 border-2 border-blue-400 dark:border-blue-600 shadow-sm flex flex-col justify-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
                Ketua Pelaksana
              </span>
              <p className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                {bphLeaders[0]?.role}
              </p>
              <h3 className="text-xl font-black uppercase text-black dark:text-white mt-1">
                {bphLeaders[0]?.name}
              </h3>
            </div>
          </div>

          {/* SEKRETARIS */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#1a1a1a] border-2 border-black/20 dark:border-white/15 shadow-sm flex flex-col justify-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-amber-500/20">
                Sekretaris Pelaksana
              </span>
              <p className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400">
                Sekretaris
              </p>
              <div className="mt-2 space-y-2">
                <p className="text-sm font-black uppercase text-black dark:text-white">
                  1. {bphLeaders[1]?.name}
                </p>
                <p className="text-sm font-black uppercase text-black dark:text-white">
                  2. {bphLeaders[2]?.name}
                </p>
              </div>
            </div>
          </div>

          {/* BENDAHARA */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#1a1a1a] border-2 border-black/20 dark:border-white/15 shadow-sm flex flex-col justify-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-emerald-500/20">
                Bendahara Pelaksana
              </span>
              <p className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                Bendahara
              </p>
              <div className="mt-2 space-y-2">
                <p className="text-sm font-black uppercase text-black dark:text-white">
                  1. {bphLeaders[3]?.name}
                </p>
                <p className="text-sm font-black uppercase text-black dark:text-white">
                  2. {bphLeaders[4]?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- TIER 2: KOORDINATOR DIVISI --- */}
      <div className="space-y-4 pt-4 border-t border-black/10 dark:border-white/10">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
          ★ Koordinator Divisi
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {koorList.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/15 dark:border-white/10 hover:border-black dark:hover:border-white transition-all flex items-start gap-3.5"
            >
              <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center font-mono font-bold text-xs shrink-0 text-black dark:text-white">
                {c.division.slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400 block tracking-wider">
                  {c.role}
                </span>
                <p className="font-black text-sm text-black dark:text-white truncate mt-0.5" title={c.name}>
                  {c.name}
                </p>
                <p className="text-xs text-black/50 dark:text-white/40 font-mono mt-0.5">
                  Divisi {c.division}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
