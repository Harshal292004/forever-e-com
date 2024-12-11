import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import './index.css'
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <div className='poppins-light'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about-us" element={<Layout><About /></Layout>} />
        <Route path="/collection" element={<Layout><Collection /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/contact-us" element={<Layout><Contact /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/orders" element={<Layout><Orders /></Layout>} />
        <Route path="/place-order" element={<Layout><PlaceOrder /></Layout>} />
        <Route path="/product" element={<Layout><Product /></Layout>} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
