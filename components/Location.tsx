import React from 'react';
import { MapPin } from 'lucide-react';
import { ACADEMIA_CONTACT } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-orange font-semibold tracking-wide uppercase text-sm">Location</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Find Us
          </h3>
          <div className="mt-4 flex items-center justify-center text-gray-500 gap-2">
            <MapPin className="w-5 h-5 text-brand-orange" />
            <p className="text-xl">{ACADEMIA_CONTACT.address}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 h-[450px] w-full rounded-xl overflow-hidden relative z-0">
                <iframe 
                    width="100%" 
                    height="100%" 
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=35%20Andries%20Potgieter%20Blvd%2C%20Vanderbijlpark%20S.%20E.%206%2C%20Vanderbijlpark%2C%201911&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Academia Location"
                    className="w-full h-full"
                ></iframe>
            </div>
            <div className="mt-4 flex justify-center">
                <a 
                    href="https://maps.google.com/?q=35+Andries+Potgieter+Blvd,+Vanderbijlpark+S.+E.+6,+Vanderbijlpark,+1911"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-brand-orange font-semibold hover:underline flex items-center gap-1"
                >
                    Open in Google Maps &rarr;
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Location;