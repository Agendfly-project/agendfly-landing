import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-agendafly-main mb-4">AgendFly</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Automatize e otimize seus agendamentos, conectando você diretamente aos seus clientes pelo WhatsApp com o
              poder da Inteligência Artificial.
            </p>
            <p className="text-gray-600 mb-4">
              <a href="mailto:contato@agendfly.com.br" className="text-agendafly-main hover:underline">
                contato@agendfly.com.br
              </a>
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-agendafly-main">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-agendafly-main">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-agendafly-main">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-agendafly-main">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Produto</h4>
            <ul className="space-y-2">
              {["Recursos", "Preços", "Integrações", "Clientes", "Novidades"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-agendafly-main transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-2">
              {["Sobre nós", "Blog", "Carreiras", "Contato", "Suporte"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-agendafly-main transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">© 2025 AgendFly. Todos os direitos reservados.</div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-agendafly-main transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="text-gray-600 hover:text-agendafly-main transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

