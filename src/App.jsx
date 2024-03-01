// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login2 from './Login2';
import Home from './Home';
import Product from './Product';
import PrivateRoute from './PrivateRoute'; // Ensure correct import path

const App = () => {


  return (
    <Router>
      <>
        <Link to='/'>Home</Link>
        <Link to="/login">Login</Link>
        <Link to='/product'>Product</Link>

        <Routes>
          <Route path="/login" element={<Login2 />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
