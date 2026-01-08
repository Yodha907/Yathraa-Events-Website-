import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-brand-dark text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <!-- Brand Info -->
          <div class="space-y-4">
            <h3 class="font-serif text-2xl font-bold text-brand-gold">Yathraa Events</h3>
            <p class="text-slate-400 leading-relaxed">
              Transforming every celebration with a creative touch. Premier event planning and decoration services in Coimbatore.
            </p>
            <div class="flex space-x-4 pt-2">
              <a href="https://instagram.com/yathraa_events" target="_blank" class="text-brand-gold hover:text-white transition-colors">
                Instagram
              </a>
              <span class="text-slate-600">|</span>
              <a href="tel:+919876543210" class="text-brand-gold hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
            <ul class="space-y-3">
              <li><a routerLink="/about" class="text-slate-400 hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a routerLink="/services" class="text-slate-400 hover:text-brand-gold transition-colors">Our Services</a></li>
              <li><a routerLink="/gallery" class="text-slate-400 hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a routerLink="/contact" class="text-slate-400 hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Contact Us</h4>
            <ul class="space-y-4 text-slate-400">
              <li class="flex items-start">
                <span class="material-icons text-brand-gold mr-3 text-lg mt-1">person</span>
                <span>Selva K<br><span class="text-sm text-slate-500">Founder</span></span>
              </li>
              <li class="flex items-start">
                <span class="material-icons text-brand-gold mr-3 text-lg mt-1">location_on</span>
                <span>Cheran Ma Nagar, Coimbatore,<br>Tamil Nadu – 641012</span>
              </li>
              <li class="flex items-center">
                <span class="material-icons text-brand-gold mr-3 text-lg">phone</span>
                <a href="tel:+919876543210" class="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>

        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {{ year }} Yathraa Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}