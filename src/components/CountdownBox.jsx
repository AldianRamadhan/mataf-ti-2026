import { useCountdown } from '../hooks/useCountdown.js'

export default function CountdownBox({ targetDate, label = 'MATAF DIMULAI DALAM' }) {
  const t = useCountdown(targetDate)

  if (!t) return null
  if (t.done) {
    return (
      <p className="font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400">
        Kegiatan sedang atau telah berlangsung 🚀
      </p>
    )
  }

  const units = [
    t.days ? { v: t.days, l: 'Hari' } : null,
    { v: t.hours, l: 'Jam' },
    { v: t.minutes, l: 'Menit' },
    { v: t.seconds, l: 'Detik' },
  ].filter(Boolean)

  return (
    <div>
      <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-black/75 dark:text-white/75 mb-3">
        {label}
      </p>
      <div className="flex gap-2.5 sm:gap-3">
        {units.map((u, i) => (
          <div
            key={i}
            className="bg-black/5 dark:bg-white/10 border border-black/20 dark:border-white/20 rounded-lg px-3 py-2 min-w-[3.5rem] sm:min-w-[4rem] text-center shadow-sm"
          >
            <p className="font-mono text-xl sm:text-2xl font-black text-black dark:text-white tabular-nums tracking-tight">
              {String(u.v).padStart(2, '0')}
            </p>
            <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-black/70 dark:text-white/70 mt-0.5">
              {u.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
