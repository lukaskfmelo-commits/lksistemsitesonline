import { Check, Star } from 'lucide-react';

interface PackagesProps {
  onOpenWhatsApp: () => void;
}

const packages = [
  {
    name: 'Pack 10 Artes',
    price: 'R$ 197',
    features: ['10 artes personalizadas', 'Formato para redes sociais', 'Entrega em 5 dias', 'Revisões ilimitadas'],
    popular: false,
  },
  {
    name: 'Pack 20 Artes',
    price: 'R$ 347',
    features: ['20 artes personalizadas', 'Formato para redes sociais', 'Entrega em 7 dias', 'Revisões ilimitadas', 'Stories inclusos'],
    popular: true,
  },
  {
    name: 'Pack 30 Artes',
    price: 'R$ 497',
    features: ['30 artes personalizadas', 'Formato para redes sociais', 'Entrega em 10 dias', 'Revisões ilimitadas', 'Stories inclusos', 'Suporte prioritário'],
    popular: false,
  },
];

const Packages = ({ onOpenWhatsApp }: PackagesProps) => {
  return (
    <section id="pacotes" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium">Pacotes</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Escolha o plano <span className="gradient-text">ideal</span>
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 relative animate-fade-in ${
                pkg.popular ? 'ring-2 ring-primary glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-primary px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Mais Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold gradient-text mb-6">{pkg.price}</div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenWhatsApp}
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  pkg.popular
                    ? 'gradient-primary hover:opacity-90'
                    : 'border border-primary text-primary hover:bg-primary/10'
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
