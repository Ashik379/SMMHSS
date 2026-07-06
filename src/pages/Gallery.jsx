import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImages } from 'react-icons/fa6';
import SectionHeading from '../components/SectionHeading';
import GalleryCard from '../components/GalleryCard';
import ImageModal from '../components/ImageModal';
import galleryData from '../data/gallery.json';

/**
 * Gallery Page - Premium layout with masonry grid and Image Modal
 */
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extract unique categories
  const categories = useMemo(() => ['All', ...new Set(galleryData.map((item) => item.category))], []);

  // Filter gallery items
  const filteredItems = useMemo(() => {
    return activeFilter === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Modal Handlers
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const navigateModal = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <>
      <Helmet>
        <title>Campus Gallery - SMMHSS</title>
        <meta name="description" content="Browse through our premium photo gallery showcasing campus life, events, and celebrations at SMMHSS." />
      </Helmet>

      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary-dark via-[#0d2a4a] to-primary overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-6 shadow-xl border border-white/20">
              <FaImages className="text-3xl text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Gallery</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Glimpses of life, learning, and celebrations at our vibrant campus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 bg-surface min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-text-light border border-gray-100 hover:border-primary/30 hover:text-primary hover:shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <div key={item.id} onClick={() => openModal(index)}>
                  <GalleryCard item={item} index={index} />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12 md:py-20 bg-white rounded-[2rem] shadow-soft border border-gray-50 mt-10">
              <p className="text-text-light text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <ImageModal
        images={filteredItems}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNavigate={navigateModal}
      />
    </>
  );
};

export default Gallery;
