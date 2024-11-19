import React from 'react';

    function ProductCard({ product }) {
      return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
          <h3 className="text-xl font-bold text-primary-color">{product.name}</h3>
          <p className="text-base text-secondary-color">${product.price}</p>
        </div>
      );
    }

    export default ProductCard;
