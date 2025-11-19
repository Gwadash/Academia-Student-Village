import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: 'Exterior' | 'Interior' | 'Facilities';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}