import React from "react";
import Gift from "./Gift.PNG";
import G from "./G.PNG";
import Google from "./Google.PNG";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { API_KEY, CL_ID } from "../../config";
import { getCartData } from "../../Redux/action";
import { genPassword } from "./passwordGen";

const Div = styled.div`
    top: 0;
    width: 100%;
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

        & > .back {
            display: inline-block;
            font-size: 22px;
            margin: -15px;
            margin-bottom: 10px;
        }

        & > .heading {
            font-size: 35px;
            font-weight: 700;
        }

        & > p {
            color: rgb(92, 104, 116);
            font-size: 17px;
            letter-spacing: 0.2px;

            & > span {
                color: rgb(92, 104, 116);
                text-decoration: underline;
            }
        }

        & > hr {
            border: none;
            background: rgb(214, 217, 220);
            height: 0.5px;
        }

        & > .lgn1 {
            margin-top: 25px;
            border: none;
            color: white;
            width: 100%;
            padding: 10px;
            font-size: 19px;
            border-radius: 5px;
            background-color: rgb(252, 39, 121);
        }

        & > .lgn2 {
            margin-top: 20px;
            display: flex;
            border-radius: 5px;
            background-color: white;
            border: 1px solid rgb(214, 217, 220);
            justify-content: center;

            & > img {
                width: 13%;
            }
            & > img:nth-child(2) {
                padding: 6px;
                padding-top: 9px;
                width: 25%;
            }
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

export const Login = () => {
    const last = useSelector((state) => state.last);
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const goBack = () => {
        Navigate(`${last}`);
    };

    const inputOpen = () => {
        Navigate("/verify");
    };

    const googleAuth = (req) => {
        let body = {
            id: req.profileObj.email,
        };
        axios.post(`${API_KEY}/signIn`, body).then((res) => {
            if (res.data.length === 0) {
                let genPass = genPassword();
                let details = {
                    name: req.profileObj.name,
                    email: req.profileObj.email,
                    phoneNumber: "-1",
                    password: genPass,
                };
                axios.post(`${API_KEY}/signUp`, details).then((res) => {
                    if (res.data.length === 0) {
                        alert("Something Went Wrong");
                        Navigate("/login");
                    } else {
                        alert("Register Successful");
                        alert("Login Successful");
                        localStorage.setItem("isLogin", true);
                        let data = { ...res.data[0] };
                        delete data.password;
                        localStorage.setItem("loginData", JSON.stringify(data));
                        dispatch(getCartData());
                        Navigate(`${last}`);
                    }
                });
            } else {
                alert("Login Successful");
                let data = { ...res.data[0] };
                delete data.password;
                localStorage.setItem("isLogin", true);
                localStorage.setItem("loginData", JSON.stringify(data));
                dispatch(getCartData());
                Navigate(`${last}`);
            }
        });
    };

    const onFailuresucces = (res) => {
        alert("Facing Issues");
    };
    return (
        <Div>
            <div>
                <div className="back" onClick={goBack}>
                    ✗
                </div>
                <div className="heading">Sign in</div>
                <p>
                    To quickly find your favourites items, saved addresses and
                    payments.
                </p>
                <hr />
                <p>Register and earn 2000 reward points</p>
                <img src={Gift} alt="Gift" />
                <button onClick={inputOpen} className="lgn1">
                    Enter Phone Number or Email
                </button>
                <br />
                <GoogleLogin
                    clientId={CL_ID}
                    render={(renderProps) => (
                        <button className="lgn2" onClick={renderProps.onClick}>
                            <img src={G} alt="G-logo" />
                            <img src={Google} alt="Google-logo" />
                        </button>
                    )}
                    buttonText="Login"
                    onSuccess={googleAuth}
                    onFailure={onFailuresucces}
                    cookiePolicy={"single_host_origin"}
                />

                {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
                <p>
                    By continuing, you agree that you have read and accept
                    <br />
                    our <span>T&Cs</span> and <span>Privacy Policy</span>.
                </p>
            </div>
        </Div>
    );
};
