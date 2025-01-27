import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartItems = ({ item }) => {
  const { increaseAmount, decreaseAmount, removeFromCart } = useCart();
  const { id, title, price, image, amount } = item;

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center flex-1">
        <img className="w-24 h-24 object-cover rounded-md" src={image} alt={title} />
        <div className="ml-6">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => decreaseAmount(id)}
                className="p-2 hover:bg-gray-50 transition-colors rounded-l-lg"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <span className="px-4 py-2 text-gray-900 font-medium border-x border-gray-200">{amount}</span>
              <button
                onClick={() => increaseAmount(id)}
                className="p-2 hover:bg-gray-50 transition-colors rounded-r-lg"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <span className="text-lg font-medium text-gray-900">${price.toFixed(2)}</span>
            <span className="text-lg font-medium text-indigo-600">${(price * amount).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartItems;
