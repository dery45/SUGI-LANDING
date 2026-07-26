import { useLanguage } from '../../contexts/LanguageContext'
import ProductPageTemplate from '../../components/product/ProductPageTemplate'
import WorkflowStepper from '../../components/product/WorkflowStepper'
import Card from '../../components/ui/Card'
import { productPages } from '../../data/productsContent'

function Section({ id, children }) {
  return id ? <section id={id} className="scroll-mt-28 mb-16 last:mb-0">{children}</section> : <div>{children}</div>
}

export default function AIArchitecture() {
  const { lang } = useLanguage()
  const p = productPages.aiArchitecture

  return (
    <ProductPageTemplate breadcrumbs={p.breadcrumbs} sections={p.sections} header={p.header} relatedProducts={p.related}>
      <Section id="apa-itu">
        <h2 className="text-2xl font-bold mb-4">{lang === 'id' ? 'Apa Itu' : 'What It Is'}</h2>
        <p className="text-gray-500 leading-relaxed max-w-3xl">{p.apaItu[lang]}</p>
      </Section>
      <Section id="pipeline">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.sections[0].label[lang]}</h2>
        <WorkflowStepper steps={p.pipeline.map(s => ({ title: s.title[lang], desc: s.desc[lang], meta: s.meta }))} />
      </Section>
      <Section id="komponen">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.sections[1].label[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {p.komponenList.map((k, i) => (
            <Card key={i}>
              <h4 className="font-bold text-shade-600 mb-2">{k.title[lang]}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{k.desc[lang]}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section id="keamanan">
        <h2 className="text-2xl font-bold mb-8">{p.sections[2].label[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {p.keamanan[lang].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </Section>
      <Section id="skalabilitas">
        <h2 className="text-2xl font-bold mb-4">{p.sections[3].label[lang]}</h2>
        <div className="p-6 rounded-2xl bg-shade-600 text-white">
          <p className="text-gray-300 leading-relaxed">{p.skalabilitas[lang]}</p>
        </div>
      </Section>
    </ProductPageTemplate>
  )
}
