"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Gratuito",
    description: "Ideal para começar",
    price: "R$ 0",
    period: "/mês",
    features: [
      "Sistema de Agendamento",
      "Gerenciamento de Produto e Comissão",
      "Até 3 funcionários",
      "Suporte por email",
    ],
    highlighted: false,
    cta: "Começar grátis",
    link: "https://wa.me/5551997976375?text=Olá!%20Gostaria%20de%20conhecer%20o%20plano%20Gratuito%20do%20AgendFly.",
  },
  {
    name: "Básico",
    description: "Para salões em crescimento",
    price: "R$ 59,90",
    period: "/mês",
    features: [
      "Sistema de Agendamento",
      "Gerenciamento de Produto e Comissão",
      "Até 6 funcionários",
      "Dashboard de vendas e comissões",
      "Suporte por email",
    ],
    highlighted: true,
    cta: "Escolher este plano",
    link: "https://wa.me/5551997976375?text=Olá!%20Tenho%20interesse%20no%20plano%20Básico%20do%20AgendFly.",
  },
  {
    name: "Premium",
    description: "Para salões profissionais",
    price: "Sob Consulta",
    period: "",
    features: [
      "Sistema de Agendamento",
      "Gerenciamento de Produto e Comissão",
      "Dashboard de vendas e comissões",
      "Suporte 24 horas",
      "WhatsApp bot para Atendimento Virtual",
      "IA para Recomendações e Relatórios",
    ],
    highlighted: false,
    cta: "Falar com vendas",
    link: "https://wa.me/5551997976375?text=Olá!%20Tenho%20interesse%20no%20plano%20Premium%20do%20AgendFly.",
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-white overflow-hidden" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl">Planos e Preços</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a transformar sua gestão hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <Card
                className={`h-full w-full flex flex-col border-agendafly-100 ${
                  plan.highlighted ? "border-agendafly-main shadow-lg" : "hover:shadow-md"
                } transition-shadow`}
              >
                {plan.highlighted && (
                  <div className="bg-agendafly-main text-white text-center py-1 text-sm font-medium">Mais Popular</div>
                )}
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-agendafly-main hover:bg-agendafly-dark"
                        : "bg-agendafly-100 text-agendafly-main hover:bg-agendafly-200"
                    }`}
                    asChild
                  >
                    <a href={plan.link} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


