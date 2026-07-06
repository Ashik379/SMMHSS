import { motion } from 'framer-motion';

/**
 * PageTransition - Wrapper component for smooth route changes
 * Uses Framer Motion to fade and slightly slide the page content in and out.
 */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
