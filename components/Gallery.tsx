import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-xl">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Life at Academia
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                    Take a visual tour of our facilities, rooms, and social spaces.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
                key={index} 
                className={`group relative overflow-hidden rounded-xl shadow-md cursor-pointer ${
                    index === 0 || index === 4 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
            >
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-colors duration-300 z-10" />
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                <span className="text-xs font-bold uppercase tracking-wider bg-brand-orange px-2 py-1 rounded-sm mb-2 inline-block">
                    {image.category}
                </span>
                <h3 className="text-lg font-bold leading-tight">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;