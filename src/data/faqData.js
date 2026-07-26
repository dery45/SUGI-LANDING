export const faqData = [
  {
    id: 'petani',
    label: { id: 'Untuk Petani', en: 'For Farmers' },
    items: [
      {
        q: { id: 'Apakah SUGI AI benar-benar gratis?', en: 'Is SUGI AI really free?' },
        a: { id: 'Ya, SUGI AI chatbot Telegram gratis 100% untuk petani. Tidak ada biaya langganan, tidak ada biaya per pertanyaan. Kami menerapkan model cross-subsidy sehingga petani tetap bisa mengakses AI tanpa biaya.', en: 'Yes, the SUGI AI Telegram chatbot is 100% free for farmers. No subscription fees, no per-question charges. We apply a cross-subsidy model so farmers can always access AI at no cost.' },
      },
      {
        q: { id: 'Apa saja yang bisa ditanyakan ke SUGI AI?', en: 'What can I ask SUGI AI?' },
        a: { id: 'Segala hal tentang pertanian dan perkebunan: cara budidaya, identifikasi hama dan penyakit, rekomendasi pemupukan, prakiraan cuaca, harga pasar komoditas, waktu tanam yang tepat, dan banyak lagi. Sistem dilengkapi Scope Guard untuk memastikan hanya topik pertanian yang dijawab.', en: 'Anything about agriculture and plantations: cultivation methods, pest and disease identification, fertilization recommendations, weather forecasts, commodity market prices, optimal planting times, and much more. The system has a Scope Guard to ensure only agricultural topics are answered.' },
      },
      {
        q: { id: 'Bagaimana cara mulai menggunakan SUGI AI?', en: 'How do I start using SUGI AI?' },
        a: { id: 'Cukup buka Telegram, cari @sugi_demo_llmbot, dan kirim pesan. Tidak perlu install aplikasi baru, tidak perlu daftar. Langsung bisa bertanya.', en: 'Simply open Telegram, search for @sugi_demo_llmbot, and send a message. No new app to install, no registration needed. You can start asking right away.' },
      },
      {
        q: { id: 'Apakah SUGI AI bisa digunakan di daerah tanpa sinyal?', en: 'Can SUGI AI be used in areas without signal?' },
        a: { id: 'Untuk chatbot Telegram, diperlukan koneksi internet. Namun SUGI PWA (aplikasi pencatatan lapangan) dirancang offline-first — Anda dapat mencatat aktivitas budidaya tanpa sinyal, dan data akan sinkron otomatis saat online.', en: 'For the Telegram chatbot, an internet connection is needed. However, SUGI PWA (field recording app) is designed offline-first — you can record cultivation activities without signal, and data will auto-sync when online.' },
      },
    ],
  },
  {
    id: 'pemerintah',
    label: { id: 'Untuk Pemerintah', en: 'For Government' },
    items: [
      {
        q: { id: 'Bagaimana SUGI memastikan keamanan data pemerintah?', en: 'How does SUGI ensure government data security?' },
        a: { id: 'Seluruh infrastruktur SUGI berjalan on-premise via Ollama. Data tidak pernah dikirim ke cloud publik atau layanan AI pihak ketiga. Sistem kepenuhnya patuh terhadap UU PDP No. 27/2022 tentang Perlindungan Data Pribadi.', en: 'All SUGI infrastructure runs on-premise via Ollama. Data is never sent to public cloud or third-party AI services. The system is fully compliant with PDP Law No. 27/2022 on Personal Data Protection.' },
      },
      {
        q: { id: 'Berapa biaya berlangganan SUGIDash untuk pemerintah?', en: 'How much does SUGIDash cost for government?' },
        a: { id: 'Paket SaaS untuk pemerintah (B2G) dibanderol Rp1.750.000 per bulan. Termasuk akses penuh ke Government Dashboard, Government Insight Engine, 15+ dataset ketahanan pangan, dan dukungan teknis.', en: 'The B2G SaaS package is priced at IDR 1,750,000 per month. Includes full access to Government Dashboard, Government Insight Engine, 15+ food security datasets, and technical support.' },
      },
      {
        q: { id: 'Dataset apa saja yang sudah terintegrasi?', en: 'What datasets are already integrated?' },
        a: { id: '15+ dataset ketahanan pangan nasional dari Bapanas dan BPS, termasuk: harga produsen/konsumen, skor PPH, cadangan pangan provinsi, proyeksi neraca pangan, penyaluran donasi, gerakan pangan murah, dan banyak lagi. Data dapat diimpor massal via Excel/CSV.', en: '15+ national food security datasets from Bapanas and BPS, including: producer/consumer prices, PPH scores, provincial food reserves, food balance projections, donation distribution, affordable food programs, and more. Data can be bulk imported via Excel/CSV.' },
      },
    ],
  },
  {
    id: 'mitra',
    label: { id: 'Untuk Mitra & Investor', en: 'For Partners & Investors' },
    items: [
      {
        q: { id: 'Bagaimana model bisnis SUGI?', en: 'What is SUGI\'s business model?' },
        a: { id: 'SUGI menerapkan cross-subsidy model: chatbot AI gratis untuk petani sebagai kanal adopsi. Pendapatan berasal dari SaaS B2G (Rp1.750.000/bln), B2B (Rp1.000.000/bln), layanan Kelompok Tani (Rp400.000/bln), dan Data-as-a-Service untuk lembaga riset.', en: 'SUGI applies a cross-subsidy model: free AI chatbot for farmers as an adoption channel. Revenue comes from B2G SaaS (IDR 1,750,000/mo), B2B (IDR 1,000,000/mo), Farmer Group services (IDR 400,000/mo), and Data-as-a-Service for research institutions.' },
      },
      {
        q: { id: 'Apa competitive moat SUGI?', en: 'What is SUGI\'s competitive moat?' },
        a: { id: 'Data Flywheel adalah moat utama: semakin banyak petani menggunakan SUGI, semakin kaya data lapangan, semakin akurat AI. Integrasi 15+ dataset nasional dengan data mikro operasional lahan menghadirkan konteks hiperlokal. Arsitektur on-premise menjamin kepatuhan UU PDP — barrier tinggi untuk solusi cloud asing.', en: 'The Data Flywheel is the main moat: the more farmers use SUGI, the richer the field data, the more accurate the AI. Integration of 15+ national datasets with micro field data delivers hyperlocal context. On-premise architecture ensures PDP Law compliance — a high barrier for foreign cloud solutions.' },
      },
      {
        q: { id: 'Apa rencana pengembangan ke depan?', en: 'What are the future development plans?' },
        a: { id: 'Roadmap meliputi: migrasi ke VPS untuk layanan 24/7, integrasi penuh AI dengan SUGIDash dan PWA, pilot bersama PPHPM di Turi Sleman, kolaborasi API dengan Badan Pangan Nasional, ekspansi ke WhatsApp Business, dan aplikasi Android native.', en: 'The roadmap includes: VPS migration for 24/7 service, full AI integration with SUGIDash and PWA, pilot with PPHPM in Turi Sleman, API collaboration with National Food Agency, expansion to WhatsApp Business, and native Android app.' },
      },
    ],
  },
]
