import { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function TabNav({ sections }) {
  const [active, setActive] = useState('')
  const { lang } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-100px 0px -60%', threshold: 0 }
    )

    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 overflow-x-auto">
      <div className="flex gap-1 px-4 py-2 max-w-[1280px] mx-auto">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`shrink-0 px-3 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
              active === s.id
                ? 'bg-primary/10 text-primary'
                : 'text-gray-400 hover:text-shade-600'
            }`}
          >
            {s.label[lang]}
          </button>
        ))}
      </div>
    </div>
  )
}
