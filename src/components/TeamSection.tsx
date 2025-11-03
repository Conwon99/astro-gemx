
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const TeamSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimate className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 font-figtree tracking-tight">
            <span className="font-figtree">About</span>{' '}
            <span className="italic font-instrument-serif text-foreground">Goddess of Goodness</span>
          </h2>
        </ScrollAnimate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Philosophy Card */}
          <div className="backdrop-blur-sm text-foreground p-6 sm:p-8 rounded-2xl flex flex-col justify-between" style={{backgroundColor: '#a0b894'}}>
            <div>
              <p className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 text-muted-foreground">MY PHILOSOPHY</p>
              
              <h3 className="text-2xl sm:text-3xl font-normal mb-4 sm:mb-6 leading-tight italic font-instrument-serif text-foreground tracking-tight">
                "Health is a state of complete harmony of the body, mind and spirit"
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">B.K.S. Iyengar</p>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                I create safe, nurturing healing environments with a gentle, supportive, and transformative approach. I believe in the power of holistic healing and focus on complete mind, body, and spirit wellness.
              </p>
            </div>
            
            <a 
              href="/contact" 
              className="text-white px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base self-start hover:scale-105 transform inline-block w-full sm:w-auto text-center sm:text-left"
              style={{backgroundColor: '#4a4f31'}}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#3d4128'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#4a4f31'}
            >
              Book Treatment
            </a>
          </div>

          {/* My Journey */}
          <div className="group">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform" style={{background: 'linear-gradient(to bottom right, #a0b894, #c4d4b8)'}}>
              <div className="aspect-[4/5]" style={{background: 'linear-gradient(to bottom right, #c4d4b8, #a0b894)'}}>
                <img 
                  src="/gemma.jpg" 
                  alt="Goddess of Goodness - Holistic Healing Practitioner" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-normal text-foreground">My Journey</h4>
                  <a 
                    href="/about" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Passionate holistic healing practitioner specializing in massage therapy, energy healing, and specialized treatments. Dedicated to your wellness journey.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="group">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform" style={{background: 'linear-gradient(to bottom right, #c4d4b8, #a0b894)'}}>
              <div className="aspect-[4/5]" style={{background: 'linear-gradient(to bottom right, #a0b894, #c4d4b8)'}}>
                <img 
                  src="/massage.jpg" 
                  alt="Qualifications and training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-normal text-foreground">Qualifications</h4>
                  <a 
                    href="/about" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Qualified in Swedish massage, cupping therapy, Reiki energy healing, Thai foot massage, Hopi ear candling, and facial treatments. Professional holistic healing practitioner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
