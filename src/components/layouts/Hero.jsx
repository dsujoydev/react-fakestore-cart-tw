import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 mb-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-4">Summer Collection 2024</h1>
        <p className="text-indigo-100 mb-6">Discover our latest arrivals and trending products with up to 40% off.</p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
