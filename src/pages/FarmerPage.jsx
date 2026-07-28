import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import SEOHead from '../components/ui/SEOHead'
import FAQAccordion from '../components/ui/FAQAccordion'
import BenefitCard from '../components/product/BenefitCard'
import UseCaseCard from '../components/product/UseCaseCard'
import InsightExampleCard from '../components/government/InsightExampleCard'
import ChatbotPreviewCTA from '../components/farmer/ChatbotPreviewCTA'
import FarmerSolutionDiagram from '../components/farmer/FarmerSolutionDiagram'
import { faqData } from '../data/faqData'

export default function FarmerPage() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const t = (id, en) => isID ? id : en
  const [tab, setTab] = useState('chatbot')

  const goToContact = () => { window.location.href = '/#kontak' }
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

  const c = {
    hero: {
      badge: t('Untuk Petani', 'For Farmers'),
      title: t('Satu Asisten AI untuk Setiap Petani, Kelompok Tani, dan Bisnis Pertanian', 'One AI Assistant for Every Farmer, Group, and Agribusiness'),
      sub: t('SUGI AI siap membantu Anda — dari bertanya soal harga dan hama lewat chat, sampai mengelola lahan dan hasil panen dengan dashboard yang mudah dipakai.', 'SUGI AI is ready to help — from asking about prices and pests via chat, to managing land and harvests with an easy-to-use dashboard.'),
      cta1: t('Chat di Telegram Sekarang', 'Chat on Telegram Now'),
      cta2: t('Lihat Fitur', 'See Features'),
    },
    masalah: {
      badge: t('Tantangan', 'Challenges'),
      title: t('Masalah yang Sering Dihadapi', 'Common Problems Faced'),
      groups: [
        {
          label: t('Petani Individu', 'Individual Farmers'),
          items: [
            { icon: '💰', title: t('Tidak ada kepastian harga', 'No price certainty'), desc: t('Petani sering tidak tahu harga pasar yang wajar dan bergantung pada tengkulak, sehingga posisi tawar mereka lemah.', 'Farmers often don\'t know fair market prices and rely on middlemen, weakening their bargaining position.') },
            { icon: '🔍', title: t('Informasi teknis sulit diakses tepat waktu', 'Technical info hard to access'), desc: t('Pertanyaan soal hama, penyakit, cuaca, atau cara tanam butuh jawaban cepat — bukan menunggu penyuluh datang.', 'Questions about pests, diseases, weather, or farming methods need quick answers — not waiting for an extension officer.') },
            { icon: '📱', title: t('Kesenjangan digital', 'Digital divide'), desc: t('Banyak petani belum terbiasa dengan aplikasi rumit. Mereka butuh cara sesederhana kirim pesan chat.', 'Many farmers aren\'t used to complex apps. They need something as simple as sending a chat message.') },
            { icon: '📊', title: t('Keputusan berbasis feeling, bukan data', 'Decisions based on feeling, not data'), desc: t('Tanpa data harga historis, keputusan tanam dan jual sering hanya berdasarkan kebiasaan, bukan peluang pasar.', 'Without historical price data, planting and selling decisions are based on habit, not market opportunities.') },
          ],
        },
        {
          label: t('Kelompok Tani & Koperasi', 'Farmer Groups & Cooperatives'),
          items: [
            { icon: '🤝', title: t('Koordinasi antar-anggota sulit dilacak', 'Coordination is hard to track'), desc: t('Siapa mengerjakan lahan mana, kapan, dan hasilnya apa — sering hanya tercatat di buku atau ingatan.', 'Who works which land, when, and with what results — often only recorded in books or memory.') },
            { icon: '📈', title: t('Tidak ada gambaran performa kelompok', 'No group performance overview'), desc: t('Sulit membandingkan hasil antar-anggota atau melihat tren produktivitas kelompok dari waktu ke waktu.', 'Hard to compare results between members or see group productivity trends over time.') },
          ],
        },
        {
          label: t('Perusahaan Agribisnis', 'Agribusiness Companies'),
          items: [
            { icon: '📝', title: t('Pencatatan lahan dan biaya masih manual', 'Manual land and cost recording'), desc: t('Pembukaan lahan, penanaman, hingga panen dicatat terpisah, menyulitkan perhitungan biaya dan ROI akurat.', 'Land clearing, planting, to harvest are recorded separately, making accurate cost and ROI calculation difficult.') },
            { icon: '🔗', title: t('Distribusi tidak terintegrasi dengan produksi', 'Distribution not integrated with production'), desc: t('Penjualan dicatat terpisah dari data produksi, sehingga sulit menghitung margin sebenarnya per siklus tanam.', 'Sales are recorded separately from production data, making it hard to calculate actual margin per cycle.') },
            { icon: '👥', title: t('Manajemen tenaga kerja dan lahan tersebar', 'Scattered workforce and land management'), desc: t('Menugaskan pekerja ke blok lahan dan memantau progres sulit tanpa sistem terpusat.', 'Assigning workers to land blocks and monitoring progress is difficult without a centralized system.') },
          ],
        },
      ],
    },
    solusi: {
      badge: t('Solusi', 'Solution'),
      title: t('Tiga Lapisan yang Saling Terhubung', 'Three Interconnected Layers'),
      sub: t('Chatbot, PWA, dan Dashboard — semua berbagi data yang sama, jadi informasi harga, lahan, dan hasil selalu konsisten.', 'Chatbot, PWA, and Dashboard — all sharing the same data, so price, land, and harvest info is always consistent.'),
    },
    manfaat: {
      badge: t('Manfaat', 'Benefits'),
      title: t('Apa yang Anda Dapatkan', 'What You Get'),
      groups: [
        {
          label: t('Untuk Petani Individu', 'For Individual Farmers'),
          items: [
            { icon: '🎁', title: t('Gratis selamanya', 'Forever free'), desc: t('Chatbot SUGI AI gratis untuk petani — didanai oleh langganan pemerintah dan agribisnis.', 'SUGI AI chatbot is free for farmers — funded by government and agribusiness subscriptions.') },
            { icon: '⚡', title: t('Jawaban cepat, kapan saja', 'Quick answers anytime'), desc: t('Tanya harga, cuaca, hama langsung lewat Telegram. Tanpa instal aplikasi rumit.', 'Ask about prices, weather, pests directly on Telegram. No complex app installation.') },
            { icon: '📋', title: t('Rekomendasi tanam dan jual berbasis data', 'Data-based planting & selling'), desc: t('Bukan tebak-tebakan — berdasarkan tren harga dan permintaan nyata.', 'Not guesswork — based on real price trends and demand.') },
            { icon: '📡', title: t('Tetap berfungsi meski sinyal lemah', 'Works even with weak signal'), desc: t('Pesan offline tetap diproses begitu bot kembali online.', 'Offline messages are processed when the bot comes back online.') },
          ],
        },
        {
          label: t('Untuk Kelompok Tani & Koperasi', 'For Farmer Groups & Cooperatives'),
          items: [
            { icon: '📊', title: t('Gambaran performa kelompok', 'Group performance overview'), desc: t('Bandingkan hasil antar-anggota dan pantau tren produktivitas dari satu dashboard.', 'Compare results between members and monitor productivity trends from one dashboard.') },
            { icon: '🗺️', title: t('Penugasan lahan yang rapi', 'Neat land assignment'), desc: t('Ketahui siapa mengerjakan blok mana dan progresnya sampai di mana.', 'Know who works which block and their progress.') },
          ],
        },
        {
          label: t('Untuk Perusahaan Agribisnis', 'For Agribusiness Companies'),
          items: [
            { icon: '🔄', title: t('Manajemen siklus end-to-end', 'End-to-end cycle management'), desc: t('Dari buka lahan sampai panen, semua tercatat dan biayanya terhitung akurat.', 'From land clearing to harvest, everything is recorded with accurate cost tracking.') },
            { icon: '📈', title: t('KPI ROI dan biaya per kg', 'ROI KPIs and cost per kg'), desc: t('Bandingkan performa antar perusahaan, kelompok, dan petani mandiri.', 'Compare performance across companies, groups, and individual farmers.') },
            { icon: '🔗', title: t('Penjualan terhubung produksi', 'Sales connected to production'), desc: t('Margin sebenarnya per siklus tanam jadi terlihat, bukan estimasi.', 'Actual margin per planting cycle becomes visible, not estimates.') },
            { icon: '🔔', title: t('Sistem peringatan otomatis', 'Automatic alert system'), desc: t('Pelacakan jendela panen mendekati tenggat dan tugas yang belum ditugaskan.', 'Harvest window deadline tracking and unassigned task alerts.') },
          ],
        },
      ],
    },
    fitur: {
      badge: t('Fitur', 'Features'),
      title: t('Fitur Lengkap untuk Semua Kebutuhan', 'Complete Features for Every Need'),
      tabs: [
        { id: 'chatbot', label: t('Chatbot Telegram', 'Telegram Chatbot') },
        { id: 'pwa', label: 'SUGI PWA' },
        { id: 'dashboard', label: t('Dashboard Petani', 'Farmer Dashboard') },
        { id: 'siklus', label: t('Manajemen Siklus', 'Cycle Management') },
        { id: 'jual', label: t('Penjualan', 'Sales & Distribution') },
      ],
      chatbotTitle: t('Chatbot Telegram SUGI AI', 'SUGI AI Telegram Chatbot'),
      chatbotDesc: t('Asisten AI gratis yang bisa Anda ajak ngobrol kapan saja — tanya harga, cuaca, hama, atau cara tanam. Jawabannya cepat dan berdasarkan data nyata, bukan tebakan.', 'A free AI assistant you can chat with anytime — ask about prices, weather, pests, or farming methods. Answers are fast and based on real data, not guesses.'),
      chatbotFeatures: [
        t('Hybrid RAG — jawaban diambil dari basis pengetahuan pertanian terverifikasi', 'Hybrid RAG — answers come from verified agricultural knowledge bases'),
        t('Data cuaca real-time dengan peringatan agronomi (kekeringan, banjir, risiko penyakit)', 'Real-time weather data with agronomy alerts (drought, flood, disease risk)'),
        t('Informasi lengkap 10.000+ spesies tanaman dari basis data Perenual', 'Complete info on 10,000+ plant species from the Perenual database'),
        t('Memori percakapan jangka panjang — chatbot ingat konteks dari sesi sebelumnya', 'Long-term conversation memory — chatbot remembers context from previous sessions'),
        t('Pesan offline tetap diproses — cocok untuk area dengan sinyal tidak stabil', 'Offline messages are still processed — perfect for areas with unstable signals'),
        t('Gratis, tanpa batas jumlah pertanyaan wajar', 'Free, with no limit on reasonable questions'),
      ],
      pwaTitle: t('SUGI PWA — Pencatatan Lapangan Offline', 'SUGI PWA — Offline Field Recording'),
      pwaDesc: t('Aplikasi web yang bekerja tanpa internet — catat data lahan dan aktivitas langsung dari ladang, dan otomatis tersinkron saat koneksi kembali.', 'A web app that works without internet — record land data and activities directly from the field, automatically syncing when connection returns.'),
      dashboardTitle: t('Dashboard Petani (Market Intelligence)', 'Farmer Dashboard (Market Intelligence)'),
      dashboardDesc: t('Lihat harga pasar, perbandingkan komoditas, dan dapatkan wawasan AI — semua dalam satu dashboard visual yang mudah dipahami.', 'View market prices, compare commodities, and get AI insights — all in one easy-to-understand visual dashboard.'),
      kpis: [
        { label: t('Harga Produsen Rata-rata', 'Avg Producer Price'), desc: t('Rata-rata harga produsen seluruh komoditas', 'Average producer price across all commodities') },
        { label: t('Harga Konsumen Rata-rata', 'Avg Consumer Price'), desc: t('Rata-rata harga konsumen seluruh komoditas', 'Average consumer price across all commodities') },
        { label: t('Margin Produsen–Konsumen', 'Producer–Consumer Margin'), desc: t('Selisih harga konsumen dan produsen', 'Difference between consumer and producer prices') },
        { label: t('Surplus Neraca Pangan', 'Food Balance Surplus'), desc: t('Ketersediaan dikurangi kebutuhan nasional', 'Availability minus national needs') },
        { label: t('Komoditas Tertinggi', 'Highest Commodity'), desc: t('Harga produsen rata-rata tertinggi', 'Highest average producer price') },
        { label: t('Skor PPH Nasional', 'National PPH Score'), desc: t('Skor Pola Pangan Harapan dari 100', 'Dietary Diversity Score out of 100') },
        { label: t('Komoditas Paling Diminati', 'Most In-Demand'), desc: t('Konsumsi per kapita tertinggi', 'Highest per capita consumption') },
        { label: t('Peluang Pasar', 'Market Opportunity'), desc: t('Menguntungkan jika margin positif', 'Profitable if margin is positive') },
      ],
      insights: [
        { source: 'Skor PPH', recommendation: t('Skor PPH Nasional saat ini 89.6 dari 100 — masih di bawah target 100', 'National PPH Score is 89.6 out of 100 — still below the 100 target') },
        { source: t('Cadangan Daerah', 'Regional Reserves'), recommendation: t('Cadangan Pangan Daerah di bawah 50% di Sulawesi Tenggara', 'Regional Food Reserves below 50% in Southeast Sulawesi') },
        { source: t('Komoditas Terbaik', 'Best Commodity'), recommendation: t('Cabai Rawit Merah menjadi komoditas dengan harga produsen tertinggi', 'Red Cayenne Pepper is the commodity with the highest producer price') },
        { source: t('Status Margin', 'Margin Status'), recommendation: t('Margin produsen-konsumen menurun 15% dibanding bulan lalu', 'Producer-consumer margin decreased 15% compared to last month') },
        { source: t('Neraca Pangan', 'Food Balance'), recommendation: t('Neraca pangan nasional surplus 2.5 juta ton bulan ini', 'National food balance surplus of 2.5 million tons this month') },
        { source: t('Surplus Komoditas', 'Commodity Surplus'), recommendation: t('Beras memiliki surplus tertinggi di antara semua komoditas', 'Rice has the highest surplus among all commodities') },
        { source: t('Peluang Bulanan', 'Monthly Opportunity'), recommendation: t('Jawa Timur memiliki margin tertinggi sebesar Rp 8.500', 'East Java has the highest margin at Rp 8,500') },
        { source: t('Provinsi Terbaik', 'Best Province'), recommendation: t('Jawa Barat menjadi provinsi dengan harga produsen tertinggi', 'West Java is the province with the highest producer price') },
        { source: t('Rekomendasi Tanam', 'Planting Recommendation'), recommendation: t('Cabai Rawit Merah: Permintaan tinggi dengan harga Rp 38.500/kg', 'Red Cayenne Pepper: High demand at Rp 38,500/kg') },
        { source: t('Rekomendasi Jual', 'Selling Recommendation'), recommendation: t('Jawa Timur menawarkan margin tertinggi untuk Daging Ayam Ras', 'East Java offers the highest margin for Broiler Chicken Meat') },
      ],
      siklusTitle: t('Manajemen Siklus Pertanian', 'Agriculture Cycle Management'),
      siklusDesc: t('Kelola seluruh siklus tanam dari persiapan lahan hingga panen — dengan pencatatan biaya, waktu, dan hasil yang akurat.', 'Manage the entire planting cycle from land preparation to harvest — with accurate cost, time, and yield recording.'),
      siklusItems: [
        t('Persiapan Lahan — buka/tutup lahan dengan pelacakan biaya', 'Land Preparation — open/close land with cost tracking'),
        t('Log Penanaman — varietas, kepadatan tanam, luas area', 'Planting Log — varieties, planting density, area size'),
        t('Pemeliharaan — pemupukan, penyemprotan, akumulasi jam kerja', 'Maintenance — fertilization, spraying, work hour accumulation'),
        t('Manajemen Panen — target vs aktual, peringatan tenggat', 'Harvest Management — target vs actual, deadline alerts'),
      ],
      jualTitle: t('Penjualan & Distribusi', 'Sales & Distribution'),
      jualDesc: t('Catat penjualan ke pabrik, tengkulak, atau pasar langsung — dengan perhitungan otomatis pendapatan dan margin per siklus.', 'Record sales to mills, middlemen, or direct markets — with automatic revenue and margin calculation per cycle.'),
      jualKpis: [
        t('Total Hasil Panen (Ton)', 'Total Harvest (Tons)'),
        t('ROI (%)', 'ROI (%)'),
        t('Biaya per Kg', 'Cost per Kg'),
        t('Harga Rata-rata', 'Average Price'),
      ],
    },
    studi: {
      badge: t('Studi Kasus', 'Case Studies'),
      title: t('Contoh Penggunaan Nyata', 'Real Usage Examples'),
      kasus: [
        { icon: '🌶️', title: t('Petani Individu: Identifikasi Hama Cabai', 'Individual Farmer: Chili Pest Identification'), actor: t('Petani Cabai di Jawa Tengah', 'Chili Farmer in Central Java'), situation: t('Seorang petani menemukan gejala tidak biasa di daun cabainya — bercak kuning dengan tepi kecoklatan. Ia memotretnya lalu bertanya ke chatbot SUGI AI di Telegram. Dalam hitungan detik, sistem mengidentifikasi gejala sebagai serangan antraknosa (Colletotrichum spp.) dan memberikan rekomendasi penanganan: fungisida berbahan aktif tembaga, sanitasi lahan, dan jarak tanam yang lebih lebar.', 'A farmer found unusual symptoms on his chili leaves — yellow spots with brown edges. He photographed them and asked the SUGI AI chatbot on Telegram. Within seconds, the system identified the symptoms as anthracnose (Colletotrichum spp.) and provided treatment recommendations: copper-based fungicide, field sanitation, and wider planting spacing.'), outcome: t('Petani dapat menangani serangan hama di hari yang sama, mencegah penyebaran ke tanaman lain dan kerugian hasil panen yang lebih besar.', 'The farmer was able to handle the pest attack the same day, preventing spread to other plants and greater harvest losses.') },
        { icon: '👥', title: t('Kelompok Tani: Penugasan 20 Anggota', 'Farmer Group: Assigning 20 Members'), actor: t('Pengurus Kelompok Tani Subur Makmur', 'Subur Makmur Farmer Group Coordinator'), situation: t('Ketua kelompok tani harus menugaskan 20 anggota ke 8 blok lahan yang berbeda untuk musim tanam berikutnya. Menggunakan fitur Unit Management di dashboard, ia membagi anggota berdasarkan pengalaman dan luas lahan, menetapkan target panen per blok, dan langsung bisa memantau progres dari dashboard — siapa yang sudah mulai menanam, siapa yang masih tahap persiapan lahan.', 'The farmer group leader needed to assign 20 members to 8 different land blocks for the next planting season. Using the Unit Management feature, he divided members based on experience and land area, set harvest targets per block, and could immediately monitor progress — who had started planting, who was still in land preparation.'), outcome: t('Semua anggota tahu tugas masing-masing dalam waktu 1 hari. Ketua kelompok bisa memantau progres dari dashboard tanpa harus turun ke lapangan satu per satu.', 'All members knew their assignments within 1 day. The group leader could monitor progress from the dashboard without visiting the field one by one.') },
        { icon: '🏢', title: t('Perusahaan: Evaluasi ROI Antar-Blok', 'Company: Cross-Block ROI Evaluation'), actor: t('Manajer Operasional PT Agri Sejahtera', 'Operations Manager at PT Agri Sejahtera'), situation: t('Tim operasional mencatat seluruh aktivitas dari persiapan lahan, penanaman, pemeliharaan, hingga panen di 5 blok berbeda — lengkap dengan biaya per aktivitas. Setelah panen, dashboard menampilkan perbandingan ROI antar-blok: Blok A menghasilkan ROI 34% dengan biaya Rp 2.100/kg, sementara Blok C hanya 12% dengan biaya Rp 3.800/kg.', 'The operations team recorded all activities from land preparation, planting, maintenance, to harvest across 5 different blocks — complete with cost per activity. After harvest, the dashboard displayed cross-block ROI comparison: Block A yielded 34% ROI at Rp 2,100/kg, while Block C only 12% at Rp 3,800/kg.'), outcome: t('Manajer memutuskan untuk mengadopsi metode tanam Blok A untuk musim berikutnya dan mengevaluasi ulang alokasi sumber daya di Blok C — keputusan berbasis data, bukan perkiraan.', 'The manager decided to adopt Block A\'s planting method for the next season and re-evaluate resource allocation in Block C — a data-based decision, not an estimate.') },
      ],
    },
    cta: {
      title: t('Siap Memulai?', 'Ready to Start?'),
      sub: t('Coba sendiri chatbot SUGI AI di Telegram, atau hubungi tim kami untuk informasi lebih lanjut.', 'Try the SUGI AI chatbot on Telegram, or contact our team for more information.'),
      btn1: t('Chat dengan SUGI AI di Telegram', 'Chat with SUGI AI on Telegram'),
      btn2: t('Hubungi Kami', 'Contact Us'),
    },
  }

  return (
    <>
      <SEOHead title={t('Untuk Petani', 'For Farmers')} description={t('Asisten AI pertanian gratis untuk petani, kelompok tani, dan perusahaan agribisnis. Chatbot Telegram, PWA offline, dan dashboard lengkap.', 'Free agricultural AI assistant for farmers, groups, and agribusinesses. Telegram chatbot, offline PWA, and full dashboard.')} />

      {/* 1. Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-shade-600">
        <div className="absolute inset-0">
          <img src="/image/dashboard-preview/farmer-dashboard.png" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-shade-600/90 via-shade-600/70 to-shade-600" />
        </div>
        <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <Badge className="mb-4">{c.hero.badge}</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">{c.hero.title}</h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">{c.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="https://t.me/sugi_demo_llmbot">{c.hero.cta1}</Button>
              <Button variant="secondary" onClick={() => scrollTo('fitur')}>{c.hero.cta2}</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Masalah */}
      <Section id="masalah">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.masalah.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-shade-600">{c.masalah.title}</h2>
          </div>
          {c.masalah.groups.map((g, gi) => (
            <div key={gi} className="mb-10 last:mb-0">
              <h3 className="text-xl font-bold text-primary mb-4">{g.label}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.items.map((p, i) => (
                  <div key={i} className="rounded-xl bg-white p-5 border border-gray-100 shadow-sm">
                    <span className="text-2xl mb-2 block">{p.icon}</span>
                    <h4 className="font-bold text-shade-600 mb-1 text-sm">{p.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>

      {/* 3. Solusi */}
      <Section id="solusi" dark>
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.solusi.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{c.solusi.title}</h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">{c.solusi.sub}</p>
          </div>
          <FarmerSolutionDiagram />
        </Container>
      </Section>

      {/* 4. Manfaat */}
      <Section id="manfaat">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.manfaat.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-shade-600">{c.manfaat.title}</h2>
          </div>
          {c.manfaat.groups.map((g, gi) => (
            <div key={gi} className="mb-10 last:mb-0">
              <h3 className="text-xl font-bold text-primary mb-4">{g.label}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {g.items.map((b, i) => (
                  <BenefitCard key={i} icon={b.icon} title={b.title} desc={b.desc} index={i} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>

      {/* 5. Coba Chatbot */}
      <ChatbotPreviewCTA />

      {/* 6. Fitur */}
      <Section id="fitur" dark>
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.fitur.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{c.fitur.title}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {c.fitur.tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} className={'px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ' + (tab === t.id ? 'bg-primary text-shade-600 shadow-lg shadow-primary/20' : 'bg-white/10 text-gray-300 hover:bg-white/20')}>{t.label}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              {/* Chatbot */}
              {tab === 'chatbot' && (
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">{c.fitur.chatbotTitle}</h3>
                  <p className="text-gray-400 mb-6">{c.fitur.chatbotDesc}</p>
                  <ul className="space-y-3">
                    {c.fitur.chatbotFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">&#10003;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* PWA */}
              {tab === 'pwa' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{c.fitur.pwaTitle}</h3>
                    <p className="text-gray-400 mb-4">{c.fitur.pwaDesc}</p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img src="/image/dashboard-preview/farmer-pwa.png" alt="SUGI PWA" className="w-full h-auto" />
                  </div>
                </div>
              )}
              {/* Dashboard */}
              {tab === 'dashboard' && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{c.fitur.dashboardTitle}</h3>
                      <p className="text-gray-400 mb-6">{c.fitur.dashboardDesc}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {c.fitur.kpis.map((k, i) => (
                          <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-2.5">
                            <p className="text-xs text-gray-400">{k.label}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{k.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src="/image/dashboard-preview/farmer-dashboard.png" alt="Farmer dashboard" className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="rounded-xl overflow-hidden shadow-lg max-w-lg mx-auto">
                      <img src="/image/dashboard-preview/farmer-market-Intelligence.png" alt="Market Intelligence" className="w-full h-auto" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4 text-center">{t('10 Wawasan AI', '10 AI Insights')}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
                    {c.fitur.insights.map((ins, i) => (
                      <InsightExampleCard key={i} source={ins.source} recommendation={ins.recommendation} index={i} />
                    ))}
                  </div>
                </div>
              )}
              {/* Siklus */}
              {tab === 'siklus' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{c.fitur.siklusTitle}</h3>
                    <p className="text-gray-400 mb-6">{c.fitur.siklusDesc}</p>
                    <ul className="space-y-3">
                      {c.fitur.siklusItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">{i + 1}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img src="/image/dashboard-preview/farmer-lifecycle-management.png" alt="Lifecycle management" className="w-full h-auto" />
                  </div>
                </div>
              )}
              {/* Penjualan */}
              {tab === 'jual' && (
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">{c.fitur.jualTitle}</h3>
                  <p className="text-gray-400 mb-6">{c.fitur.jualDesc}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {c.fitur.jualKpis.map((kpi, i) => (
                      <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-4 text-center">
                        <p className="text-sm font-bold text-primary">{kpi.split('(')[0].trim()}</p>
                        {kpi.includes('(') && <p className="text-xs text-gray-400 mt-1">({kpi.split('(')[1]}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      {/* 7. Studi Kasus */}
      <Section id="studi-kasus">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.studi.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-shade-600">{c.studi.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {c.studi.kasus.map((k, i) => (
              <UseCaseCard key={i} icon={k.icon} title={k.title} actor={k.actor} situation={k.situation} outcome={k.outcome} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. FAQ */}
      <Section id="faq" className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-3">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-shade-600">
              {isID ? 'Pertanyaan Umum Petani' : 'Frequently Asked Questions'}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {isID ? 'Jawaban cepat untuk pertanyaan yang sering diajukan petani.' : 'Quick answers to commonly asked farmer questions.'}
            </p>
          </div>
          <FAQAccordion items={faqData.find(f => f.id === 'petani').items.map(i => ({ q: i.q[lang], a: i.a[lang] }))} />
        </Container>
      </Section>

      {/* 9. CTA */}
      <Section dark>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.cta.title}</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">{c.cta.sub}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="https://t.me/sugi_demo_llmbot">{c.cta.btn1}</Button>
              <Button variant="secondary" onClick={goToContact}>{c.cta.btn2}</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}