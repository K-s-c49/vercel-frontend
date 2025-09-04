import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // 👈 import toast

function Carddetail({ cart, setCart }) {
  const [address, setAddress] = useState("");
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

  // ✅ Calculate total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🎨 Inline styles
  const styles = {
    title: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "700",
      background: "linear-gradient(45deg, #ff512f, #dd2476)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
      marginBottom: "25px",
    },
    table: {
      background: "white",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    img: {
      width: "80px",
      height: "80px",
      borderRadius: "8px",
      objectFit: "cover",
    },
    badge: {
      background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
      color: "white",
      borderRadius: "6px",
      padding: "6px 12px",
      fontWeight: "600",
      fontSize: "0.9rem",
    },
    btnBill: {
      background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
      border: "none",
      color: "white",
      fontWeight: "600",
      padding: "10px 20px",
      borderRadius: "8px",
    },
    form: {
      maxWidth: "600px",
      background: "white",
      borderRadius: "12px",
      padding: "25px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 style={styles.title}>🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
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
        <>
          {/* Cart Table */}
          <div className="table-responsive">
            <table
              className="table table-bordered mt-3 text-center align-middle"
              style={styles.table}
            >
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={styles.img}
                      />
                    </td>
                    <td>
                      <span style={styles.badge}>{item.name}</span>
                    </td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price}</td>
                    <td className="fw-bold text-success">
                      ₹{item.price * item.quantity}
                    </td>
                    <td>
                      <button
                        onClick={() => increment(item.id)}
                        className="btn btn-sm btn-success me-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decrement(item.id)}
                        className="btn btn-sm btn-danger"
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Amount */}
          <h4 className="mt-3 text-end text-primary">
            Total: <span className="fw-bold">₹{totalAmount}</span>
          </h4>
                 <button className="btn btn-secondary mt-3" onClick={() => navigate('/products')}>
        ← Back to Products
      </button>
          {/* Shipping Address */}
          <form
            className="mx-auto mt-5"
            style={styles.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-3">
              <label htmlFor="address" className="form-label fw-bold">
                📍 Shipping Address <span className="text-danger">*</span>
              </label>
              <textarea
                id="address"
                className="form-control"
                placeholder="Enter your full shipping address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="4"
                required
              />
            </div>
            

            <div className="text-center">
              <button
                type="button"
                className="btn"
                style={styles.btnBill}
                onClick={() => {
                  if (!address.trim()) {
                    toast.error("⚠️ Please enter your shipping address before generating the bill!");
                    return;
                  }
                  navigate("/bill", { state: { cart, address, totalAmount } });
                }}
              >
                🧾 Generate Bill
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Carddetail;
