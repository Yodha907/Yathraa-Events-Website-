import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-20">
      <!-- Header -->
      <div class="bg-brand-dark text-white py-20 text-center">
        <h1 class="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto px-4">Creating timeless memories in Coimbatore and beyond.</p>
      </div>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div class="space-y-6 text-lg text-slate-600 leading-relaxed">
            <h2 class="font-serif text-3xl font-bold text-brand-dark mb-4">Who We Are</h2>
            <p>
              Welcome to <strong>Yathraa Events</strong>. We are a passionate team of event planners and decorators based in Cheran Ma Nagar, Coimbatore. Founded by <strong>Selva K</strong>, our mission is simple: to take the stress out of celebration planning so you can focus on the joy of the moment.
            </p>
            <p>
              Our name "Yathraa" symbolizes a journey. We believe every event is a significant milestone in your life's journey, and we are honored to be a part of it. From the first consultation to the final guest departure, we walk with you every step of the way.
            </p>
            <p>
              We specialize in blending traditional aesthetics with modern trends. Whether you want a classic South Indian wedding or a chic, contemporary birthday bash, our design team has the versatility to deliver.
            </p>
            
            <div class="grid grid-cols-2 gap-6 pt-8">
              <div class="bg-brand-cream p-6 rounded-lg text-center">
                <span class="block text-4xl font-serif font-bold text-brand-gold mb-2">500+</span>
                <span class="text-sm font-medium uppercase tracking-wide">Events Completed</span>
              </div>
              <div class="bg-brand-cream p-6 rounded-lg text-center">
                <span class="block text-4xl font-serif font-bold text-brand-gold mb-2">100%</span>
                <span class="text-sm font-medium uppercase tracking-wide">Client Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div class="relative">
             <img src="https://picsum.photos/seed/teamwork/800/1000" alt="Team at work" class="rounded-lg shadow-2xl w-full h-auto">
             <div class="absolute -bottom-10 -left-10 bg-white p-8 rounded-lg shadow-xl max-w-xs hidden lg:block">
               <h3 class="font-serif text-xl font-bold text-brand-dark mb-2">Our Promise</h3>
               <p class="text-slate-600 text-sm">To deliver perfection, creativity, and seamless execution in every event we touch.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}