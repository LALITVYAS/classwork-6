import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, updateQuantity, removeFromCart, clearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 mt-6 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="mt-4 flex justify-between">
            <h3 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h3>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-all"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
