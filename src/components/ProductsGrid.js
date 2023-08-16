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
            onClick={() => {
              setSelectedProduct(product);
              window.my_modal_2.showModal();
            }}
            className="cursor-pointer">
            <img
              className="h-auto max-w-full rounded-lg content-center"
              src={product?.image_url}
              alt={selectedProduct?.product_name}
            />
          </div>
        ))}
      </div>

      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{selectedProduct?.product_name}</h3>
          <img src={selectedProduct?.image_url} />
          <p>{selectedProduct?.title_text}</p>

          <button className="btn">Gå til produkt</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};


export default ProductsGrid;
