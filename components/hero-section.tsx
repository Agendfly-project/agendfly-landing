"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, MessageSquareText, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-agendafly-main">
                AgendFly
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-medium text-gray-700">
              Automatizar e otimizar seus agendamentos, de forma simples e fácil!
            </p>
            <p className="text-gray-600 md:text-lg">
              Simplifique a gestão da sua agenda, conectando você diretamente aos seus clientes pelo WhatsApp com o
              poder da Inteligência Artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button size="lg" className="bg-agendafly-main hover:bg-agendafly-dark" asChild>
                <a href="https://wa.me/5551997976375" target="_blank" rel="noopener noreferrer">
                  Solicitar demonstração
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-agendafly-main text-agendafly-main" asChild>
                <a href="#features">Conhecer recursos</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-agendafly-100">
              <div className="absolute top-0 left-0 right-0 h-12 bg-agendafly-main flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white text-sm ml-4">AgendFly Dashboard</div>
              </div>
              <div className="pt-12 p-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-agendafly-50 p-4 rounded-lg flex flex-col items-center justify-center">
                    <Calendar className="h-8 w-8 text-agendafly-main mb-2" />
                    <span className="text-sm font-medium text-gray-700">Agendamentos</span>
                    <span className="text-xl font-bold text-agendafly-main">24</span>
                  </div>
                  <div className="bg-agendafly-50 p-4 rounded-lg flex flex-col items-center justify-center">
                    <MessageSquareText className="h-8 w-8 text-agendafly-main mb-2" />
                    <span className="text-sm font-medium text-gray-700">Mensagens</span>
                    <span className="text-xl font-bold text-agendafly-main">18</span>
                  </div>
                  <div className="bg-agendafly-50 p-4 rounded-lg flex flex-col items-center justify-center">
                    <Sparkles className="h-8 w-8 text-agendafly-main mb-2" />
                    <span className="text-sm font-medium text-gray-700">IA Ativa</span>
                    <span className="text-xl font-bold text-green-600">Sim</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Próximos agendamentos</span>
                    <span className="text-agendafly-main text-sm">Ver todos</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { time: "09:30", name: "Maria Silva", service: "Corte de Cabelo" },
                      { time: "11:00", name: "João Santos", service: "Barba" },
                      { time: "14:15", name: "Ana Oliveira", service: "Coloração" },
                    ].map((appointment, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-2 bg-white rounded border border-gray-100"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded text-sm">
                            {appointment.time}
                          </div>
                          <div>
                            <div className="font-medium">{appointment.name}</div>
                            <div className="text-sm text-gray-500">{appointment.service}</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600">
                          Detalhes
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-agendafly-main rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

