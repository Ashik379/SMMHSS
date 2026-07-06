import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import AnnouncementTicker from '../components/AnnouncementTicker';
import FloatingActionButtons from '../components/FloatingActionButtons';
import PageTransition from '../components/PageTransition';

/**
 * MainLayout - Wraps all pages with global components
 */
const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <AnnouncementTicker />
        <Navbar />
      </div>
      <main className={`flex-1 ${pathname === '/' ? '' : 'pt-[112px]'}`}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <FloatingActionButtons />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
