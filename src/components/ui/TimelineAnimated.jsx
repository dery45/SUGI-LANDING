import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function TimelineAnimated({ phases }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto">
      <div className={`absolute left-4 md:left-1/2 top-0 w-0.5 bg-gray-200 transition-all duration-1000 ease-sugi md:-translate-x-px ${isInView ? 'h-full' : 'h-0'}`} />

      <div className="space-y-12">
        {phases.map((phase, i) => (
          <PhaseItem key={i} phase={phase} index={i} isInView={isInView} />
        ))}
      </div>
    </div>
  )
}

function PhaseItem({ phase, index, isInView }) {
  const delay = index * 200
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex flex-col md:flex-row items-start gap-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      <div className={`hidden md:flex w-1/2 ${isLeft ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
        <div
          className={`transition-all duration-500 ease-sugi ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {isLeft && <PhaseContent phase={phase} />}
        </div>
      </div>

      <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 -translate-x-1/2 md:-translate-x-1/2 transition-all duration-500 ${isInView ? 'bg-primary text-white scale-100' : 'bg-gray-200 text-gray-400 scale-0'}`} style={{ transitionDelay: `${delay + 100}ms` }}>
        {index + 1}
      </div>

      <div className="md:hidden pl-14">
        <div className={`transition-all duration-500 ease-sugi ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
          <PhaseContent phase={phase} />
        </div>
      </div>

      <div className={`hidden md:flex w-1/2 ${isLeft ? 'justify-start pl-10' : 'justify-end pr-10'}`}>
        <div className={`transition-all duration-500 ease-sugi ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay + 100}ms` }}>
          {!isLeft && <PhaseContent phase={phase} />}
        </div>
      </div>
    </div>
  )
}

function PhaseContent({ phase }) {
  return (
    <div>
      <span className="text-xs font-bold text-primary">{phase.period}</span>
      <h3 className="text-lg font-bold text-shade-600 mt-1">{phase.title}</h3>
      <p className="text-sm text-gray-500 mt-2 leading-relaxed">{phase.desc}</p>
    </div>
  )
}
