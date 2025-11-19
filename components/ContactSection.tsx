import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { ACADEMIA_CONTACT } from '../constants';
import { ContactFormState } from '../types';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would interact with a backend service.
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to make Academia your home away from home? Contact us today to schedule a viewing or apply for a room.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Visit Us</h4>
                  <p className="text-gray-400 mt-1 max-w-xs">{ACADEMIA_CONTACT.address}</p>
                  <a href="https://maps.google.com/?q=Academia+Student+Village" target="_blank" rel="noreferrer" className="text-brand-orange text-sm mt-2 inline-block hover:underline">
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Call Us</h4>
                  <p className="text-gray-400 mt-1">{ACADEMIA_CONTACT.phone}</p>
                  <p className="text-gray-500 text-sm">Mon-Fri, 8am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email Us</h4>
                  <div className="flex flex-col mt-1">
                    {ACADEMIA_CONTACT.emails.map((email, idx) => (
                        <a key={idx} href={`mailto:${email}`} className="text-gray-400 hover:text-brand-orange transition-colors">
                            {email}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="072 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none"
                  placeholder="I'm interested in a single room for next semester..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;