import React from "react";
import "./App.css";
import ProductsGrid from "./components/ProductsGrid"; // Import the NamesComponent
import TopNavBar from "./components/TopNavBar";
import Logo from "./components/Logo";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>



      <Logo />
      <TopNavBar className="navbar" />
      
<div className="routes-wrapper">

      <Routes>
        <Route exact path="/" />
        <Route exact path="/Products" element={<ProductsGrid />} />
        <Route exact path="/About" element={<Contact />} />
        <Route exact path="/Contact" element={<ProductsGrid />} />
      </Routes>
</div>

    </BrowserRouter>
  );
}

export default App;
