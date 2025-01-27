import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navigation from "./components/layouts/Navigation";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Footer from "./components/layouts/Footer";
// import { CartProvider } from './context/CartContext';
// import Navigation from './components/Navigation';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import CartPage from './pages/CartPage';
// import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
