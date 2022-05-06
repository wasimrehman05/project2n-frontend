import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { getCartData } from "../../Redux/action";
import { API_KEY } from "../../config";

const Div = styled.div`
    top: 0;
    min-height: 95vh;
    text-align: left;

    & > div {
        padding: 30px;
        padding-bottom: 60px;
        margin: auto;
        margin-top: 50px;
        background-color: white;
        border-radius: 15px 15px 0px 0px;
        width: 300px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
            rgb(209, 213, 219) 0px 0px 0px 1px inset;

        & > .head {
            display: flex;
            margin-bottom: 10px;

            & > .back {
                display: inline-block;
                font-size: 22px;
                margin-right: 25%;
            }

            & > .heading {
                padding: 7px;
                font-size: 16px;
                font-weight: 600;
            }
        }

        & > hr {
            border: none;
            background: rgb(214, 217, 220);
            height: 0.5px;
            margin-bottom: 30px;
        }

        & > p {
            text-align: center;
            font-size: 15px;

            & > span {
                color: rgb(252, 39, 121);
            }
        }

        & > .inputbox {
            margin-top: 50px;

            & > .floating-label-group {
                position: relative;
                margin-top: 15px;
                margin-bottom: 25px;
                width: 100%;

                & > .floating-label {
                    font-size: 15px;
                    color: rgb(143, 140, 140);
                    position: absolute;
                    pointer-events: none;
                    top: 10px;
                    left: 0px;
                    transition: all 0.3s ease;
                }

                & > input {
                    width: 100%;
                    height: 30px;
                    border: none;
                    outline: none;
                    font-size: 15px;
                    border-bottom: 1px solid rgb(214, 217, 220);
                }

                & > input:focus ~ .floating-label,
                & > input:not(:focus):valid ~ .floating-label {
                    top: -15px;
                    bottom: 0px;
                    left: 0px;
                    font-size: 12px;
                    opacity: 1;
                    color: rgb(252, 39, 121);
                }

                & > input:focus {
                    border-bottom: 1px solid rgb(252, 39, 121);
                }
            }
        }

        & > button {
            margin-top: 70px;
            margin-bottom: 30px;
            border: none;
            color: white;
            width: 100%;
            padding: 13px;
            font-weight: 600;
            font-size: 15px;
            border-radius: 3px;
            letter-spacing: 2px;
            background-color: rgb(252, 39, 121);
            border: 1px solid rgb(252, 39, 121);
        }
    }
`;

export const Register = () => {
    const last = useSelector((state) => state.last);
    const [input, setInput] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
    });
    const Navigate = useNavigate();

    const handleInput = (e) => {
        const { id } = e.target;
        setInput({
            ...input,
            [id]: e.target.value,
        });
    };
    const goBack = () => {
        Navigate("/verify");
    };

    const signUp = () => {
        console.log(input);
        axios.post(`${API_KEY}/signUn`, input).then((res) => {
            if (res.data.length === 0) {
                alert("Something Went Wrong");
                Navigate("/register");
            } else {
                alert("Register Successful");
                alert("Login Successful");
                localStorage.setItem("isLogin", true);
                localStorage.setItem("loginData", JSON.stringify(res.data[0]));
                getCartData();
                Navigate(`${last}`);
            }
        });
    };
    return (
        <Div>
            <div>
                <div className="head">
                    <div className="back" onClick={goBack}>
                        ✗
                    </div>
                    <div className="heading">REGISTER</div>
                </div>
                <hr />

                <p>
                    Register to Earn <span>2000 Reward Points!</span>
                </p>

                <div className="inputbox">
                    <div className="floating-label-group">
                        <input
                            type="text"
                            id="name"
                            required
                            onChange={(e) => handleInput(e)}
                        />
                        <label className="floating-label">Name</label>
                    </div>
                    <div className="floating-label-group">
                        <input
                            type="number"
                            id="phoneNumber"
                            required
                            onChange={(e) => handleInput(e)}
                        />
                        <label className="floating-label">Phone Number</label>
                    </div>
                    <div className="floating-label-group">
                        <input
                            type="text"
                            id="email"
                            required
                            onChange={(e) => handleInput(e)}
                        />
                        <label className="floating-label">Email Address</label>
                    </div>
                    <div className="floating-label-group">
                        <input
                            type="password"
                            id="password"
                            required
                            onChange={(e) => handleInput(e)}
                        />
                        <label className="floating-label">
                            Create Password
                        </label>
                    </div>
                </div>

                <button onClick={signUp} className="lgn1">
                    REGISTER
                </button>
            </div>
        </Div>
    );
};
