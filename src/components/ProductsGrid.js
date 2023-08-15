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
           response = await fetch("fetchalltypes.json");
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



  const openPopup = (product) => {
    setSelectedProduct(product);
    console.log(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setIsPopupOpen(false);
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-center container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product?.product_name}
            onClick={() => openPopup(product)}
            className="cursor-pointer">
            <img
              className="h-auto max-w-full rounded-lg content-center"
              src={product?.image_url}
              alt={selectedProduct?.product_name}
            />
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white flex gap-10 p-4 rounded-lg shadow-lg w-1/2 h-1/2">
            <img
              className="max-w-full h-full rounded-lg"
              src={selectedProduct?.image_url}
              alt={selectedProduct?.product_name} />

            <div className="flex flex-col">
              <div>
                <h3 className="font-bold text-xl mb-4">{selectedProduct?.product_name}</h3>
                <p className="text-lg font-semibold">{selectedProduct?.title_text}</p>
              </div>

              <div className="flex flex-col gap-4">
                <p>{selectedProduct?.made_of}</p>
                {/* <p className="line-clamp-4">{selectedProduct?.description}</p> */}
                <button onClick={closePopup} type="button" className="text-white bg-gradient-to-br from-red-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Gå tilBACH</button>
                <a class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href={"/products/" + selectedProduct?.product_name}> gå til produkt</a>

                {/* <button onClick={navigate("/products/" + selectedProduct?.product_name)} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Gå til produkt</button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default ProductsGrid;
