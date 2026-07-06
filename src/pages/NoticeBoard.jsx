import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMagnifyingGlass, FaBell } from 'react-icons/fa6';
import SectionHeading from '../components/SectionHeading';
import NoticeCard from '../components/NoticeCard';
import noticesData from '../data/notices.json';

/**
 * Notice Board Page - Premium layout with sticky filters and search animations
 */
const NoticeBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => ['All', ...new Set(noticesData.map((n) => n.category))], []);

  // Filter notices by search and category
  const filteredNotices = useMemo(() => {
    return noticesData.filter((notice) => {
      const matchesSearch =
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || notice.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Notice Board - SMMHSS</title>
        <meta name="description" content="Stay updated with the latest notices, announcements, and important information from SMMHSS." />
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
              <FaBell className="text-3xl text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Notice <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Board</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Stay updated with the latest announcements, circulars, and important information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-surface min-h-screen relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Sidebar with Sticky Filters */}
            <div className="lg:w-1/3">
              <div className="sticky top-28 bg-white p-6 md:p-8 rounded-[2rem] shadow-soft border border-gray-50">
                <h3 className="text-xl font-bold text-text mb-6">Filter Notices</h3>
                
                {/* Search Box */}
                <div className="relative mb-8 group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaMagnifyingGlass className="text-gray-400 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-surface/50 text-text placeholder-text-light/50 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  />
                </div>

                {/* Categories */}
                <h4 className="text-sm font-bold text-text uppercase tracking-wider mb-4">Categories</h4>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedCategory === cat
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'bg-transparent text-text-light hover:bg-gray-50 hover:text-text'
                      }`}
                    >
                      {cat}
                      {/* Counter badge (only for All for simplicity, or could calculate per category) */}
                      {cat === 'All' && (
                        <span className={`px-2 py-0.5 rounded-full text-xs ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {noticesData.length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Notice List */}
            <div className="lg:w-2/3">
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-bold text-text">
                  {selectedCategory === 'All' ? 'All Updates' : `${selectedCategory} Updates`}
                </h2>
                <span className="text-sm font-medium text-text-light">
                  Showing <strong className="text-text">{filteredNotices.length}</strong> results
                </span>
              </div>

              <motion.div layout className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredNotices.map((notice, index) => (
                    <motion.div
                      key={notice.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <NoticeCard notice={notice} index={0} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Empty State */}
              {filteredNotices.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 md:py-20 bg-white rounded-[2rem] border border-gray-50 shadow-sm"
                >
                  <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <FaMagnifyingGlass className="text-3xl text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">No notices found</h3>
                  <p className="text-text-light max-w-sm mx-auto">
                    We couldn't find any notices matching your search criteria. Try adjusting your filters.
                  </p>
                  <button 
                    onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticeBoard;
