import React from "react";

function Banner() {
  return (
    <>
      <div
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // soft ecommerce gradient
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
              <h1
                className="fw-bold"
                style={{
                  fontSize: "3rem",
                  color: "#2a2a2a",
                  lineHeight: "1.2",
                }}
              >
                Welcome to <span style={{ color: "#ff416c" }}>Our Store</span>
              </h1>
              <p
                className="lead mt-3"
                style={{
                  color: "#444",
                  fontSize: "1.2rem",
                }}
              >
                Discover the best products carefully curated just for you.
              </p>
              <a
                href="/products"
                className="btn btn-lg rounded-pill mt-4 px-4"
                style={{
                  background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                  color: "white",
                  fontWeight: "600",
                  border: "none",
                  letterSpacing: "0.5px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.85")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                Shop Now
              </a>
            </div>

            {/* Right Side - Image */}
            <div className="col-lg-6 text-center">
              <img
                src="./banner.jpg"
                alt="Hero"
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
