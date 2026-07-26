import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgressIndicator from '../components/ui/ScrollProgressIndicator'
import PageTransitionWrapper from '../components/ui/PageTransitionWrapper'

import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Problem from '../pages/Problem'
import Solution from '../pages/Solution'
import VisionMission from '../pages/VisionMission'
import Ecosystem from '../pages/Ecosystem'
import Features from '../pages/Features'
import AITechnology from '../pages/AITechnology'
import Team from '../pages/Team'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import NotFound from '../pages/NotFound'

const ProductIndex = lazy(() => import('../pages/products/ProductIndex'))
const TelegramChatbot = lazy(() => import('../pages/products/TelegramChatbot'))
const FarmerSolution = lazy(() => import('../pages/products/FarmerSolution'))
const GovernmentSolution = lazy(() => import('../pages/products/GovernmentSolution'))
const FarmerDashboard = lazy(() => import('../pages/products/FarmerDashboard'))
const GovernmentDashboard = lazy(() => import('../pages/products/GovernmentDashboard'))
const MarketIntelligence = lazy(() => import('../pages/products/MarketIntelligence'))
const PolicyRecommendation = lazy(() => import('../pages/products/PolicyRecommendation'))
const ChatbotInsight = lazy(() => import('../pages/products/ChatbotInsight'))
const DailyInsight = lazy(() => import('../pages/products/DailyInsight'))
const AICopilot = lazy(() => import('../pages/products/AICopilot'))
const AIArchitecture = lazy(() => import('../pages/products/AIArchitecture'))

function SuspenseWrapper({ children }) {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      {children}
    </Suspense>
  )
}

function AnimatedPage({ children }) {
  return <PageTransitionWrapper>{children}</PageTransitionWrapper>
}

export default function AppRouter() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgressIndicator />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/tentang-kami" element={<AnimatedPage><AboutUs /></AnimatedPage>} />
            <Route path="/masalah" element={<AnimatedPage><Problem /></AnimatedPage>} />
            <Route path="/solusi" element={<AnimatedPage><Solution /></AnimatedPage>} />
            <Route path="/visi-misi" element={<AnimatedPage><VisionMission /></AnimatedPage>} />
            <Route path="/ekosistem" element={<AnimatedPage><Ecosystem /></AnimatedPage>} />
            <Route path="/fitur" element={<AnimatedPage><Features /></AnimatedPage>} />
            <Route path="/teknologi-ai" element={<AnimatedPage><AITechnology /></AnimatedPage>} />
            <Route path="/tim" element={<AnimatedPage><Team /></AnimatedPage>} />
            <Route path="/kontak" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/faq" element={<AnimatedPage><FAQ /></AnimatedPage>} />

            <Route path="/produk" element={<SuspenseWrapper><AnimatedPage><ProductIndex /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/chatbot-telegram" element={<SuspenseWrapper><AnimatedPage><TelegramChatbot /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/solusi-petani" element={<SuspenseWrapper><AnimatedPage><FarmerSolution /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/solusi-pemerintah" element={<SuspenseWrapper><AnimatedPage><GovernmentSolution /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/dashboard-petani" element={<SuspenseWrapper><AnimatedPage><FarmerDashboard /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/dashboard-pemerintah" element={<SuspenseWrapper><AnimatedPage><GovernmentDashboard /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/market-intelligence" element={<SuspenseWrapper><AnimatedPage><MarketIntelligence /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/rekomendasi-kebijakan" element={<SuspenseWrapper><AnimatedPage><PolicyRecommendation /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/chatbot-insight" element={<SuspenseWrapper><AnimatedPage><ChatbotInsight /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/daily-insight" element={<SuspenseWrapper><AnimatedPage><DailyInsight /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/ai-copilot" element={<SuspenseWrapper><AnimatedPage><AICopilot /></AnimatedPage></SuspenseWrapper>} />
            <Route path="/produk/arsitektur-ai" element={<SuspenseWrapper><AnimatedPage><AIArchitecture /></AnimatedPage></SuspenseWrapper>} />

            <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
