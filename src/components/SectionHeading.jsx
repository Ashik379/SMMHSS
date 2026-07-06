import ScrollReveal from './ScrollReveal';

/**
 * SectionHeading - Reusable section title with decorative underline
 * Used consistently across all pages for section titles
 */
const SectionHeading = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <ScrollReveal>
      <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
        <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''} mb-6`}>
          <span className="block w-12 h-[2px] bg-gradient-to-r from-transparent to-secondary"></span>
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="block w-12 h-[2px] bg-gradient-to-l from-transparent to-secondary"></span>
        </div>
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-tight ${
            light ? 'text-white drop-shadow-md' : 'text-text'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-lg md:text-xl font-light max-w-2xl leading-relaxed ${
              centered ? 'mx-auto' : ''
            } ${
              light ? 'text-white/80' : 'text-text-light'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default SectionHeading;
