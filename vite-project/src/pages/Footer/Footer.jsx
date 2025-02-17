// src/components/Footer.jsx

// import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">

      <div className="footer-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            </div>
            <div className="col-lg-6">
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +91 9594 6670 10<br />
                <strong>Email:</strong> ehtesham24x7@gmail.com<br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About eliteworkforceintl</h3>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>eliteworkforceintl</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://www.linkedin.com/in/mujeebansari786">Mujeeb Ansari</a>
        </div>
      </div>
      {/* linkedin.com/in/mujeebansari786/ */}
    </footer>
  );
};

export default Footer;
