import React from 'react';
import ScrollAnimate from './ScrollAnimate';
import { trackBooking } from '../lib/analytics';

const WhatIsKamboSection = () => {
  return (
    <ScrollAnimate className="mb-12 sm:mb-16 md:mb-20 lg:mb-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/kambo-treatment.webp"
                alt="Kambo treatment - ancient Amazonian healing medicine"
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
                What is Kambo?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Kambo is secretion from a large tree frog named Phyllomedusa Bicolor that resides in the upper region of the Amazon rainforest. Many tribes have used Kambo for thousands of years to clear "panema" (bad luck), enhance fertility, improve general health, and boost immunity.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                In modern times, Kambo is used for deep cleansing, detoxification, pain relief, anxiety and depression support, emotional release, immune system boosting, and spiritual healing. The treatment crosses the blood-brain barrier to reach areas that are difficult to treat with other methods.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-foreground mb-4">How Does Kambo Work?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Small "gates" are burned under the first layer of skin, and the Kambo medicine is applied to these points</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">The peptides in Kambo cross the blood-brain barrier, reaching deep into the body in otherwise hard to treat areas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">The treatment cleans out cells within your body and releases toxins through the lymphatic system</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">The process typically lasts 20-45 minutes, with many people reporting instant results</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-foreground mb-4">Benefits of Kambo</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Deep detoxification & cleansing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Immune system boost</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Emotional release & healing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Pain relief</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Anxiety & depression support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#4a4f31'}}></div>
                  <span className="text-muted-foreground text-sm">Spiritual cleansing & clarity</span>
                </div>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="p-4 rounded-lg" style={{backgroundColor: '#f7f8f4'}}>
              <h4 className="text-lg font-semibold text-foreground mb-3">Pricing</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>One-to-one session: <span className="font-semibold text-foreground">£120</span></p>
                <p>Group of 2-3 people: <span className="font-semibold text-foreground">£100</span></p>
                <p>Group of 4 or more: <span className="font-semibold text-foreground">£80</span></p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/kambo"
                className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 transform inline-block text-center whitespace-nowrap"
                style={{ backgroundColor: '#4a4f31' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#3d4128'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#4a4f31'}
                onClick={() => trackBooking('Learn More About Kambo', 'What is Kambo Section')}
              >
                Learn More About Kambo
              </a>
              <a
                href="/contact"
                className="border-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 transform inline-block text-center whitespace-nowrap"
                style={{ borderColor: '#4a4f31', color: '#4a4f31' }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#4a4f31';
                  (e.target as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLElement).style.color = '#4a4f31';
                }}
                onClick={() => trackBooking('Book Kambo Treatment', 'What is Kambo Section')}
              >
                Book Kambo Treatment
              </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default WhatIsKamboSection;

