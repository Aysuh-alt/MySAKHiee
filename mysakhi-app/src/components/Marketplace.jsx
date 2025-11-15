import React, { useState } from 'react';

const Marketplace = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Fashion', 'Home', 'Food', 'Beauty'];

  const products = [
    {
      id: 1,
      name: 'Handwoven Silk Saree',
      description: 'Traditional Banarasi silk saree',
      price: '₹4,500',
      coins: '450 coins',
      category: 'Fashion',
      seller: 'Meera Textiles',
      image: 'fashion'
    },
    {
      id: 2,
      name: 'Organic Skincare Set',
      description: 'Natural face care essentials',
      price: '₹1,200',
      coins: '120 coins',
      category: 'Beauty',
      seller: 'Ayurveda Beauty Co.',
      image: 'beauty'
    },
    {
      id: 3,
      name: 'Handmade Pottery Set',
      description: 'Ceramic dinner set for 4',
      price: '₹2,800',
      coins: '280 coins',
      category: 'Home',
      seller: 'Pottery by Priya',
      image: 'home'
    },
    {
      id: 4,
      name: 'Artisan Jewelry Collection',
      description: 'Silver earrings & necklace',
      price: '₹3,500',
      coins: '350 coins',
      category: 'Fashion',
      seller: 'Jewels by Jaya',
      image: 'fashion'
    },
    {
      id: 5,
      name: 'Homemade Pickle Combo',
      description: 'Mango, lemon & chili pickles',
      price: '₹600',
      coins: '60 coins',
      category: 'Food',
      seller: 'Amma\'s Kitchen',
      image: 'food'
    },
    {
      id: 6,
      name: 'Embroidered Cushion Covers',
      description: 'Set of 4 decorative covers',
      price: '₹1,800',
      coins: '180 coins',
      category: 'Home',
      seller: 'Stitch & Style',
      image: 'home'
    },
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const getImageGradient = (category) => {
    const gradients = {
      Fashion: 'from-pink-400 to-purple-400',
      Beauty: 'from-rose-400 to-pink-400',
      Home: 'from-blue-400 to-cyan-400',
      Food: 'from-orange-400 to-yellow-400',
      default: 'from-sakhi-pink to-sakhi-lavender'
    };
    return gradients[category] || gradients.default;
  };

  const getIcon = (category) => {
    switch(category) {
      case 'Fashion':
        return (
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        );
      case 'Beauty':
        return (
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
          </svg>
        );
      case 'Home':
        return (
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
      case 'Food':
        return (
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-sakhi-text mb-4">
            Women-Led Marketplace
          </h2>
          <p className="text-lg text-sakhi-text-secondary max-w-2xl mx-auto">
            Shop from talented women entrepreneurs across India. Every purchase empowers a woman-owned business.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up delay-100">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-sakhi-lavender text-white shadow-lg'
                  : 'bg-gray-100 text-sakhi-text hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-sakhi-lavender hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Product Image Placeholder */}
              <div className={`h-56 bg-gradient-to-br ${getImageGradient(product.category)} flex items-center justify-center`}>
                {getIcon(product.category)}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-sakhi-text mb-1">{product.name}</h3>
                    <p className="text-sm text-sakhi-text-secondary mb-2">{product.description}</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 bg-sakhi-pink/20 text-sakhi-text text-xs rounded-full font-medium ml-2 flex-shrink-0">
                    Women-led
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-sakhi-pink to-sakhi-lavender rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{product.seller.charAt(0)}</span>
                  </div>
                  <span className="text-sm text-sakhi-text-secondary">{product.seller}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-2xl font-bold text-sakhi-text">{product.price}</p>
                    <p className="text-sm text-sakhi-lavender font-medium">or {product.coins}</p>
                  </div>
                  <button className="bg-sakhi-gold text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-sakhi-pink/20 via-sakhi-lavender/20 to-sakhi-blue/20 rounded-2xl p-8 text-center animate-fade-in-up delay-300">
          <h3 className="text-2xl font-bold text-sakhi-text mb-3">Full Marketplace Coming Soon</h3>
          <p className="text-sakhi-text-secondary mb-6 max-w-2xl mx-auto">
            We're onboarding hundreds of women entrepreneurs. Join our waitlist to get early access and exclusive launch offers.
          </p>
          <button className="bg-sakhi-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
