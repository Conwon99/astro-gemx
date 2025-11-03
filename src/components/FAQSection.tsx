
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from './ui/accordion';
import ScrollAnimate from './ScrollAnimate';

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of massage do you offer?",
      answer: "We offer Swedish full body massage (£35), cupping therapy massage (£30), and Swedish back massage with cupping (£35). All treatments are designed for deep relaxation and healing."
    },
    {
      question: "What is Reiki energy healing?",
      answer: "Reiki is a gentle energy healing technique that promotes relaxation, stress reduction, and healing. We offer both Reiki energy healing (£35) and Reiki infused massage (£35)."
    },
    {
      question: "How do I book a treatment?",
      answer: "You can book treatments by calling 07782 844404, emailing goddessofgoodness1@outlook.com, or using our online booking system."
    },
    {
      question: "What specialized treatments do you offer?",
      answer: "We offer Thai foot massage (£30), Hopi ear candling (£15), Hopi ear candling with sinus drainage massage (£20), and signature facial treatments (£26)."
    },
    {
      question: "Where are you located?",
      answer: "We're located in Saltcoats and offer all treatments by appointment. Please contact us to schedule your session."
    },
    {
      question: "Do you offer gift vouchers?",
      answer: "Yes, gift vouchers are available for all treatments. Perfect for treating someone special to a healing experience."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimate className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Title and description */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 font-figtree tracking-tight">
              Frequently
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 sm:mb-6 italic font-instrument-serif tracking-tight">
              asked questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about our holistic healing services, massage therapy, and energy healing treatments.
            </p>
          </div>

          {/* Right side - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-border bg-white/30 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-foreground hover:text-primary text-left py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default FAQSection;
