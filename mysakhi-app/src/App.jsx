import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RideBooking from './components/RideBooking';
import LiveTracking from './components/LiveTracking';
import Wallet from './components/Wallet';
import Marketplace from './components/Marketplace';
import AboutImpact from './components/AboutImpact';
import InvestorSection from './components/InvestorSection';
import PopupWaitlist from './components/PopupWaitlist';
import Footer from './components/Footer';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState('rider');

  const handleWaitlistOpen = (role = 'rider') => {
    setWaitlistRole(role);
    setIsWaitlistOpen(true);
  };

  const handleWaitlistClose = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onWaitlistOpen={handleWaitlistOpen} />
      
      <main>
        <Hero onWaitlistOpen={handleWaitlistOpen} />
        <RideBooking />
        <LiveTracking />
        <Wallet />
        <Marketplace />
        <AboutImpact />
        <InvestorSection onWaitlistOpen={handleWaitlistOpen} />
      </main>

      <Footer onWaitlistOpen={handleWaitlistOpen} />

      <PopupWaitlist
        isOpen={isWaitlistOpen}
        onClose={handleWaitlistClose}
        defaultRole={waitlistRole}
      />
    </div>
  );
}

export default App;
