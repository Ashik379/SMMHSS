import { motion } from 'framer-motion';
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import { getDateParts, getCategoryColor } from '../utils/helpers';

/**
 * EventCard - Card for displaying event items with date widget
 * Features prominent date display, event details, and venue info
 */
const EventCard = ({ event, index = 0 }) => {
  const { day, month } = getDateParts(event.date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex gap-5 p-6 rounded-3xl bg-white border border-gray-50 shadow-soft hover:shadow-hover transition-all duration-500 overflow-hidden isolate"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 group-hover:bg-primary/10 transition-transform duration-700" />
      
      {/* Date Widget */}
      <div className="shrink-0 w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-primary to-primary-light flex flex-col items-center justify-center text-white shadow-md shadow-primary/20">
        <span className="text-2xl font-black leading-none">{day}</span>
        <span className="text-xs font-semibold tracking-widest mt-1 uppercase">{month}</span>
      </div>

      {/* Event Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-2 tracking-tight">
          {event.title}
        </h3>

        {/* Category badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-3 ${getCategoryColor(
            event.category
          )}`}
        >
          {event.category}
        </span>

        {/* Time & Venue */}
        <div className="flex flex-wrap gap-4 text-sm font-medium text-text-light mb-2">
          <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
            <FaClock className="text-primary/60" />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
            <FaLocationDot className="text-primary/60" />
            {event.venue}
          </span>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm text-text-light leading-relaxed line-clamp-2">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};

export default EventCard;
