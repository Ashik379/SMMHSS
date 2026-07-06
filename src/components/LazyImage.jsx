import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImage } from 'react-icons/fa6';

/**
 * LazyImage - Premium image component with lazy loading, skeleton, and error fallbacks
 */
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackIcon: FallbackIcon = FaImage,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Reset states if src changes
    setIsLoaded(false);
    setHasError(false);
    
    if (!src) {
      setHasError(true);
      return;
    }

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(true); // Stop showing skeleton
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`} aria-label={alt || 'Image loading'}>
      
      {/* Skeleton Loading State */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gray-200 animate-pulse"
          />
        )}
      </AnimatePresence>

      {/* Actual Image */}
      <AnimatePresence>
        {isLoaded && !hasError && imageSrc && (
          <motion.img
            src={imageSrc}
            alt={alt || "School image"}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full object-cover"
            loading="lazy"
            {...props}
          />
        )}
      </AnimatePresence>

      {/* Fallback / Error State */}
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-gray-400 p-4 text-center"
          >
            <FallbackIcon className="text-4xl mb-2 opacity-50" />
            <span className="text-xs font-medium uppercase tracking-wider opacity-60">Image Unavailable</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LazyImage;
