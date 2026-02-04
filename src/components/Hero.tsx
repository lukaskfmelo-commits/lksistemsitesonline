import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenWhatsApp: () => void;
}

const Hero = ({ onOpenWhatsApp }: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="text-primary">✦</span>
          <span className="text-sm text-muted-foreground">Soluções Digitais Completas</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text text-glow">Transformamos ideias</span>
          <br />
          <span className="gradient-text text-glow">em sites e artes que</span>
          <br />
          <span className="gradient-text text-glow">vendem</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Criação de sites profissionais, design gráfico e pacotes de artes personalizados para elevar sua marca ao próximo nível.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={onOpenWhatsApp}
            className="gradient-primary px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all glow animate-pulse-glow"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="#portfolio"
            className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            Ver Portfólio
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
            <div className="text-muted-foreground">Projetos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
            <div className="text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">3+</div>
            <div className="text-muted-foreground">Anos</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
