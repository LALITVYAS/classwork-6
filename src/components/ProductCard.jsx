import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)} 
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
