const clients = [
  { name: 'NovaTech', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop' },
  { name: 'FutureSys', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=60&fit=crop' },
  { name: 'InnovateCo', logo: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=120&h=60&fit=crop' },
  { name: 'TechPrime', logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=120&h=60&fit=crop' },
  { name: 'DigitalCore', logo: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=120&h=60&fit=crop' },
  { name: 'CloudWorks', logo: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=120&h=60&fit=crop' },
];

const Clients = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center animate-fade-in">
          <span className="text-primary font-medium">Parceiros</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Empresas que <span className="gradient-text">confiam</span> em nós
          </h2>
        </div>
      </div>

      {/* Marquee Animation */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 glass px-8 py-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-12 h-12 object-cover rounded-lg grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
              <span className="font-semibold text-muted-foreground whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
