import React, { useEffect, useState } from "react";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch data from the PHP script

    const fetchProducts = async () => {
      try {
        // const response = await fetch('api/fetchallproducts.php');
        const response = await fetch("fetchall.json");
        const data = await response.json();
        setProducts(data);
        console.debug(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div class="flex justify-center container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div>
            <img
              class="h-auto max-w-full rounded-lg content-center"
              src={product.url}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductsGrid;
