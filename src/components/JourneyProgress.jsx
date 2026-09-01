import { events, achievements, daysCompleted } from '../data/mataf-data.js'

export default function JourneyProgress() {
  const completed = daysCompleted()
  const total = events.length
  const pct = total ? Math.round((completed / total) * 100) : 0
  const earned = achievements.filter((a) => completed >= a.requiredDays)

  return (
    <div className="bg-white dark:bg-[#1f1f1f] border border-black/15 dark:border-white/15 shadow-sm rounded-xl p-6 sm:p-8 transition-colors">
      {/* Header Progress */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-black/60 dark:text-white/60 block mb-1">
            Status Perjalanan
          </span>
          <h3 className="font-mono text-lg sm:text-xl font-black tracking-tight text-black dark:text-white">
            Your MATAF Journey
          </h3>
        </div>
        <div className="text-right">
          <span className="font-mono text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight">
            {pct}%
          </span>
          <span className="text-[11px] font-mono uppercase text-black/60 dark:text-white/60 block font-bold">
            {completed}/{total} Hari Selesai
          </span>
        </div>
      </div>

      {/* Progress Bar - Lebih tebal & kontras */}
      <div className="h-4 rounded-full bg-black/10 dark:bg-white/10 p-0.5 overflow-hidden mb-8 border border-black/10 dark:border-white/10">
        <div
          className="h-full bg-black dark:bg-white rounded-full transition-all duration-700 ease-out"
          style={{ width: `${Math.max(pct, pct > 0 ? pct : 2)}%` }}
        />
      </div>

      {/* Timeline Event List */}
      <div className="relative pl-6 space-y-4 mb-6">
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-black/20 dark:bg-white/20 rounded-full" />
        {events.map((e) => {
          const done = completed >= e.day
          return (
            <div
              key={e.date}
              className={`relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 sm:px-4 sm:py-3 rounded-lg border transition-colors ${
                done
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                  : 'bg-[#fbf9f5] dark:bg-[#282828] border-black/10 dark:border-white/10 text-black dark:text-white hover:border-black/30 dark:hover:border-white/30'
              }`}
            >
              {/* Bulatan status di garis timeline */}
              <span
                className={`absolute -left-[19px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  done
                    ? 'bg-black border-black text-white text-[9px] dark:bg-white dark:border-white dark:text-black'
                    : 'bg-white border-black/60 dark:bg-[#171717] dark:border-white/60'
                }`}
              >
                {done && '✓'}
              </span>

              {/* Info Acara */}
              <div className="flex items-center gap-2.5">
                <span
                  className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    done
                      ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black'
                      : 'bg-black/10 dark:bg-white/10 text-black dark:text-white'
                  }`}
                >
                  DAY {String(e.day).padStart(2, '0')}
                </span>
                <span className="font-bold text-sm sm:text-base tracking-tight text-black dark:text-white">
                  {e.title}
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
                {done ? (
                  <span className="font-bold text-emerald-300 dark:text-emerald-700">
                    ✓ Selesai
                  </span>
                ) : (
                  <span className="font-bold text-black/70 dark:text-white/70 bg-black/5 dark:bg-white/10 px-2.5 py-1 rounded border border-black/10 dark:border-white/10">
                    🔒 Terkunci
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Badges / Achievements jika ada */}
      {earned.length > 0 && (
        <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-mono font-bold text-black/70 dark:text-white/70 uppercase mr-1">
            Pencapaian:
          </span>
          {earned.map((a) => (
            <span
              key={a.id}
              className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black inline-flex items-center gap-1.5"
            >
              <span>{a.icon}</span> {a.label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
