import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Div } from "./StyledComponents/NykaaStyles";
import "./thankyou.css";

export const ThankYou = () => {
    const user = useSelector((state) => state.user);
    const Navigate = useNavigate();

    useEffect(() => {
        if (user.number === "") {
            Navigate("/checkout");
        }
    }, []);
    // console.log(cartProducts);

    // let off_price = 0;

    // for (let item of cartProducts) {
    //     off_price += +item.off_price * +item.quan;
    // }
    // console.log(user);
    return (
        <Div>
            <div className="thankyou">
                <h1 className="success">
                    <i className="fa fa-check-circle"></i> Payment Success
                </h1>
                <ul>
                    <li>
                        <strong>Name : </strong> {user.name}
                    </li>
                    <li>
                        <strong>Eamil : </strong> {user.email}
                    </li>
                    <li>
                        <strong>Phone : </strong> {user.number}
                    </li>
                    <li>
                        <strong>Address : </strong> {user.address}
                    </li>
                    <li>
                        <strong>PIN : </strong> {user.pincode}
                    </li>
                </ul>
                <h3 className="footer">Thank you for your payment</h3>
                <button
                    className="homebtn"
                    onClick={() => Navigate("/")}
                    style={{
                        width: "40%",
                        height: "40px",
                        fontSize: "15px",
                        border: "none",
                        color: "white",
                        backgroundColor: "rgb(252, 39, 121)",
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                >
                    Continue Shopping
                </button>
            </div>
        </Div>
    );
};
