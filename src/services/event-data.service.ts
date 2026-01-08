import { Injectable, signal } from '@angular/core';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  image: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  
  // ==================================================================================
  // INSTRUCTIONS FOR SERVICES (Home Page & Services Page)
  // ==================================================================================
  services = signal<ServiceItem[]>([
    {
      id: 'weddings',
      title: 'Royal Weddings',
      description: 'From intimate ceremonies to grand celebrations, we plan every detail to perfection.',
      icon: 'favorite',
      image: 'https://picsum.photos/seed/wedding1/800/600'
    },
    {
      id: 'birthdays',
      title: 'Birthday Bashes',
      description: 'Creating magical moments for all ages, from first birthdays to milestone celebrations.',
      icon: 'cake',
      image: 'https://picsum.photos/seed/bday1/800/600'
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Professional event management for inaugurations, conferences, and annual meets.',
      icon: 'business',
      image: 'https://picsum.photos/seed/corp1/800/600'
    },
    {
      id: 'decor',
      title: 'Custom Styling',
      description: 'Bespoke floral arrangements, stage backdrops, and thematic decorations.',
      icon: 'brush',
      image: 'https://picsum.photos/seed/decor1/800/600'
    },
    {
      id: 'babyshower',
      title: 'Baby Showers',
      description: 'Welcoming the new arrival with warmth, love, and beautiful setups.',
      icon: 'child_care',
      image: 'https://picsum.photos/seed/baby1/800/600'
    },
    {
      id: 'bachelorette',
      title: 'Bachelorette Parties',
      description: 'Fun, trendy, and unforgettable parties before the big day.',
      icon: 'celebration',
      image: 'https://picsum.photos/seed/party1/800/600'
    }
  ]);

  // ==================================================================================
  // GALLERY PHOTOS
  // This is where you organize your photos into tabs.
  // Make sure the 'category' matches exactly: 'Wedding', 'Birthday', 'Corporate', 'Baby Shower', 'Decor'
  // ==================================================================================
  gallery = signal<GalleryItem[]>([
    
    // ----------------------------------------------------------------------
    // SECTION: WEDDING PHOTOS
    // ----------------------------------------------------------------------
    { id: 'w1', category: 'Wedding', title: 'Grand Mandap', image: 'https://picsum.photos/seed/wed1/600/600' },
    { id: 'w2', category: 'Wedding', title: 'Reception Stage', image: 'https://picsum.photos/seed/wed3/600/600' },
    // PASTE YOUR NEW WEDDING PHOTOS BELOW THIS LINE:
    // { id: 'w3', category: 'Wedding', title: 'My Wedding Photo', image: '/wedding-1.jpg' },


    // ----------------------------------------------------------------------
    // SECTION: BIRTHDAY PHOTOS
    // ----------------------------------------------------------------------
    { id: 'b1', category: 'Birthday', title: 'Jungle Theme', image: 'https://picsum.photos/seed/bday2/600/600' },
    { id: 'b2', category: 'Birthday', title: 'Princess Theme', image: 'https://picsum.photos/seed/bday3/600/600' },
    // PASTE YOUR NEW BIRTHDAY PHOTOS BELOW THIS LINE:
    // { id: 'b3', category: 'Birthday', title: 'My Birthday Photo', image: '/birthday-1.jpg' },


    // ----------------------------------------------------------------------
    // SECTION: BABY SHOWER PHOTOS
    // ----------------------------------------------------------------------
    { id: 'bs1', category: 'Baby Shower', title: 'Pastel Dream', image: 'https://picsum.photos/seed/baby2/600/600' },
    // PASTE YOUR NEW BABY SHOWER PHOTOS BELOW THIS LINE:


    // ----------------------------------------------------------------------
    // SECTION: CORPORATE PHOTOS
    // ----------------------------------------------------------------------
    { id: 'c1', category: 'Corporate', title: 'Tech Summit', image: 'https://picsum.photos/seed/corp2/600/600' },
    // PASTE YOUR NEW CORPORATE PHOTOS BELOW THIS LINE:


    // ----------------------------------------------------------------------
    // SECTION: DECORATION PHOTOS
    // ----------------------------------------------------------------------
    { id: 'd1', category: 'Decor', title: 'Floral Arch', image: 'https://picsum.photos/seed/decor2/600/600' },
    { id: 'd2', category: 'Decor', title: 'Table Setting', image: 'https://picsum.photos/seed/decor3/600/600' },
    // PASTE YOUR NEW DECOR PHOTOS BELOW THIS LINE:

  ]);

  testimonials = signal<Testimonial[]>([
    { id: '1', name: 'Priya R.', role: 'Happy Bride', text: 'Yathraa Events made my dream wedding a reality. The decor was absolutely stunning!' },
    { id: '2', name: 'Karthik S.', role: 'Corporate Client', text: 'Professional, punctual, and highly creative. The inauguration event was a massive success.' },
    { id: '3', name: 'Anitha M.', role: 'Mother', text: 'The best birthday planner in Coimbatore! My son loved the superhero theme.' }
  ]);
}