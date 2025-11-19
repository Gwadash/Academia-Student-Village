import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm">Student Voices</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Students Say About ASV
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 left-8 bg-brand-orange text-white p-2 rounded-full">
                <Quote className="w-4 h-4 fill-current" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                <div>
                    <p className="font-bold text-gray-900">{review.author}</p>
                    <p className="text-xs text-gray-500">Via {review.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;