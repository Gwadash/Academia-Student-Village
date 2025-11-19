import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Location from './components/Location';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import ApplicationModal from './components/ApplicationModal';
import Testimonials from './components/Testimonials';

function App() {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const openApplicationModal = () => {
    setIsApplicationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange selection:text-white">
      <Navbar onApplyClick={openApplicationModal} />
      <main>
        <Hero onApplyClick={openApplicationModal} />
        <About />
        <Features />
        <Gallery />
        <Testimonials />
        <Location />
        <ContactSection />
      </main>
      <Footer onApplyClick={openApplicationModal} />
      <AIChatbot />
      <ApplicationModal 
        isOpen={isApplicationModalOpen} 
        onClose={() => setIsApplicationModalOpen(false)} 
      />
    </div>
  );
}

export default App;