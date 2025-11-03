
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { trackNavigation, trackBooking } from '../lib/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const computeIsScrolled = () => {
      const hero = document.getElementById('home');
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      if (!hero) {
        setIsScrolled(window.scrollY > 0);
        return;
      }
      const triggerPoint = hero.offsetHeight - headerHeight;
      setIsScrolled(window.scrollY >= Math.max(triggerPoint, 0));
    };

    computeIsScrolled();
    window.addEventListener('scroll', computeIsScrolled);
    window.addEventListener('resize', computeIsScrolled);
    return () => {
      window.removeEventListener('scroll', computeIsScrolled);
      window.removeEventListener('resize', computeIsScrolled);
    };
  }, []);

  const trustBarColor = '#4a4f31';
  const headerBg = trustBarColor;

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300`} 
      style={{ margin: 0, backgroundColor: headerBg }}
    >
      <div className="container mx-auto px-4 py-0 md:py-0">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="relative h-full w-64 sm:w-56 md:w-72">
            <a href="/" className="block h-full" onClick={() => trackNavigation('Logo', 'Header')}>
              <img 
                src="/Gemx Brogan (3).png" 
                alt="Goddess of Goodness" 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-44 sm:h-36 md:h-48 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-primary transition-colors duration-200 drop-shadow-sm" style={{color: isScrolled ? '#ffffff' : '#fffff0'}}>
              Home
            </a>
            <a href="/about" className="hover:text-primary transition-colors duration-200 drop-shadow-sm" style={{color: isScrolled ? '#ffffff' : '#fffff0'}}>
              About
            </a>
            <a href="/contact" className="hover:text-primary transition-colors duration-200 drop-shadow-sm" style={{color: isScrolled ? '#ffffff' : '#fffff0'}}>
              Book Treatment
            </a>
            <a href="/services" className="hover:text-primary transition-colors duration-200 drop-shadow-sm" style={{color: isScrolled ? '#ffffff' : '#fffff0'}}>
              Services
            </a>
            <a href="/testimonials" className="hover:text-primary transition-colors duration-200 drop-shadow-sm" style={{color: isScrolled ? '#ffffff' : '#fffff0'}}>
              Testimonials
            </a>
            <a href="/faq" className="hover:text-primary transition-colors duration-200 drop-shadow-sm" style={{color: isScrolled ? '#ffffff' : '#fffff0'}}>
              FAQs
            </a>
            <a href="/contact" className="hover:text-primary transition-colors duration-200 drop-shadow-sm" style={{color: isScrolled ? '#ffffff' : '#fffff0'}}>
              Contact
            </a>
          </nav>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <a href="/contact" className="px-6 py-2 rounded-full transition-colors duration-200 font-medium whitespace-nowrap min-w-[100px]" style={{backgroundColor: '#ffffff', color: '#4a4f31'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'} onClick={() => trackBooking('Book Now', 'Header Desktop')}>
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:text-primary transition-colors duration-200" style={{color: isScrolled ? '#ffffff' : '#fffff0'}}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 pb-4 border-t pt-4" style={{backgroundColor: '#4a4f31', borderColor: 'rgba(255, 255, 255, 0.2)'}}>
            <div className="flex flex-col space-y-3 px-2">
              <a 
                href="/" 
                className="hover:opacity-80 transition-opacity duration-200 py-2" style={{color: '#ffffff'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="hover:opacity-80 transition-opacity duration-200 py-2" style={{color: '#ffffff'}}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/contact" 
                className="hover:opacity-80 transition-opacity duration-200 py-2" style={{color: '#ffffff'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Treatment
              </a>
              <a 
                href="/services" 
                className="hover:opacity-80 transition-opacity duration-200 py-2" style={{color: '#ffffff'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="/testimonials" 
                className="hover:opacity-80 transition-opacity duration-200 py-2" style={{color: '#ffffff'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="/faq" 
                className="hover:opacity-80 transition-opacity duration-200 py-2" style={{color: '#ffffff'}}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </a>
              <a 
                href="/contact" 
                className="hover:opacity-80 transition-opacity duration-200 py-2" style={{color: '#ffffff'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
            {/* Mobile Book Now Button */}
            <div className="mt-6 pt-4 border-t px-2" style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}>
              <a 
                href="/contact" 
                className="px-6 py-3 rounded-full transition-colors duration-200 font-medium text-center block whitespace-nowrap" 
                style={{backgroundColor: '#ffffff', color: '#4a4f31'}} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
                onClick={() => { setIsMenuOpen(false); trackBooking('Book Now', 'Header Mobile'); }}
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
