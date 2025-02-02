import "./header.css";
import medvLogo from "../../assets/medeval-logo.png";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src={medvLogo} alt="logo" className="logo" />
        <div className="h-menu">
          <Link to="/#">Health Clinic</Link>
          <Link to="/#">About Us</Link>
          <Link to="/#">Resources</Link>
        </div>
        <div className="cta">
          <Link to="/auth" className="log-in">
            Log In 
          </Link>
          <Link to="/auth">
            <button className="sign-up">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
