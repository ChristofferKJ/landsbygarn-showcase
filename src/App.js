import React from "react";
import "./App.css";
import ProductsGrid from "./components/ProductsGrid"; // Import the NamesComponent
import TopNavBar from "./components/TopNavBar";
import Logo from "./components/Logo";

function App() {
  return (
    <div>
      <Logo />
      <TopNavBar className="navbar" />
      <ProductsGrid />
    </div>
  );
}

export default App;
