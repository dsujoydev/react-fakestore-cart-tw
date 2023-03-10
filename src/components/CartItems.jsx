import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItems = ({ item }) => {
  const { increaseAmount, decreaseAmount, removeFromCart } =
    useContext(CartContext);
  const { id, title, price, image, amount } = item;

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <img
            className="w-20 p-2 mx-2 border border-slate-500  my-2"
            src={image}
            alt=""
          />
          <div>
            <span className="mx-6 text-lg text-gray-600 font-medium ">
              {title}
            </span>
            <div className="flex gap-4">
              <div className=" bg-white flex gap-2 border border-slate-600 font-extrabold text-md">
                <button
                  className="p-2 bg-slate-400"
                  onClick={() => decreaseAmount(id)}
                >
                  -
                </button>
                <span className="p-2 border-x-2 border-black">{amount}</span>
                <button className="p-2" onClick={() => increaseAmount(id)}>
                  +
                </button>
              </div>

              <div className="text-lg font-medium">{price} $</div>
              <div className="text-lg font-medium">
                {`${parseFloat(price * amount).toFixed(2)}`} $
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => removeFromCart(id)} className="cursor-pointer">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-6 h-6 hover:scale-125 "
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
