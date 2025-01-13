
import "./footer.css";

function Footer() {
  return (
    <footer className="f-wrapper">
      <div className="f-container">
        <div className="footer-top">
          <div className="footer-links">
            <h3>
              Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#"> Facebook</a>
              </li>
              <li>
                <a href="#" >X</a>
              </li>
              <li>
                <a href="#" >Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MedEval. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
