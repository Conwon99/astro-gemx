
import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { trackContact } from '../lib/analytics';
import ScrollAnimate from './ScrollAnimate';

const ContactSection = () => {

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimate className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large image */}
              <div className="col-span-2 relative">
                <div className="aspect-[4/3] rounded-full overflow-hidden shadow-xl">
                  <img 
                    src="/gemma.jpg"
                    alt="Goddess of Goodness - Professional holistic wellness practitioner"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full opacity-60" style={{backgroundColor: '#7a8f6d'}}></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full opacity-40" style={{backgroundColor: '#4a4f31'}}></div>
              </div>
              
              {/* Small circular images */}
              <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/massage.jpg"
                  alt="Professional massage therapy"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/pexels-anete-lusina-5240700.jpg"
                  alt="Energy healing treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/pexels-anete-lusina-5240734.jpg"
                  alt="Reiki energy healing session"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-square rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/cupping.jpg"
                  alt="Cupping therapy treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 font-figtree tracking-tight">
                <span className="font-figtree">Get in</span>{' '}
                <span className="italic font-instrument-serif text-foreground">touch.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Ready to start your healing journey? Contact me to book a massage, energy healing session, or specialized treatment. I'm here to support your holistic wellness in Saltcoats.
              </p>
            </div>

            <form 
              action="https://formspree.io/f/xwpnyaog" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  Email (required)
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-white/70 border-gray-300 text-foreground placeholder:text-muted-foreground focus:border-[#4a4f31] focus:ring-[#4a4f31]"
                  style={{borderColor: '#7a8f6d'}}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Message (required)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="bg-white/70 border-gray-300 text-foreground placeholder:text-muted-foreground focus:border-[#4a4f31] focus:ring-[#4a4f31]"
                  style={{borderColor: '#7a8f6d'}}
                />
              </div>

              <Button
                type="submit"
                className="text-white px-8 py-3 rounded-full font-medium hover:scale-105 transform transition-all duration-300"
                style={{backgroundColor: '#4a4f31'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#3d4128'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#4a4f31'}
                onClick={() => trackContact('Contact Form Submit', 'Main Page Contact Section')}
              >
                Send
              </Button>
            </form>

            {/* Contact Information */}
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t" style={{borderColor: '#7a8f6d'}}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-foreground font-medium text-sm sm:text-base">Phone:</span>
                <a href="tel:07782844404" className="hover:opacity-80 transition-opacity text-sm sm:text-base break-all" style={{color: '#4a4f31'}}>07782 844404</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-foreground font-medium text-sm sm:text-base">Email:</span>
                <a href="mailto:goddessofgoodness1@outlook.com" className="hover:opacity-80 transition-opacity text-sm sm:text-base break-all" style={{color: '#4a4f31'}}>goddessofgoodness1@outlook.com</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-foreground font-medium text-sm sm:text-base">Location:</span>
                <span className="text-sm sm:text-base" style={{color: '#4a4f31'}}>Saltcoats</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-foreground font-medium text-sm sm:text-base">Instagram:</span>
                <a href="https://instagram.com/goddessofgoodnesss1" className="hover:opacity-80 transition-opacity text-sm sm:text-base break-all" style={{color: '#4a4f31'}}>@goddessofgoodnesss1</a>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default ContactSection;
