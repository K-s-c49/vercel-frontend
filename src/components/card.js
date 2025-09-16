import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://backend-626x.onrender.com/api/products")
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

  return (
    <div className="container mt-4">
      {/* ✅ Page Title */}
      <h2
        style={{
          fontFamily: "Amazon Ember, Arial, sans-serif",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "25px",
          color: "#232f3e",
        }}
      >
        🛍 Our Products
      </h2>

      {/* ✅ Product Grid */}
      <div className="row g-3">
        {products.map((data, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
          >
            <div
              className="card h-100 w-100"
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                window.innerWidth > 768 &&
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                window.innerWidth > 768 &&
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {/* ✅ Product Image */}
              <div
                className="d-flex align-items-center justify-content-center bg-white"
                style={{ height: "220px" }}
              >
                <img
                  src={data.image}
                  alt={data.name}
                  className="img-fluid"
                  style={{
                    maxHeight: "200px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
              </div>

              {/* ✅ Card Body */}
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#0f1111",
                    minHeight: "40px",
                    textAlign: "center",
                  }}
                >
                  {data.name}
                </h5>

                <p
                  className="card-text text-muted flex-grow-1"
                  style={{
                    fontSize: "0.9rem",
                    textAlign: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {data.description}
                </p>

                {/* ✅ Price + Badge */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5
                    style={{
                      color: "#B12704",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                    }}
                  >
                    ₹{data.price}
                  </h5>
                  <span
                    style={{
                      backgroundColor: "#f0c14b",
                      color: "#111",
                      padding: "3px 8px",
                      borderRadius: "10px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      border: "1px solid #a88734",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Best Seller
                  </span>
                </div>

                {/* ✅ Add to Cart (Amazon Style) */}
                <button
                  onClick={() => handleAddToCart(data)}
                  style={{
                    background: "#FFD814",
                    border: "1px solid #FCD200",
                    color: "#0F1111",
                    fontWeight: "600",
                    borderRadius: "8px",
                    padding: "10px",
                    width: "100%",
                    fontSize: "0.9rem",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "#F7CA00")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "#FFD814")
                  }
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
