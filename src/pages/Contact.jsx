import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock, FaHeadset, FaMapLocationDot } from 'react-icons/fa6';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import schoolInfo from '../data/schoolInfo.json';

/**
 * Contact Page - Premium layout with Click-to-action cards and maps
 */
const Contact = () => {
  const phoneNumber = schoolInfo.phone.replace(/\s+/g, '');

  const contactCards = [
    {
      icon: FaPhone,
      title: 'Call Us',
      lines: [schoolInfo.phone, '+91 9005311003 (Admin)'],
      action: `tel:${phoneNumber}`,
      actionText: 'Click to Call',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      lines: [schoolInfo.email, 'admission@smmhss.edu.in'],
      action: `mailto:${schoolInfo.email}`,
      actionText: 'Click to Email',
      color: 'text-rose-500',
      bg: 'bg-rose-500/10'
    },
    {
      icon: FaLocationDot,
      title: 'Visit Us',
      lines: [schoolInfo.location, 'Uttar Pradesh 274301'],
      action: 'https://maps.google.com',
      actionText: 'Open in Maps',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      target: '_blank'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - SMMHSS</title>
        <meta name="description" content="Get in touch with Shree Mahendra Mishra Higher Secondary School for admissions, queries, and information." />
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
              <FaHeadset className="text-3xl text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Touch</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              We are here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency / Notice Banner */}
      <section className="py-0 relative z-20 -mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <FaPhone className="text-red-500 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-text text-lg">Emergency Contact</h3>
                <p className="text-text-light text-sm">For urgent administrative matters only</p>
              </div>
            </div>
            <a 
              href="tel:+919005311002"
              className="px-6 py-3 rounded-xl bg-red-50 text-red-600 font-bold hover:bg-red-500 hover:text-white transition-colors duration-300 w-full md:w-auto text-center border border-red-100 hover:border-red-500"
            >
              +91 9005311002
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactCards.map((card, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <a
                  href={card.action}
                  target={card.target}
                  rel={card.target === '_blank' ? 'noopener noreferrer' : ''}
                  className="block h-full bg-white p-8 rounded-[2rem] shadow-soft border border-gray-50 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group text-center"
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`text-2xl ${card.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{card.title}</h3>
                  <div className="space-y-1 mb-8">
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-text-light font-medium">{line}</p>
                    ))}
                  </div>
                  <span className={`inline-block font-bold text-sm uppercase tracking-wider ${card.color} group-hover:opacity-80 transition-opacity`}>
                    {card.actionText} →
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Section */}
            <ScrollReveal direction="left">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-glass border border-gray-100">
                <SectionHeading
                  title="Send us a Message"
                  subtitle="Fill out the form below and we will get back to you shortly."
                  className="mb-10 text-left"
                />
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Map & Timings Section */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                
                {/* School Timings */}
                <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <FaClock className="text-secondary text-2xl" />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl font-bold text-text mb-4">School Timings</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-text-light">Monday - Friday</span>
                        <span className="font-bold text-text bg-gray-50 px-3 py-1 rounded-lg">8:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-text-light">Saturday</span>
                        <span className="font-bold text-text bg-gray-50 px-3 py-1 rounded-lg">8:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-text-light">Sunday</span>
                        <span className="font-bold text-red-500 bg-red-50 px-3 py-1 rounded-lg">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white p-4 rounded-3xl shadow-soft border border-gray-50 overflow-hidden group">
                  <div className="flex items-center justify-between px-4 pb-4 pt-2">
                    <h3 className="text-lg font-bold text-text flex items-center gap-2">
                      <FaMapLocationDot className="text-primary" /> Find Us Here
                    </h3>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative isolate">
                    {/* Placeholder for map - replacing with iframe in production */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14256.096417726357!2d83.74381895!3d26.7029562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993ed610816997d%3A0xc0c4069811abec28!2sKaptanganj%2C%20Uttar%20Pradesh%20274301!5e0!3m2!1sen!2sin!4v1689578148972!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="School Location Map"
                      className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
