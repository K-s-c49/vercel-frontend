import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // 👈 import toast

const Bill = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, address, totalAmount } = location.state || {};

  if (!cart || !address) {
    return (
      <div className="container mt-5">
        <h3>No bill data found.</h3>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/cart")}
        >
          ← Go Back to Cart
        </button>
      </div>
    );
  }

  // ✅ Handle Pay Now button
  const handlePayNow = () => {
    toast.info("💳 Payment Gateway feature will be added soon!");
  };

  return (
    <div className="container mt-5 mb-4">
      <h2
        className="mb-4"
        style={{
          fontFamily: "Amazon Ember, Arial, sans-serif",
          fontWeight: "700",
          color: "#232f3e",
        }}
      >
        🧾 Order Bill
      </h2>

      <div className="row">
        {/* ✅ Left Side: Products Table */}
        <div className="col-lg-8 mb-4">
          <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price (₹)</th>
                  <th>Quantity</th>
                  <th>Subtotal (₹)</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, i) => (
                  <tr key={i}>
                    <td className="fw-semibold">{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td className="text-success fw-bold">
                      {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ Right Side: Summary Card */}
        <div className="col-lg-4">
          <div
            className="card p-3 shadow-sm"
            style={{ borderRadius: "10px", background: "#fff" }}
          >
            <h5 className="fw-bold">Order Summary</h5>
            <hr />
            <p className="d-flex justify-content-between mb-2">
              <span>Items Total:</span>
              <span>₹{totalAmount}</span>
            </p>
            <p className="d-flex justify-content-between mb-2">
              <span>Delivery:</span>
              <span className="text-success">FREE</span>
            </p>
            <hr />
            <h5 className="d-flex justify-content-between text-danger">
              <span>Total:</span>
              <span>₹{totalAmount}</span>
            </h5>

            {/* ✅ Shipping Address */}
            <div className="mt-4">
              <h6 className="fw-bold">Shipping Address</h6>
              <p className="border p-2 bg-light small">{address}</p>
            </div>

            {/* ✅ Buttons */}
            <button
              className="btn btn-secondary mt-3 w-100"
              onClick={() => navigate("/cart")}
            >
              ← Back to cart
            </button>

            <button
              className="btn mt-3 w-100"
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
              onClick={handlePayNow}
            >
              💳 Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
