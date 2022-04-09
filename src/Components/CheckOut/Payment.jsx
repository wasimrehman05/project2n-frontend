import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Redux/action";
import { save } from "../Globals/CommonFunctions";
import { Div } from "../StyledComponents/NykaaStyles";
import Nav from './Nav'

const Payment = () => {
  const ref = useRef();
  const user = useSelector(state => state.user);
  const amount = user.amount;
  const cartProducts = useSelector((state) => state.cartProducts);

  const navigator = useNavigate();
  useEffect(() => {
    if (user.id === '') {
      navigator('/checkout');
    }
  }, []);
  const dispatch = useDispatch();
  function tabHandler(e) {
    const lis = e.currentTarget.parentNode.childNodes;
    lis.forEach(e => e.classList.remove("active"))
    const elm = e.currentTarget.className;
    ref.current.childNodes.forEach(e => e.style.display = 'none');
    ref.current.querySelector("#" + elm).style.display = 'block';
    e.currentTarget.classList.add("active");
  }
  function handleSubmit(paymentType) {
    const payload = { payment: true, paymentType, amount };
    save('http://localhost:3005/users', payload, user.id);
    dispatch(setUser(payload))
    navigator('/thankyou');
  }
  return (
    <Div>
      <Nav active="payment" login={true} address={user.address.address.substr(0, 15) + ' ...'} />
      <div className="notification">
        <span className="noti-icon">i</span>
        <span>
          Please use a digital payment method & help us ensure contactless
          delivery for your safety
        </span>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ul className='tabs'>
            <li onClick={tabHandler} className="credit active">Credit/Debit Card</li>
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
                  <input type="text" name="cardNumber" placeholder="Card Number" />
                  <p className="text-muted">expiry</p>
                  <div className="expiry">
                    <input type="text" name="MM" placeholder="MM" />
                    <input type="text" name="YY" placeholder="/ YY" />
                    <input type="password" name="CVV" placeholder="CVV" />
                  </div>
                </form>
                <div className="button" onClick={() => handleSubmit('Card')}>SHIP TO THIS ADDRESS  &gt;</div>
              </div>
            </div>
          </div>
          <div id="upi" className="card ">
            <div>
              <h6>BHIM UPI</h6>
              <div className="payment">
                <form>
                  <input type="text" name="cardNumber" placeholder="VPA/UPI ID (eg. 9876543210@upi)" />
                </form>
                <div className="button" onClick={() => handleSubmit('Bhim Upi')}>Pay {amount} Now</div>
              </div>
            </div>
          </div>
          <div id="google" className="card ">
            <div>
              <h6>Google Pay</h6>
              <div className="payment">
                <form>
                  <input type="text" name="cardNumber" placeholder="Enter Mobile Number/ Google Pay UPI ID" />
                </form>
                <div className="button" onClick={() => handleSubmit('Google Pay')}>SEND PAYMENT REQUEST</div>
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
                <div className="button" onClick={() => handleSubmit('Net Banking')}>Pay {amount} Now</div>
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
                  <input type="text" name="gift" placeholder="Gift Card Number" />
                  <input type="text" name="pin" placeholder="PIN" />
                </form>
                <div className="button" onClick={() => handleSubmit('Mobile Wallets')}>Submit</div>
              </div>
            </div>
          </div>

        </div>
        {/* sidebar right */}
        <div className="col-md-4">
          <div className="card">
            <div className='sideHeading'>{cartProducts.length} Items in your Bag
              <span>Edit</span>
            </div>
            {cartProducts.map((e, i) => <div key={i} className="products row">
              <img src={e.image1} alt="product" className='col-md-4' />
              <div className="col-md-8">
                <div className="productNmae">{e.card_title}</div>
                <hr />
                <div className="productFooter row">
                  <div className="qty col-md-6">Qty : {e.quan}</div>
                  <div className="price col-md-6">
                    <strike>{e.off_price}</strike>
                    &nbsp;
                    <span>{e.price}</span>
                  </div>
                </div>
              </div>
            </div>)}

            <div className="bill">
              <div className="content">
                Sub Total
                <span>{amount}</span>
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
                <span>{amount}</span>
              </div>
            </div>
            <div className="address">
              <div className="heading">
                SHIPPING ADDRESS
                <span>CHANGE</span>
              </div>
              <p>
                {user.address.name},
                {user.address.address}
              </p>
              <div className="subHeading">{user.address.phone}</div>
            </div>
          </div>
        </div>


      </div>
    </Div>
  )
}

export default Payment