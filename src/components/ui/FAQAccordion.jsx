import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className="rounded-xl border border-gray-100 bg-white overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-shade-600 text-sm md:text-base pr-4">{item.q}</span>
              <span className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-sugi overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
