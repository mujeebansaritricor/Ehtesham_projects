// import React from 'react'

function Navbar() {
  return (
    <div id="topbar" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto:contact@example.com">ehtesham24x7@gmail.com</a>
          <i className="bi bi-phone-fill phone-icon"></i> +91 70394 10375 
        </div>
        <div className="cta d-none d-md-block">
          <a href="#about" className="scrollto">Get Started</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
