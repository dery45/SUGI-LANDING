import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import SEOHead from '../components/ui/SEOHead'
import FAQAccordion from '../components/ui/FAQAccordion'
import { faqData } from '../data/faqData'

export default function FAQ() {
  const { lang } = useLanguage()
  const [activeTab, setActiveTab] = useState(faqData[0].id)

  const current = faqData.find(f => f.id === activeTab)

  return (
    <>
      <SEOHead
        title={lang === 'id' ? 'FAQ' : 'FAQ'}
        description={lang === 'id'
          ? 'Pertanyaan umum seputar SUGI untuk petani, pemerintah, dan mitra.'
          : 'Frequently asked questions about SUGI for farmers, government, and partners.'}
      />
      <Section className="pt-28">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-5xl font-bold">
              {lang === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked Questions'}
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              {lang === 'id'
                ? 'Temukan jawaban untuk pertanyaan yang sering diajukan.'
                : 'Find answers to commonly asked questions.'}
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-10">
            {faqData.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-shade-600 shadow-lg shadow-primary/20'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab.label[lang]}
              </button>
            ))}
          </div>

          {current && <FAQAccordion items={current.items.map(i => ({ q: i.q[lang], a: i.a[lang] }))} />}
        </Container>
      </Section>
    </>
  )
}
