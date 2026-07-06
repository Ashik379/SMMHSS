import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCalendarDays, FaLocationDot, FaClock } from 'react-icons/fa6';
import { getDateParts, getCategoryColor } from '../utils/helpers';
import SectionHeading from '../components/SectionHeading';
import eventsData from '../data/events.json';

/**
 * Events Page - Premium Timeline Layout
 */
const Events = () => {
  // Sort events by date
  const sortedEvents = [...eventsData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <>
      <Helmet>
        <title>Upcoming Events - SMMHSS</title>
        <meta name="description" content="Discover upcoming events, cultural programs, and sports days at SMMHSS." />
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
              <FaCalendarDays className="text-3xl text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              School <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Events</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Join us in celebrating academic milestones, cultural festivals, and athletic achievements throughout the academic year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="Events Calendar"
            subtitle="Mark your dates for these upcoming activities"
          />

          <div className="relative mt-16">
            {/* Center Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent -translate-x-1/2 rounded-full" />

            {/* Left Timeline Line (Mobile) */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent rounded-full" />

            <div className="space-y-12 md:space-y-24">
              {sortedEvents.map((event, index) => {
                const { day, month, year } = getDateParts(event.date);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative flex flex-col md:flex-row items-center justify-between"
                  >
                    {/* Desktop Layout - Alternating */}
                    <div className={`hidden md:block w-[45%] ${isEven ? 'text-right pr-12' : 'order-2 pl-12'}`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${getCategoryColor(event.category)} shadow-sm`}>
                        {event.category}
                      </span>
                      <h3 className="text-2xl font-bold text-text mb-3 hover:text-primary transition-colors cursor-pointer">{event.title}</h3>
                      <p className="text-text-light leading-relaxed mb-4">{event.description}</p>
                      
                      <div className={`flex flex-wrap gap-4 text-sm font-medium text-text-light ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                          <FaClock className="text-primary" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                          <FaLocationDot className="text-primary" />
                          {event.venue}
                        </span>
                      </div>
                    </div>

                    {/* Desktop Center Node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light items-center justify-center text-white shadow-xl border-4 border-surface z-10 hover:scale-110 transition-transform duration-300">
                      <div className="text-center leading-tight">
                        <div className="text-2xl font-black">{day}</div>
                        <div className="text-xs font-bold uppercase tracking-widest">{month}</div>
                      </div>
                    </div>

                    {/* Desktop Empty Space (for alternating) */}
                    <div className={`hidden md:block w-[45%] ${isEven ? 'order-2' : ''}`} />

                    {/* Mobile Layout */}
                    <div className="md:hidden flex w-full relative">
                      {/* Mobile Node */}
                      <div className="absolute left-0 top-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shadow-lg border-4 border-surface z-10">
                        <div className="text-center leading-tight">
                          <div className="text-xl font-black">{day}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest">{month}</div>
                        </div>
                      </div>

                      {/* Mobile Content Card */}
                      <div className="ml-24 w-full bg-white p-6 rounded-2xl shadow-soft border border-gray-50">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>
                        <h3 className="text-xl font-bold text-text mb-2">{event.title}</h3>
                        <p className="text-sm text-text-light mb-4 leading-relaxed">{event.description}</p>
                        
                        <div className="space-y-2 text-sm font-medium text-text-light">
                          <div className="flex items-center gap-2">
                            <FaClock className="text-primary w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <FaLocationDot className="text-primary w-4" />
                            {event.venue}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
