import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

type VideoModalProps = {
  videoId: string;
  title: string;
  onClose: () => void;
};

export default function VideoModal({ videoId, title, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-background/90 modal-bg"></div>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="relative max-w-4xl w-full mx-4"
          ref={modalRef}
        >
          <div className="bg-secondary rounded-xl overflow-hidden border border-primary/30 shadow-neon">
            <div className="relative aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            <div className="p-4 flex justify-between items-center border-t border-primary/20">
              <h3 className="text-lg font-medium">{title}</h3>
              
              <Button
                size="icon"
                variant="ghost"
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/30 hover:border-primary/70 hover:bg-primary/20 transition-all duration-300"
              >
                <i className="fas fa-times text-primary"></i>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
