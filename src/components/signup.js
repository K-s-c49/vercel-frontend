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
      const res = await fetch("http://localhost:5000/api/signup", {
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
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // soft pink gradient
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
          <h3 style={{ fontWeight: "bold", color: "#ff416c" }}>Create Account</h3>
          <p className="text-muted">Sign up to start shopping with us</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control rounded-pill px-3 py-2"
              value={form.name}
              onChange={handleChange}
              required
              style={{ border: "1px solid #ccc" }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control rounded-pill px-3 py-2"
              value={form.email}
              onChange={handleChange}
              required
              style={{ border: "1px solid #ccc" }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control rounded-pill px-3 py-2"
              value={form.password}
              onChange={handleChange}
              required
              style={{ border: "1px solid #ccc" }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100 rounded-pill py-2"
            style={{
              background: "linear-gradient(90deg, #ff416c, #ff4b2b)", // gradient button
              color: "white",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              border: "none",
            }}
          >
            Register
          </button>

          {/* Link to Login */}
          <div className="text-center mt-3">
            <span className="small text-muted">Already have an account? </span>
            <a href="/login" style={{ color: "#ff416c", fontWeight: "600" }}>
              Login
            </a>
          </div>
        </form>

        <ToastContainer />
        {error && <p className="text-danger mt-3 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
