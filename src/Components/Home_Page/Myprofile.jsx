import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { API_KEY } from "../../config";
import { reloadBag } from "../../Redux/action";
import { Navbar2 } from "../navbarComp/Navbar2";
import { Footer } from "./Footer";

const Div = styled.div`
    margin-top: 30px;
    width: 100%;

    & > div {
        width: 80%;
        margin: auto;
        background-color: white;
        padding-top: 25px;

        & > h1 {
            border-bottom: 1px solid red;
        }

        & > div {
            width: 40%;
            display: flex;
            justify-content: space-between;
            margin: auto;
            margin-bottom: 1%;

            & > input {
                width: 60%;
                height: 40px;
                margin-top: 2%;
                border: none;
                outline: none;
                padding: 0px 2%;
                font-size: 16px;
                border-bottom: 1px solid rgb(252, 39, 121);
                background-color: rgb(243, 243, 243);
            }
        }

        & > button {
            width: 30%;
            height: 45px;
            margin: 2% 0;
            font-size: 18px;
            border-radius: 5px;
            color: white;
            background-color: rgb(252, 39, 121);
            border: 1px solid rgb(252, 39, 121);
        }
    }

    @media all and (max-width: 1200px) {
        & > div {
            & > div {
                width: 50%;
            }
        }
    }
    @media all and (max-width: 1000px) {
        & > div {
            & > div {
                width: 60%;
                & > h1 {
                    padding-bottom: 10px;
                }
            }
        }
    }
    @media all and (max-width: 800px) {
        & > div {
            & > div {
                width: 70%;
                & > h1 {
                    padding-bottom: 10px;
                }
            }
        }
    }
    @media all and (max-width: 500px) {
        & > div {
            padding-top: 5px;
            & > h1 {
                padding-bottom: 10px;
            }
            & > div {
                width: 95%;

                & > h3 {
                    font-size: 17px;
                }

                & > input {
                    width: 55%;
                    font-size: 14px;
                }
            }
            & > button {
                width: 60%;
            }
        }
    }
`;

export const Myprofile = () => {
    let loginData = JSON.parse(localStorage.getItem("loginData"));
    const [data, setData] = useState({
        name: loginData.name,
        email: loginData.email,
        phoneNumber: loginData.phoneNumber,
        password: "",
    });

    const Dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleInput = (tar) => {
        const { name } = tar;
        setData({
            ...data,
            [name]: tar.value,
        });
    };

    const updateProfile = () => {
        if (data.password === "") {
            alert("Enter New Password");
            return;
        }

        let body = {
            id: loginData._id,
            Data: data,
        };
        axios.post(`${API_KEY}/updateProfile`, body).then((res) => {
            if (res.data.acknowledged) {
                axios
                    .post(`${API_KEY}/signIn`, { id: data.email })
                    .then((res) => {
                        localStorage.setItem("isLogin", true);
                        localStorage.setItem(
                            "loginData",
                            JSON.stringify(res.data[0])
                        );
                    });
                alert("Update Successful");
            } else {
                alert("Some Error Occured");
            }
        });
    };

    const signOut = () => {
        localStorage.setItem("isLogin", false);
        localStorage.setItem("loginData", JSON.stringify({}));
        Dispatch(reloadBag([]));
        Navigate("/");
    };
    return (
        <>
            <Navbar2 />
            <Div>
                <div>
                    <h1>My Profile</h1>
                    <div>
                        <h3>Name :</h3>
                        <input
                            name="name"
                            type="text"
                            placeholder={loginData.name}
                            onChange={(e) => handleInput(e.target)}
                        />
                    </div>
                    <div>
                        <h3>Email :</h3>
                        <input
                            type="text"
                            name="email"
                            placeholder={loginData.email}
                            onChange={(e) => handleInput(e.target)}
                        />
                    </div>
                    <div>
                        <h3>Phone No. :</h3>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder={loginData.phoneNumber}
                            onChange={(e) => handleInput(e.target)}
                        />
                    </div>
                    <div>
                        <h3>Password :</h3>
                        <input
                            type="text"
                            name="password"
                            placeholder="Update Password"
                            onChange={(e) => handleInput(e.target)}
                        />
                    </div>
                    <button onClick={updateProfile}>UPDATE PROFILE</button>
                    <br />
                    <button
                        style={{
                            color: "rgb(252, 39, 121)",
                            backgroundColor: "rgb(243, 243, 243)",
                        }}
                        onClick={signOut}
                    >
                        SIGN OUT
                    </button>
                </div>
            </Div>
            <Footer />
        </>
    );
};
