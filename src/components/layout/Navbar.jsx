import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import Container from '../ui/Container'

const navLinks = [
  { key: 'beranda', path: '/' },
  { key: 'one-page', path: '/one-page' },
  { key: 'untuk-petani', path: '/untuk-petani' },
  { key: 'untuk-pemerintah', path: '/untuk-pemerintah' },
  { key: 'algoritma', path: '/algoritma' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggleLang } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const hasSection = isHome && location.hash.length > 0

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location])

  const handleNavClick = (e, link) => {
    if (!link.isHash) return
    e.preventDefault()
    if (isHome) {
      const el = document.getElementById(link.path)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate(`/#${link.path}`)
    }
  }

  const t = (key) => {
    const content = {
      id: {
        beranda: 'Beranda',
        'one-page': 'One Page',
        algoritma: 'Algoritma',
        'untuk-petani': 'Untuk Petani',
        'untuk-pemerintah': 'Untuk Pemerintah',
        id: 'ID', en: 'EN',
      },
      en: {
        beranda: 'Home',
        'one-page': 'One Page',
        algoritma: 'Algorithm',
        'untuk-petani': 'For Farmers',
        'untuk-pemerintah': 'For Government',
        id: 'ID', en: 'EN',
      },
    }
    return content[lang]?.[key] ?? key
  }

  const linkTextColor = scrolled || !isHome ? 'text-shade-600' : 'text-white/80'
  const isActiveHash = (link) => isHome && location.hash === `#${link.path}`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-sugi ${
        scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Beranda">
            <img src="/image/sugi-logo.png" alt="Logo SUGI" className="h-8 md:h-10" />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <NavLink
                key={link.key}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary' : linkTextColor
                  } hover:text-primary`
                }
                end
              >
                {t(link.key)}
              </NavLink>
            ))}
            <button
              onClick={toggleLang}
              className={`ml-2 px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                scrolled || !isHome
                  ? 'border-shade-300 text-shade-500 hover:bg-shade-500 hover:text-white'
                  : 'border-white/30 text-white/80 hover:bg-white/10'
              }`}
              aria-label={`Switch to ${lang === 'id' ? 'English' : 'Indonesian'}`}
            >
              {t(lang === 'id' ? 'en' : 'id')}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Buka menu navigasi"
          >
            <div className={`w-6 h-0.5 transition-all duration-300 ${scrolled || !isHome ? 'bg-shade-600' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${scrolled || !isHome ? 'bg-shade-600' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${scrolled || !isHome ? 'bg-shade-600' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto" role="navigation" aria-label="Menu navigasi mobile">
          <Container>
            <div className="py-4 space-y-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.key}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-shade-600 hover:bg-gray-50'
                    }`
                  }
                  end
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.key)}
                </NavLink>
              ))}
              <button
                onClick={toggleLang}
                className="w-full mt-2 px-4 py-3 text-sm font-bold text-center rounded-lg border border-shade-300 text-shade-500 hover:bg-shade-50"
              >
                {lang === 'id' ? 'EN' : 'ID'}
              </button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  )
}