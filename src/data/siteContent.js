export const content = {
  nav: {
    id: {
      beranda: 'Beranda',
      tentang: 'Tentang Kami',
      masalah: 'Masalah',
      solusi: 'Solusi',
      visiMisi: 'Visi & Misi',
      ekosistem: 'Ekosistem',
      fitur: 'Fitur',
      teknologi: 'Teknologi AI',
      tim: 'Tim',
      faq: 'FAQ',
      kontak: 'Kontak',
    },
    en: {
      beranda: 'Home',
      tentang: 'About Us',
      masalah: 'Problem',
      solusi: 'Solution',
      visiMisi: 'Vision & Mission',
      ekosistem: 'Ecosystem',
      fitur: 'Features',
      teknologi: 'AI Technology',
      tim: 'Team',
      faq: 'FAQ',
      kontak: 'Contact',
    },
  },
  hero: {
    id: {
      title: 'Transformasi Manajemen Pangan Cerdas\nmelalui Asisten AI Berbasis Hybrid RAG',
      subtitle: 'Ekosistem AI pertanian terintegrasi untuk optimalisasi rantai pasok — memberdayakan petani, pemerintah, dan mitra agribisnis dengan kecerdasan buatan hybrid RAG on-premise yang gratis, aman, dan kontekstual.',
      cta1: 'Untuk Petani',
      cta2: 'Untuk Pemerintah & Mitra',
      stats: [
        { value: '49,41%', label: 'Rumah tangga miskin dari sektor pertanian' },
        { value: '66%', label: 'Petani berusia di atas 45 tahun' },
        { value: '15%', label: 'Potensi hemat biaya tanam petani' },
        { value: '<24 Jam', label: 'Respons kebijakan dari hitungan minggu' },
      ],
    },
    en: {
      title: 'Smart Food Management Transformation\nthrough Hybrid RAG AI Assistant',
      subtitle: 'An integrated AI ecosystem for supply chain optimization — empowering farmers, government, and agribusiness partners with on-premise hybrid RAG AI that is free, secure, and contextual.',
      cta1: 'For Farmers',
      cta2: 'For Government & Partners',
      stats: [
        { value: '49.41%', label: 'Poor households from agriculture sector' },
        { value: '66%', label: 'Farmers aged over 45 years old' },
        { value: '15%', label: 'Potential planting cost savings' },
        { value: '<24 Hrs', label: 'Policy response, from weeks' },
      ],
    },
  },
  problem: {
    id: {
      title: 'Tiga Masalah Utama Pertanian Indonesia',
      subtitle: 'Akar masalahnya bukan rendahnya produktivitas semata — melainkan asimetri informasi struktural di sepanjang rantai pertanian yang membentuk siklus sulit diputus: pasar tidak pasti → pendapatan menurun → minat generasi muda berkurang → pengetahuan hilang → produktivitas turun → ketergantungan pangan meningkat.',
      items: [
        {
          title: 'Asimetri Informasi Pasar',
          desc: 'Data harga, cuaca, hama, dan kondisi pasar tersebar di berbagai sumber yang tidak terintegrasi, memaksa petani mengambil keputusan berbasis pengalaman di tengah variabel risiko yang sangat kompleks. Dampak sistemik: 49,41% rumah tangga miskin Indonesia bergantung pada sektor pertanian.',
          stat: '49,41%',
          statLabel: 'rumah tangga miskin bergantung pada sektor pertanian',
        },
        {
          title: 'Krisis Regenerasi Petani',
          desc: '66% petani berusia di atas 45 tahun (Sensus Pertanian 2023). Pengetahuan empiris lapangan tidak memiliki medium transfer yang efektif ke generasi berikutnya, mengancam keberlanjutan sektor pertanian nasional secara sistemik.',
          stat: '66%',
          statLabel: 'petani berusia >45 tahun (Sensus Pertanian 2023)',
        },
        {
          title: 'Fragmentasi Data & Kebijakan Reaktif',
          desc: 'Data ketahanan pangan tersebar di berbagai silo institusional tanpa single source of truth. Kebijakan bereaksi berdasarkan laporan kuartalan, bukan sinyal lapangan real-time. Ketergantungan impor komoditas strategis melemahkan daya saing petani lokal.',
          stat: '15+',
          statLabel: 'dataset tersebar di berbagai institusi',
        },
      ],
    },
    en: {
      title: 'Three Core Problems of Indonesian Agriculture',
      subtitle: 'The root cause is not low productivity alone — but structural information asymmetry across the agricultural value chain, forming a vicious cycle: market uncertainty → declining income → youth disinterest → knowledge loss → falling productivity → rising food import dependence.',
      items: [
        {
          title: 'Market Information Asymmetry',
          desc: 'Price, weather, pest, and market data are scattered across unintegrated sources, forcing farmers to make decisions based on experience amid complex risk variables. Systemic impact: 49.41% of Indonesia\'s poor households depend on agriculture.',
          stat: '49.41%',
          statLabel: 'of poor households depend on agriculture',
        },
        {
          title: 'Farmer Regeneration Crisis',
          desc: '66% of farmers are over 45 years old (2023 Agricultural Census). Field knowledge has no effective transfer medium to the next generation, systematically threatening national agricultural sustainability.',
          stat: '66%',
          statLabel: 'of farmers are >45 years old (2023 Census)',
        },
        {
          title: 'Data Fragmentation & Reactive Policy',
          desc: 'Food security data is scattered across institutional silos with no single source of truth. Policy reacts based on quarterly reports, not real-time field signals. Import dependence on strategic commodities weakens local farmer competitiveness.',
          stat: '15+',
          statLabel: 'datasets scattered across institutions',
        },
      ],
    },
  },
  solution: {
    id: {
      title: 'SUGI Ecosystem: Transformasi Manajemen Pangan Cerdas',
      subtitle: 'Bukan solusi parsial — SUGI menjawab ketiga lapisan kompleksitas secara simultan melalui satu ekosistem AI terintegrasi yang mengonversi interaksi lapangan petani menjadi intelijen kebijakan pangan nasional.',
      points: [
        {
          title: 'Pendamping Tani — Otak Kedua Petani',
          desc: 'Kami membangun SUGI sebagai pendamping tani, bukan sekedar asisten — tapi otak kedua bagi petani. SUGI tidak hanya memberi informasi, tapi membaca situasi lahan, cuaca, dan pola tanam di daerah petani sehingga kerugian dari fase trial dan error yang mahal dapat berkurang signifikan.',
        },
        {
          title: 'Memangkas Fase Trial dan Error',
          desc: 'Fase trial dan error adalah fase paling berat bagi petani — mahal biaya maupun tenaga. Contoh nyata: gagal panen cabai akibat salah kira kurang pupuk padahal pH tanah salah (Turi, Sleman), atau keberhasilan melon hanya 50/50 saat masih belajar. SUGI mendampingi keputusan sejak awal.',
        },
        {
          title: 'Transfer Pengetahuan Lintas Generasi',
          desc: '66% petani berusia di atas 45 tahun (Sensus Pertanian 2023). Knowledge base SUGI yang terus belajar dari setiap interaksi menjembatani pengetahuan empiris petani senior dengan akses data digital untuk generasi muda.',
        },
        {
          title: 'Early Warning System Berbasis Data',
          desc: 'Data mikro lapangan dikonversi menjadi intelijen kebijakan pangan nasional — mempercepat respons pemerintah terhadap anjloknya harga komoditas atau kelangkaan pupuk dari hitungan minggu menjadi hitungan jam (<24 jam).',
        },
        {
          title: 'Kedaulatan Data & Privasi',
          desc: 'Seluruh proses inferensi AI berjalan on-premise. Data operasional petani, perusahaan, dan pemerintah tidak pernah dikirim ke layanan AI publik. Kepatuhan penuh terhadap UU PDP No. 27/2022 dengan pengamanan berlapis.',
        },
        {
          title: 'Gratis untuk Petani Kecil',
          desc: 'Chatbot SUGI AI gratis selamanya untuk petani kecil. Keberlanjutannya dibiayai oleh pemerintah dan perusahaan agribisnis yang berlangganan dashboard analitik: Kelompok Tani mulai Rp300rb/bln, Perusahaan Pertanian mulai Rp1jt/bln, Pemerintah mulai Rp1,5jt/bln.',
        },
      ],
    },
    en: {
      title: 'SUGI Ecosystem: Smart Food Management Transformation',
      subtitle: 'Not a partial solution — SUGI addresses all three layers of complexity simultaneously through one integrated AI ecosystem that converts farmer field interactions into national food security intelligence.',
      points: [
        {
          title: 'Farming Companion — Second Brain',
          desc: 'We built SUGI as a farming companion, not just an assistant — a second brain for farmers. SUGI reads land conditions, weather, and local planting patterns so costly trial-and-error losses can be reduced significantly.',
        },
        {
          title: 'Cutting Trial-and-Error Costs',
          desc: 'Trial and error is the heaviest phase for farmers — costly in money and labor. SUGI guides decisions from day one, targeting 15% reduction in fertilizer and pesticide waste.',
        },
        {
          title: 'Cross-Generational Knowledge Transfer',
          desc: '66% of farmers are over 45 years old (2023 Agricultural Census). SUGI\'s learning knowledge base bridges senior farmers\' empirical knowledge with digital data access for younger generations.',
        },
        {
          title: 'Data-Driven Early Warning System',
          desc: 'Micro-level field data is converted into national food security intelligence — accelerating government response to commodity price drops or fertilizer scarcity from weeks to hours (<24 hours).',
        },
        {
          title: 'Data Sovereignty & Privacy',
          desc: 'All AI inference runs on-premise. Farmer, company, and government operational data is never sent to public AI services. Full compliance with PDP Law No. 27/2022 with layered security.',
        },
        {
          title: 'Free for Smallholder Farmers',
          desc: 'SUGI AI chatbot is free forever for smallholder farmers. Funded by dashboard subscriptions: Farmer Groups from IDR 300K/mo, Agribusiness from IDR 1M/mo, Government from IDR 1.5M/mo.',
        },
      ],
    },
  },
  visionMission: {
    id: {
      vision: {
        title: 'Visi',
        desc: 'Menjadi fondasi kecerdasan pertanian Indonesia — menghubungkan setiap petani, pemerintah, dan pelaku agribisnis dalam satu ekosistem data yang transparan, kontekstual, dan berdaulat.',
      },
      missions: [
        'Mendemokratisasi akses informasi pertanian bagi seluruh petani Indonesia tanpa biaya melalui model cross-subsidy.',
        'Menghentikan krisis regenerasi petani melalui transfer pengetahuan berbasis AI dan pendekatan Pemuda sebagai Fasilitator Alat.',
        'Mengubah kebijakan pangan nasional dari reaktif menjadi prediktif berbasis data real-time dan early warning system.',
        'Menciptakan siklus data flywheel yang memperkuat akurasi sistem seiring waktu dengan rasio LTV/CAC 13,7×.',
        'Menjaga kedaulatan data pertanian Indonesia dengan infrastruktur on-premise yang patuh UU PDP No. 27/2022.',
      ],
    },
    en: {
      vision: {
        title: 'Vision',
        desc: 'To become the foundation of Indonesian agricultural intelligence — connecting every farmer, government, and agribusiness player in one transparent, contextual, and sovereign data ecosystem.',
      },
      missions: [
        'Democratize access to agricultural information for all Indonesian farmers at no cost through a cross-subsidy model.',
        'Stop the farmer regeneration crisis through AI-powered knowledge transfer and the Youth as Tool Facilitator approach.',
        'Transform national food policy from reactive to predictive based on real-time data and early warning systems.',
        'Create a data flywheel that strengthens system accuracy over time with a 13.7× LTV/CAC ratio.',
        'Protect Indonesian agricultural data sovereignty with on-premise infrastructure compliant with PDP Law No. 27/2022.',
      ],
    },
  },
  ecosystem: {
    id: {
      title: 'Ekosistem SUGI',
      subtitle: 'Smart Farming berasal dari Smart Decision — Telegram Chatbot, SUGI AI Copilot, dan Market Intelligence yang menghubungkan petani sampai pengambil kebijakan.',
      items: [
        {
          title: 'Telegram Chatbot',
          subtitle: 'Menjawab Kebutuhan Petani Secara Cepat',
          desc: 'Chatbot AI yang menjawab kebutuhan petani, pemilik lahan, dan pemerintah secara cepat — budidaya, harga pasar, cuaca, hama, dan penyakit tanaman dalam Bahasa Indonesia, langsung dari Telegram.',
          features: ['Gratis Selamanya untuk Petani Kecil', 'Respons Instan', 'On-Premise & Berdaulat', 'Offline Catch-up'],
        },
        {
          title: 'SUGI AI Copilot',
          subtitle: 'Otak Kedua Petani',
          desc: 'AI Copilot yang menghubungkan dari petani sampai pengambil kebijakan. Membaca situasi lahan, cuaca, dan pola tanam daerah petani untuk memangkas kerugian fase trial dan error. Didukung Data Flywheel + Persistent Memory: semakin banyak data yang dicatat, semakin baik rekomendasinya.',
          features: ['Data Flywheel', 'Persistent Memory', 'Rekomendasi Kontekstual', 'Hybrid RAG'],
        },
        {
          title: 'SUGIDash Government',
          subtitle: 'Dashboard untuk Ketahanan Pangan',
          desc: 'AI dashboard untuk memantau ketahanan pangan dan mendukung kebijakan berbasis data. Diharapkan dimanfaatkan oleh Badan Pangan Nasional, Kementerian Pertanian, Kementerian Perdagangan, Bank Indonesia, dan koperasi pertanian di seluruh Indonesia.',
          features: ['15+ Dataset Bapanas/BPS', 'Policy Recommendation', 'Peta Interaktif', 'Mulai Rp1,5jt/bln'],
        },
        {
          title: 'Market Intelligence & Chatbot Insight',
          subtitle: 'Telinga Pemerintah',
          desc: 'Insight pasar, kebijakan, dan percakapan petani berbasis SUGI AI. Sebagai telinga pemerintah untuk memantau pertanyaan petani, tren, dan insight AI secara real-time untuk evaluasi — dari hitungan minggu menjadi hitungan jam.',
          features: ['10 Market Insights', '15 Tab Analitik NLP', 'Sentimen & Tren', 'Early Warning System'],
        },
      ],
      flowNote: 'Alur SUGI: Petani Mendata (Mobile Apps) → Kelompok Tani → Pemerintah Mendengar (Dashboard) → Membuat Kebijakan (Policy Recommendation) → Memberi Market Insight & Chatbot ke Petani. Berawal dari implementasi smart farming 2024 di Wonoboyo, Jogonalan, Klaten bersama UNY.',
    },
    en: {
      title: 'SUGI Ecosystem',
      subtitle: 'Smart Farming comes from Smart Decision — Telegram Chatbot, SUGI AI Copilot, and Market Intelligence connecting farmers to policymakers.',
      items: [
        {
          title: 'Telegram Chatbot',
          subtitle: 'Fast Answers for Farmers',
          desc: 'AI chatbot answering farmers, landowners, and government needs quickly — cultivation, market prices, weather, pests, and plant diseases in Indonesian, right from Telegram.',
          features: ['Free Forever for Smallholders', 'Instant Response', 'On-Premise & Sovereign', 'Offline Catch-up'],
        },
        {
          title: 'SUGI AI Copilot',
          subtitle: 'Farmers’ Second Brain',
          desc: 'AI Copilot connecting farmers to policymakers. Reads land conditions, weather, and local planting patterns to cut trial-and-error losses. Powered by Data Flywheel + Persistent Memory: the more data recorded, the better the recommendations.',
          features: ['Data Flywheel', 'Persistent Memory', 'Contextual Recommendations', 'Hybrid RAG'],
        },
        {
          title: 'SUGIDash Government',
          subtitle: 'Food Security Dashboard',
          desc: 'AI dashboard to monitor food security and support data-driven policy. For National Food Agency, Ministries of Agriculture and Trade, Bank Indonesia, and farmer cooperatives across Indonesia.',
          features: ['15+ Bapanas/BPS Datasets', 'Policy Recommendation', 'Interactive Map', 'From IDR 1.5M/mo'],
        },
        {
          title: 'Market Intelligence & Chatbot Insight',
          subtitle: 'Government’s Ears',
          desc: 'Market, policy, and farmer-conversation insights powered by SUGI AI. Monitors farmer questions, trends, and AI insights in real-time — from weeks to hours.',
          features: ['10 Market Insights', '15 NLP Analytics Tabs', 'Sentiment & Trends', 'Early Warning System'],
        },
      ],
      flowNote: 'SUGI loop: Farmers Record (Mobile Apps) → Farmer Groups → Government Listens (Dashboard) → Creates Policy (Policy Recommendation) → Gives Market Insight & Chatbot back to Farmers. Rooted in the 2024 Wonoboyo, Jogonalan, Klaten smart farming implementation with UNY.',
    },
  },
  features: {
    id: {
      title: 'Fitur Unggulan',
      subtitle: 'Dari peningkatan produktivitas, ketahanan pangan, hingga penciptaan lapangan kerja melalui digitalisasi ketahanan pangan.',
      categories: [
        {
          title: 'Operasional Lapangan',
          items: [
            'Pencatatan siklus budidaya offline-first tanpa khawatir sinyal',
            'Rekomendasi tanam berbasis cuaca, musim, dan analitik harga pasar',
            'Deteksi hama & penyakit tanaman otomatis melalui Perenual API (10.000+ data)',
            'Manajemen lahan, tanam, pemeliharaan & panen dengan cost tracking',
            'Sinkronasi data otomatis saat online — zero data loss',
          ],
        },
        {
          title: 'Intelijen & Pengambilan Keputusan',
          items: [
            'Hybrid RAG — BM25 + Dense Vector + Cross-Encoder + Memory',
            '10 AI-powered Farmer Market Insights (Skor PPH, Komoditas Terbaik, Margin, dll.)',
            'Policy Recommendation untuk pemerintah dari analitik 14 dataset nasional',
            '15+ dataset ketahanan pangan nasional (Bapanas/BPS) dalam satu dashboard',
            'Early Warning System: respons pemerintah dari hitungan minggu menjadi hitungan jam',
          ],
        },
      ],
    },
    en: {
      title: 'Key Features',
      subtitle: 'From productivity enhancement, food security, to job creation through food security digitalization.',
      categories: [
        {
          title: 'Field Operations',
          items: [
            'Offline-first cultivation cycle recording without signal worries',
            'Weather, season & market-price-based planting recommendations',
            'Automatic pest & disease detection via Perenual API (10,000+ data)',
            'Land, planting, maintenance & harvest management with cost tracking',
            'Auto data sync when online — zero data loss',
          ],
        },
        {
          title: 'Intelligence & Decision Making',
          items: [
            'Hybrid RAG — BM25 + Dense Vector + Cross-Encoder + Memory',
            '10 AI-powered Farmer Market Insights (PPH Score, Best Commodity, Margin, etc.)',
            'Policy Recommendations for government from 14 national dataset analytics',
            '15+ national food security datasets (Bapanas/BPS) in one dashboard',
            'Real-time Early Warning System: government response from weeks to hours',
          ],
        },
      ],
    },
  },
  aiTechnology: {
    id: {
      title: 'Teknologi AI di Balik SUGI',
      subtitle: 'Hybrid Retrieval-Augmented Generation (RAG) yang dirancang khusus untuk konteks pertanian Indonesia — menggabungkan algoritma pencarian deterministik, semantic retrieval, dan Large Language Model.',
      steps: [
        { step: '01', title: 'Scope Guard', desc: 'Memvalidasi domain pertanyaan — hanya pertanian & perkebunan yang diproses. Delapan allowed topic sections ditambah pola sapaan dan daftar keyword terblokir untuk menjaga fokus.' },
        { step: '02', title: 'Query Rewriting 3-Layer', desc: 'Memperjelas pertanyaan ambigu dalam tiga lapisan: aturan berbasis bahasa (0ms), LLM fallback Qwen2.5 (~800ms), dan query asli sebagai cadangan. Contoh: "menanamnya" → "menanam semangka".' },
        { step: '03', title: 'Hybrid Ensemble Retrieval', desc: 'Menggabungkan BM25 (30%), Dense Vector (30%), Conversation Memory (10%), Plant API (15%), dan Weather API (15%) dengan bobot dinamis berdasarkan tipe query untuk recall dan precision optimal.' },
        { step: '04', title: 'Cross-Encoder Reranker', desc: 'Model ms-marco-MiniLM-L-6-v2 memeringkat ulang dokumen — memilih 5 dokumen dengan skor relevansi tertinggi sebelum dikirim ke LLM, memfilter noise dari retrieval awal.' },
        { step: '05', title: 'LLM On-Premise (sugi-v0.1L)', desc: 'Model LLaMA 3.2 fine-tuned untuk Bahasa Indonesia pertanian, berjalan lokal via Ollama. Empat lapis anti-halusinasi: Scope Guard → Cross-Encoder → Eval Loop → Stability Guard (4.096 token).' },
        { step: '06', title: 'Eval Loop & Audit Log', desc: 'Memvalidasi Faithfulness (threshold 40% lexical overlap) dan Relevance (50% keyword overlap) setiap jawaban. Qwen2.5 fallback untuk kasus inkonklusif. Seluruh proses tercatat di audit log queries.jsonl & eval_flags.jsonl.' },
      ],
      note: 'Seluruh proses berjalan on-premise — data tidak pernah meninggalkan infrastruktur Indonesia. Kepatuhan penuh UU PDP No. 27/2022. Biaya inferensi tidak bertambah seiring jumlah pengguna, memungkinkan fine-tuning model sesuai karakteristik data pertanian Indonesia tanpa mengirim informasi sensitif ke pihak ketiga.',
    },
    en: {
      title: 'The AI Technology Behind SUGI',
      subtitle: 'Hybrid Retrieval-Augmented Generation (RAG) specifically designed for Indonesian agricultural context — combining deterministic search algorithms, semantic retrieval, and Large Language Models.',
      steps: [
        { step: '01', title: 'Scope Guard', desc: 'Validates query domain — only agriculture & plantation topics are processed. Eight allowed topic sections plus greeting patterns and blocked keyword list to maintain focus.' },
        { step: '02', title: '3-Layer Query Rewriting', desc: 'Clarifies ambiguous queries in three layers: language-based rules (0ms), Qwen2.5 LLM fallback (~800ms), and original query as backup. Example: "how to plant it" → "how to plant watermelon".' },
        { step: '03', title: 'Hybrid Ensemble Retrieval', desc: 'Combines BM25 (30%), Dense Vector (30%), Conversation Memory (10%), Plant API (15%), and Weather API (15%) with dynamic weights based on query type for optimal recall and precision.' },
        { step: '04', title: 'Cross-Encoder Reranker', desc: 'ms-marco-MiniLM-L-6-v2 reranks documents — selects top 5 most relevant documents before LLM generation, filtering noise from initial retrieval.' },
        { step: '05', title: 'On-Premise LLM (sugi-v0.1L)', desc: 'LLaMA 3.2 fine-tuned for Indonesian agricultural language, running locally via Ollama. Four-layer anti-hallucination: Scope Guard → Cross-Encoder → Eval Loop → Stability Guard (4,096 tokens).' },
        { step: '06', title: 'Eval Loop & Audit Log', desc: 'Validates Faithfulness (40% lexical overlap threshold) and Relevance (50% keyword overlap) of every answer. Qwen2.5 fallback for inconclusive cases. Full audit trail in queries.jsonl & eval_flags.jsonl.' },
      ],
      note: 'All processing runs on-premise — data never leaves Indonesian infrastructure. Full compliance with PDP Law No. 27/2022. Inference costs don\'t scale with user count, enabling model fine-tuning on Indonesian agricultural data without sending sensitive information to third parties.',
    },
  },
  team: {
    id: {
      title: 'Tim Kami',
      subtitle: 'BUTeam terdiri dari empat anggota dengan spesialisasi yang saling melengkapi dan kepemilikan (ownership) yang terdefinisi secara eksplisit di setiap domain teknis.',
    },
    en: {
      title: 'Our Team',
      subtitle: 'BUTeam consists of four members with complementary specializations and explicitly defined ownership across every technical domain.',
    },
  },
  contact: {
    id: {
      title: 'Hubungi Kami',
      subtitle: 'Tertarik bermitra, menjadwalkan demo, atau berkolaborasi? Hubungi tim SUGI.',
      form: {
        name: 'Nama Lengkap',
        email: 'Email',
        message: 'Pesan',
        submit: 'Kirim Pesan',
        success: 'Pesan berhasil dikirim! Kami akan menghubungi Anda segera.',
      },
      telegram: 'Atau coba langsung SUGI AI di Telegram',
      cta: 'Mulai Chat',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Interested in partnering, scheduling a demo, or collaborating? Contact the SUGI team.',
      form: {
        name: 'Full Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully! We\'ll get back to you soon.',
      },
      telegram: 'Or try SUGI AI directly on Telegram',
      cta: 'Start Chat',
    },
  },
  about: {
    id: {
      title: 'Tentang Kami',
      subtitle: 'SUGI Ecosystem: Transformasi Manajemen Pangan Cerdas Melalui Asisten AI Berbasis Hybrid Retrieval-Augmented Generation dan Telegram untuk Optimalisasi Rantai Pasok.',
      story: [
        'Pada 2024, kami bersama mahasiswa Universitas Negeri Yogyakarta melakukan implementasi smart farming di Kelompok Tani Desa Wonoboyo, Jogonalan, Klaten. Di sana kami berkesempatan bertemu dan berdialog dengan petani lintas generasi di Wonoboyo — untuk tahu sebenarnya, maka harus bertanya, mendengar, dan berempati.',
        'Bapak dan Ibu Marsudi (petani cabai, Turi, Sleman): masa uji coba di awal adalah kesulitan terbesar — pernah rugi besar karena mengira cabai kurang pupuk, padahal pH tanahnya yang salah. Bapak Aziz (petani melon hidroponik, Berbah, Sleman): bertani melon on the field risiko berhasilnya 50/50, bahkan hidroponik 70/30 saat masih trial-error. Bapak Nanang Kuswahyudi (Ketua PPHPM Sleman): ketidakstabilan harga membuat petani hanya bisa menebak-nebak, ditambah cuaca, hama, dan penyakit.',
        'Dari temuan tersebut, lahirlah SUGI: pendamping tani sekaligus otak kedua bagi petani — ekosistem AI (chatbot Telegram, dashboard analitik, aplikasi lapangan, insight engine) yang membaca situasi lahan, cuaca, dan pola tanam untuk menekan kerugian fase trial dan error. Petani adalah Penyangga Tatanan Negara Indonesia.',
      ],
      mission: 'Misi kami: SUGI gratis selamanya untuk petani kecil — didanai pemerintah dan agribisnis yang berlangganan dashboard (Kelompok Tani Rp300rb/bln, Perusahaan Rp1jt/bln, Pemerintah Rp1,5jt/bln). Target dampak: mengurangi 15% pemborosan pupuk dan pestisida, serta mempercepat respons pemerintah dari hitungan minggu menjadi <24 jam.',
    },
    en: {
      title: 'About Us',
      subtitle: 'SUGI Ecosystem: Smart Food Management Transformation through Hybrid Retrieval-Augmented Generation AI Assistant and Telegram for Supply Chain Optimization.',
      story: [
        'In 2024, with Yogyakarta State University students, we implemented smart farming with the Wonoboyo farmer group in Jogonalan, Klaten — meeting and dialoguing with cross-generational farmers. To truly understand, we must ask, listen, and empathize.',
        'Mr. & Mrs. Marsudi (chili farmers, Turi, Sleman): early trial periods caused major losses — misdiagnosed nutrient deficiency when soil pH was the issue. Mr. Aziz (hydroponic melon, Berbah, Sleman): field melon success is 50/50, hydroponic 70/30 while still learning. Mr. Nanang Kuswahyudi (PPHPM Sleman chair): price instability forces farmers to guess, plus weather, pests, and diseases.',
        'From these findings, SUGI was born: a farming companion and second brain — an AI ecosystem (Telegram chatbot, analytics dashboard, field app, insight engine) reading land, weather, and planting patterns to cut trial-and-error losses. Farmers are the Supporters of the Indonesian State Order.',
      ],
      mission: 'Our mission: SUGI free forever for smallholders — funded by dashboard subscribers (Farmer Groups IDR 300K/mo, Companies IDR 1M/mo, Government IDR 1.5M/mo). Target impact: 15% less fertilizer/pesticide waste and government response from weeks to <24 hours.',
    },
  },
  footer: {
    id: {
      tagline: 'Transformasi Manajemen Pangan Cerdas Melalui Asisten AI Berbasis Hybrid RAG untuk Optimalisasi Rantai Pasok.',
      links: 'Tautan',
      product: 'Produk',
      company: 'Perusahaan',
      contact: 'Kontak',
      rights: 'Hak Cipta Dilindungi.',
    },
    en: {
      tagline: 'Smart Food Management Transformation through Hybrid RAG AI Assistant for Supply Chain Optimization.',
      links: 'Links',
      product: 'Products',
      company: 'Company',
      contact: 'Contact',
      rights: 'All Rights Reserved.',
    },
  },
  notFound: {
    id: {
      title: 'Halaman Tidak Ditemukan',
      desc: 'Halaman yang Anda cari tidak tersedia.',
      cta: 'Kembali ke Beranda',
    },
    en: {
      title: 'Page Not Found',
      desc: 'The page you\'re looking for doesn\'t exist.',
      cta: 'Back to Home',
    },
  },
}

export function t(key, lang) {
  const keys = key.split('.')
  let result = content
  for (const k of keys) {
    if (result?.[k] !== undefined) result = result[k]
    else return key
  }
  return result?.[lang] ?? result?.id ?? key
}