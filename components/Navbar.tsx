import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onApplyClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onApplyClick) {
      onApplyClick();
      setIsOpen(false);
    } else {
      // Fallback if no handler is provided
      const element = document.querySelector('#contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={24} />
            </div>
            <div>
                <h1 className="text-xl font-bold text-gray-900 leading-none">Academia</h1>
                <p className="text-xs text-brand-orange font-semibold tracking-wider">STUDENT VILLAGE</p>
            </div>
          </a>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-600 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleApplyClick}
                className="bg-brand-orange text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/30"
              >
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-brand-orange block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleApplyClick}
              className="w-full text-left bg-brand-orange text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;