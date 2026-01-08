import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-24">
          <!-- Logo Section -->
          <div class="flex-shrink-0 flex items-center cursor-pointer" routerLink="/">
            
            <!-- 
               LOGO SETTINGS
               Now looking for: "Ylogo.png" in the public folder
            -->
            <img src="/Ylogo.png" alt="Yathraa Events" class="h-20 w-auto object-contain">

          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            @for (link of navLinks; track link.path) {
              <a [routerLink]="link.path" 
                 routerLinkActive="text-brand-gold font-bold"
                 [routerLinkActiveOptions]="{exact: link.exact}"
                 class="text-slate-600 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-semibold transition-colors uppercase tracking-widest">
                {{ link.label }}
              </a>
            }
            <a routerLink="/contact" class="bg-brand-gold hover:bg-brand-accent text-brand-dark px-7 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
              Book Now
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button (click)="toggleMenu()" class="text-slate-600 hover:text-brand-gold p-2 transition-colors">
              <span class="material-icons text-3xl">{{ isOpen() ? 'close' : 'menu' }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isOpen()) {
        <div class="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-up">
          <div class="px-4 pt-4 pb-6 space-y-2">
            @for (link of navLinks; track link.path) {
              <a [routerLink]="link.path"
                 (click)="closeMenu()"
                 routerLinkActive="bg-brand-cream text-brand-gold pl-6"
                 [routerLinkActiveOptions]="{exact: link.exact}"
                 class="text-slate-600 hover:text-brand-gold hover:bg-gray-50 block px-4 py-3 rounded-xl text-lg font-bold transition-all border-l-4 border-transparent hover:border-brand-gold hover:pl-6">
                {{ link.label }}
              </a>
            }
            <div class="pt-4 mt-4 border-t border-gray-100">
              <a routerLink="/contact" (click)="closeMenu()" class="block w-full text-center bg-brand-gold text-brand-dark px-4 py-3 rounded-xl text-lg font-bold shadow-md active:scale-95 transition-transform">
                Book Your Event
              </a>
            </div>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isOpen = signal(false);

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/services', label: 'Services', exact: false },
    { path: '/gallery', label: 'Gallery', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}