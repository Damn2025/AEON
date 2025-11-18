import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

/**
 * Agent AEON Introduction Component
 * Introduction section for Agent AEON customer support AI
 */
const AgentAEONIntro = () => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const badgeRef = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center">
          <div className="text-center max-w-5xl">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="animate-on-scroll fade-in-up mb-8 inline-block"
            >
              <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold backdrop-blur-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5z" />
                </svg>
                Customer Support AI
              </span>
            </div>

            <h2
              ref={titleRef}
              className="animate-on-scroll fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
            >
              Agent <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">AEON</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-300 mt-2 block">
                Your Dedicated Customer Support AI
              </span>
            </h2>

            <p
              ref={subtitleRef}
              className="animate-on-scroll fade-in-up delay-100 mt-6 max-w-4xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Designed to provide <span className="text-yellow-400 font-semibold">fast, friendly, and precise</span> service for every customer at any time of day. Whether answering questions, troubleshooting issues, or guiding users to solutions, AEON transforms customer-facing operations with <span className="text-yellow-300 font-semibold">intelligence and empathy</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentAEONIntro;

