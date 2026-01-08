import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="pt-20 min-h-screen bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div class="text-center mb-16">
          <h1 class="font-serif text-4xl font-bold text-brand-dark mb-4">Get in Touch</h1>
          <p class="text-slate-600">Ready to plan your next event? Drop us a line.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <!-- Contact Info & Map -->
          <div class="bg-brand-dark text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 class="font-serif text-2xl font-bold mb-6 text-brand-gold">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-start">
                  <span class="material-icons text-brand-gold mr-4">location_on</span>
                  <p class="text-slate-300">Cheran Ma Nagar, Coimbatore,<br>Tamil Nadu – 641012</p>
                </div>
                <div class="flex items-center">
                  <span class="material-icons text-brand-gold mr-4">phone</span>
                  <a href="tel:+919876543210" class="text-slate-300 hover:text-white transition-colors">+91 98765 43210</a>
                </div>
                <div class="flex items-center">
                  <span class="material-icons text-brand-gold mr-4">email</span>
                  <a href="mailto:info@yathraaevents.com" class="text-slate-300 hover:text-white transition-colors">info@yathraaevents.com</a>
                </div>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-semibold mb-4">Connect with us</h3>
                <div class="flex space-x-4">
                  <a href="https://instagram.com/yathraa_events" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                    <span class="text-white text-xs">IG</span>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
                    <span class="text-white text-xs">WA</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-12 h-64 w-full rounded-lg overflow-hidden bg-gray-700">
               <!-- Static Map Placeholder (iframe logic handled by sanitizer often requires care, direct iframe is safe in templates usually if src is static) -->
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.039648604774!2d76.999!3d11.036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85860494541c3%3A0x6a08412090176!2sCheran%20ma%20nagar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style="border:0;" 
                 allowfullscreen="" 
                 loading="lazy">
              </iframe>
            </div>
          </div>

          <!-- Form -->
          <div class="p-8 md:p-12">
            <h2 class="font-serif text-2xl font-bold text-brand-dark mb-6">Send us a Message</h2>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input type="text" formControlName="name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="John Doe">
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" formControlName="phone" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="+91 98...">
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">Event Date</label>
                  <input type="date" formControlName="date" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all">
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Event Type</label>
                <select formControlName="eventType" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white">
                  <option value="" disabled>Select an event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Decoration">Decoration Only</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea formControlName="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Tell us about your event..."></textarea>
              </div>

              <button type="submit" [disabled]="contactForm.invalid || isSubmitting" class="w-full bg-brand-gold text-white font-bold py-4 rounded-lg hover:bg-brand-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              @if (successMessage) {
                <div class="p-4 bg-green-50 text-green-700 rounded-lg text-center">
                  Thank you! We will contact you shortly.
                </div>
              }
            </form>
          </div>

        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  private fb: FormBuilder = inject(FormBuilder);
  
  contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    date: ['', Validators.required],
    eventType: ['', Validators.required],
    message: ['', Validators.required]
  });

  isSubmitting = false;
  successMessage = false;

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.successMessage = true;
        this.contactForm.reset();
        setTimeout(() => this.successMessage = false, 3000);
      }, 1500);
    }
  }
}
