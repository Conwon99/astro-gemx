import React, { useEffect, useRef } from 'react';
import ScrollAnimate from './ScrollAnimate';
import { trackBooking } from '../lib/analytics';

const FinalCTASection = () => {
  const sparkleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes sparkle {
        0%, 100% { 
          opacity: 0; 
          transform: translate(0, 0) scale(0); 
        }
        50% { 
          opacity: 1; 
          transform: translate(var(--tx), var(--ty)) scale(1); 
        }
      }
      .sparkle-item {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 255, 255, 0.6);
        animation: sparkle 3s infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (sparkleContainerRef.current) {
      const container = sparkleContainerRef.current;
      const sparkles = container.querySelectorAll('.sparkle-item');
      sparkles.forEach((sparkle) => {
        const element = sparkle as HTMLElement;
        const tx = (Math.random() * 60 - 30) + 'px';
        const ty = (Math.random() * 60 - 30) + 'px';
        const delay = Math.random() * 3;
        const duration = 2 + Math.random() * 2;
        element.style.setProperty('--tx', tx);
        element.style.setProperty('--ty', ty);
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;
      });
    }
  }, []);

  return (
    <ScrollAnimate className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
      <div className="relative max-w-4xl mx-auto text-center rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden mx-4 sm:mx-auto" style={{background: 'linear-gradient(135deg, #3d4128 0%, #4a4f31 50%, #2d3120 100%)'}}>
        {/* Sparkle overlay */}
        <div ref={sparkleContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            return (
              <div
                key={i}
                className="sparkle-item"
                style={{
                  left: `${x}%`,
                  top: `${y}%`
                }}
              />
            );
          })}
        </div>
        
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 sm:mb-6 font-rocaone tracking-tight px-2">
            Book Your Treatment
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
            Ready to experience the transformative power of holistic healing? Book your appointment today and begin your journey to wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 transform inline-block text-center whitespace-nowrap w-full sm:w-auto"
              style={{ backgroundColor: 'hsl(36 100% 85%)', color: 'hsl(var(--brand-contrast))', border: 'none', boxShadow: '0 0 20px rgba(255, 205, 129, 0.6), 0 0 40px rgba(255, 205, 129, 0.4)', opacity: 1 }}
              onMouseEnter={(e) => { const target = e.target as HTMLElement; target.style.backgroundColor = 'hsl(36 100% 80%)'; target.style.color = 'hsl(70 24% 20%)'; target.style.boxShadow = '0 0 30px rgba(255, 205, 129, 0.8), 0 0 60px rgba(255, 205, 129, 0.6)'; }}
              onMouseLeave={(e) => { const target = e.target as HTMLElement; target.style.backgroundColor = 'hsl(36 100% 85%)'; target.style.color = 'hsl(var(--brand-contrast))'; target.style.boxShadow = '0 0 20px rgba(255, 205, 129, 0.6), 0 0 40px rgba(255, 205, 129, 0.4)'; }}
              onClick={() => trackBooking('Book Treatment', 'Final CTA Section')}
            >
              Book Your Treatment
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default FinalCTASection;

