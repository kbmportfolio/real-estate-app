import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Shop from './components/Shop';
import AllProperties from './components/AllProperties';
import Property from './components/Property';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/shop">Shop</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="" element={<AllProperties />} />
          <Route path=":id" element={<Property />} />
          
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
