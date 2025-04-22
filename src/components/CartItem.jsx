import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
        <div className="ml-4">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, -1)} // Decrease quantity
          className="bg-gray-300 px-4 py-1 rounded-md hover:bg-gray-400 transition-all"
        >
          -
        </button>
        <span className="mx-4">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, 1)} // Increase quantity
          className="bg-gray-300 px-4 py-1 rounded-md hover:bg-gray-400 transition-all"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)} // Remove item from cart
          className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
