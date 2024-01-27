import React from "react";
import "../styles/Footer.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
function Footer() {
  return (
    <div className="top-footer">
    <div className="footer">
      <div className="footer-container">
        <div className="lefty">
          <div className="location">
            <i style={{ fontSize: "20px" }}>
              {" "}
              <MdLocationOn />
            </i>
            <div>
              <p>Sikar, Rajasthan</p>
              <p>india - 332001</p>
            </div>
          </div>
          <div className="location">
            <i>
              {" "}
              <BsTelephoneFill />
            </i>
            <div>
              <h4>+91-9571604650</h4>
            </div>
          </div>
          <div className="location">
            <i style={{ fontSize: "20px" }}>
              {" "}
              <MdEmail />
            </i>
            <div>
          <a href="mailto:furkarangrej200@gmail.com">furkarangrej200@gmail.com</a>    
            </div>
          </div>
        </div>

        <div className="righty">
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quidem doloremque aperiam dicta magni quod, error dolore obcaecati
            ad impedit.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
