import { useState, useEffect } from 'react'

export function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState(() => calc(targetDate))

  useEffect(() => {
    if (!targetDate) return
    const id = setInterval(() => setRemaining(calc(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return remaining
}

function calc(targetDate) {
  if (!targetDate) return null
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return { done: true, hours: 0, minutes: 0, seconds: 0, totalMs: 0 }
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { done: false, days, hours, minutes, seconds, totalMs: diff }
}
