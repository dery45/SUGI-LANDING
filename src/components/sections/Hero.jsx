import { useLanguage } from '../../contexts/LanguageContext'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Hero() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  const title = isID
    ? 'Ekosistem AI Pertanian\nTerintegrasi untuk Indonesia'
    : 'Integrated AI Ecosystem\nfor Indonesian Agriculture'
  const subtitle = isID
    ? 'Memberdayakan petani, pemerintah, dan mitra agribisnis dengan kecerdasan buatan hybrid RAG on-premise — gratis, aman, dan kontekstual.'
    : 'Empowering farmers, government, and agribusiness partners with on-premise hybrid RAG AI — free, secure, and contextual.'
  const cta1 = isID ? 'Untuk Petani' : 'For Farmers'
  const cta2 = isID ? 'Untuk Pemerintah & Mitra' : 'For Government & Partners'
  const cta3 = isID ? 'Algoritma' : 'Algorithm'

  const stats = isID
    ? [
        { value: '49,41%', label: 'Rumah tangga miskin dari sektor pertanian' },
        { value: '66%', label: 'Petani berusia di atas 45 tahun' },
        { value: '15%', label: 'Potensi hemat biaya tanam petani' },
        { value: '<24 Jam', label: 'Respons kebijakan dari hitungan minggu' },
      ]
    : [
        { value: '49.41%', label: 'Poor households from agriculture sector' },
        { value: '66%', label: 'Farmers aged over 45 years old' },
        { value: '15%', label: 'Potential planting cost savings' },
        { value: '<24 Hrs', label: 'Policy response, from weeks' },
      ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-shade-600">
      <div className="absolute inset-0">
        <img
          src="/image/main-image.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-shade-600/80 via-shade-600/60 to-shade-600" />
      </div>

      <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <img src="/image/sugi-logo.png" alt="SUGI" className="h-10 md:h-14 brightness-0 invert" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight whitespace-pre-line">
            {title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/untuk-petani">{cta1}</Button>
            <Button variant="secondary" to="/untuk-pemerintah">{cta2}</Button>
            <Button variant="outline" to="/algoritma">{cta3}</Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
