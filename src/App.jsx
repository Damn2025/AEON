import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MeetAEON from "./components/MeetAEON";
import TrustedBy from "./components/TrustedBy";
import HowAEONWorksPage from "./components/HowAEONWorksPage";
import AgentAEONCapabilities from "./components/AgentAEONCapabilities";
import DelightfulService from "./components/DelightfulService";
import ElevateExperience from "./components/ElevateExperience";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import { initScrollAnimations } from "./utils/animations";

/**
 * Main App Component
 * Renders all sections of the AEON website
 */
function App() {
  // Initialize scroll animations on mount
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <MeetAEON />
        <TrustedBy />
        {/* <HowAEONWorks /> */}
        <HowAEONWorksPage />
        <AgentAEONCapabilities />
        <DelightfulService />
        <ElevateExperience />
        <Pricing />
        <Testimonials />
        <FAQs />
        <Contact />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
