import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";

const CartPage = () => {
  // const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total } = useContext(CartContext);
  return (
    <div className="">
      CartItems
      <div className="">
        {cart.map((item) => {
          return <CartItems item={item} key={item.id} />;
        })}
      </div>
      Total: {total}
    </div>
  );
};

export default CartPage;
