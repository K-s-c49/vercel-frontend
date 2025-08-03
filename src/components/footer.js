import React from 'react'

function Footer() {
  return (<>
   <div>
  <footer className="bg-dark text-white pt-5 pb-4">
  <div className="container text-center text-md-start">
    <div className="row">

      {/* Column 1: Company Info */}
      <div className="col-md-3 mb-4">
        <h6 className="text-uppercase fw-bold">Company</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ffffff', height: '2px' }} />
        <p>
          <span className="text-info fw-semibold">K&K Shopping Cart System:</span> Your Easy Way to Shop Online.
          Our K&K Shopping Cart System makes online shopping simple and smooth.
          It helps businesses sell their products easily and helps customers quickly find and buy what they need.
        </p>
      </div>

      {/* Column 2: Products */}
      <div className="col-md-2 mb-4">
        <h6 className="text-uppercase fw-bold">Products</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ffffff', height: '2px' }} />
        <a href="/products" className="text-white text-decoration-none d-block">
          <img
            src="./footer.png"
            alt="Product 1"
            className="img-fluid rounded shadow-sm"
            style={{ height: '150px', objectFit: 'cover' }}
          />
        </a>
      </div>

      {/* Column 3: Useful Links */}
      <div className="col-md-3 mb-4">
        <h6 className="text-uppercase fw-bold">Useful Links</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ffffff', height: '2px' }} />
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Your Account</a></li>
          <li><a href="#" className="text-white text-decoration-none">Help</a></li>
          <li><a href="#" className="text-white text-decoration-none">Privacy</a></li>
          <li><a href="#" className="text-white text-decoration-none">Terms</a></li>
        </ul>
      </div>

      {/* Column 4: Contact Info */}
      <div className="col-md-4 mb-4">
        <h6 className="text-uppercase fw-bold">Contact</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ffffff', height: '2px' }} />
        <p><i className="fas fa-home me-2"></i>12, Rajpalace Complex, Surat (Guj) 395010</p>
        <p><i className="fas fa-envelope me-2"></i>Khushalsingh45@gmail.com</p>
        <p><i className="fas fa-phone me-2"></i>+91 8733923748</p>
      </div>
    </div>
  </div>

  {/* Google Maps */}
  <div className="container mt-4">
    <div className="mt-4 d-flex justify-content-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8147563204275!2d72.83883247468401!3d21.159769080522494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2fe47b1ee1%3A0x504c1d61b4e6e422!2sUCCC%20%26%20SPBCBA%20%26%20SDHG%20College%20of%20BCA%20%26%20IT!5e0!3m2!1sen!2sin!4v1754063187342!5m2!1sen!2sin"
       width="100%"
        height="30%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      ></iframe>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="text-center py-3 border-top border-light mt-4">
    <strong className="text-success">© 2025 Khushal Singh — All Rights Reserved</strong>
  </div>
</footer>

</div>

  </>)
}

export default Footer