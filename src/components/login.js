import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://backend-626x.onrender.com/api/login", formData);
      const { token, user } = res.data;

      localStorage.setItem("token", token);

      toast.success(`Welcome back, ${user.name}!`, { autoClose: 2000 });

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      const msg = err.response?.data?.message || "Login error";
      toast.error(msg);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 px-3"
      style={{
        backgroundColor: "#f2f2f2", // Amazon-like light background
      }}
    >
      <div
        className="card shadow-sm border p-4 w-100"
        style={{
          maxWidth: "380px",
          borderRadius: "8px",
          background: "white",
        }}
      >
        {/* Brand / Logo */}
        <div className="text-center mb-3">
          <img
            src="./logo.png"
            alt="logo"
            className="img-fluid"
            style={{
              width: "80px",
              maxWidth: "100%",
              marginBottom: "10px",
            }}
          />
          <h3
            style={{
              fontWeight: "bold",
              color: "#2a5298",
              fontSize: "1.5rem",
            }}
          >
            Welcome Back
          </h3>
          <p className="text-muted small">Login to continue shopping</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control px-3 py-2"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #a6a6a6",
                borderRadius: "4px",
                fontSize: "0.9rem",
              }}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control px-3 py-2"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #a6a6a6",
                borderRadius: "4px",
                fontSize: "0.9rem",
              }}
            />
          </div>

          {/* Remember Me */}
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label
                className="form-check-label small"
                htmlFor="rememberMe"
                style={{ fontSize: "0.85rem" }}
              >
                Remember me
              </label>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-100 py-2"
            style={{
              background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
              color: "white",
              fontWeight: "bold",
              borderRadius: "6px",
              fontSize: "0.95rem",
              border: "none",
            }}
          >
            Login
          </button>

          {error && (
            <p className="text-danger mt-3 text-center small">{error}</p>
          )}
        </form>

        {/* Signup link */}
        <div className="text-center mt-3">
          <span className="small text-muted">Don’t have an account? </span>
          <a href="/" style={{ color: "#ff416c", fontWeight: "600" }}>
            Sign Up
          </a>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
