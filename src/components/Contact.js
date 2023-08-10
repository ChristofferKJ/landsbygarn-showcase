import React, { useRef, useEffect } from 'react';

const Contact = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
    const apiKey = 'AIzaSyCeyoIOYBI1m6gph-Qqv9e2HgnrPn1zjR8';
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: { lat: 56.346291044003735, lng: 10.633875867695778 }, // Set the initial center to your desired location
      zoom: 9, // Set the initial zoom level as desired
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    const marker = new window.google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: 'Landsbygarn',
    });
  };

  return(
  <section class="bg-transparent dark:bg-gray-900">
  <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Find os i hjertet af Djursland</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Addressen er Sognevejen 6, 8560 Kolind. Butikken ligger i en lille landsby ved navn Nødager. Kom forbi og se udvalget af garn!</p>
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
Åbn i Google Maps          </a> 
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <div className='flex justify-center' style={{ height: '500px', width: '100%' }} ref={mapRef}></div>
            </div>                
  </div>
</section>
  
)};

export default Contact;

