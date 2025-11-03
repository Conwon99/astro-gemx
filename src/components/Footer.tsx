
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-8 sm:py-12 w-full" style={{ backgroundColor: '#4a4f31' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/Gemx Brogan (3).png" 
                alt="Goddess of Goodness Wellness" 
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mb-2"
              />
            </div>
            <p className="text-white/80 leading-relaxed max-w-md text-sm sm:text-base">
              Professional holistic healing services in Saltcoats. Offering Swedish massage, cupping therapy, Reiki energy healing, Thai foot massage, Hopi ear candling, and signature facials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-normal mb-3 sm:mb-4 text-white text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">Home</a></li>
              <li><a href="/about" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">About</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">Book Treatment</a></li>
              <li><a href="/services" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">Services</a></li>
              <li><a href="/testimonials" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">Testimonials</a></li>
              <li><a href="/faq" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">FAQs</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-normal mb-3 sm:mb-4 text-white text-base sm:text-lg">Get in Touch</h4>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-white/80 text-xs sm:text-sm">Location: Saltcoats</p>
                <div className="space-y-2">
                  <a href="tel:07782844404" className="text-white/80 hover:text-white transition-colors duration-200 text-xs sm:text-sm block break-all">
                    📞 07782 844404
                  </a>
                  <a href="mailto:goddessofgoodness1@outlook.com" className="text-white/80 hover:text-white transition-colors duration-200 text-xs sm:text-sm block break-all">
                    ✉️ goddessofgoodness1@outlook.com
                  </a>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <a href="/contact" className="block px-4 py-2 rounded-full hover:opacity-90 transition-all duration-200 font-medium text-center text-xs sm:text-sm text-white" style={{ backgroundColor: '#ffcd81', color: '#4a4f31' }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#e6ba75'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#ffcd81'}>
                  Book Treatment
                </a>
                <a href="/contact" className="block border-2 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 font-medium text-center text-xs sm:text-sm text-white" style={{ borderColor: '#ffcd81' }}>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-white/80 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm">
            Website made by <a href="https://codapixel.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors duration-200 underline">Codapixel</a>
          </p>
          <p className="text-white/80 text-xs sm:text-sm mt-2">
            © 2024 Goddess of Goodness. Professional Holistic Wellness in Saltcoats.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
