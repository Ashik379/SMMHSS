import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCircleCheck, FaCircleExclamation } from 'react-icons/fa6';

/**
 * ContactForm - Premium contact form with enhanced validation and styling
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Enhanced validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name is too short';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Please provide a more detailed message';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Simulate API call
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Helper for input styling
  const getInputClass = (fieldName) => `
    w-full px-5 py-3.5 rounded-xl border bg-surface/50 text-text transition-all duration-300
    ${errors[fieldName] 
      ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
      : 'border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-gray-300'
    }
    placeholder-text-light/50 outline-none
  `;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-16 px-6"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
              <FaCircleCheck className="text-5xl text-green-500 drop-shadow-md" />
            </div>
            <h3 className="text-3xl font-bold text-text mb-4">Message Sent Successfully!</h3>
            <p className="text-text-light max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. Our administration team has received your message and will respond within 24-48 working hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-6 py-2.5 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={getInputClass('name')}
                  />
                  {errors.name && (
                    <FaCircleExclamation className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400" />
                  )}
                </div>
                {errors.name && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className={getInputClass('email')}
                  />
                  {errors.email && (
                    <FaCircleExclamation className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400" />
                  )}
                </div>
                {errors.email && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={getInputClass('phone')}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Admission Inquiry, Feedback, etc."
                    className={getInputClass('subject')}
                  />
                  {errors.subject && (
                    <FaCircleExclamation className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400" />
                  )}
                </div>
                {errors.subject && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.subject}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-text mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  rows={5}
                  className={`${getInputClass('message')} resize-none`}
                />
              </div>
              {errors.message && <p className="mt-1.5 text-xs font-medium text-red-500">{errors.message}</p>}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full md:w-auto px-10 py-4 rounded-xl text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary to-primary-light shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
