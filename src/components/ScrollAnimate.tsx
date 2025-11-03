import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  animationClass?: string;
}

const ScrollAnimate: React.FC<ScrollAnimateProps> = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  animationClass = 'animate-fade-in'
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? animationClass : 'opacity-0 translate-y-4'}`}
      style={{
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
