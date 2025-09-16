import React from "react";

function Banner() {
  return (
    <section
      className="d-flex align-items-center py-4"
      style={{
        backgroundColor: "#f3f3f3", // lighter Amazon-like background
        minHeight: "50vh",          // reduced height
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                color: "#0f1111",
                lineHeight: "1.3",
              }}
            >
              Welcome to <span style={{ color: "#e47911" }}>Our Store</span>
            </h1>

            <p
              className="lead"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                color: "#555",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Shop top-rated products, great prices, and fast delivery.
            </p>

            {/* Call-to-Action Button */}
            <a
              href="/products"
              className="btn btn-lg mt-3"
              style={{
                backgroundColor: "#ffa41c",
                color: "#111",
                fontWeight: "600",
                border: "none",
                borderRadius: "6px",
                padding: "10px 26px",
                fontSize: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#ff9900")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ffa41c")}
            >
              Shop Now
            </a>
          </div>

          {/* Right Side - Hero Image */}
          <div className="col-12 col-lg-6 text-center">
            <img
              src="./banner.jpg"
              alt="Hero Banner"
              className="img-fluid"
              style={{
                maxHeight: "350px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
