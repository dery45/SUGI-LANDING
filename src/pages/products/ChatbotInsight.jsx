import { useLanguage } from '../../contexts/LanguageContext'
import ProductPageTemplate from '../../components/product/ProductPageTemplate'
import BenefitCard from '../../components/product/BenefitCard'
import Card from '../../components/ui/Card'
import ScreenshotLightbox from '../../components/product/ScreenshotLightbox'
import { productPages } from '../../data/productsContent'

function Section({ id, children }) {
  return id ? <section id={id} className="scroll-mt-28 mb-16 last:mb-0">{children}</section> : <div>{children}</div>
}

export default function ChatbotInsight() {
  const { lang } = useLanguage()
  const p = productPages.chatbotInsight

  return (
    <ProductPageTemplate breadcrumbs={p.breadcrumbs} sections={p.sections} header={p.header} relatedProducts={p.related}>
      <Section id="apa-itu">
        <h2 className="text-2xl font-bold mb-4">{p.sections[0].label[lang]}</h2>
        <p className="text-gray-500 leading-relaxed max-w-3xl">{p.apaItu[lang]}</p>
      </Section>
      <Section id="fitur">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.sections[1].label[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.fiturList.map((f, i) => (
            <Card key={i}>
              <div className="text-2xl mb-2">{f.icon}</div>
              <h4 className="font-bold text-shade-600 text-sm">{f.title[lang]}</h4>
              <p className="text-xs text-gray-500 mt-1">{f.desc[lang]}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section id="manfaat">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.sections[2].label[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.manfaat.map((b, i) => (
            <BenefitCard key={i} icon={b.icon} title={b.title[lang]} desc={b.desc[lang]} index={i} />
          ))}
        </div>
      </Section>
      <Section id="tampilan">
        <h2 className="text-2xl font-bold mb-8">{p.sections[3].label[lang]}</h2>
        <ScreenshotLightbox images={p.screenshots.map(s => ({ ...s, alt: s.alt[lang] }))} />
      </Section>
    </ProductPageTemplate>
  )
}
