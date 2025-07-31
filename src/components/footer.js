import React from 'react'

function Footer() {
  return (<>
    <div  >
        <footer class="bg-dark text-white pt-5 pb-4">
      <div className="mt-auto bg-dark text-center py-3 ">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Company</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: '60px', backgroundColor: '#ffffff', height: '2px' }}
            />
            <p>
              <b class="text-info">K&K Shopping Cart System:</b> 
              Your Easy Way to Shop Online Our K&K Shopping Cart System makes online shopping simple and smooth.<br/> It helps businesses sell their products easily and helps customers quickly find and buy what they need.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: '60px', backgroundColor: '#ffffff', height: '2px' }}
            />
            <p ><a href="/products" className="text-white text-decoration-none"> <img
      src="./footer.png"
      alt="Product 1"
      style={{ width: '130px', height: '150px', objectFit: 'cover' }}
    /></a></p>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful Links</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: '60px', backgroundColor: '#ffffff', height: '2px' }}
            />
            <p><a href="#" className="text-white text-decoration-none">Your Account</a></p>
            <p><a href="#" className="text-white text-decoration-none">Help</a></p>
            <p><a href="#" className="text-white text-decoration-none">Privacy</a></p>
            <p><a href="#" className="text-white text-decoration-none">Terms</a></p>
          </div>

          {/* Column 4 */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: '60px', backgroundColor: '#ffffff', height: '2px' }}
            />
            <p><i className="fas fa-home me-3"></i> 12 , rajpalace complex , near puna patiya , Surat (Guj) 395010</p>
            <p><i className="fas fa-envelope me-3"></i>www.Khushalsingh45@gmail.com</p>
            <p><i className="fas fa-phone me-3"></i> +91 8733923748</p>
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-top border-light mt-4">
      <b class="text-success">© 2025 Khushal Singh — All Rights Reserved</b> 
      </div>
      </footer>
    </div>
  </>)
}

export default Footer
