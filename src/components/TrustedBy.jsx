import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

/**
 * TrustedBy Component
 * Marquee section displaying trusted organizations
 */
const TrustedBy = () => {
  const ref = useScrollAnimation();

  const companies = [
    'evoke',
    'Nexus',
    'Quantum',
    'Aperture',
    'Momentum',
    'Zenith',
    'Nova',
    'Orion',
    'Cygnus',
    'Pulse',
  ];

  return (
    <section className="py-12 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-400 font-semibold mb-6">
          TRUSTED BY VISIONARY ORGANIZATIONS FOR 24/7 INTELLIGENCE
        </p>
        <div ref={ref} className="marquee animate-on-scroll fade-in">
          <div className="marquee-content">
            {/* Duplicate content for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="marquee-item text-gray-400 text-2xl font-bold">
                {company === 'evoke' ? (
                  <>
                    ev<span className="text-yellow-500">o</span>ke
                  </>
                ) : (
                  company
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

