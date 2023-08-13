import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import "./ImageGrid.css";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  const params = useParams();

  let images = []; // Use let instead of const

  useEffect(() => {
    // Function to fetch data from the PHP script

    const fetchProducts = async () => {
      try {
        // const response = await fetch('api/fetchallproducts.php');
        const response = await fetch("../fetchAirMix.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-24">

        </div>
        <div>
          <ImageGallery showPlayButton={false} showFullscreenButton={false} items={products.map(product => ({
            original: product.url,
            thumbnail: product.url, // You can adjust this if you need different thumbnail URLs
          }))}  /> </div>
      </div>
    </div>
  )
}
