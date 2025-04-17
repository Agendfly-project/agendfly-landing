import type { Metadata } from 'next'
import './globals.css'
import CookieConsentWrapper from '@/components/cookie-consent-wrapper'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'AgendFly | Gestão Inteligente para Salões de Beleza',
  description: 'Automatize e otimize seus agendamentos com IA e integração WhatsApp. Sistema completo para salões e barbearias.',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/image.png' },
      { url: '/image.png', type: 'image/png' }
    ],
    apple: { url: '/image.png', type: 'image/png' }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/image.png" />
        <link rel="apple-touch-icon" href="/image.png" />
      </head>
      <body>
        {children}
        <CookieConsentWrapper />
        <Toaster />
      </body>
    </html>
  )
}
