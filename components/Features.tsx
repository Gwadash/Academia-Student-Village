import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm">Why Choose Us</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Designed for Student Success
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to live comfortably and study effectively is right here on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="absolute -top-4 left-6 bg-gray-900 rounded-lg p-3 shadow-lg group-hover:bg-brand-orange transition-colors duration-300">
                <div className="text-white group-hover:text-white">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
                </div>
              </div>
              <div className="pt-8">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
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