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
        let response;

        console.debug(params);


        if (process.env.NODE_ENV === "production") {
          response =  await fetch('api/fetchgiventype.php' + new URLSearchParams({
            foo: params
          })); 
        } else if (process.env.NODE_ENV === "development") {

          console.debug('https://www.landsbygarn.dk/api/fetchgiventype.php' + new URLSearchParams({
            foo: params,
            bar: 2  
          })); 
          response =  await fetch('https://www.landsbygarn.dk/api/fetchgiventype.php', { method: 'GET',
          body: JSON.stringify(params),
          headers: {
              'Content-type': 'application/json; charset=UTF-8'
        }}); 
        }



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
          }))} /> </div>
      </div>
    </div>
  )
}
