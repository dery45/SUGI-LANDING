import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import SEOHead from '../components/ui/SEOHead'

export default function VisionMission() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const content = isID
    ? {
        vision: {
          title: 'Visi',
          desc: 'Menjadi fondasi kecerdasan pertanian Indonesia — menghubungkan setiap petani, pemerintah, dan pelaku agribisnis dalam satu ekosistem data yang transparan, kontekstual, dan berdaulat.',
        },
        missions: [
          'Mendemokratisasi akses informasi pertanian bagi seluruh petani Indonesia tanpa biaya.',
          'Menghentikan krisis regenerasi petani melalui transfer pengetahuan berbasis AI.',
          'Mengubah kebijakan pangan nasional dari reaktif menjadi prediktif berbasis data real-time.',
          'Menciptakan siklus data flywheel yang memperkuat akurasi sistem seiring waktu.',
          'Menjaga kedaulatan data pertanian Indonesia dengan infrastruktur on-premise.',
        ],
      }
    : {
        vision: {
          title: 'Vision',
          desc: 'To become the foundation of Indonesian agricultural intelligence — connecting every farmer, government, and agribusiness player in one transparent, contextual, and sovereign data ecosystem.',
        },
        missions: [
          'Democratize access to agricultural information for all Indonesian farmers at no cost.',
          'Stop the farmer regeneration crisis through AI-powered knowledge transfer.',
          'Transform national food policy from reactive to predictive based on real-time data.',
          'Create a data flywheel that strengthens system accuracy over time.',
          'Protect Indonesian agricultural data sovereignty with on-premise infrastructure.',
        ],
      }

  return (
    <>
      <SEOHead title={isID ? 'Visi & Misi' : 'Vision & Mission'} description={content.vision.desc} />
      <Section className="pt-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            {isID ? 'Visi & Misi' : 'Vision & Mission'}
          </h1>

          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-shade-600 text-white">
            <h2 className="text-2xl font-bold text-primary mb-4">{content.vision.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{content.vision.desc}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              {isID ? 'Misi Kami' : 'Our Missions'}
            </h2>
            <div className="space-y-4">
              {content.missions.map((m, i) => (
                <Card key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-600 leading-relaxed">{m}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
    </>
  )
}
