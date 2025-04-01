"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietário da Barbearia Vintage",
    content:
      "O AgendFly revolucionou meu negócio. A integração com WhatsApp e IA reduziu em 70% o tempo gasto com agendamentos. Meus clientes adoram a facilidade de marcar horários a qualquer momento.",
    avatar: "/placeholder.svg?height=80&width=80",
    stars: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Gerente do Salão Beleza Total",
    content:
      "Desde que implementamos o AgendFly, nossa taxa de agendamentos aumentou significativamente. A IA responde às dúvidas dos clientes mesmo quando estamos fechados, o que melhorou muito nossa conversão.",
    avatar: "/placeholder.svg?height=80&width=80",
    stars: 5,
  },
  {
    name: "Roberto Santos",
    role: "Proprietário do Studio Hair",
    content:
      "O dashboard de vendas e comissões me dá uma visão clara do desempenho do meu negócio. Consigo identificar tendências e tomar decisões baseadas em dados reais. Recomendo fortemente!",
    avatar: "/placeholder.svg?height=80&width=80",
    stars: 4,
  },
  {
    name: "Juliana Costa",
    role: "Proprietária do Espaço Beleza",
    content:
      "A facilidade de uso e a interface intuitiva do AgendFly fizeram toda a diferença para minha equipe. Em apenas uma semana, todos já estavam utilizando o sistema com maestria.",
    avatar: "/placeholder.svg?height=80&width=80",
    stars: 5,
  },
  {
    name: "Marcelo Alves",
    role: "Gerente do Barber Shop Elite",
    content:
      "O suporte ao cliente é excepcional. Sempre que tive dúvidas, a equipe do AgendFly me atendeu prontamente. A ferramenta é completa e atende todas as necessidades do meu negócio.",
    avatar: "/placeholder.svg?height=80&width=80",
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Autoplay functionality
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }

    startAutoplay()

    // Stop autoplay when user interacts with testimonials
    const testimonialsElement = testimonialsRef.current
    if (testimonialsElement) {
      testimonialsElement.addEventListener("mouseenter", stopAutoplay)
      testimonialsElement.addEventListener("mouseleave", startAutoplay)
    }

    return () => {
      stopAutoplay()
      if (testimonialsElement) {
        testimonialsElement.removeEventListener("mouseenter", stopAutoplay)
        testimonialsElement.removeEventListener("mouseleave", startAutoplay)
      }
    }
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  // For desktop, show 3 testimonials at once
  const visibleTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ]

  return (
    <section className="py-20 bg-agendafly-50" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Veja como o AgendFly está transformando a gestão de salões e barbearias por todo o Brasil.
          </p>
        </div>

        <div className="relative" ref={testimonialsRef}>
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-agendafly-50 border-agendafly-100"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5 text-agendafly-main" />
              <span className="sr-only">Anterior</span>
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-agendafly-50 border-agendafly-100"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5 text-agendafly-main" />
              <span className="sr-only">Próximo</span>
            </Button>
          </div>

          {/* Testimonials */}
          <div className="mx-6">
            <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-6`}>
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-agendafly-100 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="relative mb-6">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-200 opacity-50" />
                        <p className="text-gray-700 italic relative z-10 pl-4">"{testimonial.content}"</p>
                      </div>

                      <div className="flex items-center gap-3 mt-4">
                        <Avatar className="h-12 w-12 border-2 border-agendafly-100">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="text-sm font-bold">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-agendafly-main text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ||
                  (index === (currentIndex + 1) % testimonials.length && !isMobile) ||
                  (index === (currentIndex + 2) % testimonials.length && !isMobile)
                    ? "bg-agendafly-main"
                    : "bg-agendafly-200"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

