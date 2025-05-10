import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import profilePic from '@assets/profile.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary neon-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary font-montserrat text-sm mb-4"
          >
            About Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-inter font-bold"
          >
            Transforming vision into viral content
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary glow-border relative">
                <img 
                  src={profilePic} 
                  alt="Vish VFX Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-4 bg-primary text-white rounded-full py-2 px-4 font-medium text-sm shadow-neon">
                <i className="fas fa-award mr-1"></i> 3+ Years Experience
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <p className="text-lg text-gray-200 mb-6">
              I'm a freelance video editor with a passion for visual storytelling. I specialize in crafting cinematic cuts that evoke emotion, dynamic social media reels that grab attention, and polished brand videos that leave a lasting impression.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              I've helped creators and brands go viral by turning raw footage into scroll-stopping edits using tools like Adobe Premiere Pro, After Effects, and Photoshop. Every frame I cut is shaped with purpose—to connect, captivate, and convert.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="bg-primary hover:bg-accent shadow-neon hover:shadow-neon-hover transition-all duration-300 rounded-full">
                  <i className="fas fa-bolt mr-2"></i> Let's Go Viral
                </Button>
              </a>
              <a href="#featured">
                <Button variant="outline" className="border-primary hover:border-accent hover:bg-primary/10 transition-all duration-300 rounded-full">
                  <i className="fas fa-play mr-2"></i> Watch Featured
                </Button>
              </a>
              <a href="https://drive.google.com/drive/folders/1rGwR8SHWl2Q3cBF6AcoXOk7DSlpkphFy?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="bg-background/40 hover:bg-background/60 transition-all duration-300 rounded-full">
                  <i className="fas fa-film mr-2"></i> More Works
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
