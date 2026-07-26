import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import SEOHead from '../components/ui/SEOHead'

export default function Features() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const content = isID
    ? {
        title: 'Fitur Unggulan',
        subtitle: 'Dari operasional lapangan hingga pengambilan keputusan strategis — SUGI hadir untuk setiap kebutuhan.',
        categories: [
          {
            title: 'Operasional Lapangan',
            icon: '🌱',
            items: [
              'Pencatatan siklus budidaya offline-first',
              'Rekomendasi tanam berbasis cuaca & musim',
              'Deteksi hama & penyakit tanaman otomatis',
              'Manajemen lahan, tanam, pemeliharaan & panen',
              'Sinkronasi data otomatis saat online',
              'Antarmuka minimum-typing untuk penggunaan di lapangan',
            ],
          },
          {
            title: 'Intelijen & Pengambilan Keputusan',
            icon: '🧠',
            items: [
              'Hybrid RAG dengan akurasi skor 94/100',
              '10 AI-powered Market Insights untuk petani',
              'Policy Recommendation untuk pemerintah',
              '15+ dataset ketahanan pangan nasional',
              'Early Warning System real-time',
              'Analitik NLP, Knowledge Graph, & Analisis Sentimen',
            ],
          },
          {
            title: 'Keamanan & Kedaulatan Data',
            icon: '🔒',
            items: [
              '100% on-premise via Ollama — data tidak ke cloud publik',
              'Kepatuhan penuh UU PDP No. 27/2022',
              'Role-Based Access Control (RBAC)',
              'Autentikasi JWT dengan bcrypt hashing',
              'Response compression & in-memory caching',
              'Offline message catch-up dengan zero loss',
            ],
          },
          {
            title: 'Integrasi & Skalabilitas',
            icon: '🔗',
            items: [
              'Telegram bot dengan multi-user sessions',
              'Weather engine (Open-Meteo, update tiap 300 detik)',
              'Plant intelligence (Perenual API, 10.000+ data)',
              'Dashboard React + Node.js + MongoDB',
              'PWA offline-first untuk area sinyal terbatas',
              'Bulk import Excel/CSV untuk 14 dataset',
            ],
          },
        ],
      }
    : {
        title: 'Key Features',
        subtitle: 'From field operations to strategic decision-making — SUGI serves every need.',
        categories: [
          {
            title: 'Field Operations',
            icon: '🌱',
            items: [
              'Offline-first cultivation cycle recording',
              'Weather & season-based planting recommendations',
              'Automatic pest & disease detection',
              'Land, planting, maintenance & harvest management',
              'Auto data sync when online',
              'Minimum-typing interface for field use',
            ],
          },
          {
            title: 'Intelligence & Decision Making',
            icon: '🧠',
            items: [
              'Hybrid RAG with 94/100 accuracy score',
              '10 AI-powered Market Insights for farmers',
              'Policy Recommendations for government',
              '15+ national food security datasets',
              'Real-time Early Warning System',
              'NLP Analytics, Knowledge Graph & Sentiment Analysis',
            ],
          },
          {
            title: 'Security & Data Sovereignty',
            icon: '🔒',
            items: [
              '100% on-premise via Ollama — data never leaves to public cloud',
              'Full PDP Law No. 27/2022 compliance',
              'Role-Based Access Control (RBAC)',
              'JWT authentication with bcrypt hashing',
              'Response compression & in-memory caching',
              'Offline message catch-up with zero loss',
            ],
          },
          {
            title: 'Integration & Scalability',
            icon: '🔗',
            items: [
              'Telegram bot with multi-user sessions',
              'Weather engine (Open-Meteo, 300s update interval)',
              'Plant intelligence (Perenual API, 10,000+ data)',
              'React + Node.js + MongoDB dashboard',
              'Offline-first PWA for limited signal areas',
              'Bulk Excel/CSV import for 14 datasets',
            ],
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.categories.map((cat, i) => (
            <Card key={i}>
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold text-shade-600 mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
    </>
  )
}
