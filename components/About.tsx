import React from 'react';
import { ACADEMIA_CONTACT } from '../constants';
import { Star, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">About Academia</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              More Than Just <br/> <span className="text-brand-orange">Accommodation</span>
            </h3>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6 text-lg leading-relaxed italic border-l-4 border-brand-orange pl-4 bg-gray-50 py-2 pr-2 rounded-r-lg">
                "Our primary objective is to provide a conducive, well-maintained and safe environment for students. Academia Student Village is a home away from home."
              </p>
              <p className="text-base text-justify">
                Located at 35 Andries Potgieter Blvd, we offer a vibrant community where academic success meets 
                comfortable living. We understand that student life is a journey, and we are here to support you 
                with top-tier security, modern amenities, and a supportive environment.
              </p>
            </div>

            <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-50 p-3 rounded-full">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{ACADEMIA_CONTACT.rating}</p>
                  <p className="text-sm text-gray-500">Student Rating</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{ACADEMIA_CONTACT.reviewCount}</p>
                  <p className="text-sm text-gray-500">Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform hover:rotate-1 transition-transform duration-500">
              <img 
                src="https://placehold.co/800x1000/ea580c/ffffff?text=Building+Exterior+Image" 
                alt="Student Life at Academia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                 <p className="text-white font-medium text-lg">Experience the best of student living in Vanderbijlpark.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;