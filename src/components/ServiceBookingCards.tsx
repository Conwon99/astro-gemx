import React from 'react';
import { Card, CardContent } from './ui/card';

const ServiceBookingCards = () => {
  const allServices = [
    {
      category: "Massage Therapy",
      services: [
        { name: "Swedish Full Body Massage", price: "£35", duration: "60 min", slug: "swedish-massage" },
        { name: "Cupping Therapy Massage", price: "£30", duration: "60 min", slug: "cupping-therapy" },
        { name: "Swedish Back + Cupping", price: "£35", duration: "60 min", slug: "swedish-back-cupping" },
      ]
    },
    {
      category: "Energy Healing",
      services: [
        { name: "Reiki Energy Healing", price: "£35", duration: "60 min", slug: "reiki-healing" },
        { name: "Reiki Infused Massage", price: "£35", duration: "60 min", slug: "reiki-infused" },
      ]
    },
    {
      category: "Specialized Treatments",
      services: [
        { name: "Thai Foot Massage", price: "£30", duration: "60 min", slug: "thai-foot" },
        { name: "Hopi Ear Candling", price: "£15", duration: "30 min", slug: "hopi-ear" },
        { name: "Hopi + Sinus Massage", price: "£20", duration: "45 min", slug: "hopi-sinus" },
        { name: "Signature Facial", price: "£26", duration: "60 min", slug: "signature-facial" },
      ]
    },
    {
      category: "Kambo Treatment",
      services: [
        { name: "Kambo - One-to-One", price: "£120", duration: "20-45 min", slug: "kambo-one", isKambo: true },
        { name: "Kambo - Group of 2-3", price: "£100", duration: "20-45 min", slug: "kambo-group-2-3", isKambo: true },
        { name: "Kambo - Group of 4+", price: "£80", duration: "20-45 min", slug: "kambo-group-4", isKambo: true },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      {allServices.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-8 text-center font-rocaone">
            {category.category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service, serviceIndex) => (
              <Card key={serviceIndex} className="bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{service.name}</h3>
                    <p className="text-3xl font-bold text-primary mb-2">{service.price}</p>
                    <p className="text-sm text-muted-foreground mb-2">{service.duration}</p>
                  </div>
                  <a 
                    href={(service as any).isKambo ? "/kambo" : "/contact"}
                    className="w-full mt-4 py-2 font-medium rounded-full transition-all duration-300 hover:scale-105 inline-block text-center text-white"
                    style={{ backgroundColor: '#4a4f31' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#3d4128'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#4a4f31'}
                  >
                    {(service as any).isKambo ? "Learn More" : "Book Session"}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBookingCards;


