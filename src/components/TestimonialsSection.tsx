
import React from 'react';
import { Star } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "The Swedish massage at Goddess of Goodness is absolutely incredible. After just one session, my muscle tension and stress melted away. The professional care and peaceful environment make it the perfect escape. I've been coming back monthly and it's become essential for my wellbeing.",
      rating: 5,
      service: "Swedish Massage"
    },
    {
      name: "James T.",
      text: "I was skeptical about cupping therapy, but it's been life-changing for my chronic back pain. The treatment is professional and effective, and I've noticed significant improvement in my mobility. The combination of Swedish massage and cupping is unbeatable.",
      rating: 5,
      service: "Cupping Therapy"
    },
    {
      name: "Emma L.",
      text: "Reiki energy healing sessions have transformed my stress management. I feel so balanced and centered after each treatment. The energy work is gentle yet powerful, and I always leave feeling refreshed and more at peace. Highly recommend for anyone dealing with anxiety or stress.",
      rating: 5,
      service: "Reiki Energy Healing"
    },
    {
      name: "Michael R.",
      text: "The Thai foot massage is unlike anything I've experienced. It's incredibly relaxing and the reflexology benefits are amazing. My whole body feels rejuvenated after each session. Perfect for anyone who's on their feet all day.",
      rating: 5,
      service: "Thai Foot Massage"
    },
    {
      name: "Lisa K.",
      text: "Hopi ear candling combined with the sinus massage has been a game-changer for my sinus issues. The treatment is gentle, relaxing, and incredibly effective. I can breathe so much better now, and the overall experience is very calming.",
      rating: 5,
      service: "Hopi Ear Candling"
    },
    {
      name: "Rachel P.",
      text: "The signature facial is pure luxury! My skin has never looked or felt better. The treatment is thorough, relaxing, and the results are visible immediately. It's become my monthly self-care ritual. The attention to detail and personalized approach is outstanding.",
      rating: 5,
      service: "Signature Facial"
    }
  ];

  return (
    <section id="testimonials" className="pt-6 sm:pt-8 pb-12 sm:pb-16 md:pb-20 lg:pt-12 lg:pb-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 font-figtree tracking-tight">
            <span className="font-figtree">What My</span>{' '}
            <span className="italic font-instrument-serif text-foreground">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Real experiences from my holistic healing clients
          </p>
        </div>

        <ScrollAnimate className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
              style={{backgroundColor: '#a0b894'}}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                {testimonial.service && (
                  <p className="text-sm text-foreground/70 font-medium mb-2">{testimonial.service}</p>
                )}
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default TestimonialsSection;
