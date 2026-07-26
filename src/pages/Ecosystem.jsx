import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SEOHead from '../components/ui/SEOHead'

export default function Ecosystem() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const content = isID
    ? {
        title: 'Ekosistem SUGI',
        subtitle: 'Empat komponen yang beroperasi sebagai satu AI Engine — menghubungkan interaksi lapangan petani menjadi intelijen kebijakan pangan nasional.',
        items: [
          {
            title: 'SUGI AI',
            role: 'Asisten Cerdas Hybrid RAG',
            desc: 'Chatbot Telegram berbasis Hybrid RAG yang berjalan on-premise via Ollama. Menjawab pertanyaan budidaya, harga, cuaca, dan hama secara real-time dengan konteks pertanian Indonesia.',
            features: ['Scope Guard & Query Rewriting', 'Cross-Encoder Reranker', 'Long-Term Memory', '100% Gratis untuk Petani'],
          },
          {
            title: 'SUGIDash',
            role: 'Dashboard Analitik & Intelijen Pangan',
            desc: 'Platform dashboard berbasis peran untuk Petani, Manajemen, dan Pemerintah dengan 15+ dataset ketahanan pangan nasional, lifecycle tracker, dan KPI real-time.',
            features: ['3 Role-Based Dashboard', '15+ Dataset Bapanas/BPS', 'Lifecycle Management', 'Peta Interaktif Indonesia'],
          },
          {
            title: 'SUGI PWA',
            role: 'Aplikasi Lapangan Mobile-First',
            desc: 'Aplikasi mobile offline-first untuk pencatatan aktivitas budidaya di area sinyal terbatas. Terintegrasi langsung dengan SUGI AI dan SUGIDash.',
            features: ['Offline-First', 'Pencatatan Lapangan', 'Sinkronisasi Otomatis', 'Minimum Typing UX'],
          },
          {
            title: 'Insight Engine',
            role: 'Mesin Wawasan Otomatis',
            desc: 'Mengagregasi interaksi mikro dari ketiga komponen menjadi wawasan makro terstruktur. Mendukung Early Warning System dan mitigasi risiko kebijakan.',
            features: ['Daily Insights (12 jam)', 'Government Insights', 'Farmer Insights (10 jenis)', 'Policy Recommendations'],
          },
        ],
        flow: 'Keempat komponen tidak beroperasi secara terpisah — mereka terhubung dalam satu pipeline data yang mengonversi interaksi lapangan petani menjadi intelijen kebijakan pangan nasional secara berkelanjutan.',
      }
    : {
        title: 'SUGI Ecosystem',
        subtitle: 'Four components operating as one AI Engine — connecting on-field farmer interactions into national food security intelligence.',
        items: [
          {
            title: 'SUGI AI',
            role: 'Hybrid RAG Intelligent Assistant',
            desc: 'Telegram chatbot powered by Hybrid RAG running on-premise via Ollama. Answers cultivation, pricing, weather, and pest queries in real-time with Indonesian agricultural context.',
            features: ['Scope Guard & Query Rewriting', 'Cross-Encoder Reranker', 'Long-Term Memory', '100% Free for Farmers'],
          },
          {
            title: 'SUGIDash',
            role: 'Analytics & Food Intelligence Dashboard',
            desc: 'Role-based dashboard platform for Farmers, Management, and Government with 15+ national food security datasets, lifecycle tracker, and real-time KPIs.',
            features: ['3 Role-Based Dashboards', '15+ Bapanas/BPS Datasets', 'Lifecycle Management', 'Interactive Indonesia Map'],
          },
          {
            title: 'SUGI PWA',
            role: 'Mobile-First Field Application',
            desc: 'Offline-first mobile app for recording cultivation activities in limited signal areas. Directly integrated with SUGI AI and SUGIDash.',
            features: ['Offline-First', 'Field Recording', 'Auto Sync', 'Minimum Typing UX'],
          },
          {
            title: 'Insight Engine',
            role: 'Automated Intelligence Engine',
            desc: 'Aggregates micro interactions from all three components into structured macro insights. Supports Early Warning System and policy risk mitigation.',
            features: ['Daily Insights (12h)', 'Government Insights', 'Farmer Insights (10 types)', 'Policy Recommendations'],
          },
        ],
        flow: 'All four components do not operate in isolation — they are connected in one data pipeline that converts farmer field interactions into national food security intelligence on an ongoing basis.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.items.map((item, i) => (
            <Card key={i} className="flex flex-col">
              <div className="mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm font-medium text-primary mt-1">{item.role}</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.features.map((f, j) => (
                  <Badge key={j}>{f}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-shade-600 text-white text-center max-w-4xl mx-auto">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">{content.flow}</p>
        </div>
      </Container>
    </Section>
    </>
  )
}
