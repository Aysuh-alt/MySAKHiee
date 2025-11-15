import React from 'react';

const Hero = ({ onWaitlistOpen }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sakhi-pink via-sakhi-lavender to-sakhi-blue pt-20">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sakhi-text leading-tight">
              Safe rides, powered by women.
            </h1>
            <p className="text-lg sm:text-xl text-sakhi-text-secondary max-w-2xl mx-auto lg:mx-0">
              India's first women-only ride-hailing platform. Experience safety, empowerment, and community with every journey. Plus, shop from women-led businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onWaitlistOpen('rider')}
                className="bg-sakhi-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 min-w-[200px]"
              >
                Join Rider Waitlist
              </button>
              <button
                onClick={() => onWaitlistOpen('driver')}
                className="bg-white text-sakhi-text px-8 py-4 rounded-full font-semibold text-lg border-2 border-sakhi-text hover:scale-105 hover:shadow-xl transition-all duration-300 min-w-[200px]"
              >
                Become a Driver
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-sakhi-text" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sakhi-text font-medium">100% Women Drivers</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-sakhi-text" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sakhi-text font-medium">Live Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-sakhi-text" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sakhi-text font-medium">One-tap SOS</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up delay-200">
            <div className="relative w-full max-w-md">
              {/* Illustration placeholder - abstract representation */}
              <div className="relative">
                <div className="w-full aspect-square bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-white/50 to-white/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-20 h-20 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                      </div>
                      <p className="text-sakhi-text font-semibold text-lg">Your Safe Journey Awaits</p>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-sakhi-gold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white font-bold text-2xl">★</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sakhi-lavender font-bold text-xl">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
