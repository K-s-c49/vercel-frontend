import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Components
import Navbar from "./components/navbar.js";
import Banner from "./components/banner.js";
import Cards from "./components/card.js";
import Carddetail from "./components/carddetails.js";
import Footer from "./components/footer.js";
import Signup from "./components/signup.js";
import Login from "./components/login.js";
import About from "./components/about.js";
import Bill from "./components/bill.js";
import Profile from "./components/profile.js";

// Admin Pages
import AdminDashboard from "./page/adminDashboard.js";
import AdminProductList from "./page/AdminProductList.js";
import AdminAddProduct from "./page/adminproductadd.js";
import Alogin from "./page/alogin.js";
import ProductSlider from "./components/Slider.js";
import EditProduct from "./page/EditProduct.js";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        {/* ========== User Auth ========== */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* ========== Admin Routes ========== */}
        <Route path="/admin-login" element={<Alogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProductList />} />
        <Route path="/admin/products/:id/edit" element={<EditProduct />} />
        <Route path="/admin/products/new" element={<AdminAddProduct />} />

        {/* ========== Main User Pages ========== */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Banner />
              <ProductSlider />
              <Footer />
            </>
          }
        />

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

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
              <Footer />
            </>
          }
        />

        <Route
          path="/bill"
          element={
            <>
              <Navbar />
              <Bill />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
