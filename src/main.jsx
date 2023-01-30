import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProductProvider from "./components/ProductFetch";
import CartProvider from "./components/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </CartProvider>
);
