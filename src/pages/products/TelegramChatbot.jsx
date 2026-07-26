import { useLanguage } from '../../contexts/LanguageContext'
import Container from '../../components/ui/Container'
import ProductPageTemplate from '../../components/product/ProductPageTemplate'
import WorkflowStepper from '../../components/product/WorkflowStepper'
import BenefitCard from '../../components/product/BenefitCard'
import ScreenshotLightbox from '../../components/product/ScreenshotLightbox'
import UseCaseCard from '../../components/product/UseCaseCard'
import Button from '../../components/ui/Button'
import { productPages } from '../../data/productsContent'

export default function TelegramChatbot() {
  const { lang } = useLanguage()
  const p = productPages.chatbotTelegram

  return (
    <ProductPageTemplate breadcrumbs={p.breadcrumbs} sections={p.sections} header={p.header} relatedProducts={p.related}>
      <SectionSection id="apa-itu">
        <h2 className="text-2xl font-bold mb-4">{p.sections[0].label[lang]}</h2>
        <p className="text-gray-500 leading-relaxed max-w-3xl">{p.apaItu[lang]}</p>
      </SectionSection>

      <SectionSection id="mengapa-ada">
        <h2 className="text-2xl font-bold mb-4">{p.sections[1].label[lang]}</h2>
        <p className="text-gray-500 leading-relaxed max-w-3xl">{p.mengapaAda[lang]}</p>
      </SectionSection>

      <SectionSection id="cara-kerja">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.sections[2].label[lang]}</h2>
        <WorkflowStepper steps={p.caraKerja.map(s => ({
          title: s.title[lang], desc: s.desc[lang], meta: s.meta
        }))} />
      </SectionSection>

      <SectionSection id="manfaat">
        <h2 className="text-2xl font-bold mb-8 text-center">{p.sections[3].label[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.manfaat.map((b, i) => (
            <BenefitCard key={i} icon={b.icon} title={b.title[lang]} desc={b.desc[lang]} index={i} />
          ))}
        </div>
      </SectionSection>

      <SectionSection id="tampilan">
        <h2 className="text-2xl font-bold mb-8">{p.sections[4].label[lang]}</h2>
        <ScreenshotLightbox images={p.screenshots.map(s => ({ ...s, alt: s.alt[lang] }))} />
      </SectionSection>

      <SectionSection id="studi-kasus">
        <h2 className="text-2xl font-bold mb-8">{p.sections[5].label[lang]}</h2>
        <UseCaseCard {...p.studiKasus[lang]} />
      </SectionSection>

      <SectionSection>
        <div className="text-center mt-8">
          <Button href="https://t.me/sugi_demo_llmbot">
            {lang === 'id' ? 'Coba SUGI AI di Telegram' : 'Try SUGI AI on Telegram'}
          </Button>
        </div>
      </SectionSection>
    </ProductPageTemplate>
  )
}

function SectionSection({ id, children }) {
  return id ? (
    <section id={id} className="scroll-mt-28 mb-16 last:mb-0">
      {children}
    </section>
  ) : (
    <div>{children}</div>
  )
}
