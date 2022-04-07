import React from "react";
import { Div } from "../StyledComponents/NykaaStyles";
import Nav from './Nav'
import SideBarRight from "./SideBarRight";

const Payment = () => {
  return (
    <Div>
      <Nav active="payment" />

      <div className="row">
        <div className="col-md-4">
          <ul className='tabs'>
            <li className='active'>payment/Register</li>

          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h5>payment or Register</h5>
            <hr />
            <div className="subHeading">
              <div><i className="fa fa-check"></i> Get Reward Points on new registration</div>
              <div><i className="fa fa-check"></i> Redeem your Coupons  Reward Points</div>
            </div>
            <span className="text-muted">Continue with Social login</span>
            <div className="logos">
              <img src="/facebook.png" alt="fb" />
              <img src="/google.png" alt="fb" />
            </div>
            <div className="button">ENTER PHONE NUMBER OR EMAIL </div>
            <div className="subHeadingText">Checkout as guest</div>
            <div className="bottomText">
              I do not want any more benefits from Nykaa
            </div>
            <div className="button2">CONTINUE AS GUEST &gt;</div>
          </div>
        </div>
        <SideBarRight />


      </div>
    </Div>
  )
}

export default Payment