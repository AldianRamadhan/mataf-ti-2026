import { announcements } from '../data/mataf-data.js'

export default function NotificationPanel({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div
        className="absolute right-4 top-16 w-80 max-w-[calc(100vw-2rem)] glass rounded-2xl shadow-glow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="px-4 py-3 font-display font-semibold text-sm border-b border-navy-900/10 dark:border-white/10">
          Notifikasi Terbaru
        </p>
        <div className="max-h-80 overflow-y-auto">
          {announcements.slice(0, 5).map((a) => (
            <div key={a.id} className="px-4 py-3 border-b border-navy-900/5 dark:border-white/5 text-sm">
              <p className="font-medium">{a.title}</p>
              <p className="text-xs text-navy-900/50 dark:text-white/50 mt-0.5">{a.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
