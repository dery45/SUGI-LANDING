import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import Container from '../ui/Container'

export default function Footer() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const footerContent = {
    tagline: isID
      ? 'Ekosistem AI Pertanian Terintegrasi untuk Indonesia.'
      : 'Integrated AI Ecosystem for Indonesian Agriculture.',
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
            <h4 className="font-semibold text-sm text-primary mb-4">{isID ? 'Navigasi' : 'Navigation'}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">{isID ? 'Beranda' : 'Home'}</Link></li>
              <li><Link to="/untuk-petani" className="hover:text-primary transition-colors">{isID ? 'Untuk Petani' : 'For Farmers'}</Link></li>
              <li><Link to="/untuk-pemerintah" className="hover:text-primary transition-colors">{isID ? 'Untuk Pemerintah' : 'For Government'}</Link></li>
              <li><Link to="/algoritma" className="hover:text-primary transition-colors">{isID ? 'Algoritma' : 'Algorithm'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-primary mb-4">{footerContent.contact}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://t.me/sugi_demo_llmbot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram</a></li>
              <li><Link to="/" onClick={() => { window.location.href = '/#kontak' }} className="hover:text-primary transition-colors">{isID ? 'Hubungi Kami' : 'Contact Us'}</Link></li>
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
