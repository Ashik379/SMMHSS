import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowRight
} from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import schoolInfo from '../data/schoolInfo.json';

/**
 * Footer - Premium 4-column footer with accessible links
 */
const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/notices', label: 'Notice Board' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook', bg: 'hover:bg-[#1877F2]' },
    { icon: FaTwitter, href: '#', label: 'Twitter', bg: 'hover:bg-[#1DA1F2]' },
    { icon: FaInstagram, href: '#', label: 'Instagram', bg: 'hover:bg-[#E4405F]' },
    { icon: FaYoutube, href: '#', label: 'YouTube', bg: 'hover:bg-[#FF0000]' },
  ];

  const phoneNumber = schoolInfo.phone.replace(/\s+/g, '');

  return (
    <footer className="bg-primary-dark text-white pt-20 border-t-4 border-secondary relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site Footer</h2>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} aria-hidden="true" />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-4 mb-6 group inline-flex focus-visible:ring-4 focus-visible:ring-primary/30 outline-none rounded-xl p-1" aria-label="Go to Homepage">
              <img src="/assets/images/logo/logo.png" alt="SMMHSS Logo" className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
              <div>
                <h3 className="font-bold text-xl tracking-tight text-white group-hover:text-secondary transition-colors">{schoolInfo.shortName}</h3>
                <p className="text-sm font-medium text-secondary">A Legacy of Excellence</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              {schoolInfo.name} is dedicated to nurturing young minds with quality education, modern infrastructure, and strong moral values.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`Follow us on ${social.label}`}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-transparent ${social.bg} transition-all duration-300 hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-secondary/30 outline-none`}
                >
                  <social.icon className="text-sm" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h3 className="text-lg font-bold mb-6 text-white">Explore</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-secondary text-sm font-medium transition-all duration-200 flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-secondary outline-none rounded p-1"
                  >
                    <FaArrowRight className="text-[10px] text-primary group-hover:text-secondary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3.5 text-gray-400 hover:text-white transition-colors group focus-visible:ring-2 focus-visible:ring-secondary outline-none rounded p-1" aria-label="Open location in Google Maps">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <FaLocationDot className="text-primary group-hover:text-white text-sm" aria-hidden="true" />
                  </div>
                  <span className="text-sm leading-relaxed mt-1">{schoolInfo.location}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-3.5 text-gray-400 hover:text-white transition-colors group focus-visible:ring-2 focus-visible:ring-secondary outline-none rounded p-1" aria-label={`Call us at ${schoolInfo.phone}`}>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <FaPhone className="text-primary group-hover:text-white text-sm" aria-hidden="true" />
                  </div>
                  <span className="text-sm">{schoolInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${schoolInfo.email}`} className="flex items-center gap-3.5 text-gray-400 hover:text-white transition-colors group focus-visible:ring-2 focus-visible:ring-secondary outline-none rounded p-1" aria-label={`Email us at ${schoolInfo.email}`}>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <FaEnvelope className="text-primary group-hover:text-white text-sm" aria-hidden="true" />
                  </div>
                  <span className="text-sm">{schoolInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: School Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">School Hours</h3>
            <div className="space-y-3.5 text-sm mb-8 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" role="list">
              <div className="flex justify-between items-center border-b border-white/10 pb-3" role="listitem">
                <span className="text-gray-400">Mon - Fri</span>
                <span className="font-semibold text-white">8:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3" role="listitem">
                <span className="text-gray-400">Saturday</span>
                <span className="font-semibold text-white">8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between items-center" role="listitem">
                <span className="text-gray-400">Sunday</span>
                <span className="font-semibold text-red-400">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {schoolInfo.shortName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link to="/contact" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none rounded px-1">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-gray-600" aria-hidden="true" />
            <Link to="/contact" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none rounded px-1">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
