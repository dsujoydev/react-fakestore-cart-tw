import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">We provide high-quality products at competitive prices. Shop with confidence.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Track Order
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive updates and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">© 2023 Store. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
