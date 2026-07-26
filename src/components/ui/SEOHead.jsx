import { Helmet } from 'react-helmet-async'

export default function SEOHead({ title, description }) {
  const base = 'SUGI — Ekosistem AI Pertanian Indonesia'
  const fullTitle = title ? `${title} | ${base}` : base

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Ekosistem AI Pertanian Terintegrasi untuk Petani, Pemerintah, dan Mitra Agribisnis Indonesia.'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Ekosistem AI Pertanian Terintegrasi untuk Indonesia.'} />
      <meta property="og:image" content="/image/main-image.jpg" />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
