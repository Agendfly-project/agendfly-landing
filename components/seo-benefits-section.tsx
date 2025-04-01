"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Globe, MapPin, Star, TrendingUp, Smartphone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SeoBenefitsSection() {
  return (
    <section className="py-20 bg-white" id="seo-benefits">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-agendafly-100 rounded-full mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-agendafly-main">
              <Search className="h-4 w-4 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl">
            Aumente sua Presença Online
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            O AgendFly ajuda seu salão a ser encontrado por mais clientes através de otimização para mecanismos de
            busca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Globe,
              title: "Presença Digital Fortalecida",
              description:
                "Tenha um site profissional integrado ao seu sistema de agendamentos, aumentando sua visibilidade online.",
            },
            {
              icon: MapPin,
              title: "SEO Local Otimizado",
              description: "Apareça nos resultados de busca quando clientes procurarem por salões na sua região.",
            },
            {
              icon: Star,
              title: "Gestão de Avaliações",
              description:
                "Colete e exiba avaliações positivas, melhorando sua reputação online e ranking nos buscadores.",
            },
            {
              icon: TrendingUp,
              title: "Análise de Desempenho",
              description: "Acompanhe métricas de tráfego e conversão para otimizar sua estratégia digital.",
            },
            {
              icon: Smartphone,
              title: "Experiência Mobile Perfeita",
              description:
                "Site responsivo e otimizado para dispositivos móveis, favorecendo seu posicionamento no Google.",
            },
            {
              icon: CheckCircle,
              title: "Perfil Google Meu Negócio",
              description: "Integração com Google Meu Negócio para exibir horários, serviços e facilitar agendamentos.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-agendafly-100 hover:border-agendafly-300 transition-colors hover:shadow-md">
                <CardContent className="p-6">
                  <div className="bg-agendafly-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-agendafly-main" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-agendafly-main hover:bg-agendafly-dark" asChild>
            <a
              href="https://wa.me/5551997976375?text=Olá!%20Gostaria%20de%20melhorar%20minha%20presença%20online%20com%20o%20AgendFly."
              target="_blank"
              rel="noopener noreferrer"
            >
              Melhorar minha presença online
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

