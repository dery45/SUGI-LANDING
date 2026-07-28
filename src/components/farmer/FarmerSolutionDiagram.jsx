import { useLanguage } from '../../contexts/LanguageContext'

const layersID = [
  { title: 'Pengguna', items: ['Petani Individu', 'Kelompok Tani & Koperasi', 'Perusahaan Agribisnis'], color: 'bg-primary text-shade-600' },
  { title: 'Aplikasi & Layanan', items: ['Chatbot Telegram SUGI AI', 'SUGI PWA (Offline-first)', 'Dashboard Petani', 'Dashboard Manajemen'], color: 'bg-tint-200 text-white' },
  { title: 'AI & Pemrosesan', items: ['Hybrid RAG (BM25 + Vector + Reranker)', 'Analisis Harga & Cuaca', 'NLP & Peringatan Agronomi'], color: 'bg-shade-600 text-white border border-primary/30' },
  { title: 'Data & Infrastruktur', items: ['MongoDB (Dataset pasar & produksi)', 'ChromaDB (Memori percakapan)', 'Basis Data Tanaman Perenual'], color: 'bg-gray-900 text-gray-300 border border-gray-700' },
]

const layersEN = [
  { title: 'Users', items: ['Individual Farmers', 'Farmer Groups & Cooperatives', 'Agribusiness Companies'], color: 'bg-primary text-shade-600' },
  { title: 'Applications & Services', items: ['Telegram Chatbot SUGI AI', 'SUGI PWA (Offline-first)', 'Farmer Dashboard', 'Management Dashboard'], color: 'bg-tint-200 text-white' },
  { title: 'AI & Processing', items: ['Hybrid RAG (BM25 + Vector + Reranker)', 'Price & Weather Analysis', 'NLP & Agronomy Alerts'], color: 'bg-shade-600 text-white border border-primary/30' },
  { title: 'Data & Infrastructure', items: ['MongoDB (Market & production data)', 'ChromaDB (Conversation memory)', 'Perenual Plant Database'], color: 'bg-gray-900 text-gray-300 border border-gray-700' },
]

export default function FarmerSolutionDiagram() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const layers = isID ? layersID : layersEN

  const credibility = isID ? [
    'Hybrid RAG grounded dari basis pengetahuan pertanian terverifikasi',
    'Peringatan cuaca & agronomi otomatis — deteksi risiko kekeringan, banjir, dan penyakit',
    'Bisa dipakai saat offline — pesan tetap diproses saat bot kembali online',
    'Diuji langsung di lapangan — riset 2024 di Desa Wonoboyo, Klaten',
  ] : [
    'Hybrid RAG grounded in verified agricultural knowledge bases',
    'Automatic weather & agronomy alerts — drought, flood, disease risk detection',
    'Works offline — messages processed when bot comes back online',
    'Field-tested — 2024 research in Wonoboyo Village, Klaten',
  ]

  return (
    <div>
      <div className="space-y-0 max-w-3xl mx-auto">
        {layers.map((layer, i) => (
          <div key={i} className="relative">
            <div className={'rounded-xl p-4 md:p-5 ' + layer.color}>
              <h4 className="text-sm font-bold mb-2 uppercase tracking-wider opacity-80">{layer.title}</h4>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item, j) => (
                  <span key={j} className="text-xs md:text-sm font-medium bg-white/10 px-3 py-1 rounded-full">{item}</span>
                ))}
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center py-1">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 max-w-3xl mx-auto bg-gray-50 rounded-xl p-5 border border-gray-200">
        <h4 className="text-sm font-bold text-shade-600 mb-3">{isID ? 'Landasan Teknis' : 'Technical Foundation'}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {credibility.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
              <span className="text-primary mt-0.5 shrink-0">&#10003;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}