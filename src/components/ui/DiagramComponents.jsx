import React from 'react'

const colors = {
  primary: '#2d6a4f',
  primaryLight: '#52b788',
  bg: '#f0fdf4',
  border: '#95d5b2',
  dark: '#1a3c2a',
  gray: '#6b7280',
  grayBg: '#f3f4f6',
  grayBorder: '#d1d5db',
  white: '#ffffff',
}

export function FlowBox({ children, color = colors.primary, width = 'auto', className = '' }) {
  return (
    <div
      className={`rounded-xl px-4 py-3 text-sm font-semibold text-center shadow-sm ${className}`}
      style={{
        background: `${color}10`,
        border: `2px solid ${color}`,
        color: color,
        minWidth: width === 'auto' ? '100px' : width,
      }}
    >
      {children}
    </div>
  )
}

export function Arrow({ label = '', direction = 'right' }) {
  const arrow = direction === 'right' ? '\u2192' : direction === 'down' ? '\u2193' : direction === 'left' ? '\u2190' : '\u2191'
  return (
    <div className="flex flex-col items-center gap-0.5">
      {label && <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{label}</span>}
      <span className="text-gray-400 text-xl leading-none">{arrow}</span>
    </div>
  )
}

export function FlowRow({ items, children, className = '' }) {
  const arr = items || React.Children.toArray(children)
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {arr.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {item}
          {i < arr.length - 1 && <Arrow />}
        </div>
      ))}
    </div>
  )
}

export function FlowColumn({ items, children, className = '' }) {
  const arr = items || React.Children.toArray(children)
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {arr.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-0">
          {item}
          {i < arr.length - 1 && <Arrow direction="down" />}
        </div>
      ))}
    </div>
  )
}

export function DecisionBox({ children, color = '#f59e0b' }) {
  return (
    <div
      className="rounded-xl px-4 py-3 text-sm font-semibold text-center shadow-sm"
      style={{
        background: `${color}15`,
        border: `2px solid ${color}`,
        color: color,
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        minWidth: '120px',
      }}
    >
      {children}
    </div>
  )
}

export function BranchRow({ left, right, leftLabel = '', rightLabel = '' }) {
  return (
    <div className="flex flex-col items-center">
      <Arrow direction="down" />
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-gray-500">{leftLabel}</span>
          {left}
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-gray-500">{rightLabel}</span>
          {right}
        </div>
      </div>
    </div>
  )
}

export function SubgraphBox({ title, children, color = '#6b7280' }) {
  return (
    <div
      className="rounded-xl p-4 w-full"
      style={{
        border: `2px dashed ${color}50`,
        background: `${color}05`,
      }}
    >
      {title && (
        <div
          className="text-[10px] font-semibold mb-3 text-center uppercase tracking-wider"
          style={{ color }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  )
}

export function FlywheelDiagram({ items, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <FlowBox color={colors.primary} width="140px">{item}</FlowBox>
          <Arrow label="" />
        </div>
      ))}
      <div
        className="rounded-full w-10 h-10 flex items-center justify-center text-lg"
        style={{ background: `${colors.primary}15`, border: `2px solid ${colors.primary}`, color: colors.primary }}
      >
        &#x21BB;
      </div>
    </div>
  )
}

export function TriadDiagram() {
  const box = colors.primary
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <FlowBox color={colors.gray} width="160px">
          <div className="text-xs font-normal leading-relaxed">
            <div className="font-bold text-sm mb-1" style={{ color: colors.gray }}>Data</div>
            MongoDB, dokumen CSV/PDF,<br />API Cuaca & Tanaman
          </div>
        </FlowBox>
        <Arrow />
        <FlowBox color={colors.primary} width="160px">
          <div className="text-xs font-normal leading-relaxed">
            <div className="font-bold text-sm mb-1" style={{ color: colors.primary }}>Algoritma</div>
            BM25, Cosine Similarity,<br />Reranking, Agregasi
          </div>
        </FlowBox>
        <Arrow />
        <FlowBox color="#7c3aed" width="160px">
          <div className="text-xs font-normal leading-relaxed">
            <div className="font-bold text-sm mb-1" style={{ color: '#7c3aed' }}>Model AI</div>
            Embedding, LLM Generatif,<br />Klasifikasi
          </div>
        </FlowBox>
        <Arrow />
        <FlowBox color="#b45309" width="160px">
          <div className="text-xs font-normal leading-relaxed">
            <div className="font-bold text-sm mb-1" style={{ color: '#b45309' }}>Output</div>
            Jawaban, Wawasan,<br />Rekomendasi
          </div>
        </FlowBox>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
        <Arrow direction="down" />
        <span>umpan balik (memori, riwayat)</span>
        <Arrow direction="right" />
      </div>
    </div>
  )
}

export function PipelineDiagram() {
  return (
    <FlowColumn>
      <FlowBox color={colors.primary}>Pengguna bertanya di Telegram/CLI</FlowBox>
      <DecisionBox color="#f59e0b">Pemeriksaan Cakupan Pertanian</DecisionBox>
      <BranchRow
        left={<FlowBox color="#ef4444" width="120px">Pesan Penolakan</FlowBox>}
        right={<FlowBox color={colors.primary} width="120px">Penulisan Ulang Pertanyaan</FlowBox>}
        leftLabel="Ditolak"
        rightLabel="Diizinkan"
      />
      <FlowBox color={colors.primary}>Deteksi Topik Tanaman / Cuaca</FlowBox>
      <FlowBox color={colors.primary}>Pengambilan Hybrid: BM25 + Vector</FlowBox>
      <FlowBox color={colors.primary}>Reranking Cross-Encoder</FlowBox>
      <FlowBox color={colors.primary}>Penyisipan Memori Percakapan</FlowBox>
      <FlowBox color={colors.primary}>Generasi Jawaban oleh LLM</FlowBox>
      <FlowBox color={colors.primary}>Evaluasi Otomatis Kualitas Jawaban</FlowBox>
      <FlowBox color={colors.primary}>Simpan Log + Perbarui Memori</FlowBox>
      <FlowBox color={colors.dark} width="140px">Jawaban ke Pengguna</FlowBox>
    </FlowColumn>
  )
}

export function HybridRagDiagram() {
  return (
    <div className="flex flex-col items-center gap-2">
      <FlowBox color={colors.primary} width="160px">Pertanyaan yang Sudah Ditulis Ulang</FlowBox>
      <Arrow direction="down" />
      <div className="flex gap-6 items-start">
        <FlowBox color="#2563eb" width="140px">Pencarian Kata Kunci (BM25)</FlowBox>
        <FlowBox color="#7c3aed" width="140px">Pencarian Makna (Vector Embedding)</FlowBox>
      </div>
      <Arrow direction="down" />
      <FlowBox color={colors.primary} width="160px">Gabungan Berbobot (0.5 : 0.5)</FlowBox>
      <Arrow direction="down" />
      <FlowBox color="#0891b2" width="160px">Cross-Encoder Reranker</FlowBox>
      <Arrow direction="down" />
      <FlowBox color={colors.dark} width="160px">5 Dokumen Paling Relevan</FlowBox>
      <Arrow direction="down" />
      <FlowBox color={colors.primary} width="140px">LLM Menyusun Jawaban</FlowBox>
    </div>
  )
}

export function InsightFlowDiagram() {
  return (
    <div className="flex flex-col items-center gap-3">
      <SubgraphBox title="Sumber Data" color={colors.gray}>
        <FlowRow>
          <FlowBox color={colors.gray} width="140px">MongoDB Data Ketahanan Pangan</FlowBox>
          <FlowBox color={colors.gray} width="140px">ChromaDB Basis Pengetahuan RAG</FlowBox>
          <FlowBox color={colors.gray} width="140px">ChromaDB Data Cuaca</FlowBox>
          <FlowBox color={colors.gray} width="140px">ChromaDB Memori Wawasan Sebelumnya</FlowBox>
        </FlowRow>
      </SubgraphBox>
      <Arrow direction="down" label="Agregasi & Ringkasan Data" />
      <FlowBox color={colors.primary} width="180px">LLM Menyusun Narasi Wawasan</FlowBox>
      <Arrow direction="down" />
      <DecisionBox color="#f59e0b">Validasi Otomatis: bahasa, panjang, format</DecisionBox>
      <BranchRow
        left={<FlowBox color="#ef4444" width="120px">Gagal, &lt; 3x percobaan</FlowBox>}
        right={<FlowBox color={colors.primary} width="160px">Simpan ke MongoDB + ChromaDB</FlowBox>}
        leftLabel="Gagal"
        rightLabel="Lolos"
      />
      <Arrow direction="down" label="disimpan sebagai konteks masa depan" />
      <FlowBox color={colors.gray} width="140px">ChromaDB Memori Wawasan Sebelumnya</FlowBox>
    </div>
  )
}

export function FlywheelCycleDiagram() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <FlowBox color={colors.primary} width="140px">Wawasan/Percakapan Baru Dihasilkan</FlowBox>
      <Arrow />
      <FlowBox color={colors.primary} width="160px">Disimpan sebagai Memori di ChromaDB</FlowBox>
      <Arrow />
      <FlowBox color={colors.primary} width="160px">Wawasan Berikutnya Membaca Memori sebagai Konteks</FlowBox>
      <Arrow />
      <FlowBox color={colors.primary} width="160px">Jawaban/Wawasan Baru Jadi Lebih Konsisten & Relevan</FlowBox>
      <div
        className="rounded-full w-9 h-9 flex items-center justify-center text-base shrink-0"
        style={{ background: `${colors.primary}15`, border: `2px solid ${colors.primary}`, color: colors.primary }}
      >
        &#x21BB;
      </div>
    </div>
  )
}