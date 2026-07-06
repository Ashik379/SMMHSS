import { motion } from 'framer-motion';
import {
  FaChalkboardTeacher,
  FaDesktop,
  FaFlask,
  FaBookOpen,
  FaFutbol,
  FaTrophy,
  FaShieldAlt,
  FaTint,
  FaMusic,
} from 'react-icons/fa';

// Icon mapping for dynamic rendering from JSON data
const iconMap = {
  FaChalkboardTeacher,
  FaDesktop,
  FaFlask,
  FaBookOpen,
  FaFutbol,
  FaTrophy,
  FaShieldAlt,
  FaTint,
  FaMusic,
};

/**
 * FacilityCard - Premium glassmorphism card for facility items
 */
const FacilityCard = ({ facility, index = 0 }) => {
  const IconComponent = iconMap[facility.icon] || FaBookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-[2rem] bg-gradient-to-br from-white to-primary/5 border border-primary/10 shadow-soft hover:shadow-hover transition-all duration-500 overflow-hidden isolate"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-700 blur-3xl -z-10" />

      {/* Ultra-Premium Watermark */}
      <IconComponent className="absolute -bottom-8 -right-8 text-[150px] text-primary/[0.03] group-hover:text-primary/[0.06] group-hover:scale-110 transition-all duration-700 -z-10" />

      {/* Icon Container */}
      <div className="relative z-10 w-16 h-16 rounded-[1.25rem] bg-white shadow-sm border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:border-primary transition-all duration-500">
        <IconComponent className="text-3xl text-primary group-hover:text-white transition-colors duration-500" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl font-bold text-text mb-3 tracking-tight">
        {facility.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-text-light leading-relaxed text-sm">
        {facility.description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
};

export default FacilityCard;
