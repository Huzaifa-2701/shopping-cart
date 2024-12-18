import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Head from "./components/Head";
import LandingPage from "./components/LandingPage";
import ProductListing from "./components/ProductListing";
import ShoppingCart from "./components/ShoppingCart";
import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Head />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
