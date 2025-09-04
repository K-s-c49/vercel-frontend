import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function About() {
  return (
    <>
      <section className="about-section py-5" id="about-us">
        {/* Section header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gradient">About Us</h2>
          <p className="text-muted mx-auto lead" style={{ maxWidth: "650px" }}>
            We are students, and this site was created as part of our academic
            project — built with passion, code, and creativity.
          </p>
          <div className="divider mx-auto my-3"></div>
        </div>

        {/* Responsive content layout */}
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Image block */}
            <div className="col-lg-6 text-center">
              <img
                src="./logo.png"
                alt="Our Team"
                className="img-fluid rounded-4 shadow-lg about-img"
              />
            </div>

            {/* Text block */}
            <div className="col-lg-6">
              <h3 className="fw-semibold mb-3 text-primary">Who We Are</h3>
              <p className="text-muted">
                I’m a student of Udhna College, and this website is part of my
                project work. It reflects what I’ve learned and built using
                modern web technologies and real-world problem-solving.
              </p>
              <ul className="list-unstyled fs-6">
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                  Development with MERN technologies
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-info me-2 fs-5"></i>
                  Divided into two parts: <strong>Admin</strong> and{" "}
                  <strong>Site</strong>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-warning me-2 fs-5"></i>
                  Designed using <strong>Bootstrap</strong> (learned in 3rd sem)
                </li>
              </ul>
              <a href="#contact" className="btn btn-gradient mt-3 px-4">
                <i className="bi bi-envelope-fill me-2"></i>Contact Us
              </a>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-5">
            <h4 className="fw-bold text-center text-primary mb-4">
              Find Us Here
            </h4>
            <div className="map-container mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8147563204275!2d72.83883247468401!3d21.159769080522494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2fe47b1ee1%3A0x504c1d61b4e6e422!2sUCCC%20%26%20SPBCBA%20%26%20SDHG%20College%20of%20BCA%20%26%20IT!5e0!3m2!1sen!2sin!4v1754063187342!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Extra styling */}
      <style jsx="true">{`
        .about-section {
          background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
          position: relative;
          overflow: hidden;
        }
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd, #6610f2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .divider {
          width: 80px;
          height: 4px;
          border-radius: 4px;
          background: linear-gradient(90deg, #0d6efd, #6610f2);
        }
        .about-img {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .about-img:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }
        .btn-gradient {
          background: linear-gradient(90deg, #0d6efd, #6610f2);
          color: #fff;
          border: none;
          border-radius: 30px;
          transition: transform 0.3s ease;
        }
        .btn-gradient:hover {
          transform: translateY(-3px);
          color: #fff;
        }
        .map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
          max-width: 900px;
        }
      `}</style>
    </>
  );
}

export default About;
