import { Target, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="glass rounded-2xl p-8 glow">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="LK Sistem Workspace"
                className="rounded-xl w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 animate-float">
              <div className="text-2xl font-bold gradient-text">3+ Anos</div>
              <div className="text-sm text-muted-foreground">de Experiência</div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-medium">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Soluções digitais que <span className="gradient-text">transformam negócios</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              A LK Sistem é especializada em criar soluções digitais completas que combinam design inovador com tecnologia de ponta. Nosso foco é entregar resultados que impulsionam a conversão e fortalecem a identidade visual do seu negócio.
            </p>

            <div className="space-y-4">
              {[
                { icon: Target, title: 'Foco em Resultados', desc: 'Estratégias que geram conversões reais' },
                { icon: Lightbulb, title: 'Design Inovador', desc: 'Criações únicas e memoráveis' },
                { icon: Zap, title: 'Entrega Rápida', desc: 'Projetos no prazo acordado' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 glass p-4 rounded-xl">
                  <div className="gradient-primary p-3 rounded-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
