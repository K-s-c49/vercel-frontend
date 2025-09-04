import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Logout Handler
  const handleLogout = async () => {
    try {
      await axios.post("https://backend-626x.onrender.com/api/logout");
      toast.success("Logout successful!", { autoClose: 2000 });

      localStorage.removeItem("user"); // remove user from storage

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{
          background: "linear-gradient(90deg, #1e3c72, #2a5298)", // Blue gradient
        }}
      >
        <div className="container-fluid">
          {/* ✅ Logo + Brand */}
          <a
            className="navbar-brand d-flex align-items-center text-light"
            href="/home"
          >
            <img
              src="./logo.png"
              alt="logo"
              style={{
                height: "40px",
                width: "auto",
                marginRight: "10px",
                borderRadius: "5px",
              }}
            />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                letterSpacing: "1px",
              }}
            >
              Shree-sai
            </span>
          </a>

          {/* ✅ Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ Collapsible Menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto text-center">
              {["Home", "Products", "About", "Profile"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link px-3 text-light fw-semibold"
                    href={`/${item.toLowerCase()}`}
                    style={{ transition: "0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* ✅ Logout Button */}
            <div className="d-flex justify-content-center mt-3 mt-lg-0 ms-lg-3">
              <button
                type="button"
                onClick={handleLogout}
                className="btn"
                style={{
                  background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ToastContainer />
    </>
  );
}

export default Navbar;
