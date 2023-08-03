import React, { useEffect, useState } from 'react';
import '../css/ProductsGrid.css';

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Function to fetch data from the PHP script

      const fetchProducts = async () => {
        try {
          // const response = await fetch('api/fetchallproducts.php');
          const response = await fetch('fetchall.json');
          const data = await response.json();
          setProducts(data);
          console.debug(data);



        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

        fetchProducts();

    }, []);


    return (
        <div>
          <h1>Product List</h1>
          <ul className='ProductsGrid_ul'>
            {products.map((product) => (
              <li key={product.product_id} className='ProductsGrid_li'>
                <img src={product.url}></img>

                <strong>Name:</strong> {product.name}<br />
                <strong>Color:</strong> {product.color}<br />
                <strong>Price:</strong> {product.price}<br />
                <strong>In Stock:</strong> {product.in_stock ? 'Yes' : 'No'}<br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      );
    };
export default ProductsGrid;
