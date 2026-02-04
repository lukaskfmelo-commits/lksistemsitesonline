import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppModal from '@/components/WhatsAppModal';

const Index = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const openWhatsApp = () => setIsWhatsAppModalOpen(true);
  const closeWhatsApp = () => setIsWhatsAppModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenWhatsApp={openWhatsApp} />
      <Hero onOpenWhatsApp={openWhatsApp} />
      <About />
      <Services />
      <Portfolio />
      <Packages onOpenWhatsApp={openWhatsApp} />
      <Testimonials />
      <Clients />
      <CTA onOpenWhatsApp={openWhatsApp} />
      <Footer onOpenWhatsApp={openWhatsApp} />
      <WhatsAppModal isOpen={isWhatsAppModalOpen} onClose={closeWhatsApp} />
    </div>
  );
};

export default Index;
