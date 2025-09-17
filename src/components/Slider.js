import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";

function ProductSlider({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://backend-626x.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    if (!Array.isArray(cart)) return;

    const exists = cart.find((item) => item._id === product._id);
    if (exists) {
      const updated = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    navigate("/cart");
  };

  // ✅ Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4, // default (desktop)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // Large tablets
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992, // iPad / medium devices
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Small tablets / phablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="product-slider-container">
      <h3 className="slider-title">Featured Products</h3>
      <Slider {...settings}>
        {products.slice(0, 6).map((product) => (
          <div key={product._id} className="slider-card-wrapper">
            <div className="slider-card">
              <div className="slider-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="slider-image"
                />
              </div>
              <div className="slider-info">
                <h4 className="slider-product-name">{product.name}</h4>
                <p className="slider-description">{product.description}</p>
                <div className="slider-bottom-row">
                  <span className="slider-price">₹{product.price}</span>
                  <button
                    className="slider-add-button"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
