// import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boxicons/css/boxicons.min.css';

function Hero() {
  return (
    <section id="hero" className="d-flex justify-content-center align-items-center">
    <div
      id="heroCarousel"
      data-bs-interval="5000"
      className="container carousel carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Elite Work Force Intl</span></h2>
          <p className="animate__animated animate__fadeInUp">
          Welcome to <b>Elite Workforce Services Intl</b> your trusted partner in comprehensive manpower solutions across Saudi Arabia,
           Oman, Qatar, and Kuwait. With a commitment to excellence, we specialize in providing seamless services encompassing manpower consultancy,
            attestation, ticketing, emigration, visa stamping for Kuwait and Saudi Arabia etc.
          </p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
          <p className="animate__animated animate__fadeInUp">
            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
            Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.
            Minus et tempore modi architecto.
          </p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
          <p className="animate__animated animate__fadeInUp">
            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
            Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.
            Minus et tempore modi architecto.
          </p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
      </a>
    </div>
  </section>
  )
}

export default Hero