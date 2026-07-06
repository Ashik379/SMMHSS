import { motion } from 'framer-motion';
import { FaCalendarDays, FaBell } from 'react-icons/fa6';
import { formatDate, getCategoryColor } from '../utils/helpers';

/**
 * NoticeCard - Card for displaying notice/announcement items
 * Features date badge, category pill, new indicator, and description
 */
const NoticeCard = ({ notice, index = 0, compact = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-[2rem] bg-white border border-gray-50 shadow-soft hover:shadow-hover transition-all duration-500 overflow-hidden isolate"
    >
      {/* Decorative gradient blob */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-[3rem] -z-10 group-hover:scale-150 group-hover:bg-primary/10 transition-transform duration-700" />

      <div className="flex items-start gap-5">
        {/* Date indicator */}
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-500 shadow-sm border border-primary/10">
          <FaCalendarDays className="text-primary text-xl group-hover:text-white transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header row: title + new badge */}
          <div className="flex items-start gap-3 mb-2">
            <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
              {notice.title}
            </h3>
            {notice.isNew && (
              <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500 text-white text-[10px] font-black uppercase tracking-widest shadow-md shadow-red-500/20 animate-pulse">
                <FaBell className="text-[10px]" />
                New
              </span>
            )}
          </div>

          {/* Meta row: date + category */}
          <div className="flex items-center gap-4 mb-3 text-sm font-medium">
            <span className="text-text-light flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
              {formatDate(notice.date)}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${getCategoryColor(
                notice.category
              )}`}
            >
              {notice.category}
            </span>
          </div>

          {/* Description (hidden in compact mode) */}
          {!compact && (
            <p className="text-sm text-text-light leading-relaxed line-clamp-2">
              {notice.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NoticeCard;
