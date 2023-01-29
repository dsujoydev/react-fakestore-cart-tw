import { fromJSON } from "postcss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductIdDetails from "./pages/ProductIdDetails";
import Navbar from "./components/Navbar";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductIdDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
