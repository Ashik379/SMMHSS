import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * StatCounter - Animated number counter that triggers on scroll
 * Displays school statistics with count-up animation
 */
const StatCounter = ({ icon: Icon, count, label, suffix = '+', delay = 0 }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayCount(Math.floor(eased * count));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center p-6"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
        <Icon className="text-3xl text-secondary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {displayCount}
        <span className="text-secondary">{suffix}</span>
      </div>
      <p className="text-gray-300 font-medium text-lg">{label}</p>
    </motion.div>
  );
};

export default StatCounter;
