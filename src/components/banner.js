import React from 'react'

function Banner() {
  return (<>
    <div class="py-5 bg-light">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <h1 class="display-4 fw-bold">Welcome to Our Platform</h1>
        <p class="lead text-muted">Here are you choose you best product.</p>
        <a href="/products" class="btn btn-primary btn-lg mt-3">Get Started</a>
      </div>
      <div class="col-lg-6 text-center">
        <img src="./banner.jpg" alt="Hero image" class="img-fluid"/>
      </div>
    </div>
  </div>
    </div>
  </>)
}

export default Banner
