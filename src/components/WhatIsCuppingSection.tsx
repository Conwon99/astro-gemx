import React from 'react';
import ScrollAnimate from './ScrollAnimate';
import { trackBooking } from '../lib/analytics';

const WhatIsCuppingSection = () => {
  return (
    <ScrollAnimate className="mb-12 sm:mb-16 md:mb-20 lg:mb-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/cupping.jpg"
                alt="Cupping therapy treatment - traditional suction cup healing therapy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full opacity-60" style={{backgroundColor: '#7a8f6d'}}></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full opacity-40" style={{backgroundColor: '#4a4f31'}}></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 font-rocaone tracking-tight">
                What is Cupping?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Cupping therapy is an ancient healing technique that uses suction cups placed on the skin to create localized pressure. This traditional therapy has been used for thousands of years across various cultures to promote healing, reduce pain, and improve circulation.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                During cupping therapy, special cups are applied to the skin using heat or a mechanical pump to create suction. This draws the skin and superficial muscle layer up into the cup, stimulating blood flow and releasing muscle tension.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-foreground mb-4">How Does Cupping Work?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Suction cups are placed on specific areas of the body, typically the back, shoulders, or other areas of tension</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">The suction creates negative pressure, lifting the skin and drawing blood to the area</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">This process helps to break up adhesions and scar tissue, promoting tissue healing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">The increased blood flow brings nutrients to the area while removing toxins and waste products</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-foreground mb-4">Benefits of Cupping</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Pain relief & muscle relaxation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Improved blood circulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Reduced inflammation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Deep tissue release</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Enhanced flexibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Detoxification support</span>
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
                onClick={() => trackBooking('Book Cupping Treatment', 'What is Cupping Section')}
              >
                Book Cupping Treatment
              </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default WhatIsCuppingSection;

