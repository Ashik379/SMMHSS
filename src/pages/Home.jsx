import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaCalendarAlt,
  FaArrowRight,
  FaQuoteLeft,
  FaChevronDown,
  FaDesktop,
  FaLeaf,
  FaStar
} from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import BannerSlider from '../components/BannerSlider';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import FacilityCard from '../components/FacilityCard';
import NoticeCard from '../components/NoticeCard';
import EventCard from '../components/EventCard';
import StatCounter from '../components/StatCounter';
import LazyImage from '../components/LazyImage';
import schoolInfo from '../data/schoolInfo.json';
import facilitiesData from '../data/facilities.json';
import noticesData from '../data/notices.json';
import eventsData from '../data/events.json';
import testimonialsData from '../data/testimonials.json';
import faqData from '../data/faq.json';
import highlightsData from '../data/highlights.json';

// Icon mapping for Highlights
const iconMap = {
  FaAward,
  FaDesktop,
  FaChalkboardTeacher,
  FaLeaf
};

/**
 * Home Page - Premium Landing Page
 */
const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Shree Mahendra Mishra Higher Secondary School | Premium Education</title>
        <meta name="description" content="Experience world-class education at SMMHSS. Explore our academic excellence, modern facilities, and holistic learning environment." />
      </Helmet>

      {/* 1. Hero Banner */}
      <HeroBanner />

      {/* 1.5. Banner Slider */}
      <BannerSlider />

      {/* 2. School Highlights (New) */}
      <section className="relative z-20 pt-20 pb-32 bg-mesh px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightsData.map((highlight, index) => {
              const Icon = iconMap[highlight.icon] || FaAward;
              return (
                <motion.div
                  key={highlight.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-primary/5 rounded-[2rem] p-8 shadow-soft border border-primary/10 hover:shadow-hover hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden isolate"
                >
                  {/* Decorative faint icon in background */}
                  <Icon className="absolute -bottom-6 -right-6 text-[120px] text-primary/[0.03] group-hover:text-primary/[0.06] group-hover:scale-110 transition-all duration-500 -z-10" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-primary/10 group-hover:bg-primary group-hover:border-primary flex items-center justify-center mb-6 transition-colors duration-500">
                    <Icon className="text-2xl text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3 tracking-tight">{highlight.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Curved Divider at the bottom of Highlights */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[150px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,124.71,123.63,189.6,117.8Z" fill="#F8FAFC" opacity="0.5"></path>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F8FAFC" opacity="0.3"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#F8FAFC"></path>
          </svg>
        </div>
      </section>

      {/* 3. Principal's Message */}
      <section className="py-16 md:py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image Placeholder */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 relative shadow-2xl group">
                  <LazyImage 
                    src="/assets/images/principal/principal.jpg"
                    alt={`Portrait of ${schoolInfo.principal}, Principal`}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Name tag */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 glass-dark rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white text-center mb-1 drop-shadow-md">{schoolInfo.principal}</h3>
                    <p className="text-sm font-medium text-secondary text-center">Principal, {schoolInfo.shortName}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Content */}
            <ScrollReveal direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6">
                Principal's Message
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-text mb-6 leading-[1.15] tracking-tight">
                Welcome to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">{schoolInfo.shortName}</span>
              </h2>
              <div className="prose prose-lg prose-blue max-w-none text-text-light leading-relaxed mb-8">
                <p className="mb-4 font-medium text-xl text-text leading-snug">
                  "Education is not merely about academic excellence; it is about character building, instilling moral values, and equipping students with the resilience to navigate the challenges of tomorrow."
                </p>
                <p>
                  Since our inception, our vision has been unequivocal: to create an educational sanctuary where every child is nurtured with care, guided with wisdom, and empowered with knowledge. We invite you to be a part of our journey and our growing family.
                </p>
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                Read Full Story
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Admission Open Banner (New) */}
      <section className="py-12 bg-surface relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="relative rounded-[3rem] overflow-hidden bg-primary-dark shadow-[0_20px_50px_rgba(10,53,96,0.3)] border border-primary-light/20">
              {/* Premium Glow Effects */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent z-10" />
              <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent z-10" />
              
              <div className="relative z-20 px-8 py-12 md:py-20 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                <div className="flex-1 max-w-2xl">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-bold text-xs uppercase tracking-widest mb-6"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    Session 2026-27
                  </motion.span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                    Secure Your Child's <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Bright Future Today</span>
                  </h2>
                  <p className="text-white/70 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                    Join one of the most prestigious educational institutions in the region. Experience world-class learning facilities with exceptional faculty.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col gap-4 items-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-gradient-to-r from-secondary to-secondary-light text-primary-dark font-extrabold text-lg shadow-[0_0_30px_rgba(255,193,7,0.3)] hover:shadow-[0_0_50px_rgba(255,193,7,0.5)] transition-all duration-300 hover:-translate-y-1"
                  >
                    Begin Application
                    <div className="w-8 h-8 rounded-full bg-primary-dark/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                      <FaArrowRight />
                    </div>
                  </Link>
                  <span className="text-white/50 text-sm font-medium">Limited seats available for upcoming session</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Facilities Overview */}
      <section className="py-16 md:py-24 bg-mesh relative">
        <div className="absolute top-0 left-0 w-full h-[150px] overflow-hidden leading-none z-0 rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,124.71,123.63,189.6,117.8Z" fill="#F8FAFC"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 pt-10">
          <SectionHeading
            title="Premium Infrastructure"
            subtitle="Explore our world-class facilities designed for holistic learning"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesData.slice(0, 3).map((facility, index) => (
              <FacilityCard key={facility.id} facility={facility} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-text font-bold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Explore All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials (New) */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading
            title="Voices of Our Community"
            subtitle="Hear what parents and alumni have to say about their experience"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsData.slice(0, 4).map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-gray-50 relative group hover:shadow-hover transition-all duration-300">
                  <FaQuoteLeft className="absolute top-8 right-8 text-4xl text-gray-100 group-hover:text-primary/10 transition-colors duration-300" />
                  <div className="flex gap-1 text-secondary mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-text-light text-lg leading-relaxed mb-8 italic relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-text">{testimonial.name}</h4>
                      <p className="text-xs text-text-light">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Statistics & Achievement */}
      <section className="py-12 md:py-20 bg-primary-dark relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter icon={FaUserGraduate} count={schoolInfo.stats.students} label="Enrolled Students" delay={0} />
            <StatCounter icon={FaChalkboardTeacher} count={schoolInfo.stats.teachers} label="Expert Faculty" delay={0.1} />
            <StatCounter icon={FaCalendarAlt} count={schoolInfo.stats.yearsOfExcellence} label="Years of Legacy" delay={0.2} />
            <StatCounter icon={FaAward} count={schoolInfo.stats.awards} label="Awards & Honors" delay={0.3} />
          </div>
        </div>
      </section>

      {/* 8. Notices & Events Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Notices */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-text">Latest Updates</h2>
                <Link to="/notices" className="text-primary font-semibold hover:underline text-sm">View All</Link>
              </div>
              <div className="space-y-4">
                {noticesData.slice(0, 3).map((notice, index) => (
                  <NoticeCard key={notice.id} notice={notice} index={index} compact />
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-text">Upcoming Events</h2>
                <Link to="/events" className="text-primary font-semibold hover:underline text-sm">View All</Link>
              </div>
              <div className="space-y-4">
                {eventsData.slice(0, 3).map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FAQ Section (New) */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common queries about our school"
          />
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <ScrollReveal key={faq.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-text pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: activeFaq === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-text-light"
                    >
                      <FaChevronDown className="text-sm" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-text-light leading-relaxed border-t border-gray-50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
