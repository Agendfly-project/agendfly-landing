"use client"

import { useState, useEffect } from "react"
import { toast } from "@/hooks/use-toast"

type ConsentStatus = "accepted" | "declined" | null

interface UseCookieConsentReturn {
  consentStatus: ConsentStatus
  acceptCookies: () => void
  declineCookies: () => void
}

export function useCookieConsent(): UseCookieConsentReturn {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null)

  useEffect(() => {
    // Verificar o consentimento do usuário no localStorage
    const storedConsent = localStorage.getItem("cookie-consent") as ConsentStatus
    if (storedConsent) {
      setConsentStatus(storedConsent)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setConsentStatus("accepted")
    
    // Mostrar toast de confirmação
    toast({
      title: "Cookies aceitos",
      description: "Obrigado por aceitar nossos cookies!",
      duration: 3000,
    })
    
    // Aqui você pode adicionar código para habilitar serviços analíticos
    // Por exemplo: inicializar Google Analytics, Facebook Pixel, etc.
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setConsentStatus("declined")
    
    // Aqui você pode adicionar código para garantir que nenhum cookie opcional seja carregado
  }

  return {
    consentStatus,
    acceptCookies,
    declineCookies,
  }
} 