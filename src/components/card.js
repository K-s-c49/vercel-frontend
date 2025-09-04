import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    if (!Array.isArray(cart)) {
      console.warn("Cart is not defined properly");
      return;
    }

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

  // 🎨 CSS-in-JS
  const styles = {
    title: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "700",
      background: "linear-gradient(45deg, #2575fc, #6a11cb)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
      marginBottom: "25px",
    },
    card: {
      borderRadius: "12px",
      transition: "all 0.3s ease-in-out",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },
    img: {
      height: "250px",
      objectFit: "cover",
      transition: "transform 0.3s ease-in-out",
    },
    imgHover: {
      transform: "scale(1.05)",
    },
    btn: {
      background: "linear-gradient(45deg, #ff512f, #dd2476)",
      color: "white",
      fontWeight: "600",
      border: "none",
      transition: "all 0.3s ease-in-out",
      borderRadius: "8px",
      padding: "10px",
      width: "100%",
    },
  };

  return (
    <div className="container mt-4">
      <h2 style={styles.title}>🛍 Our Products</h2>
      <div className="row justify-content-center">
        {products.map((data, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className="card h-100"
              style={styles.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img
                src={data.image}
                className="card-img-top"
                alt={data.name}
                style={styles.img}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary fw-bold">{data.name}</h5>
                <p className="card-text text-muted flex-grow-1">
                  {data.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="text-success fw-bold">₹{data.price}</h5>
                  <span className="badge bg-warning text-dark">Best Seller</span>
                </div>
                <button
                  onClick={() => handleAddToCart(data)}
                  style={styles.btn}
                >
                  <i className="fas fa-cart-plus me-2"></i> Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
