import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="top-contact-section">
        <div className="contact-detail">
          <h2>Get In Touch</h2>
          <p>
            If you have any queries feel free to contact us, we will be more tha
            happy to.
          </p>
          <form>
            <div className="input-group">
              <input type="text" required placeholder="Your Name" />
            </div>
            <div className="input-group">
              <input type="text" required placeholder="Your Email" />
            </div>
            <div className="input-group">
              <input type="text" required placeholder="Subject" />
            </div>
            <div className="input-group">
              <textarea rows="8" placeholder="Message" required></textarea>
            </div>
            <button className="all-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
