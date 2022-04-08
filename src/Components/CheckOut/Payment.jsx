import React, { useRef } from "react";
import { Div } from "../StyledComponents/NykaaStyles";
import Nav from './Nav'

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
              <div className="payment">
                <form>
                  <input type="country" name="cardNumber" placeholder="Card Number" />
                  <p className="text-muted">expiry</p>
                  <div className="expiry">
                    <input type="country" name="MM" placeholder="MM" />
                    <input type="country" name="YY" placeholder="/ YY" />
                    <input type="country" name="CVV" placeholder="CVV" />
                  </div>
                </form>
                <div className="button">SHIP TO THIS ADDRESS  &gt;</div>
              </div>
            </div>
          </div>
          <div id="upi" className="card ">
            <div>
              <h6>BHIM UPI</h6>
              <div className="payment">
                <form>
                  <input type="country" name="cardNumber" placeholder="VPA/UPI ID (eg. 9876543210@upi)" />
                </form>
                <div className="button">Pay 424 Now</div>
              </div>
            </div>
          </div>
          <div id="google" className="card ">
            <div>
              <h6>Google Pay</h6>
              <div className="payment">
                <form>
                  <input type="country" name="cardNumber" placeholder="Enter Mobile Number/ Google Pay UPI ID" />
                </form>
                <div className="button">SEND PAYMENT REQUEST</div>
              </div>
            </div>
          </div>
          <div id="net" className="card ">
            <div>
              <h6>Net Banking</h6>
              <div className="payment">
                <p><i className="fa fa-exclamation-triangle"></i> &nbsp; KOTAK, Canara, Vijaya, Punjab & Sind & Syndicate are down for maintenance. Kindly try other option</p>
                <div className="bamkCards">
                  <div className="row">
                    <img src="/axis.png" className="col-md-4" alt="card1" />
                    <img src="/hdfc.png" className="col-md-4" alt="card1" />
                    <img src="/icic.png" className="col-md-4" alt="card1" />
                  </div>
                  <div className="row">
                    <img src="/kotak.png" className="col-md-4" alt="card1" />
                    <img src="/sbi.png" className="col-md-4" alt="card1" />
                    <img src="/yes.png" className="col-md-4" alt="card1" />
                  </div>
                </div>
                <form>
                  <input type="text" name="otherBank" className="other" placeholder="OTHER BANKS" />
                </form>
                <div className="button">Pay 424 Now</div>
              </div>
            </div>
          </div>

          <div id="mobile" className="card ">
            <div>
              <h6>Mobile Wallets</h6>
              <div className="payment">
                <img src="/paytm.png" alt="card" />
              </div>
            </div>
          </div>

          <div id="gift" className="card ">
            <div>
              <h6>Redeem Gift Card</h6>
              <div className="payment">
                <form>
                  <input type="country" name="gift" placeholder="Gift Card Number" />
                  <input type="country" name="pin" placeholder="PIN" />
                </form>
                <div className="button">Submit</div>
              </div>
            </div>
          </div>

        </div>
        {/* sidebar right */}
        <div className="col-md-4">
          <div className="card">
            <div className='sideHeading'>1 Items in your Bag
              <span>Edit</span>
            </div>
            <div className="products row">
              <img src="/product1.jpg" alt="product" className='col-md-4' />
              <div className="col-md-8">
                <div className="productNmae">Ponds Bright Beauty Vitamin C Face Serum Infused With Lemon .</div>
                <div className="quantity">3ml</div>
                <hr />
                <div className="productFooter row">
                  <div className="qty col-md-6">Qty : 1</div>
                  <div className="price col-md-6">
                    <strike>499</strike>
                    &nbsp;
                    <span>424</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bill">
              <div className="content">
                Sub Total
                <span>424</span>
              </div>
              <div className="content">
                Shipping Charge
                <span>Free</span>
              </div>
              <div className="content">
                Discount
                <span>-0</span>
              </div>
              <div className="content">
                Grand Total
                <span>424</span>
              </div>
            </div>
            <div className="address">
              <div className="heading">
                SHIPPING ADDRESS
                <span>CHANGE</span>
              </div>
              <p>ulb
                MS bhavan Room number 05, First floor, MS Bhavan , near modern pulic school, nathupur, Gurgao , Hariyana - 122002,  Gurgaon  -  122002,  , India</p>
              <div className="subHeading">9897270083</div>
            </div>
          </div>
        </div>


      </div>
    </Div>
  )
}

export default Payment