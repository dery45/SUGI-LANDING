import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Breadcrumbs({ items }) {
  const { lang } = useLanguage()

  return (
    <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
      <Link to="/" className="hover:text-primary transition-colors">
        {lang === 'id' ? 'Beranda' : 'Home'}
      </Link>
      <span>/</span>
      <Link to="/produk" className="hover:text-primary transition-colors">
        {lang === 'id' ? 'Produk' : 'Products'}
      </Link>
      {items?.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span>/</span>
          {item.to ? (
            <Link to={item.to} className="hover:text-primary transition-colors">{item.label?.[lang] ?? item.label}</Link>
          ) : (
            <span className="text-shade-600 font-medium">{item.label?.[lang] ?? item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
