import Container from '../ui/Container'
import Section from '../ui/Section'
import Breadcrumbs from './Breadcrumbs'
import TabNav from './TabNav'
import RelatedProductsNav from './RelatedProductsNav'
import { useLanguage } from '../../contexts/LanguageContext'

export default function ProductPageTemplate({
  breadcrumbs,
  sections,
  header,
  children,
  relatedProducts,
}) {
  const { lang } = useLanguage()

  const tabSections = sections?.filter(s => s.id) || []

  return (
    <Section className="pt-24 pb-0">
      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-3xl mx-auto text-center mb-8">
          {header.icon && <div className="text-4xl mb-4">{header.icon}</div>}
          <h1 className="text-3xl md:text-5xl font-bold">{header.title[lang]}</h1>
          <p className="mt-3 text-lg text-gray-500">{header.subtitle[lang]}</p>
        </div>
      </Container>

      {tabSections.length > 0 && <TabNav sections={tabSections} />}

      <Container className="py-12 md:py-16">
        {children}
      </Container>

      {relatedProducts?.length > 0 && (
        <Container>
          <RelatedProductsNav products={relatedProducts} />
        </Container>
      )}
    </Section>
  )
}
