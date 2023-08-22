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
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter >
      <div className="flex flex-col h-screen justify-between">

        <Logo  />
        <TopNavBar className="navbar"/>

        <div className="routes-wrapper mb-auto ">
          <Routes>
            <Route  path="/" element={<LandingPage />} />
            <Route  path="/products" element={<ProductsGrid />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/products/:product_name" element={<ProductPage />} />
            {/* <Route  path="/contact" element={<Contact />} /> */}
            
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
