import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <>
      {/* Back to top */}
      <div
        className="text-center py-3"
        style={{ backgroundColor: "#37475A", cursor: "pointer", color: "white" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>

      {/* Main Footer */}
      <footer
        className="text-white pt-5 pb-4"
        style={{ backgroundColor: "#232F3E" }}
      >
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Company Info */}
            <div className="col-12 col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Company</h6>
              <p className="small">
                <span className="text-warning fw-semibold">
                  K&K Shopping Cart System:
                </span>{" "}
                Your Easy Way to Shop Online. We make shopping simple and smooth
                for both businesses and customers.
              </p>
            </div>

            {/* Products */}
            <div className="col-12 col-md-2 mb-4">
              <h6 className="fw-bold mb-3">Products</h6>
              <a
                href="/products"
                className="d-inline-block overflow-hidden rounded-3 shadow-sm footer-img-wrapper"
              >
                <img
                  src="./footer.png"
                  alt="Product"
                  className="img-fluid footer-img"
                  height="10"
                  width="200"
                />
              </a>
            </div>

            {/* Useful Links */}
            <div className="col-12 col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Useful Links</h6>
              <ul className="list-unstyled small">
                <li>
                  <a href="/profile" className="footer-link">
                    Your Account
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-link">
                    Help
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-link">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-12 col-md-4 mb-4">
              <h6 className="fw-bold mb-3">Contact</h6>
              <p>
                <i className="fas fa-home me-2 text-warning"></i>12, Rajpalace
                Complex, Surat (Guj) 395010
              </p>
              <p>
                <i className="fas fa-envelope me-2 text-warning"></i>
                Khushalsingh45@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-2 text-warning"></i>+91 8733923748
              </p>

              {/* Social icons */}
              <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
                <a href="#" className="social-icon bg-primary">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon bg-info">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon bg-danger">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="social-icon bg-warning text-dark">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div
        className="text-center py-3"
        style={{ backgroundColor: "#131A22", color: "#ddd" }}
      >
        <small>
          © {new Date().getFullYear()}{" "}
          <span className="text-warning">Khushal Singh</span> — All Rights
          Reserved
        </small>
      </div>

      {/* Extra Styling */}
      <style jsx="true">{`
        .footer-link {
          color: #ddd;
          text-decoration: none;
          display: block;
          margin: 0.25rem 0;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #fff;
        }
        .footer-img-wrapper {
          transition: transform 0.3s ease;
        }
        .footer-img-wrapper:hover {
          transform: scale(1.05);
        }
        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-4px);
          color: white;
        }
      `}</style>
    </>
  );
}

export default Footer;
