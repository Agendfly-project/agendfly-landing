"use client"

import { motion } from "framer-motion"
import { Calendar, Package, Scissors, Users, BarChart3, DollarSign, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Calendar,
    title: "Agendamento",
    description: "Sistema intuitivo para gerenciar todos os agendamentos do seu salão em um só lugar.",
  },
  {
    icon: Package,
    title: "Cadastro de Produtos",
    description: "Gerencie seu estoque e produtos com facilidade, com controle de inventário integrado.",
  },
  {
    icon: Scissors,
    title: "Cadastro de Serviços",
    description: "Organize todos os serviços oferecidos com preços, duração e detalhes personalizados.",
  },
  {
    icon: Users,
    title: "Gestão de Funcionários",
    description: "Cadastre barbeiros e profissionais com suas especialidades e horários disponíveis.",
  },
  {
    icon: Calendar,
    title: "Calendário com Agenda",
    description: "Visualize toda a agenda do salão em um calendário intuitivo e fácil de usar.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de Vendas",
    description: "Acompanhe o desempenho do seu negócio com gráficos e métricas em tempo real.",
  },
  {
    icon: DollarSign,
    title: "Comissão por Funcionário",
    description: "Calcule automaticamente as comissões de cada profissional baseado em seu desempenho.",
  },
  {
    icon: ShoppingBag,
    title: "Comissão por Produto/Serviço",
    description: "Configure comissões específicas para cada produto ou serviço oferecido.",
  },
]

// Modificar o container e item para adicionar efeitos mais tecnológicos
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl">
            Recursos Completos para seu Salão
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Tudo o que você precisa para gerenciar seu salão de beleza ou barbearia em uma única plataforma.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-agendafly-100 group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-agendafly-200/50 hover:-translate-y-1 hover:border-agendafly-300">
                <div className="absolute inset-0 bg-gradient-to-r from-agendafly-500/5 to-agendafly-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-agendafly-main/20 via-agendafly-400/20 to-agendafly-main/20 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:duration-200"></div>
                <CardHeader className="pb-2 relative">
                  <feature.icon className="h-8 w-8 text-agendafly-main mb-2 group-hover:text-agendafly-400 transition-colors duration-300" />
                  <CardTitle className="text-xl group-hover:text-agendafly-dark transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

