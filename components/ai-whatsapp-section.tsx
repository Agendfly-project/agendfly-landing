"use client"

import { motion } from "framer-motion"
import { Bot, Zap, Clock, CalendarCheck, BarChart4, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AiWhatsappSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-agendafly-50 to-white" id="ai-whatsapp">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block rounded-lg bg-agendafly-100 px-3 py-1 text-sm text-agendafly-main">
              Integração Exclusiva
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl">
              IA + WhatsApp: Revolucione seu Atendimento
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#0668E1] text-white text-xs font-medium px-2 py-1 rounded flex items-center">
                Provedor de Tecnologia Meta
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png"
                alt="META"
                className="h-5"
              />
            </div>
            <p className="text-gray-600 md:text-lg">
              Como Provedor de Tecnologia da Meta, oferecemos uma solução ágil, humanizada e inteligente. Com uma
              configuração rápida e simplificada, sua comunicação pelo WhatsApp se torna mais eficiente, garantindo
              praticidade para você e seus clientes.
            </p>

            <ul className="space-y-4">
              {[
                {
                  icon: Bot,
                  title: "Respostas Inteligentes",
                  description: "IA que entende e responde naturalmente às dúvidas dos clientes",
                },
                {
                  icon: Zap,
                  title: "Atendimento Instantâneo",
                  description: "Respostas imediatas 24/7, sem deixar clientes esperando",
                },
                {
                  icon: Clock,
                  title: "Economia de Tempo",
                  description: "Automatize tarefas repetitivas e foque no que realmente importa",
                },
                {
                  icon: BarChart4,
                  title: "IA Oráculo",
                  description: "Consulte relatórios e vendas através de perguntas em linguagem natural",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-agendafly-100 p-2 rounded-full">
                    <item.icon className="h-5 w-5 text-agendafly-main" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" className="bg-agendafly-main hover:bg-agendafly-dark" asChild>
              <a
                href="https://wa.me/5551997976375?text=Olá!%20Gostaria%20de%20conhecer%20a%20integração%20de%20IA%20com%20WhatsApp%20do%20AgendFly."
                target="_blank"
                rel="noopener noreferrer"
              >
                Conhecer a integração
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[350px]">
              <div className="absolute inset-0 bg-gradient-to-r from-agendafly-400 to-agendafly-main rounded-[40px] blur-xl opacity-20 transform -rotate-6"></div>
              <div className="relative bg-white border-8 border-gray-800 rounded-[40px] overflow-hidden shadow-xl">
                {/* WhatsApp Header */}
                <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-[#0c7d72]">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agendfly_isotipo_padr%C3%A3o_02-nbwgMMvPAb9bPzSBHcrW9gOfuHUboj.png"
                        alt="Salão Beleza Total"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-medium">Salão Beleza Total</div>
                      <div className="text-[#c4e3e0] text-xs">online</div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Background */}
                <div
                  className="p-4 space-y-4 h-[500px] overflow-y-auto"
                  style={{
                    backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5tXJ6jcFCVDHQsdk6mmLClA8OxkOjy.png")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "contain",
                  }}
                >
                  {/* Salon message */}
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                    <p className="text-gray-800 text-sm">
                      Olá! Bem-vindo ao Salão Beleza Total. Como posso ajudar você hoje?
                    </p>
                    <p className="text-gray-500 text-[10px] text-right mt-1">10:30</p>
                  </div>

                  {/* User message */}
                  <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-3 max-w-[80%] ml-auto shadow-sm">
                    <p className="text-gray-800 text-sm">Bom dia! Gostaria de agendar um corte de cabelo</p>
                    <p className="text-gray-500 text-[10px] text-right mt-1">10:31</p>
                  </div>

                  {/* Salon message */}
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                    <p className="text-gray-800 text-sm">
                      Claro! Para qual dia você gostaria de agendar seu corte de cabelo?
                    </p>
                    <p className="text-gray-500 text-[10px] text-right mt-1">10:31</p>
                  </div>

                  {/* User message */}
                  <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-3 max-w-[80%] ml-auto shadow-sm">
                    <p className="text-gray-800 text-sm">Amanhã às 14h, se tiver disponibilidade</p>
                    <p className="text-gray-500 text-[10px] text-right mt-1">10:32</p>
                  </div>

                  {/* Salon message with options */}
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                    <p className="text-gray-800 text-sm">
                      Perfeito! Temos horário disponível amanhã às 14h. Com qual profissional você prefere?
                    </p>
                    <div className="mt-2 space-y-2">
                      <div className="bg-gray-100 p-2 rounded border border-gray-200 text-sm text-gray-800">
                        Carlos (Especialista em Degradê)
                      </div>
                      <div className="bg-gray-100 p-2 rounded border border-gray-200 text-sm text-gray-800">
                        Marcos (Especialista em Cortes Clássicos)
                      </div>
                    </div>
                    <p className="text-gray-500 text-[10px] text-right mt-1">10:32</p>
                  </div>

                  {/* User message */}
                  <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-3 max-w-[80%] ml-auto shadow-sm">
                    <p className="text-gray-800 text-sm">Prefiro com o Carlos</p>
                    <p className="text-gray-500 text-[10px] text-right mt-1">10:33</p>
                  </div>

                  {/* Salon message with confirmation */}
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                    <p className="text-gray-800 text-sm">Ótima escolha! Seu agendamento foi confirmado:</p>
                    <div className="mt-2 bg-gray-100 p-3 rounded border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <CalendarCheck className="h-4 w-4 text-agendafly-main" />
                        <span className="font-medium text-sm text-gray-800">Corte de Cabelo</span>
                      </div>
                      <div className="text-xs text-gray-600">
                        <p>Data: Amanhã às 14:00</p>
                        <p>Profissional: Carlos</p>
                        <p>Duração: 30 minutos</p>
                        <p>Valor: R$ 45,00</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-[10px] text-right mt-1">10:33</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-agendafly-main rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-6 w-32 h-32 bg-agendafly-400 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

