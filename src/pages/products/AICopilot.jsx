import { useLanguage } from '../../contexts/LanguageContext'
import ProductPageTemplate from '../../components/product/ProductPageTemplate'
import BenefitCard from '../../components/product/BenefitCard'
import UseCaseCard from '../../components/product/UseCaseCard'
import { productPages } from '../../data/productsContent'

function Section({ id, children }) {
  return id ? <section id={id} className="scroll-mt-28 mb-16 last:mb-0">{children}</section> : <div>{children}</div>
}

export default function AICopilot() {
  const { lang } = useLanguage()
  const p = productPages.aiCopilot

  return (
    <ProductPageTemplate breadcrumbs={p.breadcrumbs} sections={p.sections} header={p.header} relatedProducts={p.related}>
      <Section id="apa-itu">
        <h2 className="text-2xl font-bold mb-4">{p.sections[0].label[lang]}</h2>
        <p className="text-gray-500 leading-relaxed max-w-3xl">{p.apaItu[lang]}</p>
      </Section>
      <Section id="mengapa-ada">
        <h2 className="text-2xl font-bold mb-4">{p.sections[1].label[lang]}</h2>
        <p className="text-gray-500 leading-relaxed max-w-3xl">{p.mengapaAda[lang]}</p>
      </Section>
      <Section id="kemampuan">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.sections[2].label[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.kemampuan.map((b, i) => (
            <BenefitCard key={i} icon={b.icon} title={b.title[lang]} desc={b.desc[lang]} index={i} />
          ))}
        </div>
      </Section>
      <Section id="studi-kasus">
        <h2 className="text-2xl font-bold mb-8">{p.sections[3].label[lang]}</h2>
        <UseCaseCard {...p.studiKasus[lang]} />
      </Section>
    </ProductPageTemplate>
  )
}
