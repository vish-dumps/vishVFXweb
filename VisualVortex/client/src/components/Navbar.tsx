import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a className="text-2xl md:text-3xl font-montserrat font-bold text-primary glow-text">Vish VFX</a>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="hover:text-primary/90 transition-colors duration-300">Featured</a>
            <a href="#about" className="hover:text-primary/90 transition-colors duration-300">About</a>
            <a href="#achievements" className="hover:text-primary/90 transition-colors duration-300">Achievements</a>
            <a href="#pricing" className="hover:text-primary/90 transition-colors duration-300">Pricing</a>
            <a href="#contact" className="hover:text-primary/90 transition-colors duration-300">Contact</a>
          </nav>
          
          <a href="#contact" className="hidden md:flex">
            <Button variant="default" className="shadow-neon hover:shadow-neon-hover bg-primary hover:bg-accent rounded-full transition-all duration-300">
              Let's Go Viral!
            </Button>
          </a>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4">
                <a href="#featured" onClick={() => setIsOpen(false)} className="hover:text-primary/90 transition-colors duration-300">Featured</a>
                <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-primary/90 transition-colors duration-300">About</a>
                <a href="#achievements" onClick={() => setIsOpen(false)} className="hover:text-primary/90 transition-colors duration-300">Achievements</a>
                <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-primary/90 transition-colors duration-300">Pricing</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-primary/90 transition-colors duration-300">Contact</a>
                
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <Button variant="default" className="w-full shadow-neon hover:shadow-neon-hover bg-primary hover:bg-accent rounded-full transition-all duration-300">
                    Let's Go Viral!
                  </Button>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
