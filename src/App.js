// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/products/Product';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/products" element={<Product />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to Home Page</h1>;
}

function Features() {
  return <h1>Our Features</h1>;
}


function Clients() {
  return <h1>Our Clients</h1>;
}

export default App;
