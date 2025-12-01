import React from 'react';
import aeonImage from '../assets/AEON.png';
import aeonMobileImage from '../assets/Aeonmob.png';

/**
 * Meet AEON Section
 * Introduction section with large, bold text on white background
 */
const MeetAEON = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <div className="container mx-auto px-6 sm:px-6 md:px-12">
        <div className=" text-center">
          <p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
          >
            Meet <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">AEON —</span> your dedicated <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">AI Assistant</span> and the first step towards AI adoption. Powered by <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">EVOKE,</span> AEON transforms your knowledge base into <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">an intelligent assistant</span> that engages customers, captures qualified leads, and automates responses with precision. It turns everyday interactions into <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">measurable business outcomes</span> effortlessly and at scale.
          </p>
        </div>
      </div>
      <div className='w-full  sm:w-[95%]  md:w-[90%] lg:w-[85%] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[990px] rounded-[38px] md:rounded-[83px] overflow-hidden mt-8 sm:mt-6 md:mt-8   relative flex items-start justify-center border-2' style={{ borderColor: '#FBCE33', boxShadow: '0 0 20px rgba(251, 206, 51, 0.6), 0 0 40px rgba(251, 206, 51, 1), 0 0 80px rgba(251, 206, 51, 0.2)' }} >
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
