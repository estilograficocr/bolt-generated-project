import React from 'react';
    import ProductCard from './ProductCard';

    function ProductList({ products }) {
      return (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="bg-gray-100 rounded-lg shadow-md p-4 mb-4">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      );
    }

    export default ProductList;
