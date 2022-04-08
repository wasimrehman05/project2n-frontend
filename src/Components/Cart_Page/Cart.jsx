import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteFromBag, updateQuan } from "../../Redux/action";

const Div = styled.div`
    display: block;
    width: 97%;
    height: 10rem;
    background-color: white;
    margin: 1rem 0.7rem;
    padding-top: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    .card_div1 {
        width: 100%;
        display: flex;

        & > div:nth-child(1) {
            width: 30%;
            background-color: white;

            & > img {
                width: 80%;
            }
        }

        & > div:nth-child(2) {
            width: 60%;
        }

        & > div:nth-child(3) {
            width: 10%;
            background-color: white;

            & > img {
                width: 60%;
            }
        }
    }

    .card_div2 {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;

        & select {
            border: none;
            font-size: 17px;

            option {
                border: none;
                font-size: 18px;
            }
        }
        & select:avtive {
            border: none;
        }
        & select option:disabled {
            display: none;
        }
    }
`;

export const Cart = () => {
    const cartProducts = useSelector((state) => state.cartProducts);

    const dispatch = useDispatch();

    //changing quantities

    const changeQuantity = (val, id) => {
        // console.log(val, id);

        axios
            .patch(`http://localhost:3005/cartProducts/${id}`, {
                quan: val,
            })
            .then((res) => dispatch(updateQuan({ val, id })));
    };

    const deleteItem = (id) => {
        axios
            .delete(`http://localhost:3005/cartProducts/${id}`)
            .then((res) => dispatch(deleteFromBag(id)));
    };

    return (
        <>
            {cartProducts.map((item) => (
                // console.log(item.id);

                <Div key={item.id}>
                    <div className="card_div1">
                        <div>
                            <img src={item.image1} alt="product-img" />
                        </div>
                        <div>{item.card_title}</div>
                        <div>
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-128.png"
                                alt="delete"
                                onClick={() => deleteItem(item.id)}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="card_div2">
                        <div>
                            Quantity:
                            <select
                                name="quan"
                                onChange={(e) =>
                                    changeQuantity(e.target.value, item.id)
                                }
                            >
                                <option
                                    style={{
                                        backgroundColor: "rgb(252, 39, 121)",
                                    }}
                                >
                                    {+item.quan}
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>+
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div>
                            <span
                                style={{
                                    textDecoration: "line-through",
                                    marginRight: "0.5rem",
                                }}
                            >
                                ₹{+item.price * +item.quan}
                            </span>
                            <span>₹{+item.off_price * +item.quan}</span>
                        </div>
                    </div>
                </Div>
            ))}
        </>
    );
};
