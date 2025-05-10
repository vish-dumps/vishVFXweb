import { motion } from 'framer-motion';

const achievements = [
  {
    icon: 'fas fa-trophy',
    title: 'Award Winning',
    description: 'Recognized for excellence in video editing and effects'
  },
  {
    icon: 'fas fa-users',
    title: '50+ Clients',
    description: 'Trusted by creators and brands worldwide'
  },
  {
    icon: 'fas fa-robot',
    title: 'AI Enhanced',
    description: 'Leveraging cutting-edge tools for premium results'
  },
  {
    icon: 'fas fa-play-circle',
    title: '10M+ Views',
    description: 'Content that reaches and engages audiences'
  }
];

export default function Achievements() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="achievements" className="py-20 bg-background relative" 
             style={{ 
               backgroundImage: "url('https://images.unsplash.com/photo-1626106557482-62d762a6d981?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')", 
               backgroundSize: 'cover', 
               backgroundPosition: 'center' 
             }}>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary font-montserrat text-sm mb-4"
          >
            Milestones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-inter font-bold"
          >
            Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
          >
            Recognized for creating content that stands out and delivers results.
          </motion.p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-secondary/80 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/30 hover:border-primary/60 transition-all duration-300 group"
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <i className={`${achievement.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
