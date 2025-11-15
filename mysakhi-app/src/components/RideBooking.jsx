import React, { useState } from 'react';

const RideBooking = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedRide, setSelectedRide] = useState(null);

  const rideOptions = [
    {
      id: 'mini',
      name: 'Sakhi Mini',
      description: 'Affordable, safe rides',
      eta: '3 mins',
      fare: '₹120',
      capacity: '4 seats',
      features: ['Women Driver', 'SOS', 'Live Tracking']
    },
    {
      id: 'prime',
      name: 'Sakhi Prime',
      description: 'Premium comfort & safety',
      eta: '5 mins',
      fare: '₹180',
      capacity: '4 seats',
      features: ['Women Driver', 'SOS', 'Live Tracking', 'AC']
    },
    {
      id: 'share',
      name: 'Sakhi Share',
      description: 'Shared with women riders',
      eta: '7 mins',
      fare: '₹60',
      capacity: '3 seats',
      features: ['Women Driver', 'SOS', 'Live Tracking', 'Eco-friendly']
    }
  ];

  const handleConfirmRide = () => {
    if (selectedRide && pickup && dropoff) {
      alert(`Ride confirmed! Your ${selectedRide.name} will arrive in ${selectedRide.eta}`);
    }
  };

  return (
    <section id="platform" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-sakhi-text mb-4">
            Book Your Safe Ride
          </h2>
          <p className="text-lg text-sakhi-text-secondary max-w-2xl mx-auto">
            Choose from our range of women-driven rides, all equipped with advanced safety features
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Booking Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 animate-fade-in-up delay-100">
            <div className="space-y-4 mb-6">
              {/* Pickup Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-sakhi-gold rounded-full"></div>
                </div>
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-sakhi-lavender focus:outline-none transition-colors text-sakhi-text"
                />
              </div>

              {/* Dropoff Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-sakhi-pink rounded-full"></div>
                </div>
                <input
                  type="text"
                  placeholder="Drop location"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-sakhi-lavender focus:outline-none transition-colors text-sakhi-text"
                />
              </div>
            </div>

            {/* Ride Options */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-sakhi-text mb-4">Choose your ride</h3>
              {rideOptions.map((ride, index) => (
                <div
                  key={ride.id}
                  onClick={() => setSelectedRide(ride)}
                  className={`p-4 sm:p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg animate-fade-in-up ${
                    selectedRide?.id === ride.id
                      ? 'border-sakhi-lavender bg-sakhi-lavender/5'
                      : 'border-gray-200 hover:border-sakhi-lavender/50'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <svg className="w-8 h-8 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                        <div>
                          <h4 className="text-lg font-semibold text-sakhi-text">{ride.name}</h4>
                          <p className="text-sm text-sakhi-text-secondary">{ride.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {ride.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-sakhi-pink/20 text-sakhi-text text-xs rounded-full font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-sakhi-text-secondary">{ride.capacity}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-sakhi-text">{ride.fare}</p>
                      <p className="text-sm text-sakhi-text-secondary">{ride.eta} away</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirmRide}
              disabled={!selectedRide || !pickup || !dropoff}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                selectedRide && pickup && dropoff
                  ? 'bg-sakhi-gold text-white hover:scale-105 hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Confirm Safe Ride
            </button>

            {/* Safety Strip */}
            <div className="mt-6 p-4 bg-gradient-to-r from-sakhi-pink/10 to-sakhi-lavender/10 rounded-xl">
              <p className="text-center text-sakhi-text font-medium">
                🛡️ 100% women drivers · 📍 Live tracking · 🚨 One-tap SOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RideBooking;
