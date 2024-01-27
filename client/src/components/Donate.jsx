import React from "react";
import '../styles/Donate.css'
const Donate = () => {
  return (
    <div className="donate-section">
      <div className="donate-section-box">
        <h2>Every donation, big or small, fuels hope and transforms lives</h2>
      </div>

      <div className="donate-section-form">
        <form
          className="donate-details-form"
          // method="POST"
          // onSubmit={handleSubmit}
        >
        

          <div>
            <span>Transaction Id</span>
            <input type="text" name="selectOrderId" required />
          </div>
          <div>
            <span>Amount</span>
            <input type="number" name="selectAmount" required />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className="donate-section-qr">
        <h4>[ Instructions for pay ]</h4>
        <div>
          <img
            src="https://cdn.mypanel.link/rpyfx7/hew1bm1zditlltw4.jpeg"
            alt=""
          />
        </div>
        <div className="donate-section-qr-steps">
          <div>
            <span>Step 1 : Scan and Pay ( Paytm & PhonePe )</span>
          </div>
          <div>
            <span>Step 2 : Enter the amount and order id/ transaction id</span>
          </div>
          <div>
            <span>
              Step 3 : Click on check. The amount will be added instantly or
              2-5mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
