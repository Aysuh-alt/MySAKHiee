import React, { useState, useEffect } from 'react';

const Header = ({ onWaitlistOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gradient-to-br from-sakhi-pink to-sakhi-lavender rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-sakhi-text">MySakhi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('platform')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium">
              Platform
            </button>
            <button onClick={() => scrollToSection('drivers')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium">
              Drivers
            </button>
            <button onClick={() => scrollToSection('marketplace')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium">
              Marketplace
            </button>
            <button onClick={() => scrollToSection('invest')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium">
              Invest
            </button>
            <button
              onClick={() => onWaitlistOpen('rider')}
              className="bg-sakhi-gold text-white px-6 py-2 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Join Waitlist
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-sakhi-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection('platform')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium text-left">
                Platform
              </button>
              <button onClick={() => scrollToSection('drivers')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium text-left">
                Drivers
              </button>
              <button onClick={() => scrollToSection('marketplace')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium text-left">
                Marketplace
              </button>
              <button onClick={() => scrollToSection('invest')} className="text-sakhi-text hover:text-sakhi-lavender transition-colors font-medium text-left">
                Invest
              </button>
              <button
                onClick={() => {
                  onWaitlistOpen('rider');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-sakhi-gold text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
              >
                Join Waitlist
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
