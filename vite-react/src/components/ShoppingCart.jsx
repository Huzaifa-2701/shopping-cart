import React from "react";

function ShoppingCart({ cartItems, setCartItems }) {
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow-lg bg-white">
                <img src={item.thumbnail} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition duration-300"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600 transition duration-300"
                    onClick={() => deleteItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Total Items: {totalItems}</h3>
              <h3 className="text-xl font-bold text-gray-800">Total Cost: ${totalCost}</h3>
            </div>
            <div className="space-x-4">
              <button className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300">
                Continue Shopping
              </button>
              <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
