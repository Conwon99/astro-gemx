import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  minWidth?: string;
  height?: string;
}

const CalendlyEmbed = ({ url, minWidth = '320', height = '630' }: CalendlyEmbedProps) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      style={{ minWidth: minWidth + 'px', height: height + 'px', width: '100%' }}
      data-url={url}
    />
  );
};

export default CalendlyEmbed;


