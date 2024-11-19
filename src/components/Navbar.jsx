import React from 'react';

    function Navbar() {
      return (
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex justify-between items-center">
            <li><a href="#" className="text-xl font-bold">Home</a></li>
            <li><a href="#" className="text-xl font-bold">Products</a></li>
            <li><a href="#" className="text-xl font-bold">Cart</a></li>
          </ul>
        </nav>
      );
    }

    export default Navbar;
