import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import SEOHead from '../components/ui/SEOHead'

export default function Problem() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const content = isID ? {
    title: 'Tiga Masalah Utama Pertanian Indonesia',
    subtitle: 'Akar masalahnya bukan rendahnya produktivitas semata — melainkan asimetri informasi struktural di sepanjang rantai pertanian.',
    items: [
      { title: 'Asimetri Informasi Pasar', desc: 'Data harga, cuaca, hama, dan kondisi pasar tersebar di berbagai sumber yang tidak terintegrasi. Petani dipaksa mengambil keputusan berbasis pengalaman di tengah variabel risiko yang sangat kompleks.', stat: '49,41%', statLabel: 'rumah tangga miskin bergantung pada sektor pertanian' },
      { title: 'Krisis Regenerasi Petani', desc: '66% petani berusia di atas 45 tahun (Sensus Pertanian 2023). Pengetahuan empiris lapangan tidak memiliki medium transfer yang efektif ke generasi berikutnya, mengancam keberlanjutan sektor.', stat: '66%', statLabel: 'petani berusia >45 tahun' },
      { title: 'Fragmentasi Data & Kebijakan Reaktif', desc: 'Data ketahanan pangan tersebar di berbagai silo institusional tanpa single source of truth. Kebijakan bereaksi berdasarkan laporan kuartalan, bukan sinyal lapangan real-time.', stat: '15+', statLabel: 'dataset tersebar di berbagai institusi' },
    ],
    cycle: 'Ketiga masalah ini membentuk siklus yang sulit diputus: pasar tidak pasti → pendapatan menurun → minat generasi muda berkurang → pengetahuan hilang → produktivitas turun → ketergantungan pangan meningkat.',
  } : {
    title: 'Three Core Problems of Indonesian Agriculture',
    subtitle: 'The root cause is not low productivity alone — but structural information asymmetry across the agricultural value chain.',
    items: [
      { title: 'Market Information Asymmetry', desc: 'Price, weather, pest, and market data are scattered across unintegrated sources. Farmers are forced to make decisions based on experience amid complex risk variables.', stat: '49.41%', statLabel: 'poor households depend on agriculture' },
      { title: 'Farmer Regeneration Crisis', desc: '66% of farmers are over 45 years old (2023 Agricultural Census). Field knowledge has no effective transfer medium to the next generation.', stat: '66%', statLabel: 'farmers aged >45' },
      { title: 'Data Fragmentation & Reactive Policy', desc: 'Food security data is scattered across institutional silos with no single source of truth. Policy reacts based on quarterly reports, not real-time signals.', stat: '15+', statLabel: 'datasets scattered across institutions' },
    ],
    cycle: 'These three problems form a vicious cycle: market uncertainty → declining income → youth disinterest → knowledge loss → falling productivity → rising food import dependence.',
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.items.map((item, i) => (
              <Card key={i} className="flex flex-col">
                <div className="mb-4"><span className="text-4xl font-bold text-primary">{item.stat}</span><p className="text-xs text-gray-400 mt-1">{item.statLabel}</p></div>
                <h3 className="text-lg font-bold text-shade-600 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-shade-600 text-white text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">{content.cycle}</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
