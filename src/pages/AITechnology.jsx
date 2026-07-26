import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import SEOHead from '../components/ui/SEOHead'

export default function AITechnology() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const content = isID
    ? {
        title: 'Teknologi AI di Balik SUGI',
        subtitle: 'Hybrid Retrieval-Augmented Generation (RAG) yang dirancang khusus untuk konteks pertanian Indonesia — akurat, kontekstual, dan berdaulat.',
        steps: [
          { step: '01', title: 'Scope Guard', desc: 'Memastikan sistem hanya menjawab topik pertanian & perkebunan. Pelindung domain yang memblokir pertanyaan di luar konteks sebelum diproses lebih lanjut.' },
          { step: '02', title: 'Query Rewriting 3-Layer', desc: 'Memperjelas pertanyaan ambigu dalam tiga lapisan: aturan berbasis bahasa (0ms), LLM fallback (Qwen2.5), dan query asli sebagai cadangan terakhir.' },
          { step: '03', title: 'Hybrid Ensemble Retrieval', desc: 'Menggabungkan BM25 (pencarian kata kunci), Dense Vector (kesamaan makna), Long-Term Memory, data cuaca, dan data tanaman — masing-masing dengan bobot dinamis.' },
          { step: '04', title: 'Cross-Encoder Reranker', desc: 'Memeringkat ulang dokumen terpilih menggunakan model ms-marco-MiniLM-L-6-v2 untuk mengirimkan 5 konteks terbaik ke LLM.' },
          { step: '05', title: 'LLM On-Premise (sugi-v0.1L)', desc: 'Model LLaMA 3.2 yang di-fine-tune berjalan lokal via Ollama. Data tetap aman di infrastruktur Indonesia — biaya inferensi tidak bertambah seiring pengguna.' },
          { step: '06', title: 'Evaluation Loop', desc: 'Memvalidasi faithfulness dan relevance setiap jawaban melalui lexical overlap (threshold 40-50%) dengan fallback ke Qwen2.5 untuk kasus inkonklusif.' },
        ],
        note: 'Seluruh proses berjalan on-premise — data tidak pernah meninggalkan infrastruktur Indonesia. Kepatuhan penuh terhadap UU PDP No. 27/2022. Biaya operasional tidak bertambah seiring jumlah pengguna.',
        pipeline: 'Pipeline Pemrosesan Query',
        pipelineSteps: ['Input', 'Scope Guard', 'Query Rewriting', 'Hybrid Retrieval', 'Cross-Encoder', 'LLM', 'Eval Loop', 'Response'],
      }
    : {
        title: 'The AI Technology Behind SUGI',
        subtitle: 'Hybrid Retrieval-Augmented Generation (RAG) specifically designed for Indonesian agricultural context — accurate, contextual, and sovereign.',
        steps: [
          { step: '01', title: 'Scope Guard', desc: 'Ensures the system only answers agriculture & plantation topics. A domain guard that blocks out-of-context questions before further processing.' },
          { step: '02', title: '3-Layer Query Rewriting', desc: 'Clarifies ambiguous queries in three layers: language-based rules (0ms), LLM fallback (Qwen2.5), and original query as final backup.' },
          { step: '03', title: 'Hybrid Ensemble Retrieval', desc: 'Combines BM25 (keyword search), Dense Vector (semantic similarity), Long-Term Memory, weather data, and plant data — each with dynamic weights.' },
          { step: '04', title: 'Cross-Encoder Reranker', desc: 'Reranks selected documents using ms-marco-MiniLM-L-6-v2 model to deliver the top 5 contexts to the LLM.' },
          { step: '05', title: 'On-Premise LLM (sugi-v0.1L)', desc: 'Fine-tuned LLaMA 3.2 model running locally via Ollama. Data stays secure in Indonesian infrastructure — inference costs don\'t increase with users.' },
          { step: '06', title: 'Evaluation Loop', desc: 'Validates faithfulness and relevance of every answer through lexical overlap (40-50% threshold) with Qwen2.5 fallback for inconclusive cases.' },
        ],
        note: 'All processing runs on-premise — data never leaves Indonesian infrastructure. Full compliance with PDP Law No. 27/2022. Operational costs don\'t scale with user count.',
        pipeline: 'Query Processing Pipeline',
        pipelineSteps: ['Input', 'Scope Guard', 'Query Rewriting', 'Hybrid Retrieval', 'Cross-Encoder', 'LLM', 'Eval Loop', 'Response'],
      }

  return (
    <>
      <SEOHead title={content.title} description={content.subtitle} />
      <Section className="pt-28">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold">{content.title}</h1>
          <p className="mt-4 text-lg text-gray-500">{content.subtitle}</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
          <div className="space-y-8 md:space-y-12">
            {content.steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-shade-600 items-center justify-center text-sm font-bold z-10 shadow-lg">
                  {step.step}
                </div>
                <div className={`md:w-1/2 ${i % 2 === 1 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                  <Card className={i % 2 === 1 ? 'md:text-right' : ''}>
                    <div className="flex md:hidden w-8 h-8 rounded-full bg-primary/10 text-primary items-center justify-center text-xs font-bold mb-3">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-shade-600">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </Card>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-shade-600 text-white max-w-4xl mx-auto">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center">{content.note}</p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">{content.pipeline}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {content.pipelineSteps.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                  {p}
                </span>
                {i < content.pipelineSteps.length - 1 && (
                  <span className="text-gray-300 hidden sm:inline">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
    </>
  )
}
