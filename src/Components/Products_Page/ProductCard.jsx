import React, { useState } from "react";
import { addingToBag, showItem, updateQuan } from "../../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StarRatingShow } from "./StarRatings";

import axios from "axios";
import styled from "styled-components";
import { API_KEY } from "../../config";

const Div = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    background-color: rgb(243, 243, 243);

    & .card {
        background-color: #ffffff;
        height: fit-content;
        overflow: hidden;

        @media all and (max-width: 500px) {
            text-align: left;
        }
    }
    & > div > div:nth-child(1) {
        padding: 0 10%;

        @media all and (max-width: 500px) {
            padding: 0%;
            padding-left: 5%;
        }
    }

    & .card > div > div:nth-child(1) {
        text-align: left;
        color: rgb(92, 210, 133);
        font-size: 13.5px;
        padding-top: 5px;
        background-color: #ffffff;
    }

    & img {
        width: 100%;
        object-fit: cover;

        @media all and (max-width: 500px) {
            width: 80%;
        }
    }
    & h4 {
        font-weight: 500;
        font-size: 15px;
    }

    & .rating {
        margin-top: 5px;
        margin-bottom: 5rem;
        display: flex;
        justify-content: center;
        gap: 5px;
        font-size: 13px;
        color: rgb(101, 119, 134);

        @media all and (max-width: 500px) {
            justify-content: left;
            font-size: 10px;
            margin-bottom: 0.5rem;
        }
    }

    & .rating > div:nth-child(2) {
        padding-top: 4px;
    }

    & .price {
        color: rgb(92, 104, 116);
        display: flex;
        justify-content: center;
        font-size: 15px;

        & > div {
            display: flex;
            gap: 5px;
        }

        @media all and (max-width: 500px) {
            margin-top: 2px;
            justify-content: left;
            font-size: 15px;
            display: block;
        }
    }

    & .price > div > span:nth-child(1) {
        text-decoration: line-through;
    }
    & .price > div > span:nth-child(2) {
        font-weight: 600;
        color: black;
    }
    & .price > div > span:nth-child(3) {
        margin-left: 2px;
        color: rgb(0, 137, 69);
    }

    & #btn {
        display: none;
        bottom: 0;
        height: 3rem;

        @media all and (max-width: 500px) {
            height: 2rem;
            display: flex;
        }

        & .btnStatus {
            bottom: 0;
            height: 3rem;
            box-sizing: border-box;

            width: 100%;
            padding: 14px;
            background-color: #f06418;
            justify-content: center;
            padding: auto 0;
            font-size: 17px;
            font-weight: 600;
            color: white;

            @media all and (max-width: 500px) {
                font-size: 12px;
                padding: 9px;
            }

            @media all and (max-width: 500px) {
                height: 2rem;
                display: flex;
            }
        }
    }

    #btn > div {
        width: 100%;
        height: 3rem;
        box-sizing: border-box;

        @media all and (max-width: 500px) {
            height: 2rem;
            margin-bottom: 5px;
        }
    }

    & #btn > div > button {
        border: none;
        background-color: rgb(252, 39, 121);
        color: white;
        font-size: 17px;
        font-weight: 600;
        width: 75%;
        text-transform: uppercase;
        height: 3rem;

        @media all and (max-width: 500px) {
            color: rgb(252, 39, 121);
            background-color: white;
            text-transform: none;
            font-size: 15px;
            text-align: right;
        }
    }

    & #btn > div > button:nth-child(1) {
        background-color: white;
        padding: 10px 10px 5px 10px;
        width: 25%;

        @media all and (max-width: 500px) {
            padding: 5px 10px 5px 5px;
        }
    }
    & #btn > div > button:nth-child(1) > img {
        width: 70%;

        @media all and (max-width: 500px) {
            width: 75%;
        }
    }

    & .title {
        height: 3rem;
    }

    & .card:hover {
        & .rating {
            margin-bottom: 2rem;

            @media all and (max-width: 500px) {
                margin-bottom: 0.5rem;
            }
        }

        & #btn {
            display: flex;
        }
    }

    @media all and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (max-width: 500px) {
        width: 100%;
        grid-gap: 0rem;
    }
`;

export const ProductCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartProducts = useSelector((state) => state.cartProducts);

    //checking current data
    let data;

    const products = useSelector((state) => state.products);
    const filter = useSelector((state) => state.filter);

    if (filter.length === 0) {
        data = products;
    } else {
        data = filter;
    }

    // opening OneItem Page
    const sendItem = (item) => {
        dispatch(showItem(item));

        navigate(`/item/${item.id}`);
    };

    let loginData = JSON.parse(localStorage.getItem("loginData"));

    // Add to cart
    const addtobag = (item) => {
        document.getElementById(`${item._id}`).style.display = "none";
        document.getElementById(`${item.id}`).style.display = "flex";
        document.getElementById("divPopUp").style.display = "flex";
        setTimeout(function () {
            document.getElementById("divPopUp").style.display = "none";
        }, 5000);

        setTimeout(() => {
            document.getElementById(`${item._id}`).style.display = "flex";
            document.getElementById(`${item.id}`).style.display = "none";
        }, 7000);
        for (var i = 0; i < cartProducts.length; i++) {
            if (cartProducts[i].id === item.id) {
                console.log(cartProducts[i]);
                console.log(item);
                changeQuantity(cartProducts[i].quan + 1, cartProducts[i]._id);
                return;
            }
        }

        item.userId = loginData._id;
        item.productId = item._id;

        delete item._id;
        axios
            .post(`${API_KEY}/addtocart`, item)
            .then((res) => dispatch(addingToBag(res.data[0])));
    };

    const changeQuantity = (val, id) => {
        val = parseInt(val);
        console.log(val, typeof id);
        let body = {
            uid: loginData._id,
            pid: id,
            num: val,
        };

        axios
            .post(`${API_KEY}/updateCart`, body)
            .then((res) => dispatch(updateQuan({ val, id })));
    };

    return (
        <>
            <Div>
                {data.map((item) => (
                    <div key={item.id} className="card">
                        <div onClick={() => sendItem(item)}>
                            <div>BESTSELLER</div>
                            <img src={item.image1} alt="product_img" />
                            <div className="title">
                                <h4>{item.card_title}</h4>
                            </div>
                            <div className="price">
                                MRP:
                                <div>
                                    <span>₹{item.price}</span>
                                    <span>₹{item.off_price}</span>
                                    <span>{item.offer}% Off</span>
                                </div>
                            </div>
                            <div className="rating">
                                <StarRatingShow value={`${item.rating}`} />{" "}
                                <div>({item.ratingNum})</div>
                            </div>
                        </div>

                        <div id="btn">
                            <div
                                id={`${item.id}`}
                                className="btnStatus"
                                style={{
                                    display: "none",
                                }}
                            >
                                Added To Bag
                            </div>
                            <div id={`${item._id}`} style={{ display: "flex" }}>
                                <button>
                                    <img
                                        src="https://cdn1.iconfinder.com/data/icons/valentine-s-day-21/100/heart-256.png"
                                        alt="favourite"
                                    />
                                </button>
                                <button onClick={() => addtobag(item)}>
                                    Add To Bag
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Div>
            <div id="divPopUp">
                Product Added To Cart! <span>View Bag</span>
            </div>
        </>
    );
};
