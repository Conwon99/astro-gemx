
import React from 'react';
import { Heart, Sparkles, Zap, MapPin } from 'lucide-react';
import { trackBooking } from '../lib/analytics';
import ScrollAnimate from './ScrollAnimate';

const StatsSection = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 mx-auto mb-3" />,
      title: "Massage Therapy",
      description: "Swedish & Cupping"
    },
    {
      icon: <Sparkles className="w-12 h-12 mx-auto mb-3" />,
      title: "Energy Healing",
      description: "Reiki Treatments"
    },
    {
      icon: <Zap className="w-12 h-12 mx-auto mb-3" />,
      title: "Specialized Care",
      description: "Thai Foot & Facials"
    },
    {
      icon: <MapPin className="w-12 h-12 mx-auto mb-3" />,
      title: "Location",
      description: "Saltcoats"
    }
  ];

  return (
    <section className="text-white py-16" style={{backgroundColor: '#4a4f31'}}>
      <div className="container mx-auto px-6">
        <ScrollAnimate className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="text-white mb-3">
                {service.icon}
              </div>
              <div className="text-lg font-medium mb-1">{service.title}</div>
              <div className="text-sm opacity-90">{service.description}</div>
            </div>
          ))}
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default StatsSection;
