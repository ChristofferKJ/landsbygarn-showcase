import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Function to fetch data from the PHP script

    const fetchProducts = async () => {
      try {

        let response;

        console.debug(process.env.NODE_ENV);

        if (process.env.NODE_ENV === "production") {
          response = await fetch('api/fetchalltypes.php');
        } else if (process.env.NODE_ENV === "development") {
          response = await fetch("https://landsbygarn.dk/api/fetchalltypes.php");
          console.log(response); 
        }

        const data = await response.json();
        setProducts(data);
        console.debug(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);


  const navigate = useNavigate();

  return (
    <div className="flex justify-center container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product?.name}
            onClick={() => {
              // setSelectedProduct(product);
              // window.my_modal_2.showModal();
              navigate("/products/" + product?.name);
            }}
            className={`cursor-pointer relative`}
          >
            <img
              className={`h-auto max-w-full rounded-lg ${selectedProduct === product ? "" : "transform hover:scale-110 transition-transform"
                }`}
              src={product?.image_url}
              alt={product?.name}
            />
            {selectedProduct !== product && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 transition-opacity hover:opacity-100 rounded-lg">
                <div className="text-center p-4">
                  <div className="font-bold text-xl mb-2">
                    {product?.name}
                  </div>
                  <div className="text-base">
                    {product?.title_text}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};


export default ProductsGrid;
