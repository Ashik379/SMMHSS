import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import schoolInfo from '../data/schoolInfo.json';

/**
 * FloatingActionButtons - Global fixed buttons for quick contact
 */
const FloatingActionButtons = () => {
  const whatsappNumber = schoolInfo.phone.replace(/\s+/g, '').replace('+', '');
  const phoneNumber = schoolInfo.phone.replace(/\s+/g, '');

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
      {/* Call Button (Mobile Only) */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors"
        aria-label="Call Us"
      >
        <FaPhone className="text-2xl" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors relative group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
        
        {/* Tooltip */}
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingActionButtons;
