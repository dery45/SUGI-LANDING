import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

export default function RelatedProductsNav({ products }) {
  const { lang } = useLanguage()

  return (
    <div className="mt-16 pt-12 border-t border-gray-100">
      <h3 className="text-lg font-bold text-shade-600 mb-6 text-center">
        {lang === 'id' ? 'Jelajahi Produk Terkait' : 'Explore Related Products'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <Link
            key={i}
            to={p.to}
            className="group rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="text-lg font-semibold text-shade-600 group-hover:text-primary transition-colors">
              {p.label?.[lang] ?? p.label}
            </div>
            <p className="text-xs text-gray-400 mt-1">{p.desc?.[lang] ?? p.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
