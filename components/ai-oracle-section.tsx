"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Send, BarChart2, PieChart, TrendingUp, Users, Calendar, DollarSign } from "lucide-react"

// Sample questions that business owners might ask
const sampleQuestions = [
  "Qual foi o faturamento do mês passado?",
  "Quais são os serviços mais vendidos?",
  "Qual profissional teve mais agendamentos?",
  "Qual o lucro da última semana?",
  "Qual o ticket médio por cliente?",
  "Quais horários têm mais agendamentos?",
]

// Sample responses with visualizations
const responses = {
  "Qual foi o faturamento do mês passado?": {
    text: "O faturamento do mês passado foi de R$ 28.450,00, representando um aumento de 12% em relação ao mês anterior.",
    chartType: "bar",
    data: [18500, 21300, 25400, 28450],
    labels: ["Abril", "Maio", "Junho", "Julho"],
    icon: BarChart2,
    color: "blue",
  },
  "Quais são os serviços mais vendidos?": {
    text: "Os serviços mais vendidos no último mês foram: 1. Corte Masculino (32%), 2. Barba (24%), 3. Coloração (18%), 4. Hidratação (15%), 5. Outros (11%).",
    chartType: "pie",
    data: [32, 24, 18, 15, 11],
    labels: ["Corte Masculino", "Barba", "Coloração", "Hidratação", "Outros"],
    icon: PieChart,
    color: "green",
  },
  "Qual profissional teve mais agendamentos?": {
    text: "Carlos Silva foi o profissional com mais agendamentos (78), seguido por Ana Oliveira (65) e Marcos Santos (52).",
    chartType: "bar",
    data: [78, 65, 52, 43, 38],
    labels: ["Carlos", "Ana", "Marcos", "Juliana", "Roberto"],
    icon: Users,
    color: "purple",
  },
  "Qual o lucro da última semana?": {
    text: "O lucro da última semana foi de R$ 8.320,00, com margem de 42% sobre o faturamento total de R$ 19.810,00.",
    chartType: "line",
    data: [1250, 1480, 1320, 1100, 1650, 1520, 0],
    labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    icon: TrendingUp,
    color: "orange",
  },
  "Qual o ticket médio por cliente?": {
    text: "O ticket médio por cliente é de R$ 87,50. Clientes que compram produtos junto com serviços têm ticket médio de R$ 135,20.",
    chartType: "bar",
    data: [87.5, 135.2, 65.3, 42.8],
    labels: ["Média Geral", "Com Produtos", "Só Serviços", "Primeira Visita"],
    icon: DollarSign,
    color: "teal",
  },
  "Quais horários têm mais agendamentos?": {
    text: "Os horários com mais agendamentos são: 10h-12h (32%) e 16h-18h (28%), indicando picos no meio da manhã e final da tarde.",
    chartType: "line",
    data: [5, 12, 18, 25, 32, 28, 22, 15, 8],
    labels: ["8h", "9h", "10h", "11h", "12h", "16h", "17h", "18h", "19h"],
    icon: Calendar,
    color: "indigo",
  },
}

export default function AiOracleSection() {
  const [question, setQuestion] = useState("")
  const [currentResponse, setCurrentResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [showChart, setShowChart] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!question.trim()) return

    // Find a matching response or use a default
    let matchedQuestion = Object.keys(responses).find((q) =>
      question.toLowerCase().includes(q.toLowerCase().split(" ").slice(1).join(" ")),
    )

    if (!matchedQuestion && question.toLowerCase().includes("faturamento")) {
      matchedQuestion = "Qual foi o faturamento do mês passado?"
    } else if (!matchedQuestion) {
      matchedQuestion = Object.keys(responses)[Math.floor(Math.random() * Object.keys(responses).length)]
    }

    const response = responses[matchedQuestion]

    // Simulate loading and typing effect
    setIsLoading(true)
    setCurrentResponse(null)
    setShowChart(false)
    setTypingText("")

    setTimeout(() => {
      setIsLoading(false)

      // Simulate typing effect
      let i = 0
      const text = response.text
      const typingInterval = setInterval(() => {
        setTypingText(text.substring(0, i))
        i++
        if (i > text.length) {
          clearInterval(typingInterval)
          setTimeout(() => {
            setShowChart(true)
            setCurrentResponse(response)
          }, 300)
        }
      }, 20)
    }, 1000)
  }

  const handleSampleQuestion = (q) => {
    setQuestion(q)
    // Simulate clicking the send button
    setTimeout(() => {
      document.getElementById("send-button").click()
    }, 100)
  }

  // Render different chart types based on the response
  const renderChart = (response) => {
    if (!response) return null

    const { chartType, data, labels, color } = response

    if (chartType === "bar") {
      return (
        <div className="h-[200px] w-full flex items-end justify-between p-4">
          {data.map((value, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className={`w-12 bg-${color}-600 rounded-t-sm transition-all duration-500`}
                style={{ height: `${(value / Math.max(...data)) * 80}%` }}
              ></div>
              <span className="text-xs text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] text-center">
                {labels[i]}
              </span>
            </div>
          ))}
        </div>
      )
    }

    if (chartType === "pie") {
      return (
        <div className="relative h-[200px] w-[200px] mx-auto">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {
              data.reduce(
                (acc, value, i) => {
                  const total = data.reduce((sum, v) => sum + v, 0)
                  const startAngle = acc.offset
                  const angle = (value / total) * 360
                  const endAngle = startAngle + angle

                  // Convert angles to radians and calculate x,y coordinates
                  const startRad = ((startAngle - 90) * Math.PI) / 180
                  const endRad = ((endAngle - 90) * Math.PI) / 180

                  const x1 = 50 + 40 * Math.cos(startRad)
                  const y1 = 50 + 40 * Math.sin(startRad)
                  const x2 = 50 + 40 * Math.cos(endRad)
                  const y2 = 50 + 40 * Math.sin(endRad)

                  // Determine if the arc should be drawn as a large arc
                  const largeArcFlag = angle > 180 ? 1 : 0

                  // Generate a unique color based on index
                  const hue = (i * 60) % 360
                  const pieColor = `hsl(${hue}, 70%, 60%)`

                  acc.paths.push(
                    <path
                      key={i}
                      d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={pieColor}
                      stroke="white"
                      strokeWidth="1"
                      className="transition-all duration-500"
                    />,
                  )

                  // Add labels
                  const labelRad = ((startAngle + angle / 2 - 90) * Math.PI) / 180
                  const labelX = 50 + 60 * Math.cos(labelRad)
                  const labelY = 50 + 60 * Math.sin(labelRad)

                  acc.labels.push(
                    <text
                      key={i}
                      x={labelX}
                      y={labelY}
                      fontSize="8"
                      textAnchor="middle"
                      fill="#666"
                      className="text-[8px]"
                    >
                      {labels[i]}
                    </text>,
                  )

                  return {
                    paths: acc.paths,
                    labels: acc.labels,
                    offset: endAngle,
                  }
                },
                { paths: [], labels: [], offset: 0 },
              ).paths
            }

            {
              data.reduce(
                (acc, value, i) => {
                  const total = data.reduce((sum, v) => sum + v, 0)
                  const startAngle = acc.offset
                  const angle = (value / total) * 360
                  const endAngle = startAngle + angle

                  // Add labels
                  const labelRad = ((startAngle + angle / 2 - 90) * Math.PI) / 180
                  const labelX = 50 + 25 * Math.cos(labelRad)
                  const labelY = 50 + 25 * Math.sin(labelRad)

                  acc.labels.push(
                    <text
                      key={i}
                      x={labelX}
                      y={labelY}
                      fontSize="4"
                      textAnchor="middle"
                      fill="white"
                      fontWeight="bold"
                      className="text-[8px]"
                    >
                      {`${value}%`}
                    </text>,
                  )

                  return {
                    labels: acc.labels,
                    offset: endAngle,
                  }
                },
                { labels: [], offset: 0 },
              ).labels
            }
          </svg>
        </div>
      )
    }

    if (chartType === "line") {
      // Calculate points for the line
      const maxValue = Math.max(...data)
      const points = data
        .map((value, i) => {
          const x = (i / (data.length - 1)) * 100
          const y = 100 - (value / maxValue) * 80
          return `${x},${y}`
        })
        .join(" ")

      return (
        <div className="h-[200px] w-full p-4">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line key={`grid-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
            ))}

            {/* X-axis labels */}
            {labels.map((label, i) => {
              const x = (i / (labels.length - 1)) * 100
              return (
                <text key={`label-${i}`} x={x} y="98" fontSize="4" textAnchor="middle" fill="#666">
                  {label}
                </text>
              )
            })}

            {/* Line */}
            <polyline
              points={points}
              fill="none"
              stroke={`hsl(${color === "blue" ? 210 : color === "green" ? 120 : color === "orange" ? 30 : 260}, 70%, 60%)`}
              strokeWidth="2"
              className="transition-all duration-1000"
            />

            {/* Data points */}
            {data.map((value, i) => {
              const x = (i / (data.length - 1)) * 100
              const y = 100 - (value / maxValue) * 80
              return (
                <circle
                  key={`point-${i}`}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill="white"
                  stroke={`hsl(${color === "blue" ? 210 : color === "green" ? 120 : color === "orange" ? 30 : 260}, 70%, 60%)`}
                  strokeWidth="1"
                  className="transition-all duration-1000"
                />
              )
            })}
          </svg>
        </div>
      )
    }

    return null
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="ai-oracle">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-agendafly-100 rounded-full mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-agendafly-main">
              <Brain className="h-4 w-4 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl">
            IA Oráculo: Seu Consultor de Negócios
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Pergunte qualquer coisa sobre seu negócio em linguagem natural e obtenha insights valiosos instantaneamente.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Tome decisões baseadas em dados, sem complicações</h3>
            <p className="text-gray-600">
              Nossa IA Oráculo transforma a maneira como você analisa seu negócio. Basta fazer perguntas em linguagem
              natural para obter insights valiosos sobre:
            </p>

            <ul className="space-y-4">
              {[
                {
                  icon: DollarSign,
                  title: "Faturamento e Lucratividade",
                  description: "Consulte dados financeiros de qualquer período com perguntas simples",
                },
                {
                  icon: Users,
                  title: "Desempenho da Equipe",
                  description: "Descubra quais profissionais estão se destacando e onde há oportunidades",
                },
                {
                  icon: Calendar,
                  title: "Análise de Agendamentos",
                  description: "Entenda padrões de agendamento para otimizar sua operação",
                },
                {
                  icon: TrendingUp,
                  title: "Tendências e Previsões",
                  description: "Visualize tendências e receba previsões para planejar seu crescimento",
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
                  href="https://wa.me/5551997976375?text=Olá!%20Gostaria%20de%20experimentar%20a%20IA%20Oráculo%20do%20AgendFly."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Experimentar IA Oráculo
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
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-agendafly-main rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-6 w-32 h-32 bg-agendafly-400 rounded-full opacity-20 blur-2xl"></div>

            <Card className="border-agendafly-100 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-agendafly-main p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Brain className="h-5 w-5 text-agendafly-main" />
                    </div>
                    <div>
                      <h3 className="font-medium">IA Oráculo</h3>
                      <p className="text-sm text-agendafly-100">Seu assistente de negócios</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 h-[400px] flex flex-col">
                  <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                    <div className="bg-agendafly-50 p-3 rounded-lg max-w-[85%]">
                      <p className="text-gray-800">
                        Olá! Sou o IA Oráculo do AgendFly. Pergunte-me qualquer coisa sobre seu negócio e eu responderei
                        com dados e visualizações.
                      </p>
                    </div>

                    {typingText && (
                      <div className="bg-agendafly-50 p-3 rounded-lg max-w-[85%]">
                        <p className="text-gray-800">{typingText}</p>
                        {!showChart && typingText.length === responses[Object.keys(responses)[0]].text.length && (
                          <div className="flex gap-1 mt-2">
                            <div className="w-2 h-2 rounded-full bg-agendafly-400 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-agendafly-400 animate-pulse delay-100"></div>
                            <div className="w-2 h-2 rounded-full bg-agendafly-400 animate-pulse delay-200"></div>
                          </div>
                        )}
                      </div>
                    )}

                    {currentResponse && showChart && (
                      <div className="bg-white border border-agendafly-100 p-3 rounded-lg max-w-[85%] shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <currentResponse.icon className={`h-4 w-4 text-${currentResponse.color}-600`} />
                          <h4 className="font-medium text-sm">Visualização de Dados</h4>
                        </div>
                        {renderChart(currentResponse)}
                      </div>
                    )}

                    {question && (
                      <div className="bg-gray-100 p-3 rounded-lg max-w-[85%] ml-auto">
                        <p className="text-gray-800">{question}</p>
                      </div>
                    )}

                    {isLoading && (
                      <div className="bg-agendafly-50 p-3 rounded-lg max-w-[85%]">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-agendafly-400 animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-agendafly-400 animate-pulse delay-100"></div>
                          <div className="w-2 h-2 rounded-full bg-agendafly-400 animate-pulse delay-200"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {sampleQuestions.slice(0, 3).map((q, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          size="sm"
                          className="text-xs border-agendafly-200 text-agendafly-main bg-agendafly-50"
                          onClick={() => handleSampleQuestion(q)}
                        >
                          {q}
                        </Button>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="flex gap-2">
                      <Input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Pergunte algo sobre seu negócio..."
                        className="flex-1 border-agendafly-200 focus-visible:ring-agendafly-500"
                      />
                      <Button
                        id="send-button"
                        type="submit"
                        size="icon"
                        className="bg-agendafly-main hover:bg-agendafly-dark"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

