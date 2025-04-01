"use client"

import { motion } from "framer-motion"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardSection() {
  return (
    <section className="py-20 bg-white" id="dashboard">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl">Dashboard Inteligente</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Visualize o desempenho do seu negócio e tome decisões baseadas em dados com nosso dashboard completo.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Tabs defaultValue="vendas" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="vendas">Vendas</TabsTrigger>
              <TabsTrigger value="comissoes">Comissões</TabsTrigger>
              <TabsTrigger value="agendamentos">Agendamentos</TabsTrigger>
            </TabsList>

            <TabsContent value="vendas" className="mt-0">
              <div className="bg-white rounded-xl border border-agendafly-100 shadow-lg overflow-hidden">
                <div className="p-6 bg-agendafly-50 border-b border-agendafly-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Dashboard de Vendas</h3>
                      <p className="text-gray-600">Visão geral do desempenho de vendas</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="rounded-md border border-gray-300 px-3 py-1 text-sm">
                        <option>Últimos 7 dias</option>
                        <option>Últimos 30 dias</option>
                        <option>Este mês</option>
                        <option>Este ano</option>
                      </select>
                      <button className="bg-agendafly-main text-white rounded-md px-3 py-1 text-sm">Exportar</button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card className="border-agendafly-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Faturamento Total</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">R$ 12.580,00</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <span className="i-lucide-trending-up mr-1"></span> +12% em relação ao mês anterior
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-agendafly-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Serviços Realizados</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">248</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <span className="i-lucide-trending-up mr-1"></span> +8% em relação ao mês anterior
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-agendafly-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Produtos Vendidos</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">86</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <span className="i-lucide-trending-up mr-1"></span> +15% em relação ao mês anterior
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="border-agendafly-100 lg:col-span-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Vendas por Período</CardTitle>
                          <BarChart className="h-4 w-4 text-gray-500" />
                        </div>
                        <CardDescription>Comparativo de vendas nos últimos 7 dias</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] w-full bg-gradient-to-r from-agendafly-100 to-agendafly-50 rounded-lg flex items-end justify-between p-4">
                          {[40, 65, 50, 80, 60, 55, 75].map((height, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                              <div
                                className="w-8 bg-agendafly-main rounded-t-sm"
                                style={{ height: `${height}%` }}
                              ></div>
                              <span className="text-xs text-gray-600">
                                {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][i]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-agendafly-100">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Serviços Mais Vendidos</CardTitle>
                          <PieChart className="h-4 w-4 text-gray-500" />
                        </div>
                        <CardDescription>Distribuição por tipo de serviço</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-[200px] mx-auto">
                          <div className="absolute inset-0 rounded-full border-8 border-agendafly-main"></div>
                          <div
                            className="absolute inset-0 rounded-full border-8 border-agendafly-400"
                            style={{ clipPath: "polygon(0 0, 60% 0, 60% 100%, 0 100%)" }}
                          ></div>
                          <div
                            className="absolute inset-0 rounded-full border-8 border-agendafly-200"
                            style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 60% 100%)" }}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white rounded-full h-3/4 w-3/4 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm font-medium text-gray-500">Total</div>
                                <div className="text-xl font-bold text-gray-900">248</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-agendafly-main rounded-full"></div>
                              <span className="text-sm">Corte de Cabelo</span>
                            </div>
                            <span className="text-sm font-medium">45%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-agendafly-400 rounded-full"></div>
                              <span className="text-sm">Barba</span>
                            </div>
                            <span className="text-sm font-medium">30%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-agendafly-200 rounded-full"></div>
                              <span className="text-sm">Coloração</span>
                            </div>
                            <span className="text-sm font-medium">25%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comissoes" className="mt-0">
              <div className="bg-white rounded-xl border border-agendafly-100 shadow-lg overflow-hidden">
                <div className="p-6 bg-agendafly-50 border-b border-agendafly-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Comissões</h3>
                      <p className="text-gray-600">Acompanhamento de comissões por profissional</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="border-agendafly-100 lg:col-span-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Comissões por Profissional</CardTitle>
                          <LineChart className="h-4 w-4 text-gray-500" />
                        </div>
                        <CardDescription>Desempenho mensal de cada profissional</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { name: "Carlos Silva", value: 2450, percent: 85 },
                            { name: "Marcos Oliveira", value: 1980, percent: 70 },
                            { name: "Ana Santos", value: 2100, percent: 75 },
                          ].map((item, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-agendafly-main font-medium">R$ {item.value.toFixed(2)}</div>
                              </div>
                              <div className="w-full h-2 bg-agendafly-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-agendafly-main rounded-full"
                                  style={{ width: `${item.percent}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-agendafly-100">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Comissão por Tipo</CardTitle>
                          <PieChart className="h-4 w-4 text-gray-500" />
                        </div>
                        <CardDescription>Serviços vs Produtos</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-[200px] w-[200px] mx-auto">
                          <div className="absolute inset-0 rounded-full border-8 border-agendafly-main"></div>
                          <div
                            className="absolute inset-0 rounded-full border-8 border-agendafly-200"
                            style={{ clipPath: "polygon(0 0, 75% 0, 75% 100%, 0 100%)" }}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white rounded-full h-3/4 w-3/4 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm font-medium text-gray-500">Total</div>
                                <div className="text-xl font-bold text-gray-900">R$ 6.530</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-agendafly-main rounded-full"></div>
                              <span className="text-sm">Serviços</span>
                            </div>
                            <span className="text-sm font-medium">75%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-agendafly-200 rounded-full"></div>
                              <span className="text-sm">Produtos</span>
                            </div>
                            <span className="text-sm font-medium">25%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="agendamentos" className="mt-0">
              <div className="bg-white rounded-xl border border-agendafly-100 shadow-lg overflow-hidden">
                <div className="p-6 bg-agendafly-50 border-b border-agendafly-100">
                  <h3 className="text-xl font-semibold text-gray-800">Agendamentos</h3>
                  <p className="text-gray-600">Visão geral dos agendamentos</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card className="border-agendafly-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Total de Agendamentos</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">324</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">Este mês</p>
                      </CardContent>
                    </Card>

                    <Card className="border-agendafly-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Taxa de Ocupação</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">78%</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">+5% em relação ao mês anterior</p>
                      </CardContent>
                    </Card>

                    <Card className="border-agendafly-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Agendamentos via WhatsApp</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">65%</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">+12% em relação ao mês anterior</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-agendafly-100">
                    <CardHeader>
                      <CardTitle>Calendário de Agendamentos</CardTitle>
                      <CardDescription>Visão semanal</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-7 gap-2">
                        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day, i) => (
                          <div key={i} className="text-center font-medium text-sm py-2">
                            {day}
                          </div>
                        ))}
                        {Array.from({ length: 7 }).map((_, dayIndex) => (
                          <div key={dayIndex} className="h-32 border border-gray-200 rounded-md p-1 text-xs">
                            <div className="font-medium mb-1 text-right">{dayIndex + 10}</div>
                            {dayIndex !== 0 && dayIndex !== 6 ? (
                              <div className="space-y-1">
                                {Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className="bg-agendafly-100 text-blue-800 p-1 rounded truncate"
                                    style={{
                                      opacity: Math.random() * 0.5 + 0.5,
                                      backgroundColor: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, 0.2)`,
                                    }}
                                  >
                                    {["09:00", "10:30", "14:00", "16:30"][Math.floor(Math.random() * 4)]} - Corte
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

