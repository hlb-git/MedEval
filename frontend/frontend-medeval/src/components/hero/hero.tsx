import "./hero.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-content">
          <h2>
            Revolutionizing healthcare with seamless telemedicine and secure
            digital medical records
          </h2>
          <p>
            MedEval is a digital health platform that provides telemedicine
            services and secure digital medical records for patients and
            healthcare providers
          </p>
          <div className="cta-button">
            <button className="get-started">
              Get Started{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="learn-more">
              Learn More{" "}
              <span className="material-symbols-outlined">dictionary</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
