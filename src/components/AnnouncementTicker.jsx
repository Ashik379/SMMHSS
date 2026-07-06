import { motion } from 'framer-motion';
import { FaBullhorn } from 'react-icons/fa6';
import noticesData from '../data/notices.json';

/**
 * AnnouncementTicker - Scrolling text bar for latest notices
 */
const AnnouncementTicker = () => {
  // Get the latest 3 notices
  const latestNotices = noticesData.slice(0, 3).map(n => n.title).join('  •  ');

  return (
    <div className="bg-primary-dark text-white text-xs py-1.5 overflow-hidden border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center relative">
        <div className="flex items-center gap-2 pr-4 bg-primary-dark z-10 font-semibold text-secondary whitespace-nowrap">
          <FaBullhorn />
          Latest Updates:
        </div>
        
        {/* Scrolling text container */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div
            className="whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear"
            }}
          >
            <span className="inline-block px-4">{latestNotices}</span>
            <span className="inline-block px-4">{latestNotices}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
