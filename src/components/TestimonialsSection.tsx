
import React from 'react';
import { Star } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Satisfied Client",
      text: "I absolutely love my treatments at Goddess of Goodness. The Swedish massage sessions have been transformative for both my mind and physical wellbeing. The therapeutic atmosphere and professional care make every visit restorative.",
      rating: 5,
      image: "/angeassets/test1.jpg"
    },
    {
      name: "Happy Customer",
      text: "The Reiki energy healing sessions have been amazing for my stress levels and overall energy. Each treatment is tailored to my needs, and I always leave feeling refreshed, balanced, and more at peace.",
      rating: 5,
      image: "/angeassets/test2.jpg"
    },
    {
      name: "Wellness Enthusiast",
      text: "Goddess of Goodness creates such a peaceful, healing environment. The cupping therapy has done wonders for my chronic pain, and the signature facials are pure luxury. I wouldn't go anywhere else for my wellness needs.",
      rating: 5,
      image: "/angeassets/TEST3.jpg"
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
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-normal text-foreground">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                    ))}
                  </div>
                </div>
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
