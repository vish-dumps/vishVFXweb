import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-background/40 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 overflow-hidden">
          <iframe 
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            src="https://www.youtube.com/embed/pXQ90_RJc-U?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=pXQ90_RJc-U"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" style={{ zIndex: 1 }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background/50" style={{ zIndex: 2 }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative" style={{ zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-inter font-bold leading-tight glow-text">
            Vish <span className="text-primary">VFX</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">Crafting stories through cuts & color</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#featured">
              <Button className="bg-primary hover:bg-accent px-8 py-6 rounded-full font-medium shadow-neon hover:shadow-neon-hover transition-all duration-300">
                <i className="fas fa-play mr-2"></i> Watch Featured
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-primary hover:border-accent hover:bg-primary/10 px-8 py-6 rounded-full font-medium transition-all duration-300">
                <i className="fas fa-envelope mr-2"></i> Get in Touch
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" style={{ zIndex: 3 }}></div>
    </section>
  );
}
