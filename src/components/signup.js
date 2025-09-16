// components/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://backend-626x.onrender.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Signup failed");
      } else {
        toast.success("Signup successful! Please login.", {
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 px-3"
      style={{
        background: "linear-gradient(135deg, #f8f8f8ff, #fad0c4)", // soft pink gradient
      }}
    >
      <div
        className="card shadow-sm border-0 p-4 w-100"
        style={{
          maxWidth: "400px",
          borderRadius: "10px",
          background: "white",
        }}
      >
        {/* Logo + Title */}
        <div className="text-center mb-3">
          <img
            src="./logo.png"
            alt="logo"
            className="img-fluid"
            style={{ width: "70px", maxWidth: "100%", marginBottom: "10px" }}
          />
          <h3
            style={{
              fontWeight: "bold",
              color: "#ff416c",
              fontSize: "1.5rem",
            }}
          >
            Create Account
          </h3>
          <p className="text-muted small">Sign up to start shopping with us</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="form-control px-3 py-2"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "0.9rem",
              }}
            />
          </div>
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
              placeholder="Enter your email"
              className="form-control px-3 py-2"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
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
              placeholder="Enter your password"
              className="form-control px-3 py-2"
              value={form.password}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "0.9rem",
              }}
            />
          </div>

          {/* Register Button */}
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
            Register
          </button>

          {/* Link to Login */}
          <div className="text-center mt-3">
            <span className="small text-muted">Already have an account? </span>
            <a href="/login" style={{ color: "#a44e6bff", fontWeight: "600" }}>
              Login
            </a>
          </div>
        </form>

        <ToastContainer />
        {error && <p className="text-danger mt-3 text-center small">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
