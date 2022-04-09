import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Redux/action";
import { save } from "../Globals/CommonFunctions";
import { Div } from "../StyledComponents/NykaaStyles";
import Nav from './Nav'
const Address = () => {
    const user = useSelector(state => state.user);
    const amount = user.amount;
    const cartProducts = useSelector((state) => state.cartProducts);
    const navigator = useNavigate();
    useEffect(() => {
        if (user.id === '') {
            navigator('/checkout');
        }
    }, []);
    const init = {
        country: "",
        name: "",
        email: "",
        phone: "",
        postalCode: "",
        address: "",
    };
    const [data, setData] = useState(init);
    const dispatch = useDispatch();
    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const payload = { address: data };
        save('http://localhost:3005/users', payload, user.id);
        dispatch(setUser(payload))
        navigator('/payment');
    }
    return (
        <Div >
            <Nav active="address" login={true} />
            <div className="row">
                <div className="col-md-4">
                    <ul className='tabs'>
                        <li className='active'>New Address</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <h5>New Address</h5>
                        <hr />
                        <div className="address">
                            <form onSubmit={handleSubmit}>
                                <input type="text" required onChange={handleChange} name="country" placeholder="Country" />
                                <input type="text" required onChange={handleChange} name="name" placeholder="Name" />
                                <input type="text" required onChange={handleChange} name="email" placeholder="Email" />
                                <input type="text" required onChange={handleChange} name="phone" placeholder="Phone" />
                                <input type="text" required onChange={handleChange} name="postalCode" placeholder="Postal Code" />
                                <textarea name="address" onChange={handleChange} id="address" cols="30" rows="5" placeholder="Address"></textarea>
                            </form>
                            <div onClick={handleSubmit} className="button">SHIP TO THIS ADDRESS  &gt;</div>
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

                    </div>
                </div>

            </div>
        </Div>
    )
}

export default Address