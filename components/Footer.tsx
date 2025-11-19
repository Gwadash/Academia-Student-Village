import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ACADEMIA_CONTACT } from '../constants';

interface FooterProps {
  onApplyClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onApplyClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onApplyClick) {
      onApplyClick();
    } else {
        // Fallback
        const element = document.querySelector('#contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center text-white">
                        <GraduationCap size={20} />
                    </div>
                    <span className="text-white font-bold text-lg">Academia</span>
                </div>
                <p className="text-sm mb-4">
                    A professional student village offering a safe, conducive environment for your academic journey.
                </p>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-brand-orange transition-colors">Home</a></li>
                    <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-brand-orange transition-colors">About</a></li>
                    <li><a href="#amenities" onClick={(e) => handleNavClick(e, '#amenities')} className="hover:text-brand-orange transition-colors">Accommodation & Facilities</a></li>
                    <li><a href="#apply" onClick={handleApplyLinkClick} className="hover:text-brand-orange transition-colors">Apply Now</a></li>
                    <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-brand-orange transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                    <li>{ACADEMIA_CONTACT.address}</li>
                    <li>{ACADEMIA_CONTACT.phone}</li>
                    {ACADEMIA_CONTACT.emails.map((email, i) => (
                         <li key={i}><a href={`mailto:${email}`} className="hover:text-white">{email}</a></li>
                    ))}
                </ul>
            </div>
            
             <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-brand-orange transition-colors">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-brand-orange transition-colors">Residence Rules</a></li>
                </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Academia Student Village. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Developed with React & Gemini AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;