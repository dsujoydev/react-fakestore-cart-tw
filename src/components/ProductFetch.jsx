import React, { useState, useEffect, createContext } from "react";

export const ProductFetch = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, []);
  return (
    <ProductFetch.Provider value={{ product }}>
      {children}
    </ProductFetch.Provider>
  );
};

export default ProductProvider;
