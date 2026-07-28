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
    { period: '01 Mar–26 Mar 2026', label: 'Pre-Submission', title: 'Fase 1: Chatbot dan Front End Dashboard', desc: 'Chatbot: Fondasi Hybrid RAG (BM25 + Vector Search) dengan LLM lokal (on-premise). Dashboard: Manajemen siklus tanam (CRUD) dan visualisasi peta dasar.' },
    { period: '01 Mei–04 Jun 2026', label: 'Tahap Essential', title: 'Fase 2: Offline Catch-up dan Back End Dashboard', desc: 'Chatbot: Bot Telegram live dengan fitur Offline Catch-up (zero data loss). Dashboard: Frontend & backend terhubung, 14 modul data, dan peta interaktif. Integrasi: Daily Insight Engine mulai mengirim insight harian ke dashboard.' },
    { period: '19 Jun–26 Jul 2026', label: 'Tahap Practitioner', title: 'Fase 3: Integrasi dan Optimisasi', desc: 'Chatbot: AI Insight Engine otomatis untuk petani dan pemerintah dengan change detection. Dashboard: 15 tab analitik NLP (Knowledge Graph, Sentimen, Tren) dan arsitektur dual-database. Performa & Data: Optimasi 15 query paralel, cache 5 menit, kompresi data 80%, serta integrasi 15+ dataset ketahanan pangan nasional. Pengembangan PWA untuk mobile.' },
  ],
  en: [
    { period: '01 Mar–26 Mar 2026', label: 'Pre-Submission', title: 'Phase 1: Chatbot and Front End Dashboard', desc: 'Chatbot: Hybrid RAG foundation (BM25 + Vector Search) with local LLM (on-premise). Dashboard: Cultivation cycle management (CRUD) and basic map visualization.' },
    { period: '01 May–04 Jun 2026', label: 'Essential Stage', title: 'Phase 2: Offline Catch-up and Back End Dashboard', desc: 'Chatbot: Live Telegram bot with Offline Catch-up feature (zero data loss). Dashboard: Frontend & backend connected, 14 data modules, and interactive map. Integration: Daily Insight Engine starts sending daily insights to dashboard.' },
    { period: '19 Jun–26 Jul 2026', label: 'Practitioner Stage', title: 'Phase 3: Integration and Optimization', desc: 'Chatbot: Automated AI Insight Engine for farmers and government with change detection. Dashboard: 15 NLP analytics tabs (Knowledge Graph, Sentiment, Trends) and dual-database architecture. Performance & Data: 15 parallel query optimization, 5-min cache, 80% data compression, and 15+ national food security dataset integration. PWA mobile development.' },
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
    title: 'SUGI Sebagai Solusi Terintegrasi',
    subtitle: 'Bukan solusi parsial — SUGI menjawab ketiga lapisan kompleksitas secara simultan melalui satu ekosistem yang saling terhubung.',
    points: [
      { icon: '🌾', title: 'Pendamping Keputusan Kontekstual', desc: 'Chatbot AI hybrid RAG yang memahami konteks pertanian Indonesia. Memberikan rekomendasi tanam, analisis harga, peringatan dini cuaca, dan saran pengendalian hama secara real-time.' },
      { icon: '🔄', title: 'Transfer Pengetahuan Lintas Generasi', desc: 'Knowledge base yang terus belajar dari setiap interaksi, menjembatani pengetahuan empiris petani senior dengan akses data digital untuk generasi muda.' },
      { icon: '📊', title: 'Early Warning System Berbasis Data', desc: 'Data mikro lapangan dikonversi menjadi intelijen kebijakan pangan nasional. Mempercepat respons pemerintah dari skala minggu ke hari.' },
      { icon: '🔒', title: 'Kedaulatan Data & Privasi', desc: 'Seluruh proses inferensi AI berjalan on-premise via Ollama. Data operasional petani, perusahaan, dan pemerintah tidak pernah dikirim ke layanan AI publik.' },
      { icon: '🆓', title: 'Gratis untuk Petani', desc: 'Cross-subsidy model: chatbot Telegram gratis untuk petani sebagai kanal adopsi awal. Pendanaan dari layanan SaaS B2B dan Data-as-a-Service.' },
      { icon: '📈', title: 'Data Flywheel', desc: 'Semakin banyak petani menggunakan SUGI, semakin kaya data lapangan, semakin akurat AI, semakin tinggi nilai analitik — siklus yang saling memperkuat.' },
    ],
  } : {
    title: 'SUGI as an Integrated Solution',
    subtitle: 'Not a partial solution — SUGI addresses all three layers of complexity simultaneously through one interconnected ecosystem.',
    points: [
      { icon: '🌾', title: 'Contextual Decision Support', desc: 'Hybrid RAG AI chatbot that understands Indonesian agricultural context. Provides planting recommendations, price analysis, weather early warnings, and pest control advice in real-time.' },
      { icon: '🔄', title: 'Cross-Generational Knowledge Transfer', desc: 'A knowledge base that continuously learns from every interaction, bridging senior farmers\' empirical knowledge with digital data access for younger generations.' },
      { icon: '📊', title: 'Data-Driven Early Warning System', desc: 'Micro-level field data is converted into national food security intelligence. Accelerates government response from weeks to days.' },
      { icon: '🔒', title: 'Data Sovereignty & Privacy', desc: 'All AI inference runs on-premise via Ollama. Farmer, company, and government operational data is never sent to public AI services.' },
      { icon: '🆓', title: 'Free for Farmers', desc: 'Cross-subsidy model: free Telegram chatbot for farmers as an adoption channel. Funded through B2B SaaS and Data-as-a-Service.' },
      { icon: '📈', title: 'Data Flywheel', desc: 'The more farmers use SUGI, the richer the field data, the more accurate the AI, the higher the analytics value — a self-reinforcing cycle.' },
    ],
  }

  const ecosystemContent = isID ? {
    title: 'Ekosistem SUGI',
    subtitle: 'Empat komponen yang beroperasi sebagai satu AI Engine — menghubungkan interaksi lapangan petani menjadi intelijen kebijakan pangan nasional.',
    items: [
      { title: 'SUGI AI', role: 'Asisten Cerdas Hybrid RAG', desc: 'Chatbot Telegram berbasis Hybrid RAG yang berjalan on-premise via Ollama. Menjawab pertanyaan budidaya, harga, cuaca, dan hama secara real-time dengan konteks pertanian Indonesia.', features: ['Scope Guard & Query Rewriting', 'Cross-Encoder Reranker', 'Long-Term Memory', '100% Gratis untuk Petani'] },
      { title: 'SUGIDash', role: 'Dashboard Analitik & Intelijen Pangan', desc: 'Platform dashboard berbasis peran untuk Petani, Manajemen, dan Pemerintah dengan 15+ dataset ketahanan pangan nasional, lifecycle tracker, dan KPI real-time.', features: ['3 Role-Based Dashboard', '15+ Dataset Bapanas/BPS', 'Lifecycle Management', 'Peta Interaktif Indonesia'] },
      { title: 'SUGI PWA', role: 'Aplikasi Lapangan Mobile-First', desc: 'Aplikasi mobile offline-first untuk pencatatan aktivitas budidaya di area sinyal terbatas. Terintegrasi langsung dengan SUGI AI dan SUGIDash.', features: ['Offline-First', 'Pencatatan Lapangan', 'Sinkronisasi Otomatis', 'Minimum Typing UX'] },
      { title: 'Insight Engine', role: 'Mesin Wawasan Otomatis', desc: 'Mengagregasi interaksi mikro dari ketiga komponen menjadi wawasan makro terstruktur. Mendukung Early Warning System dan mitigasi risiko kebijakan.', features: ['Daily Insights (12 jam)', 'Government Insights', 'Farmer Insights (10 jenis)', 'Policy Recommendations'] },
    ],
    flow: 'Keempat komponen tidak beroperasi secara terpisah — mereka terhubung dalam satu pipeline data yang mengonversi interaksi lapangan petani menjadi intelijen kebijakan pangan nasional secara berkelanjutan.',
  } : {
    title: 'SUGI Ecosystem',
    subtitle: 'Four components operating as one AI Engine — connecting on-field farmer interactions into national food security intelligence.',
    items: [
      { title: 'SUGI AI', role: 'Hybrid RAG Intelligent Assistant', desc: 'Telegram chatbot powered by Hybrid RAG running on-premise via Ollama. Answers cultivation, pricing, weather, and pest queries in real-time with Indonesian agricultural context.', features: ['Scope Guard & Query Rewriting', 'Cross-Encoder Reranker', 'Long-Term Memory', '100% Free for Farmers'] },
      { title: 'SUGIDash', role: 'Analytics & Food Intelligence Dashboard', desc: 'Role-based dashboard platform for Farmers, Management, and Government with 15+ national food security datasets, lifecycle tracker, and real-time KPIs.', features: ['3 Role-Based Dashboards', '15+ Bapanas/BPS Datasets', 'Lifecycle Management', 'Interactive Indonesia Map'] },
      { title: 'SUGI PWA', role: 'Mobile-First Field Application', desc: 'Offline-first mobile app for recording cultivation activities in limited signal areas. Directly integrated with SUGI AI and SUGIDash.', features: ['Offline-First', 'Field Recording', 'Auto Sync', 'Minimum Typing UX'] },
      { title: 'Insight Engine', role: 'Automated Intelligence Engine', desc: 'Aggregates micro interactions from all three components into structured macro insights. Supports Early Warning System and policy risk mitigation.', features: ['Daily Insights (12h)', 'Government Insights', 'Farmer Insights (10 types)', 'Policy Recommendations'] },
    ],
    flow: 'All four components do not operate in isolation — they are connected in one data pipeline that converts farmer field interactions into national food security intelligence on an ongoing basis.',
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