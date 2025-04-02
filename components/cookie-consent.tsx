"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface CookieConsentProps {
  onAccept: () => void
  onDecline: () => void
}

export default function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificar se o usuário já deu consentimento
    const hasConsent = localStorage.getItem("cookie-consent")
    if (!hasConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
    onAccept()
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
    onDecline()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 md:p-6 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base">
          <p>
            Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossos termos.
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="border-white hover:bg-white text-gray-900 hover:text-gray-900 transition-colors"
            onClick={handleDecline}
          >
            Recusar
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 transition-colors"
            onClick={handleAccept}
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
} 