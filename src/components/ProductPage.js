import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ImageGrid.css";


function ProductPage(event) {
  const { product_name } = useParams();
  const [products, setProducts] = useState([]);
  const [maintype, setMainType] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [errorM, setError] = useState(''); // Add a loading state

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (index) => {
    setSelectedProduct(index === selectedProduct ? null : index);
  };

  useEffect(() => {


    let apiUrl = '';
    let apiGetDesc = '';

    if (process.env.NODE_ENV === "production") {
       apiUrl = `api/fetchgiventype.php?product_name=${product_name}`;
       apiGetDesc = `api/fetchtype.php?product_name=${product_name}`;

    } else if (process.env.NODE_ENV === "development") {
       apiUrl = `https://landsbygarn.dk/api/fetchgiventype.php?product_name=${product_name}`;
       apiGetDesc = `https://landsbygarn.dk/api/fetchtype.php?product_name=${product_name}`;
    }

    // Make the fetch request
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Update the products state with fetched data
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });




    fetch(apiGetDesc)
      .then((response) => response.json())
      .then((data) => {
        setMainType(data[0]); // Update the products state with fetched data
        console.log(data);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });



  }, [product_name]);


  return (
    <div className="flex flex-col lg:flex-row px-14 lg:space-x-8">
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <img className="w-2/4 rounded-lg mx-auto mb-4" src={maintype?.image_url} alt={maintype?.name} />
          <h1 className="text-2xl font-semibold mb-2 text-center ">{product_name}</h1>
          <p className="text-gray-800 text-2xl  font-semibold py-4 mb-2 text-center">PRIS: {products[0]?.price} kr</p>
          <h2 className="text-lg  text-center font-medium mb-2">{maintype?.title_text}</h2>
          <p className=" py-4 text-center">{maintype?.description}</p>
          <p className=" font-semibold  mb-2 text-center">Indhold: {maintype?.made_of}</p>
          <p className=" font-semibold  mb-2 text-center">Garngruppe: {maintype?.garngruppe}</p>
          <p className=" font-semibold  mb-2 text-center">Strikkefasthed: {maintype?.strikkefasthed}</p>
          <p className=" font-semibold  mb-2 text-center">Vægt/Længde:  {maintype?.vaegt_laengde}</p>

        </div>
      </div>

      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center py-4">Farver</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div className="text-center relative" key={index}>
                <img
                  className="w-16 h-16 mx-auto mb-2 rounded-full border border-gray-300"
                  src={product?.url}
                  alt={product?.product_color}
                  onClick={() => handleImageClick(index)}
                />
                {selectedProduct === index && (
                  <p className="text-gray-700 absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 px-2">
                    {product?.product_color}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;
