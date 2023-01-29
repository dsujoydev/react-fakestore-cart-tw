import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  const { id, title, price, image } = products;
  return (
    <div>
      <div className="container">
        <div className=" w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto">
            <img src="{image}" alt="" />
          </div>
          <div key={id}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
