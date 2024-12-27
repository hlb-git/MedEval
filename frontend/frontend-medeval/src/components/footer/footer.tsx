import "./footer.css";

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="f-container">
        <div className="footer-top">
          <div className="footer-links">
            <h3>
              Quick Links{" "}
              <span className="material-symbols-outlined green">link</span>
            </h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>
              Support{" "}
              <span className="material-symbols-outlined yellow">help</span>
            </h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>
              Follow Us{" "}
              <span className="material-symbols-outlined red">person_add</span>
            </h3>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true"></i> X
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MedEval. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
