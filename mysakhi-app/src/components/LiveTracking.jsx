import React, { useState, useEffect } from 'react';

const LiveTracking = () => {
  const [eta, setEta] = useState(12);
  const [distance, setDistance] = useState(3.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => (prev > 1 ? prev - 1 : prev));
      setDistance((prev) => (prev > 0.1 ? prev - 0.1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const driverInfo = {
    name: 'Priya Sharma',
    rating: 4.9,
    trips: 342,
    car: 'Maruti Swift',
    plate: 'DL 3C 5678',
    verified: true
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-sakhi-text mb-4">
            Track Your Ride in Real-Time
          </h2>
          <p className="text-lg text-sakhi-text-secondary max-w-2xl mx-auto">
            Stay connected with live tracking, driver details, and instant safety features
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="animate-fade-in-up delay-100">
            <div className="bg-gradient-to-br from-sakhi-blue/20 to-sakhi-lavender/20 rounded-2xl p-8 h-[400px] relative overflow-hidden shadow-xl">
              {/* Simulated map with route */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <path
                      d="M 100 300 Q 200 200 300 100"
                      stroke="#B39CD0"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="10,5"
                      className="animate-pulse"
                    />
                  </svg>
                  
                  {/* Pickup marker */}
                  <div className="absolute bottom-12 left-12 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-sakhi-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  {/* Dropoff marker */}
                  <div className="absolute top-12 right-12 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-sakhi-pink rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  {/* Car marker (animated) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
                    <div className="bg-white rounded-full p-3 shadow-xl">
                      <svg className="w-8 h-8 text-sakhi-lavender" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* ETA Badge */}
              <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm text-sakhi-text-secondary">Arriving in</p>
                <p className="text-2xl font-bold text-sakhi-text">{eta} mins</p>
              </div>

              {/* Distance Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm text-sakhi-text-secondary">Distance</p>
                <p className="text-2xl font-bold text-sakhi-text">{distance.toFixed(1)} km</p>
              </div>
            </div>
          </div>

          {/* Driver Info & Controls */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            {/* Driver Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                {/* Driver Photo */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-sakhi-pink to-sakhi-lavender rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    PS
                  </div>
                  {driverInfo.verified && (
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-sakhi-gold rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Driver Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-sakhi-text">{driverInfo.name}</h3>
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5 text-sakhi-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-bold text-sakhi-text">{driverInfo.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-sakhi-text-secondary mb-2">{driverInfo.trips} trips completed</p>
                  <div className="flex items-center space-x-2 text-sm text-sakhi-text">
                    <span className="font-medium">{driverInfo.car}</span>
                    <span className="text-sakhi-text-secondary">•</span>
                    <span className="font-mono">{driverInfo.plate}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 bg-sakhi-pink/20 text-sakhi-text text-xs rounded-full font-medium">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      NGO Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 bg-sakhi-lavender text-white px-6 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <span>Share Ride</span>
              </button>

              <button className="flex items-center justify-center space-x-2 bg-white border-2 border-sakhi-text text-sakhi-text px-6 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Driver</span>
              </button>
            </div>

            {/* SOS Button */}
            <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>EMERGENCY SOS</span>
            </button>

            {/* Safety Info */}
            <div className="bg-gradient-to-r from-sakhi-blue/10 to-sakhi-lavender/10 rounded-xl p-4">
              <p className="text-sm text-sakhi-text text-center">
                Your ride is being monitored 24/7. Emergency contacts have been notified of your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTracking;
