import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WorkflowStepper({ steps }) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
      <div className="space-y-6 md:space-y-10">
        {steps.map((step, i) => (
          <StepItem key={i} step={step} index={i} total={steps.length} />
        ))}
      </div>
    </div>
  )
}

function StepItem({ step, index, total }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
        isLeft ? '' : 'md:flex-row-reverse'
      } transition-all duration-600 ease-sugi ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center text-sm font-bold z-10 shadow-lg">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
        <div className="flex md:hidden items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
            {index + 1}
          </span>
        </div>
        <h4 className="text-lg font-bold text-shade-600">{step.title}</h4>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
        {step.meta && (
          <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/5 px-2 py-0.5 rounded-full">
            {step.meta}
          </span>
        )}
      </div>

      <div className="hidden md:block md:w-1/2" />
    </div>
  )
}
