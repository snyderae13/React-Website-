import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/HomePage/Footer/Footer';
import Services from './components/pages/HomePage/Services/Services';
import Products from './components/pages/HomePage/Products/Products';
import Signup from './components/pages/SignUp/SignUp';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path = '/products' element={<Products/>} />
        <Route path ='/signup' element={<Signup/>} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
