import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';
import { videos } from '@/lib/data';

export default function FeaturedReels() {
  const [activeVideo, setActiveVideo] = useState<null | {id: string, title: string}>(null);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

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
    <section id="featured" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary font-montserrat text-sm mb-4"
          >
            My Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-inter font-bold"
          >
            Featured Reels
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
          >
            A collection of my best work across different styles and clients. Each project tells a unique story.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              variants={item}
              className="video-card group relative rounded-xl overflow-hidden border border-primary/30 shadow-lg bg-secondary"
            >
              <div className="relative aspect-video overflow-hidden">
                <iframe 
                  ref={el => videoRefs.current[index] = el}
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=${video.id}`}
                  title={video.title}
                  className="w-full h-full absolute inset-0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/40 cursor-pointer"
                  onClick={() => setActiveVideo({id: video.id, title: video.title})}
                >
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-300 text-sm">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo.id}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
