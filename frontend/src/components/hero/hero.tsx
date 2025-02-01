import "./hero.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Healthcare With Seamless Telemedicine and Secure
            Digital Medical Records
          </h1>
          <p>
            MedEval is a digital health platform that provides telemedicine
            services and secure digital medical records for patients and
            healthcare providers
          </p>
          <div className="cta-button">
            <button className="get-started">
              Get Started
            </button>
            <button className="learn-more">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
