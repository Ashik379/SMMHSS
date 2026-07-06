import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from './LazyImage';

/**
 * BannerSlider - Image slider for promotional banners placed below the Hero section
 */
const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    { id: 1, image: '/assets/images/banner/banner-1.jpeg', alt: 'School Banner 1' },
    { id: 2, image: '/assets/images/banner/banner-2.jpeg', alt: 'School Banner 2' },
    { id: 3, image: '/assets/images/banner/banner-3.jpeg', alt: 'School Banner 3' }
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="w-full bg-surface py-8 md:py-12" aria-label="Promotional Banners">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 group bg-gray-50">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 z-0 flex items-center justify-center"
            >
              <LazyImage 
                src={banners[currentSlide].image} 
                alt={banners[currentSlide].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20" role="tablist">
            {banners.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`Go to banner ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full focus-visible:ring-2 focus-visible:ring-primary outline-none ${
                  currentSlide === index 
                    ? 'w-6 h-2 bg-primary shadow-md' 
                    : 'w-2 h-2 bg-white/70 hover:bg-white border border-gray-300 shadow-sm'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
