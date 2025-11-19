import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;