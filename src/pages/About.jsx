import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaBookOpen, FaEye, FaBullseye } from 'react-icons/fa6';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import LazyImage from '../components/LazyImage';
import schoolInfo from '../data/schoolInfo.json';

/**
 * About Page - Premium typography and authentic content
 */
const About = () => {
  const values = [
    { id: 1, title: "Excellence", description: "Striving for the highest standards in academics and character." },
    { id: 2, title: "Integrity", description: "Acting with honesty, fairness, and strong moral principles." },
    { id: 3, title: "Respect", description: "Honoring the rights, feelings, and traditions of others." },
    { id: 4, title: "Innovation", description: "Embracing new ideas and creative approaches to learning." }
  ];

  const timeline = [
    { year: "2005", title: "Foundation", desc: "Shree Mahendra Mishra Higher Secondary School established with a vision to transform education in Kushinagar." },
    { year: "2010", title: "Infrastructure Expansion", desc: "Inaugurated the new science blocks and state-of-the-art central library." },
    { year: "2015", title: "Higher Secondary Upgradation", desc: "Officially upgraded to 10+2 with specialized Science and Commerce streams." },
    { year: "2020", title: "Digital Campus Initiative", desc: "Implemented smart classes, campus-wide Wi-Fi, and advanced computer labs." },
    { year: "2023", title: "Excellence Award", desc: "Recognized as a leading educational institution for 100% board results." }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - SMMHSS</title>
        <meta name="description" content="Learn about the history, mission, vision, and leadership of Shree Mahendra Mishra Higher Secondary School." />
      </Helmet>

      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary-dark via-[#0d2a4a] to-primary overflow-hidden" aria-label="About Us Header">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-6 shadow-xl border border-white/20">
              <FaBookOpen className="text-3xl text-secondary" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-light">Story</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              A legacy of academic excellence and character building since our inception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder & Principal Message */}
      <section className="py-16 md:py-24 bg-surface" aria-labelledby="principal-message-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[3rem] p-6 md:p-16 shadow-soft border border-gray-100 flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image using LazyImage */}
            <ScrollReveal direction="left" className="w-full lg:w-2/5">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl bg-gray-100 group">
                <LazyImage 
                  src="/assets/images/principal/principal.jpg"
                  alt={`Portrait of ${schoolInfo.principal}, Principal of SMMHSS`}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                {/* Name tag */}
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-dark rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white text-center mb-1 drop-shadow-md">{schoolInfo.founder}</h3>
                  <p className="text-sm font-medium text-secondary text-center">Founder & Principal</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Message */}
            <ScrollReveal direction="right" className="w-full lg:w-3/5">
              <SectionHeading 
                id="principal-message-heading"
                title="Principal's Message" 
                subtitle="Guiding the next generation towards a brighter future"
                className="text-left mb-10" 
              />
              <div className="prose prose-lg prose-blue max-w-none text-text-light leading-relaxed">
                <p className="mb-6 font-medium text-xl text-text leading-snug">
                  "Education is not merely about academic excellence; it is about character building, instilling moral values, and equipping students with the resilience to navigate the challenges of tomorrow."
                </p>
                <p className="mb-6">
                  Welcome to {schoolInfo.name}. When we laid the foundation of this institution, our vision was unequivocal: to create an educational sanctuary where every child is nurtured with care, guided with wisdom, and empowered with knowledge.
                </p>
                <p>
                  Over the years, we have remained steadfast to that vision. Our state-of-the-art facilities, dedicated faculty, and a comprehensive curriculum ensure that our students do not just learn—they thrive. We invite you to be a part of our journey and our growing family.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-primary-dark relative" aria-label="Mission and Vision">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Vision */}
            <ScrollReveal delay={0.1}>
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 shadow-lg">
                  <FaEye className="text-3xl text-primary-dark" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {schoolInfo.vision}
                </p>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={0.3}>
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-8 shadow-lg">
                  <FaBullseye className="text-3xl text-white" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {schoolInfo.mission}
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="core-values-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            id="core-values-heading"
            title="Our Core Values"
            subtitle="The principles that guide our institution"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.id} delay={index * 0.1}>
                <div className="text-center p-8 rounded-[2rem] bg-surface border border-gray-50 hover:shadow-soft hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center font-black text-xl text-primary mb-6">
                    {value.id}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{value.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Educational Approach */}
      <section className="py-16 md:py-24 bg-surface border-t border-gray-100" aria-labelledby="approach-heading">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <SectionHeading
            id="approach-heading"
            title="Our Educational Approach"
            subtitle="How we nurture the leaders of tomorrow"
          />
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-soft hover:border-primary/20 transition-all h-full">
                <h4 className="text-2xl font-bold text-text mb-4">Holistic Development</h4>
                <p className="text-text-light leading-relaxed">
                  We believe that true education extends far beyond textbooks. Our curriculum is designed to balance rigorous academic pursuits with sports, arts, and character education. We focus on developing the whole child—intellectually, emotionally, and physically.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-soft hover:border-primary/20 transition-all h-full">
                <h4 className="text-2xl font-bold text-text mb-4">Student-Centric Learning</h4>
                <p className="text-text-light leading-relaxed">
                  Every child has a unique learning style and pace. Our experienced faculty employs personalized teaching methodologies, ensuring that every student receives the attention and support they need to excel. We foster a safe, inclusive environment where questions are encouraged.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-soft hover:border-primary/20 transition-all h-full">
                <h4 className="text-2xl font-bold text-text mb-4">Modern Pedagogy</h4>
                <p className="text-text-light leading-relaxed">
                  By integrating smart classroom technology, well-equipped laboratories, and hands-on projects, we bridge the gap between theoretical concepts and practical applications. We prepare our students to become innovative thinkers and problem-solvers in a rapidly changing digital world.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-soft hover:border-primary/20 transition-all h-full">
                <h4 className="text-2xl font-bold text-text mb-4">Moral & Ethical Grounding</h4>
                <p className="text-text-light leading-relaxed">
                  In a complex world, a strong moral compass is essential. We embed ethical reasoning, cultural appreciation, and social responsibility into our daily activities, guiding our students to become compassionate, responsible global citizens who contribute positively to society.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
