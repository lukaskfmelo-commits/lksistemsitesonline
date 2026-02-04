import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
}

const Footer = ({ onOpenWhatsApp }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">LK Sistem</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transformando ideias em soluções digitais completas. Sites profissionais, design gráfico e pacotes de artes personalizados.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={onOpenWhatsApp}
                className="glass p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <a
                href="mailto:contato@lksistem.com"
                className="glass p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a></li>
              <li><a href="#pacotes" className="hover:text-foreground transition-colors">Pacotes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                (84) 99688-8327
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                contato@lksistem.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} LK Sistem. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
