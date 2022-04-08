import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cart } from "./Cart_Page/Cart";

const Div2 = styled.div`
    background-color: black;
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 12vh;
    z-index: 2;
    padding: auto 5rem;
    font-family: Inter, sans-serif;

    & > Link {
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
    }
`;

const Div = styled.div`
    width: 100%;
    height: 100vh;
    max-height: fit-content;
    max-height: max-content;
    z-index: 3;
    position: fixed;
    display: flex;

    .transparent {
        width: 74%;
        height: 100%;
        opacity: 40%;
        background-color: #000;
    }

    .display {
        width: 26%;
        min-width:400px;
        height: 100%;
        background-color: white;
        margin: 1px;
        border: 1px solid black;
        border-left: none;
        background-color: whitesmoke;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        // text-align: justify;

        & > header {
            width: 24.85%;
            min-width:400px;
            height: 2.6rem;
            display: flex;
            text-align: center;
            background-color: white;
            position: fixed;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
                rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

            & > button {
                margin-left: 1%;
                border: none;
                font-size: 17px;
                color: black;
                background-color: white;
            }
            & > button:nth-child(1) {
                margin-right: 30%;
                font-size: 24px;
                color: rgb(252, 39, 121);
            }
        }

        .display::-webkit-scrollbar {
            display: none;
        }

        & > div {
            margin-top: 3.4rem;
            margin-bottom: 3.4rem;

            & > .total_price {
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

                & > div:nth-child(1) {
                    padding: 0.8rem 0;
                    font-weight: 600;
                    background-color: whitesmoke;
                }

                & > div:nth-child(2) {
                    & > p,
                    & > h3 {
                        display: flex;
                        justify-content: space-between;
                        padding: 0 1rem;
                    }
                    & > p:nth-child(2) {
                        & > span {
                            color: rgb(77, 182, 172);
                        }
                    }
                }

                & > div:nth-child(3) {
                    background-color: white;
                    padding-bottom: 1rem;

                    & > input {
                        margin: 0 0 4% 0px;
                        padding-left: 10px;
                        width: 63%;
                        height: 32px;
                        background-color: whitesmoke;
                        border: none;
                    }

                    & > input:focus {
                        outline: none;
                        border: none;
                    }

                    & > button {
                        height: 35.1px;
                        cursor: pointer;
                        color: rgb(252, 39, 121);
                        font-size: 15px;
                        background-color: whitesmoke;
                        border: none;
                        margin-top: 0.5px;
                    }

                    & > div {
                        width: 100%;
                        height: 2px;
                        background-color: whitesmoke;
                    }
                }
            }
        }

        & > footer {
            width: 24.85%;
            min-width:400px;
            height: 3.3rem;
            position: fixed;
            bottom: 0;
            background-color: whitesmoke;
            display: flex;
            gap: 1px;
            box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
                rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

            & > button:nth-child(1) {
                width: 50%;
                border: none;
                text-align: left;
                padding-left: 1.5rem;
                color: black;
                background-color: white;

                & > p {
                    margin-top: 0em;
                    margin-bottom: 0em;
                }
                & > p:nth-child(2) {
                    font-weight: 600;
                    font-size: 15px;
                    color: rgb(252, 39, 121);
                }
            }
            & > button:nth-child(2) {
                width: 50%;
                font-size: 15px;
                border: none;
                color: white;
                background-color: rgb(252, 39, 121);
            }

            
    }
    @media all and (max-width: 1280px) {
        .transparent {
            width: 70%;
        }
        .display {
            width: 30%;
        }

    }
    @media all and (max-width: 1024px) {
        .transparent {
            width: 60%;
        }
        .display {
            width: 40%;
        }
    }
    @media all and (max-width: 768px) {
        .transparent {
            width: 55%;
        }
        .display {
            width: 45%;
        }
    }
    @media all and (max-width: 480px) {
        .transparent {
            width: 50%;
        }
        .display {
            width: 50%;
        }
    }
`;

export const TempNav = () => {
    const cartProducts = useSelector((state) => state.cartProducts);
    const [showBag, setShowBag] = useState(false);

    let body = document.querySelector("body");

    if (showBag) {
        body.setAttribute("style", "overflow: hidden");
    } else {
        body.setAttribute("style", "overflow: scroll");
    }

    let price = 0;
    let discont = 0;
    let off_price = 0;

    for (let item of cartProducts) {
        price += +item.price * +item.quan;
        discont += +item.price * +item.quan - +item.off_price * +item.quan;
        off_price += +item.off_price * +item.quan;
    }

    return (
        <>
            {showBag && (
                <Div>
                    <div className="transparent"></div>
                    <div className="display">
                        <header>
                            <button onClick={() => setShowBag(false)}>❮</button>{" "}
                            <button>
                                Shopping Bag ({cartProducts.length})
                            </button>
                        </header>
                        <div>
                            <Cart />
                            <div className="total_price">
                                <div>Payment Details</div>
                                <div>
                                    <p>
                                        <span>Bag Total</span>
                                        <span>₹{price}</span>
                                    </p>
                                    <p>
                                        <span>Bag Discount</span>
                                        <span>-₹{discont}</span>
                                    </p>
                                    <p>
                                        <span>Sub Total</span>
                                        <span>₹{off_price}</span>
                                    </p>
                                    <p>
                                        <span>Shipping Charge</span>
                                        <span>🛈 Free</span>
                                    </p>
                                    <h3>
                                        <span>Grand Total</span>
                                        <span>₹{off_price}</span>
                                    </h3>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Have a coupon?"
                                    />
                                    <button>Views Coupon</button>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <footer>
                            <button>
                                <p>Grand Total:</p>
                                <p>₹{off_price}</p>
                            </button>
                            <button>Procced ❯</button>
                        </footer>
                    </div>
                </Div>
            )}
            <Div2>
                <Link to={"./"}>Home</Link>
                <Link to={"./Appliances"}>Products</Link>
                <button onClick={() => setShowBag(true)}>Cart</button>
            </Div2>
        </>
    );
};
