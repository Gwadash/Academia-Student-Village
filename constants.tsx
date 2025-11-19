import React from 'react';
import { Wifi, ShieldCheck, BookOpen, Droplets, Home, Zap, Users, Star, CreditCard, Quote } from 'lucide-react';
import { Feature, GalleryImage } from './types';

export const ACADEMIA_CONTACT = {
  address: "35 Andries Potgieter Blvd, S. E. 6, Vanderbijlpark, 1911",
  phone: "+27 72 323 0062",
  emails: ["Christine@asvillage.co.za", "Stephan@asvillage.co.za"],
  rating: "4.1",
  reviewCount: 205
};

export const ACADEMIA_SYSTEM_INSTRUCTION = `
You are the virtual concierge for Academia Student Village, a premier student housing facility in Vanderbijlpark.
Your goal is to assist students and parents with inquiries.
Key Details:
- Address: ${ACADEMIA_CONTACT.address}
- Phone: ${ACADEMIA_CONTACT.phone}
- Emails: ${ACADEMIA_CONTACT.emails.join(', ')}
- Rating: ${ACADEMIA_CONTACT.rating} stars based on ${ACADEMIA_CONTACT.reviewCount} reviews.
- Motto: "Home away from home."
- Payment: We accept NSFAS payments.
- Utilities: Uncapped Wi-Fi 24/7, Water and electricity included in rent.
- Water Backup: We have a large Blue JoJo backup water tank on-site to ensure water availability during outages.
- Facilities: 24/7 Security, Laundry, Study Rooms, Social Areas.
- Social: Basketball, Netball, Football, Chess, Braais.
`;

export const FEATURES: Feature[] = [
  {
    icon: <Users />,
    title: "Community Life",
    description: "ASV supports student social activities including basketball, netball, football, chess, and occasional braais."
  },
  {
    icon: <BookOpen />,
    title: "Study Culture",
    description: "We provide several dedicated study rooms to ensure a quiet and focused environment for your academic success."
  },
  {
    icon: <ShieldCheck />,
    title: "Safety & Security",
    description: "24/7 Security with CCTV coverage throughout the premises and strict visitor protocols to keep you safe."
  },
  {
    icon: <Wifi />,
    title: "Uncapped Wi-Fi",
    description: "Stay connected with 24/7 uncapped Wi-Fi included in your rent, perfect for research and entertainment."
  },
  {
    icon: <Zap />,
    title: "All-Inclusive Utilities",
    description: "Water and electricity are included in the rent, so you don't have to worry about extra monthly costs."
  },
  {
    icon: <Droplets />,
    title: "Water Backup System",
    description: "We have a water backup system (Blue JoJo Tank) to ensure consistent water supply during outages.",
    image: "blue-jojo-tank.jpg"
  },
  {
    icon: <Home />,
    title: "Services",
    description: "Laundry facilities, cleaning of communal areas, and dedicated maintenance teams are provided."
  },
  {
    icon: <CreditCard />,
    title: "NSFAS Accredited",
    description: "We are NSFAS accredited and accept NSFAS payments for your convenience."
  }
];

export const TESTIMONIALS = [
  {
    text: "Spacious wardrobes … a great residence with laundry room, TV room and study room.",
    author: "Student Review",
    rating: 5,
    source: "Top Rated"
  },
  {
    text: "Security is tight … it’s clean and not that crowded.",
    author: "Student Review",
    rating: 4,
    source: "RSA Worldorgs"
  },
  {
    text: "A home away from home. The environment is very conducive for studying.",
    author: "Student Review",
    rating: 5,
    source: "Google Reviews"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: 'https://placehold.co/800x600/ea580c/ffffff?text=Main+Gate',
    alt: 'Main Entrance & Security Gate',
    category: 'Exterior'
  },
  {
    url: 'https://placehold.co/800x600/ea580c/ffffff?text=Brick+Buildings',
    alt: 'Student Accommodation Buildings',
    category: 'Exterior'
  },
  {
    url: 'https://placehold.co/800x600/ea580c/ffffff?text=Bedroom',
    alt: 'Student Bedroom',
    category: 'Interior'
  },
  {
    url: 'https://placehold.co/800x600/ea580c/ffffff?text=Study+Area',
    alt: 'Study Area',
    category: 'Interior'
  },
  {
    url: 'blue-jojo-tank.jpg',
    alt: 'Blue JoJo Water Tank (Backup System)',
    category: 'Facilities'
  },
  {
    url: 'https://placehold.co/800x600/ea580c/ffffff?text=Laundry',
    alt: 'Laundry Facilities',
    category: 'Facilities'
  },
  {
    url: 'https://placehold.co/800x600/ea580c/ffffff?text=Kitchen',
    alt: 'Communal Kitchen',
    category: 'Interior'
  },
  {
    url: 'https://placehold.co/800x600/ea580c/ffffff?text=TV+Room',
    alt: 'TV & Social Room',
    category: 'Facilities'
  }
];