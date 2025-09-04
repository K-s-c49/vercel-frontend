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
        <button className="btn btn-primary mt-3" onClick={() => navigate('/cart')}>
          ← Go Back to Cart
        </button>
      </div>
    );
  }

  // Handle Pay Now button
  const handlePayNow = () => {
    toast.info("💳 Payment Gateway feature will be added soon!");
  };

  return (
    <div className="container mt-5 mb-2">
      <h2 className="mb-4">🧾 Order Bill</h2>

      <table className="table table-striped">
        <thead>
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
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-4">Total: ₹{totalAmount}</h4>

      <div className="mt-4">
        <h5 className="fw-bold">Shipping Address</h5>
        <p className="border p-3 bg-light">{address}</p>
      </div>

      <button className="btn btn-secondary mt-3" onClick={() => navigate('/cart')}>
        ← Back to cart
      </button>
      
      {/* Pay Now with toast */}
      <button className="btn btn-danger mt-3 ms-3" onClick={handlePayNow}>
        💳 Pay Now
      </button>
    </div>
  );
};

export default Bill;
