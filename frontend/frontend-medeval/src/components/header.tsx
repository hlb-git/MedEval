import "./header.css";
import medvLogo from "../assets/medeval-logo.png";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src={medvLogo} alt="logo" className="logo" />
        <div className="h-menu">
          <a href="">Health Clinic</a>
          <a href="">About Us</a>
          <a href="">Resources</a>
        </div>
        <div className="cta">
          <a href="" className="log-in">
            Log In <span className="material-symbols-outlined">login</span>
          </a>
          <button className="sign-up">
            Sign Up{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
