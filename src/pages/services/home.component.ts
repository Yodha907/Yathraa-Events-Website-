import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventDataService } from '../../services/event-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://picsum.photos/seed/weddinghero/1920/1080" 
             alt="Elegant Wedding Decor" 
             class="object-cover w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 py-1 px-4 bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-2">
          <span class="text-brand-gold text-lg">★</span>
          <span class="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
            Coimbatore's Premium Event Planners
          </span>
          <span class="text-brand-gold text-lg">★</span>
        </div>
        
        <h1 class="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
          Transforming Every Celebration<br/>with a <span class="text-brand-gold">Creative Touch</span>
        </h1>
        
        <p class="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
          From intimate gatherings to grand galas, Yathraa Events brings your vision to life with elegance, precision, and passion.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a routerLink="/contact" class="w-full sm:w-auto px-10 py-4 bg-brand-gold hover:bg-brand-accent text-brand-dark rounded-full font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-brand-gold/50">
            Book Your Event
          </a>
          <a routerLink="/gallery" class="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/50 text-white hover:bg-white hover:text-brand-dark rounded-full font-bold transition-all">
            View Portfolio
          </a>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="relative order-2 md:order-1">
            <div class="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/20 rounded-full z-0 mix-blend-multiply"></div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-dark/5 rounded-full z-0"></div>
            <img src="https://picsum.photos/seed/intro/600/700" alt="About Yathraa" class="relative z-10 rounded-3xl shadow-2xl object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500 w-full h-auto">
            <div class="absolute -bottom-10 -right-4 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block border-l-4 border-brand-gold">
              <p class="font-serif text-brand-dark text-lg font-bold">"We don't just plan events; we craft memories."</p>
              <p class="text-sm text-slate-500 mt-2 font-bold uppercase tracking-wider">- Selva K, Founder</p>
            </div>
          </div>
          <div class="space-y-8 order-1 md:order-2">
            <div class="space-y-2">
              <span class="text-brand-gold font-bold tracking-widest uppercase text-sm">Who We Are</span>
              <h2 class="font-serif text-4xl md:text-5xl font-bold text-brand-dark">Welcome to <br/><span class="text-brand-gold">Yathraa</span> Events</h2>
            </div>
            <p class="text-slate-600 text-lg leading-relaxed font-medium">
              Based in the heart of Coimbatore, Yathraa Events is a premier event planning brand dedicated to curating unforgettable experiences. Whether it's the joy of a birthday, the sanctity of a wedding, or the professionalism of a corporate meet, we handle it all with flair.
            </p>
            <p class="text-slate-600 text-lg leading-relaxed">
              Our team specializes in custom decoration and styling, ensuring that every venue reflects your unique personality and the spirit of the occasion.
            </p>
            <a routerLink="/about" class="inline-flex items-center text-brand-dark font-bold hover:text-brand-gold transition-colors mt-4 group">
              Read Our Story 
              <span class="material-icons ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-24 bg-brand-cream relative overflow-hidden">
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
          <h2 class="font-serif text-4xl font-bold text-brand-dark mb-4">Our Services</h2>
          <p class="text-slate-600 font-medium">Tailored solutions for every occasion, handled with expert care.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (service of services().slice(0,3); track service.id) {
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group cursor-pointer border-b-4 border-transparent hover:border-brand-gold transform hover:-translate-y-2">
              <div class="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300 rotate-3 group-hover:rotate-0">
                <span class="material-icons text-3xl text-brand-gold group-hover:text-brand-dark transition-colors">{{ service.icon }}</span>
              </div>
              <h3 class="font-serif text-2xl font-bold text-brand-dark mb-3">{{ service.title }}</h3>
              <p class="text-slate-600 mb-6 leading-relaxed">{{ service.description }}</p>
              <a routerLink="/services" class="inline-flex items-center text-sm font-bold text-brand-gold uppercase tracking-wider hover:text-brand-dark transition-colors">
                Learn More <span class="material-icons text-sm ml-1">chevron_right</span>
              </a>
            </div>
          }
        </div>
        
        <div class="text-center mt-16">
          <a routerLink="/services" class="inline-block px-10 py-4 border-2 border-brand-dark text-brand-dark rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all hover:shadow-lg">
            View All Services
          </a>
        </div>
      </div>
    </section>

    <!-- Gallery Strip -->
    <section class="py-0">
      <div class="grid grid-cols-2 md:grid-cols-4">
        @for (item of gallery().slice(0,4); track item.id) {
           <div class="relative group h-64 md:h-80 overflow-hidden cursor-pointer">
             <img [src]="item.image" [alt]="item.title" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110">
             <div class="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
               <span class="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2">{{ item.category }}</span>
               <span class="text-white font-serif text-xl font-bold">{{ item.title }}</span>
             </div>
           </div>
        }
      </div>
    </section>
  `
})
export class HomeComponent {
  private dataService = inject(EventDataService);
  services = this.dataService.services;
  gallery = this.dataService.gallery;
}