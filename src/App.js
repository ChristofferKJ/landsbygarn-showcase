import React from 'react';
import './App.css';
import ProductsGrid from './components/ProductsGrid'; // Import the NamesComponent
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <div>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <span className='logo flex fixed'>Landsbygarn</span>
        </div>
        <TopNavBar className='navbar' />
      </div>
      <ProductsGrid />
    </div>
  );
}

export default App;
