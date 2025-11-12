
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import ScrollAnimate from './ScrollAnimate';
import { trackBooking } from '../lib/analytics';

const ServicesSection = () => {
  const services = [
    {
      category: "Massage Therapy",
      description: "Experience professional therapeutic massage in our peaceful Saltcoats location. Our massage treatments are designed to relieve tension, reduce stress, and promote deep relaxation and healing.",
      services: [
        {
          name: "Swedish Full Body Massage",
          price: "£35",
          duration: "60 min",
          description: "A classic full-body massage using long, flowing strokes to promote relaxation and improve circulation. Perfect for relieving muscle tension and reducing stress.",
          benefits: ["Relieves muscle tension", "Improves circulation", "Reduces stress", "Promotes deep relaxation", "Enhances flexibility"]
        },
        {
          name: "Cupping Therapy Massage",
          price: "£30",
          duration: "60 min",
          description: "Traditional therapy using suction cups to improve blood flow, relieve pain, and promote healing. Excellent for muscle recovery and tension relief.",
          benefits: ["Pain relief", "Improved blood flow", "Muscle recovery", "Tension release", "Detoxification"]
        },
        {
          name: "Swedish Back + Cupping",
          price: "£35",
          duration: "60 min",
          description: "Combines the relaxing benefits of Swedish massage with targeted cupping therapy for the back. Ideal for chronic back pain and tension.",
          benefits: ["Targeted back relief", "Deep muscle release", "Improved posture", "Pain reduction", "Enhanced relaxation"]
        }
      ]
    },
    {
      category: "Energy Healing",
      description: "Transformative energy healing treatments that promote natural healing, stress relief, and complete mind-body-spirit wellness. Experience the gentle power of Reiki energy work.",
      services: [
        {
          name: "Reiki Energy Healing",
          price: "£35",
          duration: "60 min",
          description: "Gentle energy healing technique that promotes relaxation, stress reduction, and natural healing. Reiki works with your body's energy to restore balance and wellbeing.",
          benefits: ["Energy balancing", "Stress reduction", "Emotional healing", "Spiritual connection", "Natural healing support"]
        },
        {
          name: "Reiki Infused Massage",
          price: "£35",
          duration: "60 min",
          description: "A beautiful combination of Reiki energy healing and therapeutic massage. Experience physical relaxation while receiving energetic healing benefits.",
          benefits: ["Physical & energetic healing", "Deep relaxation", "Holistic wellness", "Enhanced healing", "Mind-body harmony"]
        }
      ]
    },
    {
      category: "Specialized Treatments",
      description: "Unique therapeutic treatments designed to address specific needs. From traditional Thai foot massage to Hopi ear candling and signature facials, we offer specialized care for your wellbeing.",
      services: [
        {
          name: "Thai Foot Massage",
          price: "£30",
          duration: "60 min",
          description: "Traditional Thai foot reflexology that stimulates pressure points in the feet. This treatment improves circulation, relieves tension, and promotes overall wellness.",
          benefits: ["Reflexology benefits", "Improved circulation", "Foot tension relief", "Full body relaxation", "Wellness enhancement"]
        },
        {
          name: "Hopi Ear Candling",
          price: "£15",
          duration: "30 min",
          description: "Gentle, traditional treatment using Hopi ear candles to help clear ear canals and promote relaxation. Safe and soothing for ear and sinus health.",
          benefits: ["Ear canal cleansing", "Sinus relief", "Relaxation", "Traditional therapy", "Gentle treatment"]
        },
        {
          name: "Hopi + Sinus Massage",
          price: "£20",
          duration: "45 min",
          description: "Combines Hopi ear candling with targeted sinus massage. Perfect for relieving sinus pressure and promoting clear breathing.",
          benefits: ["Sinus pressure relief", "Clear breathing", "Facial relaxation", "Ear & sinus care", "Combined therapy"]
        },
        {
          name: "Signature Facial",
          price: "£26",
          duration: "60 min",
          description: "A luxurious facial treatment tailored to your skin's needs. Includes cleansing, exfoliation, mask, and facial massage for glowing, healthy skin.",
          benefits: ["Deep skin cleansing", "Hydration", "Anti-aging", "Relaxation", "Glowing skin"]
        }
      ]
    },
    {
      category: "Kambo Treatment",
      description: "Ancient Amazonian healing medicine for deep cleansing, detoxification, and holistic wellness. Kambo is a powerful traditional treatment that promotes physical, emotional, and spiritual healing.",
      services: [
        {
          name: "Kambo - One-to-One",
          price: "£120",
          duration: "20-45 min",
          description: "Traditional Amazonian medicine from the Phyllomedusa Bicolor tree frog. Kambo is applied through small gates on the skin to promote deep detoxification, immune system support, and emotional release. The treatment crosses the blood-brain barrier to reach areas that are difficult to treat with other methods.",
          benefits: ["Deep detoxification", "Immune system boost", "Emotional release", "Pain relief", "Spiritual cleansing", "Anxiety & depression support"],
          isKambo: true
        },
        {
          name: "Kambo - Group of 2-3",
          price: "£100",
          duration: "20-45 min",
          description: "Traditional Amazonian medicine from the Phyllomedusa Bicolor tree frog. Kambo is applied through small gates on the skin to promote deep detoxification, immune system support, and emotional release. The treatment crosses the blood-brain barrier to reach areas that are difficult to treat with other methods.",
          benefits: ["Deep detoxification", "Immune system boost", "Emotional release", "Pain relief", "Spiritual cleansing", "Anxiety & depression support"],
          isKambo: true
        },
        {
          name: "Kambo - Group of 4+",
          price: "£80",
          duration: "20-45 min",
          description: "Traditional Amazonian medicine from the Phyllomedusa Bicolor tree frog. Kambo is applied through small gates on the skin to promote deep detoxification, immune system support, and emotional release. The treatment crosses the blood-brain barrier to reach areas that are difficult to treat with other methods.",
          benefits: ["Deep detoxification", "Immune system boost", "Emotional release", "Pain relief", "Spiritual cleansing", "Anxiety & depression support"],
          isKambo: true
        }
      ]
    }
  ];

  return (
    <section id="services" className="pt-6 sm:pt-8 pb-12 sm:pb-16 md:pb-20 lg:pt-12 lg:pb-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
            <ScrollAnimate className="mb-8 sm:mb-12">
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 sm:mb-6 font-rocaone tracking-tight">
                  {category.category}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            </ScrollAnimate>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {category.services.map((service, serviceIndex) => (
                <ScrollAnimate key={serviceIndex}>
                  <Card className="h-full bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl font-medium text-foreground mb-2">
                        {service.name}
                      </CardTitle>
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-4xl font-bold text-primary">
                          {service.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          / {service.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={(service as any).isKambo ? "/kambo" : "/contact"}
                        className="w-full mt-auto py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 inline-block text-center text-white"
                        style={{ backgroundColor: '#4a4f31' }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#3d4128'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#4a4f31'}
                        onClick={() => trackBooking(service.name, 'Services Page')}
                      >
                        {(service as any).isKambo ? "Learn More About Kambo" : `Book ${service.name}`}
                      </a>
                    </CardContent>
                  </Card>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        ))}

        {/* What is Cupping Section */}
        <ScrollAnimate className="mb-20 lg:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60" style={{backgroundColor: '#7a8f6d'}}></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-40" style={{backgroundColor: '#4a4f31'}}></div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
                    What is Cupping?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Cupping therapy is an ancient healing technique that uses suction cups placed on the skin to create localized pressure. This traditional therapy has been used for thousands of years across various cultures to promote healing, reduce pain, and improve circulation.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
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
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {/* What is Reiki Section */}
        <ScrollAnimate className="mb-20 lg:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
                    What is Reiki?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Reiki (pronounced "ray-key") is a gentle Japanese energy healing technique that promotes relaxation, reduces stress, and supports the body's natural healing processes.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
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
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60" style={{backgroundColor: '#7a8f6d'}}></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-40" style={{backgroundColor: '#4a4f31'}}></div>
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {/* Call to Action */}
        <ScrollAnimate className="mt-20">
          <div className="max-w-4xl mx-auto text-center rounded-2xl p-12" style={{backgroundColor: '#a0b894'}}>
            <h3 className="text-3xl lg:text-4xl font-normal text-foreground mb-4 font-rocaone">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              All treatments are performed in our professional Saltcoats wellness studio. We recommend booking in advance to secure your preferred time slot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 transform inline-block"
                style={{ backgroundColor: '#4a4f31' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#3d4128'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#4a4f31'}
                onClick={() => trackBooking('Book Treatment', 'Services Page CTA')}
              >
                Book Your Treatment
              </a>
              <a
                href="/contact"
                className="border-2 px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg hover:scale-105 transform inline-block"
                style={{ backgroundColor: '#ffffff', color: '#4a4f31', borderColor: '#4a4f31' }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#4a4f31';
                  (e.target as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#ffffff';
                  (e.target as HTMLElement).style.color = '#4a4f31';
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default ServicesSection;
