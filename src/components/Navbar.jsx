import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaXmark, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import useScrollPosition from '../hooks/useScrollPosition';

/**
 * Navbar - Premium sticky navigation with a11y improvements
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition(50);
  const location = useLocation();
  
  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/notices', label: 'Notice Board' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  // Transparent nav only on home page when not scrolled
  const isHomePage = location.pathname === '/';
  const showTransparent = isHomePage && !isScrolled;

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full z-50 transition-all duration-500 border-b ${
          showTransparent
            ? 'bg-transparent border-transparent py-2'
            : 'glass border-white/20 shadow-soft py-0'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus-visible:ring-4 focus-visible:ring-primary/30 outline-none rounded-xl" aria-label="Go to Homepage">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                <FaGraduationCap className="text-2xl text-white" aria-hidden="true" />
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-lg font-bold leading-tight transition-colors duration-300 ${
                  showTransparent ? 'text-white' : 'text-text'
                }`}>
                  SMMHSS
                </h1>
                <p className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                  showTransparent ? 'text-white/80' : 'text-primary'
                }`}>
                  Excellence in Education
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2" role="menubar">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  role="menuitem"
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden group focus-visible:ring-4 focus-visible:ring-primary/30 outline-none ${
                      showTransparent
                        ? 'text-white hover:text-secondary'
                        : isActive
                          ? 'text-primary bg-primary/5'
                          : 'text-text-light hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      {isActive && showTransparent && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-secondary to-secondary-light text-primary-dark text-sm font-bold shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/40 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-secondary/50 outline-none"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open mobile menu"
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 focus-visible:ring-4 focus-visible:ring-primary/30 outline-none ${
                showTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-text bg-gray-50 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              <FaBars className="text-xl" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary origin-left z-50 pointer-events-none"
          style={{ scaleX }}
          aria-hidden="true"
        />
      </motion.nav>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-primary-dark/40 backdrop-blur-md lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[110] w-full max-w-sm h-full bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-sm">
                    <FaGraduationCap className="text-xl text-white" aria-hidden="true" />
                  </div>
                  <h2 className="font-bold text-text text-lg">SMMHSS</h2>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                  className="p-2.5 rounded-xl bg-gray-50 text-text-light hover:bg-red-50 hover:text-red-500 transition-colors focus-visible:ring-4 focus-visible:ring-red-500/30 outline-none"
                >
                  <FaXmark className="text-xl" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 focus-visible:ring-4 focus-visible:ring-primary/30 outline-none ${
                          isActive
                            ? 'bg-primary/5 text-primary border border-primary/10'
                            : 'text-text hover:bg-gray-50'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all mb-6 focus-visible:ring-4 focus-visible:ring-primary/30 outline-none"
                >
                  Enroll Now
                </Link>
                <div className="space-y-4 text-sm font-medium text-text-light">
                  <a href="tel:+919005311002" className="flex items-center gap-3 hover:text-primary transition-colors focus-visible:ring-4 focus-visible:ring-primary/30 outline-none rounded-lg p-1">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                      <FaPhone className="text-primary text-xs" aria-hidden="true" />
                    </div>
                    +91 9005311002
                  </a>
                  <a href="mailto:info@smmhss.edu.in" className="flex items-center gap-3 hover:text-primary transition-colors focus-visible:ring-4 focus-visible:ring-primary/30 outline-none rounded-lg p-1">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                      <FaEnvelope className="text-primary text-xs" aria-hidden="true" />
                    </div>
                    info@smmhss.edu.in
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
