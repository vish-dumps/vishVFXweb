import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="text-2xl font-montserrat font-bold text-primary glow-text">Vish VFX</a>
            </Link>
            <p className="mt-2 text-gray-400">Crafting stories through cuts & color</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/vishv.fx/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/30 hover:border-primary/70 hover:bg-primary/20 transition-all duration-300">
              <i className="fab fa-instagram text-primary"></i>
            </a>
            
            <a href="https://x.com/vish_vfx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/30 hover:border-primary/70 hover:bg-primary/20 transition-all duration-300">
              <i className="fab fa-twitter text-primary"></i>
            </a>
            
            <a href="https://wa.me/919430562996" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/30 hover:border-primary/70 hover:bg-primary/20 transition-all duration-300">
              <i className="fab fa-whatsapp text-primary"></i>
            </a>
            
            <a href="mailto:vishwaszsoni@gmail.com" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-primary/30 hover:border-primary/70 hover:bg-primary/20 transition-all duration-300">
              <i className="fas fa-envelope text-primary"></i>
            </a>
          </div>
        </div>
        
        <hr className="border-primary/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">© {currentYear} Vish VFX. All rights reserved.</p>
          
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#featured" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Featured</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">About</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Pricing</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
