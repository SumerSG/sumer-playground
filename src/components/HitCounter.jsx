import { useState, useEffect } from 'react'

export default function HitCounter() {
  const [count, setCount] = useState(1337)

  useEffect(() => {
    const stored = localStorage.getItem('y2k_hit_counter')
    const base = stored ? parseInt(stored, 10) : 1337
    const newCount = base + 1
    localStorage.setItem('y2k_hit_counter', newCount.toString())
    setCount(newCount)
  }, [])

  const digits = count.toString().padStart(8, '0').split('')

  return (
    <div className="flex items-center gap-2 py-1">
      <span className="text-[10px] font-pixel text-[#FF00FF] animate-pulse">HITS:</span>
      <div className="flex gap-0.5">
        {digits.map((digit, i) => (
          <div
            key={i}
            className="w-6 h-8 flex items-center justify-center border border-[#FF0000] bg-[#000011] text-[#FF0000] font-pixel text-xs"
            style={{ boxShadow: '0 0 3px #FF0000, inset 0 0 5px rgba(255,0,0,0.2)' }}
          >
            {digit}
          </div>
        ))}
      </div>
    </div>
  )
}
