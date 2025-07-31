// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Components
import Navbar from './components/navbar.js';
import Banner from './components/banner.js';
import Cards from './components/card.js';
import Carddetail from './components/carddetails.js';
import Footer from './components/footer.js';
import Signup from './components/signup.js';
import Login from './components/login.js';

// Admin Pages
import AdminDashboard from './page/adminDashboard.js';
import AdminProductList from './page/AdminProductList.js';
import Alogin from './page/alogin.js';
import AdminAddProduct from './page/adminproductadd.js';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Registration Page */}
        <Route path="/" element={<Signup />} />

        {/* Admin Pages */}
        <Route path="/admin-login" element={<Alogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProductList />} />
        <Route path="/admin/products/new" element={<AdminAddProduct />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Banner />
              <Footer />
            </>
          }
        />

        {/* Products Page */}
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Cards cart={cart} setCart={setCart} />
              <Footer />
            </>
          }
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Carddetail cart={cart} setCart={setCart} />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
