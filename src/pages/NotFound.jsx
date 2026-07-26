import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SEOHead from '../components/ui/SEOHead'

export default function NotFound() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  return (
    <>
      <SEOHead title={isID ? 'Halaman Tidak Ditemukan' : 'Page Not Found'} description="404" />
    <div className="min-h-screen flex items-center justify-center bg-shade-600">
      <Container className="text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <p className="mt-4 text-xl text-gray-300">
          {isID ? 'Halaman Tidak Ditemukan' : 'Page Not Found'}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          {isID
            ? 'Halaman yang Anda cari tidak tersedia.'
            : 'The page you\'re looking for doesn\'t exist.'}
        </p>
        <div className="mt-8">
          <Button to="/">
            {isID ? 'Kembali ke Beranda' : 'Back to Home'}
          </Button>
        </div>
      </Container>
    </div>
    </>
  )
}
