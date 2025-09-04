
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
      const res = await axios.post("http://localhost:5000/api/login", formData);
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
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)", // Blue gradient
      }}
    >
      <div
        className="card shadow-lg border-0 p-4 w-100"
        style={{
          maxWidth: "420px",
          borderRadius: "15px",
          background: "white",
        }}
      >
        {/* Brand / Logo */}
        <div className="text-center mb-4">
          <img
            src="./logo.png"
            alt="logo"
            style={{ width: "70px", marginBottom: "10px" }}
          />
          <h3 style={{ fontWeight: "bold", color: "#2a5298" }}>Welcome Back</h3>
          <p className="text-muted">Login to continue shopping</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control rounded-pill px-3 py-2"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ border: "1px solid #ccc" }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control rounded-pill px-3 py-2"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ border: "1px solid #ccc" }}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label small" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-100 rounded-pill py-2"
            style={{
              background: "linear-gradient(90deg, #ff416c, #ff4b2b)", // Red-pink gradient
              color: "white",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              border: "none",
            }}
          >
            Login
          </button>

          {error && <p className="text-danger mt-3 text-center">{error}</p>}
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
