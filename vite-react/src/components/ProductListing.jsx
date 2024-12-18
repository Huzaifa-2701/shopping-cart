import React from "react";

function ProductListing({ cartItems, setCartItems }) {
  const products = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "/images/Aloevera.jpg" },
    { id: 2, name: "Snake Plant", price: 15, category: "Succulents", image: "/images/Snakeplant.jpg" },
    { id: 3, name: "Fiddle Leaf Fig", price: 20, category: "Foliage", image: "/images/Fiddleleaf.jpg" },
    { id: 4, name: "Peace Lily", price: 25, category: "Foliage", image: "/images/Peacelily.jpg" },
    { id: 5, name: "Cactus", price: 12, category: "Cacti", image: "/images/Cactus.jpg" },
    { id: 6, name: "Rubber Plant", price: 18, category: "Foliage", image: "/images/Rubberplant.jpg" },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Our Beautiful Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden group" key={product.id}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-xl text-gray-600 mb-4">${product.price}</p>
              <button
                className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition duration-300"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
