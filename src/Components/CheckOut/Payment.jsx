import React, { useRef } from "react";
import { Div } from "../StyledComponents/NykaaStyles";
import Nav from './Nav'
import SideBarRight from "./SideBarRight";

const Payment = () => {
  const ref = useRef();
  function tabHandler(e) {
    const lis = e.currentTarget.parentNode.childNodes;
    lis.forEach(e => e.classList.remove("active"))
    const elm = e.currentTarget.className;
    ref.current.childNodes.forEach(e => e.style.display = 'none');
    ref.current.querySelector("#" + elm).style.display = 'block';
    e.currentTarget.classList.add("active");
  }
  return (
    <Div>
      <Nav active="payment" />
      <div class="notification">
        <span class="noti-icon">i</span>
        <span>
          Please use a digital payment method & help us ensure contactless
          delivery for your safety
        </span>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ul className='tabs'>
            <li onClick={tabHandler} className="credit active">Credit/Dbit Card</li>
            <li onClick={tabHandler} className="upi">UPI</li>
            <li onClick={tabHandler} className="google">Google Pay</li>
            <li onClick={tabHandler} className="net">Net Banking</li>
            <li onClick={tabHandler} className="mobile">Mobile Wallets</li>
            <li onClick={tabHandler} className="gift">Gift Card</li>
          </ul>
        </div>
        <div className="col-md-4 payment" ref={ref}>
          <div id="credit" className="card active">
            <div>
              <h6>Credit/Debit Card </h6>
            </div>
          </div>
          <div id="upi" className="card ">
            <div>
              <h6>BHIM UPI</h6>
            </div>
          </div>
          <div id="google" className="card ">
            <div>
              <h6>Google Pay</h6>
            </div>
          </div>
          <div id="net" className="card ">
            <div>
              <h6>Net Banking</h6>
            </div>
          </div>

          <div id="mobile" className="card ">
            <div>
              <h6>Mobile Wallets</h6>
            </div>
          </div>

          <div id="gift" className="card ">
            <div>
              <h6>Redeem Gift Card</h6>
            </div>
          </div>

        </div>
        <SideBarRight />


      </div>
    </Div>
  )
}

export default Payment