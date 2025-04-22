
import React, { useState } from 'react';
import products from './data/products.jsx';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, amount) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <h1>🛍️ My Shop</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cartItems={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;
