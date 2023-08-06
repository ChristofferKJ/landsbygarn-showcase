import React, { useEffect, useState } from "react";
import "../css/TopNavBar.css";

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
    <div className={`navbar w-full fixed z-40`}>
      <div className="mx-auto container flex px-4">
        <ul
          className={`flex ml-auto items-center gap-6 transition-all duration-200 h-16 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          <li>
            <a className="hover:text-lime-400" href="/">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-lime-400" href="/">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:text-lime-400" href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
