import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenWhatsApp: () => void;
}

const CTA = ({ onOpenWhatsApp }: CTAProps) => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden glow animate-fade-in">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm">Pronto para começar?</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para elevar <span className="gradient-text">sua marca?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Fale com a LK Sistem agora e descubra como podemos transformar sua presença digital.
            </p>

            <button
              onClick={onOpenWhatsApp}
              className="gradient-primary px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto hover:opacity-90 transition-all animate-pulse-glow"
            >
              Chamar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
