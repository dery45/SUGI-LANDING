import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SEOHead from '../components/ui/SEOHead'
import { team } from '../data/teamData'

/* Fixed 16:9 design stage (1920x1080), auto-scaled to fit any viewport.
   Nothing scrolls — the whole deck is always exactly one 16:9 frame.
   Photo blocks use flex-1 so they absorb every leftover pixel: zero whitespace. */
const DW = 1920
const DH = 1080

function useFitScale() {
  const [s, setS] = useState(() =>
    typeof window !== 'undefined' ? Math.min(window.innerWidth / DW, window.innerHeight / DH) : 1
  )
  useEffect(() => {
    const update = () => setS(Math.min(window.innerWidth / DW, window.innerHeight / DH))
    update()
    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
    }
  }, [])
  return s
}

/* Image with graceful fallback chain so the deck never breaks. */
function DeckImg({ sources, alt = '', className = '' }) {
  const [i, setI] = useState(0)
  const src = sources[Math.min(i, sources.length - 1)]
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      draggable={false}
      onError={() => { if (i < sources.length - 1) setI(i + 1) } }
    />
  )
}

const VALIDATION_SOURCES = ['/image/validation.png', '/image/dashboard-preview/farmer-dashboard.png', '/image/dashboard-preview/government-dashboard.png']

/* Auto-slideshow frames (1 detik per gambar) */
const SLIDES = [
  { src: '/image/dashboard-preview/farmer-market-Intelligence.png', pos: 'object-top', id: 'Dashboard Petani — Market Intelligence', en: 'Farmer Dashboard — Market Intelligence' },
  { src: '/image/dashboard-preview/goverment-policy-recomendation.png', pos: 'object-top', id: 'Dashboard Pemerintah — Rekomendasi Kebijakan', en: 'Government Dashboard — Policy Recommendations' },
  { src: '/image/dashboard-preview/government-chatbot-insight.png', pos: 'object-top', id: 'Chatbot Insight — Analitik Percakapan', en: 'Chatbot Insight — Conversation Analytics' },
  { src: '/image/dashboard-preview/farmer-lifecycle-management.png', pos: 'object-top', id: 'Lifecycle Management Petani', en: 'Farmer Lifecycle Management' },
  { src: '/image/dashboard-preview/farmer-pwa.png', pos: 'object-contain', id: 'SUGI Apps — PWA Lapangan', en: 'SUGI Apps — Field PWA' },
]

function Label({ children }) {
  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <span className="text-[19px] font-extrabold tracking-[0.2em] uppercase text-primary">{children}</span>
      <span className="flex-1 h-px bg-white/15" />
    </div>
  )
}

function Shot({ sources, caption, pos = 'object-center', onExpand }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-white/10 bg-shade-500 w-full h-full ${onExpand ? 'cursor-zoom-in group' : ''}`}
      onClick={onExpand ? () => onExpand() : undefined}
    >
      <DeckImg sources={sources} alt={caption} className={`w-full h-full object-cover ${pos}`} />
      <div className="absolute inset-x-0 bottom-0 px-3.5 py-2 bg-gradient-to-t from-black/90 to-transparent">
        <p className="text-[15px] font-bold leading-tight">{caption}</p>
      </div>
      {onExpand && (
        <span className="absolute top-2.5 right-2.5 rounded-lg bg-black/65 px-3 py-1.5 text-[13px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">⛶ Full</span>
      )}
    </div>
  )
}

export default function OnePage() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const t = (id, en) => (isID ? id : en)
  const scale = useFitScale()
  const [lightbox, setLightbox] = useState(null)
  const [pitchOpen, setPitchOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const paused = useRef(false)
  useEffect(() => {
    const id = setInterval(() => { if (!paused.current) setSlide((s) => (s + 1) % SLIDES.length) }, 3000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <>
      <SEOHead
        title={t('SUGI One Page — Pitch Deck 16:9', 'SUGI One Page — 16:9 Pitch Deck')}
        description={t('Seluruh informasi SUGI dalam satu bingkai 16:9 tanpa scroll.', 'All SUGI information in a single 16:9 frame, no scrolling.')}
      />
      <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center select-none">
        <div
          style={{ width: DW, height: DH, transform: `scale(${scale})` }}
          className="shrink-0 bg-shade-600 text-white overflow-hidden"
        >
          <div className="w-full h-full flex flex-col px-8 py-5">
            {/* HEADER */}
            <header className="h-[92px] shrink-0 flex items-center gap-5">
              <img src="/image/sugi-logo.png" alt="SUGI" className="h-[66px] brightness-0 invert" draggable={false} />
              <div>
                <p className="text-[36px] font-extrabold leading-none tracking-tight">SUGI <span className="text-primary">ECOSYSTEM</span></p>
                <p className="text-[15px] text-gray-400 mt-1.5 tracking-[0.24em] font-bold">ONE-PAGE PITCH DECK · HYBRID RAG + TELEGRAM</p>
              </div>
              <div className="flex-1" />
              <div className="flex items-center gap-2.5 shrink-0">
                <button onClick={() => setPitchOpen(true)} className="rounded-xl bg-[#FF0000] px-4 py-2.5 text-[15px] font-extrabold text-white hover:brightness-110 transition">▶ SUGI Pitch</button>
                <a href="https://dashboard.sugiecosystem.cloud/login" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-primary px-4 py-2.5 text-[15px] font-extrabold text-shade-600 hover:brightness-110 transition">SUGI Dash ↗</a>
                <a href="https://drive.google.com/file/d/19CNeUh6pOploMABiSzxTda_ht_2hQB1g/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/25 px-4 py-2.5 text-[15px] font-bold text-white hover:bg-white/10 transition">SUGI Deck ↗</a>
                <a href="https://sugiecosystem.cloud/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/25 px-4 py-2.5 text-[15px] font-bold text-white hover:bg-white/10 transition">Landing Page ↗</a>
                <a href="https://drive.google.com/file/d/1adLnvFMmy6x31wdw3NhKJmxdhqn8sL6i/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/25 px-4 py-2.5 text-[15px] font-bold text-white hover:bg-white/10 transition">Lampiran ↗</a>
              </div>
              <div className="text-right">
                <p className="text-[22px] font-bold leading-none">@sugi_demo_llmbot</p>
                <p className="text-[16px] text-primary font-bold mt-1.5">100% {t('GRATIS UNTUK PETANI KECIL', 'FREE FOR SMALLHOLDERS')}</p>
              </div>
            </header>

            {/* BODY — 3 columns, photos stretch to kill whitespace */}
            <div className="flex-1 min-h-0 flex gap-5 mt-4 overflow-hidden">
              {/* COL A — COVER */}
              <div className="w-[610px] shrink-0 flex flex-col gap-3.5 overflow-hidden">
                <h1 className="text-[80px] font-extrabold leading-[1.02] tracking-tight shrink-0">
                  {t('Transformasi Petani Cerdas', 'Smart Farmer Transformation')}
                  <span className="block text-primary">{t('Melalui AI + Telegram', 'Through AI + Telegram')}</span>
                </h1>
                <p className="text-[25px] text-gray-300 leading-snug shrink-0">
                  {t(
                    'Pendamping tani dan otak kedua bagi seluruh yang terlibat dalam pertanian — chatbot, SUGIDash, PWA.',
                    'Farming companion and second brain for everyone involved in agriculture — chatbot, SUGIDash, PWA.'
                  )}
                </p>
                <div className="flex-1 min-h-0 flex flex-col">
                  <Label>{t('Tim — BUTeam', 'Team — BUTeam')}</Label>
                  <div className="mt-2.5 grid grid-cols-2 grid-rows-2 gap-3 flex-1 min-h-0">
                    {team.map((m) => (
                      <div key={m.name} className="rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 flex items-center gap-3.5 min-w-0">
                        <img src={m.photo} alt={m.name} className="w-[88px] h-[88px] rounded-xl object-cover bg-black shrink-0" draggable={false} />
                        <div className="min-w-0">
                          <p className="text-[21px] font-bold leading-tight truncate">{m.name.split(' ').slice(0, 2).join(' ')}</p>
                          <p className="text-[15px] text-primary font-semibold leading-snug">{m.role[lang]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-5 items-center shrink-0">
                  <img src="/image/telegram-qr.png" alt="QR Telegram SUGI — klik untuk memperbesar" title={t('Klik untuk memperbesar', 'Click to enlarge')} onClick={() => setLightbox('/image/telegram-qr.png')} className="w-[230px] h-[230px] rounded-2xl bg-white p-2 shrink-0 cursor-zoom-in hover:ring-4 hover:ring-primary/60 transition" draggable={false} />
                  <div className="flex-1 flex flex-col justify-center gap-3 min-w-0">
                    <p className="text-[28px] font-extrabold leading-tight">Telegram — {t('Coba Gratis', 'Try Free')}</p>
                    <p className="text-[18px] text-gray-400 leading-snug">{t('Scan QR untuk chat dengan SUGI AI. Tanpa instalasi, offline catch-up.', 'Scan the QR to chat with SUGI AI. No install, offline catch-up.')}</p>
                    <span className="rounded-xl bg-primary px-4 py-3 text-center text-[24px] font-extrabold text-shade-600">@sugi_demo_llmbot</span>
                  </div>
                </div>
              </div>

              {/* COL B — PROBLEM + SOLUTION */}
              <div className="w-[630px] shrink-0 flex flex-col gap-3 overflow-hidden">
                <Label>{t('Masalah — Tervalidasi Lapangan', 'Problem — Field Validated')}</Label>
                <div className="flex-1 min-h-[240px]">
                  <Shot sources={VALIDATION_SOURCES} onExpand={() => setLightbox(VALIDATION_SOURCES[0])} caption={t('Tim SUGI melakukan validasi ke berbagai pihak terkait pertanian di Kabupaten Sleman', 'The SUGI Team validated with various agriculture stakeholders in Sleman Regency')} />
                </div>
                <div className="grid grid-cols-3 gap-3 shrink-0">
                  <div className="rounded-xl bg-primary/10 border border-primary/30 p-3 text-center">
                    <div className="text-[38px] font-extrabold text-primary leading-none">49,41%</div>
                    <div className="text-[16px] text-gray-300 leading-tight mt-1.5">{t('Kemiskinan Rumah Tangga dari sektor pertanian', 'Poor households from agriculture')}</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                    <div className="text-[38px] font-extrabold leading-none">66%</div>
                    <div className="text-[16px] text-gray-300 leading-tight mt-1.5">{t('Petani >45 thn, Sensus 2023', 'Farmers >45, Census 2023')}</div>
                  </div>
                  <div className="rounded-xl bg-amber-400/10 border border-amber-300/30 p-3 text-center">
                    <div className="text-[38px] font-extrabold text-accent leading-none">50/50</div>
                    <div className="text-[16px] text-gray-300 leading-tight mt-1.5">{t('Peluang berhasil saat petani trial-error', 'Success odds in farmer trial-error')}</div>
                  </div>
                </div>
                <div className="rounded-xl bg-amber-400/10 border border-amber-300/25 px-4 py-3 shrink-0">
                  <ul className="space-y-2.5 text-[19px] text-gray-300 leading-snug">
                    <li><span className="text-white font-bold">Marsudi (cabai, Turi):</span> {t('“Masa uji coba di awal adalah kesulitan terbesar — pernah rugi besar karena mengira cabai kurang pupuk, padahal pH tanahnya salah hingga tanaman rusak.”', '"Early trial periods are the hardest — huge losses mistaking pH problems for missing fertilizer until crops failed."')}</li>
                    <li><span className="text-white font-bold">Aziz (melon, Berbah):</span> {t('“Bertani melon di lahan berhasil 50/50, hidroponik pun 70/30 saat masih belajar — padahal saya anak petani sejak kecil.”', '"Field melon succeeds 50/50, hydroponic 70/30 while still learning — though I farmed since childhood."')}</li>
                    <li><span className="text-white font-bold">Nanang (PPHPM):</span> {t('“Harga tak stabil membuat petani hanya menebak-nebak tanaman yang menguntungkan — ditambah cuaca, hama, dan penyakit.”', '"Unstable prices force farmers to guess profitable crops — plus weather, pests, and disease."')}</li>
                  </ul>
                </div>
                <Label>{t('Solusi — Otak Kedua', 'Solution — Second Brain')}</Label>
                <div className="grid grid-cols-4 gap-2.5 shrink-0">
                  {[
                    ['🧠', t('Pendamping', 'Companion'), t('Baca lahan & cuaca', 'Reads land & weather')],
                    ['💬', t('Mendengar', 'Listening'), t('Real Time dari Lapangan', 'Real-time from the field')],
                    ['🔁', 'Flywheel', t('Belajar terus', 'Always learns')],
                    ['🔒', 'UU PDP', t('Berdaulat', 'Sovereign')],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="rounded-xl bg-white/5 border border-white/10 px-2 py-3 text-center">
                      <div className="text-[30px] leading-none">{icon}</div>
                      <p className="text-[17px] font-bold leading-tight mt-1.5">{title}</p>
                      <p className="text-[14px] text-gray-400 leading-tight mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* COL C — TECH · SCREENSHOTS · BUSINESS · ROADMAP · IMPACT · TEAM */}
              <div className="flex-1 min-w-0 flex flex-col gap-3 overflow-hidden">
                <div className="shrink-0">
                  <Label>SUGI Llama 3.6 · Hybrid RAG</Label>
                  <div className="mt-2.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3 flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[18px] text-gray-300 text-center leading-snug"><span className="text-primary font-extrabold">1.</span> {t('15 Dataset Bapanas', '15 Bapanas Datasets')}</div>
                      <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[18px] text-gray-300 text-center leading-snug"><span className="text-primary font-extrabold">2.</span> {t('10.000 Tumbuhan + Cuaca', '10,000 Plants + Weather')}</div>
                      <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[18px] text-gray-300 text-center leading-snug"><span className="text-primary font-extrabold">3.</span> {t('100+ Jurnal dan Penelitian', '100+ Journals & Research')}</div>
                      <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[18px] text-gray-300 text-center leading-snug"><span className="text-primary font-extrabold">4.</span> {t('Data Petani', 'Farmer Data')}</div>
                    </div>
                    <div className="self-center text-primary text-[22px] font-extrabold leading-none">↓</div>
                    <div className="rounded-xl bg-white px-4 py-2.5 flex items-center justify-center gap-4">
                      <img src="/image/sugi-logo.png" alt="SUGI AI" className="h-[38px]" draggable={false} />
                      <div className="text-left">
                        <p className="text-[24px] font-extrabold text-shade-600 leading-none">Llama 3.6</p>
                        <p className="text-[14px] font-bold text-shade-400 mt-1">Hybrid RAG · On-Premise</p>
                      </div>
                    </div>
                    <div className="self-center text-primary text-[22px] font-extrabold leading-none">↓</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg bg-accent/10 border border-accent/30 px-3 py-2 text-[18px] text-gray-200 text-center leading-snug"><span className="text-accent font-extrabold">1.</span> Market Intelligence</div>
                      <div className="rounded-lg bg-accent/10 border border-accent/30 px-3 py-2 text-[18px] text-gray-200 text-center leading-snug"><span className="text-accent font-extrabold">2.</span> {t('Rekomendasi kebijakan', 'Policy recs')}</div>
                      <div className="rounded-lg bg-accent/10 border border-accent/30 px-3 py-2 text-[18px] text-gray-200 text-center leading-snug"><span className="text-accent font-extrabold">3.</span> ChatBot + Insight</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-h-[150px] grid grid-cols-2 gap-3">
                  <div
                    className="cursor-zoom-in group"
                    onClick={() => setLightbox(SLIDES[slide].src)}
                    onMouseEnter={() => { paused.current = true }}
                    onMouseLeave={() => { paused.current = false }}
                    title={t('Klik untuk memperbesar', 'Click to enlarge')}
                  >
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-shade-500 w-full h-full">
                      {SLIDES.map((s, i) => (
                        <img
                          key={s.src}
                          src={s.src}
                          alt={t(s.id, s.en)}
                          draggable={false}
                          className={`absolute inset-0 w-full h-full ${s.pos} transition-opacity duration-700 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
                        />
                      ))}
                      <div className="absolute inset-x-0 bottom-0 px-3.5 py-2 bg-gradient-to-t from-black/90 to-transparent flex items-center gap-3">
                        <p className="text-[15px] font-bold leading-tight flex-1 truncate">{t(SLIDES[slide].id, SLIDES[slide].en)}</p>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {SLIDES.map((s, i) => (
                            <span key={s.src} className={`w-2 h-2 rounded-full ${i === slide ? 'bg-primary' : 'bg-white/30'}`} />
                          ))}
                        </div>
                      </div>
                      <span className="absolute top-2.5 right-2.5 rounded-lg bg-black/65 px-3 py-1.5 text-[13px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">⛶ Full</span>
                    </div>
                  </div>
                  <Shot sources={['/image/telegram-chat-preview.png', '/image/sugi-telegram-chatbot-logo.png']} onExpand={() => setLightbox('/image/telegram-chat-preview.png')} caption={t('Telegram Chatbot — gratis, instan', 'Telegram Chatbot — free, instant')} />
                </div>
                <div className="shrink-0">
                  <Label>{t('Dampak', 'Impact')}</Label>
                  <div className="mt-2.5 grid grid-cols-1 gap-3">
                  <div className="rounded-xl bg-white px-6 py-4 flex flex-col items-center justify-center text-center gap-1">
                    <span className="text-[72px] font-extrabold text-accent leading-none">15%</span>
                    <p className="text-[22px] font-bold text-shade-600 leading-tight">{t('Hemat pupuk & pestisida', 'Fertilizer savings')}</p>
                  </div>
                  <div className="rounded-xl bg-white px-6 py-4 flex flex-col items-center justify-center text-center gap-1">
                    <span className="text-[72px] font-extrabold text-accent leading-none">&lt;24 Jam</span>
                    <p className="text-[22px] font-bold text-shade-600 leading-tight">{t('Waktu respon lama → hitungan jam', 'Long response time → hours')}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={lightbox.includes('telegram-qr') ? 'bg-white p-8 rounded-3xl shadow-2xl cursor-default' : 'cursor-default'}
            >
              <img
                src={lightbox}
                alt="SUGI — full"
                className="max-w-[82vw] max-h-[76vh] object-contain rounded-2xl shadow-2xl"
                draggable={false}
              />
            </div>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Tutup"
              className="absolute top-5 right-6 w-[52px] h-[52px] rounded-full bg-white/10 hover:bg-white/25 border border-white/30 text-white text-[24px] font-bold leading-none transition"
            >
              ✕
            </button>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-lg bg-black/65 px-4 py-2 text-[14px] font-semibold text-gray-300">
              {t('Klik di luar gambar atau tekan ESC untuk menutup', 'Click outside or press ESC to close')}
            </span>
          </div>
        )}
        {pitchOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8">
            <div className="w-[86vw] max-w-[1500px]">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[18px] font-extrabold text-white">▶ SUGI Pitch</p>
                <button
                  onClick={() => setPitchOpen(false)}
                  className="rounded-xl bg-white/10 hover:bg-white/25 border border-white/30 px-5 py-2.5 text-[16px] font-bold text-white transition"
                >
                  ✕ {t('Tutup', 'Close')}
                </button>
              </div>
              <iframe
                src="https://www.youtube.com/embed/hi7bN0AcADU?autoplay=1&loop=1&playlist=hi7bN0AcADU&rel=0"
                title="SUGI Pitch"
                className="w-full aspect-video rounded-2xl shadow-2xl border border-white/20"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
