import React from 'react';
import { Button } from './ui/button';
import { trackBooking } from '../lib/analytics';
import ScrollAnimate from './ScrollAnimate';

const ScheduleSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/massage.jpg"
                  alt="Professional massage therapy session"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full opacity-60" style={{backgroundColor: '#7a8f6d'}}></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full opacity-40" style={{backgroundColor: '#4a4f31'}}></div>
            </div>
          </div>

          {/* Right side - Content */}
          <ScrollAnimate className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 font-figtree tracking-tight">
                <span className="font-figtree">Massage</span>{' '}
                <span className="italic font-instrument-serif text-foreground">Therapy</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Experience professional massage therapy in our peaceful Saltcoats location. We offer Swedish massage, cupping therapy, and specialized treatments designed to promote deep relaxation and healing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Swedish full body massage - £35</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Cupping therapy massage - £30</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Swedish back + cupping - £35</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Professional therapeutic treatments</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Available by appointment in Saltcoats</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Deep relaxation and healing focus</span>
              </div>
            </div>

            <div>
              <a href="/booking" className="inline-block text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 transform text-center whitespace-nowrap w-full sm:w-auto" style={{backgroundColor: '#4a4f31'}} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#3d4128'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#4a4f31'} onClick={() => trackBooking('Book Treatment', 'Massage Therapy Section')}>
                Book Treatment
              </a>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;