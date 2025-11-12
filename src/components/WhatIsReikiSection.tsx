import React from 'react';
import ScrollAnimate from './ScrollAnimate';
import { trackBooking } from '../lib/analytics';

const WhatIsReikiSection = () => {
  return (
    <ScrollAnimate className="mb-12 sm:mb-16 md:mb-20 lg:mb-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 font-rocaone tracking-tight">
                What is Reiki?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Reiki (pronounced "ray-key") is a gentle Japanese energy healing technique that promotes relaxation, reduces stress, and supports the body's natural healing processes.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                The word "Reiki" means "universal life energy" - it's a practice of channeling this life force energy through the hands to promote physical, emotional, and spiritual wellbeing. Reiki is completely non-invasive and works with your body's natural ability to heal itself.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-foreground mb-4">How Does Reiki Work?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">During a Reiki session, the practitioner places their hands gently on or near your body in specific positions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Universal life energy flows through the practitioner's hands to your body's energy field</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">This helps to clear blockages, balance your energy, and activate your natural healing abilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Many people experience deep relaxation, reduced stress, pain relief, and improved emotional wellbeing</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-foreground mb-4">Benefits of Reiki</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Deep relaxation & stress relief</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Emotional healing & balance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Pain relief & physical healing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Enhanced spiritual connection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Improved sleep quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Increased energy & vitality</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-4 sm:mt-6">
              <a
                href="/booking"
                className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 transform inline-block text-center whitespace-nowrap w-full sm:w-auto"
                style={{ backgroundColor: '#4a4f31' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#3d4128'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#4a4f31'}
                onClick={() => trackBooking('Book Reiki Treatment', 'What is Reiki Section')}
              >
                Book Reiki Treatment
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/pexels-anete-lusina-5240734.jpg"
                alt="Reiki energy healing session - gentle hands-on healing therapy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full opacity-60" style={{backgroundColor: '#7a8f6d'}}></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full opacity-40" style={{backgroundColor: '#4a4f31'}}></div>
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default WhatIsReikiSection;

