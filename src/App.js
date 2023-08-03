import React from 'react';
import './App.css';
import ProductsGrid from './components/ProductsGrid'; // Import the NamesComponent
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <div className="App">
       <TopNavBar/>
        <ProductsGrid />
    </div>
  );
}

export default App;
