import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SEOHead from '../components/ui/SEOHead'
import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  return (
    <>
      <SEOHead title={isID ? 'Hubungi Kami' : 'Contact Us'} description={isID ? 'Hubungi tim SUGI untuk pertanyaan, kemitraan, atau demo.' : 'Contact the SUGI team for questions, partnerships, or demos.'} />
      <Section className="pt-28">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            {isID ? 'Hubungi Kami' : 'Contact Us'}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {isID
              ? 'Ada pertanyaan atau ingin bermitra? Kami siap mendengar.'
              : 'Have questions or want to partner? We\'d love to hear from you.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card>
            <h2 className="text-lg font-bold text-shade-600 mb-6">
              {isID ? 'Kirim Pesan' : 'Send a Message'}
            </h2>
            <ContactForm />
          </Card>

          <div className="space-y-6">
            <Card>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/image/telegram-qr.png"
                  alt="Telegram QR"
                  className="w-40 h-40 mb-4"
                />
                <p className="text-sm text-gray-500 mb-4">
                  {isID
                    ? 'Atau coba langsung SUGI AI di Telegram'
                    : 'Or try SUGI AI directly on Telegram'}
                </p>
                <Button href="https://t.me/sugi_demo_llmbot">
                  {isID ? 'Mulai Chat' : 'Start Chat'}
                </Button>
              </div>
            </Card>

            <Card>
              <h3 className="font-bold text-shade-600 mb-3">
                {isID ? 'Informasi Lainnya' : 'Other Information'}
              </h3>
              <div className="space-y-3 text-sm text-gray-500">
                <p>
                  <span className="font-medium text-shade-600">
                    {isID ? 'Telegram Bot:' : 'Telegram Bot:'}
                  </span>{' '}
                  <a
                    href="https://t.me/sugi_demo_llmbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @sugi_demo_llmbot
                  </a>
                </p>
                <p>
                  <span className="font-medium text-shade-600">
                    {isID ? 'Lokasi:' : 'Location:'}
                  </span>{' '}
                  {isID ? 'Indonesia' : 'Indonesia'}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {isID
                    ? 'SUGI adalah proyek hasil kolaborasi pengembangan independent. Untuk pertanyaan kemitraan, silakan hubungi melalui form di samping.'
                    : 'SUGI is an independent development collaboration project. For partnership inquiries, please contact us via the form.'}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
    </>
  )
}
