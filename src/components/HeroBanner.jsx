import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import LazyImage from './LazyImage';

/**
 * HeroBanner - Fullscreen animated image slider hero section
 */
const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/assets/images/hero/hero-1.jpg',
      title: "Shree Mahendra Mishra",
      subtitle: "Higher Secondary School",
      description: "Nurturing minds, building futures. Empowering students with quality education, strong values, and a foundation for lifelong success."
    },
    {
      id: 2,
      image: '/assets/images/hero/hero-2.jpg',
      title: "Excellence in Education",
      subtitle: "A Legacy of Excellence",
      description: "Discover a vibrant learning community where academic rigor meets holistic development in a state-of-the-art campus."
    },
    {
      id: 3,
      image: '/assets/images/hero/hero-3.jpg',
      title: "Shape Your Future",
      subtitle: "Admissions Open 2026-27",
      description: "Join our legacy of 100% board results. Give your child the gift of world-class education with exceptional faculty."
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-primary-dark" aria-label="Hero Slider">
      {/* Image Slider using LazyImage */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <LazyImage 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="w-full h-full"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/60 to-transparent mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} aria-hidden="true" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-secondary/10 blur-[80px]"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-[10%] w-96 h-96 rounded-full bg-primary-light/20 blur-[100px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/90 font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(255,193,7,0.8)]" aria-hidden="true" />
                  {currentSlide === 2 ? 'Enrollment Started' : 'Sakhopar, Kushinagar'}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 tracking-tight drop-shadow-xl">
                  {slides[currentSlide].title}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light mt-2 pb-2">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-200 max-w-lg mb-10 leading-relaxed font-light drop-shadow-md">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-secondary-light text-primary-dark font-bold text-base shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-secondary/50 outline-none"
                aria-label="Explore more about our school"
              >
                Explore More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-base hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-white/30 outline-none"
                aria-label="Contact us for admissions"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Right: Decorative Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:flex justify-end"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Main Visual Glass Card */}
              <div className="w-[340px] h-[400px] rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FaGraduationCap className="text-[120px] text-white/10 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-bold text-white mb-2 text-center relative z-10">20+ Years</h3>
                <p className="text-secondary font-medium text-center relative z-10">of Excellence in Education</p>
              </div>

              {/* Floating accent badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
              >
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-gray-300 font-medium">Awards Won</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-8 -left-12 px-6 py-4 rounded-2xl bg-secondary/90 backdrop-blur-xl border border-secondary text-primary-dark shadow-xl"
              >
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-80">Students</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20" role="tablist">
        {slides.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full focus-visible:ring-2 focus-visible:ring-white outline-none ${
              currentSlide === index 
                ? 'w-8 h-2.5 bg-secondary shadow-[0_0_8px_rgba(255,193,7,0.6)]' 
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-white/50 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase rotate-90 mb-6">Scroll</span>
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default HeroBanner;
