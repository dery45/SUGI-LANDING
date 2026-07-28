import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import Container from '../ui/Container'

export default function Footer() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const scrollToSection = (e, id) => {
    e.preventDefault()
    if (isHome) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/#${id}`)
    }
  }

  const footerContent = {
    tagline: isID
      ? 'Ekosistem AI Pertanian Terintegrasi untuk Indonesia.'
      : 'Integrated AI Ecosystem for Indonesian Agriculture.',
    product: isID ? 'Produk' : 'Products',
    company: isID ? 'Perusahaan' : 'Company',
    contact: isID ? 'Kontak' : 'Contact',
    rights: isID ? 'Hak Cipta Dilindungi.' : 'All Rights Reserved.',
  }

  return (
    <footer className="bg-shade-600 text-white">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src="/image/sugi-logo.png" alt="SUGI" className="h-8 brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              {footerContent.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-primary mb-4">{footerContent.product}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://t.me/sugi_demo_llmbot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SUGI AI</a></li>
              <li><a href="/#ekosistem" onClick={(e) => scrollToSection(e, 'ekosistem')} className="hover:text-primary transition-colors">SUGIDash</a></li>
              <li><a href="/#ekosistem" onClick={(e) => scrollToSection(e, 'ekosistem')} className="hover:text-primary transition-colors">SUGI PWA</a></li>
              <li><a href="/#ekosistem" onClick={(e) => scrollToSection(e, 'ekosistem')} className="hover:text-primary transition-colors">Insight Engine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-primary mb-4">{footerContent.company}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/#tentang-kami" onClick={(e) => scrollToSection(e, 'tentang-kami')} className="hover:text-primary transition-colors">{isID ? 'Tentang Kami' : 'About Us'}</a></li>
              <li><a href="/#tim" onClick={(e) => scrollToSection(e, 'tim')} className="hover:text-primary transition-colors">Tim</a></li>
              <li><Link to="/visi-misi" className="hover:text-primary transition-colors">{isID ? 'Visi & Misi' : 'Vision & Mission'}</Link></li>
              <li><a href="/#kontak" onClick={(e) => scrollToSection(e, 'kontak')} className="hover:text-primary transition-colors">{isID ? 'Kontak' : 'Contact'}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} SUGI. {footerContent.rights}</span>
          <div className="flex items-center gap-4">
            <span>{isID ? 'Terintegrasi. Berdaulat. Gratis.' : 'Integrated. Sovereign. Free.'}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
