import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ImageGrid.css";


function ProductPage() {

  const { product_name } = useParams();
  const [products, setProducts] = useState([]); // Initialize products as an empty array
  const [maintype, setMainType] = useState([]); // Initialize products as an empty array

  useEffect(() => {
    // Define the URL of your PHP script
    const apiUrl = `https://landsbygarn.dk/api/fetchgiventype.php?product_name=${product_name}`;
    const apiGetDesc = `https://landsbygarn.dk/api/fetchtype.php?product_name=${product_name}`;

    // Make the fetch request
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Update the products state with fetched data
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });




    fetch(apiGetDesc)
      .then((response) => response.json())
      .then((data) => {
        setMainType(data[0]); // Update the products state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });



  }, [product_name]);



  return (
    <div>
      <h1>{maintype.name}</h1>
      <img src={maintype.image_url}></img>
      <h1>{maintype.title_text}</h1>
      <h1>{maintype.description}</h1>

    </div>
  )
}

export default ProductPage;
