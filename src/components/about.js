import React from 'react'

function About() {
  return (<>
    <div>
          <section className="container py-5" id="about-us">
      {/* Section header */}
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-primary">About Us</h2>
       <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
  We are students, and this site was created as part of our academic project.
</p>
      </div>

      {/* Responsive content layout */}
      <div className="row align-items-center gy-4">
        {/* Image block */}
        <div className="col-lg-6">
          <img
            src="./logo.png"
            alt="Our Team"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Text block */}
        <div className="col-lg-6">
          <h3 className="fw-semibold mb-3">Who We Are</h3>
         <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            I'm a student of Udhna College, and this website is a part of my project work. It's designed to reflect what I've learned and built using modern web technologies.
        </p>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>development with help of MERN technologies</li>
            <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>divided into two part admin and site</li>
            <li><i className="bi bi-check-circle text-success me-2"></i> design-by-bootstap which are learn in 3rd sem</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}

export default About
