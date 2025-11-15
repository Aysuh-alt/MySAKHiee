import React from 'react';

const AboutImpact = () => {
  const impactStats = [
    {
      id: 1,
      number: '500+',
      label: 'Rides Completed',
      description: 'Safe journeys in our pilot program',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      color: 'from-sakhi-pink to-rose-400'
    },
    {
      id: 2,
      number: '50+',
      label: 'Women Drivers',
      description: 'Empowered with sustainable income',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      color: 'from-sakhi-lavender to-purple-400'
    },
    {
      id: 3,
      number: '4.9★',
      label: 'Average Rating',
      description: 'Trusted by our community',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      color: 'from-sakhi-gold to-yellow-400'
    }
  ];

  const features = [
    {
      title: 'Women-Only Rides',
      description: 'Every ride is driven by a verified woman driver, creating a safe and comfortable environment for women passengers.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Economic Empowerment',
      description: 'We provide sustainable income opportunities for women drivers and support women-led businesses through our marketplace.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Advanced Safety Features',
      description: 'Live tracking, one-tap SOS, ride sharing with trusted contacts, and 24/7 monitoring ensure maximum safety.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Community Building',
      description: 'Join a supportive community of women riders, drivers, and entrepreneurs working together for a safer future.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-sakhi-text mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-sakhi-text-secondary max-w-3xl mx-auto leading-relaxed">
            MySakhi is revolutionizing urban mobility in India by creating a safe, women-only ride-hailing platform. 
            We empower women drivers with sustainable income while providing riders with unmatched safety and comfort. 
            Our integrated marketplace further supports women entrepreneurs across the country.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-sakhi-text mb-2">{stat.number}</h3>
              <p className="text-lg font-semibold text-sakhi-text mb-2">{stat.label}</p>
              <p className="text-sm text-sakhi-text-secondary">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-sakhi-text text-center mb-12 animate-fade-in-up">
            What Makes MySakhi Different
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sakhi-lavender/20 rounded-lg flex items-center justify-center text-sakhi-lavender flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-sakhi-text mb-2">{feature.title}</h4>
                    <p className="text-sakhi-text-secondary">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-br from-sakhi-pink/20 via-sakhi-lavender/20 to-sakhi-blue/20 rounded-2xl p-8 sm:p-12 text-center animate-fade-in-up delay-300">
          <h3 className="text-2xl sm:text-3xl font-bold text-sakhi-text mb-4">
            Building a Safer Future for Women
          </h3>
          <p className="text-lg text-sakhi-text-secondary max-w-3xl mx-auto mb-8">
            We envision a world where every woman can travel freely and safely, pursue economic independence, 
            and support other women in their entrepreneurial journeys. MySakhi is more than a ride-hailing app—it's 
            a movement towards gender equality and women's empowerment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <svg className="w-5 h-5 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sakhi-text">Safety First</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <svg className="w-5 h-5 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sakhi-text">Women Empowerment</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <svg className="w-5 h-5 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sakhi-text">Community Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImpact;
