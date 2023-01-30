import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartPage from "./CartPage";
import { CartContext } from "./CartContext";

const Navbar = () => {
  const { itemAmount } = useContext(CartContext);
  return (
    <div className="flex justify-between p-3 fixed w-full z-20 top-0 left-0 border-b bg-white border-gray-200 dark:border-gray-600">
      <div className="text-2xl font-black">FakeStore </div>
      <div>
        <Link
          className="text-xl font-semibold p-3 rounded-t-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" text-xl font-semibold p-3 rounded-t-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          to="/about"
        >
          About
        </Link>
        <Link
          className=" text-xl font-semibold p-3 rounded-t-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          to="/products"
        >
          Products
        </Link>
      </div>
      <Link className="text-lg font-medium" to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="orange"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        Cart
        <span className="text-black p-2 bg-orange-400 rounded-full font-bold mx-3">
          {itemAmount}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
