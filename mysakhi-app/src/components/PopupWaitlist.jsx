import React, { useState, useEffect } from 'react';

const PopupWaitlist = ({ isOpen, onClose, defaultRole = 'rider' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    role: defaultRole
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, role: defaultRole }));
      setIsSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, defaultRole]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setFormData({ name: '', email: '', city: '', role: 'rider' });
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sakhi-lavender"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-sakhi-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-sakhi-pink to-sakhi-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-sakhi-text mb-2">
                  Join MySakhi Waitlist
                </h2>
                <p className="text-sakhi-text-secondary">
                  Be among the first to experience safe, women-only rides
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-sakhi-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sakhi-lavender focus:outline-none transition-colors text-sakhi-text"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-sakhi-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sakhi-lavender focus:outline-none transition-colors text-sakhi-text"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-sakhi-text mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sakhi-lavender focus:outline-none transition-colors text-sakhi-text"
                    placeholder="e.g., Delhi, Mumbai, Bangalore"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-sakhi-text mb-2">
                    I'm interested as a *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sakhi-lavender focus:outline-none transition-colors text-sakhi-text bg-white"
                  >
                    <option value="rider">Rider</option>
                    <option value="driver">Driver</option>
                    <option value="investor">Investor</option>
                    <option value="ngo">NGO Partner</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-sakhi-gold text-white px-6 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sakhi-gold focus:ring-offset-2"
                >
                  Join MySakhi Waitlist
                </button>
              </form>

              {/* Privacy Note */}
              <p className="text-xs text-sakhi-text-secondary text-center mt-6">
                We respect your privacy. Your information will only be used to contact you about MySakhi.
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-sakhi-text mb-3">
                You're on the list!
              </h3>
              <p className="text-sakhi-text-secondary mb-6">
                Thank you for joining MySakhi. We'll reach out soon with updates and early access.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sakhi-lavender">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Welcome to the MySakhi community!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupWaitlist;
