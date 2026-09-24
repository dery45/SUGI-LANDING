import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SEOHead from '../components/ui/SEOHead'
import TimelineAnimated from '../components/ui/TimelineAnimated'
import FAQAccordion from '../components/ui/FAQAccordion'
import Hero from '../components/sections/Hero'
import TeamMemberCard from '../components/sections/TeamMemberCard'
import ContactForm from '../components/sections/ContactForm'
import { team } from '../data/teamData'
import { faqData } from '../data/faqData'

const roadmap = {
  id: [
    { period: '01 Mei–04 Jun 2026', label: 'Tahap Essential', title: 'Fase 1: Chatbot dan Front End Dashboard', desc: 'Chatbot: Fondasi Hybrid RAG (BM25 + Vector Search) dengan LLM lokal (on-premise). Dashboard: Manajemen siklus tanam (CRUD) dan visualisasi peta dasar.' },
    { period: '19 Jun–26 Jul 2026', label: 'Tahap Practitioner', title: 'Fase 2: Offline Catch-up dan Back End Dashboard', desc: 'Chatbot: Bot Telegram live dengan fitur Offline Catch-up (zero data loss). Dashboard: Frontend & backend terhubung, 14 modul data, dan peta interaktif. Integrasi: Daily Insight Engine mulai mengirim insight harian ke dashboard.' },
    { period: '19 Jun–26 Jul 2026', label: 'Tahap Capstone', title: 'Fase 3: Integrasi dan Optimisasi', desc: 'Chatbot: AI Insight Engine otomatis untuk petani dan pemerintah dengan change detection. Dashboard: 15 tab analitik NLP (Knowledge Graph, Sentimen, Tren) dan arsitektur dual-database. Performa: 15 query paralel, cache 5 menit, kompresi data 80%, 15+ dataset nasional. PWA mobile.' },
    { period: 'Berikutnya', label: 'Fase 4: Validasi User', title: 'Fase 4: Validasi & Pilot Lapangan', desc: 'Bertemu Dinas Pertanian, observasi dan validasi dengan 10 user, uji coba pilot dengan 10 user. Pengembangan: native aplikasi, rekomendasi berbasis lokasi, siklus panen berkelanjutan, grading hasil panen.' },
  ],
  en: [
    { period: '01 May–04 Jun 2026', label: 'Essential Stage', title: 'Phase 1: Chatbot and Front End Dashboard', desc: 'Chatbot: Hybrid RAG foundation (BM25 + Vector Search) with local LLM (on-premise). Dashboard: Cultivation cycle management (CRUD) and basic map visualization.' },
    { period: '19 Jun–26 Jul 2026', label: 'Practitioner Stage', title: 'Phase 2: Offline Catch-up and Back End Dashboard', desc: 'Chatbot: Live Telegram bot with Offline Catch-up (zero data loss). Dashboard: Frontend & backend connected, 14 data modules, interactive map. Daily Insight Engine sends daily insights.' },
    { period: '19 Jun–26 Jul 2026', label: 'Capstone Stage', title: 'Phase 3: Integration and Optimization', desc: 'Chatbot: Automated AI Insight Engine with change detection. Dashboard: 15 NLP analytics tabs (Knowledge Graph, Sentiment, Trends), dual-database. 15 parallel queries, 5-min cache, 80% compression, 15+ national datasets. PWA mobile.' },
    { period: 'Next', label: 'Phase 4: User Validation', title: 'Phase 4: Validation & Field Pilot', desc: 'Meet Agriculture Office, observe and validate with 10 users, pilot with 10 users. Next: native app, location-based recommendations, continuous harvest cycle, harvest grading.' },
  ],
}

export default function Home() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const r = isID ? roadmap.id : roadmap.en
  const [faqTab, setFaqTab] = useState(faqData[0].id)

  const problemContent = isID ? {
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

  const solutionContent = isID ? {
    title: 'SUGI Sebagai Pendamping Tani',
    subtitle: 'Bukan sekedar asisten — SUGI adalah otak kedua bagi petani yang membaca lahan, cuaca, dan pola tanam untuk memangkas kerugian trial dan error.',
    points: [
      { icon: '🧠', title: 'Otak Kedua Petani', desc: 'SUGI tidak hanya memberi informasi, tapi membaca situasi lahan, cuaca, dan pola tanam daerah petani — kerugian fase trial dan error yang mahal dapat berkurang signifikan.' },
      { icon: '🔄', title: 'Transfer Pengetahuan Lintas Generasi', desc: '66% petani berusia >45 tahun. Knowledge base yang terus belajar menjembatani pengetahuan empiris senior dengan data digital untuk generasi muda.' },
      { icon: '📊', title: 'Dari Minggu ke <24 Jam', desc: 'Data mikro lapangan menjadi intelijen kebijakan. Respons pemerintah terhadap anjloknya harga atau kelangkaan pupuk dari hitungan minggu menjadi hitungan jam.' },
      { icon: '🔒', title: 'Kedaulatan Data & Privasi', desc: 'On-premise LLM, pengamanan berlapis, patuh UU PDP. Data tidak pernah ke cloud publik.' },
      { icon: '🆓', title: 'Gratis Selamanya untuk Petani Kecil', desc: 'Didanai langganan dashboard: Kelompok Tani Rp300rb/bln, Perusahaan Rp1jt/bln, Pemerintah Rp1,5jt/bln.' },
      { icon: '📈', title: 'Lebih dari Pencatatan — Mempelajari', desc: 'Data Flywheel + Persistent Memory: data yang dicatat petani dipakai untuk belajar dan memberi rekomendasi yang lebih baik.' },
    ],
  } : {
    title: 'SUGI as Farming Companion',
    subtitle: 'Not just an assistant — SUGI is a second brain reading land, weather, and planting patterns to cut trial-and-error losses.',
    points: [
      { icon: '🧠', title: 'Second Brain', desc: 'SUGI reads land, weather, and local planting patterns — significantly reducing costly trial-and-error losses.' },
      { icon: '🔄', title: 'Cross-Generational Knowledge Transfer', desc: '66% of farmers are >45 years old. A learning knowledge base bridges senior empirical knowledge with digital data for youth.' },
      { icon: '📊', title: 'From Weeks to <24 Hours', desc: 'Field micro-data becomes policy intelligence. Government response to price drops or fertilizer scarcity drops from weeks to hours.' },
      { icon: '🔒', title: 'Data Sovereignty & Privacy', desc: 'On-premise LLM, layered security, PDP Law compliant. Data never goes to public cloud.' },
      { icon: '🆓', title: 'Free Forever for Smallholders', desc: 'Funded by dashboard subscriptions: Groups IDR 300K/mo, Companies IDR 1M/mo, Government IDR 1.5M/mo.' },
      { icon: '📈', title: 'More Than Recording — Learning', desc: 'Data Flywheel + Persistent Memory: recorded farmer data is used to learn and give better recommendations.' },
    ],
  }

  const ecosystemContent = isID ? {
    title: 'Ekosistem SUGI',
    subtitle: 'Smart Farming berasal dari Smart Decision — Chatbot, AI Copilot, dan Market Intelligence yang menghubungkan petani sampai pengambil kebijakan.',
    items: [
      { title: 'Telegram Chatbot', role: 'Menjawab Kebutuhan Secara Cepat', desc: 'Chatbot AI yang menjawab kebutuhan petani, pemilik lahan, dan pemerintah secara cepat — budidaya, harga, cuaca, hama dalam Bahasa Indonesia.', features: ['100% Gratis untuk Petani Kecil', 'Respons Instan', 'On-Premise', 'Offline Catch-up'] },
      { title: 'SUGI AI Copilot', role: 'Otak Kedua Petani', desc: 'AI Copilot yang menghubungkan petani sampai pengambil kebijakan. Data Flywheel + Persistent Memory: data yang dicatat dipakai untuk belajar dan rekomendasi lebih baik.', features: ['Data Flywheel', 'Persistent Memory', 'Hybrid RAG', 'Rekomendasi Kontekstual'] },
      { title: 'SUGIDash Government', role: 'Dashboard Ketahanan Pangan', desc: 'AI dashboard untuk memantau ketahanan pangan dan kebijakan berbasis data. Untuk Bapanas, Kementan, Kemendag, Bank Indonesia, dan koperasi pertanian.', features: ['15+ Dataset Bapanas/BPS', 'Policy Recommendation', 'Chatbot Insight', 'Mulai Rp1,5jt/bln'] },
      { title: 'Market Intelligence', role: 'Insight Pasar & Kebijakan', desc: 'Insight pasar, kebijakan, dan percakapan petani berbasis SUGI AI. Telinga pemerintah: tren dan insight real-time untuk evaluasi.', features: ['10 Market Insights', '15 Tab NLP', 'Target 15% Hemat Biaya', 'Respons <24 Jam'] },
    ],
    flow: 'Alur SUGI: Petani Mendata (Mobile Apps) → Kelompok Tani → Pemerintah Mendengar (Dashboard) → Membuat Kebijakan → Memberi Market Insight & Chatbot ke Petani. Berawal dari Wonoboyo, Jogonalan, Klaten (2024) bersama UNY.',
  } : {
    title: 'SUGI Ecosystem',
    subtitle: 'Smart Farming comes from Smart Decision — Chatbot, AI Copilot, and Market Intelligence connecting farmers to policymakers.',
    items: [
      { title: 'Telegram Chatbot', role: 'Fast Answers', desc: 'AI chatbot answering farmers, landowners, and government quickly — cultivation, prices, weather, pests in Indonesian.', features: ['100% Free for Smallholders', 'Instant Response', 'On-Premise', 'Offline Catch-up'] },
      { title: 'SUGI AI Copilot', role: 'Farmers’ Second Brain', desc: 'AI Copilot connecting farmers to policymakers. Data Flywheel + Persistent Memory: recorded data is used to learn and improve recommendations.', features: ['Data Flywheel', 'Persistent Memory', 'Hybrid RAG', 'Contextual Recommendations'] },
      { title: 'SUGIDash Government', role: 'Food Security Dashboard', desc: 'AI dashboard for food security and data-driven policy. For Bapanas, Ministries, Bank Indonesia, and cooperatives.', features: ['15+ Bapanas/BPS Datasets', 'Policy Recommendation', 'Chatbot Insight', 'From IDR 1.5M/mo'] },
      { title: 'Market Intelligence', role: 'Market & Policy Insights', desc: 'Market, policy, and conversation insights powered by SUGI AI. Government ears: real-time trends and insights for evaluation.', features: ['10 Market Insights', '15 NLP Tabs', '15% Cost Saving Target', '<24 Hr Response'] },
    ],
    flow: 'SUGI loop: Farmers Record (Mobile Apps) → Groups → Government Listens (Dashboard) → Creates Policy → Gives Market Insight & Chatbot back to Farmers. Rooted in Wonoboyo, Jogonalan, Klaten (2024) with UNY.',
  }

  const currentFaqTab = faqData.find(f => f.id === faqTab)

  return (
    <>
      <SEOHead
        description={isID
          ? 'SUGI adalah ekosistem AI pertanian terintegrasi untuk petani, pemerintah, dan mitra agribisnis Indonesia. Hybrid RAG on-premise, gratis, dan berdaulat.'
          : 'SUGI is an integrated AI ecosystem for Indonesian farmers, government, and agribusiness partners. On-premise Hybrid RAG, free, and sovereign.'}
      />
      <Hero />

      

      {/* Masalah */}
      <section id="masalah" className="scroll-mt-20">
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">{problemContent.title}</h2>
              <p className="mt-4 text-lg text-gray-500">{problemContent.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problemContent.items.map((item, i) => (
                <Card key={i} className="flex flex-col">
                  <div className="mb-4"><span className="text-4xl font-bold text-primary">{item.stat}</span><p className="text-xs text-gray-400 mt-1">{item.statLabel}</p></div>
                  <h3 className="text-lg font-bold text-shade-600 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
                </Card>
              ))}
            </div>
            <div className="mt-12 p-6 md:p-8 rounded-2xl bg-shade-600 text-white text-center max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{problemContent.cycle}</p>
            </div>
          </Container>
        </Section>
      </section>

      {/* Solusi */}
      <section id="solusi" className="scroll-mt-20">
        <Section className="relative overflow-hidden">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">{solutionContent.title}</h2>
              <p className="mt-4 text-lg text-gray-500">{solutionContent.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {solutionContent.points.map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-shade-600">{point.title}</h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-tint-100/20 rounded-3xl" />
                <img
                  src="/image/dashboard-preview/sugidash-login.png"
                  alt="SUGIDash Preview"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </Container>
        </Section>
      </section>

      {/* Ekosistem */}
      <section id="ekosistem" className="scroll-mt-20">
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">{ecosystemContent.title}</h2>
              <p className="mt-4 text-lg text-gray-500">{ecosystemContent.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ecosystemContent.items.map((item, i) => (
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
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{ecosystemContent.flow}</p>
            </div>
          </Container>
        </Section>
      </section>

      {/* Roadmap */}
      <section id="peta-jalan" className="scroll-mt-20">
        <Section>
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                {isID ? 'Peta Jalan Pengembangan' : 'Development Roadmap'}
              </h2>
              <p className="mt-4 text-gray-500">
                {isID ? 'Dari validasi konsep hingga ekosistem siap produksi.' : 'From concept validation to production-ready ecosystem.'}
              </p>
            </div>
            <TimelineAnimated phases={r} />
          </Container>
        </Section>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20">
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                {isID ? 'Pertanyaan Umum' : 'Frequently Asked Questions'}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                {isID ? 'Temukan jawaban untuk pertanyaan yang sering diajukan.' : 'Find answers to commonly asked questions.'}
              </p>
            </div>
            <div className="flex justify-center gap-2 mb-10">
              {faqData.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFaqTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                    faqTab === tab.id
                      ? 'bg-primary text-shade-600 shadow-lg shadow-primary/20'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {tab.label[lang]}
                </button>
              ))}
            </div>
            {currentFaqTab && <FAQAccordion items={currentFaqTab.items.map(i => ({ q: i.q[lang], a: i.a[lang] }))} />}
          </Container>
        </Section>
      </section>

      {/* Tim */}
      <section id="tim" className="scroll-mt-20">
        <Section>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                {isID ? 'Tim Kami' : 'Our Team'}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                {isID ? 'Empat anggota dengan spesialisasi yang saling melengkapi.' : 'Four members with complementary specializations.'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <TeamMemberCard key={i} member={member} />
              ))}
            </div>
          </Container>
        </Section>
      </section>

      {/* Kontak */}
      <section id="kontak" className="scroll-mt-20">
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                {isID ? 'Hubungi Kami' : 'Contact Us'}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                {isID ? 'Ada pertanyaan atau ingin bermitra? Kami siap mendengar.' : 'Have questions or want to partner? We\'d love to hear from you.'}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card>
                <h3 className="text-lg font-bold text-shade-600 mb-6">
                  {isID ? 'Kirim Pesan' : 'Send a Message'}
                </h3>
                <ContactForm />
              </Card>
              <div className="space-y-6">
                <Card>
                  <div className="flex flex-col items-center text-center">
                    <img src="/image/telegram-qr.png" alt="Telegram QR" className="w-40 h-40 mb-4" />
                    <p className="text-sm text-gray-500 mb-4">
                      {isID ? 'Atau coba langsung SUGI AI di Telegram' : 'Or try SUGI AI directly on Telegram'}
                    </p>
                    <Button href="https://t.me/sugi_demo_llmbot">
                      {isID ? 'Mulai Chat' : 'Start Chat'}
                    </Button>
                  </div>
                </Card>
                <Card>
                  <h3 className="font-bold text-shade-600 mb-3">
                    {isID ? 'Informasi Lainnya' : 'Other Information'}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-500">
                    <p>
                      <span className="font-medium text-shade-600">{isID ? 'Telegram Bot:' : 'Telegram Bot:'}</span>{' '}
                      <a href="https://t.me/sugi_demo_llmbot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@sugi_demo_llmbot</a>
                    </p>
                    <p>
                      <span className="font-medium text-shade-600">{isID ? 'Lokasi:' : 'Location:'}</span>{' '}
                      {isID ? 'Indonesia' : 'Indonesia'}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {isID
                        ? 'SUGI adalah proyek hasil kolaborasi pengembangan independent. Untuk pertanyaan kemitraan, silakan hubungi melalui form di samping.'
                        : 'SUGI is an independent development collaboration project. For partnership inquiries, please contact us via the form.'}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      </section>
    </>
  )
}