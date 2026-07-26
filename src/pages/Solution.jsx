import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SEOHead from '../components/ui/SEOHead'

export default function Solution() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const content = isID
    ? {
        title: 'SUGI Sebagai Solusi Terintegrasi',
        subtitle: 'Bukan solusi parsial — SUGI menjawab ketiga lapisan kompleksitas secara simultan melalui satu ekosistem yang saling terhubung.',
        points: [
          {
            icon: '🌾',
            title: 'Pendamping Keputusan Kontekstual',
            desc: 'Chatbot AI hybrid RAG yang memahami konteks pertanian Indonesia. Memberikan rekomendasi tanam, analisis harga, peringatan dini cuaca, dan saran pengendalian hama secara real-time.',
          },
          {
            icon: '🔄',
            title: 'Transfer Pengetahuan Lintas Generasi',
            desc: 'Knowledge base yang terus belajar dari setiap interaksi, menjembatani pengetahuan empiris petani senior dengan akses data digital untuk generasi muda.',
          },
          {
            icon: '📊',
            title: 'Early Warning System Berbasis Data',
            desc: 'Data mikro lapangan dikonversi menjadi intelijen kebijakan pangan nasional. Mempercepat respons pemerintah dari skala minggu ke hari.',
          },
          {
            icon: '🔒',
            title: 'Kedaulatan Data & Privasi',
            desc: 'Seluruh proses inferensi AI berjalan on-premise via Ollama. Data operasional petani, perusahaan, dan pemerintah tidak pernah dikirim ke layanan AI publik.',
          },
          {
            icon: '🆓',
            title: 'Gratis untuk Petani',
            desc: 'Cross-subsidy model: chatbot Telegram gratis untuk petani sebagai kanal adopsi awal. Pendanaan dari layanan SaaS B2B dan Data-as-a-Service.',
          },
          {
            icon: '📈',
            title: 'Data Flywheel',
            desc: 'Semakin banyak petani menggunakan SUGI, semakin kaya data lapangan, semakin akurat AI, semakin tinggi nilai analitik — siklus yang saling memperkuat.',
          },
        ],
      }
    : {
        title: 'SUGI as an Integrated Solution',
        subtitle: 'Not a partial solution — SUGI addresses all three layers of complexity simultaneously through one interconnected ecosystem.',
        points: [
          {
            icon: '🌾',
            title: 'Contextual Decision Support',
            desc: 'Hybrid RAG AI chatbot that understands Indonesian agricultural context. Provides planting recommendations, price analysis, weather early warnings, and pest control advice in real-time.',
          },
          {
            icon: '🔄',
            title: 'Cross-Generational Knowledge Transfer',
            desc: 'A knowledge base that continuously learns from every interaction, bridging senior farmers\' empirical knowledge with digital data access for younger generations.',
          },
          {
            icon: '📊',
            title: 'Data-Driven Early Warning System',
            desc: 'Micro-level field data is converted into national food security intelligence. Accelerates government response from weeks to days.',
          },
          {
            icon: '🔒',
            title: 'Data Sovereignty & Privacy',
            desc: 'All AI inference runs on-premise via Ollama. Farmer, company, and government operational data is never sent to public AI services.',
          },
          {
            icon: '🆓',
            title: 'Free for Farmers',
            desc: 'Cross-subsidy model: free Telegram chatbot for farmers as an adoption channel. Funded through B2B SaaS and Data-as-a-Service.',
          },
          {
            icon: '📈',
            title: 'Data Flywheel',
            desc: 'The more farmers use SUGI, the richer the field data, the more accurate the AI, the higher the analytics value — a self-reinforcing cycle.',
          },
        ],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.points.map((point, i) => (
            <Card key={i}>
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-bold text-shade-600 mb-2">{point.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/ekosistem">
            {isID ? 'Lihat Ekosistem SUGI' : 'View SUGI Ecosystem'}
          </Button>
        </div>
      </Container>
    </Section>
    </>
  )
}
