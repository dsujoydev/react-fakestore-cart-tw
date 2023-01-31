import React, { useContext } from "react";
import { ProductFetch } from "../components/ProductFetch";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";

const Home = () => {
  const { product } = useContext(ProductFetch);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {product.map((products) => {
            return (
              <div className="w-full h-250px rounded bg-white shadow-xl flex flex-col justify-center items-center border-solid border-2 border-black gap-7">
                <Link
                  className=" h-2 mb-2 p-5 font-semibold"
                  key={products.id}
                  to={`/product/${products.id}`}
                >
                  {products.title}
                </Link>

                <div className="w-[250px] flex justify-center ">
                  <img
                    className="h-[200px] w-[200px] p-4"
                    src={products.image}
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center gap-3">
                  <span className="text-md font-mono font-semibold">
                    {products.price}$
                  </span>
                  <button
                    onClick={() => addToCart(products, products.id)}
                    className="bg-orange-400 px-4 py-2 hover:bg-orange-500 rounded-md text-black text-md font-bold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block m-2 hover:scale-125"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
