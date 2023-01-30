import React, { useState, useEffect, createContext } from "react";

export const ProductFetch = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

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
    // using fetched items in a context.provider to use it anywhere

    <ProductFetch.Provider value={{ product }}>
      {children}
    </ProductFetch.Provider>
  );
};

export default ProductProvider;
