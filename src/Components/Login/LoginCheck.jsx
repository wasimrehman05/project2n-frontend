import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
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

        & > div {
            display: flex;
            margin-bottom: 10px;

            & > .back {
                display: inline-block;
                font-size: 22px;
                margin-right: 15%;
            }

            & > .heading {
                padding: 7px;
                font-size: 18px;
            }
        }

        & > hr {
            border: none;
            background: rgb(214, 217, 220);
            height: 0.5px;
        }

        & > input {
            width: 99%;
            border: 1px solid rgb(252, 39, 121);
            outline: none;
            border-radius: 3px;
            text-align: center;
            font-size: 15px;
            padding: 13px 0px;
            margin-bottom: 20px;
        }

        & > button {
            margin-top: 150px;
            margin-bottom: 200px;
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

        @media all and (max-width: 500px) {
            margin-top: 10px;
        }
        @media all and (max-width: 300px) {
            margin-top: 0px;
            width: 100%;
        }
    }
`;

export const LoginCheck = () => {
    const last = useSelector((state) => state.last);
    const [data, setData] = useState({});
    const [input, setInput] = useState({
        id: "",
    });
    const [pass, setPass] = useState({
        password: "",
    });
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const handleID = (e) => {
        const { name } = e.target;
        setInput({
            ...input,
            [name]: e.target.value,
        });
    };
    const handlePass = (e) => {
        const { name } = e.target;
        setPass({
            ...pass,
            [name]: e.target.value,
        });
    };

    const goBack = () => {
        Navigate("/login");
    };

    const getData = () => {
        axios.post(`${API_KEY}/signIn`, input).then((res) => {
            if (res.data.length === 0) {
                alert("Register First");
                Navigate("/register");
            } else {
                alert("Get Data Successful");
                setData(res.data[0]);
            }
        });
    };

    const Check = () => {
        if (data.password === pass.password) {
            alert("Login Successful");
            localStorage.setItem("isLogin", true);
            delete data.password;
            localStorage.setItem("loginData", JSON.stringify(data));
            setData({});
            dispatch(getCartData());
            Navigate(`${last}`);
        } else {
            alert("Invalid Credential");
        }
    };
    return (
        <Div>
            <div>
                <div>
                    <div className="back" onClick={goBack}>
                        ✗
                    </div>
                    <div className="heading">LOGIN / REGISTER</div>
                </div>
                <hr />

                {data.name === undefined ? (
                    <input
                        type="text"
                        name="id"
                        onChange={(e) => handleID(e)}
                        placeholder="Enter Email ID or Phone Number"
                        required
                    />
                ) : (
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => handlePass(e)}
                        placeholder="Enter Password"
                        required
                    />
                )}

                {data.name === undefined ? (
                    <button onClick={getData} className="lgn1">
                        PROCEED
                    </button>
                ) : (
                    <button onClick={Check} className="lgn1">
                        PROCEED
                    </button>
                )}
            </div>
        </Div>
    );
};
