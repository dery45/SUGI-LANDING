import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

export default function PartnerLogoStrip({ partners }) {
  const { lang } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="text-center">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">
        {partners.title?.[lang] ?? partners.title}
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partners.items.map((p, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ease-sugi ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {p.logo ? (
              <img src={p.logo} alt={p.name} className="h-8 md:h-10 opacity-50 hover:opacity-80 transition-opacity grayscale hover:grayscale-0" />
            ) : (
              <span className="text-sm font-semibold text-gray-400 hover:text-shade-600 transition-colors">
                {p.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
