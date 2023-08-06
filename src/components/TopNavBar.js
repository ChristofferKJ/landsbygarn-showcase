import React, { useEffect, useState } from 'react';
import '../css/TopNavBar.css';

const TopNavBar = () => {
  const [show, setShow] = useState(true)
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check the scroll direction (down or up)
      if (currentScrollY > prevScrollY) {
        // Scrolling down, hide the navbar
        setShow(false);
      } else {
        // Scrolling up, show the navbar
        setShow(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

   <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>








    //     <div className='topnav-right'>
    //       <a className={`a ${show ? 'a__color' : ''} ${!show ? 'a__hide' : ''}`} href="#products">Produkter</a>
    //       <a className={`a ${show ? 'a__color' : ''} ${!show ? 'a__hide' : ''}`} href="#about">Om</a>
    //       <a className={`a ${show ? 'a__color' : ''} ${!show ? 'a__hide' : ''}`} href="#contact">Kontakt</a>
    //     </div>
  );
};

export default TopNavBar;

