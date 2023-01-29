import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";

const CartPage = () => {
  // const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  return (
    <div>
      CartItems
      <div className="flex flex-col ">
        {cart.map((item) => {
          return <span>{item.title}</span>;
        })}
      </div>
    </div>
  );
};

export default CartPage;
