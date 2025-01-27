import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const FeaturedProduct = () => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();

  // Fake Store Api Fetching
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, []);
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col justify-between"
          >
            {/* Product Image */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
              <img src={product.image} alt={product.title} className="h-48 w-full object-cover object-center" />
            </div>

            {/* Product Title */}
            <h3
              className="text-lg font-medium text-gray-900 mb-2 truncate"
              title={product.title} // Shows full title on hover
            >
              {product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}
            </h3>

            {/* Product Description */}
            <p className="text-sm text-gray-500 mb-4">High-quality materials and design</p>

            {/* Price and Add to Cart Button */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
