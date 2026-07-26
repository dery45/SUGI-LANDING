import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { productIndex } from '../../data/productsContent'

export default function ProductIndex() {
  const { lang } = useLanguage()

  return (
    <Section className="pt-28">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            {lang === 'id' ? 'Produk SUGI' : 'SUGI Products'}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {lang === 'id'
              ? 'Jelajahi seluruh ekosistem SUGI — dari chatbot hingga dashboard, dari petani hingga pemerintah.'
              : 'Explore the entire SUGI ecosystem — from chatbot to dashboard, from farmers to government.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productIndex.map((p, i) => (
            <Link
              key={i}
              to={p.route}
              className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm transition-all duration-300 ease-sugi hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-lg font-bold text-shade-600 group-hover:text-primary transition-colors">
                {p.title[lang]}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.desc[lang]}</p>
              <span className="inline-block mt-3 text-xs font-medium text-primary">
                {lang === 'id' ? 'Pelajari →' : 'Learn more →'}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
