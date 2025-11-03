
import React from 'react';
import { trackBooking } from '../lib/analytics';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden w-full" style={{
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      left: 0,
      right: 0
    }}>
      {/* Background image - Mobile */}
      <img
        src="/phoneback.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        style={{
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
        onError={(e) => {
          console.log('Mobile background image failed to load:', (e as any).target.src);
        }}
      />
      {/* Background image - Desktop */}
      <img
        src="/Gemini_Generated_Image_nt024nnt024nnt02.png"
        alt="Background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        style={{
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
        onError={(e) => {
          console.log('Desktop background image failed to load:', (e as any).target.src);
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-32 relative z-10">
        <div className="flex items-center justify-center sm:justify-start min-h-[70vh] sm:min-h-[80vh]">
          <div className="space-y-6 sm:space-y-8 animate-fade-in max-w-4xl text-center sm:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-normal leading-tight tracking-tight" style={{color: '#fffff0'}}>
                <span className="font-figtree">Holistic Healing</span>
                <br />
                <span className="italic font-instrument-serif" style={{ color: 'hsl(var(--brand-accent))' }}>for Mind, Body & Spirit</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed mx-auto sm:mx-0" style={{color: '#fffff0'}}>
                Professional holistic healing services in Saltcoats. Experience the transformative power of Swedish massage, cupping therapy, Reiki energy healing, Thai foot massage, Hopi ear candling, and signature facials. Your journey to wellness starts here.
              </p>
            </div>

            <div className="flex justify-center sm:justify-start">
              <a 
                href="/contact" 
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 transform inline-block text-center whitespace-nowrap w-full sm:w-auto" 
                style={{ backgroundColor: 'hsl(36 100% 85%)', color: 'hsl(var(--brand-contrast))', border: 'none', boxShadow: '0 0 20px rgba(255, 205, 129, 0.6), 0 0 40px rgba(255, 205, 129, 0.4)', opacity: 1 }}
                onMouseEnter={(e) => { const target = e.target as HTMLElement; target.style.backgroundColor = 'hsl(36 100% 80%)'; target.style.color = 'hsl(70 24% 20%)'; target.style.boxShadow = '0 0 30px rgba(255, 205, 129, 0.8), 0 0 60px rgba(255, 205, 129, 0.6)'; }} 
                onMouseLeave={(e) => { const target = e.target as HTMLElement; target.style.backgroundColor = 'hsl(36 100% 85%)'; target.style.color = 'hsl(var(--brand-contrast))'; target.style.boxShadow = '0 0 20px rgba(255, 205, 129, 0.6), 0 0 40px rgba(255, 205, 129, 0.4)'; }}
                onClick={() => trackBooking('Book Your Class', 'Hero Section')}
              >
                Book Treatment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
