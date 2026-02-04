import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO, TechStore',
    content: 'A LK Sistem transformou completamente nossa presença online. O site ficou incrível e nossas vendas aumentaram 40%!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Ana Santos',
    role: 'Empresária',
    content: 'Design profissional e entrega super rápida. Recomendo para qualquer negócio que quer se destacar.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Roberto Lima',
    role: 'Diretor de Marketing',
    content: 'Os pacotes de artes são incríveis! Qualidade excepcional e atendimento impecável.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
