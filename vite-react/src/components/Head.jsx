import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-green-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Paradise Nursery</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
      </nav>
    </header>
  );
}

export default Header