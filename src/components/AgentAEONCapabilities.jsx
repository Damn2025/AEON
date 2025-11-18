import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

/**
 * Agent AEON Capabilities Component
 * "What Can Agent AEON Do?" section with animated cards
 */
const AgentAEONCapabilities = () => {
  const titleRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const card3Ref = useScrollAnimation();
  const card4Ref = useScrollAnimation();
  const card5Ref = useScrollAnimation();

  const capabilities = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Answers',
      description: 'Handles tens of thousands of unique queries, from troubleshooting to FAQs, so your customers always get the answers they need—instantly.',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Proactive Support',
      description: 'Monitors customer requests in real time, predicts needs, and resolves concerns before they escalate.',
      gradient: 'from-yellow-600 to-yellow-700',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Multichannel Coverage',
      description: 'Manages support across email, chat, web, and social platforms for a seamless customer experience.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Task Automation',
      description: 'Automates routine support actions—like password resets, returns, and ticket creation—freeing human agents for higher-value work.',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Knowledge Integration',
      description: 'Has access to your latest policies, product docs, and brand data, ensuring up-to-date and on-brand responses every time.',
      gradient: 'from-yellow-600 to-yellow-500',
    },
  ];

  const refs = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref];

  return (
    <section id="capabilities" className="py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Can <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Agent AEON</span> Do?
          </h2>
          <p className="text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Powerful capabilities designed to transform your customer support operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const delay = `delay-${(index + 1) * 100}`;
            return (
              <div
                key={index}
                ref={refs[index]}
                className={`animate-on-scroll fade-in-up ${delay} group`}
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${capability.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <div className="text-white">
                        {capability.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {capability.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {capability.description}
                    </p>
                  </div>

                  {/* Animated border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentAEONCapabilities;

