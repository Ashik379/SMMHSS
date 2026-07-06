import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import LazyImage from './LazyImage';

/**
 * ImageModal - Fullscreen gallery viewer with keyboard navigation and touch support
 */
const ImageModal = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) onNavigate('next');
    if (isRightSwipe) onNavigate('prev');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label="Image Gallery"
      >
        {/* Top Bar */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
          <div className="text-white/70 font-medium tracking-widest text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500/80 focus:bg-red-500/80 flex items-center justify-center text-white transition-colors outline-none focus:ring-4 focus:ring-red-500/30"
            aria-label="Close modal"
          >
            <FaXmark className="text-xl" />
          </button>
        </div>

        {/* Navigation Buttons (Desktop) */}
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 focus:bg-white/20 flex items-center justify-center text-white transition-colors z-20 outline-none focus:ring-4 focus:ring-white/30 hidden sm:flex"
          aria-label="Previous image"
        >
          <FaChevronLeft className="text-xl md:text-2xl" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 focus:bg-white/20 flex items-center justify-center text-white transition-colors z-20 outline-none focus:ring-4 focus:ring-white/30 hidden sm:flex"
          aria-label="Next image"
        >
          <FaChevronRight className="text-xl md:text-2xl" />
        </button>

        {/* Main Image Area */}
        <div 
          className="w-full h-full flex flex-col items-center justify-center cursor-default pt-20 pb-10"
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl px-4 md:px-24 flex items-center justify-center relative overflow-hidden"
          >
            <LazyImage 
              src={`/assets/images/gallery/${currentImage.id}.jpg`}
              alt={currentImage.title}
              className="max-h-[70vh] w-auto max-w-full rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* Caption */}
          <motion.div
            key={`caption-${currentImage.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center px-4 max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
              {currentImage.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{currentImage.title}</h3>
            <p className="text-white/70">{currentImage.description}</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
