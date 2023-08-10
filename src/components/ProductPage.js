import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [matchingProduct, setMatchingProduct] = useState(null); // State to hold the matching product

  const params = useParams();
    console.log(params); //Returns the slug-name of the url you're navigated to

    useEffect(() => {
      // Function to fetch data from the PHP script
  
      const fetchProducts = async () => {
        try {
          // const response = await fetch('api/fetchallproducts.php');
          const response = await fetch("../fetchAirMix.json");
          console.log(response);

          const data = await response.json();
          setProducts(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchProducts();
    }, []);

    useEffect(() => {
        // Find the matching product based on the slug from URL
        const matching = products.find(product => product.product_name === params.slug);
        setMatchingProduct(matching);
    }, [products, params.slug]);

  return (
    <div>
        <h2>ProductPage</h2>
        {matchingProduct ? (
            <div>
            <h3>{matchingProduct?.product_name}</h3>
            {/* Display other details of the matching product */}
            </div>
        ) : (
            <p>Product not found</p>
        )}
    </div>
  )
}
