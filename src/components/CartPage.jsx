import React, { useContext } from "react";
import CartItems from "./CartItems";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cart, total } = useContext(CartContext);
  return (
    <div className="my-10 flex flex-col items-center container-xl">
      CartItems
      <div className="">
        {cart.map((item) => {
          return <CartItems item={item} key={item.id} />;
        })}
      </div>
      <span className="p-4 text-lg font-bold border border-stone-800 bg-orange-400">
        Total: {total}
      </span>
    </div>
  );
};

export default CartPage;
