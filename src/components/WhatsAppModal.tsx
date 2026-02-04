import { X, MessageCircle, ArrowRight } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickMessages = [
  { label: 'Quero um orçamento', message: 'Olá! Vim pelo site da LK Sistem e gostaria de solicitar um orçamento.' },
  { label: 'Dúvida sobre serviços', message: 'Olá! Vim pelo site da LK Sistem e tenho algumas dúvidas sobre os serviços.' },
  { label: 'Pack de artes', message: 'Olá! Vim pelo site da LK Sistem e gostaria de saber mais sobre os pacotes de artes.' },
  { label: 'Criação de site', message: 'Olá! Vim pelo site da LK Sistem e tenho interesse em criar um site.' },
];

const WHATSAPP_NUMBER = '5584996888327';

const WhatsAppModal = ({ isOpen, onClose }: WhatsAppModalProps) => {
  if (!isOpen) return null;

  const handleSendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass rounded-2xl p-6 max-w-md w-full animate-scale-in glow">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="gradient-primary p-3 rounded-xl">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Fale Conosco</h3>
            <p className="text-sm text-muted-foreground">Escolha uma opção abaixo</p>
          </div>
        </div>

        <div className="space-y-3">
          {quickMessages.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(option.message)}
              className="w-full glass p-4 rounded-xl text-left hover:bg-white/10 transition-all flex items-center justify-between group"
            >
              <span>{option.label}</span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Responderemos o mais rápido possível!
        </p>
      </div>
    </div>
  );
};

export default WhatsAppModal;
