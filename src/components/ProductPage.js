import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ImageGrid.css";


function ProductPage(event) {
  const { product_name } = useParams();
  const [products, setProducts] = useState([]);
  const [maintype, setMainType] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [errorM, setError] = useState(''); // Add a loading state

  useEffect(() => {
    const apiGetDesc = `api/productpage.php?product_name=${product_name}`;

    Promise.all([
      fetch(apiGetDesc)
    ])
      .then(([data]) => {
        if (!data.ok) {
          throw new Error("Network response was not ok");
        }
        return Promise.all([data.json()]);
      })
      .then(([datajson]) => {
        setProducts(datajson.slice(0, datajson.length - 1));
        setMainType(datajson[datajson.length - 1]);
        setIsLoading(false); // Set loading state to false after fetch
      })
      .catch(error => {
        console.error("An error occurred:", toString());
        setError(error.toString()); 
        // You can replace console.error with any suitable logging or streaming method
        // to handle the error message.
        setIsLoading(false); // Set loading state to false in case of error
      });

  }, [product_name]); // Include product_name in dependency array

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-maincolor"></div>
      </div>
    );  }

  return (
    <div className="flex flex-col lg:flex-row px-14 lg:space-x-8">
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <img className="w-2/4 rounded-lg mx-auto mb-4" src={maintype?.image_url} alt={maintype?.name} />
          <h1 className="text-2xl font-semibold mb-2 text-center ">{product_name}</h1>
          <p className="text-gray-800 text-2xl  font-semibold py-4 mb-2 text-center">PRIS: {products[0]?.price} kr</p>
          <h2 className="text-lg  text-center font-medium mb-2">{maintype?.title_text}</h2>
          <p className="text-gray-600 text-center">{maintype?.description}</p>
          <p className="text-gray-600  font-semibold py-4 mb-2 text-center">{maintype?.made_of}</p>
        </div>
      </div>

      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center py-4">Farver</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div className="text-center relative" key={index}>
                <img className="w-16 h-16 mx-auto mb-2 rounded-full border border-gray-300" src={product?.url} alt={product?.product_color} />
                <p className="text-gray-700 absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 px-2   ">
                  {product?.product_color}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;
