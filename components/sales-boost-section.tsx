"use client"

import { motion } from "framer-motion"
import { ShoppingBag, TrendingUp, MessageSquare, Clock, Repeat, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SalesBoostSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-agendafly-50 to-white" id="sales-boost">
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
              Aumente suas Vendas
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl">
              Transforme Agendamentos em Vendas
            </h2>
            <p className="text-gray-600 md:text-lg">
              O AgendFly não é apenas um sistema de agendamentos, é uma ferramenta completa para impulsionar suas vendas
              e fidelizar clientes.
            </p>

            <ul className="space-y-4">
              {[
                {
                  icon: ShoppingBag,
                  title: "Venda Cruzada Inteligente",
                  description: "IA sugere produtos complementares aos serviços agendados, aumentando o ticket médio",
                },
                {
                  icon: TrendingUp,
                  title: "Campanhas Personalizadas",
                  description: "Crie promoções baseadas no histórico e preferências de cada cliente",
                },
                {
                  icon: MessageSquare,
                  title: "Comunicação Automatizada",
                  description: "Lembretes e ofertas especiais enviados no momento certo via WhatsApp",
                },
                {
                  icon: Clock,
                  title: "Redução de No-shows",
                  description: "Confirmações automáticas reduzem faltas em até 85%, maximizando sua receita",
                },
                {
                  icon: Repeat,
                  title: "Retenção de Clientes",
                  description: "Lembretes inteligentes para reagendamento após o período ideal para cada serviço",
                },
                {
                  icon: Gift,
                  title: "Programa de Fidelidade",
                  description: "Sistema de pontos e recompensas que incentiva o retorno dos clientes",
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

            <div className="pt-4">
              <Button size="lg" className="bg-agendafly-main hover:bg-agendafly-dark" asChild>
                <a
                  href="https://wa.me/5551997976375?text=Olá!%20Gostaria%20de%20saber%20como%20aumentar%20minhas%20vendas%20com%20o%20AgendFly."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aumentar minhas vendas
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-agendafly-400 to-agendafly-main rounded-xl blur-xl opacity-20 transform -rotate-6"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border border-agendafly-100">
                <div className="bg-agendafly-main p-4 text-white">
                  <h3 className="font-bold text-xl">Resultados Reais</h3>
                  <p className="text-blue-100">Impacto do AgendFly nos negócios</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-agendafly-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-agendafly-main">+32%</div>
                      <div className="text-sm text-gray-600">Aumento em Vendas</div>
                    </div>
                    <div className="bg-agendafly-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-agendafly-main">-85%</div>
                      <div className="text-sm text-gray-600">Redução em No-shows</div>
                    </div>
                    <div className="bg-agendafly-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-agendafly-main">+28%</div>
                      <div className="text-sm text-gray-600">Ticket Médio</div>
                    </div>
                    <div className="bg-agendafly-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-agendafly-main">+65%</div>
                      <div className="text-sm text-gray-600">Retenção de Clientes</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Vendas de Produtos</span>
                        <span className="text-agendafly-main">+45%</span>
                      </div>
                      <div className="w-full h-2 bg-agendafly-100 rounded-full overflow-hidden">
                        <div className="h-full bg-agendafly-main rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Agendamentos Online</span>
                        <span className="text-agendafly-main">+78%</span>
                      </div>
                      <div className="w-full h-2 bg-agendafly-100 rounded-full overflow-hidden">
                        <div className="h-full bg-agendafly-main rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Satisfação do Cliente</span>
                        <span className="text-agendafly-main">+92%</span>
                      </div>
                      <div className="w-full h-2 bg-agendafly-100 rounded-full overflow-hidden">
                        <div className="h-full bg-agendafly-main rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-agendafly-50 p-4 rounded-lg border border-agendafly-100">
                    <p className="text-gray-700 italic">
                      "Desde que implementamos o AgendFly, nossas vendas de produtos aumentaram em 45% e a taxa de
                      retorno dos clientes melhorou significativamente."
                    </p>
                    <div className="mt-2 text-sm text-gray-600">— Carlos Mendes, Barbearia Vintage</div>
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

