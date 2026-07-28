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
import ArchitectureDiagram from '../components/government/ArchitectureDiagram'
import InsightExampleCard from '../components/government/InsightExampleCard'

export default function GovernmentPage() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const [activeTab, setActiveTab] = useState('dashboard')

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const goToContact = () => {
    window.location.href = '/#kontak'
  }

  const content = isID ? {
    seo: { title: 'Untuk Pemerintah', desc: 'Dashboard ketahanan pangan nasional berbasis AI untuk Pemerintah Indonesia. Integrasi data BPS, Bapanas, Kemendag dalam satu platform.' },
    hero: { badge: 'Untuk Pemerintah', title: 'Satu Dashboard untuk Ketahanan Pangan Nasional', subtitle: 'Dashboard Pemerintah, Rekomendasi Kebijakan AI, Chatbot Insight dari percakapan petani, dan Manajemen Data Induk — semuanya terintegrasi dalam satu ekosistem on-premise.', cta: 'Jadwalkan Demo', cta2: 'Lihat Fitur' },
    masalah: { badge: 'Tantangan', title: 'Enam Masalah Struktural Data Pemerintah', subtitle: 'Bukan rendahnya produktivitas semata — melainkan asimetri informasi struktural di sepanjang rantai kebijakan pangan.' },
    masalahItems: [
      { icon: '🗂️', title: 'Data pemerintah tersebar dan terisolasi', desc: 'Harga komoditas, proyeksi neraca pangan, PoU, skor PPH, cadangan pangan, dan data donasi masing-masing hidup di sumber dan format berbeda (BPS, Bapanas, Kemendag), tanpa satu dashboard yang menyatukannya.' },
      { icon: '📋', title: 'Siklus pelaporan manual dan lambat', desc: 'Kondisi lapangan bisa berubah bulanan atau bahkan mingguan, namun visibilitas kebijakan terikat pada laporan berkala yang disusun manual, sehingga keputusan sering tertinggal dari kondisi riil.' },
      { icon: '🔇', title: 'Tidak ada kanal sistematis untuk mendengar langsung dari petani', desc: 'Masalah di lapangan baru diketahui secara anekdotal atau terlambat, karena tidak ada cara terstruktur untuk mendengarkan apa yang ditanyakan dan dilaporkan petani dalam skala besar.' },
      { icon: '✏️', title: 'Rekomendasi kebijakan disusun secara manual', desc: 'Analis harus menyilangkan data dari berbagai spreadsheet secara manual untuk menghasilkan satu rekomendasi — belum ada sintesis berkelanjutan berbasis AI lintas-dataset.' },
      { icon: '⚠️', title: 'Celah peringatan dini', desc: 'PoU suatu provinsi yang mulai naik, atau cadangan pangan yang turun di bawah ambang batas aman, baru terdeteksi pada siklus pelaporan berikutnya — bukan saat kejadian berlangsung.' },
      { icon: '🔍', title: 'Akuntabilitas dan audit data yang lemah', desc: 'Tanpa versi data yang konsisten dan riwayat perubahan yang jelas, sulit melacak dasar suatu keputusan kebijakan diambil.' },
    ],
    solusi: { badge: 'Arsitektur', title: 'Empat Lapisan, Satu Fondasi Data', subtitle: 'Angka di dashboard, rekomendasi yang dihasilkan AI, dan sinyal dari percakapan petani selalu konsisten karena berbagi fondasi data yang sama.' },
    manfaat: { badge: 'Manfaat', title: 'Mengapa Pemerintah Menggunakan SUGI' },
    benefits: [
      { icon: '🎯', title: 'Satu sumber kebenaran', desc: 'Satu dashboard menggantikan data yang tersebar di berbagai spreadsheet dan sistem kementerian, mencakup 15 halaman dataset ketahanan pangan nasional.' },
      { icon: '⏱️', title: 'Pemantauan real-time, bukan berkala', desc: 'PoU, PPH, neraca pangan, cadangan, dan donasi diperbarui terus-menerus dan bisa difilter per tahun/bulan/komoditas/provinsi.' },
      { icon: '🤖', title: 'Rekomendasi kebijakan otomatis dan bisa dilacak sumbernya', desc: 'Dihasilkan AI dari analisis 14 dataset setiap jam, dengan deteksi perubahan otomatis, bukan sintesis manual analis yang memakan waktu.' },
      { icon: '📡', title: 'Sinyal langsung dari petani, bukan asumsi', desc: 'Percakapan chatbot dianalisis untuk sentimen, keluhan, dan tren topik, sehingga masalah lapangan terdeteksi lebih awal dari siklus laporan berikutnya.' },
      { icon: '🏆', title: 'Peringkat dan pemetaan provinsi', desc: 'Memperlihatkan wilayah mana yang paling butuh intervensi — cadangan terendah, PoU tertinggi, aktivitas GPM terendah.' },
      { icon: '📤', title: 'Data siap ekspor', desc: 'CSV/PDF/Excel/JSON untuk langsung dipakai dalam alur pelaporan kementerian yang sudah berjalan, tanpa perlu proses migrasi data tambahan.' },
      { icon: '🔐', title: 'Akses berbasis peran yang aman', desc: 'Hanya data dan fitur yang relevan yang tampil untuk setiap akun, mendukung akuntabilitas dan audit.' },
      { icon: '📥', title: 'Impor data yang kompatibel dengan sumber yang sudah ada', desc: 'Mendukung impor massal langsung dari format seperti SatuHarga Kemendag atau data BPS, tanpa migrasi manual satu per satu.' },
    ],
    fitur: { badge: 'Fitur', title: 'Empat Klaster Fitur Utama', tabs: [
      { id: 'dashboard', label: 'Dashboard Pemerintah' },
      { id: 'kebijakan', label: 'Rekomendasi Kebijakan' },
      { id: 'chatbot', label: 'Chatbot Insight' },
      { id: 'data', label: 'Manajemen Data Induk' },
    ]},
    dashboard: { title: 'Dashboard Pemerintah', desc: 'Tampilan real-time atas 15 halaman CRUD dataset ketahanan pangan nasional — dari harga komoditas, neraca pangan, hingga distribusi donasi — dalam satu antarmuka terpadu.', chartsLabel: 'Grafik Interaktif:', charts: ['Tren PoU (grafik garis) — nasional dan per provinsi', 'Progresi Skor PPH (grafik batang) — dengan garis target skor 100', 'Proyeksi Neraca Pangan (grafik batang) — ketersediaan vs kebutuhan bulanan', 'Distribusi Donasi (grafik lingkaran) — berdasarkan jenis donasi', 'Tren Pangan Terselamatkan (grafik garis)'], footer: 'Dilengkapi peta interaktif choropleth (4 mode: PoU, CPPD, GPM, Harga), peringkat provinsi, dan tabel berpaginasi dengan filter yang tersinkron ke parameter URL.', kpi: [
      { label: 'Surplus Neraca Pangan', source: 'Proyeksi Neraca Pangan', desc: 'Neraca pangan nasional (ketersediaan − kebutuhan)' },
      { label: 'Skor PPH', source: 'Skor Pola Pangan Harapan', desc: 'Skor PPH terbaru dari skala 100' },
      { label: 'Gerakan Pangan Murah', source: 'Data GPM', desc: 'Total aktivitas dan provinsi yang terjangkau GPM' },
      { label: 'Cadangan Pangan', source: 'Cadangan Pangan Provinsi (CPPD)', desc: 'Total cadangan pangan provinsi dalam ton' },
      { label: 'Prevalensi Ketidakcukupan', source: 'Ketidakcukupan Nasional', desc: 'Persentase PoU terbaru' },
      { label: 'Penyaluran Donasi', source: 'Penyaluran Donasi Pangan', desc: 'Total donasi pangan yang telah disalurkan' },
    ]},
    kebijakan: { title: 'Government Insight Engine', desc: 'Layanan AI yang menganalisis 14 dataset pemerintah secara berkelanjutan, menghasilkan wawasan strategis dan rekomendasi kebijakan yang bisa dilacak sumbernya.', details: [
      'Menganalisis 14 dataset pemerintah (harga, ketahanan pangan, distribusi) setiap 3600 detik',
      'Deteksi perubahan berbasis signature MD5 dari 100 ID data terakhir — hanya memproses ulang saat data benar-benar berubah',
      'Learning loop melalui ChromaDB — setiap rekomendasi memanfaatkan konteks historis, data cuaca real-time, dan basis pengetahuan RAG dari ekosistem SUGI AI',
      'Menghasilkan wawasan strategis per-koleksi (14 dokumen, satu per dataset) dan satu rekomendasi kebijakan terkonsolidasi dari 6 koleksi tingkat nasional',
      'Refresh penuh bulanan, ditambah regenerasi otomatis setiap kali data sumber berubah',
    ]},
    chatbot: { title: 'Chatbot Insight Dashboard', desc: 'Mengubah percakapan nyata petani di chatbot Telegram SUGI AI menjadi intelijen terstruktur — melalui pipeline NLP lengkap yang disajikan dalam 15 tab analitik.', tabTitle: '15 Tab Analitik:', pipelineTitle: 'Pipeline Pemrosesan NLP', pipelineFooter: 'Pipeline ini dipicu sesuai kebutuhan lewat satu tombol "Proses NLP" — hasilnya tersimpan dan langsung mengisi seluruh 15 tab.', rows: [
      ['1', 'Aktivitas', 'Histogram, KPI, distribusi intent & sentimen'],
      ['2', 'Topik', 'TF-IDF, bigram/trigram, matriks ko-okurensi'],
      ['3', 'Komoditas', 'Tren & tabel komoditas per kategori'],
      ['4', 'Lokasi', 'Tren & tabel lokasi per kategori'],
      ['5', 'Intent/Sentimen', 'Distribusi, sentimen per kategori, linimasa emosi'],
      ['6', 'Entitas', 'Frekuensi & kategori per entitas'],
      ['7', 'Detail NER', 'Tabel detail entitas/lokasi/komoditas'],
      ['8', 'Knowledge Graph', 'Graf interaktif Cytoscape'],
      ['9', 'Rekomendasi', 'Kartu urgensi tinggi/sedang/rendah'],
      ['10', 'Masalah', 'Kartu keparahan kritis/berat/sedang/ringan'],
      ['11', 'Tren', 'Topik, komoditas, entitas dari waktu ke waktu'],
      ['12', 'Cakupan', '8 metrik dengan progress bar & radar chart'],
      ['13', 'Wawasan AI', 'Kartu dengan ikon tipe wawasan'],
      ['14', 'Pencarian', 'Semantik + filter entitas/intent/kategori'],
      ['15', 'Ekspor', 'PNG/PDF/CSV/JSON per tab'],
    ], pipeline: [
      'Ringkasan Sesi Percakapan',
      'Preprocessing (normalisasi teks)',
      'Penghapusan 350+ stopword Bahasa Indonesia',
      'Stemmer kustom Bahasa Indonesia (me-, mem-, men-, meng-, di-, ke-, ter-, per-, se-, ber- / -kan, -i, -an, -nya)',
      'Named Entity Recognition — 11 tipe: Komoditas, Lokasi, Tanggal, Nominal, Organisasi, Orang, Produk, Layanan, Masalah, Solusi, Kebijakan',
      'Klasifikasi Intent — 12 kategori: Keluhan, Pertanyaan, Laporan, Permintaan, Saran, Konfirmasi, Informasi, Apresiasi, Keluhan Teknis, Tindak Lanjut, Koordinasi, Lainnya',
      'Analisis Sentimen — label + 8 emosi: Senang, Sedih, Marah, Khawatir, Kecewa, Puas, Netral, Campuran',
      'Topic Modeling — TF-IDF + LDA + bigram/trigram + kemiripan kosinus antar sesi',
      'Ekstraksi Relasi — 8 pola (membahas, berlokasi_di, terkait_dengan, menyebutkan, menggunakan, terjadi_di, merekomendasikan, penyebab)',
      'Knowledge Graph',
      'Insight Engine — 10 kategori wawasan (Pola, Anomali, Rekomendasi, Peringatan, Tren, Peluang, Masalah, Korelasi, Perbandingan, Ringkasan)',
    ], screenshotAlt: 'Dashboard analitik NLP dari percakapan chatbot petani untuk pemerintah'},
    data: { title: 'Manajemen Data Induk', desc: 'Lapisan CRUD dan impor massal yang menjaga seluruh data ketahanan pangan nasional tetap mutakhir dan konsisten.', datasetLabel: 'Dataset yang Dikelola:', bulkTitle: 'Impor Massal (Bulk Upsert)', bulkDesc: 'Impor langsung dari sumber seperti SatuHarga Kemendag atau data BPS, dengan deteksi kunci unik otomatis per dataset agar re-impor aman dilakukan tanpa duplikasi data.', datasets: ['Harga Produsen (Nasional & Provinsi)', 'Harga Konsumen (Nasional & Provinsi)', 'Proyeksi Neraca Pangan', 'Ketidakcukupan Konsumsi Pangan (Nasional & Provinsi)', 'Konsumsi Pangan per Jenis', 'Penyaluran Donasi Pangan', 'Gerakan Pangan Murah', 'Skor Pola Pangan Harapan (PPH)', 'Pangan Terselamatkan', 'Cadangan Pangan Provinsi', 'Variasi Harga Produsen'], screenshotAlt: 'Tampilan data Badan Pangan Nasional yang terintegrasi dalam SUGI' },
    wawasan: { badge: 'Contoh Nyata', title: 'Wawasan Nyata yang Dihasilkan Sistem', subtitle: 'Setiap rekomendasi di bawah ini berbasis data riil dan dihasilkan secara otomatis oleh Government Insight Engine dari analisis 14 dataset pemerintah.', recs: [
      { source: 'Ketidakcukupan Nasional', recommendation: 'Tingkat ketidakcukupan konsumsi pangan turun 1.2% — pertahankan program bantuan pangan' },
      { source: 'Skor PPH', recommendation: 'Skor PPH masih di bawah target — rekomendasikan diversifikasi konsumsi pangan lokal' },
      { source: 'Proyeksi Neraca', recommendation: 'Surplus beras diproyeksikan pada Q2 2025 — optimalkan distribusi' },
      { source: 'Penyaluran Donasi', recommendation: 'Tingkatkan penyaluran donasi di provinsi dengan skor PPH rendah' },
      { source: 'Cadangan Pangan Provinsi', recommendation: 'Cadangan pangan provinsi di bawah ambang batas di 8 provinsi — perlunya redistribusi' },
    ]},
    workflow: { badge: 'Alur Data', title: 'Bagaimana Data Mengalir', steps: [
      { icon: '🏛️', title: 'Sumber Data', desc: 'BPS, Bapanas, Kemendag' },
      { icon: '📥', title: 'Impor Massal', desc: 'Bulk upsert dengan deteksi kunci unik otomatis' },
      { icon: '🗄️', title: 'Agregasi MongoDB', desc: '10-15 pipeline paralel via Promise.all' },
    ], step2: [
      { icon: '📊', title: 'Dashboard Pemerintah', desc: 'Visualisasi real-time KPI ketahanan pangan' },
      { icon: '🤖', title: 'Government Insight Engine', desc: 'Analisis 14 dataset tiap 3600 detik + learning loop ChromaDB' },
    ], flowLabels: ['💬 Percakapan Chatbot', '⚙️ Pipeline NLP', '📈 Chatbot Insight Dashboard'], consolidatedTitle: 'Rekomendasi Kebijakan Terkonsolidasi', consolidatedDesc: 'Kedua aliran data — dashboard dan chatbot insight — memberi masukan ke learning loop ChromaDB untuk menghasilkan rekomendasi yang kontekstual dan berbasis bukti.' },
    studi: { badge: 'Studi Kasus', title: 'Skenario Nyata Penggunaan', kasus: [
      { icon: '🏗️', title: 'Skenario Cadangan Pangan', actor: 'Badan Pangan Nasional', situation: 'CPPD suatu provinsi turun di bawah ambang batas. Sistem langsung menampilkan perubahan ini di peta interaktif dan peringkat CPPD Dashboard Pemerintah. Government Insight Engine mengangkatnya dalam siklus rekomendasi jam berikutnya, yang kemudian dikonfirmasi silang dengan sentimen dan masalah dari Chatbot Insight di wilayah yang sama — memvalidasi bahwa keluhan ketersediaan pangan memang meningkat di tingkat petani.', outcome: 'Tim Bapanas menerima peringatan dini dan rekomendasi redistribusi dalam waktu kurang dari 1 jam setelah perubahan data, bukan menunggu siklus laporan bulanan berikutnya.' },
      { icon: '💰', title: 'Skenario Keluhan Harga', actor: 'Kementerian Perdagangan', situation: 'Lonjakan keluhan harga komoditas cabai terdeteksi di tab Masalah Chatbot Insight — frekuensi mention naik 300% dalam 3 hari. Sistem secara otomatis mengorelasikan temuan ini dengan tren harga produsen dan konsumen di Dashboard Pemerintah, menunjukkan disparitas harga yang melebar di 5 provinsi.', outcome: 'Rekomendasi intervensi harga diterbitkan oleh Government Insight Engine, menjadi dasar rapat koordinasi yang diadakan dalam minggu yang sama — bukan menunggu survei harga periode berikutnya.' },
    ]},
    faq: { badge: 'FAQ', title: 'Pertanyaan Umum dari Pemerintah', items: [
      { q: 'Seberapa sering data dalam dashboard diperbarui?', a: 'Data dalam Dashboard Pemerintah diperbarui secara real-time sesuai dengan siklus impor data dari sumber masing-masing. Untuk dataset yang terintegrasi langsung (seperti SatuHarga Kemendag), pembaruan dapat terjadi harian. Pemerintah juga dapat melakukan impor massal kapan saja melalui fitur Manajemen Data Induk.' },
      { q: 'Bagaimana keamanan dan kontrol akses data di SUGI?', a: 'SUGI menerapkan autentikasi JWT + bcrypt dengan kontrol akses berbasis peran (RBAC). Setiap akun pemerintah hanya dapat mengakses data dan halaman yang relevan dengan kewenangannya. Semua data diproses secara on-premise, tidak ada data yang dikirim ke server eksternal.' },
      { q: 'Bagaimana proses integrasi dengan sumber data yang sudah ada?', a: 'SUGI mendukung impor massal (bulk upsert) langsung dari format yang sudah digunakan kementerian, seperti SatuHarga Kemendag atau data BPS. Sistem deteksi kunci unik otomatis per dataset memastikan re-impor aman dilakukan tanpa duplikasi data.' },
      { q: 'Apakah data bisa diekspor untuk keperluan pelaporan resmi?', a: 'Ya. Seluruh data dashboard dapat diekspor dalam format CSV, PDF, Excel, dan JSON, sehingga langsung bisa dipakai dalam alur pelaporan kementerian yang sudah berjalan tanpa perlu proses migrasi data tambahan.' },
      { q: 'Apakah SUGI bisa diakses dari perangkat mobile?', a: 'Dashboard Pemerintah dioptimalkan untuk akses desktop dengan tampilan penuh, namun tetap responsif di tablet. Untuk akses mobile lapangan, SUGI menyediakan PWA (Progressive Web App) yang memungkinkan akses offline dan notifikasi push.' },
      { q: 'Bagaimana dengan infrastruktur dan hosting?', a: 'SUGI dirancang untuk deployment on-premise di lingkungan pemerintah. Seluruh komponen — MongoDB, ChromaDB, server AI, dan dashboard — berjalan di infrastruktur yang Anda kontrol. Tidak ada data yang keluar dari lingkungan pemerintahan.' },
    ]},
    cta: { title: 'Siap Memulai Transformasi Data Ketahanan Pangan?', subtitle: 'Jadwalkan demo untuk melihat bagaimana SUGI dapat diintegrasikan dengan sumber data pemerintah yang sudah Anda miliki.', btn: 'Jadwalkan Demo', btn2: 'Pelajari Fitur' },
  } : {
    seo: { title: 'For Government', desc: 'AI-powered national food security dashboard for the Government of Indonesia. Integrated BPS, Bapanas, Kemendag data in one platform.' },
    hero: { badge: 'For Government', title: 'One Dashboard for National Food Security', subtitle: 'Government Dashboard, AI Policy Recommendations, Chatbot Insights from farmer conversations, and Master Data Management — all integrated in one on-premise ecosystem.', cta: 'Schedule a Demo', cta2: 'See Features' },
    masalah: { badge: 'Challenges', title: 'Six Structural Problems in Government Data', subtitle: 'Not just low productivity — but structural information asymmetry across the food policy chain.' },
    masalahItems: [
      { icon: '🗂️', title: 'Scattered and isolated government data', desc: 'Commodity prices, food balance projections, PoU, PPH scores, food reserves, and donation data each live in different sources and formats (BPS, Bapanas, Kemendag), with no unified dashboard.' },
      { icon: '📋', title: 'Slow manual reporting cycles', desc: 'Field conditions can change monthly or even weekly, yet policy visibility is tied to manually compiled periodic reports, causing decisions to lag behind real conditions.' },
      { icon: '🔇', title: 'No systematic channel to hear directly from farmers', desc: 'Field issues are only known anecdotally or too late, because there is no structured way to "listen" to what farmers are asking and reporting at scale.' },
      { icon: '✏️', title: 'Policy recommendations compiled manually', desc: 'Analysts must cross-reference data from various spreadsheets manually to produce a single recommendation — no continuous AI-based cross-dataset synthesis exists.' },
      { icon: '⚠️', title: 'Early warning gap', desc: 'A province\'s rising PoU or food reserves falling below safe thresholds may only be detected in the next reporting cycle — not when the event occurs.' },
      { icon: '🔍', title: 'Weak data accountability and audit', desc: 'Without consistent data versions and clear change history, tracing the basis of a policy decision is difficult.' },
    ],
    solusi: { badge: 'Architecture', title: 'Four Layers, One Data Foundation', subtitle: 'Dashboard numbers, AI recommendations, and signals from farmer conversations are always consistent because they share the same data foundation.' },
    manfaat: { badge: 'Benefits', title: 'Why Governments Use SUGI' },
    benefits: [
      { icon: '🎯', title: 'Single source of truth', desc: 'One dashboard replaces data scattered across various spreadsheets and ministry systems, covering 15 national food security dataset pages.' },
      { icon: '⏱️', title: 'Real-time, not periodic monitoring', desc: 'PoU, PPH, food balance, reserves, and donations are continuously updated and filterable by year/month/commodity/province.' },
      { icon: '🤖', title: 'Automated, traceable policy recommendations', desc: 'AI-generated from analysis of 14 datasets every hour, with automatic change detection — not time-consuming manual analyst synthesis.' },
      { icon: '📡', title: 'Direct signals from farmers, not assumptions', desc: 'Chatbot conversations are analyzed for sentiment, complaints, and topic trends, detecting field issues earlier than the next report cycle.' },
      { icon: '🏆', title: 'Province rankings and mapping', desc: 'Shows which regions need intervention most — lowest reserves, highest PoU, lowest GPM activity.' },
      { icon: '📤', title: 'Export-ready data', desc: 'CSV/PDF/Excel/JSON for direct use in existing ministry reporting workflows, no additional data migration needed.' },
      { icon: '🔐', title: 'Secure role-based access', desc: 'Only relevant data and features are displayed for each account, supporting accountability and audit.' },
      { icon: '📥', title: 'Import compatible with existing sources', desc: 'Supports bulk import directly from formats like SatuHarga Kemendag or BPS data, without manual one-by-one migration.' },
    ],
    fitur: { badge: 'Features', title: 'Four Main Feature Clusters', tabs: [
      { id: 'dashboard', label: 'Government Dashboard' },
      { id: 'kebijakan', label: 'Policy Recommendations' },
      { id: 'chatbot', label: 'Chatbot Insight' },
      { id: 'data', label: 'Master Data Management' },
    ]},
    dashboard: { title: 'Government Dashboard', desc: 'Real-time view of 15 CRUD pages of national food security datasets — from commodity prices and food balance to donation distribution — in one unified interface.', chartsLabel: 'Interactive Charts:', charts: ['PoU Trend (line chart) — national and per province', 'PPH Score Progression (bar chart) — with score 100 target line', 'Food Balance Projection (bar chart) — monthly availability vs needs', 'Donation Distribution (pie chart) — by donation type', 'Saved Food Trend (line chart)'], footer: 'Includes interactive choropleth map (4 modes: PoU, CPPD, GPM, Price), province rankings, and paginated data tables with filters synced to URL parameters.', kpi: [
      { label: 'Food Balance Surplus', source: 'Food Balance Projection', desc: 'National food balance (availability − needs)' },
      { label: 'PPH Score', source: 'Dietary Diversity Score', desc: 'Latest PPH score out of 100' },
      { label: 'Affordable Food Program', source: 'GPM Data', desc: 'Total activities and provinces reached' },
      { label: 'Food Reserves', source: 'Provincial Food Reserves', desc: 'Total provincial food reserves in tons' },
      { label: 'Undernourishment Prevalence', source: 'National Undernourishment', desc: 'Latest PoU percentage' },
      { label: 'Donation Distribution', source: 'Food Donation Distribution', desc: 'Total food donations distributed' },
    ]},
    kebijakan: { title: 'Government Insight Engine', desc: 'An AI service that continuously analyzes 14 government datasets, generating strategic insights and traceable policy recommendations.', details: [
      'Analyzes 14 government datasets (prices, food security, distribution) every 3600 seconds',
      'MD5 signature-based change detection from the last 100 data IDs — only reprocesses when data actually changes',
      'Learning loop through ChromaDB — each recommendation leverages historical context, real-time weather data, and the SUGI AI RAG knowledge base',
      'Generates per-collection strategic insights (14 documents, one per dataset) and one consolidated policy recommendation from 6 national-level collections',
      'Monthly full refresh, plus automatic regeneration whenever source data changes',
    ]},
    chatbot: { title: 'Chatbot Insight Dashboard', desc: 'Transforms real farmer conversations from the SUGI AI Telegram chatbot into structured intelligence — through a complete NLP pipeline presented in 15 analytics tabs.', tabTitle: '15 Analytics Tabs:', pipelineTitle: 'NLP Processing Pipeline', pipelineFooter: 'This pipeline is triggered on demand via a single "Process NLP" button — results are stored and immediately populate all 15 tabs.', rows: [
      ['1', 'Activity', 'Time histogram, KPIs, intent & sentiment distribution'],
      ['2', 'Topics', 'TF-IDF, bigrams/trigrams, co-occurrence matrix'],
      ['3', 'Commodities', 'Trends & tables per commodity category'],
      ['4', 'Locations', 'Trends & tables per location category'],
      ['5', 'Intent/Sentiment', 'Distribution, sentiment per category, emotion timeline'],
      ['6', 'Entities', 'Frequency & category per entity'],
      ['7', 'NER Details', 'Detailed entity/location/commodity table'],
      ['8', 'Knowledge Graph', 'Interactive Cytoscape graph'],
      ['9', 'Recommendations', 'Urgency cards (high/medium/low)'],
      ['10', 'Issues', 'Severity cards (critical/severe/moderate/mild)'],
      ['11', 'Trends', 'Topics, commodities, entities over time'],
      ['12', 'Coverage', '8 metrics with progress bar & radar chart'],
      ['13', 'AI Insights', 'Cards with insight type icons'],
      ['14', 'Search', 'Semantic search with entity/intent/category filters'],
      ['15', 'Export', 'PNG/PDF (client-side) and CSV/JSON (server-side) per tab'],
    ], pipeline: [
      'Session Summary',
      'Preprocessing (text normalization)',
      'Removal of 350+ Indonesian stopwords',
      'Custom Indonesian stemmer (prefix/suffix rules)',
      'Named Entity Recognition — 11 types',
      'Intent Classification — 12 categories',
      'Sentiment Analysis — label + 8 emotions',
      'Topic Modeling — TF-IDF + LDA + bigrams/trigrams + cosine similarity',
      'Relationship Extraction — 8 patterns',
      'Knowledge Graph',
      'Insight Engine — 10 insight categories',
    ], screenshotAlt: 'NLP analytics dashboard from farmer chatbot conversations for government'},
    data: { title: 'Master Data Management', desc: 'CRUD and bulk import layer that keeps all national food security data up-to-date and consistent.', datasetLabel: 'Managed Datasets:', bulkTitle: 'Bulk Import (Upsert)', bulkDesc: 'Direct import from sources like SatuHarga Kemendag or BPS data, with automatic unique key detection per dataset for safe re-import without data duplication.', datasets: ['Producer Prices (National & Provincial)', 'Consumer Prices (National & Provincial)', 'Food Balance Projections', 'Food Consumption Undernourishment (National & Provincial)', 'Food Consumption by Type', 'Food Donation Distribution', 'Affordable Food Program (GPM)', 'Dietary Diversity Score (PPH)', 'Saved Food', 'Provincial Food Reserves', 'Producer Price Variation'], screenshotAlt: 'Integrated National Food Agency data within SUGI' },
    wawasan: { badge: 'Real Examples', title: 'Real Insights Generated by the System', subtitle: 'Each recommendation below is based on real data and automatically generated by the Government Insight Engine from analysis of 14 government datasets.', recs: [
      { source: 'National Undernourishment', recommendation: 'Food consumption undernourishment rate dropped 1.2% — maintain food assistance programs' },
      { source: 'PPH Score', recommendation: 'PPH score still below target — recommend diversifying local food consumption' },
      { source: 'Balance Projection', recommendation: 'Rice surplus projected in Q2 2025 — optimize distribution' },
      { source: 'Donation Distribution', recommendation: 'Increase donation distribution in provinces with low PPH scores' },
      { source: 'Provincial Food Reserves', recommendation: 'Provincial food reserves below threshold in 8 provinces — redistribution needed' },
    ]},
    workflow: { badge: 'Data Flow', title: 'How Data Flows', steps: [
      { icon: '🏛️', title: 'Data Sources', desc: 'BPS, Bapanas, Kemendag' },
      { icon: '📥', title: 'Bulk Import', desc: 'Upsert with automatic unique key detection' },
      { icon: '🗄️', title: 'MongoDB Aggregation', desc: '10-15 parallel pipelines via Promise.all' },
    ], step2: [
      { icon: '📊', title: 'Government Dashboard', desc: 'Real-time food security KPI visualization' },
      { icon: '🤖', title: 'Government Insight Engine', desc: '14-dataset analysis every 3600s + ChromaDB learning loop' },
    ], flowLabels: ['💬 Chatbot Conversations', '⚙️ NLP Pipeline', '📈 Chatbot Insight Dashboard'], consolidatedTitle: 'Consolidated Policy Recommendation', consolidatedDesc: 'Both data streams — dashboard and chatbot insight — feed into the ChromaDB learning loop to generate contextual, evidence-based recommendations.' },
    studi: { badge: 'Case Studies', title: 'Real Usage Scenarios', kasus: [
      { icon: '🏗️', title: 'Food Reserve Scenario', actor: 'National Food Agency', situation: 'A province\'s CPPD falls below the safety threshold. The system immediately displays this change on the interactive map and CPPD ranking. The Government Insight Engine raises it in the next hour\'s recommendation cycle, then cross-validates with sentiment and issues from Chatbot Insight in the same region — confirming that food availability complaints are indeed rising at the farmer level.', outcome: 'The Bapanas team receives an early warning and redistribution recommendation in under 1 hour after the data change, instead of waiting for the next monthly reporting cycle.' },
      { icon: '💰', title: 'Price Complaint Scenario', actor: 'Ministry of Trade', situation: 'A surge in chili price complaints is detected in the Chatbot Insight Issues tab — mention frequency rises 300% in 3 days. The system automatically correlates this finding with producer and consumer price trends in the Government Dashboard, showing widening price disparity across 5 provinces.', outcome: 'A price intervention recommendation is issued by the Government Insight Engine, becoming the basis for a coordination meeting held that same week — not waiting for the next price survey period.' },
    ]},
    faq: { badge: 'FAQ', title: 'Frequently Asked Questions', items: [
      { q: 'How often is dashboard data updated?', a: 'Government Dashboard data is updated in real-time according to each source\'s import cycle. For directly integrated datasets (such as SatuHarga Kemendag), updates can occur daily. Governments can also perform bulk imports anytime through the Master Data Management feature.' },
      { q: 'How is data security and access control handled?', a: 'SUGI implements JWT + bcrypt authentication with role-based access control (RBAC). Each government account can only access data and pages relevant to their authority. All data is processed on-premise — no data is sent to external servers.' },
      { q: 'How does integration with existing data sources work?', a: 'SUGI supports bulk import (upsert) directly from formats already used by ministries, such as SatuHarga Kemendag or BPS data. Automatic unique key detection per dataset ensures safe re-import without data duplication.' },
      { q: 'Can data be exported for official reporting?', a: 'Yes. All dashboard data can be exported in CSV, PDF, Excel, and JSON formats, ready for use in existing ministry reporting workflows without additional data migration.' },
      { q: 'Can SUGI be accessed from mobile devices?', a: 'The Government Dashboard is optimized for desktop with full display, but remains responsive on tablets. For field mobile access, SUGI provides a PWA (Progressive Web App) enabling offline access and push notifications.' },
      { q: 'What about infrastructure and hosting?', a: 'SUGI is designed for on-premise deployment within government environments. All components — MongoDB, ChromaDB, AI server, and dashboard — run on your controlled infrastructure. No data leaves the government environment.' },
    ]},
    cta: { title: 'Ready to Transform Your Food Security Data?', subtitle: 'Schedule a demo to see how SUGI can be integrated with your existing government data sources.', btn: 'Schedule a Demo', btn2: 'Explore Features' },
  }

  const c = content

  return (
    <>
      <SEOHead title={c.seo.title} description={c.seo.desc} />

      {/* 1. Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-shade-600">
        <div className="absolute inset-0">
          <img src="/image/dashboard-preview/government-dashboard.png" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-shade-600/90 via-shade-600/70 to-shade-600" />
        </div>
        <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <Badge className="mb-4">{c.hero.badge}</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">{c.hero.title}</h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">{c.hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={goToContact}>{c.hero.cta}</Button>
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
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{c.masalah.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.masalahItems.map((p, i) => (
              <div key={i} className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                <span className="text-2xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-shade-600 mb-2 text-sm">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Solusi */}
      <Section id="solusi" dark>
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.solusi.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{c.solusi.title}</h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">{c.solusi.subtitle}</p>
          </div>
          <ArchitectureDiagram />
        </Container>
      </Section>

      {/* 4. Manfaat */}
      <Section id="manfaat">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.manfaat.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-shade-600">{c.manfaat.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.benefits.map((b, i) => (
              <BenefitCard key={i} icon={b.icon} title={b.title} desc={b.desc} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Fitur */}
      <Section id="fitur" dark>
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.fitur.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{c.fitur.title}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {c.fitur.tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === tab.id ? 'bg-primary text-shade-600 shadow-lg shadow-primary/20' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>{tab.label}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              {activeTab === 'dashboard' && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{c.dashboard.title}</h3>
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{c.dashboard.desc}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {c.dashboard.kpi.map((k, i) => (
                          <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-3">
                            <p className="text-xs text-gray-400 font-medium">{k.source}</p>
                            <p className="text-sm font-bold text-primary mt-1">{k.label}</p>
                            <p className="text-xs text-gray-500 mt-1">{k.desc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 space-y-2">
                        <p className="text-sm font-semibold text-primary">{c.dashboard.chartsLabel}</p>
                        {c.dashboard.charts.map((ch, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-400"><span className="text-primary mt-0.5">&#8226;</span><span>{ch}</span></div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-gray-500">{c.dashboard.footer}</p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src="/image/dashboard-preview/government-dashboard.png" alt="Government dashboard" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'kebijakan' && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{c.kebijakan.title}</h3>
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{c.kebijakan.desc}</p>
                      <ul className="space-y-3">
                        {c.kebijakan.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300"><span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">{i + 1}</span><span>{d}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src="/image/dashboard-preview/goverment-policy-recomendation.png" alt="Policy recommendation" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'chatbot' && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{c.chatbot.title}</h3>
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{c.chatbot.desc}</p>
                      <div className="rounded-xl overflow-hidden shadow-lg lg:hidden mb-6">
                        <img src="/image/dashboard-preview/government-chatbot-insight.png" alt={c.chatbot.screenshotAlt} className="w-full h-auto" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-64 overflow-y-auto">
                        <p className="text-sm font-semibold text-primary mb-2">{c.chatbot.tabTitle}</p>
                        <table className="w-full text-xs text-gray-300">
                          <tbody>
                            {c.chatbot.rows.map((row, i) => (
                              <tr key={i} className="border-b border-white/5"><td className="py-1 pr-2 text-primary font-mono w-6">{row[0]}</td><td className="py-1 pr-3 font-medium text-white">{row[1]}</td><td className="py-1 text-gray-400">{row[2]}</td></tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg hidden lg:block">
                      <img src="/image/dashboard-preview/government-chatbot-insight.png" alt={c.chatbot.screenshotAlt} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">{c.chatbot.pipelineTitle}</h4>
                    <div className="space-y-1">
                      {c.chatbot.pipeline.map((step, i) => {
                        const isLast = i === c.chatbot.pipeline.length - 1
                        return (
                          <div key={i} className="flex items-start gap-3">
                            <div className="flex flex-col items-center">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isLast ? 'bg-primary text-shade-600' : 'bg-primary/20 text-primary'}`}>{i + 1}</div>
                              {!isLast && <div className="w-px h-4 bg-primary/30" />}
                            </div>
                            <p className={`text-sm py-1 ${isLast ? 'text-primary font-semibold' : 'text-gray-300'}`}>{step}</p>
                          </div>
                        )
                      })}
                    </div>
                    <p className="mt-4 text-xs text-gray-500">{c.chatbot.pipelineFooter}</p>
                  </div>
                </div>
              )}
              {activeTab === 'data' && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{c.data.title}</h3>
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{c.data.desc}</p>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-sm font-semibold text-primary mb-3">{c.data.datasetLabel}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {c.data.datasets.map((d, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-300"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><span>{d}</span></div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 rounded-lg bg-primary/10 border border-primary/20 p-4">
                        <p className="text-sm text-primary font-semibold">{c.data.bulkTitle}</p>
                        <p className="text-xs text-gray-400 mt-1">{c.data.bulkDesc}</p>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src="/image/dashboard-preview/goverment-badan pangan nasional-data.png" alt={c.data.screenshotAlt} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      {/* 6. Contoh Wawasan Nyata */}
      <Section id="wawasan">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.wawasan.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-shade-600">{c.wawasan.title}</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{c.wawasan.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {c.wawasan.recs.map((r, i) => (
              <InsightExampleCard key={i} source={r.source} recommendation={r.recommendation} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Cara Kerja */}
      <Section id="cara-kerja" dark>
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.workflow.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{c.workflow.title}</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {c.workflow.steps.map((s, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.workflow.step2.map((s, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                {c.workflow.flowLabels.map((label, i) => (
                  <span key={i} className="flex items-center gap-1">
                    {label}
                    {i < c.workflow.flowLabels.length - 1 && <span className="text-primary ml-1">&rarr;</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
            <div className="rounded-xl bg-primary/10 border border-primary/20 p-5 text-center max-w-lg mx-auto">
              <h4 className="font-bold text-primary text-sm mb-1">{c.workflow.consolidatedTitle}</h4>
              <p className="text-xs text-gray-400">{c.workflow.consolidatedDesc}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Studi Kasus */}
      <Section id="studi-kasus">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.studi.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-shade-600">{c.studi.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {c.studi.kasus.map((k, i) => (
              <UseCaseCard key={i} icon={k.icon} title={k.title} actor={k.actor} situation={k.situation} outcome={k.outcome} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. FAQ */}
      <Section id="faq" dark>
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-3">{c.faq.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{c.faq.title}</h2>
          </div>
          <FAQAccordion items={c.faq.items} />
        </Container>
      </Section>

      {/* 10. CTA */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shade-600 mb-4">{c.cta.title}</h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">{c.cta.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={goToContact}>{c.cta.btn}</Button>
              <Button variant="secondary" onClick={() => scrollTo('fitur')}>{c.cta.btn2}</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}