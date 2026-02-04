import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Moderno',
    category: 'Loja Virtual',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'Site Institucional',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
  },
  {
    title: 'Landing Page',
    category: 'Página de Captura',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Dashboard Admin',
    category: 'Sistema Web',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
  },
  {
    title: 'Pack 30 Artes',
    category: 'Design Gráfico',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
  },
  {
    title: 'Identidade Visual',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Projetos que <span className="gradient-text">inspiram</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden glass animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-primary text-sm">{project.category}</span>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
