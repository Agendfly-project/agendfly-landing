import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AiWhatsappSection from "@/components/ai-whatsapp-section"
import AiOracleSection from "@/components/ai-oracle-section"
import DashboardSection from "@/components/dashboard-section"
import SalesBoostSection from "@/components/sales-boost-section"
import SeoBenefitsSection from "@/components/seo-benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import CtaSection from "@/components/cta-section"
import FloatingCta from "@/components/floating-cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AgendFly | Gestão Inteligente para Salões de Beleza",
  description:
    "Automatize e otimize seus agendamentos com IA e integração WhatsApp. Sistema completo para salões e barbearias.",
  keywords: "agendamento online, salão de beleza, barbearia, inteligência artificial, whatsapp, gestão de salão",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white max-w-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AiWhatsappSection />
      <AiOracleSection />
      <DashboardSection />
      <SalesBoostSection />
      <SeoBenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <FloatingCta />
      <Footer />
    </div>
  )
}

