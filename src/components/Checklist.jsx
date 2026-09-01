import { useLocalStorage } from '../hooks/useLocalStorage.js'

export default function Checklist({ storageKey, items }) {
  const [checked, setChecked] = useLocalStorage(storageKey, {})

  const doneCount = items.filter((item) => checked[item]).length
  const pct = items.length ? Math.round((doneCount / items.length) * 100) : 0

  const toggle = (item) => setChecked((c) => ({ ...c, [item]: !c[item] }))

  return (
    <div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => toggle(item)}
              className="w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-xl hover:bg-navy-900/5 dark:hover:bg-white/5 transition-colors"
            >
              <span
                className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center text-[11px] transition-colors ${
                  checked[item] ? 'bg-trail border-trail text-white' : 'border-navy-900/30 dark:border-white/30'
                }`}
              >
                {checked[item] && '✓'}
              </span>
              <span className={checked[item] ? 'line-through text-navy-900/40 dark:text-white/40' : ''}>{item}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <div className="flex justify-between text-xs font-medium mb-1.5">
          <span>{doneCount} / {items.length} completed</span>
          <span>{pct}% Ready</span>
        </div>
        <div className="h-2 rounded-full bg-navy-900/10 dark:bg-white/10 overflow-hidden">
          <div className="h-full trail-line rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  )
}
