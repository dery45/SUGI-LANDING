import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function TimelineAnimated({ phases }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto px-4">
      {/* Mobile: vertical */}
      <div className="md:hidden space-y-6">
        {phases.map((phase, i) => (
          <MobilePhase key={i} phase={phase} index={i} isInView={isInView} />
        ))}
      </div>

      {/* Desktop: horizontal */}
      <div className="hidden md:block relative pt-10">
        <div className={`absolute top-10 left-0 right-0 h-1 bg-gray-100 rounded-full transition-all duration-1000 ease-sugi ${isInView ? 'w-full' : 'w-0'}`} />
        <div className={`absolute top-10 left-0 h-1 bg-primary rounded-full transition-all duration-1500 ease-sugi ${isInView ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '300ms' }} />
        <div className="flex justify-between items-start gap-6">
          {phases.map((phase, i) => (
            <DesktopPhase key={i} phase={phase} index={i} total={phases.length} isInView={isInView} />
          ))}
        </div>
      </div>
    </div>
  )
}

function DesktopPhase({ phase, index, total, isInView }) {
  const delay = index * 250

  return (
    <div className="flex-1 flex flex-col items-center">
      <div
        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 border-white shadow-lg transition-all duration-500 ${
          isInView ? 'bg-primary text-white scale-100' : 'bg-gray-200 text-gray-400 scale-0'
        }`}
        style={{ transitionDelay: `${delay + 150}ms` }}
      >
        {index + 1}
      </div>
      <div
        className={`mt-6 text-center transition-all duration-500 ease-sugi ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{phase.period}</span>
        <h3 className="text-base font-bold text-shade-600 mt-3">{phase.title}</h3>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed px-2">{phase.desc}</p>
      </div>
    </div>
  )
}

function MobilePhase({ phase, index, isInView }) {
  const delay = index * 200

  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-4 border-white shadow-lg transition-all duration-500 ${
            isInView ? 'bg-primary text-white scale-100' : 'bg-gray-200 text-gray-400 scale-0'
          }`}
          style={{ transitionDelay: `${delay + 100}ms` }}
        >
          {index + 1}
        </div>
        {index < 2 && <div className="w-0.5 flex-1 bg-gray-100 mt-1" />}
      </div>
      <div
        className={`flex-1 pb-6 transition-all duration-500 ease-sugi ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2">{phase.period}</span>
        <h3 className="text-sm font-bold text-shade-600">{phase.title}</h3>
        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{phase.desc}</p>
      </div>
    </div>
  )
}