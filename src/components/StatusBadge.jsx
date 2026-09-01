const STATUS = {
  announced: { color: 'bg-emerald-500', label: 'Sudah diumumkan' },
  soon: { color: 'bg-amber', label: 'Akan diumumkan' },
  unavailable: { color: 'bg-red-500', label: 'Belum tersedia' },
}

export default function StatusBadge({ status }) {
  const s = STATUS[status] || STATUS.unavailable
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium">
      <span className={`w-2 h-2 rounded-full ${s.color}`} />
      {s.label}
    </span>
  )
}
