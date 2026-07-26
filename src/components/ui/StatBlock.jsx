import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StatBlock({ value, label, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className={`text-3xl md:text-4xl font-bold text-primary transition-all duration-700 ease-sugi ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {value}
      </div>
      <div className="mt-1 text-sm text-gray-500 leading-snug">{label}</div>
    </div>
  )
}
