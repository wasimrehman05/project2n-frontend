import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Div } from './StyledComponents/NykaaStyles';

const ThankYou = () => {
    const user = useSelector(state => state.user);
    const navigator = useNavigate();

    useEffect(() => {
        if (user.id === '') {
            navigator('/checkout');
        }
    }, []);
    const cartProducts = useSelector((state) => state.cartProducts);
    console.log(cartProducts);
    return (
        <Div>
            <div className='thankyou'>
                <h1 className='success'><i className="fa fa-check-circle"></i> Payment Success</h1>
                <ul>
                    <li><strong>Name : </strong> {user.address.name}</li>
                    <li><strong>Eamil : </strong> {user.address.email}</li>
                    <li><strong>Phone : </strong> {user.address.phone}</li>
                    <li><strong>Address : </strong> {user.address.address}</li>
                    <li><strong>PIN : </strong> {user.address.postalCode}</li>
                    <li><strong>Amount : </strong> {user.amount}</li>
                    <li><strong>Payment Type : </strong> {user.paymentType}</li>
                    <li>
                        <strong>Products  </strong>
                        <ul>
                            {
                                cartProducts.map((e, i) => <li key={i}>{e.card_title}</li>)
                            }
                        </ul>
                    </li>

                </ul>
                <h3  className='footer'>Thank you for your payment</h3>
            </div>
        </Div>
    )
}

export default ThankYou;