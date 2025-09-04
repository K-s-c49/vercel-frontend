import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <>
      <footer className="footer-modern text-white pt-5 ">
        <div className="container text-center text-md-start">
          <div className="row gy-4">
            {/* Company Info */}
            <div className="col-md-3">
              <h6 className="footer-title">Company</h6>
              <p className="small">
                <span className="text-warning fw-semibold">
                  K&K Shopping Cart System:
                </span>{" "}
                Your Easy Way to Shop Online. We make shopping simple and smooth
                for both businesses and customers.
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 text-center text-md-start">
              <h6 className="footer-title">Products</h6>
              <a
                href="/products"
                className="d-inline-block overflow-hidden rounded-3 shadow-sm footer-img-wrapper"
              >
                <img
                  src="./footer.png"
                  alt="Product"
                  className="img-fluid footer-img"
                  height="10px"
                  width="200px"
                />
              </a>
            </div>

            {/* Useful Links */}
            <div className="col-md-3">
              <h6 className="footer-title">Useful Links</h6>
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
            <div className="col-md-4">
              <h6 className="footer-title">Contact</h6>
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
              <div className="d-flex gap-3 mt-3">
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

        {/* Footer bottom */}
        <div className="text-center py-3 border-top border-light mt-5 small">
          <strong>
            © {new Date().getFullYear()}{" "}
            <span className="text-warning">Khushal Singh</span> — All Rights
            Reserved
          </strong>
        </div>
      </footer>

      {/* Extra Styling */}
      <style jsx="true">{`
        .footer-modern {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          position: relative;
          overflow: hidden;
        }
        .footer-modern::before {
          content: "";
          position: absolute;
          top: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }
        .footer-modern::after {
          content: "";
          position: absolute;
          bottom: -60px;
          right: -60px;
          width: 250px;
          height: 250px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }
        .footer-title {
          text-transform: uppercase;
          font-weight: bold;
          margin-bottom: 1rem;
          position: relative;
        }
        .footer-title::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 50px;
          height: 3px;
          background: #ffc107;
          border-radius: 2px;
        }
        .footer-link {
          color: #f8f9fa;
          text-decoration: none;
          display: inline-block;
          margin: 0.25rem 0;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #ffc107;
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
