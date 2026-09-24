export const productPages = {
  chatbotTelegram: {
    route: '/produk/chatbot-telegram',
    header: {
      icon: '🤖',
      title: { id: 'Chatbot Telegram SUGI', en: 'SUGI Telegram Chatbot' },
      subtitle: { id: 'Asisten AI pertanian yang selalu siap membantu — langsung dari Telegram Anda.', en: 'Your agricultural AI assistant — always ready, right from Telegram.' },
    },
    breadcrumbs: [{ label: { id: 'Chatbot Telegram', en: 'Telegram Chatbot' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'mengapa-ada', label: { id: 'Mengapa Ada', en: 'Why It Exists' } },
      { id: 'cara-kerja', label: { id: 'Cara Kerja', en: 'How It Works' } },
      { id: 'manfaat', label: { id: 'Manfaat Utama', en: 'Key Benefits' } },
      { id: 'tampilan', label: { id: 'Tampilan', en: 'Screenshots' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'SUGI AI adalah asisten cerdas berbasis Hybrid RAG yang dapat diakses melalui Telegram. Cukup kirim pesan ke @sugi_demo_llmbot, dan dapatkan jawaban instan tentang budidaya, harga pasar, cuaca, hama, dan penyakit tanaman — semuanya dalam Bahasa Indonesia.',
      en: 'SUGI AI is a Hybrid RAG-based intelligent assistant accessible via Telegram. Simply send a message to @sugi_demo_llmbot and get instant answers about cultivation, market prices, weather, pests, and plant diseases — all in Indonesian.',
    },
    mengapaAda: {
      id: 'Petani Indonesia sering kali tidak memiliki akses ke informasi yang mereka butuhkan tepat waktu. Data tersebar, referensi terbatas, dan tidak ada pendamping yang bisa menjawab pertanyaan spesifik tentang lahan mereka kapan saja. SUGI AI hadir di platform yang sudah digunakan sehari-hari — Telegram — tanpa perlu instalasi aplikasi baru.',
      en: 'Indonesian farmers often lack timely access to the information they need. Data is scattered, references are limited, and no companion can answer specific questions about their land anytime. SUGI AI lives on a platform farmers already use daily — Telegram — with no new app installation needed.',
    },
    caraKerja: [
      { title: { id: 'Kirim Pertanyaan', en: 'Send a Question' }, desc: { id: 'Petani mengirim pertanyaan dalam Bahasa Indonesia melalui Telegram — bisa lisan atau tulisan.', en: 'Farmers send questions in Indonesian via Telegram — voice or text.' }, meta: 'Telegram' },
      { title: { id: 'Scope Guard', en: 'Scope Guard' }, desc: { id: 'Sistem memvalidasi bahwa pertanyaan relevan dengan topik pertanian & perkebunan.', en: 'The system validates the question is relevant to agriculture & plantation topics.' }, meta: 'Keamanan' },
      { title: { id: 'Query Rewriting', en: 'Query Rewriting' }, desc: { id: 'Pertanyaan ambigu diperjelas dalam 3 lapisan — aturan bahasa, AI, atau query asli.', en: 'Ambiguous queries are clarified in 3 layers — language rules, AI, or original query.' }, meta: '3-Layer' },
      { title: { id: 'Hybrid RAG', en: 'Hybrid RAG' }, desc: { id: 'BM25 + Dense Vector + Memory + Cuaca + Tanaman digabung dengan bobot dinamis.', en: 'BM25 + Dense Vector + Memory + Weather + Plant data combined with dynamic weights.' }, meta: 'Ensemble' },
      { title: { id: 'Cross-Encoder + LLM', en: 'Cross-Encoder + LLM' }, desc: { id: 'Dokumen terbaik dipilih dan dikirim ke model sugi-v0.1L untuk menghasilkan jawaban.', en: 'Top documents are selected and sent to the sugi-v0.1L model to generate answers.' }, meta: 'sugi-v0.1L' },
      { title: { id: 'Eval Loop', en: 'Eval Loop' }, desc: { id: 'Setiap jawaban diperiksa faithfulness & relevance-nya sebelum dikirim ke pengguna.', en: 'Every answer is checked for faithfulness & relevance before being sent to the user.' }, meta: 'Validasi' },
      { title: { id: 'Terima Jawaban', en: 'Receive Answer' }, desc: { id: 'Jawaban kontekstual langsung muncul di Telegram — dengan sumber dan data terpercaya.', en: 'Contextual answers appear directly in Telegram — with trusted sources and data.' }, meta: 'Response' },
    ],
    manfaat: [
      { icon: '🆓', title: { id: 'Gratis 100%', en: '100% Free' }, desc: { id: 'Tanpa biaya langganan. Akses AI pertanian untuk seluruh petani Indonesia.', en: 'No subscription fees. AI access for all Indonesian farmers.' } },
      { icon: '📱', title: { id: 'Zero Instalasi', en: 'Zero Installation' }, desc: { id: 'Berjalan di Telegram — aplikasi yang sudah digunakan jutaan petani.', en: 'Runs on Telegram — an app millions already use.' } },
      { icon: '🔒', title: { id: 'Data Berdaulat', en: 'Sovereign Data' }, desc: { id: 'Semua proses on-premise via Ollama. Data tidak pernah ke cloud publik.', en: 'All processing is on-premise via Ollama. Data never goes to public cloud.' } },
      { icon: '⏱️', title: { id: 'Respons Instan', en: 'Instant Response' }, desc: { id: 'Rata-rata <5 detik per pertanyaan. Offline message catch-up tanpa kehilangan data.', en: 'Average <5 seconds per query. Offline message catch-up with zero data loss.' } },
    ],
    screenshots: [
      { src: '/image/telegram-chat-preview.png', alt: { id: 'Pratinjau Chat Telegram SUGI', en: 'SUGI Telegram Chat Preview' }, label: { id: 'Chat dengan SUGI AI', en: 'Chat with SUGI AI' } },
      { src: '/image/sugi-telegram-chatbot-logo.png', alt: { id: 'Logo Bot Telegram', en: 'Telegram Bot Logo' }, label: { id: 'Logo SUGI Bot', en: 'SUGI Bot Logo' } },
      { src: '/image/telegram-qr.png', alt: { id: 'QR Code Telegram Bot', en: 'Telegram Bot QR Code' }, label: { id: 'Scan untuk Mencoba', en: 'Scan to Try' } },
    ],
    studiKasus: {
      id: { title: 'Petani di Klaten', actor: 'Petani Jagung, Wonoboyo', situation: 'Bapak Sugeng, petani jagung di Wonoboyo, Klaten, menghadapi serangan hama yang tidak dikenali. Melalui Telegram, ia mengirim foto dan deskripsi ke SUGI AI. Sistem mengidentifikasi hama sebagai Spodoptera frugiperda dan memberikan rekomendasi pengendalian organik.', outcome: 'Serangan hama tertangani dalam 2 hari. Hasil panen tetap optimal dengan kerusakan minimal 5%.' },
      en: { title: 'Farmer in Klaten', actor: 'Corn Farmer, Wonoboyo', situation: 'Mr. Sugeng, a corn farmer in Wonoboyo, Klaten, faced an unrecognized pest attack. Through Telegram, he sent photos and descriptions to SUGI AI. The system identified the pest as Spodoptera frugiperda and provided organic control recommendations.', outcome: 'Pest attack handled within 2 days. Harvest remained optimal with minimal 5% damage.' },
    },
    related: [
      { to: '/produk/solusi-petani', label: { id: 'Solusi untuk Petani', en: 'Farmer Solution' }, desc: { id: 'Ekosistem lengkap untuk petani', en: 'Complete ecosystem for farmers' } },
      { to: '/produk/ai-copilot', label: { id: 'AI Copilot', en: 'AI Copilot' }, desc: { id: 'Asisten AI di seluruh dashboard', en: 'AI assistant across dashboards' } },
    ],
  },

  farmerSolution: {
    route: '/produk/solusi-petani',
    header: {
      icon: '🌾',
      title: { id: 'Solusi untuk Petani', en: 'Farmer Solution' },
      subtitle: { id: 'Dari bertanya hingga mencatat — SUGI mendampingi petani di setiap langkah budidaya.', en: 'From asking to recording — SUGI accompanies farmers at every cultivation step.' },
    },
    breadcrumbs: [{ label: { id: 'Solusi Petani', en: 'Farmer Solution' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'mengapa-ada', label: { id: 'Mengapa Ada', en: 'Why It Exists' } },
      { id: 'manfaat', label: { id: 'Manfaat Utama', en: 'Key Benefits' } },
      { id: 'tampilan', label: { id: 'Tampilan', en: 'Screenshots' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'Solusi Petani SUGI adalah paket terintegrasi yang menggabungkan SUGI AI (chatbot Telegram) dan SUGI PWA (aplikasi pencatatan lapangan). Petani dapat bertanya kapan saja melalui Telegram dan mencatat aktivitas budidaya secara offline melalui PWA.',
      en: 'The SUGI Farmer Solution is an integrated package combining SUGI AI (Telegram chatbot) and SUGI PWA (field recording app). Farmers can ask questions anytime via Telegram and record cultivation activities offline through the PWA.',
    },
    mengapaAda: {
      id: 'Petani membutuhkan pendamping yang kontekstual dan responsif — bukan sekadar aplikasi digital. Mereka juga bertani di area dengan sinyal terbatas dan tidak selalu punya waktu untuk mengetik panjang. Solusi ini dirancang untuk realitas tersebut: chat untuk informasi instan, PWA untuk catatan lapangan, semuanya sinkron otomatis.',
      en: 'Farmers need contextual and responsive companions — not just digital apps. They also farm in areas with limited signal and don\'t always have time for lengthy typing. This solution is designed for that reality: chat for instant info, PWA for field notes, all auto-synced.',
    },
    manfaat: [
      { icon: '💬', title: { id: 'Tanya Jawab Instan', en: 'Instant Q&A' }, desc: { id: 'Ribuan topik budidaya, harga, cuaca, dan hama dalam genggaman.', en: 'Thousands of cultivation, pricing, weather, and pest topics at your fingertips.' } },
      { icon: '📝', title: { id: 'Catatan Lapangan Offline', en: 'Offline Field Notes' }, desc: { id: 'Catat aktivitas budidaya tanpa khawatir soal sinyal. Sinkron otomatis saat online.', en: 'Record cultivation activities without worrying about signal. Auto-sync when online.' } },
      { icon: '📊', title: { id: 'Dashboard Personal', en: 'Personal Dashboard' }, desc: { id: 'Pantau KPI, riwayat tanam, dan hasil panen dalam satu tampilan.', en: 'Monitor KPIs, planting history, and harvest results in one view.' } },
      { icon: '🔄', title: { id: 'Ekosistem Terpadu', en: 'Integrated Ecosystem' }, desc: { id: 'Data yang sama mengalir ke SUGIDash untuk visibilitas pengelola dan pemerintah.', en: 'The same data flows to SUGIDash for manager and government visibility.' } },
    ],
    screenshots: [
      { src: '/image/dashboard-preview/farmer-pwa.png', alt: { id: 'SUGI PWA', en: 'SUGI PWA' }, label: { id: 'Aplikasi PWA Lapangan', en: 'Field PWA App' } },
      { src: '/image/telegram-chat-preview.png', alt: { id: 'Chatbot Telegram', en: 'Telegram Chatbot' }, label: { id: 'Chatbot SUGI AI', en: 'SUGI AI Chatbot' } },
    ],
    studiKasus: {
      id: { title: 'Kelompok Tani Wonoboyo', actor: 'Kelompok Tani Jagung, Klaten', situation: 'Kelompok Tani Wonoboyo menggunakan SUGI PWA untuk mencatat seluruh siklus tanam jagung — dari persiapan lahan hingga panen. Hasil catatan otomatis terintegrasi dengan dashboard pengelola.', outcome: 'Efisiensi pencatatan meningkat 70%. Data riwayat tanam tersedia real-time untuk evaluasi musim berikutnya.' },
      en: { title: 'Wonoboyo Farmer Group', actor: 'Corn Farmers Group, Klaten', situation: 'The Wonoboyo Farmers Group uses SUGI PWA to record the entire corn planting cycle — from land preparation to harvest. Records are automatically integrated with the management dashboard.', outcome: 'Recording efficiency increased 70%. Planting history data available in real-time for next season evaluation.' },
    },
    related: [
      { to: '/produk/chatbot-telegram', label: { id: 'Chatbot Telegram', en: 'Telegram Chatbot' }, desc: { id: 'Asisten AI di Telegram', en: 'AI assistant on Telegram' } },
      { to: '/produk/dashboard-petani', label: { id: 'Dashboard Petani', en: 'Farmer Dashboard' }, desc: { id: 'Analitik & KPI petani', en: 'Farmer analytics & KPIs' } },
    ],
  },

  governmentSolution: {
    route: '/produk/solusi-pemerintah',
    header: {
      icon: '🏛️',
      title: { id: 'Solusi untuk Pemerintah', en: 'Government Solution' },
      subtitle: { id: 'Dari data tersebar menjadi intelijen kebijakan — real-time, berbasis bukti, dan berdaulat.', en: 'From scattered data to policy intelligence — real-time, evidence-based, and sovereign.' },
    },
    breadcrumbs: [{ label: { id: 'Solusi Pemerintah', en: 'Government Solution' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'mengapa-ada', label: { id: 'Mengapa Ada', en: 'Why It Exists' } },
      { id: 'manfaat', label: { id: 'Manfaat Utama', en: 'Key Benefits' } },
      { id: 'tampilan', label: { id: 'Tampilan', en: 'Screenshots' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'Solusi Pemerintah SUGI adalah paket dashboard + insight engine yang dirancang khusus untuk Dinas Pertanian, Badan Pangan Nasional, dan pemangku kepentingan kebijakan pangan. Mengintegrasikan 15+ dataset nasional dengan analitik AI dan early warning system.',
      en: 'The SUGI Government Solution is a dashboard + insight engine package designed for Agriculture Offices, National Food Agency, and food policy stakeholders. Integrates 15+ national datasets with AI analytics and early warning systems.',
    },
    mengapaAda: {
      id: 'Pemerintah menghadapi fragmentasi data ketahanan pangan di berbagai silo institusional tanpa single source of truth. Kebijakan saat ini bereaksi berdasarkan laporan kuartalan — bukan sinyal lapangan real-time. SUGI menjembatani kesenjangan ini dengan mengonversi data mikro lapangan menjadi intelijen makro kebijakan.',
      en: 'The government faces food security data fragmentation across institutional silos with no single source of truth. Current policy reacts based on quarterly reports — not real-time field signals. SUGI bridges this gap by converting micro field data into macro policy intelligence.',
    },
    manfaat: [
      { icon: '📡', title: { id: 'Early Warning System', en: 'Early Warning System' }, desc: { id: 'Deteksi dini kerawanan pangan, fluktuasi harga, dan anomali cuaca.', en: 'Early detection of food insecurity, price fluctuations, and weather anomalies.' } },
      { icon: '📊', title: { id: '15+ Dataset Terintegrasi', en: '15+ Integrated Datasets' }, desc: { id: 'Harga, konsumsi, produksi, cadangan pangan, PPH, dan banyak lagi dalam satu dashboard.', en: 'Prices, consumption, production, food reserves, PPH scores, and more in one dashboard.' } },
      { icon: '🤖', title: { id: 'Policy Recommendation AI', en: 'AI Policy Recommendations' }, desc: { id: 'Rekomendasi kebijakan berbasis analitik AI dari 14 dataset pemerintah.', en: 'AI-driven policy recommendations from 14 government datasets.' } },
      { icon: '🔒', title: { id: 'Kedaulatan Data', en: 'Data Sovereignty' }, desc: { id: 'Seluruh infrastruktur on-premise — data pemerintah tetap aman dan patuh UU PDP.', en: 'Full on-premise infrastructure — government data stays secure and PDP Law compliant.' } },
    ],
    screenshots: [
      { src: '/image/dashboard-preview/government-dashboard.png', alt: { id: 'Dashboard Pemerintah', en: 'Government Dashboard' }, label: { id: 'Dashboard Ketahanan Pangan', en: 'Food Security Dashboard' } },
      { src: '/image/dashboard-preview/goverment-policy-recomendation.png', alt: { id: 'Rekomendasi Kebijakan', en: 'Policy Recommendation' }, label: { id: 'Rekomendasi Berbasis AI', en: 'AI-Based Recommendations' } },
    ],
    studiKasus: {
      id: { title: 'Pilot PPHPM Turi', actor: 'Dinas Pertanian Sleman', situation: 'Dinas Pertanian Sleman menggunakan SUGI Government Dashboard untuk memonitor harga komoditas, skor PPH, dan stok pangan di wilayah Turi secara real-time selama pilot bersama PPHPM.', outcome: 'Waktu respons kebijakan berkurang dari mingguan menjadi harian. Intervensi GPM (Gerakan Pangan Murah) dapat dieksekusi 3× lebih cepat.' },
      en: { title: 'PPHPM Turi Pilot', actor: 'Sleman Agriculture Office', situation: 'The Sleman Agriculture Office uses the SUGI Government Dashboard to monitor commodity prices, PPH scores, and food stocks in Turi area in real-time during the PPHPM pilot.', outcome: 'Policy response time reduced from weekly to daily. GPM (Affordable Food Movement) interventions executed 3× faster.' },
    },
    related: [
      { to: '/produk/dashboard-pemerintah', label: { id: 'Dashboard Pemerintah', en: 'Government Dashboard' }, desc: { id: 'Dashboard analitik untuk pemerintah', en: 'Analytics dashboard for government' } },
      { to: '/produk/rekomendasi-kebijakan', label: { id: 'Rekomendasi Kebijakan', en: 'Policy Recommendations' }, desc: { id: 'Rekomendasi berbasis AI', en: 'AI-based recommendations' } },
    ],
  },

  farmerDashboard: {
    route: '/produk/dashboard-petani',
    header: {
      icon: '📊',
      title: { id: 'Dashboard Petani', en: 'Farmer Dashboard' },
      subtitle: { id: '10 AI-powered market insights, analitik harga, dan peta interaktif — untuk keputusan yang lebih cerdas.', en: '10 AI-powered market insights, price analytics, and interactive maps — for smarter decisions.' },
    },
    breadcrumbs: [{ label: { id: 'Dashboard Petani', en: 'Farmer Dashboard' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'mengapa-ada', label: { id: 'Mengapa Ada', en: 'Why It Exists' } },
      { id: 'manfaat', label: { id: 'Manfaat Utama', en: 'Key Benefits' } },
      { id: 'tampilan', label: { id: 'Tampilan', en: 'Screenshots' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'Dashboard Petani adalah antarmuka visual yang menyajikan 10 AI-powered Market Insights, analitik harga komoditas, peta provinsi interaktif, dan neraca pasokan pangan — semuanya dalam satu tampilan premium.',
      en: 'The Farmer Dashboard is a visual interface presenting 10 AI-powered Market Insights, commodity price analytics, interactive province maps, and food supply-demand balance — all in one premium view.',
    },
    mengapaAda: {
      id: 'Petani dan pemilik lahan sering kali tidak memiliki visibilitas terhadap harga pasar yang adil. Mereka tidak bisa membandingkan hasil atau margin mereka antar wilayah. Dashboard ini menghadirkan transparansi harga, analitik margin, dan peluang pasar dalam satu layar.',
      en: 'Farmers and landowners often lack visibility into fair market prices. They cannot compare yields or margins across regions. This dashboard brings price transparency, margin analytics, and market opportunities to one screen.',
    },
    manfaat: [
      { icon: '🧠', title: { id: '10 AI Market Insights', en: '10 AI Market Insights' }, desc: { id: 'Skor PPH, Komoditas Terbaik, Margin Positif, Surplus Pangan, Rekomendasi Tanam & Jual — semuanya auto-generate.', en: 'PPH Score, Best Commodity, Positive Margin, Food Surplus, Planting & Selling Recommendations — all auto-generated.' } },
      { icon: '🗺️', title: { id: 'Peta Interaktif', en: 'Interactive Map' }, desc: { id: 'Heatmap harga, margin, dan peluang pasar per provinsi dengan drill-down.', en: 'Price, margin, and market opportunity heatmaps per province with drill-down.' } },
      { icon: '📈', title: { id: 'Tren Harga Komoditas', en: 'Price Trend Analytics' }, desc: { id: 'Perbandingan harga produsen & konsumen, peringkat komoditas, dan analisis margin.', en: 'Producer & consumer price comparison, commodity rankings, and margin analysis.' } },
      { icon: '📱', title: { id: 'Fully Responsive', en: 'Fully Responsive' }, desc: { id: 'Akses dari desktop, tablet, atau HP — dengan navigasi bottom untuk layar kecil.', en: 'Access from desktop, tablet, or phone — with bottom navigation for small screens.' } },
    ],
    screenshots: [
      { src: '/image/dashboard-preview/farmer-dashboard.png', alt: { id: 'Dashboard Petani', en: 'Farmer Dashboard' }, label: { id: 'Tampilan Utama', en: 'Main View' } },
      { src: '/image/dashboard-preview/farmer-kpi-dashboard.png', alt: { id: 'KPI Dashboard', en: 'KPI Dashboard' }, label: { id: 'KPI & Metrik', en: 'KPIs & Metrics' } },
      { src: '/image/dashboard-preview/farmer-market-Intelligence.png', alt: { id: 'Market Intelligence', en: 'Market Intelligence' }, label: { id: 'Intelijen Pasar', en: 'Market Intelligence' } },
    ],
    studiKasus: {
      id: { title: 'Manajemen Perkebunan', actor: 'Pengelola Perkebunan, Jawa Timur', situation: 'Pengelola perkebunan menggunakan dashboard untuk membandingkan margin komoditas di 5 provinsi. Dashboard menunjukkan bahwa cabai rawit memiliki margin tertinggi di Jawa Timur dengan selisih harga produsen-konsumen 40%.', outcome: 'Keputusan alokasi lahan untuk cabai rawit meningkat 25% musim berikutnya. ROI per siklus naik 18%.' },
      en: { title: 'Estate Management', actor: 'Estate Manager, East Java', situation: 'An estate manager used the dashboard to compare commodity margins across 5 provinces. The dashboard showed cayenne pepper had the highest margin in East Java with a 40% producer-consumer price gap.', outcome: 'Land allocation for cayenne pepper increased 25% the following season. ROI per cycle rose 18%.' },
    },
    related: [
      { to: '/produk/market-intelligence', label: { id: 'Market Intelligence', en: 'Market Intelligence' }, desc: { id: '10 insight pasar untuk petani', en: '10 market insights for farmers' } },
      { to: '/produk/solusi-petani', label: { id: 'Solusi Petani', en: 'Farmer Solution' }, desc: { id: 'Ekosistem lengkap petani', en: 'Complete farmer ecosystem' } },
    ],
  },

  governmentDashboard: {
    route: '/produk/dashboard-pemerintah',
    header: {
      icon: '🏛️',
      title: { id: 'Dashboard Pemerintah', en: 'Government Dashboard' },
      subtitle: { id: 'Dashboard makro ketahanan pangan nasional — PoU, PPH, CPPD, dan ranking provinsi dalam satu layar.', en: 'National food security macro dashboard — PoU, PPH, CPPD, and provincial rankings in one view.' },
    },
    breadcrumbs: [{ label: { id: 'Dashboard Pemerintah', en: 'Government Dashboard' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'mengapa-ada', label: { id: 'Mengapa Ada', en: 'Why It Exists' } },
      { id: 'fitur', label: { id: 'Fitur Utama', en: 'Key Features' } },
      { id: 'tampilan', label: { id: 'Tampilan', en: 'Screenshots' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'Dashboard Pemerintah adalah antarmuka analitik makro yang dirancang untuk Dinas Pertanian, Bapanas, dan pembuat kebijakan. Menampilkan KPI ketahanan pangan, peta interaktif, peringkat provinsi, dan proyeksi neraca pangan — semuanya real-time.',
      en: 'The Government Dashboard is a macro analytics interface designed for Agriculture Offices, National Food Agency, and policymakers. Displays food security KPIs, interactive maps, provincial rankings, and food balance projections — all real-time.',
    },
    mengapaAda: {
      id: 'Pemerintah membutuhkan satu sumber kebenaran untuk data ketahanan pangan yang saat ini tersebar di berbagai institusi. Dashboard ini menyatukan 15+ dataset dari Bapanas dan BPS ke dalam satu platform dengan visualisasi interaktif dan analitik AI.',
      en: 'The government needs a single source of truth for food security data currently scattered across institutions. This dashboard unifies 15+ datasets from Bapanas and BPS into one platform with interactive visualizations and AI analytics.',
    },
    manfaat: [
      { icon: '📊', title: { id: 'KPI Ketahanan Pangan', en: 'Food Security KPIs' }, desc: { id: 'PoU, Skor PPH, cadangan pangan daerah, dan aktivitas GPM dalam satu tampilan.', en: 'PoU, PPH Score, regional food reserves, and GPM activities in one view.' } },
      { icon: '🗺️', title: { id: 'Peta & Ranking Provinsi', en: 'Province Maps & Rankings' }, desc: { id: 'Peta interaktif PoU, harga, cadangan pangan, dan peringkat provinsi untuk CPPD, PoU, GPM.', en: 'Interactive PoU, price, reserve maps, and provincial rankings for CPPD, PoU, GPM.' } },
      { icon: '📈', title: { id: 'Proyeksi & Intervensi', en: 'Projection & Intervention' }, desc: { id: 'Proyeksi neraca beras, tracking donasi, monitoring penyelamatan pangan (food rescue).', en: 'Rice balance projections, donation tracking, food rescue monitoring.' } },
      { icon: '🤖', title: { id: 'Insight Engine Terintegrasi', en: 'Integrated Insight Engine' }, desc: { id: '14 government datasets dianalisis AI setiap jam — menghasilkan rekomendasi kebijakan.', en: '14 government datasets analyzed by AI every hour — generating policy recommendations.' } },
    ],
    screenshots: [
      { src: '/image/dashboard-preview/government-dashboard.png', alt: { id: 'Dashboard Pemerintah', en: 'Government Dashboard' }, label: { id: 'Tampilan Utama', en: 'Main View' } },
      { src: '/image/dashboard-preview/goverment-badan pangan nasional-data.png', alt: { id: 'Data Bapanas', en: 'Bapanas Data' }, label: { id: 'Data Bapanas Terintegrasi', en: 'Integrated Bapanas Data' } },
    ],
    studiKasus: {
      id: { title: 'Analisis PoU Nasional', actor: 'Badan Pangan Nasional', situation: 'Bapanas menggunakan dashboard untuk memonitor Prevalensi Ketidakcukupan Konsumsi Pangan (PoU) di 34 provinsi secara real-time. Dashboard otomatis menandai provinsi dengan skor di atas threshold.', outcome: 'Intervensi pangan dapat difokuskan ke 5 provinsi prioritas dalam waktu 48 jam — dibandingkan 2 minggu dengan metode konvensional.' },
      en: { title: 'National PoU Analysis', actor: 'National Food Agency', situation: 'Bapanas uses the dashboard to monitor the Prevalence of Undernourishment (PoU) across 34 provinces in real-time. The dashboard automatically flags provinces with scores above threshold.', outcome: 'Food interventions can be focused on 5 priority provinces within 48 hours — compared to 2 weeks with conventional methods.' },
    },
    related: [
      { to: '/produk/solusi-pemerintah', label: { id: 'Solusi Pemerintah', en: 'Government Solution' }, desc: { id: 'Paket lengkap untuk pemerintah', en: 'Complete government package' } },
      { to: '/produk/rekomendasi-kebijakan', label: { id: 'Rekomendasi Kebijakan', en: 'Policy Recommendations' }, desc: { id: 'Rekomendasi berbasis AI', en: 'AI-based recommendations' } },
    ],
  },

  marketIntelligence: {
    route: '/produk/market-intelligence',
    header: {
      icon: '📈',
      title: { id: 'Market Intelligence', en: 'Market Intelligence' },
      subtitle: { id: '10 AI-powered insight pasar untuk keputusan tanam dan jual yang lebih cerdas.', en: '10 AI-powered market insights for smarter planting and selling decisions.' },
    },
    breadcrumbs: [{ label: { id: 'Market Intelligence', en: 'Market Intelligence' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'insight', label: { id: '10 Insight Pasar', en: '10 Market Insights' } },
      { id: 'tampilan', label: { id: 'Tampilan', en: 'Screenshots' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'Market Intelligence adalah mesin insight otomatis yang menghasilkan 10 analisis pasar setiap hari — mulai dari Skor PPH Nasional, Komoditas Terbaik, Margin Positif, hingga Rekomendasi Tanam dan Jual. Setiap insight ≤150 karakter, data-first, dan langsung dapat ditindaklanjuti.',
      en: 'Market Intelligence is an automated insight engine that generates 10 market analyses daily — from National PPH Score, Best Commodity, Positive Margin, to Planting and Selling Recommendations. Each insight is ≤150 characters, data-first, and immediately actionable.',
    },
    mengapaAda: {
      id: 'Informasi pasar yang akurat dan tepat waktu adalah kebutuhan paling mendesak petani. Namun data tersebar dan sulit diinterpretasi. Insight engine SUGI mengolah data harga, produksi, dan konsumsi menjadi rekomendasi spesifik yang bisa langsung digunakan petani untuk keputusan tanam dan jual.',
      en: 'Accurate and timely market information is farmers\' most urgent need. Yet data is scattered and hard to interpret. SUGI\'s insight engine processes price, production, and consumption data into specific recommendations farmers can use immediately for planting and selling decisions.',
    },
    insightList: [
      { icon: '🥗', title: { id: 'Skor PPH Nasional', en: 'National PPH Score' }, desc: { id: 'Skor Pola Pangan Harapan nasional — indikator kualitas konsumsi pangan Indonesia.', en: 'National Desirable Dietary Pattern score — Indonesia\'s food consumption quality indicator.' } },
      { icon: '🏆', title: { id: 'Komoditas Terbaik', en: 'Best Commodity' }, desc: { id: 'Komoditas dengan performa pasar tertinggi berdasarkan harga dan permintaan.', en: 'Highest-performing commodity based on price and demand.' } },
      { icon: '💹', title: { id: 'Margin Positif', en: 'Positive Margin' }, desc: { id: 'Komoditas dengan selisih harga produsen-konsumen paling menguntungkan.', en: 'Commodities with the most favorable producer-consumer price gap.' } },
      { icon: '📦', title: { id: 'Surplus Pangan', en: 'Food Surplus' }, desc: { id: 'Wilayah dengan kelebihan produksi pangan — potensi distribusi antar daerah.', en: 'Regions with food production surplus — inter-regional distribution potential.' } },
      { icon: '🏪', title: { id: 'Cadangan Pangan Daerah', en: 'Regional Food Reserves' }, desc: { id: 'Status cadangan pangan per provinsi — indikator ketahanan pangan daerah.', en: 'Provincial food reserve status — regional food security indicator.' } },
      { icon: '📊', title: { id: 'Surplus per Komoditas', en: 'Surplus per Commodity' }, desc: { id: 'Peringkat surplus komoditas pangan per wilayah.', en: 'Commodity surplus rankings per region.' } },
      { icon: '📅', title: { id: 'Peluang Bulanan', en: 'Monthly Opportunity' }, desc: { id: 'Peluang pasar komoditas berdasarkan siklus harga bulanan.', en: 'Commodity market opportunities based on monthly price cycles.' } },
      { icon: '🗺️', title: { id: 'Provinsi Terbaik', en: 'Best Province' }, desc: { id: 'Provinsi dengan kondisi pasar paling menguntungkan untuk komoditas tertentu.', en: 'Provinces with the most favorable market conditions for specific commodities.' } },
      { icon: '🌱', title: { id: 'Rekomendasi Tanam', en: 'Planting Recommendation' }, desc: { id: 'Komoditas yang direkomendasikan untuk ditanam berdasarkan analitik pasar.', en: 'Recommended commodities to plant based on market analytics.' } },
      { icon: '💰', title: { id: 'Rekomendasi Jual', en: 'Selling Recommendation' }, desc: { id: 'Waktu dan tempat terbaik untuk menjual komoditas berdasarkan tren harga.', en: 'Best time and place to sell commodities based on price trends.' } },
    ],
    screenshots: [
      { src: '/image/dashboard-preview/farmer-market-Intelligence.png', alt: { id: 'Market Intelligence Dashboard', en: 'Market Intelligence Dashboard' }, label: { id: '10 Insight Pasar', en: '10 Market Insights' } },
      { src: '/image/dashboard-preview/farmer-kpi-dashboard.png', alt: { id: 'KPI Dashboard', en: 'KPI Dashboard' }, label: { id: 'Analitik KPI', en: 'KPI Analytics' } },
    ],
    studiKasus: {
      id: { title: 'Keputusan Tanam Petani', actor: 'Petani Hortikultura, Sleman', situation: 'Petani anggota PPHPM menggunakan rekomendasi tanam dari Market Intelligence untuk menentukan komoditas musim ini. Insight menunjukkan bawang merah memiliki proyeksi margin tertinggi untuk 3 bulan ke depan.', outcome: 'Petani beralih menanam bawang merah di 60% lahannya. Hasil panen terjual dengan margin 35% di atas biaya produksi.' },
      en: { title: 'Farmer Planting Decision', actor: 'Horticulture Farmer, Sleman', situation: 'PPHPM member farmers used Market Intelligence planting recommendations to determine this season\'s commodity. Insights showed shallots had the highest margin projection for the next 3 months.', outcome: 'Farmers switched to planting shallots on 60% of their land. Harvest sold with a 35% margin above production costs.' },
    },
    related: [
      { to: '/produk/dashboard-petani', label: { id: 'Dashboard Petani', en: 'Farmer Dashboard' }, desc: { id: 'Dashboard dengan insight pasar', en: 'Dashboard with market insights' } },
      { to: '/produk/daily-insight', label: { id: 'Daily Insight', en: 'Daily Insight' }, desc: { id: 'Insight harian otomatis', en: 'Automated daily insights' } },
    ],
  },

  policyRecommendation: {
    route: '/produk/rekomendasi-kebijakan',
    header: {
      icon: '📋',
      title: { id: 'Rekomendasi Kebijakan', en: 'Policy Recommendations' },
      subtitle: { id: 'Rekomendasi strategis berbasis AI dari analitik 14 dataset pemerintah — diperbarui setiap jam.', en: 'AI-driven strategic recommendations from 14 government dataset analytics — updated hourly.' },
    },
    breadcrumbs: [{ label: { id: 'Rekomendasi Kebijakan', en: 'Policy Recommendations' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'cara-kerja', label: { id: 'Cara Kerja', en: 'How It Works' } },
      { id: 'manfaat', label: { id: 'Manfaat', en: 'Benefits' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'Government Insight Engine menganalisis 14 dataset pemerintah secara otomatis setiap 3600 detik, mendeteksi perubahan data via signature MD5, dan menghasilkan rekomendasi kebijakan yang strategis dan kontekstual. Setiap rekomendasi diperkaya dengan konteks RAG, data cuaca, dan memori historis dari ChromaDB.',
      en: 'The Government Insight Engine automatically analyzes 14 government datasets every 3600 seconds, detects data changes via MD5 signatures, and generates strategic, contextual policy recommendations. Each recommendation is enriched with RAG context, weather data, and historical memory from ChromaDB.',
    },
    caraKerja: [
      { title: { id: 'Analisis 14 Dataset', en: 'Analyze 14 Datasets' }, desc: { id: 'Harga, konsumsi, produksi, cadangan, donasi, GPM, PPH, dan lainnya — diperiksa setiap jam.', en: 'Prices, consumption, production, reserves, donations, GPM, PPH, and more — checked hourly.' }, meta: '3600s interval' },
      { title: { id: 'Deteksi Perubahan', en: 'Change Detection' }, desc: { id: 'MD5 signature dari 100 ID terakhir — hanya regenerasi saat data benar-benar berubah.', en: 'MD5 signature of last 100 IDs — only regenerates when data actually changes.' }, meta: 'MD5 Hash' },
      { title: { id: 'Analisis AI + Konteks', en: 'AI Analysis + Context' }, desc: { id: '14 insight koleksi + 1 konsolidasi kebijakan, diperkaya RAG, cuaca, dan memori.', en: '14 collection insights + 1 consolidated policy, enriched with RAG, weather, and memory.' }, meta: 'AI-Powered' },
      { title: { id: 'Belajar dari Memori', en: 'Learn from Memory' }, desc: { id: 'ChromaDB learning loop — insight sebelumnya menjadi konteks untuk insight berikutnya.', en: 'ChromaDB learning loop — past insights become context for future insights.' }, meta: 'ChromaDB' },
      { title: { id: 'Refresh Bulanan', en: 'Monthly Refresh' }, desc: { id: 'Full refresh setiap 30 hari untuk memastikan kualitas dan kesegaran analisis.', en: 'Full refresh every 30 days to ensure analysis quality and freshness.' }, meta: '30-day cycle' },
    ],
    manfaat: [
      { icon: '🎯', title: { id: 'Berbasis Data Aktual', en: 'Based on Actual Data' }, desc: { id: 'Rekomendasi lahir dari data real-time, bukan asumsi atau laporan usang.', en: 'Recommendations born from real-time data, not assumptions or outdated reports.' } },
      { icon: '⚡', title: { id: 'Respons Lebih Cepat', en: 'Faster Response' }, desc: { id: 'Dari deteksi perubahan hingga rekomendasi dalam hitungan jam, bukan minggu.', en: 'From change detection to recommendation within hours, not weeks.' } },
      { icon: '🧠', title: { id: 'Pembelajaran Berkelanjutan', en: 'Continuous Learning' }, desc: { id: 'Sistem belajar dari insight sebelumnya melalui ChromaDB learning loop.', en: 'The system learns from past insights through ChromaDB learning loop.' } },
      { icon: '🔍', title: { id: 'Sepenuhnya Transparan', en: 'Fully Transparent' }, desc: { id: 'Setiap insight menyertakan metadata sourceCollection, generatedAt, dan version.', en: 'Every insight includes sourceCollection, generatedAt, and version metadata.' } },
    ],
    studiKasus: {
      id: { title: 'Insight untuk Bapanas', actor: 'Badan Pangan Nasional', situation: 'Government Insight Engine mendeteksi penurunan cadangan pangan di 3 provinsi secara simultan. Sistem menghasilkan rekomendasi untuk mengaktivasi GPM dan redistribusi stok dari provinsi surplus.', outcome: 'Bapanas mengaktivasi GPM di 3 provinsi dalam 24 jam. Distribusi stok dari Jawa Timur dan Jawa Tengah mencegah lonjakan harga lebih lanjut.' },
      en: { title: 'Insight for Bapanas', actor: 'National Food Agency', situation: 'The Government Insight Engine detected a simultaneous decrease in food reserves in 3 provinces. The system generated recommendations to activate GPM and redistribute stock from surplus provinces.', outcome: 'Bapanas activated GPM in 3 provinces within 24 hours. Stock distribution from East Java and Central Java prevented further price spikes.' },
    },
    related: [
      { to: '/produk/dashboard-pemerintah', label: { id: 'Dashboard Pemerintah', en: 'Government Dashboard' }, desc: { id: 'Makro ketahanan pangan', en: 'Food security macro view' } },
      { to: '/produk/daily-insight', label: { id: 'Daily Insight', en: 'Daily Insight' }, desc: { id: 'Insight harian otomatis', en: 'Automated daily insights' } },
    ],
  },

  chatbotInsight: {
    route: '/produk/chatbot-insight',
    header: {
      icon: '🔍',
      title: { id: 'Chatbot Insight Dashboard', en: 'Chatbot Insight Dashboard' },
      subtitle: { id: 'Analitik NLU dari percakapan chatbot — sentimen, intent, knowledge graph, dan 15 tab analitik.', en: 'NLU analytics from chatbot conversations — sentiment, intent, knowledge graph, and 15 analytics tabs.' },
    },
    breadcrumbs: [{ label: { id: 'Chatbot Insight', en: 'Chatbot Insight' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'fitur', label: { id: '15 Tab Analitik', en: '15 Analytics Tabs' } },
      { id: 'manfaat', label: { id: 'Manfaat', en: 'Benefits' } },
      { id: 'tampilan', label: { id: 'Tampilan', en: 'Screenshots' } },
    ],
    apaItu: {
      id: 'Chatbot Insight Dashboard adalah platform analitik NLU (Natural Language Understanding) yang mengolah seluruh percakapan SUGI AI menjadi wawasan terstruktur. Menampilkan 12 KPI, analisis sentimen & emosi, intent classification, entity recognition, knowledge graph interaktif, dan masih banyak lagi — dalam 15 tab analitik.',
      en: 'The Chatbot Insight Dashboard is an NLU (Natural Language Understanding) analytics platform that processes all SUGI AI conversations into structured insights. Displays 12 KPIs, sentiment & emotion analysis, intent classification, entity recognition, interactive knowledge graph, and much more — across 15 analytics tabs.',
    },
    fiturList: [
      { icon: '📊', title: { id: 'Ringkasan KPI', en: 'KPI Summary' }, desc: { id: '12 metrik: total sesi, ringkasan, karakter, topik unik, komoditas, lokasi, dan lainnya.', en: '12 metrics: total sessions, summaries, characters, unique topics, commodities, locations, and more.' } },
      { icon: '📈', title: { id: 'Analisis Aktivitas', en: 'Activity Analysis' }, desc: { id: 'Sesi per hari/jam, heatmap, timeline, distribusi panjang ringkasan.', en: 'Sessions per day/hour, heatmap, timeline, summary length distribution.' } },
      { icon: '🏷️', title: { id: 'Topic Modeling', en: 'Topic Modeling' }, desc: { id: 'LDA topic modeling, TF-IDF ranking, bigrams, trigrams, co-occurrence matrix.', en: 'LDA topic modeling, TF-IDF ranking, bigrams, trigrams, co-occurrence matrix.' } },
      { icon: '📍', title: { id: 'Entity Recognition', en: 'Entity Recognition' }, desc: { id: '11 tipe entitas: 70+ komoditas, 38 provinsi, cuaca, penyakit, pupuk, organisasi.', en: '11 entity types: 70+ commodities, 38 provinces, weather, diseases, fertilizers, organizations.' } },
      { icon: '🎭', title: { id: 'Sentimen & Emosi', en: 'Sentiment & Emotion' }, desc: { id: 'Positif/Netral/Negatif + 8 emosi (Joy, Trust, Fear, Anger, dll) + word cloud.', en: 'Positive/Neutral/Negative + 8 emotions (Joy, Trust, Fear, Anger, etc.) + word cloud.' } },
      { icon: '🔗', title: { id: 'Knowledge Graph', en: 'Knowledge Graph' }, desc: { id: 'Graph interaktif dengan zoom, search, filter, highlighted nodes — Cytoscape-based.', en: 'Interactive graph with zoom, search, filter, highlighted nodes — Cytoscape-based.' } },
      { icon: '💡', title: { id: 'Rekomendasi & Masalah', en: 'Recommendations & Problems' }, desc: { id: 'Rule-based mining: 7 kategori masalah, 9 kategori rekomendasi, severity scoring.', en: 'Rule-based mining: 7 problem categories, 9 recommendation categories, severity scoring.' } },
      { icon: '📉', title: { id: 'Tren & Cakupan', en: 'Trends & Coverage' }, desc: { id: 'Analisis tren topik/komoditas/entitas + 8 metrik coverage dengan radar chart.', en: 'Topic/commodity/entity trend analysis + 8 coverage metrics with radar chart.' } },
    ],
    manfaat: [
      { icon: '🧠', title: { id: 'Pahami Pengguna Anda', en: 'Understand Your Users' }, desc: { id: 'Ketahui topik apa yang paling sering ditanyakan, sentimen petani, dan masalah utama mereka.', en: 'Know what topics are most asked, farmer sentiment, and their main problems.' } },
      { icon: '📋', title: { id: 'Laporan Siap Pakai', en: 'Ready-to-Use Reports' }, desc: { id: 'Export PNG, PDF, CSV, JSON langsung dari dashboard.', en: 'Export PNG, PDF, CSV, JSON directly from the dashboard.' } },
      { icon: '🔍', title: { id: 'Semantic Search', en: 'Semantic Search' }, desc: { id: 'Cari percakapan berdasarkan makna, bukan kata kunci — dengan filter entitas & intent.', en: 'Search conversations by meaning, not keywords — with entity & intent filters.' } },
      { icon: '🔄', title: { id: 'Update Otomatis', en: 'Auto Update' }, desc: { id: 'NLP pipeline berjalan on-demand, data selalu segar.', en: 'NLP pipeline runs on-demand, data is always fresh.' } },
    ],
    screenshots: [
      { src: '/image/dashboard-preview/government-chatbot-insight.png', alt: { id: 'Chatbot Insight Dashboard', en: 'Chatbot Insight Dashboard' }, label: { id: 'Dashboard NLU Analitik', en: 'NLU Analytics Dashboard' } },
      { src: '/image/dashboard-preview/goverment-badan pangan nasional-data.png', alt: { id: 'Data Bapanas', en: 'Bapanas Data' }, label: { id: 'Integrasi Data Nasional', en: 'National Data Integration' } },
    ],
    related: [
      { to: '/produk/chatbot-telegram', label: { id: 'Chatbot Telegram', en: 'Telegram Chatbot' }, desc: { id: 'Sumber data percakapan', en: 'Conversation data source' } },
      { to: '/produk/dashboard-pemerintah', label: { id: 'Dashboard Pemerintah', en: 'Government Dashboard' }, desc: { id: 'Dashboard makro pemerintah', en: 'Government macro dashboard' } },
    ],
  },

  dailyInsight: {
    route: '/produk/daily-insight',
    header: {
      icon: '🌅',
      title: { id: 'Daily Insight Engine', en: 'Daily Insight Engine' },
      subtitle: { id: 'Wawasan otomatis setiap 12 jam — harga, cuaca, rekomendasi tanam, dan tren kebijakan.', en: 'Automated insights every 12 hours — prices, weather, planting recommendations, and policy trends.' },
    },
    breadcrumbs: [{ label: { id: 'Daily Insight', en: 'Daily Insight' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'cara-kerja', label: { id: 'Cara Kerja', en: 'How It Works' } },
      { id: 'jenis', label: { id: 'Jenis Insight', en: 'Insight Types' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'Daily Insight Engine adalah layanan cron yang berjalan setiap 12 jam, mengagregasi data dari seluruh ekosistem SUGI menjadi 5 jenis insight terstruktur yang dikirim ke MongoDB untuk dikonsumsi dashboard pemerintah dan manajemen.',
      en: 'The Daily Insight Engine is a cron service running every 12 hours, aggregating data from the entire SUGI ecosystem into 5 structured insight types sent to MongoDB for government and management dashboards.',
    },
    caraKerja: [
      { title: { id: 'Agregasi Data', en: 'Data Aggregation' }, desc: { id: 'Mengumpulkan data harga, cuaca, percakapan, dan dokumen dari seluruh ekosistem.', en: 'Collects price, weather, conversation, and document data from the entire ecosystem.' }, meta: '12 jam' },
      { title: { id: 'Analisis LLM Map-Reduce', en: 'LLM Map-Reduce Analysis' }, desc: { id: 'Menerapkan LLM Map-Reduce pada setiap kategori untuk menghasilkan insight terstruktur.', en: 'Applies LLM Map-Reduce on each category to generate structured insights.' }, meta: 'AI-Powered' },
      { title: { id: 'Simpan ke MongoDB', en: 'Save to MongoDB' }, desc: { id: 'Insight dikirim ke 5 koleksi MongoDB sugi_insights untuk dashboard.', en: 'Insights are sent to 5 MongoDB sugi_insights collections for dashboards.' }, meta: 'MongoDB' },
      { title: { id: 'Konsumsi Dashboard', en: 'Dashboard Consumption' }, desc: { id: 'Dashboard pemerintah dan manajemen menampilkan insight terbaru secara real-time.', en: 'Government and management dashboards display latest insights in real-time.' }, meta: 'Visualisasi' },
    ],
    jenis: [
      { icon: '💲', title: { id: 'Price Insights', en: 'Price Insights' }, desc: { id: 'Analisis harga per provinsi — tren, perbandingan, dan anomali dari 14+ dataset harga.', en: 'Province-level price analysis — trends, comparisons, and anomalies from 14+ price datasets.' } },
      { icon: '🌤️', title: { id: 'Weather Insights', en: 'Weather Insights' }, desc: { id: 'Analisis cuaca per lokasi — peringatan dini kekeringan, banjir, heat stress.', en: 'Location-level weather analysis — early warnings for drought, flood, heat stress.' } },
      { icon: '🌱', title: { id: 'Planting Suggestions', en: 'Planting Suggestions' }, desc: { id: 'Rekomendasi tanam per komoditas × musim dari data harga dan cuaca historis.', en: 'Planting recommendations per commodity × season from historical price and weather data.' } },
      { icon: '📋', title: { id: 'Policy Trends', en: 'Policy Trends' }, desc: { id: '3-5 insight kebijakan teratas dari dokumen regulasi dan data ketahanan pangan.', en: 'Top 3-5 policy insights from regulation documents and food security data.' } },
      { icon: '💬', title: { id: 'Session Summaries', en: 'Session Summaries' }, desc: { id: 'Ringkasan sesi percakapan dari conversation memory — tren pertanyaan petani.', en: 'Conversation session summaries from conversation memory — farmer question trends.' } },
    ],
    studiKasus: {
      id: { title: 'Monitoring Harga Nasional', actor: 'Analis Pemerintah', situation: 'Daily Insight Engine mendeteksi kenaikan harga cabai di 5 provinsi dalam satu siklus 12 jam. Insight harga otomatis dikirim ke MongoDB dan muncul di dashboard pemerintah keesokan paginya.', outcome: 'Pemerintah daerah dapat segera mengaktivasi operasi pasar sebelum harga melonjak lebih jauh. Intervensi 24 jam lebih cepat dari siklus pelaporan konvensional.' },
      en: { title: 'National Price Monitoring', actor: 'Government Analyst', situation: 'The Daily Insight Engine detected chili price increases in 5 provinces within one 12-hour cycle. Price insights were automatically sent to MongoDB and appeared on the government dashboard the next morning.', outcome: 'Local governments could activate market operations before prices surged further. Intervention 24 hours faster than conventional reporting cycles.' },
    },
    related: [
      { to: '/produk/market-intelligence', label: { id: 'Market Intelligence', en: 'Market Intelligence' }, desc: { id: '10 insight pasar untuk petani', en: '10 market insights for farmers' } },
      { to: '/produk/rekomendasi-kebijakan', label: { id: 'Rekomendasi Kebijakan', en: 'Policy Recommendations' }, desc: { id: 'Rekomendasi strategis AI', en: 'AI strategic recommendations' } },
    ],
  },

  aiCopilot: {
    route: '/produk/ai-copilot',
    header: {
      icon: '🤖',
      title: { id: 'AI Copilot', en: 'AI Copilot' },
      subtitle: { id: 'Asisten AI yang mendampingi pengguna di seluruh ekosistem SUGI — dari chatbot hingga dashboard.', en: 'An AI assistant accompanying users across the entire SUGI ecosystem — from chatbot to dashboard.' },
    },
    breadcrumbs: [{ label: { id: 'AI Copilot', en: 'AI Copilot' } }],
    sections: [
      { id: 'apa-itu', label: { id: 'Apa Itu', en: 'What It Is' } },
      { id: 'mengapa-ada', label: { id: 'Mengapa Ada', en: 'Why It Exists' } },
      { id: 'kemampuan', label: { id: 'Kemampuan', en: 'Capabilities' } },
      { id: 'studi-kasus', label: { id: 'Studi Kasus', en: 'Use Case' } },
    ],
    apaItu: {
      id: 'AI Copilot adalah lapisan asisten cerdas yang melengkapi seluruh ekosistem SUGI. Tidak terbatas pada chatbot Telegram — AI Copilot hadir di SUGIDash sebagai panduan analitik, membantu pengguna memahami data, mengeksekusi rekomendasi, dan mengoptimalkan keputusan.',
      en: 'AI Copilot is an intelligent assistant layer across the entire SUGI ecosystem. Not limited to the Telegram chatbot — AI Copilot lives in SUGIDash as an analytics guide, helping users understand data, execute recommendations, and optimize decisions.',
    },
    mengapaAda: {
      id: 'Data dan insight hanya bernilai jika dapat ditindaklanjuti. AI Copilot menjembatani kesenjangan antara "apa yang ditunjukkan data" dan "apa yang harus dilakukan" — memberikan panduan langkah demi langkah, konteks, dan rekomendasi di setiap titik keputusan dalam ekosistem.',
      en: 'Data and insights are only valuable if actionable. AI Copilot bridges the gap between "what the data shows" and "what to do about it" — providing step-by-step guidance, context, and recommendations at every decision point in the ecosystem.',
    },
    kemampuan: [
      { icon: '💬', title: { id: 'Natural Language Query', en: 'Natural Language Query' }, desc: { id: 'Tanya data dashboard dalam bahasa sehari-hari — "berapa rata-rata harga cabai bulan ini?"', en: 'Query dashboard data in everyday language — "what\'s the average chili price this month?"' } },
      { icon: '📊', title: { id: 'Insight Naratif', en: 'Narrative Insights' }, desc: { id: 'Data kompleks dijelaskan dalam narasi singkat yang mudah dipahami.', en: 'Complex data explained in short, easy-to-understand narratives.' } },
      { icon: '⚡', title: { id: 'Rekomendasi Tindakan', en: 'Action Recommendations' }, desc: { id: 'Langkah konkret berdasarkan data — apa yang harus dilakukan, kapan, dan di mana.', en: 'Concrete steps based on data — what to do, when, and where.' } },
      { icon: '🔄', title: { id: 'Konteks Lintas Produk', en: 'Cross-Product Context' }, desc: { id: 'Memahami konteks dari chatbot, PWA, dan dashboard — tidak ada data terisolasi.', en: 'Understands context from chatbot, PWA, and dashboard — no isolated data.' } },
    ],
    studiKasus: {
      id: { title: 'Panduan Analisis Data', actor: 'Pengelola Agribisnis', situation: 'Seorang pengelola agribisnis melihat tren penurunan margin di dashboard. AI Copilot otomatis menganalisis penyebab (kenaikan harga pupuk) dan memberikan rekomendasi: beralih ke pemasok alternatif atau menyesuaikan harga jual.', outcome: 'Pengelola mengambil tindakan dalam 1 hari — mengganti pemasok pupuk dan menghemat biaya input 15%.' },
      en: { title: 'Data Analysis Guide', actor: 'Agribusiness Manager', situation: 'An agribusiness manager saw a declining margin trend on the dashboard. AI Copilot automatically analyzed the cause (fertilizer price increase) and provided recommendations: switch to alternative suppliers or adjust selling prices.', outcome: 'The manager took action within 1 day — switched fertilizer suppliers and saved 15% on input costs.' },
    },
    related: [
      { to: '/produk/chatbot-telegram', label: { id: 'Chatbot Telegram', en: 'Telegram Chatbot' }, desc: { id: 'Asisten AI di Telegram', en: 'AI assistant on Telegram' } },
      { to: '/produk/arsitektur-ai', label: { id: 'Arsitektur AI', en: 'AI Architecture' }, desc: { id: 'Teknologi di balik SUGI', en: 'Technology behind SUGI' } },
    ],
  },

  aiArchitecture: {
    route: '/produk/arsitektur-ai',
    header: {
      icon: '⚙️',
      title: { id: 'Ringkasan Arsitektur AI', en: 'AI Architecture Summary' },
      subtitle: { id: 'Bagaimana Hybrid RAG bekerja — dari Scope Guard hingga Eval Loop, semuanya on-premise.', en: 'How Hybrid RAG works — from Scope Guard to Eval Loop, all on-premise.' },
    },
    breadcrumbs: [{ label: { id: 'Arsitektur AI', en: 'AI Architecture' } }],
    sections: [
      { id: 'pipeline', label: { id: 'Pipeline', en: 'Pipeline' } },
      { id: 'komponen', label: { id: 'Komponen Utama', en: 'Key Components' } },
      { id: 'keamanan', label: { id: 'Keamanan', en: 'Security' } },
      { id: 'skalabilitas', label: { id: 'Skalabilitas', en: 'Scalability' } },
    ],
    apaItu: {
      id: 'Arsitektur AI SUGI dibangun di atas Hybrid Retrieval-Augmented Generation (RAG) — menggabungkan pencarian kata kunci (BM25), kesamaan makna (Dense Vector), memori percakapan, data cuaca, dan data tanaman dalam satu pipeline terpadu yang berjalan sepenuhnya on-premise.',
      en: 'SUGI\'s AI architecture is built on Hybrid Retrieval-Augmented Generation (RAG) — combining keyword search (BM25), semantic similarity (Dense Vector), conversation memory, weather data, and plant data in one unified pipeline running entirely on-premise.',
    },
    pipeline: [
      { title: { id: 'Scope Guard', en: 'Scope Guard' }, desc: { id: 'Memvalidasi domain pertanyaan — hanya pertanian & perkebunan yang diproses. 8 allowed topic sections, pola sapaan, dan daftar keyword terblokir.', en: 'Validates query domain — only agriculture & plantation topics processed. 8 allowed topic sections, greeting patterns, and blocked keyword list.' }, meta: 'Keamanan Input' },
      { title: { id: 'Query Rewriting (3 Layer)', en: 'Query Rewriting (3 Layer)' }, desc: { id: 'Layer 1 (0ms): aturan berbasis bahasa untuk query referensial. Layer 2 (~800ms): Qwen2.5 fallback untuk query ambigu. Layer 3: query asli.', en: 'Layer 1 (0ms): language-based rules for referential queries. Layer 2 (~800ms): Qwen2.5 fallback for ambiguous queries. Layer 3: original query.' }, meta: '3-Layer' },
      { title: { id: 'Hybrid Ensemble Retrieval', en: 'Hybrid Ensemble Retrieval' }, desc: { id: 'BM25 (30%) + Dense Vector (30%) + Memory (10%) + Plant (15%) + Weather (15%). Bobot dinamis berdasarkan tipe query.', en: 'BM25 (30%) + Dense Vector (30%) + Memory (10%) + Plant (15%) + Weather (15%). Dynamic weights based on query type.' }, meta: 'Ensemble' },
      { title: { id: 'Cross-Encoder Reranker', en: 'Cross-Encoder Reranker' }, desc: { id: 'Model ms-marco-MiniLM-L-6-v2 memeringkat ulang dokumen — top 5 terbaik dikirim ke LLM.', en: 'ms-marco-MiniLM-L-6-v2 reranks documents — top 5 sent to LLM.' }, meta: 'Top-5' },
      { title: { id: 'LLM SUGI Llama 3.6 (Ollama)', en: 'LLM SUGI Llama 3.6 (Ollama)' }, desc: { id: 'Model SUGI Llama 3.6 Hybrid RAG untuk Bahasa Indonesia pertanian. Berjalan lokal, data aman, biaya tetap.', en: 'SUGI Llama 3.6 Hybrid RAG for Indonesian agricultural language. Runs locally, data secure, fixed cost.' }, meta: 'On-Premise' },
      { title: { id: 'Eval Loop', en: 'Eval Loop' }, desc: { id: 'Faithfulness (40% lexical overlap) + Relevance (50% keyword overlap). Qwen2.5 fallback untuk kasus inkonklusif. Flagged → eval_flags.jsonl.', en: 'Faithfulness (40% lexical overlap) + Relevance (50% keyword overlap). Qwen2.5 fallback for inconclusive cases. Flagged → eval_flags.jsonl.' }, meta: 'Validasi' },
      { title: { id: 'Persistence', en: 'Persistence' }, desc: { id: 'Log queries.jsonl, flag eval_flags.jsonl, session memory tiap 5 putaran ke ChromaDB.', en: 'Log queries.jsonl, flag eval_flags.jsonl, session memory every 5 turns to ChromaDB.' }, meta: 'Audit' },
    ],
    komponenList: [
      { title: { id: 'ChromaDB (6 Collections)', en: 'ChromaDB (6 Collections)' }, desc: { id: 'main_dataset, weather_data, plant_data, conversation_memory, government_memory, insights_memory — semua vector search.', en: 'main_dataset, weather_data, plant_data, conversation_memory, government_memory, insights_memory — all vector search.' } },
      { title: { id: 'MongoDB (7 Collections)', en: 'MongoDB (7 Collections)' }, desc: { id: 'price_insights, weather_insights, planting_suggestions, general_insights, session_summaries, governmentinsights, farmerinsights.', en: 'price_insights, weather_insights, planting_suggestions, general_insights, session_summaries, governmentinsights, farmerinsights.' } },
      { title: { id: 'External APIs + Cache', en: 'External APIs + Cache' }, desc: { id: 'Open-Meteo (cuaca, gratis), Perenual (tanaman, 10.000+ data), SQLite cache, ChromaDB plant cache 30 hari.', en: 'Open-Meteo (weather, free), Perenual (plants, 10,000+ data), SQLite cache, 30-day ChromaDB plant cache.' } },
      { title: { id: '4 Watchdog Services', en: '4 Watchdog Services' }, desc: { id: 'CSV/XLSX watcher, PDF watcher, Weather service (300s), Daily Insight cron (12 jam) — semua auto-restart.', en: 'CSV/XLSX watcher, PDF watcher, Weather service (300s), Daily Insight cron (12h) — all auto-restart.' } },
    ],
    keamanan: {
      id: [
        'Semua model AI berjalan on-premise via Ollama — tidak ada data dikirim ke cloud publik.',
        'Kepatuhan penuh terhadap UU PDP No. 27/2022 tentang Perlindungan Data Pribadi.',
        'Role-Based Access Control (RBAC) dengan 4 level: superadmin, government, farmer_owner, farmer.',
        'Autentikasi JWT + bcrypt hashing untuk seluruh akses dashboard.',
        'Rate limiting 3 detik per pengguna Telegram untuk mencegah abuse.',
        'Fast failure: API eksternal gagal dalam <1s → fallback ke knowledge lokal.',
      ],
      en: [
        'All AI models run on-premise via Ollama — no data sent to public cloud.',
        'Full compliance with PDP Law No. 27/2022 on Personal Data Protection.',
        'Role-Based Access Control (RBAC) with 4 levels: superadmin, government, farmer_owner, farmer.',
        'JWT authentication + bcrypt hashing for all dashboard access.',
        '3-second per-user rate limiting on Telegram to prevent abuse.',
        'Fast failure: external APIs fail in <1s → fallback to local knowledge.',
      ],
    },
    skalabilitas: {
      id: 'Arsitektur on-premise SUGI dirancang untuk scaling horizontal: HTTP ChromaDB mendukung multi-instance, vLLM cluster siap diaktifkan saat concurrent users meningkat, dan biaya inferensi tidak bertambah linear karena model berjalan di infrastruktur sendiri.',
      en: 'SUGI\'s on-premise architecture is designed for horizontal scaling: HTTP ChromaDB supports multi-instance, vLLM cluster ready when concurrent users increase, and inference costs don\'t scale linearly as models run on own infrastructure.',
    },
    related: [
      { to: '/produk/ai-copilot', label: { id: 'AI Copilot', en: 'AI Copilot' }, desc: { id: 'Asisten AI di dashboard', en: 'AI assistant in dashboards' } },
      { to: '/teknologi-ai', label: { id: 'Teknologi AI', en: 'AI Technology' }, desc: { id: 'Penjelasan teknologi AI', en: 'AI technology overview' } },
    ],
  },
}

export const productIndex = [
  { route: '/produk/chatbot-telegram', icon: '🤖', title: { id: 'Chatbot Telegram', en: 'Telegram Chatbot' }, desc: { id: 'Asisten AI pertanian di Telegram — gratis, instan, dan kontekstual.', en: 'Agricultural AI assistant on Telegram — free, instant, and contextual.' } },
  { route: '/produk/solusi-petani', icon: '🌾', title: { id: 'Solusi untuk Petani', en: 'Farmer Solution' }, desc: { id: 'Ekosistem lengkap chatbot + PWA untuk petani Indonesia.', en: 'Complete chatbot + PWA ecosystem for Indonesian farmers.' } },
  { route: '/produk/solusi-pemerintah', icon: '🏛️', title: { id: 'Solusi Pemerintah', en: 'Government Solution' }, desc: { id: 'Dashboard + insight engine untuk ketahanan pangan nasional.', en: 'Dashboard + insight engine for national food security.' } },
  { route: '/produk/dashboard-petani', icon: '📊', title: { id: 'Dashboard Petani', en: 'Farmer Dashboard' }, desc: { id: '10 AI insight, analitik harga, dan peta interaktif.', en: '10 AI insights, price analytics, and interactive maps.' } },
  { route: '/produk/dashboard-pemerintah', icon: '🏛️', title: { id: 'Dashboard Pemerintah', en: 'Government Dashboard' }, desc: { id: 'Makro ketahanan pangan: PoU, PPH, CPPD, ranking provinsi.', en: 'Food security macro: PoU, PPH, CPPD, provincial rankings.' } },
  { route: '/produk/market-intelligence', icon: '📈', title: { id: 'Market Intelligence', en: 'Market Intelligence' }, desc: { id: '10 AI-powered insight pasar untuk keputusan tanam & jual.', en: '10 AI market insights for planting & selling decisions.' } },
  { route: '/produk/rekomendasi-kebijakan', icon: '📋', title: { id: 'Rekomendasi Kebijakan', en: 'Policy Recommendations' }, desc: { id: 'Rekomendasi strategis AI dari 14 dataset pemerintah.', en: 'AI strategic recommendations from 14 government datasets.' } },
  { route: '/produk/chatbot-insight', icon: '🔍', title: { id: 'Chatbot Insight', en: 'Chatbot Insight' }, desc: { id: 'Analitik NLU: sentimen, intent, knowledge graph, 15 tab.', en: 'NLU analytics: sentiment, intent, knowledge graph, 15 tabs.' } },
  { route: '/produk/daily-insight', icon: '🌅', title: { id: 'Daily Insight', en: 'Daily Insight' }, desc: { id: 'Wawasan otomatis setiap 12 jam — harga, cuaca, tanam.', en: 'Automated insights every 12 hours — prices, weather, planting.' } },
  { route: '/produk/ai-copilot', icon: '🤖', title: { id: 'AI Copilot', en: 'AI Copilot' }, desc: { id: 'Asisten AI di seluruh ekosistem SUGI.', en: 'AI assistant across the SUGI ecosystem.' } },
  { route: '/produk/arsitektur-ai', icon: '⚙️', title: { id: 'Arsitektur AI', en: 'AI Architecture' }, desc: { id: 'Hybrid RAG pipeline — on-premise, berdaulat, skalabel.', en: 'Hybrid RAG pipeline — on-premise, sovereign, scalable.' } },
]
