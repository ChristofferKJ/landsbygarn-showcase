import React from "react";
import "./App.css";
import ProductsGrid from "./components/ProductsGrid"; // Import the NamesComponent
import TopNavBar from "./components/TopNavBar";
import ProductPage from "./components/ProductPage";
import Logo from "./components/Logo";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <BrowserRouter>
  
      <Logo />
      <TopNavBar className="navbar" />
      
      <div className="routes-wrapper px-40">
            <Routes>
              <Route exact path="/" element={<LandingPage/>}/>
              <Route exact path="/products" element={<ProductsGrid />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<ProductsGrid />} />
              <Route exact path="/products/:id" element={<ProductPage />} />
            </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
