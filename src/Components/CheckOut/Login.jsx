import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Div } from "../StyledComponents/NykaaStyles";
import { useDispatch, useSelector } from "react-redux";
import Nav from './Nav'
import { getCartData, setUser } from "../../Redux/action";

import { v4 } from 'uuid';
import { save } from "../Globals/CommonFunctions";

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const cartProducts = useSelector((state) => state.cartProducts);
    const { amount } = useSelector(state => state.user);
    useEffect(() => {
        dispatch(getCartData());
    }, []);

    function loginHandler() {
        const payload = { id: v4() };
        save('http://localhost:3005/users', payload);
        dispatch(setUser(payload))
        history('/address');
    }
    return (
        <Div >
            <Nav active="login" login={false} />
            <div className="row">
                <div className="col-md-4 col1">
                    <ul className='tabs'>
                        <li className='active'>Login/Register</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <h5>Login or Register</h5>
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
                        <div className="button2" onClick={loginHandler}>CONTINUE AS GUEST &gt;</div>
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

                    </div>
                </div>

            </div>
        </Div>
    )
}

export default Login