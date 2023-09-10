import React, { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid'; // Import your ProductsGrid component here

const ScrollDownPage = () => {
  const [showProducts, setShowProducts] = useState(false);

  // Add an event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position at which you want to show the ProductsGrid
      const scrollPositionToShowProducts = 500; // Adjust this value as needed

      if (window.scrollY >= scrollPositionToShowProducts) {
        setShowProducts(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Other content before the ProductsGrid */}
      <div id="products-anchor"></div>

      {/* Dynamically add the ProductsGrid when showProducts is true */}
      {showProducts && <ProductsGrid />}

      {/* Other content after the ProductsGrid */}
    </div>
  );
};

export default ScrollDownPage;
