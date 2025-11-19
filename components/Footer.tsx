import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center text-white">
                <GraduationCap size={20} />
            </div>
            <span className="text-white font-bold text-lg">Academia Student Village</span>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Academia Student Village. All rights reserved.</p>
            <p className="mt-1">Developed with React & Gemini AI.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;