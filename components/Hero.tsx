import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { ACADEMIA_CONTACT } from '../constants';

interface HeroProps {
  onApplyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onApplyClick) {
      onApplyClick();
    } else {
       const element = document.querySelector('#contact');
       if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://placehold.co/1920x1080/1f2937/ea580c?text=Main+Gate+Image+Here" 
          alt="Academia Student Village Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="md:w-2/3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
             <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
             <span className="text-sm font-medium">{ACADEMIA_CONTACT.rating} Rated Student Housing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Your Home Away <br/>
            <span className="text-brand-orange">From Home</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Our primary objective is to provide a conducive, well-maintained, and safe environment for students. 
            Experience the perfect balance of academic focus and student life in Vanderbijlpark.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={handleApplyClick}
              className="bg-brand-orange text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-600/40"
            >
              Book Your Room
            </button>
            <a 
              href="#gallery" 
              onClick={(e) => handleNavClick(e, '#gallery')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-brand-dark transition-all inline-block"
            >
              View Gallery
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start text-gray-400 gap-2 text-sm">
             <MapPin className="w-4 h-4" />
             <span>{ACADEMIA_CONTACT.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;