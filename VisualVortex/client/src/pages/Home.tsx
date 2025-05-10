import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedReels from '@/components/FeaturedReels';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    document.title = 'Vish VFX - Professional Video Editing & Visual Effects';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedReels />
        <About />
        <Achievements />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        <BackToTop />
      </AnimatePresence>
    </div>
  );
}
