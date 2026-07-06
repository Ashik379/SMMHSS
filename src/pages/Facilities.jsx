import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import FacilityCard from '../components/FacilityCard';
import facilitiesData from '../data/facilities.json';

/**
 * Facilities Page - Full grid of all school facilities
 */
const Facilities = () => {
  return (
    <>
      <Helmet>
        <title>Facilities - Shree Mahendra Mishra Higher Secondary School</title>
        <meta name="description" content="Explore our world-class facilities including smart classrooms, computer labs, science labs, library, sports facilities, and more." />
      </Helmet>

      {/* Page Header */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Facilities</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            World-class infrastructure designed to provide the best learning experience
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="State-of-the-Art Facilities"
            subtitle="Our campus is equipped with modern amenities to support holistic education"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesData.map((facility, index) => (
              <FacilityCard key={facility.id} facility={facility} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
