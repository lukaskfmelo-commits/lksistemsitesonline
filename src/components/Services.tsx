import { Globe, Palette, Image, Package } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sites Profissionais',
    description: 'Landing pages, sites institucionais e lojas virtuais com design moderno e responsivo.',
  },
  {
    icon: Palette,
    title: 'Design Gráfico',
    description: 'Identidade visual, logos, cartões de visita e materiais impressos de alta qualidade.',
  },
  {
    icon: Image,
    title: 'Banners & Artes',
    description: 'Artes para Instagram, WhatsApp, anúncios e redes sociais com design impactante.',
  },
  {
    icon: Package,
    title: 'Pacotes de Artes',
    description: 'Pacotes mensais com até 30 artes personalizadas para sua marca.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            O que a <span className="gradient-text">LK Sistem</span> oferece
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
