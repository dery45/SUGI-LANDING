import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

export default function CountUpStat({ end, suffix = '', label, duration = 1500, prefix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime
    const isNumeric = typeof end === 'number'

    if (!isNumeric) {
      setCount(end)
      return
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {prefix}{count}{suffix}
      </div>
      {label && <div className="mt-1 text-sm text-gray-500 leading-snug">{label}</div>}
    </div>
  )
}
