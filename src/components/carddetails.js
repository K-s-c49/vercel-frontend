import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Carddetail({ cart, setCart }) {
  const [address, setAddress] = useState("");
  const [savedItems, setSavedItems] = useState([]); // ✅ For save for later
  const navigate = useNavigate();

  // ✅ Increase quantity
  const increment = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Decrease quantity
  const decrement = (productId) => {
    const updated = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updated);
  };

  // ✅ Remove from cart
  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    toast.info("🗑 Item removed from cart");
  };

  // ✅ Save for later
  const saveForLater = (product) => {
    setSavedItems([...savedItems, product]);
    setCart(cart.filter((item) => item.id !== product.id));
    toast.success("💾 Item saved for later");
  };

  // ✅ Move back to cart
  const moveToCart = (product) => {
    setCart([...cart, product]);
    setSavedItems(savedItems.filter((item) => item.id !== product.id));
    toast.success("🛒 Moved to cart");
  };

  // ✅ Calculate total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4 mb-5">
      <h2
        style={{
          fontFamily: "Amazon Ember, Arial, sans-serif",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "25px",
          color: "#232f3e",
        }}
      >
        🛒 Your Shopping Cart
      </h2>

      {cart.length === 0 && savedItems.length === 0 ? (
        <div className="text-center">
          <p className="text-muted">Your cart is empty.</p>
          <button
            className="btn btn-secondary px-4"
            onClick={() => navigate("/products")}
          >
            ← Back to Products
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {/* ✅ Cart Items (Left Side) */}
          <div className="col-12 col-lg-8">
            {cart.length > 0 && (
              <div className="list-group shadow-sm mb-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="list-group-item d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-between"
                    style={{ borderBottom: "1px solid #ddd" }}
                  >
                    {/* Image + Details */}
                    <div className="d-flex flex-column flex-md-row align-items-center w-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                          marginRight: "15px",
                        }}
                        className="mb-3 mb-md-0"
                      />
                      <div className="flex-grow-1 text-center text-md-start">
                        <h6 className="fw-bold mb-1">{item.name}</h6>
                        <p className="mb-1 text-muted">₹{item.price}</p>
                        <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-2">
                          <button
                            onClick={() => decrement(item.id)}
                            className="btn btn-sm btn-outline-danger me-2"
                          >
                            -
                          </button>
                          <span className="fw-bold">{item.quantity}</span>
                          <button
                            onClick={() => increment(item.id)}
                            className="btn btn-sm btn-outline-success ms-2"
                          >
                            +
                          </button>
                        </div>
                        {/* ✅ Amazon-style links */}
                        <div className="d-flex justify-content-center justify-content-md-start">
                          <button
                            className="btn btn-link p-0 me-3 text-primary"
                            onClick={() => saveForLater(item)}
                          >
                            Save for later
                          </button>
                          <button
                            className="btn btn-link p-0 text-danger"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="mt-3 mt-md-0 text-center text-md-end">
                      <h6 className="text-success fw-bold">
                        ₹{item.price * item.quantity}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Saved for Later Section */}
            {savedItems.length > 0 && (
              <div className="list-group shadow-sm">
                <h5 className="p-3 mb-0 bg-light border-bottom">
                  Saved for later
                </h5>
                {savedItems.map((item) => (
                  <div
                    key={item.id}
                    className="list-group-item d-flex flex-column flex-md-row align-items-center justify-content-between"
                  >
                    <div className="d-flex flex-column flex-md-row align-items-center w-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                          marginRight: "15px",
                        }}
                        className="mb-3 mb-md-0"
                      />
                      <div className="flex-grow-1 text-center text-md-start">
                        <h6 className="fw-bold mb-1">{item.name}</h6>
                        <p className="mb-1 text-muted">₹{item.price}</p>
                        <button
                          className="btn btn-link p-0 text-success"
                          onClick={() => moveToCart(item)}
                        >
                          Move to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              className="btn btn-secondary mt-3 w-100 w-md-auto"
              onClick={() => navigate("/products")}
            >
              ← Back to Products
            </button>
          </div>

          {/* ✅ Order Summary & Address (Right Side) */}
          <div className="col-12 col-lg-4">
            <div
              className="card shadow-sm p-3 h-100"
              style={{ borderRadius: "10px", background: "#fff" }}
            >
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <p className="d-flex justify-content-between">
                <span>Items:</span>
                <span>₹{totalAmount}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Delivery:</span>
                <span className="text-success">FREE</span>
              </p>
              <hr />
              <h5 className="d-flex justify-content-between text-danger">
                <span>Total:</span>
                <span>₹{totalAmount}</span>
              </h5>

              {/* Address */}
              <div className="mt-4">
                <label htmlFor="address" className="form-label fw-bold">
                  📍 Shipping Address <span className="text-danger">*</span>
                </label>
                <textarea
                  id="address"
                  className="form-control mb-3"
                  placeholder="Enter your full shipping address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows="3"
                  required
                />
              </div>

              {/* ✅ Generate Bill (Amazon-style button) */}
              <button
                type="button"
                className="btn w-100"
                style={{
                  background: "#FFD814",
                  border: "1px solid #FCD200",
                  color: "#0F1111",
                  fontWeight: "600",
                  borderRadius: "8px",
                  padding: "10px",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#F7CA00")}
                onMouseLeave={(e) => (e.target.style.background = "#FFD814")}
                onClick={() => {
                  if (!address.trim()) {
                    toast.error(
                      "⚠️ Please enter your shipping address before generating the bill!"
                    );
                    return;
                  }
                  navigate("/bill", { state: { cart, address, totalAmount } });
                }}
              >
                🧾 Generate Bill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carddetail;
