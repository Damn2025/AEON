import React from 'react';
import aeonImage from '../assets/AEON.png';
import aeonMobileImage from '../assets/Aeonmob.png';

/**
 * Meet AEON Section
 * Introduction section with large, bold text on white background
 */
const MeetAEON = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-16 pb-12 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-6 sm:px-6 md:px-12">
        <div className=" text-center">
          <p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Meet AEON —</span> <span className='font-semibold text-white'>your smart platform to build <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">custom AI chatbots</span> that drive <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">real business results</span>. Engage visitors, capture <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">high-intent leads</span>, and automate responses with <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">precision</span>. AEON helps you convert everyday interactions into <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">meaningful outcomes</span> — effortlessly and at scale. </span>
          </p>
        </div>
      </div>
      <div className='w-full sm:w-[95%] md:w-[90%] lg:w-[85%] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[990px] rounded-[38px] md:rounded-[83px] overflow-hidden mt-8 sm:mt-6 md:mt-8 px-4 sm:px-0 relative flex items-start justify-center border-2' style={{ borderColor: '#FBCE33', boxShadow: '0 0 20px rgba(251, 206, 51, 0.6), 0 0 40px rgba(251, 206, 51, 0.4), 0 0 60px rgba(251, 206, 51, 0.2)' }} >
        {/* Mobile Image */}
        <img 
          src={aeonMobileImage} 
          alt="AEON" 
          className="w-full h-full object-cover object-top md:hidden rounded-[38px]"
          style={{ objectPosition: 'center top' }}
        />
        {/* Desktop Image */}
        <img 
          src={aeonImage} 
          alt="AEON" 
          className="hidden md:block w-full h-full object-cover object-top rounded-[83px]"
          style={{ objectPosition: 'center top' }}
        />
      </div>
    </section>
  );
};

export default MeetAEON;

