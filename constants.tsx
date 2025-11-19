import React from 'react';
import { Wifi, ShieldCheck, BookOpen, Monitor, Droplets, Car, Coffee, Home } from 'lucide-react';
import { Feature, GalleryImage } from './types';

export const ACADEMIA_CONTACT = {
  address: "35 Andries Potgieter Blvd, Vanderbijlpark S. E. 6, Vanderbijlpark, 1911",
  phone: "072 323 0062",
  email: "admin@academiavillage.co.za",
  rating: "4.1",
  reviewCount: 205
};

export const ACADEMIA_SYSTEM_INSTRUCTION = `
You are the virtual concierge for Academia Student Village, a premier student housing facility in Vanderbijlpark. 
Your goal is to assist students and parents with inquiries.
Key Details:
- Address: ${ACADEMIA_CONTACT.address}
- Phone: ${ACADEMIA_CONTACT.phone}
- Rating: ${ACADEMIA_CONTACT.rating} stars based on ${ACADEMIA_CONTACT.reviewCount} reviews.
- Motto: "Home away from home."
- Facilities: Secure parking, Laundry room with washing machines, Fully equipped communal kitchens, TV Room/Lounge, Dedicated Study Area, Ensuite bathrooms (shower/toilet), Water tanks (backup water), 24/7 Security.
- Tone: Professional, welcoming, helpful, and safe.
- If asked about prices, ask them to contact the office directly at the phone number provided as rates vary by room type.
`;

export const FEATURES: Feature[] = [
  {
    icon: <Wifi className="w-6 h-6 text-brand-orange" />,
    title: "High-Speed WiFi",
    description: "Stay connected for your studies and entertainment with reliable internet access."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
    title: "24/7 Security",
    description: "Controlled gate access and secure perimeter to ensure your safety and peace of mind."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-brand-orange" />,
    title: "Study Centers",
    description: "Quiet, dedicated workspaces designed to help you focus and succeed academically."
  },
  {
    icon: <Monitor className="w-6 h-6 text-brand-orange" />,
    title: "TV Lounge",
    description: "A comfortable communal area to relax, watch movies, and socialize with fellow students."
  },
  {
    icon: <Droplets className="w-6 h-6 text-brand-orange" />,
    title: "Laundry Facilities",
    description: "On-site washing machines and basins making laundry day convenient and easy."
  },
  {
    icon: <Car className="w-6 h-6 text-brand-orange" />,
    title: "Secure Parking",
    description: "Shaded and secure parking bays available for student vehicles."
  },
  {
    icon: <Coffee className="w-6 h-6 text-brand-orange" />,
    title: "Communal Kitchens",
    description: "Clean, spacious kitchens equipped with stoves and sinks for meal preparation."
  },
  {
    icon: <Home className="w-6 h-6 text-brand-orange" />,
    title: "Comfortable Rooms",
    description: "Furnished rooms with beds, desks, and wardrobes. Options for single or sharing."
  }
];

// In a real scenario, these would be the actual uploaded images. 
// Using high-quality placeholders that represent the provided images.
export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "https://picsum.photos/800/600?random=1", alt: "Modern Brick Exterior View", category: "Exterior" },
  { url: "https://picsum.photos/800/600?random=2", alt: "Secure Entrance Gate", category: "Exterior" },
  { url: "https://picsum.photos/800/600?random=3", alt: "Furnished Student Bedroom", category: "Interior" },
  { url: "https://picsum.photos/800/600?random=4", alt: "Communal Kitchen Area", category: "Facilities" },
  { url: "https://picsum.photos/800/600?random=5", alt: "Laundry Room", category: "Facilities" },
  { url: "https://picsum.photos/800/600?random=6", alt: "Bathroom with Shower", category: "Interior" },
  { url: "https://picsum.photos/800/600?random=7", alt: "Study Desk Setup", category: "Interior" },
  { url: "https://picsum.photos/800/600?random=8", alt: "Backup Water Tanks", category: "Facilities" },
];
