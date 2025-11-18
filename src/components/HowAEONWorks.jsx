import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

/**
 * How AEON Works Component
 * Roadmap section showing the 4-step process of how AEON works
 */
const HowAEONWorks = () => {
  const titleRef = useScrollAnimation();
  const step1Ref = useScrollAnimation();
  const step2Ref = useScrollAnimation();
  const step3Ref = useScrollAnimation();
  const step4Ref = useScrollAnimation();

  const steps = [
    {
      number: '1',
      title: 'Build',
      description: 'Choose a template or start from scratch using the visual builder.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Train',
      description: 'Upload your data or connect your website for instant knowledge sync.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Customize',
      description: 'Set colors, brand voice, actions, and advanced logic.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: '4',
      title: 'Deploy',
      description: 'Copy-paste one script. Your bot goes live instantly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const refs = [step1Ref, step2Ref, step3Ref, step4Ref];

  return (
    <section id="how-it-works" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            How <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">AEON</span> Works
          </h2>
          <p className="text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Get your AI assistant up and running in four simple steps
          </p>
        </div>

        {/* Roadmap Timeline - Alternating Left/Right */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line - centered */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-yellow-500 transform -translate-x-1/2 hidden md:block"></div>

            {/* Steps */}
            {steps.map((step, index) => {
              const delay = `delay-${(index + 1) * 100}`;
              const isEven = index % 2 === 0; // 0, 2 are left (even index), 1, 3 are right (odd index)
              
              return (
                <div
                  key={index}
                  ref={refs[index]}
                  className={`relative mb-16 last:mb-0 animate-on-scroll fade-in-up ${delay}`}
                >
                  <div className={`flex flex-col md:flex-row items-start gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Step Number Circle - Always centered on line */}
                    <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 group">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl md:text-2xl shadow-lg shadow-yellow-500/30 border-4 border-[#0A0A0A] group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                        <span className="relative z-10">{step.number}</span>
                        {/* Icon overlay on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yellow-600 rounded-full">
                          <div className="text-black scale-75">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Content Card - Alternating sides */}
                    <div className={`flex-1 pt-2 md:pt-0 ${
                      isEven ? 'md:text-left md:pr-8 md:mr-auto md:max-w-md' : 'md:text-right md:pl-8 md:ml-auto md:max-w-md'
                    }`}>
                      <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Step {step.number} — {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowAEONWorks;

