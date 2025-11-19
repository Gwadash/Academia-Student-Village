import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm">Amenities & Community</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Facilities & Life at ASV
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From academic success to community building, we provide everything you need for a balanced student life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group overflow-hidden"
            >
               {/* Image Header if available */}
               {feature.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className={`p-6 ${feature.image ? 'pt-4' : ''}`}>
                 {!feature.image && (
                    <div className="absolute -top-4 left-6 bg-gray-900 rounded-lg p-3 shadow-lg group-hover:bg-brand-orange transition-colors duration-300">
                        <div className="text-white group-hover:text-white">
                        {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-white" })}
                        </div>
                    </div>
                 )}
                 
                 {/* If there is an image, we show the icon differently or smaller next to title */}
                 {feature.image && (
                     <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-brand-orange rounded-md text-white inline-block">
                             {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                     </div>
                 )}

                {!feature.image && (
                     <div className="pt-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                     </div>
                )}
                
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;