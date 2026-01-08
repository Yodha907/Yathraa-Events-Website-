import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventDataService } from '../../services/event-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="pt-20">
      <div class="bg-brand-cream py-20 text-center px-4">
        <h1 class="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">Our Services</h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">Comprehensive event planning and decoration solutions tailored to your needs.</p>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid grid-cols-1 gap-16">
          @for (service of services(); track service.id; let i = $index) {
            <div class="flex flex-col md:flex-row gap-12 items-center" [class.md:flex-row-reverse]="i % 2 !== 0">
              <!-- Image Side -->
              <div class="w-full md:w-1/2">
                <div class="relative overflow-hidden rounded-2xl shadow-xl group">
                  <img [src]="service.image" [alt]="service.title" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </div>

              <!-- Content Side -->
              <div class="w-full md:w-1/2 space-y-6">
                <div class="flex items-center space-x-4">
                  <span class="flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold text-white shadow-lg">
                    <span class="material-icons">{{ service.icon }}</span>
                  </span>
                  <h2 class="font-serif text-3xl font-bold text-brand-dark">{{ service.title }}</h2>
                </div>
                <p class="text-lg text-slate-600 leading-relaxed">{{ service.description }}</p>
                <ul class="space-y-3">
                  <li class="flex items-center text-slate-600">
                    <span class="material-icons text-green-500 mr-2 text-sm">check_circle</span>
                    End-to-end planning
                  </li>
                  <li class="flex items-center text-slate-600">
                    <span class="material-icons text-green-500 mr-2 text-sm">check_circle</span>
                    Theme customization
                  </li>
                  <li class="flex items-center text-slate-600">
                    <span class="material-icons text-green-500 mr-2 text-sm">check_circle</span>
                    Vendor management
                  </li>
                </ul>
                <div class="pt-4">
                  <a routerLink="/contact" class="inline-block px-6 py-3 bg-brand-dark text-white rounded-lg hover:bg-brand-gold transition-colors font-medium">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-brand-gold py-16 text-center text-white px-4">
        <h2 class="font-serif text-3xl font-bold mb-4">Have something else in mind?</h2>
        <p class="mb-8 text-lg opacity-90">We love custom challenges. Let's discuss your unique idea.</p>
        <a routerLink="/contact" class="bg-white text-brand-gold px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
          Contact Us
        </a>
      </div>
    </div>
  `
})
export class ServicesComponent {
  private dataService = inject(EventDataService);
  services = this.dataService.services;
}