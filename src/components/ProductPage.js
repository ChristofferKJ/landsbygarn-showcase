import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import "./ImageGrid.css";
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/solid'


function ProductPage() {


  const { product_name } = useParams();
  const [products, setProducts] = useState([]); // Initialize products as an empty array
  const [maintype, setMainType] = useState([]); // Initialize products as an empty array
  const [mainPicture, setMainPicture] = useState(0)

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
        setMainType(data); // Update the products state with fetched data
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });



  }, [product_name]);



  return (
    <div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700">
      <div className="flex flex-col lg:flex-row">

        {/* :PICTURES CONTAINER */}
        <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
          {/* ::Like Button */}
          <span className="self-start ml-10">
            <button className="text-gray-300 hover:text-red-500">
              <HeartIcon className="w-10 h-10" />
            </button>
          </span>
          {/* ::Main Picture */}
          <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
            <img src={maintype.image_url}  className="object-contain w-full h-full" />
          </div>
          {/* ::Gallery */}
          <div className="mt-6 mx-auto">
            <ul className="grid grid-flow-col auto-cols-fr gap-4">
              {products.map((prod, index) => (
                <li key={prod.product_id} className={`col-span-1 p-1 w-16 rounded border-2 ${index === mainPicture ? "border-yellow-600" : "border-transparent"}`}>
                  <button type="button" className="block h-full rounded overflow-hidden" onClick={() => setMainPicture(index)}>
                    <img src={prod.url}  className="object-contain" />
                  </button>
                </li>
              ))
              }
            </ul>
          </div>
        </div>



        {/* :PRODUCT DETAILS */}
        <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">

          {/* ::Description Container */}
          <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
            {/* :::Name */}
            <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">{maintype.name}</h1>
            {/* :::Description */}
            <p className="mt-10 text-base text-gray-500">{maintype.description}</p>
            {/* :::Features */}
          
          </div>

          {/* ::Customization Container */}
          <div className="order-1 lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200">
              {/* :::Name */}
            <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">{maintype.name}</h1>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* :::Quantity */}
              <label htmlFor="quantity" className="sr-only">Select the quantity</label>
              <input type="number" defaultValue="1" min="1" className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0" />
              {/* :::Color */}
              {/* <label htmlFor="color" className="sr-only">Select your color</label>
              <select name="color" id="color" className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0">
                <option value="">Color</option>
                {product.colors.map(color => (
                  <option value={color.name}>{color.name}</option>
                ))
                }
              </select> */}
            </div>
          </div>

          {/* ::Actions Container */} 
          <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
            {/* :::Price */}
            <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
              <span className="font-normal">$</span>
              {maintype.price}
            </span>
            {/* :::Add to cart button */}
            <button type="button" className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600">
              <ShoppingBagIcon className="mr-3 w-6 h-6" />
              Add to cart
            </button>
            {/* :::Reviews */}
            <div className="m-2.5 flex items-center">
              {/* ::::rating stars */}
              <div className="flex items-center space-x-1">
                {/* full stars */}
                {/* {[...Array(starsNumber)].map((star, index) =>(
                  <span key={index} className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  </span>
                ))
                } */}
                {/* half star */}
                {/* {isHalfStar &&
                  <span className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                  </span>
                } */}
                {/* empty stars */}
                {/* {[...Array(emptyStars)].map((star, index) =>(
                  <span key={index} className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/>
                    </svg>
                  </span>
                ))
                } */}
              </div>
              {/* ::::all reviews */}
              {/* <a href={product.hrefReviews} className="ml-2 text-sm text-sky-400 font-medium tracking-wide hover:text-sky-500 hover:underline">{`${product.reviews} reviews`}</a> */}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductPage;
