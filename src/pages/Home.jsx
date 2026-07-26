import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import CountUpStat from '../components/ui/CountUpStat'
import SEOHead from '../components/ui/SEOHead'
import TimelineAnimated from '../components/ui/TimelineAnimated'
import PartnerLogoStrip from '../components/ui/PartnerLogoStrip'
import Hero from '../components/sections/Hero'
import { partners } from '../data/partnersData'

const roadmap = {
  id: [
    { period: '2024–2025', title: 'Fase 1: Validasi Konsep', desc: 'Implementasi sistem smart farming di Wonoboyo, Klaten bersama UNY. Validasi asumsi inti dan identifikasi kebutuhan petani.' },
    { period: '2025–2026', title: 'Fase 2: Pilot & Pengembangan', desc: 'Pilot bersama PPHPM Turi, Sleman. Pengembangan SUGI AI, SUGIDash, SUGI PWA, dan Insight Engine hingga high-fidelity functional prototype.' },
    { period: 'Jul 2026–sekarang', title: 'Fase 3: Ekosistem Siap Produksi', desc: 'Ekosistem siap produksi. Target: VPS deployment, kolaborasi Bapanas, ekspansi WhatsApp, dan aplikasi Android native.' },
  ],
  en: [
    { period: '2024–2025', title: 'Phase 1: Concept Validation', desc: 'Smart farming implementation in Wonoboyo, Klaten with UNY. Core assumption validation and farmer needs identification.' },
    { period: '2025–2026', title: 'Phase 2: Pilot & Development', desc: 'Pilot with PPHPM Turi, Sleman. Development of SUGI AI, SUGIDash, SUGI PWA, and Insight Engine to high-fidelity functional prototype.' },
    { period: 'Jul 2026–present', title: 'Phase 3: Production-Ready Ecosystem', desc: 'Ecosystem ready for production. Targets: VPS deployment, Bapanas collaboration, WhatsApp expansion, and native Android app.' },
  ],
}

const ctaSection = {
  id: [
    { role: 'petani', title: 'Untuk Petani', desc: 'Coba SUGI AI gratis di Telegram. Tanpa instalasi, tanpa biaya.', cta: 'Coba Gratis di Telegram', href: 'https://t.me/sugi_demo_llmbot' },
    { role: 'pemerintah', title: 'Untuk Pemerintah & Bisnis', desc: 'Jadwalkan demo untuk melihat bagaimana SUGI dapat mendukung ketahanan pangan di wilayah Anda.', cta: 'Jadwalkan Demo', to: '/kontak' },
    { role: 'mitra', title: 'Untuk Mitra & Investor', desc: 'Tertarik berkolaborasi? Hubungi kami untuk diskusi kemitraan.', cta: 'Hubungi Kami', to: '/kontak' },
  ],
  en: [
    { role: 'petani', title: 'For Farmers', desc: 'Try SUGI AI free on Telegram. No installation, no cost.', cta: 'Try Free on Telegram', href: 'https://t.me/sugi_demo_llmbot' },
    { role: 'pemerintah', title: 'For Government & Business', desc: 'Schedule a demo to see how SUGI can support food security in your region.', cta: 'Schedule Demo', to: '/kontak' },
    { role: 'mitra', title: 'For Partners & Investors', desc: 'Interested in collaborating? Contact us for partnership discussions.', cta: 'Contact Us', to: '/kontak' },
  ],
}

export default function Home() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const r = isID ? roadmap.id : roadmap.en
  const c = isID ? ctaSection.id : ctaSection.en

  return (
    <>
      <SEOHead
        description={isID
          ? 'SUGI adalah ekosistem AI pertanian terintegrasi untuk petani, pemerintah, dan mitra agribisnis Indonesia. Hybrid RAG on-premise, gratis, dan berdaulat.'
          : 'SUGI is an integrated AI ecosystem for Indonesian farmers, government, and agribusiness partners. On-premise Hybrid RAG, free, and sovereign.'}
      />
      <Hero />

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              {isID ? 'Dampak & Validasi' : 'Impact & Validation'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUpStat end={49.41} suffix="%" label={isID ? 'rumah tangga miskin bergantung pertanian' : 'poor households depend on agriculture'} />
            <CountUpStat end={66} suffix="%" label={isID ? 'petani berusia >45 tahun' : 'farmers aged >45 (2023 Census)'} />
            <CountUpStat end={15} suffix="+" label={isID ? 'dataset ketahanan pangan' : 'food security datasets'} />
            <CountUpStat end={94} suffix="/100" label={isID ? 'RAG Score akurasi AI' : 'AI RAG accuracy Score'} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              {isID ? 'Peta Jalan Pengembangan' : 'Development Roadmap'}
            </h2>
            <p className="mt-4 text-gray-500">
              {isID
                ? 'Dari validasi konsep hingga ekosistem siap produksi.'
                : 'From concept validation to production-ready ecosystem.'}
            </p>
          </div>
          <TimelineAnimated phases={r} />
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <PartnerLogoStrip partners={partners} />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {isID ? 'Mulai Bersama SUGI' : 'Start with SUGI'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.map((item, i) => (
              <Card key={i} className="text-center flex flex-col items-center">
                <h3 className="text-lg font-bold text-shade-600">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2 mb-6 flex-1">{item.desc}</p>
                {item.href ? (
                  <Button href={item.href}>{item.cta}</Button>
                ) : (
                  <Button to={item.to}>{item.cta}</Button>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
