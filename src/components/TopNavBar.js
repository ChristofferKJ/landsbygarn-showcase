import React, { useEffect, useState } from 'react';
import '../css/TopNavBar.css';

const TopNavBar = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNav(currentScrollPos < 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={showNav ? 'show' : 'hide'}>
      <div className="logo">Landsbygarn</div>
      <ul className={showNav ? 'show' : 'hide'}>
        <li><a href="#home">HJEM</a></li>
        <li><a href="#products">PRODUKTER</a></li>
        <li><a href="#about">OM OS</a></li>
        <li><a href="#contact">KONTAKT</a></li>
      </ul>
    </nav>
  );
};

export default TopNavBar;

