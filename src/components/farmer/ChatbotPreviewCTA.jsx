import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../ui/Button'

export default function ChatbotPreviewCTA() {
  const { lang } = useLanguage()
  const isID = lang === 'id'
  const t = (id, en) => isID ? id : en

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-tint-100/20 to-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-shade-600">
            {t('Coba SUGI AI Sekarang di Telegram', 'Try SUGI AI Now on Telegram')}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            {t(
              'Gratis, tidak perlu instal aplikasi tambahan. Langsung tanya soal harga, cuaca, hama, atau cara tanam — dapat jawaban dalam hitungan detik.',
              'Free, no additional app installation needed. Ask about prices, weather, pests, or farming methods — get answers in seconds.'
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="/image/telegram-chat-preview.png"
              alt={t('Contoh percakapan dengan chatbot SUGI AI di Telegram', 'Example conversation with SUGI AI chatbot on Telegram')}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-xl overflow-hidden shadow-md border border-gray-100 mb-6">
              <img
                src="/image/telegram-qr.png"
                alt={t('Kode QR untuk mencoba chatbot SUGI AI di Telegram', 'QR code to try SUGI AI chatbot on Telegram')}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {t('Atau scan QR code untuk langsung chat', 'Or scan QR code to start chatting')}
            </p>
            <Button href="https://t.me/sugi_demo_llmbot">
              {t('Chat dengan SUGI AI di Telegram', 'Chat with SUGI AI on Telegram')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}