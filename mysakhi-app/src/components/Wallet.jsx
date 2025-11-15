import React from 'react';

const Wallet = () => {
  const coinBalance = 1250;
  
  const recentActivity = [
    { id: 1, type: 'earned', amount: 50, description: 'Ride from Connaught Place to Hauz Khas', date: 'Nov 14, 2025' },
    { id: 2, type: 'earned', amount: 75, description: 'Ride from Dwarka to Cyber City', date: 'Nov 13, 2025' },
    { id: 3, type: 'redeemed', amount: -100, description: 'Redeemed at Women-Led Marketplace', date: 'Nov 12, 2025' },
    { id: 4, type: 'earned', amount: 60, description: 'Ride from Nehru Place to Saket', date: 'Nov 11, 2025' },
    { id: 5, type: 'earned', amount: 45, description: 'Ride from Rajouri Garden to Karol Bagh', date: 'Nov 10, 2025' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sakhi-pink/10 via-sakhi-lavender/10 to-sakhi-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-sakhi-text mb-4">
            Sakhi Coins Wallet
          </h2>
          <p className="text-lg text-sakhi-text-secondary max-w-2xl mx-auto">
            Earn coins on every ride and redeem them in our women-led marketplace
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Balance Card */}
          <div className="bg-gradient-to-br from-sakhi-lavender to-sakhi-blue rounded-2xl p-8 shadow-2xl text-white animate-fade-in-up delay-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/80 text-sm mb-1">Your Balance</p>
                <h3 className="text-5xl font-bold">{coinBalance.toLocaleString()}</h3>
                <p className="text-white/90 text-lg mt-1">Sakhi Coins</p>
              </div>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-sakhi-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
              <div>
                <p className="text-white/70 text-xs mb-1">This Month</p>
                <p className="text-xl font-bold">+230</p>
              </div>
              <div>
                <p className="text-white/70 text-xs mb-1">Total Earned</p>
                <p className="text-xl font-bold">3,450</p>
              </div>
              <div>
                <p className="text-white/70 text-xs mb-1">Redeemed</p>
                <p className="text-xl font-bold">2,200</p>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-200">
            <h3 className="text-xl font-bold text-sakhi-text mb-6">How Sakhi Coins Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-sakhi-pink/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sakhi-text mb-2">Take Rides</h4>
                <p className="text-sm text-sakhi-text-secondary">Earn coins on every Sakhi ride you complete</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sakhi-lavender/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sakhi-text mb-2">Collect Coins</h4>
                <p className="text-sm text-sakhi-text-secondary">Watch your balance grow with each journey</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sakhi-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sakhi-text mb-2">Shop & Redeem</h4>
                <p className="text-sm text-sakhi-text-secondary">Use coins in our women-led marketplace</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-300">
            <h3 className="text-xl font-bold text-sakhi-text mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'earned' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      {activity.type === 'earned' ? (
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-sakhi-text">{activity.description}</p>
                      <p className="text-xs text-sakhi-text-secondary mt-1">{activity.date}</p>
                    </div>
                  </div>
                  <div className={`text-right ml-4 flex-shrink-0 ${
                    activity.type === 'earned' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    <p className="font-bold text-lg">
                      {activity.amount > 0 ? '+' : ''}{activity.amount}
                    </p>
                    <p className="text-xs">coins</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up delay-400">
            <button
              onClick={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-sakhi-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
