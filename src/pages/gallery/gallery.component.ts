import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDataService } from '../../services/event-data.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-20">
      <div class="bg-brand-dark text-white py-16 text-center px-4">
        <h1 class="font-serif text-4xl font-bold mb-4">Our Portfolio</h1>
        <p class="text-slate-400">A glimpse into the magical moments we've crafted.</p>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          @for (filter of filters; track filter) {
            <button 
              (click)="setFilter(filter)"
              [class]="currentFilter() === filter 
                ? 'bg-brand-gold text-white shadow-md' 
                : 'bg-white text-slate-600 hover:bg-gray-100'"
              class="px-6 py-2 rounded-full font-medium transition-all border border-gray-200">
              {{ filter }}
            </button>
          }
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          @for (item of filteredItems(); track item.id) {
            <div class="group relative overflow-hidden rounded-xl shadow-md bg-gray-100 aspect-square">
              <img [src]="item.image" [alt]="item.title" class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110">
              <!-- Overlay -->
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <span class="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">{{ item.category }}</span>
                <h3 class="text-white font-serif text-xl font-bold">{{ item.title }}</h3>
              </div>
            </div>
          }
        </div>
        
        @if (filteredItems().length === 0) {
          <div class="text-center py-20 text-slate-500">
            <p>No images found for this category.</p>
          </div>
        }
      </div>
    </div>
  `
})
export class GalleryComponent {
  private dataService = inject(EventDataService);
  items = this.dataService.gallery;
  
  filters = ['All', 'Wedding', 'Birthday', 'Corporate', 'Baby Shower', 'Decor'];
  currentFilter = signal('All');

  filteredItems = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'All') return this.items();
    return this.items().filter(item => item.category === filter);
  });

  setFilter(filter: string) {
    this.currentFilter.set(filter);
  }
}