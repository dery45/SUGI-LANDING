import { useLanguage } from '../../contexts/LanguageContext'

const layersID = [
  {
    title: 'Pengguna',
    items: ['Pemerintah Pusat', 'Pemerintah Daerah', 'Badan Pangan Nasional'],
    color: 'bg-primary text-shade-600',
  },
  {
    title: 'Aplikasi & Insight',
    items: ['Dashboard Pemerintah', 'Government Insight Engine', 'Chatbot Insight Dashboard'],
    color: 'bg-tint-200 text-white',
  },
  {
    title: 'AI & Pemrosesan',
    items: ['Hybrid RAG (BM25 + Vector Search)', 'NLP Pipeline (NER, Sentimen, Topik)', 'Predictive Models & Change Detection'],
    color: 'bg-shade-600 text-white border border-primary/30',
  },
  {
    title: 'Data & Infrastruktur',
    items: ['MongoDB (Dataset terstruktur)', 'ChromaDB (Learning loop)', 'Dual-database (sugi_insights)'],
    color: 'bg-gray-900 text-gray-300 border border-gray-700',
  },
]

const layersEN = [
  {
    title: 'Users',
    items: ['Central Government', 'Regional Government', 'National Food Agency'],
    color: 'bg-primary text-shade-600',
  },
  {
    title: 'Applications & Insights',
    items: ['Government Dashboard', 'Government Insight Engine', 'Chatbot Insight Dashboard'],
    color: 'bg-tint-200 text-white',
  },
  {
    title: 'AI & Processing',
    items: ['Hybrid RAG (BM25 + Vector Search)', 'NLP Pipeline (NER, Sentiment, Topic)', 'Predictive Models & Change Detection'],
    color: 'bg-shade-600 text-white border border-primary/30',
  },
  {
    title: 'Data & Infrastructure',
    items: ['MongoDB (Structured datasets)', 'ChromaDB (Learning loop)', 'Dual-database (sugi_insights)'],
    color: 'bg-gray-900 text-gray-300 border border-gray-700',
  },
]

export default function ArchitectureDiagram() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const layers = isID ? layersID : layersEN

  const credibility = isID ? [
    'Deteksi perubahan berbasis signature MD5',
    'Cache TTL 5 menit untuk opsi filter',
    'Autentikasi JWT + bcrypt dengan RBAC',
    'Agregasi paralel 10–15 pipeline MongoDB melalui Promise.all',
  ] : [
    'MD5 signature-based change detection',
    '5-min TTL cache for filter options',
    'JWT + bcrypt authentication with RBAC',
    'Parallel 10-15 MongoDB pipeline aggregation via Promise.all',
  ]

  const subtitle = isID
    ? 'Keempat lapisan berjalan di atas satu fondasi data yang sama — sehingga angka di dashboard, rekomendasi AI, dan sinyal dari percakapan petani selalu konsisten satu sama lain.'
    : 'All four layers run on a shared data foundation — so dashboard numbers, AI recommendations, and signals from farmer conversations are always consistent.'

  return (
    <div>
      <p className="text-sm text-gray-500 mb-8 text-center max-w-2xl mx-auto">{subtitle}</p>

      <div className="space-y-0 max-w-3xl mx-auto">
        {layers.map((layer, i) => (
          <div key={i} className="relative">
            <div className={`rounded-xl p-4 md:p-5 ${layer.color}`}>
              <h4 className="text-sm font-bold mb-2 uppercase tracking-wider opacity-80">{layer.title}</h4>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item, j) => (
                  <span key={j} className="text-xs md:text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
                    {item}
                  </span>
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
        <h4 className="text-sm font-bold text-shade-600 mb-3">
          {isID ? 'Detail Kredibilitas Arsitektur' : 'Architecture Credibility Details'}
        </h4>
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