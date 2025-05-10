import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const pricingPackages = [
  {
    color: 'blue',
    title: 'Basic Package',
    subtitle: 'For quick & clean edits',
    price: '₹250',
    unit: '/min',
    features: [
      'Trimming and arranging clips',
      'Basic transitions',
      'Color correction (basic)',
      'Background music syncing',
      'Delivery in Full HD'
    ],
    note: 'Ideal for short reels, personal vlogs, or quick event clips.',
    bgClass: 'bg-blue-600/10',
    borderClass: 'border-blue-600/30 hover:border-blue-600/60',
    shadowClass: 'hover:shadow-[0_0_15px_rgba(64,128,255,0.3)]',
    iconBgClass: 'bg-blue-600/20',
    iconClass: 'text-blue-600',
    dividerClass: 'border-blue-600/20',
    buttonClass: 'bg-blue-600 hover:bg-blue-500'
  },
  {
    color: 'purple',
    title: 'Advanced Package',
    subtitle: 'For polished professional content',
    price: '₹450',
    unit: '/min',
    features: [
      'Everything in Basic, plus:',
      'Advanced color grading',
      'Dynamic text animations',
      'Motion graphics / light VFX',
      'Sound design & mixing',
      'Thumbnail (if needed)'
    ],
    note: 'Best for content creators, businesses and promotional videos.',
    bgClass: 'bg-primary/10',
    borderClass: 'border-primary/40 hover:border-primary/70',
    shadowClass: 'shadow-neon hover:shadow-neon-hover',
    iconBgClass: 'bg-primary/20',
    iconClass: 'text-primary',
    dividerClass: 'border-primary/20',
    buttonClass: 'bg-primary hover:bg-accent',
    popular: true
  },
  {
    color: 'yellow',
    title: 'Premium Package',
    subtitle: 'For viral, high-impact content',
    price: '₹700',
    unit: '/min',
    features: [
      'Everything in Advanced, plus:',
      'Viral-style editing techniques',
      'Platform optimized versions (IG, YT, etc.)',
      'Storyboarding & creative direction',
      '2 free revision rounds'
    ],
    note: 'Best for music videos, campaigns, and content that needs to pop.',
    bgClass: 'bg-yellow-500/10',
    borderClass: 'border-yellow-500/30 hover:border-yellow-500/60',
    shadowClass: 'hover:shadow-[0_0_15px_rgba(255,193,7,0.3)]',
    iconBgClass: 'bg-yellow-500/20',
    iconClass: 'text-yellow-500',
    dividerClass: 'border-yellow-500/20',
    buttonClass: 'bg-yellow-500 hover:bg-yellow-400 text-gray-900'
  }
];

export default function Pricing() {
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
    <section id="pricing" className="py-20 bg-background neon-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary font-montserrat text-sm mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-inter font-bold"
          >
            Choose Your Editing Package
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
          >
            Professional video editing services tailored to your specific needs and budget. All packages include direct communication and quick turnaround.
          </motion.p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col ${pkg.bgClass} ${pkg.borderClass} ${pkg.shadowClass}`}
            >
              <div className={`p-6 border-b ${pkg.dividerClass} relative`}>
                {pkg.popular && (
                  <span className="absolute top-4 right-4 bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                )}
                <div className={`w-12 h-12 rounded-full ${pkg.iconBgClass} flex items-center justify-center mb-4`}>
                  <i className={`${index === 0 ? 'fas fa-file-alt' : index === 1 ? 'fas fa-film' : 'fas fa-rocket'} ${pkg.iconClass}`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">{pkg.title}</h3>
                <p className="text-gray-300 mb-4">{pkg.subtitle}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 ml-1">{pkg.unit}</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="mt-6 text-sm text-gray-400">{pkg.note}</p>
              </div>
              
              <div className={`p-6 border-t ${pkg.dividerClass}`}>
                <a href="#contact">
                  <Button className={`w-full ${pkg.buttonClass} rounded-lg transition-all duration-300`}>
                    Get Started
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
