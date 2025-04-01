"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Recursos", href: "#features" },
  { name: "IA & WhatsApp", href: "#ai-whatsapp" },
  { name: "IA Oráculo", href: "#ai-oracle" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Preços", href: "#pricing" },
  { name: "Depoimentos", href: "#testimonials" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agendfly_logo_padr%C3%A3o-KG7NnIANCJZJIvHSmjzC4xZlzeoQSe.png"
                alt="AgendFly Logo"
                className="h-10"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 flex-wrap justify-end">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-agendafly-main rounded-md transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Button className="bg-agendafly-main hover:bg-agendafly-dark whitespace-nowrap" asChild>
              <a href="https://wa.me/5551997976375" target="_blank" rel="noopener noreferrer">
                Solicitar demonstração
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <Link href="/" className="flex items-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agendfly_logo_padr%C3%A3o-KG7NnIANCJZJIvHSmjzC4xZlzeoQSe.png"
                      alt="AgendFly Logo"
                      className="h-8"
                    />
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Close">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col py-6 gap-1">
                  {navItems.map((item) => (
                    <SheetTrigger asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="px-4 py-3 text-base font-medium text-gray-700 hover:text-agendafly-main hover:bg-blue-50 rounded-md transition-colors"
                      >
                        {item.name}
                      </Link>
                    </SheetTrigger>
                  ))}
                </nav>
                <div className="mt-auto border-t py-6 space-y-3 w-full">
                  <Button className="w-full bg-agendafly-main hover:bg-agendafly-dark" asChild>
                    <a href="https://wa.me/5551997976375" target="_blank" rel="noopener noreferrer">
                      Solicitar demonstração
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

