import { motion } from 'framer-motion';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import LazyImage from './LazyImage';

/**
 * GalleryCard - Premium photo card for masonry layouts
 */
const GalleryCard = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-square sm:aspect-auto sm:h-72 bg-gray-100 shadow-soft hover:shadow-hover transition-shadow duration-500"
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title}`}
    >
      {/* Background Image using LazyImage */}
      <LazyImage 
        src={`/assets/images/gallery/${item.id}.jpg`} // Updated to use local asset path pattern
        alt={item.title}
        className="w-full h-full"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
        <div className="w-12 h-12 rounded-full bg-secondary text-primary-dark flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
          <FaMagnifyingGlassPlus className="text-xl" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
        <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-2">
          {item.category}
        </span>
        <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
