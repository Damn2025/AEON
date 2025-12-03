import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MeetAEON from "./MeetAEON";
import AIAdoption from "./AIAdoption";
import TrustedBy from "./TrustedBy";
import HowAEONWorksPage from "./HowAEONWorksPage";
import AgentAEONCapabilities from "./AgentAEONCapabilities";
import DelightfulService from "./DelightfulService";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";
import Contact from "./Contact";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import FloatingContactButtons from "./FloatingContactButtons";
import { initScrollAnimations } from "../utils/animations";

/**
 * Home Component
 * Main landing page with all sections
 */
function Home() {
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
        <HowAEONWorksPage />
        <AgentAEONCapabilities />
        <DelightfulService />
        <AIAdoption/>
        <Pricing />
        <Testimonials />
        <FAQs />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

export default Home;

