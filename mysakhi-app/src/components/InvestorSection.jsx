import React from 'react';

const InvestorSection = ({ onWaitlistOpen }) => {
  const opportunities = [
    {
      title: 'Large & Growing Market',
      description: 'India\'s ride-hailing market is projected to reach $12B by 2028. Women-focused mobility is an untapped segment with massive potential.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: 'Three Revenue Streams',
      description: 'Diversified income from ride commissions (15-20%), marketplace transactions (10-15%), and premium subscriptions.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Strong Retention via Safety',
      description: 'Safety-first approach creates loyal user base. Coins wallet and marketplace drive engagement and repeat usage.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Social Impact + Financial Returns',
      description: 'Invest in a mission-driven company that empowers women while delivering strong financial performance and scalability.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      )
    }
  ];

  const metrics = [
    { label: 'Target Market Size', value: '$12B', sublabel: 'by 2028' },
    { label: 'Pilot Success Rate', value: '4.9★', sublabel: 'user rating' },
    { label: 'Driver Retention', value: '92%', sublabel: 'after 3 months' },
    { label: 'Monthly Growth', value: '35%', sublabel: 'in pilot phase' }
  ];

  return (
    <section id="invest" className="py-20 bg-gradient-to-br from-sakhi-text to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why MySakhi is a Powerful Opportunity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in building India's safest and most empowering mobility platform for women
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up delay-100">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <p className="text-3xl sm:text-4xl font-bold text-sakhi-gold mb-2">{metric.value}</p>
              <p className="text-sm font-semibold mb-1">{metric.label}</p>
              <p className="text-xs text-gray-400">{metric.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div
              key={opportunity.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-16 h-16 bg-sakhi-gold/20 rounded-xl flex items-center justify-center text-sakhi-gold mb-4">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
              <p className="text-gray-300 leading-relaxed">{opportunity.description}</p>
            </div>
          ))}
        </div>

        {/* Investment Highlights */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-12 animate-fade-in-up delay-300">
          <h3 className="text-2xl font-bold mb-8 text-center">Investment Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sakhi-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Proven Pilot Success</p>
                <p className="text-sm text-gray-300">500+ rides completed with 4.9★ rating in Delhi NCR pilot</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sakhi-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Scalable Technology</p>
                <p className="text-sm text-gray-300">Cloud-native architecture ready for rapid expansion</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sakhi-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Strategic Partnerships</p>
                <p className="text-sm text-gray-300">Collaborations with leading NGOs and women's organizations</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sakhi-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Experienced Team</p>
                <p className="text-sm text-gray-300">Founders with 15+ years in tech, mobility, and social impact</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sakhi-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold mb-1">Clear Path to Profitability</p>
                <p className="text-sm text-gray-300">Unit economics validated, break-even projected in 18 months</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sakhi-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold mb-1">ESG Compliance</p>
                <p className="text-sm text-gray-300">Strong social impact aligns with ESG investment criteria</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
          <button className="bg-white text-sakhi-text px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 min-w-[240px]">
            📊 View Pitch Deck
          </button>
          <button
            onClick={() => onWaitlistOpen('investor')}
            className="bg-sakhi-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 min-w-[240px]"
          >
            Request Investor Call
          </button>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <p className="text-gray-400 mb-2">For investor inquiries:</p>
          <a href="mailto:invest@mysakhi.in" className="text-sakhi-gold hover:text-sakhi-gold/80 font-semibold text-lg transition-colors">
            invest@mysakhi.in
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
