/**
 * Utility helper functions for the school website
 */

/**
 * Format a date string into a readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

/**
 * Format a date into day and month separately (for event cards)
 * @param {string} dateString - ISO date string
 * @returns {{ day: string, month: string, year: string }}
 */
export const getDateParts = (dateString) => {
  const date = new Date(dateString);
  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleString('en-IN', { month: 'short' }).toUpperCase(),
    year: date.getFullYear().toString(),
  };
};

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum character length
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Smooth scroll to an element by ID
 * @param {string} elementId - Target element ID
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Check if a date is in the future
 * @param {string} dateString - ISO date string
 * @returns {boolean}
 */
export const isFutureDate = (dateString) => {
  return new Date(dateString) > new Date();
};

/**
 * Generate placeholder gradient background based on category
 * @param {string} category - Category name
 * @returns {string} CSS gradient string
 */
export const getCategoryGradient = (category) => {
  const gradients = {
    'Campus': 'from-blue-500 to-cyan-400',
    'Classrooms': 'from-emerald-500 to-teal-400',
    'Events': 'from-purple-500 to-pink-400',
    'Sports': 'from-orange-500 to-amber-400',
    'Independence Day': 'from-green-600 to-orange-500',
    'Annual Function': 'from-rose-500 to-purple-500',
  };
  return gradients[category] || 'from-blue-500 to-cyan-400';
};

/**
 * Get category color for badges and pills
 * @param {string} category - Category name
 * @returns {string} Tailwind CSS classes
 */
export const getCategoryColor = (category) => {
  const colors = {
    'Examination': 'bg-red-100 text-red-700',
    'Event': 'bg-purple-100 text-purple-700',
    'Meeting': 'bg-blue-100 text-blue-700',
    'Academic': 'bg-green-100 text-green-700',
    'Admission': 'bg-amber-100 text-amber-700',
    'Administrative': 'bg-gray-100 text-gray-700',
    'National': 'bg-orange-100 text-orange-700',
    'Sports': 'bg-cyan-100 text-cyan-700',
    'Cultural': 'bg-pink-100 text-pink-700',
  };
  return colors[category] || 'bg-gray-100 text-gray-700';
};
