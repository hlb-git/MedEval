import "./body.css";
import review from "../../assets/telemed.jpg";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";

function Body() {
  return (
    <section className="body-wrapper background">
      <div className="body-container">
        <div className="start-health">
          <div className="left">
            <h2>Start Your Health Journey Now!</h2>
            <p>Consult a medical practiotional at the comfort of your home</p>
            <div className="icons">
              <img src={google} alt="" className="google" />
              <img src={apple} alt="" className="apple" />
            </div>
          </div>
          <div className="right">
            <img src={review} alt="" className="telemed" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
