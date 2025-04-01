"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquareText, Sparkles } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-agendafly-50 to-white" id="cta">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center p-2 bg-agendafly-100 rounded-full mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-agendafly-main">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-agendafly-main md:text-4xl mb-4">
            Pronto para revolucionar seu salão?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Junte-se a centenas de salões e barbearias que já transformaram sua gestão com o AgendFly. Solicite uma
            demonstração hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-agendafly-main hover:bg-agendafly-dark" asChild>
              <a href="https://wa.me/5551997976375" target="_blank" rel="noopener noreferrer">
                Solicitar demonstração
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-agendafly-main text-agendafly-main gap-2" asChild>
              <a href="https://wa.me/5551997976375" target="_blank" rel="noopener noreferrer">
                <MessageSquareText className="h-5 w-5" />
                Falar com consultor
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

