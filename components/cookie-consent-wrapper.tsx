"use client"

import { useCookieConsent } from "@/hooks/use-cookie-consent"
import CookieConsent from "./cookie-consent"

export default function CookieConsentWrapper() {
  const { consentStatus, acceptCookies, declineCookies } = useCookieConsent()

  // Se o usuário já deu consentimento, não mostra o banner
  if (consentStatus) return null

  return (
    <CookieConsent
      onAccept={acceptCookies}
      onDecline={declineCookies}
    />
  )
} 