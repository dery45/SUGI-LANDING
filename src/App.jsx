import { LanguageProvider } from './contexts/LanguageContext'
import AppRouter from './router/AppRouter'

export default function App() {
  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  )
}
