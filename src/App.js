import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/registration/Signup'
import Login from './components/registration/Login'
import Cart from './components/Cart';
import ProductDetail from './components/products/ProductDetail';
import ProfileCard from './components/products/ProfileCard';

function App() {
  return (
    <div className="App">   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='profilecard' element={<ProfileCard />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
