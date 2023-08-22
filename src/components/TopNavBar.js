import React, { useEffect, useState } from "react";

const TopNavBar = () => {
  const [show, setShow] = useState(true);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar z-10 w-full fixed mx-auto`}>
      <div className="mx-auto px-4 container flex">

        <div className={`flex ml-auto items-center gap-6 transition-all duration-200 h-16 ${show ? "opacity-100" : "opacity-0"
          }`}>
          <ul className="menu menu-horizontal">
            <li>
              <details >
                <summary >
                  Menu
                </summary>
                <ul className="p-2 bg-white">
                  <li><a href="/Products">Produkter</a></li>
                  <li><a href="/About">Om os</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

    </div>










  );
};

export default TopNavBar;

