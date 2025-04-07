import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-agendafly-main mb-4">
              AgendFly
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Automatize e otimize seus agendamentos, conectando você
              diretamente aos seus clientes pelo WhatsApp com o poder da
              Inteligência Artificial.
            </p>
            <p className="text-gray-600 mb-4">
              <a
                href="mailto:contato@agendfly.com.br"
                className="text-agendafly-main hover:underline"
              >
                contato@agendfly.com.br
              </a>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Agendfly/61575132983650/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-agendafly-main"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </a>
              <a
                href="https://www.instagram.com/agendfly/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-agendafly-main"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              <a
                href="https://x.com/@agendfly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-agendafly-main"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a
                href="https://www.youtube.com/channel/UCZC3HlZVWXaAv-IEeX1uJ-Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-agendafly-main"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </a>
              <a
                href="https://www.tiktok.com/@agendfly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-agendafly-main"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M12.46 2h3.14c.16 1.18.68 2.2 1.53 3.04.87.87 1.94 1.39 3.2 1.55v3.14a7.09 7.09 0 01-3.54-1.08v7.25c0 1.66-.59 3.08-1.78 4.25-1.18 1.17-2.61 1.76-4.29 1.76-1.68 0-3.1-.59-4.26-1.76-1.17-1.17-1.75-2.6-1.75-4.28 0-1.68.58-3.11 1.75-4.28a5.82 5.82 0 014.26-1.76v3.2a2.59 2.59 0 00-1.88.79 2.57 2.57 0 00-.8 1.87c0 .74.27 1.37.8 1.9a2.59 2.59 0 001.88.79c.74 0 1.37-.26 1.9-.79a2.6 2.6 0 00.78-1.9V2z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#ai-whatsapp"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  IA & WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#ai-oracle"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  IA Oráculo
                </a>
              </li>
              <li>
                <a
                  href="#dashboard"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://app.agendfly.com.br/politica-de-privacidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="https://app.agendfly.com.br/termos-de-uso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5551997976375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-agendafly-main transition-colors"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2024 AgendFly. Todos os direitos reservados.
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href="https://app.agendfly.com.br/termos-de-uso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-agendafly-main transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="https://app.agendfly.com.br/politica-de-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-agendafly-main transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
