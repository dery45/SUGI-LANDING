import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import SEOHead from '../components/ui/SEOHead'

export default function AboutUs() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const content = isID ? {
    title: 'Tentang Kami',
    subtitle: 'SUGI lahir dari implementasi langsung di lapangan bersama petani Indonesia.',
    story: [
      'Berawal dari implementasi sistem smart farming dan manajemen kelompok tani di Wonoboyo, Jogonalan, Klaten bersama Universitas Negeri Yogyakarta pada tahun 2024, SUGI dikembangkan untuk menjawab kebutuhan petani yang melampaui sekadar digitalisasi.',
      'Melalui observasi dan wawancara selama proses implementasi, tim menemukan bahwa petani membutuhkan pendamping pengambilan keputusan yang kontekstual dan responsif terhadap kondisi lapangan aktual — bukan sekadar aplikasi pencatatan.',
      'Dari temuan tersebut, lahirlah SUGI: Sistem Untuk Generasi Intelejen — ekosistem AI pertanian yang menggabungkan chatbot cerdas, dashboard analitik, aplikasi lapangan, dan mesin wawasan otomatis dalam satu platform terintegrasi.',
    ],
    mission: 'Misi kami adalah mendemokratisasi akses informasi pertanian bagi seluruh petani Indonesia, menjembatani kesenjangan pengetahuan lintas generasi, dan mendukung ketahanan pangan nasional melalui kecerdasan buatan yang berdaulat dan terjangkau.',
  } : {
    title: 'About Us',
    subtitle: 'SUGI was born from direct field implementation with Indonesian farmers.',
    story: [
      'Starting from a smart farming system implementation with farmer groups in Wonoboyo, Jogonalan, Klaten in collaboration with Yogyakarta State University in 2024, SUGI was developed to address farmers\' needs beyond mere digitalization.',
      'Through observation and interviews during implementation, the team discovered that farmers need contextual decision-making support that responds to actual field conditions — not just a recording application.',
      'From these findings, SUGI was born: Intelligent Generation System — an agricultural AI ecosystem combining intelligent chatbots, analytics dashboards, field applications, and automated insight engines in one integrated platform.',
    ],
    mission: 'Our mission is to democratize access to agricultural information for all Indonesian farmers, bridge the cross-generational knowledge gap, and support national food security through sovereign and affordable artificial intelligence.',
  }

  return (
    <>
      <SEOHead title={content.title} description={content.subtitle} />
      <Section className="pt-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center">{content.title}</h1>
            <p className="mt-4 text-lg text-gray-500 text-center">{content.subtitle}</p>
            <div className="mt-12 space-y-6 text-gray-600 leading-relaxed">
              {content.story.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-12 p-8 rounded-2xl bg-shade-600 text-white">
              <h2 className="text-xl font-bold text-primary mb-4">{isID ? 'Misi Kami' : 'Our Mission'}</h2>
              <p className="text-gray-300 leading-relaxed">{content.mission}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
