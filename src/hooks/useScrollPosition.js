import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * @param {number} threshold - Pixel threshold for isScrolled flag
 * @returns {{ scrollY: number, isScrolled: boolean, scrollDirection: string }}
 */
const useScrollPosition = (threshold = 50) => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: 'up',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      setScrollData({
        scrollY: currentScrollY,
        isScrolled: currentScrollY > threshold,
        scrollDirection: direction,
      });

      lastScrollY = currentScrollY;
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollData;
};

export default useScrollPosition;
