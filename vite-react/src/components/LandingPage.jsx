import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <h2 className="text-4xl font-bold mb-4">Welcome to Paradise Nursery</h2>
      <p className="mb-6 text-lg">Your one-stop shop for beautiful houseplants!</p>
      <Link to="/products">
        <button className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-700">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
