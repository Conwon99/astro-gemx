
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check } from 'lucide-react';
import { trackBooking, trackContact } from '../lib/analytics';
import ScrollAnimate from './ScrollAnimate';

const PricingSection = () => {
  const plans = [
    {
      name: "Massage Therapy",
      price: "£30-35",
      period: "per treatment",
      buttonText: "Book Treatment",
      buttonVariant: "outline" as const,
      features: [
        "Swedish full body massage - £35",
        "Cupping therapy massage - £30",
        "Swedish back + cupping - £35",
        "Professional therapeutic treatments"
      ],
      cardClass: "bg-card hover:bg-accent/20"
    },
    {
      name: "Energy Healing",
      price: "£35",
      period: "per session",
      buttonText: "Book Session",
      buttonVariant: "default" as const,
      features: [
        "Reiki energy healing - £35",
        "Reiki infused massage - £35",
        "Transformative energy work",
        "Complete mind-body healing"
      ],
      cardClass: "bg-primary text-primary-foreground",
      featured: true
    },
    {
      name: "Specialized Treatments",
      price: "£15-80",
      period: "per treatment",
      buttonText: "Book Treatment",
      buttonVariant: "outline" as const,
      features: [
        "Thai foot massage - £30",
        "Hopi ear candling - £15",
        "Hopi + sinus massage - £20",
        "Signature facial - £26",
        "Kambo treatment - from £80"
      ],
      cardClass: "bg-card hover:bg-accent/20"
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollAnimate className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal text-foreground mb-6 font-figtree tracking-tight">
            <span className="font-figtree">Healing</span>{' '}
            <span className="italic font-instrument-serif text-foreground">Services</span>
            <br />
            <span className="italic font-instrument-serif text-foreground">&</span>{' '}
            <span className="font-figtree">Pricing</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground italic mb-8">
            holistic treatments for mind, body & spirit
          </p>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose from my range of professional holistic healing services. All treatments are performed by Goddess of Goodness in my Saltcoats location, providing personalized care and transformative healing experiences.
          </p>
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`border-0 p-8 transition-all duration-300 hover:scale-105 ${
                plan.featured ? 'transform scale-105' : ''
              }`}
              style={{
                backgroundColor: plan.featured ? '#4a4f31' : '#ffcd81',
                color: plan.featured ? 'white' : 'inherit'
              }}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className={`text-2xl font-medium mb-4 ${
                  plan.featured ? 'text-white' : 'text-foreground'
                }`}>
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className={`text-5xl lg:text-6xl font-bold tracking-tight ${
                    plan.featured ? 'text-white' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${
                  plan.featured ? 'text-white/80' : 'text-muted-foreground'
                }`}>
                  {plan.period}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <a 
                  href="/contact"
                  className={`w-full py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 inline-block text-center ${
                    plan.featured 
                      ? 'bg-white hover:bg-white/90 border border-white/20' 
                      : 'text-white border'
                  }`}
                  style={{
                    backgroundColor: plan.featured ? 'white' : '#4a4f31',
                    color: plan.featured ? '#4a4f31' : 'white',
                    borderColor: plan.featured ? 'rgba(255,255,255,0.2)' : '#4a4f31'
                  }}
                  onMouseEnter={(e) => {
                    if (plan.featured) {
                      (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.9)';
                    } else {
                      (e.target as HTMLElement).style.backgroundColor = '#3d4128';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.featured) {
                      (e.target as HTMLElement).style.backgroundColor = 'white';
                    } else {
                      (e.target as HTMLElement).style.backgroundColor = '#4a4f31';
                    }
                  }}
                  onClick={() => {
                    trackBooking('Book Treatment', `Pricing Section - ${plan.name}`);
                  }}
                >
                  {plan.buttonText}
                </a>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.featured ? 'text-white' : 'text-foreground'
                      }`} 
                      style={{color: plan.featured ? 'white' : '#4a4f31'}} />
                      <span className={`text-sm leading-relaxed ${
                        plan.featured ? 'text-white/90' : 'text-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
