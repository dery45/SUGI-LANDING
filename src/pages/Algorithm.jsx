import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import SEOHead from '../components/ui/SEOHead'
import TechPageHero from '../components/ui/TechPageHero'
import { TriadDiagram, PipelineDiagram, HybridRagDiagram, InsightFlowDiagram, FlywheelCycleDiagram, FlowBox, Arrow } from '../components/ui/DiagramComponents'

export default function Algorithm() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const [techExpanded, setTechExpanded] = useState(false)

  const t = (id, en) => isID ? id : en

  const pipelineStages = [
    { stage: t('Pemeriksaan cakupan', 'Scope check'), algo: t('Pencocokan kata kunci dengan dukungan akhiran Bahasa Indonesia (-nya/-mu/-ku/-lah/-kah, dll.)', 'Keyword matching with Indonesian suffix support (-nya/-mu/-ku/-lah/-kah, etc.)'), config: t('350+ kata kunci diizinkan di 9 domain, 40 pola sapaan', '350+ allowed keywords in 9 domains, 40 greeting patterns') },
    { stage: t('Penulisan ulang pertanyaan', 'Query rewriting'), algo: t('3 lapis: jalur cepat, aturan berbasis kata/akhiran/lanjutan, fallback LLM', '3 layers: fast path, rule-based word/suffix/followup, LLM fallback'), config: 'qwen2.5:1.5b (suhu=0, timeout 30s)' },
    { stage: t('Deteksi tanaman/cuaca', 'Plant/weather detection'), algo: t('Set kata kunci kuat + lemah (kata lemah hanya aktif jika berpasangan dengan kata kuat)', 'Strong + weak keyword sets (weak only active when paired with strong)'), config: t('100+ kata kunci kuat, 40+ kata kunci lemah', '100+ strong keywords, 40+ weak keywords') },
    { stage: t('Pengambilan hybrid', 'Hybrid retrieval'), algo: t('BM25 + Vector digabung berbobot, lalu direranking', 'BM25 + Vector weighted fusion, then reranked'), config: 'mxbai-embed-large (768d) + ms-marco-MiniLM-L-6-v2' },
    { stage: t('Penyisipan memori', 'Memory injection'), algo: t('Kesamaan kosinus + filter user_id, hasil memori digabung dengan konteks RAG', 'Cosine similarity + user_id filter, memory merged with RAG context'), config: 'ChromaDB conversation_memory' },
    { stage: t('Generasi jawaban', 'Answer generation'), algo: t('LLM streaming dengan template jawaban terstruktur', 'LLM streaming with structured answer template'), config: 'sugi-v0.1L (suhu=0.3)' },
    { stage: t('Evaluasi', 'Evaluation'), algo: t('Dua tahap: heuristik leksikal cepat, LLM hanya jika hasil tidak jelas', 'Two-stage: fast lexical heuristic, LLM only if inconclusive'), config: 'qwen2.5:1.5b (suhu=0)' },
    { stage: t('Penyimpanan', 'Persistence'), algo: t('Log terstruktur per pertanyaan, ringkasan memori tiap 5 giliran', 'Structured log per query, memory summary every 5 turns'), config: t('Format JSONL, disimpan lokal', 'JSONL format, stored locally') },
  ]

  const dynamicRetrieverTable = [
    { condition: t('Selalu aktif', 'Always active'), retriever: t('Ensemble utama (BM25 + Vector)', 'Primary ensemble (BM25 + Vector)'), weight: '0.60' },
    { condition: t('Ada riwayat percakapan', 'Has conversation history'), retriever: t('Memori percakapan (k=2)', 'Conversation memory (k=2)'), weight: '0.10' },
    { condition: t('Pertanyaan tentang tanaman', 'Plant-related query'), retriever: t('Data tanaman (k=3)', 'Plant data (k=3)'), weight: '0.15' },
    { condition: t('Pertanyaan tentang cuaca', 'Weather-related query'), retriever: t('Data cuaca (k=8)', 'Weather data (k=8)'), weight: '0.15' },
  ]

  const insightEnginesTable = [
    { engine: t('Daily Insight', 'Daily Insight'), schedule: t('Setiap 12 jam', 'Every 12 hours'), scope: t('5 kategori: harga, cuaca, saran tanam, tren kebijakan, ringkasan sesi', '5 categories: price, weather, planting, policy trends, session summary') },
    { engine: t('Farmer Insight', 'Farmer Insight'), schedule: t('Harian + deteksi perubahan', 'Daily + change detection'), scope: t('10 wawasan petani + 1 rekomendasi kebijakan', '10 farmer insights + 1 policy recommendation') },
    { engine: t('Government Insight', 'Government Insight'), schedule: t('Setiap 3600 detik + refresh bulanan penuh', 'Every 3600s + monthly full refresh'), scope: t('14 wawasan per koleksi data pemerintah', '14 insights per government data collection') },
  ]

  const aggregationAlgorithms = [
    { insight: t('Komoditas Terbaik', 'Best Commodity'), algo: t('Kelompokkan berdasarkan komoditas, rata-rata harga, urutkan menurun, ambil 5 teratas', 'Group by commodity, average price, sort descending, top 5') },
    { insight: t('Margin Positif', 'Positive Margin'), algo: t('Gabungkan data harga produsen & konsumen berdasarkan komoditas, margin = konsumen - produsen', 'Join producer & consumer prices by commodity, margin = consumer - producer') },
    { insight: t('Cadangan Pangan Daerah', 'Regional Food Reserves'), algo: t('Kelompokkan berdasarkan provinsi, jumlahkan cadangan (ton), urutkan menurun', 'Group by province, sum reserves (tons), sort descending') },
    { insight: t('Surplus per Komoditas', 'Surplus per Commodity'), algo: t('Kelompokkan berdasarkan komoditas, rata-rata neraca, klasifikasikan surplus/defisit', 'Group by commodity, average balance, classify surplus/deficit') },
    { insight: t('Provinsi Terbaik', 'Best Province'), algo: t('Kelompokkan berdasarkan provinsi, rata-rata harga, urutkan menurun', 'Group by province, average price, sort descending') },
    { insight: t('Rekomendasi Jual', 'Selling Recommendation'), algo: t('Kelompokkan berdasarkan (komoditas, provinsi), rata-rata harga, urutkan menurun', 'Group by (commodity, province), average price, sort descending') },
  ]

  const evalTable = [
    { metric: t('Faithfulness (kesetiaan pada konteks)', 'Faithfulness (adherence to context)'), method: t('Kecocokan token antara jawaban dan konteks', 'Token overlap between answer and context'), threshold: '>=40% = HIGH, <20% = LOW', fallback: 'qwen2.5:1.5b' },
    { metric: t('Relevance (relevansi terhadap pertanyaan)', 'Relevance (relevance to question)'), method: t('Kecocokan token antara pertanyaan dan dokumen', 'Token overlap between question and documents'), threshold: '>=50% = HIGH, <25% = LOW', fallback: 'qwen2.5:1.5b' },
  ]

  const rationaleTable = [
    { decision: t('Hybrid RAG (BM25 + Vector), bukan hanya satu metode', 'Hybrid RAG (BM25 + Vector), not just one method'), reason: t('Pertanian butuh pencocokan kata kunci pasti DAN pemahaman makna - satu metode saja tidak cukup', 'Agriculture needs exact keyword matching AND semantic understanding - one method alone is insufficient') },
    { decision: t('Cross-Encoder reranker meski menambah latensi', 'Cross-Encoder reranker despite added latency'), reason: t('Akurasi relevansi jauh lebih tinggi; untuk keputusan pertanian, ~50-200ms tambahan sepadan', 'Relevance accuracy is much higher; for agricultural decisions, ~50-200ms extra is worth it') },
    { decision: t('LLM berjalan lokal via Ollama, bukan API cloud', 'LLM runs locally via Ollama, not cloud API'), reason: t('Kedaulatan data (UU PDP), tanpa biaya API per-permintaan (gratis untuk petani), tetap berfungsi tanpa koneksi stabil', 'Data sovereignty (PDP law), no per-request API costs (free for farmers), works without stable internet') },
    { decision: t('Model utilitas terpisah (qwen2.5:1.5b) dari model utama', 'Separate utility model (qwen2.5:1.5b) from main model'), reason: t('Tugas utilitas lebih sering dan butuh respons cepat - model kecil lebih efisien', 'Utility tasks run more frequently and need fast response - smaller model is more efficient') },
    { decision: t('Jalur cepat berbasis aturan sebelum memanggil LLM', 'Rule-based fast path before LLM call'), reason: t('Menangani ~85% kasus referensial tanpa panggilan LLM - jauh lebih cepat dan tanpa biaya komputasi tambahan', 'Handles ~85% of referential cases without LLM call - much faster and zero additional compute cost') },
    { decision: t('Evaluasi dua tahap (leksikal dulu, LLM jika perlu)', 'Two-stage eval (lexical first, LLM if needed)'), reason: t('Menjaga latensi rendah pada kasus jelas, dengan jaring pengaman LLM untuk kasus ambigu', 'Keeps latency low for clear cases, with LLM safety net for ambiguous cases') },
    { decision: t('Deteksi perubahan berbasis MD5 pada mesin wawasan', 'MD5-based change detection on insight engines'), reason: t('Menghindari komputasi ulang mahal pada dataset besar yang jarang berubah drastis', 'Avoids costly recomputation on large datasets that rarely change drastically') },
    { decision: t('Memori pembelajaran berkelanjutan (flywheel)', 'Continual learning memory (flywheel)'), reason: t('Cara murah untuk membuat sistem makin konsisten tanpa melatih ulang model dasar', 'Cheap way to make the system increasingly consistent without retraining the base model') },
    { decision: t('Batasan topik ketat hanya untuk pertanian', 'Strict scope guard for agriculture only'), reason: t('Mengurangi risiko penyalahgunaan dan tanggung jawab hukum', 'Reduces misuse risk and legal liability') },
  ]

  const comparisonHeaders = [t('Dimensi', 'Dimension'), t('Asisten AI Publik', 'Public AI Assistants'), t('SUGI AI', 'SUGI AI')]
  const comparisonRows = [
    [t('Cakupan pengetahuan', 'Knowledge scope'), t('Sangat luas, lintas domain', 'Very broad, cross-domain'), t('Sengaja sempit - hanya pertanian', 'Intentionally narrow - agriculture only')],
    [t('Pengetahuan lokal Indonesia', 'Local Indonesian knowledge'), t('Sejauh ada di data pelatihan/pencarian web', 'As far as training data/web search allows'), t('Terhubung langsung ke data harga, cuaca, dan tanaman Indonesia yang diperbarui berkala', 'Directly connected to periodically updated Indonesian price, weather, and plant data')],
    [t('Jejak evaluasi per jawaban', 'Per-answer evaluation trail'), t('Umumnya tidak diekspos ke pengguna', 'Generally not exposed to users'), t('Setiap jawaban memiliki skor faithfulness/relevance dan log audit', 'Every answer has faithfulness/relevance scores and audit log')],
    [t('Lokasi pemrosesan data', 'Data processing location'), t('Server cloud milik penyedia', 'Provider cloud servers'), t('Lokal/on-premise', 'Local/on-premise')],
    [t('Model biaya untuk pengguna akhir', 'Cost model for end users'), t('Biasanya berbasis langganan atau kuota', 'Typically subscription or quota-based'), t('Gratis untuk petani, dibiayai lewat langganan dashboard', 'Free for farmers, funded by dashboard subscriptions')],
    [t('Batasan topik', 'Topic restrictions'), t('Bertujuan umum, menjawab hampir semua topik', 'General purpose, answers almost any topic'), t('Dibatasi ketat ke domain pertanian (scope guard)', 'Strictly limited to agriculture domain (scope guard)')],
  ]

  const metricTable = [
    { metric: t('Dampak petani', 'Farmer impact'), value: t('Target 15% hemat pupuk & pestisida', 'Target 15% fertilizer & pesticide savings') },
    { metric: t('Respons pemerintah', 'Government response'), value: t('Dari minggu ke <24 jam', 'From weeks to <24 hours') },
    { metric: t('Faithfulness', 'Faithfulness'), value: t('Jawaban tetap dalam konteks yang diambil', 'Answer stays within retrieved context') },
    { metric: t('Relevance', 'Relevance'), value: t('Dokumen sesuai maksud pertanyaan', 'Retrieved documents match query intent') },
    { metric: t('Akurasi cakupan', 'Scope accuracy'), value: t('Berhasil memblokir pertanyaan di luar topik pertanian', 'Successfully blocks non-agriculture queries') },
    { metric: t('Kualitas penulisan ulang', 'Rewrite quality'), value: t('Aturan menangani 85% kasus referensial tanpa LLM', 'Rules handle 85% of referential cases without LLM') },
    { metric: t('Latensi rata-rata', 'Average latency'), value: t('Di bawah 5 detik per pertanyaan', 'Under 5 seconds per query') },
  ]

  const modelTable = [
    { model: 'SUGI Llama 3.6 (Hybrid RAG)', role: t('Generasi jawaban utama, ringkasan memori sesi', 'Primary answer generation, session memory summary'), temp: '0.3', note: t('Model utama on-premise, kedaulatan data UU PDP', 'Main on-premise model, UU PDP data sovereignty') },
    { model: 'qwen2.5:1.5b', role: t('Penulisan ulang, evaluasi, ekstraksi tanaman, wawasan', 'Rewrite, eval, plant extraction, insights'), temp: '0.0-0.4', note: t('Model ringan, Bahasa Indonesia baik, inferensi cepat di CPU', 'Lightweight, good Bahasa Indonesia, fast CPU inference') },
    { model: 'mxbai-embed-large', role: t('Embedding untuk pencarian makna', 'Embeddings for semantic search'), temp: '-', note: t('768 dimensi, berjalan lokal via Ollama', '768 dimensions, runs locally via Ollama') },
  ]

  return (
    <>
      <SEOHead
        title={t('Algoritma & Teknologi SUGI', 'SUGI Algorithm & Technology')}
        description={t('Dokumentasi teknis hybrid RAG, insight engines, evaluasi otomatis, dan arsitektur AI SUGI - transparan, terukur, dan berdaulat.', 'Technical documentation of SUGI hybrid RAG, insight engines, auto-evaluation, and AI architecture - transparent, measurable, and sovereign.')}
      />

      <TechPageHero
        badge={t('Algoritma & Teknologi', 'Algorithm & Technology')}
        title={t('Bukan Sekadar Chatbot - Ini Cara SUGI Sebenarnya Bekerja', 'Not Just a Chatbot - This Is How SUGI Actually Works')}
        subtitle={t('Dokumentasi teknis terbuka: hybrid RAG, mesin wawasan otomatis, evaluasi mandiri, dan alasan di balik setiap keputusan arsitektur - sehingga Anda tidak perlu menebak-nebak apa yang terjadi di balik layar.', 'Open technical documentation: hybrid RAG, automated insight engines, self-evaluation, and the reasoning behind every architectural decision - so you never have to guess what happens behind the scenes.')}
        ctaPrimary={t('Coba Sendiri di Telegram', 'Try It on Telegram')}
        ctaPrimaryHref="https://t.me/sugi_demo_llmbot"
        ctaPrimaryExternal
        ctaSecondary={t('Lihat Alur Kerja', 'See the Pipeline')}
        ctaSecondaryOnClick={() => { const el = document.getElementById('pipeline'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}
      />

      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-3">{t('Mengapa Halaman Ini', 'Why This Page')}</Badge>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('Banyak produk "berbasis AI" di ruang pertanian hanyalah lapisan tipis di atas API LLM tujuan umum, tanpa rekayasa domain yang sesungguhnya di baliknya. Halaman ini ada untuk menjawab skeptisisme tersebut secara terbuka - dengan rumus retrieval yang aktual, pilihan model beserta alasannya, mekanisme evaluasi yang konkret, dan daftar keterbatasan yang jujur. Bukan klaim kosong seperti "didukung oleh AI canggih."', 'Many "AI-powered" products in agriculture are thin wrappers around a general-purpose LLM API with no real domain engineering behind them. This page exists to counter that skepticism openly - with actual retrieval formulas, actual model choices with reasoning, concrete evaluation mechanisms, and an honest limitations list. Not vague claims like "powered by advanced AI."')}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Cara Kerja', 'How It Works')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Bagaimana AI, Algoritma, dan Data Bekerja Bersama', 'How AI, Algorithms, and Data Work Together')}</h2>
            <p className="mt-4 text-gray-500">{t('SUGI bukan satu model AI - ia adalah sistem berlapis di mana algoritma klasik, infrastruktur pengambilan, dan AI generatif masing-masing melakukan tugas yang paling sesuai.', 'SUGI is not one AI model - it is a layered system where classical algorithms, retrieval infrastructure, and generative AI each do the job they are best at.')}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <TriadDiagram />
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 leading-relaxed">
              {t('Data saja hanyalah catatan; algoritma mengubah data menjadi sinyal terstruktur yang diperingkat; model AI mengubah sinyal itu menjadi jawaban dan narasi bahasa alami - dan keluarannya kembali ke lapisan data (sebagai memori percakapan, riwayat wawasan) sehingga siklus berikutnya dimulai dari posisi yang lebih baik.', 'Data alone is just records; algorithms turn data into ranked, structured signal; AI models turn that signal into natural-language answers and narratives - and the outputs feed back into the data layer (as conversation memory, insight history) so the next cycle starts from a better position.')}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="pipeline" className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-3">{t('Alur Kerja', 'Pipeline')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Alur Kerja Chatbot', 'Chatbot Pipeline')}</h2>
            <p className="mt-4 text-gray-500">{t('Setiap pertanyaan melewati delapan tahap - dari pemeriksaan cakupan hingga penyimpanan log - sebelum jawaban sampai ke pengguna.', 'Every question passes through eight stages - from scope check to log persistence - before the answer reaches the user.')}</p>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <PipelineDiagram />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Tahap', 'Stage')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Algoritma', 'Algorithm')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Model/Konfigurasi', 'Model/Config')}</th>
                </tr>
              </thead>
              <tbody>
                {pipelineStages.map((s, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{s.stage}</td>
                    <td className="py-3 px-4 text-gray-600">{s.algo}</td>
                    <td className="py-3 px-4 text-gray-500 text-xs">{s.config}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">Hybrid RAG</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Hybrid RAG - Kenapa Tidak Cukup Satu Metode', 'Hybrid RAG - Why Not Just One Method')}</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-bold text-shade-600 mb-2">BM25</h3>
                <p className="text-sm text-gray-500 mb-4">{t('Pencarian kata kunci - cepat, deterministik, sangat baik untuk nama komoditas dan istilah teknis.', 'Keyword search - fast, deterministic, excellent for commodity names and technical terms.')}</p>
                <pre className="text-xs bg-shade-600 text-gray-300 p-4 rounded-lg overflow-x-auto">BM25(q,d) = S IDF(t) x TF(t,d) x (k1+1) / (TF(t,d) + k1 x (1 - b + b x |d| / avgdl))</pre>
                <p className="mt-2 text-xs text-gray-400">{t('Kelebihan: cepat, deterministik. Kelemahan: tidak memahami sinonim, perlu dibangun ulang saat data berubah.', 'Strength: fast, deterministic. Weakness: no synonym understanding, needs rebuild on data change.')}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-bold text-shade-600 mb-2">{t('Dense Vector', 'Dense Vector')}</h3>
                <p className="text-sm text-gray-500 mb-4">{t('Pencarian makna - memahami parafrase dan variasi bahasa alami.', 'Semantic search - understands paraphrasing and natural language variation.')}</p>
                <pre className="text-xs bg-shade-600 text-gray-300 p-4 rounded-lg overflow-x-auto">cosine_sim(q,d) = (q . d) / (||q|| x ||d||)</pre>
                <p className="mt-2 text-xs text-gray-400">{t('Kelebihan: memahami makna. Kelemahan: bisa melewatkan kecocokan kata persis.', 'Strength: understands meaning. Weakness: may miss exact word matches.')}</p>
              </div>
            </div>

            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <h3 className="font-bold text-primary mb-2">{t('Mengapa Digabung?', 'Why Combine?')}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('Kata kunci pasti (harga, nama komoditas) dan variasi bahasa alami (cara petani bertanya) sama-sama penting dalam pertanian. BM25 sendiri gagal menangkap parafrase; vector sendiri bisa kehilangan presisi pada istilah teknis. Keduanya digabung berbobot (0.5:0.5 sebagai basis), lalu disaring lagi oleh Cross-Encoder Reranker - model yang menilai pasangan pertanyaan-dokumen secara langsung. Hasil akhirnya jauh lebih akurat meski menambah latensi kecil (~50-200ms per pertanyaan).', 'Exact keywords (prices, commodity names) and natural language variation (how farmers ask) are both critical in agriculture. BM25 alone misses paraphrasing; vector alone loses precision on technical terms. Both are combined at equal weight (0.5:0.5), then filtered by a Cross-Encoder Reranker - a model that judges query-document pairs directly. The result is far more accurate despite a small latency cost (~50-200ms per query).')}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-shade-600 mb-4">{t('Perakitan Dinamis Retriever', 'Dynamic Retriever Assembly')}</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Kondisi', 'Condition')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Retriever Tambahan', 'Additional Retriever')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Bobot', 'Weight')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dynamicRetrieverTable.map((r, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">{r.condition}</td>
                        <td className="py-3 px-4 text-gray-600">{r.retriever}</td>
                        <td className="py-3 px-4 font-mono">{r.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <HybridRagDiagram />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Mesin Wawasan', 'Insight Engines')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Mesin Wawasan Otomatis', 'Automated Insight Engines')}</h2>
            <p className="mt-4 text-gray-500">{t('Tiga mesin wawasan otonom yang masing-masing menjalankan algoritma agregasi dan jadwal yang berbeda.', 'Three autonomous insight engines, each running different aggregation algorithms on different schedules.')}</p>
          </div>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Mesin', 'Engine')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Jadwal', 'Schedule')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Cakupan', 'Scope')}</th>
                </tr>
              </thead>
              <tbody>
                {insightEnginesTable.map((e, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{e.engine}</td>
                    <td className="py-3 px-4">{e.schedule}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{e.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <InsightFlowDiagram />
          <div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-600">
            <h3 className="font-bold text-shade-600">{t('Validasi Wawasan', 'Insight Validation')}</h3>
            <p className="leading-relaxed">{t('Setiap wawasan yang dihasilkan LLM diperiksa sebelum disimpan: panjang minimum, tidak ada prefiks tanda kurung/label, tidak terpotong di tengah kalimat, tidak mengandung terlalu banyak kata Bahasa Inggris. Jika gagal, sistem mencoba ulang (maks 3 kali); jika tetap gagal, sistem memotong secara cerdas di batas kalimat terakhir.', 'Every LLM-generated insight is validated before storage: minimum length, no bracket/label prefixes, no mid-sentence truncation, not overly English. On failure, the system retries (max 3 attempts); if still failing, it smart-truncates at the last sentence boundary.')}</p>
            <h3 className="font-bold text-shade-600">{t('Deteksi Perubahan (Efisiensi)', 'Change Detection (Efficiency)')}</h3>
            <p className="leading-relaxed">{t('Alih-alih menghitung ulang seluruh wawasan setiap siklus, sistem menyimpan signature MD5 dari ID data terakhir. Wawasan hanya dihasilkan ulang jika signature berubah - mengurangi beban komputasi signifikan pada dataset besar yang jarang berubah drastis.', 'Instead of recomputing all insights every cycle, the system stores an MD5 signature of the last data IDs. Insights are only regenerated if the signature changes - significantly reducing compute load on large, slowly-changing datasets.')}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Market Intelligence', 'Market Intelligence')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Algoritma di Balik Wawasan Pasar', 'Algorithms Behind Market Insights')}</h2>
            <p className="mt-4 text-gray-500">{t('Sepuluh wawasan petani bukan hasil generatif murni - setiap satu berangkat dari agregasi data nyata, baru dinarasikan oleh LLM.', 'The ten farmer insights are not purely generative - each starts from real data aggregation, then is narrated by an LLM.')}</p>
          </div>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Wawasan', 'Insight')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Algoritma Agregasi', 'Aggregation Algorithm')}</th>
                </tr>
              </thead>
              <tbody>
                {aggregationAlgorithms.map((a, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{a.insight}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{a.algo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 leading-relaxed">{t('Poin penting: LLM di sini bertugas menarasikan hasil agregasi data nyata menjadi kalimat yang mudah dipahami - bukan menghasilkan angka dari imajinasinya sendiri.', 'Key point: the LLM here narrates real data aggregation results into easy-to-understand sentences - it does not generate numbers from imagination.')}</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Evaluasi', 'Evaluation')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Evaluasi & Keandalan', 'Evaluation & Reliability')}</h2>
            <p className="mt-4 text-gray-500">{t('Setiap jawaban chatbot dinilai otomatis pada dua dimensi - faithfulness dan relevance - sebelum dikirim ke pengguna.', 'Every chatbot answer is automatically scored on two dimensions - faithfulness and relevance - before reaching the user.')}</p>
          </div>
          <div className="overflow-x-auto max-w-4xl mx-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Metrik', 'Metric')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Metode Cepat', 'Fast Method')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Ambang', 'Threshold')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Fallback', 'Fallback')}</th>
                </tr>
              </thead>
              <tbody>
                {evalTable.map((e, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{e.metric}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{e.method}</td>
                    <td className="py-3 px-4 font-mono text-xs">{e.threshold}</td>
                    <td className="py-3 px-4 text-xs">{e.fallback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-600">
            <p className="leading-relaxed">{t('Kenapa dua tahap, bukan langsung LLM? Heuristik leksikal jauh lebih cepat dan cukup akurat untuk sebagian besar kasus. LLM hanya dipanggil saat hasil tidak jelas - menjaga latensi tetap rendah tanpa mengorbankan kualitas evaluasi.', 'Why two stages, not straight to LLM? Lexical heuristics are much faster and accurate enough for most cases. The LLM is only called when results are inconclusive - keeping latency low without sacrificing evaluation quality.')}</p>
            <p className="leading-relaxed">{t('Jika jawaban ditandai rendah: jawaban tetap dikirim ke pengguna, tetapi dicatat ke log terpisah untuk ditinjau. Ini adalah mekanisme transparansi, bukan sensor otomatis.', 'If an answer is flagged low: the answer is still sent to the user, but logged separately for review. This is a transparency mechanism, not automatic censorship.')}</p>
            <p className="leading-relaxed">{t('Setiap pertanyaan menghasilkan jejak audit terstruktur: pertanyaan asli, hasil penulisan ulang, status cakupan, dokumen yang diambil, skor evaluasi, dan latensi - semuanya bisa ditelusuri.', 'Every question produces a structured audit trail: original question, rewrite result, scope status, retrieved documents, evaluation scores, and latency - all traceable.')}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Flywheel', 'Flywheel')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Data Flywheel - Belajar dari Waktu ke Waktu', 'Data Flywheel - Learning Over Time')}</h2>
          </div>
          <div className="max-w-3xl mx-auto mb-8">
            <FlywheelCycleDiagram />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 leading-relaxed">{t('SUGI tidak melatih ulang model AI-nya setiap hari - itu mahal dan lambat. Sebagai gantinya, setiap percakapan dan wawasan yang dihasilkan disimpan sebagai "memori" yang dibaca kembali sebagai konteks pada siklus berikutnya. Ini adalah bentuk pembelajaran berkelanjutan yang ringan (lightweight continual learning) - sistem menjadi lebih konsisten dan kontekstual dari waktu ke waktu tanpa perlu melatih ulang model dasarnya.', 'SUGI does not retrain its AI model every day - that is expensive and slow. Instead, every conversation and generated insight is stored as "memory" that is read back as context in the next cycle. This is a form of lightweight continual learning - the system becomes more consistent and contextual over time without retraining the base model.')}</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Keputusan Arsitektur', 'Architectural Decisions')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Kenapa Memilih Teknologi Ini', 'Why These Technology Choices')}</h2>
          </div>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Keputusan', 'Decision')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Alasan', 'Reason')}</th>
                </tr>
              </thead>
              <tbody>
                {rationaleTable.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-xs">{r.decision}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{r.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Perbandingan', 'Comparison')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Keunggulan Kompetitif', 'Competitive Advantages')}</h2>
          </div>
          <div className="max-w-4xl mx-auto mb-10">
            <ul className="space-y-3">
              {[
                t('Terhubung ke data lokal Indonesia secara langsung - harga komoditas nasional/provinsi, data cuaca real-time, dan basis data tanaman.', 'Directly connected to local Indonesian data - national/provincial commodity prices, real-time weather, and plant databases.'),
                t('Dibangun khusus untuk Bahasa Indonesia dan konteks pertanian lokal - model utama disesuaikan (fine-tuned) untuk domain ini.', 'Built specifically for Bahasa Indonesia and local agricultural context - main model is fine-tuned for this domain.'),
                t('Kedaulatan dan privasi data - inferensi berjalan lokal, relevan untuk kepatuhan UU PDP.', 'Data sovereignty and privacy - local inference, relevant for PDP law compliance.'),
                t('Model biaya yang memungkinkan akses gratis untuk petani - tanpa biaya API per-permintaan.', 'Cost model enabling free access for farmers - no per-request API costs.'),
                t('Setiap jawaban punya jejak evaluasi dan audit - skor faithfulness/relevance dan log terstruktur.', 'Every answer has an evaluation and audit trail - faithfulness/relevance scores and structured logs.'),
                t('Tangguh terhadap koneksi tidak stabil - pesan offline tetap diproses saat bot kembali online.', 'Resilient to unstable connections - offline messages are processed when the bot comes back online.'),
                t('Bagian dari ekosistem terintegrasi - chatbot, dashboard, dan mesin wawasan berbagi fondasi data yang sama.', 'Part of an integrated ecosystem - chatbot, dashboard, and insight engines share the same data foundation.'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">&#10003;</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-bold text-shade-600 mb-4 text-center">{t('Perbandingan dengan Asisten AI Publik', 'Comparison with Public AI Assistants')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    {comparisonHeaders.map((h, i) => <th key={i} className="text-left py-3 px-4 font-semibold text-shade-600">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      {row.map((cell, j) => <td key={j} className="py-3 px-4 text-xs text-gray-600">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
              <p className="text-xs text-amber-800 leading-relaxed">
                {t('Asisten AI publik seperti ChatGPT dan Gemini unggul jauh dalam hal keluasan pengetahuan umum, kemampuan penalaran lintas-domain, dukungan bahasa yang lebih luas, dan skala pengguna - SUGI tidak mengklaim menandingi itu. Keunggulan SUGI bersifat spesialisasi vertikal yang sempit tapi dalam, untuk satu domain (pertanian) di satu konteks negara (Indonesia), bukan klaim superioritas kemampuan AI secara umum.', 'Public AI assistants like ChatGPT and Gemini are far superior in breadth of general knowledge, cross-domain reasoning, broader language support, and user scale - SUGI does not claim to match that. SUGI advantage is narrow but deep vertical specialization, for one domain (agriculture) in one country context (Indonesia), not a claim of general AI superiority.')}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Bukti Kinerja', 'Performance Evidence')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Metrik & Model', 'Metrics & Models')}</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {metricTable.map((m, i) => (
                <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{m.value}</div>
                  <div className="mt-1 text-xs text-gray-500">{m.metric}</div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Model', 'Model')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Peran', 'Role')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Suhu', 'Temp')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-shade-600">{t('Catatan', 'Notes')}</th>
                  </tr>
                </thead>
                <tbody>
                  {modelTable.map((m, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-xs">{m.model}</td>
                      <td className="py-3 px-4 text-gray-600 text-xs">{m.role}</td>
                      <td className="py-3 px-4 font-mono text-xs">{m.temp}</td>
                      <td className="py-3 px-4 text-gray-500 text-xs">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-3">{t('Diagram Lengkap', 'Full Diagrams')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">{t('Diagram Teknis Lengkap', 'Complete Technical Diagrams')}</h2>
            <p className="mt-4 text-gray-500">{t('Diagram arsitektur penuh untuk pembaca yang menginginkan detail implementasi tingkat source code.', 'Full architecture diagrams for readers who want implementation-level source code detail.')}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setTechExpanded(!techExpanded)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-left hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-shade-600">{t('Lihat Arsitektur Teknis Lengkap', 'View Full Technical Architecture')}</span>
                <span className={`transform transition-transform ${techExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </div>
            </button>
            {techExpanded && (
              <div className="mt-8 space-y-12">
                <div>
                  <h3 className="font-bold text-lg text-shade-600 mb-4">{t('Pipeline Pertanyaan (Lengkap)', 'Question Processing Pipeline (Full)')}</h3>
                  <PipelineDiagram />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-shade-600 mb-4">{t('Arsitektur Mesin Wawasan', 'Insight Engine Architecture')}</h3>
                  <InsightFlowDiagram />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-shade-600 mb-4">{t('Aliran Data End-to-End', 'End-to-End Data Flow')}</h3>
                  <FlowBox color="#2d6a4f" width="200px">
                    <div className="text-xs font-normal leading-relaxed">
                      <div className="font-bold text-sm mb-1">Data Sources</div>
                      CSV/XLSX + PDF + Open-Meteo + Perenual + MongoDB
                    </div>
                  </FlowBox>
                  <Arrow />
                  <FlowBox color="#7c3aed" width="200px">
                    <div className="text-xs font-normal leading-relaxed">
                      <div className="font-bold text-sm mb-1">Storage Layer</div>
                      ChromaDB (6 collections) + MongoDB (2 DBs)
                    </div>
                  </FlowBox>
                  <Arrow />
                  <FlowBox color="#6b7280" width="200px">
                    <div className="text-xs font-normal leading-relaxed">
                      <div className="font-bold text-sm mb-1">Processing</div>
                      Question Pipeline + 3 Insight Engines
                    </div>
                  </FlowBox>
                  <Arrow />
                  <FlowBox color="#b45309" width="200px">
                    <div className="text-xs font-normal leading-relaxed">
                      <div className="font-bold text-sm mb-1">Output</div>
                      CLI + Telegram Bot + MongoDB Insights
                    </div>
                  </FlowBox>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-shade-600 mb-4">{t('Detail Data Flywheel', 'Data Flywheel Detail')}</h3>
                  <FlywheelCycleDiagram />
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Tertarik? Coba Sendiri', 'Interested? Try It Yourself')}</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t('Uji sendiri chatbot SUGI AI di Telegram, atau hubungi tim kami untuk diskusi lebih lanjut.', 'Try the SUGI AI chatbot on Telegram yourself, or contact our team for further discussion.')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="https://t.me/sugi_demo_llmbot">{t('Coba di Telegram', 'Try on Telegram')}</Button>
              <Button variant="secondary" to="/#kontak">{t('Hubungi Kami', 'Contact Us')}</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}