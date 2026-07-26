import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MetricBadge({ value, label, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className={`flex flex-col items-center p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center transition-all duration-700 ease-sugi ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <span className="text-2xl md:text-3xl font-bold text-primary">
        {prefix}{value}{suffix}
      </span>
      <span className="mt-1 text-xs text-gray-500 leading-snug max-w-28">{label}</span>
    </div>
  )
}
